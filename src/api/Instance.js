import { create } from 'axios'

// Replace 'YOUR_ACCESS_TOKEN' with the actual token you want to use.
const accessToken =
    '7c785f029c7c863022fbe9df3edf6574361feee31229104b11288d3a4a75601ef6aacc49651d1dcb710bb30add41b988a8fb0aa14983bda2d433b8d02228608a9c30c47c10758c5d50fd04207bbd7cc8bba8f127bc4bd72f5bbaf0d56c83a381952fe5bc84082fef8092fc6e8f7da4c25370319fcff1aa87f4b7bcbe3821429e'

export const Instance = create({
    baseURL: 'https://ku-assets-api.herokuapp.com/api', // Replace with your API's base URL
    headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json', // You can add more hea)ders as needed
    },
})
