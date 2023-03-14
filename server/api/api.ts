type Currency = {
    code: string,
    value: number
}

type Partial<T> = { [P in keyof T]?: T[P] };
type T2 = Partial<Currency>;

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

// type CurrencyCode = keyof Currency
//
type CurrencyMap = {
    code: Currency,
    [key: string]: Currency
}

export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = getQuery(event);
    //
    // // handle post data
    // const { age } = await readBody(event)

    // api call with private key
    const { data } = await $fetch<CurrencyMap>('https://api.currencyapi.com/v3/latest?apikey=zoK575cuAUpmsNHES9Ck6FlRbTMOtakgOr3b78GI')

    return data
})