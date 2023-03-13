type Product = {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: Rate
    title: string
} | {}

type Rate = {
    rate: number,
    count: number
}