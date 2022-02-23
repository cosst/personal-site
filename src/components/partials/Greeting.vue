<template>
  <p>{{ randomGreeting() }}</p>
</template>

<script>
export default {
  name: "greeting",
  data() {
    return {
      Greetings: [
        "Hi friend,",
        "Hey buddy,",
        "What up gangsta?",
        "Yo playa!",
        "Ahoy matey!",
        "Greetings earthling,",
        "Ayoooo whaddup,",
        "Good day sir,",
        "Ello mate,",
        "Sup?!",
        "Hello internet friend,",
        "Hola amigo,",
        "Dear friend,",
        "To whom it may concern:",
        "Howdy-doody!",
        "Howdy,",
        "Hiya,",
        "GOOOOOOD MORNNNINGGG, VIETTTNAAAMMM!",
        "What's crackin'?",
        "Greetings and salutations!",
        "Why, hello there!",
        "Hey boo,",
        "Aloha,",
        "Bonjour!",
        "Hallo,",
        "Hello sunshine,",
        "Howdy partner,",
        "Hey boss,",
        "Hello net-surfer,",
      ],
    };
  },
  methods: {
    randomGreeting() {
      return this.Greetings[Math.floor(Math.random() * this.Greetings.length)];
    },
  },
};
</script>