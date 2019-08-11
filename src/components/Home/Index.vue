<template>
	<div>
		<div class="flex-container container-align-center home_slider">
			<div class="flex-cell cell-1of1">
				<div class="slideshow-container">
					<div class="mySlides fade">
						<div class="numbertext"></div>
						<img :src="getSliderUrl('slider1.jpg')" style="width:100%">
					</div>
					<div class="mySlides fade">
						<div class="numbertext"></div>
						<img :src="getSliderUrl('slider2.jpg')" style="width:100%">
					</div>
					<div class="mySlides fade">
						<div class="numbertext"></div>
						<img :src="getSliderUrl('slider3.jpg')" style="width:100%">
					</div>
					<!-- <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
					<a class="next" onclick="plusSlides(1)">&#10095;</a> -->
					<div class="flex-container container-align-end black-opacity home_slider_text">
						<div class="flex-cell cell-1of5">
						</div>
						<div class="flex-cell cell-auto">
							<div class="home_slider_text_box">
								<span class="home_slider_text_title"> right is pink. </span>
								<br />
								<span class="home_slider_text_title"> left is blue </span>
								<br />
								<span>
									Inspired by Brasil's bold colors and matching up to football's on-pitch
									playmakers, these kicks are ready to stand out
								</span>
							</div>
							<button>SHOP BRASIL</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="flex-container container-align-center home_upperprod">
			<div class="flex-cell cell-1of4 home_upperprod_box" v-for="item in upperProducts" v-bind:key="item.id">
				<div class="flex-container">
					<div class="flex-cell cell-1of1">
						<img :src="getImgUrl(item.url)" alt="">
					</div>
				</div>
				<div class="flex-container home_textleft">
					<div class="flex-cell cell-1of1">
						<a href="#">{{item.linkTitle}}</a>
					</div>
				</div>
				<div class="flex-container home_textleft">
					<div class="flex-cell cell-1of1">
						<span>{{item.desc}}</span>
					</div>
				</div>
			</div>
		</div>

		<div class="flex-container container-align-center home_textproducts">
			<div class="flex-cell cell-1of1">
				<p>POPULAR PRODUCTS</p>
			</div>
		</div>

		<div class="flex-container container-align-center home_prod">
			<div class="flex-cell cell-1of5 medium-cell-1of2 small-cell-1of1 home_prod_box" v-for="item in products"
				v-bind:key="item.id">
				<div class="flex-container">
					<div class="flex-cell cell-1of1">
						<i class="fa-xs" :class="{'fa color-warn fa-star' : s == true, 'far fa-star' : s == false}"
							v-for="s in item.stars" v-bind:key="s.$index"></i>
					</div>
				</div>
				<router-link :to="{ name: 'product_details', params: { productId: item.id + '' }}">
					<div class="flex-container container-align-left home_prodimg_box">
						<div class="flex-cell cell-1of5 cell-x-align-end">
							<img :src="getImgUrl(item.imgUrl)" alt="">
						</div>
					</div>
					<div class="flex-container home_prod_name">
						<div class="flex-cell cell-1of1">
							<span>{{item.name}}</span>
						</div>
					</div>
				</router-link>
				<div class="flex-container home_prod_category">
					<div class="flex-cell cell-1of1">
						<span>{{getCategory(item.categoryId).desc}}</span>
					</div>
				</div>
				<div class="flex-container home_prod_desc">
					<div class="flex-cell cell-1of1">
						<span>{{item.desc}}</span>
					</div>
				</div>
				<div class="flex-container home_prod_price">
					<div class="flex-cell cell-auto">
						<span>KR {{item.price}}</span>
					</div>
					<div class="flex-cell cell-1of5">
						<i class="fa fa-sm fa-heart"></i>
						<i class="fa fa-sm fa-plus-circle"></i>
					</div>
				</div>
				<div class="flex-container home_prod_buy">
					<div class="flex-cell cell-1of1">
						<button>BUY NOW</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import jsorReader from "../Axios/jsonReader"
	export default {
		components: {},

		mounted() {
			jsorReader.getUpperProducts().then(response => {
					this.upperProducts = response.data.items;
				})
				.catch(errorResponse => {
					console.log(errorResponse);
				})

			jsorReader.getProducts().then(response => {
					this.products = response.data.items;
					this.categories = response.data.categories;
				})
				.catch(errorResponse => {
					console.log(errorResponse);
				})

			this.showSlides();
		},

		data() {
			return {
				upperProducts: [],
				products: [],
				categories: [],
				slideIndex: 0,
				msTimeout: 4000
			}
		},

		methods: {
			getImgUrl(name) {
				var images = require.context('../../assets/img/products/', false, /\.png$/)
				return images('./' + name)
			},
			getSliderUrl(name) {
				var images = require.context('../../assets/img/', false, /\.jpg$/)
				return images('./' + name)
			},
			getCategory(id) {
				for (var i = 0; i < this.categories.length; i++) {
					if (this.categories[i].id == id)
						return this.categories[i];
				}
			},
			showSlides() {
				var slides = document.getElementsByClassName("mySlides");

				if (slides.length == 0)
					return;

				for (var i = 0; i < slides.length; i++) {
					slides[i].style.display = "none";
				}

				this.slideIndex++;

				if (this.slideIndex > slides.length) {
					this.slideIndex = 1
				}

				slides[this.slideIndex - 1].style.display = "block";
				setTimeout(this.showSlides, this.msTimeout);
			}
		}
	};
