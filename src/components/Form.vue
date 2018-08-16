<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
                <md-card-header>
                    <div class="md-title">{{action}} task</div>
                </md-card-header>

                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('title')">
                                <label for="title">Title</label>
                                <md-input name="title" id="title" v-model="form.title" md-dense/>
                                <span class="md-error">The title is required</span>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>

                <md-card-actions>
                    <md-button type="submit" class="md-primary">Save</md-button>
                </md-card-actions>
            </md-card>
        </form>
    </div>
</template>

<script>
  import {
    required,
    minLength,
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    props: {
      action: String,
      task: Object,
    },
    data: function() {
      return {
        form: {...this.task} || {
          id: null,
          title: '',
        }
      }
    },
    validations: {
      form: {
        title: {
          required,
          minLength: minLength(3),
        },
      },
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty,
          }
        }
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.$emit('onSubmit', this.form);
        }
      },
    },
  }
</script>

<style scoped>

</style>