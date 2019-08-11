<template>
    <div>
        <div class="flex-container details_top">
            <div class="flex-cell cell-1of2 medium-cell-1of1 details_left">
                <div class="v-flex-container">
                    <div class="flex-cell cell-auto details_left_img">
                        <img :src="getDetailsImgUrl(product.detailBigImgUrl)" alt="">
                    </div>
                    <div class="flex-cell cell-1of5 details_left_smallimg"
                        v-if="product.detailImgUrls && product.detailImgUrls.length > 0">
                        <div class="flex-container">
                            <div class="flex-cell cell-1of3 small-cell-1of1">
                                <img :src="getDetailsImgUrl(product.detailImgUrls[0])" alt="">
                            </div>
                            <div class="flex-cell cell-1of3 small-cell-1of1">
                                <img :src="getDetailsImgUrl(product.detailImgUrls[1])" alt="">
                            </div>
                            <div class="flex-cell cell-1of3 small-cell-1of1">
                                <img :src="getDetailsImgUrl(product.detailImgUrls[2])" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-cell cell-1of2 medium-cell-1of1 details_right">
                <div class="v-flex-container details_right_inner">
                    <div class="flex-cell cell-1of5 details_right_inner_name">
                        <p>{{product.name}}</p>
                    </div>
                    <div class="flex-cell cell-1of5">
                        <div class="flex-container">
                            <div class="flex-cell cell-1of2 medium-cell-1of1 details_right_inner_logo cell-x-align-end">
                                <img :src="getImgUrl(brandLogoImg)" alt="">
                            </div>
                            <div
                                class="flex-cell cell-1of3 medium-cell-1of1 details_right_inner_price details_align_right cell-x-align-end">
                                kr {{product.price}}
                            </div>
                        </div>
                    </div>
                    <div class="flex-cell cell-1of5" v-if="product.originalPrice">
                        <div class="flex-container">
                            <div class="flex-cell cell-1of2 medium-cell-1of1">
                            </div>
                            <div class="flex-cell cell-1of3 medium-cell-1of1 details_align_right">
                                <span class="line-through">kr {{product.originalPrice}}</span> <br>
                                <span class="line-i">You save {{product.percentual}}%</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-cell cell-1of5" style="">
                        <div class="flex-container">
                            <div class="flex-cell cell-1of2 medium-cell-1of1">
                                Size <br>
                                <select name="" id="">
                                    <option value="39">EU 39</option>
                                    <option value="40">EU 40</option>
                                    <option value="41">EU 41</option>
                                    <option value="42" selected="selected">EU 42</option>
                                    <option value="43">EU 43</option>
                                    <option value="44">EU 44</option>
                                    <option value="45">EU 45</option>
                                </select>
                            </div>
                            <div class="flex-cell cell-1of3 medium-cell-1of1 details_align_right">
                                Amount <br>
                                <input type="text" value="1">
                            </div>
                        </div>
                    </div>
                    <div class="flex-cell cell-1of5">
                        <div class="flex-container">
                            <div class="flex-cell cell-1of2 medium-cell-1of1">
                            </div>
                            <div class="flex-cell cell-1of2 medium-cell-1of1">
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-container details_bottom">
            <div class="flex-cell cell-1of1" id="navlist">
                <div class="flex-container container-align-end">
                    <div class="flex-cell cell-1of1">
                        <ul>
                            <li><a href="#" :class="{'current':selectedTab == 1}" @click="selectTab(1)">Description</a>
                            </li>
                            <li><a href="#" :class="{'current':selectedTab == 2}" @click="selectTab(2)">Shipping</a>
                            </li>
                            <li><a href="#" :class="{'current':selectedTab == 3}" @click="selectTab(3)">Sizing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-container container-align-end tab-container" v-if="selectedTab == 1">
            <div class="flex-cell cell-1of2 medium-cell-1of1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>

            <div class="flex-cell cell-1of2 medium-cell-1of1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>
            </div>
        </div>
        <div class="flex-container container-align-end tab-container" v-if="selectedTab == 2">
            <div class="flex-cell cell-1of2 medium-cell-1of1">
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you
                    a complete account of the system, and expound the actual teachings of the great explorer of the
                    truth, the master-builder of
                    human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
                    because those who do not
                    know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                    is there anyone who loves
                    or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil
                    and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes
                    laborious physical exercise,
                    except to obtain some advantage from it? But who has any right to find fault with a man who chooses
                    to enjoy a pleasure that has
                    no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </p>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you
                    a complete account of the system, and expound the actual teachings of the great explorer of the
                    truth, the master-builder of
                    human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
                    because those who do not
                    know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                    is there anyone who loves
                    or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil
                    and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes
                    laborious physical exercise,
                    except to obtain some advantage from it? But who has any right to find fault with a man who chooses
                    to enjoy a pleasure that has
                    no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </p>
            </div>

            <div class="flex-cell cell-1of2 medium-cell-1of1">
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you
                    a complete account of the system, and expound the actual teachings of the great explorer of the
                    truth, the master-builder of
                    human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
                    because those who do not
                    know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                    is there anyone who loves
                    or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil
                    and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes
                    laborious physical exercise,
                    except to obtain some advantage from it? But who has any right to find fault with a man who chooses
                    to enjoy a pleasure that has
                    no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </p>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                    born and I will give you
                    a complete account of the system, and expound the actual teachings of the great explorer of the
                    truth, the master-builder of
                    human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but
                    because those who do not
                    know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again
                    is there anyone who loves
                    or pursues or desires to obtain pain of itself, because it is pain, but because occasionally
                    circumstances occur in which toil
                    and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes
                    laborious physical exercise,
                    except to obtain some advantage from it? But who has any right to find fault with a man who chooses
                    to enjoy a pleasure that has
                    no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </p>
            </div>
        </div>
        <div class="flex-container container-align-end tab-container" v-if="selectedTab == 3">
            <div class="flex-cell cell-1of2 medium-cell-1of1">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore,
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas
                    assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus,
                    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                    repellat.
                </p>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore,
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas
                    assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus,
                    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                    repellat.
                </p>
            </div>

            <div class="flex-cell cell-1of2 medium-cell-1of1">
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore,
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas
                    assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus,
                    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                    repellat.
                </p>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore,
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas
                    assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
                    tenetur a sapiente delectus,
                    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                    repellat.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import jsorReader from "../Axios/jsonReader";
    export default {
        props: {
            productId: String
        },
        mounted() {
            jsorReader.getProducts().then(response => {
                    for (var i = 0; i < response.data.items.length; i++) {
                        if (response.data.items[i].id == this.productId) {
                            this.product = response.data.items[i];
                            break;
                        }
                    }

                    var categories = response.data.categories;
                    var brands = response.data.brands;

                    if (this.product) {
                        this.categoryDesc = this.getCategory(categories, this.product.categoryId).desc;
                        this.brandLogoImg = this.getCategory(brands, this.product.brandLogoId).imgUrl;

                        if (this.product.originalPrice)
                            this.product.percentual = Math.round((this.product.originalPrice - this.product.price) /
                                this.product.price * 100);
                    }
                })
                .catch(errorResponse => {
                    console.log(errorResponse);
                })
        },
        data() {
            return {
                product: {},
                categoryDesc: "",
                brandLogoImg: "",
                selectedTab: 1
            }
        },
        methods: {
            selectTab(id) {
                this.selectedTab = id;
            },
            getCategory(list, id) {
                for (var i = 0; i < list.length; i++) {
                    if (list[i].id == id)
                        return list[i];
                }
            },
            getImgUrl(name) {
                if (!name)
                    return;
                var images = require.context('../../assets/img/products/', false, /\.png$/)
                return images('./' + name)
            },
            getDetailsImgUrl(name) {
                if (!name)
                    return;
                var images = require.context('../../assets/img/products/details/', false, /\.png$/)
                return images('./' + name)
            }
        }
    }
