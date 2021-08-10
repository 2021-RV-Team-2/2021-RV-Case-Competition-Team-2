<template>
    <label for="toggle_button">
        <span v-if="isActive" class="toggle__label">On</span>
        <span v-if="! isActive" class="toggle__label">Off</span>

        <input type="checkbox" id="toggle_button" v-model="checkedValue">
        <span class="toggle__switch"></span>
    </label>
</template>
<script>
export default {
    data() {
        return {
            currentState: false
        }
    },

    computed: {
        isActive() {
            return this.currentState;
        },

        checkedValue: {
            get() {
                return this.defaultState
            },
            set(newValue) {
                this.currentState = newValue;
            }
        }
    }
}
</script>