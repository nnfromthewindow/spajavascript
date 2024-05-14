
const NAME = "fakestoreapi",
DOMAIN = `https://${NAME}.com`,
PRODUCTS = `${DOMAIN}/products`,
CATEGORIES = `${DOMAIN}/categories`,
ELECTRONICS = `${DOMAIN}/products/category/electronics?limit=5`,
WCLOTHING = `${DOMAIN}/products/category/women's clothing?limit=5`,
USERS = `${DOMAIN}/users`

export default {
    NAME,
    DOMAIN,
    PRODUCTS,
    CATEGORIES,
    USERS,
    ELECTRONICS,
    WCLOTHING
}