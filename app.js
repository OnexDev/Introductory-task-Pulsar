const App = Vue.createApp({
  data() {
    return {
      itemList: [
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Счётчики воды",
        "Преобразователи интерфейсов Ethernet  RS 485 USB",
        "Преобразователи интерфейсов Ethernet  RS 485 USB",
        "Преобразователи интерфейсов Ethernet  RS 485 USB",
        "Преобразователи интерфейсов Ethernet  RS 485 USB",
        "Преобразователи интерфейсов Ethernet  RS 485 USB",
        "Преобразователи интерфейсов Ethernet  RS 485 USB",
        "Преобразователи интерфейсов Ethernet  RS 485 USB",
      ],
      showMenu: false,
    };
  },
  methods: {
    menuToggle() {
      this.showMenu = !this.showMenu;
      // console.log(this.showMenu);
    },
    splitTo(arr, n) {
      const numChunks = n;
      const chunkLen = (arr.length / numChunks) | 0;
      const chunks = [...Array(numChunks)].map((n, i) => {
        return arr.slice(
          i * chunkLen,
          i === numChunks - 1 ? arr.length : (i + 1) * chunkLen
        );
      });
      return chunks;
    },
  },
});

App.component("smenu", {
  template: "#menu",
  // data() {},
  props: ["propItems", "open"],
  methods: {},
  watch: {},
});

App.component("mbutton", {
  template: "#mbutton",
  props: { text: String, icon: Boolean },
  // data() {},
  methods: {},
  watch: {},
});

App.mount("#app");
