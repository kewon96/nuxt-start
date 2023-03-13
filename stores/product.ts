
const URI = `https://fakestoreapi.com/products/`;

export const useProduct = defineStore('product', {
    state: (): {
        products: Product[],
        product: Product,
    } => ({
        products: [],
        product: {}
    }),
    actions: {
        fetchProducts() {
            nextTick(async () => {
                const {data} = await useFetch<Product[]>(URI);
                this.products = data.value!
            })
        },
        async fetchProduct(id: string) {
            const forthFetch = (data: Ref<Product | null>) => {
                if(!data.value) {
                    this.product = {}
                    throw createError({ statusCode: 404, statusMessage: 'Product is not Found', fatal: true })
                }

                this.product = data.value!
            }

            await nextTick(async () => {
                const { data } = await useFetch<Product>(`${URI}${id}`);
                forthFetch(data)
            })


        }
    }
})