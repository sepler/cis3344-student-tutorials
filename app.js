const app = new Vue({
  el: '#app',
  data: {
    tutorials: null,
    search: ''
  },
  created: function() {
    window.fetch('tutorials.json')
    .then(response => response.json())
    .then((json) => {
      this.tutorials = json;
      console.log(this.tutorials);
    })
  },
  computed: {
    filteredTutorials() {
      return this.tutorials.filter(tutorial => {
        let found = false;
        if (tutorial.name.toLowerCase().includes(this.search.toLowerCase())) found = true;
        if (tutorial.topic.toLowerCase().includes(this.search.toLowerCase())) found = true;
        return found;
      })
    }
  }
})