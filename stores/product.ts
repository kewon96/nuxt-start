interface Product {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: Rate
    title: string
}

type Rate = {
    rate: number,
    count: number
}

const URI = `https://fakestoreapi.com/products/`;

// export const useProduct = defineStore('product', () => {
//     let products: Array<Product> = []
//     products = fetchProducts()!
//
//     const fetchProduct = async (id: string) => {
//         const { data: product } = await useFetch<Product>(`${URI}/${id}`);
//
//         return product
//     }
//
//
//     return { products, fetchProduct }
// })
export const useProduct = defineStore('product', {
    state: (): {
        products: Product[],
        isLoading: boolean,
    } => ({
        products: [],
        isLoading: false,
    }),
    actions: {
        async fetchProduct() {
            // this.isLoading = true

            await nextTick(async () => {


                const {data} = await useFetch<Product[]>(URI);
                this.products = data.value!
            })

            // this.isLoading = false
        }
    }
})

async function fetchProducts() {
    const { data: products } = await useFetch<Product[]>(URI);

    return products.value;
}