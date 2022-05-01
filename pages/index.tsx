import Layout from '../components/Layout'
import Image from 'next/image';
import { IoLogoTwitch, IoLogoTiktok, IoLogoInstagram, IoLogoTwitter, IoLogoDiscord, IoPeople, IoBag } from 'react-icons/io5';
import Link from 'next/link';

const IndexPage = () => {  
  return (
    <Layout title="PixelSlaves.com" header={false}>
      <div className="border-t-4 border-red-500">
        <div className="container">
          <div className="max-w-[225px] mx-auto mt-8 sm:mt-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.15 210.53"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path fill="#323232" d="M104.66,199.93v0c-2.18,3.78-4.59,7.92-6.12,10.58-.13-.28-2.39-4.18-2.39-4.18-3.57-6.2-8.18-14.2-13.39-23.27-2.85-5-5.88-10.26-9-15.73C68.37,158,62.67,148.1,57,138.2c-10.67-18.58-21.32-37.13-29.66-51.63L18.28,70.83c-.56-1-1.11-1.91-1.61-2.8l18.4,8.5Z"/><polygon fill="#323232" points="163.72 76.53 35.07 76.53 16.67 68.03 158.64 68.03 163.72 76.53"/><path fill="#323232" d="M197.15,39.06C191.21,50,185.21,60.49,179,71.16q-3.59,6.21-7.31,12.56l-.79,1.33-1,1.78-6.15-10.3,14.14-26.82Z"/><path d="M169.84,86.85H49.32l3.92,6.83,3.57,6.18c5.2,9,27.5,47.57,41.54,71.85,2.83,4.89,5.32,9.19,7.28,12.56s3.35,5.8,4,7c0,0-2.35,4.06-5,8.69L35.07,76.53H163.71l6.15,10.3Z"/><path d="M177.85,49.71,163.71,76.53,158.64,68l.45-.71.93-1.41c.46-.73.93-1.4,1.33-2.09,0-.08.1-.16.14-.24.43-.74.85-1.49,1.34-2.38l1.91-3.54h-154L8.57,54,0,39.06,20.89,49.71Z"/><polygon fill="#323232" points="163.72 97.38 148.99 106.79 85.83 106.79 67.32 97.38 163.72 97.38"/><path fill="#323232" d="M114.38,162.74,115.59,181l-5.84-10.1-5.07-8.77c1.9-3.25,9.64-16.72,9.64-16.72H95l-27.64-48,18.51,9.41,13.81,28,29.89.16Z"/><path d="M163.71,97.38l-.66,1.17-.24.38-9.72,17H100l6,10.18h41.28q-10.69,18.45-21.42,37.13l-2.38,4.12L115.59,181l-1.21-18.22L129.53,135l-29.89-.16-13.81-28H149Z"/><polygon fill="#323232" points="197.15 39.06 177.85 49.71 20.89 49.71 0 39.06 197.15 39.06"/><path fill="#ff2d2d" d="M75.14,187.45s-4.73-8.3-7.73-13.49A82.8,82.8,0,0,1,16.48,85.28L9,72.37,5.93,66.91a97.35,97.35,0,0,0,72,125.41C77,190.74,76.11,189.11,75.14,187.45Zm116-119.68q-2.19,3.77-4.53,7.81c-2,3.49-4.08,7-6.19,10.64a82.68,82.68,0,0,1-50.51,87.51L119.81,191.2v0l-.58,1A97.35,97.35,0,0,0,191.09,67.77ZM98.37,0A97,97,0,0,0,27.83,30.29H49.77a82.74,82.74,0,0,1,97.18,0h22A97,97,0,0,0,98.37,0Z"/></g></g></svg>
            {/* <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 198 211" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><g className="fill-logo-black"><path d="m0 121.297v.021c-2.182 3.777-4.586 7.917-6.122 10.583-.121-.282-2.384-4.181-2.384-4.181-3.576-6.2-8.182-14.199-13.395-23.27-2.849-4.968-5.879-10.26-9.032-15.735-5.354-9.331-11.051-19.249-16.728-29.147-10.668-18.584-21.316-37.126-29.66-51.629-3.476-6.04-6.546-11.372-9.052-15.736-.565-.99-1.111-1.919-1.616-2.807l18.406 8.504z" transform="translate(104.66 78.629)"></path><path d="m-147.046 8.504h128.64l18.406-8.504h-141.975z" transform="matrix(-1 0 0 1 16.67 68.025)"></path><path d="m0-47.771c-5.94 10.928-11.94 21.432-18.164 32.097-2.384 4.14-4.828 8.321-7.314 12.563-.262.444-.525.889-.788 1.334l-1.03 1.777-6.142-10.301 14.136-26.824z" transform="translate(197.15 86.83)"></path></g><path className="fill-logo-black-alt-alt" d="m0-102.755h-120.518l3.919 6.828 3.577 6.181c5.193 9.009 27.498 47.569 41.54 71.848 2.829 4.889 5.313 9.192 7.273 12.565s3.355 5.797 4.041 6.969c0 0-2.344 4.059-5.011 8.685l-69.583-123.397h128.64l6.143 10.301z" transform="translate(169.84 189.605)"></path><path className="fill-logo-black-alt-alt" d="m0-16.178-14.137 26.824-5.071-8.504.445-.707c.343-.506.647-.969.929-1.414.465-.727.93-1.393 1.334-2.081.04-.08.101-.161.142-.242.423-.747.848-1.494 1.333-2.383l1.919-3.535h-154.057l-2.121-3.717c-2.829-4.908-5.637-9.797-8.567-14.887l20.891 10.646z" transform="translate(177.85 65.882)"></path><path d="m-91.344 17.281h17.479l53.22-34.008 10.527-17.897z" className="fill-logo-black" transform="matrix(-.842649 .538463 .538463 .842649 77.44 131.998)"></path><path d="m0 47.145 1.212 18.22-5.839-10.1-5.071-8.766c1.899-3.253 9.636-16.726 9.636-16.726h-19.355l-27.639-47.993 18.507 9.412 13.815 28.022 29.886.157z" className="fill-logo-black" transform="translate(114.38 115.595)"></path><path className="fill-logo-black-alt-alt" d="m0-83.585-.666 1.172-.243.383-9.718 16.967h-53.117l6.001 10.181h41.277c-7.133 12.302-14.244 24.684-21.417 37.126l-2.384 4.121-7.859 13.635-1.212-18.22 15.152-27.774-29.886-.156-13.815-28.023h63.158z" transform="translate(163.71 180.96)"></path><path d="m-187.464 37.624h22.043l137.441-75.805 13.151-19.411z" className="fill-logo-black" transform="matrix(-.875643 .48296 .48296 .875643 14.83 96.651)"></path><path d="m0-192.321c-27.772 0-52.824 11.629-70.544 30.29h21.947c13.632-9.909 30.439-15.768 48.597-15.768s34.947 5.841 48.578 15.768h21.965c-17.736-18.661-42.789-30.29-70.543-30.29m92.719 67.772c-1.456 2.508-2.965 5.105-4.527 7.805-2 3.491-4.088 7.034-6.193 10.648.491 3.612.737 7.278.737 11.014 0 34.518-21.175 64.124-51.245 76.49l-10.053 17.469v.018l-.579 1c43.684-9.542 76.404-48.445 76.404-94.977 0-10.278-1.597-20.171-4.544-29.467m-115.948 119.673s-4.736-8.297-7.736-13.488c-30.368-12.243-51.789-41.99-51.789-76.718 0-4.069.298-8.051.859-11.962l-7.438-12.909-3.105-5.455c-3.14 9.542-4.825 19.733-4.825 30.326 0 46.672 32.912 85.698 76.825 95.082-.896-1.579-1.825-3.21-2.791-4.876" fill="#ff2d2d" transform="translate(98.37 192.32)"></path></g></svg> */}
          </div>
          <h1 className="mt-4 text-4xl font-bold text-center">
            PixelSlaves
          </h1>
          <nav className="mt-8">
            <ul className="flex flex-wrap justify-center">
              <li className="px-2">
                <a href="/" target="_blank" rel="noopener" className="text-3xl hover:text-blue-400">
                  <span className="sr-only">Twitter</span>
                  <IoLogoTwitter />
                </a>
              </li>
              <li className="px-2">
                <a href="/" target="_blank" rel="noopener" className="text-3xl hover:text-violet-700">
                  <span className="sr-only">Twitch</span>
                  <IoLogoTwitch />
                </a>
              </li>
              <li className="px-2">
                <a href="/" target="_blank" rel="noopener" className="text-3xl hover:text-orange-400">
                  <span className="sr-only">Instagram</span>
                  <IoLogoInstagram />
                </a>
              </li>
              <li className="px-2">
                <a href="/" target="_blank" rel="noopener" className="text-3xl hover:text-red-400">
                  <span className="sr-only">Tiktok</span>
                  <IoLogoTiktok />
                </a>
              </li>
              <li className="px-2">
                <a href="/" target="_blank" rel="noopener" className="text-3xl hover:text-indigo-600">
                  <span className="sr-only">Discord</span>
                  <IoLogoDiscord />
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-6 text-center">
            <Link href="/crew">
              <a className="inline-flex items-center px-6 py-2 font-medium text-white uppercase transition duration-300 ease-in-out bg-red-600 rounded-lg hover:bg-red-800">Check de crew <IoPeople className="ml-2" /></a>
            </Link>
          </div>
          <div className="pt-20 pb-12 text-center">
            <h2 className="mb-4 text-3xl font-medium">Clothing</h2>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full px-4 mt-8 md:w-1/4">
                <a href="https://shop.pixelslaves.com/product/pixelslaves-basic-tee-wit/" target="_blank" rel="noopener noreferer" className="flex flex-col p-1 group">
                  <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                    <Image src="https://res.cloudinary.com/dg9w1qoqg/image/upload/v1651417016/PixelSlaves/pixelslaves-basic-tee-white.png" alt="PixelSlaves tshirt white" className="rounded-full" width={350} height={350} />
                  </div>
                  <div className="mt-4">
                  <span className="inline-flex items-center px-6 py-2 font-medium text-white uppercase transition duration-300 ease-in-out bg-red-600 rounded-lg group-hover:bg-red-800">Nu kopen <IoBag className="ml-2" /></span>
                  </div>
                </a>
              </div>
              <div className="w-full px-4 mt-8 md:w-1/4">
                <a href="https://shop.pixelslaves.com/product/pixelslaves-basic-tee-zwart/" target="_blank" rel="noopener noreferer" className="flex flex-col p-1 group">
                  <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2">
                    <Image src="https://res.cloudinary.com/dg9w1qoqg/image/upload/v1651417007/PixelSlaves/pixelslaves-basic-tee-black.png" alt="PixelSlaves tshirt black" className="rounded-full" width={350} height={350} />
                  </div>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-6 py-2 font-medium text-white uppercase transition duration-300 ease-in-out bg-red-600 rounded-lg group-hover:bg-red-800">Nu kopen <IoBag className="ml-2" /></span>
                  </div>
                </a>
              </div>
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
