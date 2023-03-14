// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],

    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [
                { name: 'description', content: 'Everything about Nuxt 3', }
            ],
            link: [
                { rel: "stylesheet", href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ]
        }
    },

    imports: {
        dirs: [
            './stores',
        ]
    },

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
    },
})
