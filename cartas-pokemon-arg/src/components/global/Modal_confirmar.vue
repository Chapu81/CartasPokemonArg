<template>
<div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
        <v-card>
            <v-card-text>
                {{text}}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <template v-for="(btn, key) in buttons">
                    <v-btn
                        :key="key"
                        color="primary"
                        text
                        @click="emit(btn.emit)"
                    >
                        {{btn.text}}
                    </v-btn>
                </template>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
    name: 'modalconfirmar',
    props: ['open', 'text', 'buttons'],

    data: () => ({
        dialog: false,
    }),

    watch: {
        open() {
            this.dialog = true;
        }
    },

    methods: {
        emit_result(result) {
            this.$emit('emit_result', result)
        }
    }
}
</script>

<style scoped>

</style>