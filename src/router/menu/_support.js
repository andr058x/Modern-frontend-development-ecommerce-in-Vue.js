export default {
    path: "/support",
    name: "support",
    component: function(resolve) {
      require(["@/components/Layout/AppLayout.vue"], resolve);
    },
    redirect: "/support/index",
    children: [
    {
      path: "index",
      name: "support_index",
      component: function(resolve) {
        require(["@/components/Support/Index.vue"], resolve);
      }
    }
    ]
  };
  