<template>
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="" />
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.username.$touch()"
                    v-model="form.username"
                    class="input is-large"
                    type="text"
                    placeholder="Username"
                  />
                  <div v-if="$v.form.username.$error" class="form-error">
                    <span
                      v-if="!$v.form.username.required"
                      class="help is-danger"
                      >Username is required</span
                    >
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.name.$touch()"
                    v-model="form.name"
                    class="input is-large"
                    type="text"
                    placeholder="Name"
                  />
                  <div v-if="$v.form.name.$error" class="form-error">
                    <span v-if="!$v.form.name.required" class="help is-danger"
                      >Name is required</span
                    >
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.email.$touch()"
                    v-model="form.email"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
                  />
                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger"
                      >Email is required</span
                    >
                    <span v-if="!$v.form.email.email" class="help is-danger"
                      >Email address is not valid</span
                    >
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.avatar"
                    @blur="$v.form.avatar.$touch()"
                    class="input is-large"
                    type="text"
                    placeholder="Avatar"
                    autocomplete=""
                  />
                  <div v-if="$v.form.avatar.$error" class="form-error">
                    <span v-if="!$v.form.avatar.url" class="help is-danger"
                      >Url is not valid</span
                    >
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.password.$touch()"
                    v-model="form.password"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="new-password"
                  />
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span
                      v-if="!$v.form.password.required"
                      class="help is-danger"
                      >Password is required</span
                    >
                    <span
                      v-if="!$v.form.password.minLength"
                      class="help is-danger"
                      >Password length should be 6 letters</span
                    >
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    @blur="$v.form.passwordConfirmation.$touch()"
                    v-model="form.passwordConfirmation"
                    class="input is-large"
                    type="password"
                    placeholder="Password Confirmation"
                    autocomplete="off"
                  />
                  <div
                    v-if="$v.form.passwordConfirmation.$error"
                    class="form-error"
                  >
                    <span
                      v-if="!$v.form.passwordConfirmation.required"
                      class="help is-danger"
                      >Password is required</span
                    >
                    <span
                      v-if="!$v.form.passwordConfirmation.sameAsPassword"
                      class="help is-danger"
                      >Password doesn't matched, try again</span
                    >
                  </div>
                </div>
              </div>
              <button
                :disabled="isFormInvalid"
                @click.prevent="register"
                type="submit"
                class="button is-block is-info is-large is-fullwidth"
              >
                Register
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="/login">Login</router-link> &nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a>Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  required,
  email,
  minLength,
  sameAs,
  url,
} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null,
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
      },
      name: {
        required,
      },
      avatar: {
        url,
      },

      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      passwordConfirmation: {
        required,
        sameAsPassword: sameAs("password"),
      },
    },
  },
  computed: {
    isFormInvalid() {
      return this.$v.form.$invalid;
    },
  },

  methods: {
    register() {
      this.$v.form.$touch();
      this.$store
        .dispatch("auth/registerUser", this.form)
        .then(() => this.$router.push("/login"))
        .catch((err) => {
          const error = err.response.data.errors.message;
          this.$toasted.error(error, {
            theme: "toasted-primary",
            position: "top-center",
            duration: 3500,
          });
        });
    },
  },
};
</script>

<style scoped>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>