</script>

<style lang="scss">
	$primary: #f45a40;
	$secondary: #7e7f84;

	.home_textproducts {
		margin-top: 10px;
		text-align: center;
		font-weight: bold;
	}

	.home_image {
		background-image: url("../../assets/img/homeImage.png");
		width: 1280px;
		height: 1028px;
	}

	.home_upperprod {
		img {
			max-width: 300px;
		}

		a {
			text-align: left;
			text-decoration: none;
			color: $primary;

			&:hover {
				text-decoration: underline;
			}
		}

		span {
			color: $secondary;
			font-size: 10pt
		}
	}

	.home_upperprod_box {
		margin: 40px 35px 10px 35px;
	}

	.home_prod {
		margin-bottom: 20px;

		a {
			text-align: left;
			text-decoration: none;
			color: $primary;

			&:hover {
				text-decoration: underline;
			}
		}

		span {
			color: $secondary;
			font-size: 10pt
		}
	}

	.home_textproducts {
		color: $secondary;
		font-size: 12pt;
	}

	.home_prod_box {
		color: $secondary;
		margin: 12px;

		a:hover {
			text-decoration: none;
			color: $primary;
		}
	}

	.home_prodimg_box {
		min-height: 178px;
	}

	.home_prod_name {
		margin-top: 15px;
		text-transform: uppercase;

		span {
			font-size: 12pt;
		}
	}

	.home_prod_category {
		text-transform: uppercase;

		span {
			font-size: 10pt;
		}
	}

	.home_prod_price {
		margin-top: 10px;

		i {
			margin-left: 2px;
			margin-right: 2px;
		}

		span {
			color: $primary;
			font-size: 10pt;
			font-weight: bold;
		}
	}

	.home_prod_buy {
		margin-top: 5px;

		button {
			width: 100%;
			background-color: $primary;
			color: white;
			padding: 8px 16px;
			font-size: 16px;
		}
	}

	@media all and (max-width: 1279px) {
		.home_slider {
			display: none;
		}
	}

	@media all and (min-width: 1280px) {

		.home_slider_text {
			width: 600px;
			height: 300px;
			z-index: 2;
			position: absolute;
			top: 30%;

			span {
				margin-top: 20px;
				color: white;
				font-size: 12pt;
			}

			span.home_slider_text_title {
				text-transform: uppercase;
				font-size: 40pt;
			}

			button {
				margin-top: 25px;
				width: 30%;
				background-color: $primary;
				color: white;
				padding: 8px 16px;
				font-size: 16px;
			}
		}

		.home_slider_text_box {
			margin-top: 25px;
		}
	}
</style>