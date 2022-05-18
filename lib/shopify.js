/* eslint-disable no-undef */
const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-07/graphql.json`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }

  try {
    const data = await fetch(URL, options).then(response => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error("Products not fetched")
  }
}

export async function getProductsInCollection() {
  const query = `
  {
    collectionByHandle(handle: "frontpage") {
      title
      products(first: 25) {
        edges {
          node {
            id
            title
            handle
            compareAtPriceRange {
              maxVariantPrice {
                amount
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 16) {
              edges {
                node {
                  originalSrc
                  altText
                }
              }
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const allProducts = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return allProducts
}

export async function getAllProducts() {
  const query = 
  `{
    products(first: 250) {
      edges {
        node {
          handle
          id
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const slugs = response.data.products.edges ? response.data.products.edges : []

  return slugs
}
// Created by Ashique 31 March 2022
export async function getProductsInFootwearCollection() {
  const query = `
  {
      collectionByHandle(handle: "footwear-collection") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              compareAtPriceRange {
                maxVariantPrice {
                  amount
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 16) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    
  }`

  const response = await ShopifyData(query)

  const allProductsFootwear = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return allProductsFootwear
}

// menswear collection for homepage - by Ashique 22 April 2022
export async function getProductsInMenswearCollectionHomePage() {
  const query = `
  {
      collectionByHandle(handle: "menswear-collection-homepage") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              compareAtPriceRange {
                maxVariantPrice {
                  amount
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 16) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    
  }`

  const response = await ShopifyData(query)

  const productsMenswearHomePage = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return productsMenswearHomePage
}

// womenswear collection for homepage - by Ashique 22 April 2022
export async function getProductsInWomenswearCollectionHomePage() {
  const query = `
  {
      collectionByHandle(handle: "womenswear-collection-homepage") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              compareAtPriceRange {
                maxVariantPrice {
                  amount
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 16) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    
  }`

  const response = await ShopifyData(query)

  const productsWomenswearHomePage = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return productsWomenswearHomePage
}

// Created by Ashique 31 March 2022
export async function getProductsInWomenswearCollection() {
  const query = `
  {
      collectionByHandle(handle: "womenswear-collection") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              compareAtPriceRange {
                maxVariantPrice {
                  amount
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 16) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    
  }`

  const response = await ShopifyData(query)

  const allProductsWomenswear = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return allProductsWomenswear
}

// Created by Ashique 31 March 2022
export async function getProductsInMenswearCollection() {
  const query = `
  {
      collectionByHandle(handle: "menswear-collection") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              compareAtPriceRange {
                maxVariantPrice {
                  amount
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 16) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    
  }`

  const response = await ShopifyData(query)

  const allProductsMenswear = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return allProductsMenswear
}

// Created by Ashique 15 April 2022
export async function getProductsInSpringSummerCollection() {
  const query = `
  {
      collectionByHandle(handle: "spring-summer-collection") {
        title
        products(first: 24) {
          edges {
            node {
              id
              title
              handle
              compareAtPriceRange {
                maxVariantPrice {
                  amount
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 16) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    
  }`

  const response = await ShopifyData(query)

  const allProductsSpringSummer = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return allProductsSpringSummer
}

// Created by Ashique 15 April 2022
export async function getProductsInAccessoriesCollection() {
  const query = `
  {
      collectionByHandle(handle: "accessories-collection") {
        title
        products(first: 25) {
          edges {
            node {
              id
              title
              handle
              compareAtPriceRange {
                maxVariantPrice {
                  amount
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 16) {
                edges {
                  node {
                    originalSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }
    
  }`

  const response = await ShopifyData(query)

  const allProductsAccessories = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return allProductsAccessories
}

export async function getProduct(handle) {
  const query = `
  {
    productByHandle(handle: "${handle}") {
    	collections(first: 1) {
      	edges {
          node {
            products(first: 16) {
              edges {
                node {
                  compareAtPriceRange {
                    maxVariantPrice {
                      amount
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                    }
                  }
                  handle
                  title
                  id
                  images(first: 16) {
                    edges {
                      node {
                        originalSrc
                        altText
                      }
                    }
                  }
                }
              }
            }
          }
        }
    	}
      id
      title
      handle
      description
      images(first: 16) {
        edges {
          node {
            originalSrc
            altText
          }
        }
      }
      options {
        name
        values
        id
      }
      variants(first: 25) {
        edges {
          node {
            selectedOptions {
              name
              value
            }
            image {
              originalSrc
              altText
            }
            title
            id
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const product = response.data.productByHandle ? response.data.productByHandle : []

  return product
}

export async function createCheckout(id, quantity) {
  const query = `
    mutation {
      checkoutCreate(input: {
        lineItems: [{ variantId: "${id}", quantity: ${quantity}}]
      }) {
        checkout {
          id
          webUrl
        }
      }
    }`

  const response = await ShopifyData(query)

  const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : []

  return checkout
}

export async function updateCheckout(id, lineItems) {
  const lineItemsObject = lineItems.map(item => {
    return `{
      variantId: "${item.id}",
      quantity:  ${item.variantQuantity}
    }`
  })

  const query = `
  mutation {
    checkoutLineItemsReplace(lineItems: [${lineItemsObject}], checkoutId: "${id}") {
      checkout {
        id
        webUrl
        lineItems(first: 25) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const checkout = response.data.checkoutLineItemsReplace.checkout ? response.data.checkoutLineItemsReplace.checkout : []

  return checkout
}




// eslint-disable-next-line no-unused-vars
export async function recursiveCatalog(cursor = '', initialRequest = true) {
  let data;

  if (cursor !== '') {
    const query = `{
      products(after: "${cursor}", first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }`;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;
      console.log('Cursor: ', cursor);

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
      products(first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    `;

    const response = await ShopifyData(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}