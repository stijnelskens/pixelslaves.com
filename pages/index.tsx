import Layout from '../components/Layout'
import Image from 'next/image';
import { IoLogoTwitch, IoLogoTiktok, IoLogoInstagram, IoLogoTwitter, IoLogoDiscord, IoArrowForward } from 'react-icons/io5';
import Link from 'next/link';
// import { fetchWooCommerceProducts } from '../utils/wooCommerceApi';
// import { Product } from "../interfaces/wooCommerceTypes";

// interface Props {
//   products: Product[];
// }

const IndexPage = () => {
  // if (typeof window !== 'undefined') {
  //   window.matchMedia('(prefers-color-scheme: white)').addEventListener('change', event => {
  //     const colorScheme = event.matches ? true : false;
  //   });
  // }
  // const { products } = props;
  // console.log("--WooCommerce Products: ", products);
  
  return (
    <Layout title="Crew – PixelSlaves.com" header={false}>
      <div className="container">
        <div className="max-w-[225px] mx-auto mt-8 sm:mt-16">
        {typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: white)').matches ? (
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 198 211" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><g fill="#323232"><path d="m0 121.297v.021c-2.182 3.777-4.586 7.917-6.122 10.583-.121-.282-2.384-4.181-2.384-4.181-3.576-6.2-8.182-14.199-13.395-23.27-2.849-4.968-5.879-10.26-9.032-15.735-5.354-9.331-11.051-19.249-16.728-29.147-10.668-18.584-21.316-37.126-29.66-51.629-3.476-6.04-6.546-11.372-9.052-15.736-.565-.99-1.111-1.919-1.616-2.807l18.406 8.504z" transform="translate(104.66 78.629)"></path><path d="m-147.046 8.504h128.64l18.406-8.504h-141.975z" transform="matrix(-1 0 0 1 16.67 68.025)"></path><path d="m0-47.771c-5.94 10.928-11.94 21.432-18.164 32.097-2.384 4.14-4.828 8.321-7.314 12.563-.262.444-.525.889-.788 1.334l-1.03 1.777-6.142-10.301 14.136-26.824z" transform="translate(197.15 86.83)"></path></g><path d="m0-102.755h-120.518l3.919 6.828 3.577 6.181c5.193 9.009 27.498 47.569 41.54 71.848 2.829 4.889 5.313 9.192 7.273 12.565s3.355 5.797 4.041 6.969c0 0-2.344 4.059-5.011 8.685l-69.583-123.397h128.64l6.143 10.301z" transform="translate(169.84 189.605)"></path><path d="m0-16.178-14.137 26.824-5.071-8.504.445-.707c.343-.506.647-.969.929-1.414.465-.727.93-1.393 1.334-2.081.04-.08.101-.161.142-.242.423-.747.848-1.494 1.333-2.383l1.919-3.535h-154.057l-2.121-3.717c-2.829-4.908-5.637-9.797-8.567-14.887l20.891 10.646z" transform="translate(177.85 65.882)"></path><path d="m-91.344 17.281h17.479l53.22-34.008 10.527-17.897z" fill="#323232" transform="matrix(-.842649 .538463 .538463 .842649 77.44 131.998)"></path><path d="m0 47.145 1.212 18.22-5.839-10.1-5.071-8.766c1.899-3.253 9.636-16.726 9.636-16.726h-19.355l-27.639-47.993 18.507 9.412 13.815 28.022 29.886.157z" fill="#323232" transform="translate(114.38 115.595)"></path><path d="m0-83.585-.666 1.172-.243.383-9.718 16.967h-53.117l6.001 10.181h41.277c-7.133 12.302-14.244 24.684-21.417 37.126l-2.384 4.121-7.859 13.635-1.212-18.22 15.152-27.774-29.886-.156-13.815-28.023h63.158z" transform="translate(163.71 180.96)"></path><path d="m-187.464 37.624h22.043l137.441-75.805 13.151-19.411z" fill="#323232" transform="matrix(-.875643 .48296 .48296 .875643 14.83 96.651)"></path><path d="m0-192.321c-27.772 0-52.824 11.629-70.544 30.29h21.947c13.632-9.909 30.439-15.768 48.597-15.768s34.947 5.841 48.578 15.768h21.965c-17.736-18.661-42.789-30.29-70.543-30.29m92.719 67.772c-1.456 2.508-2.965 5.105-4.527 7.805-2 3.491-4.088 7.034-6.193 10.648.491 3.612.737 7.278.737 11.014 0 34.518-21.175 64.124-51.245 76.49l-10.053 17.469v.018l-.579 1c43.684-9.542 76.404-48.445 76.404-94.977 0-10.278-1.597-20.171-4.544-29.467m-115.948 119.673s-4.736-8.297-7.736-13.488c-30.368-12.243-51.789-41.99-51.789-76.718 0-4.069.298-8.051.859-11.962l-7.438-12.909-3.105-5.455c-3.14 9.542-4.825 19.733-4.825 30.326 0 46.672 32.912 85.698 76.825 95.082-.896-1.579-1.825-3.21-2.791-4.876" fill="#ff2d2d" transform="translate(98.37 192.32)"></path></g></svg>
        ) : (
          <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 198 211" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><g fill="#ADADAD"><path d="m0 121.297v.021c-2.182 3.777-4.586 7.917-6.122 10.583-.121-.282-2.384-4.181-2.384-4.181-3.576-6.2-8.182-14.199-13.395-23.27-2.849-4.968-5.879-10.26-9.032-15.735-5.354-9.331-11.051-19.249-16.728-29.147-10.668-18.584-21.316-37.126-29.66-51.629-3.476-6.04-6.546-11.372-9.052-15.736-.565-.99-1.111-1.919-1.616-2.807l18.406 8.504z" transform="translate(104.66 78.629)"></path><path d="m-147.046 8.504h128.64l18.406-8.504h-141.975z" transform="matrix(-1 0 0 1 16.67 68.025)"></path><path d="m0-47.771c-5.94 10.928-11.94 21.432-18.164 32.097-2.384 4.14-4.828 8.321-7.314 12.563-.262.444-.525.889-.788 1.334l-1.03 1.777-6.142-10.301 14.136-26.824z" transform="translate(197.15 86.83)"></path></g><path fill="#E6E6E6" d="m0-102.755h-120.518l3.919 6.828 3.577 6.181c5.193 9.009 27.498 47.569 41.54 71.848 2.829 4.889 5.313 9.192 7.273 12.565s3.355 5.797 4.041 6.969c0 0-2.344 4.059-5.011 8.685l-69.583-123.397h128.64l6.143 10.301z" transform="translate(169.84 189.605)"></path><path fill="#E6E6E6" d="m0-16.178-14.137 26.824-5.071-8.504.445-.707c.343-.506.647-.969.929-1.414.465-.727.93-1.393 1.334-2.081.04-.08.101-.161.142-.242.423-.747.848-1.494 1.333-2.383l1.919-3.535h-154.057l-2.121-3.717c-2.829-4.908-5.637-9.797-8.567-14.887l20.891 10.646z" transform="translate(177.85 65.882)"></path><path d="m-91.344 17.281h17.479l53.22-34.008 10.527-17.897z" fill="#ADADAD" transform="matrix(-.842649 .538463 .538463 .842649 77.44 131.998)"></path><path d="m0 47.145 1.212 18.22-5.839-10.1-5.071-8.766c1.899-3.253 9.636-16.726 9.636-16.726h-19.355l-27.639-47.993 18.507 9.412 13.815 28.022 29.886.157z" fill="#ADADAD" transform="translate(114.38 115.595)"></path><path fill="#E6E6E6" d="m0-83.585-.666 1.172-.243.383-9.718 16.967h-53.117l6.001 10.181h41.277c-7.133 12.302-14.244 24.684-21.417 37.126l-2.384 4.121-7.859 13.635-1.212-18.22 15.152-27.774-29.886-.156-13.815-28.023h63.158z" transform="translate(163.71 180.96)"></path><path d="m-187.464 37.624h22.043l137.441-75.805 13.151-19.411z" fill="#ADADAD" transform="matrix(-.875643 .48296 .48296 .875643 14.83 96.651)"></path><path d="m0-192.321c-27.772 0-52.824 11.629-70.544 30.29h21.947c13.632-9.909 30.439-15.768 48.597-15.768s34.947 5.841 48.578 15.768h21.965c-17.736-18.661-42.789-30.29-70.543-30.29m92.719 67.772c-1.456 2.508-2.965 5.105-4.527 7.805-2 3.491-4.088 7.034-6.193 10.648.491 3.612.737 7.278.737 11.014 0 34.518-21.175 64.124-51.245 76.49l-10.053 17.469v.018l-.579 1c43.684-9.542 76.404-48.445 76.404-94.977 0-10.278-1.597-20.171-4.544-29.467m-115.948 119.673s-4.736-8.297-7.736-13.488c-30.368-12.243-51.789-41.99-51.789-76.718 0-4.069.298-8.051.859-11.962l-7.438-12.909-3.105-5.455c-3.14 9.542-4.825 19.733-4.825 30.326 0 46.672 32.912 85.698 76.825 95.082-.896-1.579-1.825-3.21-2.791-4.876" fill="#ff2d2d" transform="translate(98.37 192.32)"></path></g></svg>
        )}
        </div>
        <h1 className="mt-4 text-4xl font-bold text-center dark:text-white">
          PixelSlaves
        </h1>
        <nav className="mt-6">
          <ul className="flex flex-wrap justify-center">
            <li className="px-2">
              <a href="/" target="_blank" rel="noopener" className="text-3xl dark:text-white hover:text-blue-400">
                <span className="sr-only">Twitter</span>
                <IoLogoTwitter />
              </a>
            </li>
            <li className="px-2">
              <a href="/" target="_blank" rel="noopener" className="text-3xl dark:text-white hover:text-violet-700">
                <span className="sr-only">Twitch</span>
                <IoLogoTwitch />
              </a>
            </li>
            <li className="px-2">
              <a href="/" target="_blank" rel="noopener" className="text-3xl dark:text-white hover:text-orange-400">
                <span className="sr-only">Instagram</span>
                <IoLogoInstagram />
              </a>
            </li>
            <li className="px-2">
              <a href="/" target="_blank" rel="noopener" className="text-3xl dark:text-white hover:text-red-400">
                <span className="sr-only">Tiktok</span>
                <IoLogoTiktok />
              </a>
            </li>
            <li className="px-2">
              <a href="/" target="_blank" rel="noopener" className="text-3xl dark:text-white hover:text-indigo-600">
                <span className="sr-only">Discord</span>
                <IoLogoDiscord />
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-6 text-center">
          <Link href="/crew">
            <a className="inline-flex items-center px-6 py-2 font-medium text-white uppercase bg-red-600 rounded-lg hover:bg-red-800">Check de crew <IoArrowForward className="ml-2" /></a>
          </Link>
        </div>
        <div className="pt-20 pb-12 text-center">
          <h2 className="text-3xl font-medium dark:text-white">Clothing</h2>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 mt-8 md:w-1/3">
              <a href="/" target="_blank" rel="noopener noreferer" className="flex flex-col p-6 border-2 border-gray-200 rounded-lg dark:border-gray-border group">
                <div>
                  <Image src="https://res.cloudinary.com/dg9w1qoqg/image/upload/v1650405308/PixelSlaves/unisex-organic-cotton-t-shirt-black-front-625325613bec6_yac5ex.png" alt="PixelSlaves tshirt black" className="rounded-full" width={350} height={350} />
                </div>
                <div className="mt-4">
                  <span className="inline-block px-6 py-2 font-medium text-white uppercase bg-red-600 rounded-lg group-hover:bg-red-800">Koop nu</span>
                </div>
              </a>
            </div>
            <div className="w-full px-4 mt-8 md:w-1/3">
              <a href="/" target="_blank" rel="noopener noreferer" className="flex flex-col p-6 border-2 border-gray-200 rounded-lg dark:border-gray-border group">
                <div>
                  <Image src="https://res.cloudinary.com/dg9w1qoqg/image/upload/v1650917415/PixelSlaves/unisex-organic-cotton-t-shirt-white-front-6266ffc95d301_tf80si.png" alt="PixelSlaves tshirt white" className="rounded-full" width={350} height={350} />
                </div>
                <div className="mt-4">
                  <span className="inline-block px-6 py-2 font-medium text-white uppercase bg-red-600 rounded-lg group-hover:bg-red-800">Koop nu</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

// export const getStaticProps: GetStaticProps = async () => {
//   const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
//     console.error(error)
//   );

//   if (!wooCommerceProducts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       products: wooCommerceProducts.data,
//     },
//   };
// };

// get static props
// export async function getStaticProps() {
//   const res = await client.getEntries();
//   return {
//     props: {
//       posts: res.items
//     }
//   }
// };

export default IndexPage;
