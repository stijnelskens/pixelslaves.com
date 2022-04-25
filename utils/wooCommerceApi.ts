import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_API_URL,
  consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_CUSTOMER_API_KEY,
  consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_CLIENT_SECRET,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error) {
    throw new Error(error);
  }
};