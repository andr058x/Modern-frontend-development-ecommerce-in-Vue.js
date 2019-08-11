export default {
    path: "/products",
    name: "products",
    component: function(resolve) {
      require(["@/components/Layout/AppLayout.vue"], resolve);
    },
    redirect: "/home/index",
    children: [
    {
        path: ":productId",
        name: "product_details",
        component: function(resolve) {
          require(["@/components/Products/Details.vue"], resolve);
        },
        props: true
      },
    ]
  };
  