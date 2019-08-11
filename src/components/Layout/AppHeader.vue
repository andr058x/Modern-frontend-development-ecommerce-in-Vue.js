<template>
  <header>
    <div class="flex-container header_top">
      <div class="flex-cell header_logo cell-1of3 medium-cell-1of3 small-cell-1of1 xs-cell-1of1 priority-0">
        <div class="logo"></div>
      </div>
      <div class="flex-cell cell-x-align-center cell-1of2 medium-cell-1of3 small-cell-1of1 xs-cell-1of1 priority-1">
        <div class="header_contacts">
          <a href="#"><i class="fa fa-phone"></i>+45 22660077</a> 
          <a href="#"><i class="fa fa-envelope"></i>Lorem@ipsum.com</a> 
        </div>
      </div>
      <div class="flex-cell cell-1of6 medium-cell-1of3 small-cell-1of1 xs-cell-1of1 priority-2">
        <div class="flex-container header_cartbox">
          <div class="flex-cell cell-1of6 medium-cell-1of3">
            <a href="#"><i class="fa fa-shopping-cart"></i></a>
          </div>
          <span class="flex-cell cell-auto">
            KR 1030 CHECKOUT
          </span>
        </div>
      </div>
    </div>
    <div class="flex-container header_bottom">
      <div class="flex-cell cell-auto medium-cell-1of1 header_navbar">
        <nav>
          <ul class="header_container">
            <li class="header_navitem">
              <router-link :to="{ name: 'home_index'}">
                <a href="#">HOME</a>
              </router-link>
            </li>
            <li class="header_navitem"><a href="#">MEN</a></li>
            <li class="header_navitem"><a href="#">WOMEN</a></li>
            <li class="header_navitem"><a href="#">KIDS</a></li>
            <li class="header_navitem"><a href="#">SALE</a></li>
            <li class="header_navitem"><a href="#">ABOUT US</a></li>
            <li class="header_navitem">
              <router-link :to="{ name: 'support_index'}">
                <a href="#">SUPPORT</a>
              </router-link>
              </li>
          </ul>
        </nav>
      </div>
      <div class="flex-cell cell-1of3 medium-cell-1of2 small-cell-1of1">
        <div class="flex-container header_search container-align-end">
          <div class="flex-cell cell-1of6 medium-cell-1of6 align-right">
            <a href="#"><i class="fa fa-search"></i></a>
          </div>
          <div class="flex-cell cell-1of6 medium-cell-1of6">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-container header_sub"></div>
  </header>
</template>

<script>
  export default {
    name: "AppHeader",
    components: {},
    //   computed: mapGetters({
    //   })
  };
</script>

<style lang="scss">
	$primary: #f45a40;
  $secondary: #7e7f84;
  
  .header_logo {
    text-align: right;
    vertical-align: middle;
    margin-top: 10px;
  }

  .header_contacts{
    text-align: right;
    a{
      margin: 0 30px 0 0;
      color: $secondary;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 10pt;
      i{
        margin: 0 5px 0 5px;
      }
    }
  }

  .header_cartbox {
    background-color: #ededed;
    color: $secondary;
    padding: 15px;

    a {
      color: $secondary;
    }
  }

  .header_cartbox span {
    margin-top: 3px;
    font-size: 10pt;
  }

  .header_navbar ul {
    padding: 0;
    list-style: none;
  }

  .header_navitem a {
    text-decoration: none;
    color: $secondary;
  }

  .header_navitem a:hover {
    color: $primary;
  }

  .header_top {
    min-height: 55px;
    border-bottom: 1px solid $secondary;
  }

  .header_bottom {
    border-bottom: 10px solid $primary;
  }

  .header_sub {
    height: 5px;
    border-bottom: 2px solid $primary;
  }

  .header_search {
    margin-top: 15px;

    input {
      border-radius: 2px;
    }

    a {
      color: $secondary;
    }
  }

  .header_navbar li+li {
    margin-left: 0px;
  }

  .header_container>li {
    flex: 1;
  }

  .header_container {
    display: flex;
    li a:visited{
      background-color: white;
    }
  }

  .header_search {
    flex: 1;
  }

  @media all and (min-width: 801px) {
    .header_navbar li:first-child {
      margin-left: 15px;
    }
  }

  @media all and (max-width: 800px) {
    .header_container {
      flex-wrap: wrap;
    }

    .header_container>li {
      flex-basis: 50%;
    }

    .header_logo {
      text-align: center;
      vertical-align: middle;
      margin-top: 10px;
    }
  }

  @media all and (max-width: 400px) {
    .header_container>li {
      flex-basis: 100%;
    }

    .header_search {
      order: 1;
    }
  }
</style>