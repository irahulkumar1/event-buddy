<template>
  <div class="event-create-form">
    <div class="current-step is-pulled-right">
      {{ currentStep }} of {{ allStepsCount }}
    </div>
    <!-- Form Steps -->
    <keep-alive>
      <component
        :is="currentComponent"
        @stepUpdated="mergeStepData"
        ref="currentComponent"
        :eventToCreate="form"
      />
      <!-- <EventLocation
        v-if="currentStep === 1"
        @stepUpdated="mergeStepData"
        ref="currentComponent"
      />
      <EventDetail
        v-if="currentStep === 2"
        @stepUpdated="mergeStepData"
        ref="currentComponent"
      />
      <EventDescription
        v-if="currentStep === 3"
        @stepUpdated="mergeStepData"
        ref="currentComponent"
      />
      <EventConfirmation v-if="currentStep === 4" :eventToCreate="form" /> -->
    </keep-alive>
    <progress class="progress" :value="currentProgress" max="100">
      {{ currentProgress }}%
    </progress>
    <div class="controll-btns m-b-md">
      <button
        v-if="currentStep !== 1"
        @click="moveToPreviousStep"
        class="button is-primary m-r-sm"
      >
        Back
      </button>
      <button
        v-if="currentStep !== allStepsCount"
        @click="moveToNextStep"
        class="button is-primary"
        :disabled="!canProceed"
      >
        Next
      </button>

      <button v-else @click="emitEventConfirm" class="button is-primary">
        Confirm
      </button>
    </div>
    <!-- Just To See Data in the Form -->
    <!-- <pre><code>{{form}}</code></pre> -->
  </div>
</template>

<script>
import EventLocation from "./EventLocation";
import EventDetail from "./EventDetail";
import EventDescription from "./EventDescription";
import EventConfirmation from "./EventConfirmation";
export default {
  components: {
    EventLocation,
    EventDetail,
    EventDescription,
    EventConfirmation,
  },
  data() {
    return {
      currentStep: 1,

      canProceed: false,
      formSteps: [
        "EventLocation",
        "EventDetail",
        "EventDescription",
        "EventConfirmation",
      ],
      form: {
        location: null,
        title: null,
        startDate: null,
        category: null,
        image: null,
        shortInfo: null,
        description: null,
        timeTo: null,
        timeFrom: null,
      },
    };
  },
  computed: {
    allStepsCount() {
      return this.formSteps.length;
    },
    currentProgress() {
      return (100 / this.allStepsCount) * this.currentStep;
    },
    currentComponent() {
      return this.formSteps[this.currentStep - 1];
    },
  },
  methods: {
    mergeStepData(step) {
      this.form = { ...this.form, ...step.data };
      this.canProceed = step.isValid;
    },
    moveToNextStep() {
      this.currentStep++;

      this.$nextTick(() => {
        this.canProceed = !this.$refs["currentComponent"].$v.$invalid;
      });
    },
    moveToPreviousStep() {
      this.currentStep--;
      this.canProceed = true;
    },
    emitEventConfirm() {
      this.$emit("eventConfirmed", this.form);
    },
  },
};
</script>

<style scoped>
.event-create-form {
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 840px;
  padding: 24px 16px 8px;
  width: 100%;
}
</style>