// type Product = {
//     category: string
//     description: string
//     id: number
//     image: string
//     price: number
//     rating: Rate
//     title: string
// } | {}
//
// type Rate = {
//     rate: number,
//     count: number
// }

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
        fetchProduct(id: string) {
            nextTick(async () => {
                const { data } = await useFetch<Product>(`${URI}${id}`);
                this.product = data.value!
            })
        }
    }
})