export default {
    path: "/home",
    name: "home",
    component: function(resolve) {
      require(["@/components/Layout/AppLayout.vue"], resolve);
    },
    redirect: "/home/index",
    children: [
    {
      path: "index",
      name: "home_index",
      component: function(resolve) {
        require(["@/components/Home/Index.vue"], resolve);
      }
    }
    ]
  };
  