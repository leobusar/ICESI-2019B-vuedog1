<template>
    <div class="form-wrapper">
        <v-form v-model="valid">
            <v-text-field
                label="Name"
                v-model="name"
                :rules="nameRules">
                </v-text-field>
            <v-text-field label="Email" v-model="email" :rules="emailRules"></v-text-field>
            <v-text-field
                label="Phone"
                v-model="phone"
                :rules="phoneRules"
                required
                mask="(###) ### - ####"
                ></v-text-field>
            <v-btn @click="submit" :disabled="!valid" >Submit</v-btn>
        </v-form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      valid: false,
      nameRules: [
        name => !!name || 'Name is required',
        name => name.length > 4 || 'Name must be longer than 4 chars',
      ],
      emailRules: [
        email => !!email || 'Email is required',
        email => /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) || 'Email must be valid',
      ],
      phoneRules: [
        phone => !!phone || 'Phone is required',
        phone => phone.length > 7 || 'Phone must be longer than 7 digits',

      ],
    };
  },
  methods: {
    submit() {
      console.log(this.name, ' ', this.email, ' ', this.phone);
    },
  },
};
</script>

<style>
.form-wrapper{
    padding: 40px;
    text-align: center;
}

</style>
