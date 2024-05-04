

const products = [
    {
        id : '1',
        title : 'آیفون',
        price : 100,
        image : '/images/iphone.jpg'
    },
    {
        id : '2',
        title : 'لپ تاپ',
        price : 100,
        image : '/images/laptop.jfif'
    },
    {
        id : '3',
        title : 'دوربین',
        price : 100,
        image : '/images/camera.jfif'
    },
    {
        id : '4',
        title : 'هدفون',
        price : 100,
        image : '/images/headphone.jfif'
    },
    {
        id : '5',
        title : 'نوت بوک',
        price : 100,
        image : '/images/noteBook (1).jfif'
    },
    {
        id : '6',
        title : 'ساعت هوشمند',
        price : 13400,
        image : '/images/smartWatch.jfif'
    },
    {
        id : '7',
        title : ' چراغ قوه',
        price : 1000,
        image : '/images/flashlight.jfif'
    },
    {
        id : '8',
        title : 'کنسول بازی ps5',
        price : 1500,
        image : '/images/ps5.jfif'
    }
]

function getProductData(id){
    let productData = products.find( (item) => item.id === id)
    return productData
}
export { products, getProductData}