
const NAME = "fakestoreapi",
DOMAIN = `https://${NAME}.com`,
PRODUCTS = `${DOMAIN}/products`,
CATEGORIES = `${DOMAIN}/products/categories`,
CATEGORY = `${DOMAIN}/products/category`,
ELECTRONICS = `${DOMAIN}/products/category/electronics?limit=5`,
WCLOTHING = `${DOMAIN}/products/category/women's clothing?limit=5`,
USERS = `${DOMAIN}/users`

export default {
    NAME,
    DOMAIN,
    PRODUCTS,
    CATEGORY,
    CATEGORIES,
    USERS,
    ELECTRONICS,
    WCLOTHING
}