</script>
<style lang="scss">
    $primary: #f45a40;
    $secondary: #7e7f84;

    .details_align_right {
        text-align: right;
    }

    .details_left_smallimg {
        margin-left: 50px;

        img {
            max-width: 180px;
        }
    }

    .details_left_img {
        margin-left: 50px;

        img {
            max-width: 500px;
        }
    }

    .details_bottom {
        margin-top: 50px;
    }

    .details_right {
        color: $secondary;

        button {
            padding: 10px 50px 10px 50px;
            background-color: $primary;
            color: white;
            font-weight: 600;
            font-size: 16pt;
        }

        select {
            height: 30px;
            width: 250px;
        }

        input {
            width: 50px;
            height: 30px;
        }
    }

    .details_right_inner {
        margin-left: 50px;
    }

    .details_right_inner_name {
        text-transform: uppercase;
        font-weight: 600;
    }

    .details_right_inner_logo {
        img {
            max-width: 300px;
        }
    }

    .details_right_inner_price {
        color: black;
        font-weight: 600;
        font-size: 16pt;
    }

    .tab-container {
        color: $secondary;

        p {
            margin-left: 50px;
            margin-right: 50px;
            font-size: 10pt;
        }
    }

    // Nav Tab 

    #navlist {
        padding: 3px 0;
        margin-left: 0;
        border-bottom: 1px solid $secondary;
        font-size: 15px;

        ul {
            margin-bottom: 17px;
        }

        li {
            list-style: none;
            margin: 0;
            display: inline;

            a {
                padding: 3px 0.5em;
                margin-left: 3px;
                border: 1px solid $secondary;
                border-bottom: none;
                background: gainsboro;
                text-decoration: none;
                border-top: 5px solid $primary;
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
                padding: 20px 40px 20px 40px;

                &:link {
                    color: $secondary;
                }

                &:visited {
                    color: $secondary;
                }

                &:hover {
                    color: $primary;
                }

                &.current {
                    background: white;
                    border-bottom: 1px solid white;
                }
            }
        }
    }
</style>