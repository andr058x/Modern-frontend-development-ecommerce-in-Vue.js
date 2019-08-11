<template>
  <footer>
    <div class="flex-container container-align-center footer_top">
      <div class="flex-cell cell-1of2 small-cell-1of1 priority-0 cell-x-align-center footer_top_left">
        <div class="footer_top_left_text"> sign up for exlusive sales and product news </div>
      </div>
      <div class="flex-cell cell-1of2 small-cell-1of1 priority-1 cell-x-align-center footer_top_right">
        <div class="footer_top_right_search">
          <input type="text" placeholder="Lorem@ipsum.com">
          <button>sign up</button>
        </div>
      </div>
    </div>
    <div class="flex-container footer_bottom">
      <div class="flex-cell cell-1of2 medium-cell-1of1 small-cell-1of1 priority-0">
        <div class="flex-container container-align-end">
          <div class="flex-cell cell-1of3 medium-cell-1of1 small-cell-1of1 priority-0 footer_box">
            <h5>OUR STORIES</h5>
            <p>Feel free to visit our stores or contact us.</p>
            <p>Vinegade 109<br />5000 Odense<br />99886622</p>
            <p>Vestergade 910<br />9000 Aalborg<br />96819191</p>
            <br>
            <div>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-google"></i></a>
              <a href="#"><i class="fab fa-vimeo-v"></i></a>
              <a href="#"><i class="fa fa-rss"></i></a>
            </div>
          </div>
          <div class="flex-cell cell-1of3 medium-cell-1of1 small-cell-1of1 priority-1 footer_box">
            <h5>BLOG POSTS</h5>
            <h6>Lorem ipsum hey.</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h6>New sexy sport clothes are here!</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <h6>Summer sales are coming!</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
      <div class="flex-cell cell-1of2 medium-cell-1of1 small-cell-1of1 priority-1">
        <div class="flex-container container-align-start">
          <div class="flex-cell cell-1of3 medium-cell-1of1 small-cell-1of1 priority-0 footer_box">
            <h5>SUPPORT</h5>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Payment</a></li>
              <li><a href="#">Refunds</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Privacy & Security</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Corporate Information</a></li>
            </ul>
          </div>
          <div class="flex-cell cell-1of3 medium-cell-1of1 small-cell-1of1 priority-1 footer_box">
            <h5>&nbsp;</h5>
            <ul>
              <li><a href="#">Sizing</a></li>
              <li><a href="#">Ordering</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Find A Store</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Sign Up & Save</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "AppFooter",
    computed: {
      version() {
        return `1.1.0`;
      }
    }
  };
</script>

<style lang="scss">
	$primary: #f45a40;
	$secondary: #7e7f84;

  .footer_top {
    min-height: 80px;
    color: white;
    background-color: $primary;
    text-transform: uppercase;

    .footer_top_left_text {
      margin-left: 90px;
    }

    input {
      height: 30px;
      width: 250px;
    }

    button {
      background-color: #ff674f;
      padding: 8px 16px;
      font-size: 16px;
      color: white;
      text-transform: uppercase;
    }
  }

  .footer_top_right_search {
    text-align: right;
    margin-right: 90px;
  }

  .footer_bottom {
    min-height: 300px;
    background-color: #2a2d34;
    color: $secondary;

    a {
      color: $secondary;
    }

    a:hover {
      color: #ff674f;
    }

    i {
      margin: 0 15px 0 0px;
    }

    ul {
      padding: 0;
      list-style: none;
    }

    li {
      margin: 3px 0 3px 0;
      a {
        font-size: 10pt;
        text-decoration: none;
        color: $secondary;
      }

      a:hover {
        color: $primary;
      }
    }
  }

  .footer_box {
    margin: 0 40px 0 40px;

  }

  @media all and (min-width: 801px) {}

  @media all and (max-width: 600px) {}

  @media all and (max-width: 400px) {}
</style>