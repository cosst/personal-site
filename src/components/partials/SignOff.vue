<template>
  <p>{{ randomSignOff() }}</p>
</template>

<script>
export default {
  name: "sign-off",
  data() {
    return {
      SignOffs: [
        "Sincerely,",
        "Best,",
        "Cheers,",
        "Warmest regards,",
        "Steaming hot regards,",
        "Respectfully,",
        "Live long and prosper,",
        "Hakuna matata,",
        "May the force be with you,",
        "Stay amazing,",
        "To your continued success,",
        "Have a lovely day,",
        "Ciao,",
        "Until next time,",
        "Peace out,",
        "Catch you on the flip side,",
        "See you later alligator,",
        "Outie 5000,",
        "Hasta la vista,",
        "Kindest regards,",
        "TTYL,",
        "Later bruh,",
        "Kisses,",
        "Many hugs,",
        "Keep up the great work,",
        "Stay golden Pony Boy,",
        "To infinity and beyond,",
        "Stay awesome,",
        "You rock,",
        "Hit me back, just to chat, truly yours, your biggest fan, this is Stan,",
        "Yours forever,",
        "Faithfully yours,",
        "Sincerely yours,",
        "Cordially,",
        "Bye for now,",
        "Warmest wishes,",
        "Farewell sweet website visitor,",
        "Thanks for reading,",
        "So long, farewell, auf Wiedersehen, good night,",
        "Toodles,",
        "Adieu, adieu, to yieu and yieu and yieu,",
        "Au revoir,",
      ],
    };
  },
  methods: {
    randomSignOff() {
      return this.SignOffs[Math.floor(Math.random() * this.SignOffs.length)];
    },
  },
};
</script>