<template>
    <div class="support">
        <h2>CONTACT US</h2>
        <form @submit.prevent="validateBeforeSubmit">
            <div class="flex-container">
                <div class="flex-cell cell-1of3 small-cell-1of1">
                    <div class="flex-container">
                        <div class="flex-cell cell-1of3 small-cell-1of1 cell-x-align-center">
                            <label class="">Name</label>
                        </div>
                        <div class="flex-cell cell-auto small-cell-1of1 cell-x-align-center">
                            <p class="control has-icon has-icon-right">
                                <input name="name" v-model="name" v-validate="'required'" :class="{'input': true }"
                                    type="text" placeholder="YOUR NAME...">
                                <i v-show="errors.has('name')" class="fas fa-exclamation color-danger fa-xs"></i>
                                <span v-show="errors.has('name')" class="color-danger">{{ errors.first('name') }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-container">
                <div class="flex-cell cell-1of3 small-cell-1of1">
                    <div class="flex-container">
                        <div class="flex-cell cell-1of3 small-cell-1of1 cell-x-align-center"><label class="">Email</label>
                        </div>
                        <div class="flex-cell cell-auto small-cell-1of1 cell-x-align-center">
                            <p class="control has-icon has-icon-right">
                                <input name="email" v-model="email" v-validate="'required|email'"
                                    :class="{'input': true }" t ype="text" placeholder="YOUR EMAIL..">
                                <i v-show="errors.has('email')" class="fas fa-exclamation color-danger fa-xs"></i>
                                <span v-show="errors.has('email')"
                                    class="color-danger">{{ errors.first('email') }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-container">
                <div class="flex-cell cell-1of3 small-cell-1of1">
                    <label class="">Message</label>
                    <p class="control has-icon has-icon-right">
                        <textarea name="message" v-model="message" v-validate="'required'" :class="{'input': true }"
                            type="text" placeholder="YOUR TEXT..."></textarea>
                        <i v-show="errors.has('message')" class="fas fa-exclamation color-danger fa-xs"></i>
                        <span v-show="errors.has('message')" class="color-danger">{{ errors.first('message') }}</span>
                    </p>
                </div>
            </div>
            <div class="flex-container support_button">
                <div class="flex-cell cell-1of3 small-cell-1of1">
                    <p class="">
                        <button class="" type="submit">SEND MESSAGE</button>
                    </p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'form-support',
        data: () => ({
            email: '',
            name: '',
            message: ''
        }),
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        // eslint-disable-next-line
                        alert('Form Submitted!');
                        return;
                    }

                    alert('Correct them errors!');
                });
            }
        }
    };
</script>
<style lang="scss">
    $primary: #f45a40;
    $secondary: #7e7f84;

    .support {
        margin-left: 50px;
        color: $secondary;

        input {
            width: 100%;
            color: $secondary;
            min-height: 30px;
        }

        h2 {
            color: $secondary;
        }

        textarea {
            width: 100%;
            min-height: 150px;
        }

        p{
            span{
                font-size: 10pt;
                margin-left: 5px;
            }
        }

        button{
            padding: 10px 30px 10px 30px;
            background-color: $primary;
            color: white;
            font-weight: 500;
            font-size: 12pt;
        }
    }

    .support_button{
        margin-bottom: 20px;
    }
</style>