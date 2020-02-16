<template>
    <div class="d-flex">
        <i
            class="fas fa-star"
            v-for="star in fullStars"
            :key="'full' + star"
        ></i>
        <i class="fas fa-star-half-alt" v-if="halfStar"></i>
        <i
            class="far fa-star"
            v-for="star in emptyStars"
            :key="'empty' + star"
        ></i>
    </div>
</template>

<script>
export default {
    props: {
        rating: Number
    },
    computed: {
        halfStar() {
            const fraction = Math.round(
                (this.rating - Math.floor(this.rating)) * 100
            );
            return fraction > 0 && fraction < 50;
        },
        fullStars() {
            return Math.round(this.rating);
        },
        emptyStars() {
            // Ex : rating = 1.9  => ceil(1.9) EQ 2 | 5 - 2 EQ 3.
            // Render 3 empty stars
            return 5 - Math.ceil(this.rating);
        }
    },
    created() {}
};
</script>
