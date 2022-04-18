const Header = () => {
  if (typeof window !== 'undefined') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      const dark = true;
    } else {
      const dark = false;
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const dark = event.matches ? true : false;
    });
  }
  
  return (
    <header className="py-8 border-t-4 border-red-500">
      <div className="container">
        <a href="/" className="flex items-center">
          <div className="inline-block w-16 mr-4">
            {typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? (
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 198 211" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><g fill="#323232"><path d="m0 121.297v.021c-2.182 3.777-4.586 7.917-6.122 10.583-.121-.282-2.384-4.181-2.384-4.181-3.576-6.2-8.182-14.199-13.395-23.27-2.849-4.968-5.879-10.26-9.032-15.735-5.354-9.331-11.051-19.249-16.728-29.147-10.668-18.584-21.316-37.126-29.66-51.629-3.476-6.04-6.546-11.372-9.052-15.736-.565-.99-1.111-1.919-1.616-2.807l18.406 8.504z" transform="translate(104.66 78.629)"></path><path d="m-147.046 8.504h128.64l18.406-8.504h-141.975z" transform="matrix(-1 0 0 1 16.67 68.025)"></path><path d="m0-47.771c-5.94 10.928-11.94 21.432-18.164 32.097-2.384 4.14-4.828 8.321-7.314 12.563-.262.444-.525.889-.788 1.334l-1.03 1.777-6.142-10.301 14.136-26.824z" transform="translate(197.15 86.83)"></path></g><path d="m0-102.755h-120.518l3.919 6.828 3.577 6.181c5.193 9.009 27.498 47.569 41.54 71.848 2.829 4.889 5.313 9.192 7.273 12.565s3.355 5.797 4.041 6.969c0 0-2.344 4.059-5.011 8.685l-69.583-123.397h128.64l6.143 10.301z" transform="translate(169.84 189.605)"></path><path d="m0-16.178-14.137 26.824-5.071-8.504.445-.707c.343-.506.647-.969.929-1.414.465-.727.93-1.393 1.334-2.081.04-.08.101-.161.142-.242.423-.747.848-1.494 1.333-2.383l1.919-3.535h-154.057l-2.121-3.717c-2.829-4.908-5.637-9.797-8.567-14.887l20.891 10.646z" transform="translate(177.85 65.882)"></path><path d="m-91.344 17.281h17.479l53.22-34.008 10.527-17.897z" fill="#323232" transform="matrix(-.842649 .538463 .538463 .842649 77.44 131.998)"></path><path d="m0 47.145 1.212 18.22-5.839-10.1-5.071-8.766c1.899-3.253 9.636-16.726 9.636-16.726h-19.355l-27.639-47.993 18.507 9.412 13.815 28.022 29.886.157z" fill="#323232" transform="translate(114.38 115.595)"></path><path d="m0-83.585-.666 1.172-.243.383-9.718 16.967h-53.117l6.001 10.181h41.277c-7.133 12.302-14.244 24.684-21.417 37.126l-2.384 4.121-7.859 13.635-1.212-18.22 15.152-27.774-29.886-.156-13.815-28.023h63.158z" transform="translate(163.71 180.96)"></path><path d="m-187.464 37.624h22.043l137.441-75.805 13.151-19.411z" fill="#323232" transform="matrix(-.875643 .48296 .48296 .875643 14.83 96.651)"></path><path d="m0-192.321c-27.772 0-52.824 11.629-70.544 30.29h21.947c13.632-9.909 30.439-15.768 48.597-15.768s34.947 5.841 48.578 15.768h21.965c-17.736-18.661-42.789-30.29-70.543-30.29m92.719 67.772c-1.456 2.508-2.965 5.105-4.527 7.805-2 3.491-4.088 7.034-6.193 10.648.491 3.612.737 7.278.737 11.014 0 34.518-21.175 64.124-51.245 76.49l-10.053 17.469v.018l-.579 1c43.684-9.542 76.404-48.445 76.404-94.977 0-10.278-1.597-20.171-4.544-29.467m-115.948 119.673s-4.736-8.297-7.736-13.488c-30.368-12.243-51.789-41.99-51.789-76.718 0-4.069.298-8.051.859-11.962l-7.438-12.909-3.105-5.455c-3.14 9.542-4.825 19.733-4.825 30.326 0 46.672 32.912 85.698 76.825 95.082-.896-1.579-1.825-3.21-2.791-4.876" fill="#ff2d2d" transform="translate(98.37 192.32)"></path></g></svg>
            ) : (
              <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 198 211" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><g fill="#fff"><path d="m0 121.297v.021c-2.182 3.777-4.586 7.917-6.122 10.583-.121-.282-2.384-4.181-2.384-4.181-3.576-6.2-8.182-14.199-13.395-23.27-2.849-4.968-5.879-10.26-9.032-15.735-5.354-9.331-11.051-19.249-16.728-29.147-10.668-18.584-21.316-37.126-29.66-51.629-3.476-6.04-6.546-11.372-9.052-15.736-.565-.99-1.111-1.919-1.616-2.807l18.406 8.504z" transform="translate(104.66 78.629)"></path><path d="m-147.046 8.504h128.64l18.406-8.504h-141.975z" transform="matrix(-1 0 0 1 16.67 68.025)"></path><path d="m0-47.771c-5.94 10.928-11.94 21.432-18.164 32.097-2.384 4.14-4.828 8.321-7.314 12.563-.262.444-.525.889-.788 1.334l-1.03 1.777-6.142-10.301 14.136-26.824z" transform="translate(197.15 86.83)"></path></g><path d="m0-102.755h-120.518l3.919 6.828 3.577 6.181c5.193 9.009 27.498 47.569 41.54 71.848 2.829 4.889 5.313 9.192 7.273 12.565s3.355 5.797 4.041 6.969c0 0-2.344 4.059-5.011 8.685l-69.583-123.397h128.64l6.143 10.301z" transform="translate(169.84 189.605)"></path><path d="m0-16.178-14.137 26.824-5.071-8.504.445-.707c.343-.506.647-.969.929-1.414.465-.727.93-1.393 1.334-2.081.04-.08.101-.161.142-.242.423-.747.848-1.494 1.333-2.383l1.919-3.535h-154.057l-2.121-3.717c-2.829-4.908-5.637-9.797-8.567-14.887l20.891 10.646z" transform="translate(177.85 65.882)"></path><path d="m-91.344 17.281h17.479l53.22-34.008 10.527-17.897z" fill="#fff" transform="matrix(-.842649 .538463 .538463 .842649 77.44 131.998)"></path><path d="m0 47.145 1.212 18.22-5.839-10.1-5.071-8.766c1.899-3.253 9.636-16.726 9.636-16.726h-19.355l-27.639-47.993 18.507 9.412 13.815 28.022 29.886.157z" fill="#fff" transform="translate(114.38 115.595)"></path><path d="m0-83.585-.666 1.172-.243.383-9.718 16.967h-53.117l6.001 10.181h41.277c-7.133 12.302-14.244 24.684-21.417 37.126l-2.384 4.121-7.859 13.635-1.212-18.22 15.152-27.774-29.886-.156-13.815-28.023h63.158z" transform="translate(163.71 180.96)"></path><path d="m-187.464 37.624h22.043l137.441-75.805 13.151-19.411z" fill="#fff" transform="matrix(-.875643 .48296 .48296 .875643 14.83 96.651)"></path><path d="m0-192.321c-27.772 0-52.824 11.629-70.544 30.29h21.947c13.632-9.909 30.439-15.768 48.597-15.768s34.947 5.841 48.578 15.768h21.965c-17.736-18.661-42.789-30.29-70.543-30.29m92.719 67.772c-1.456 2.508-2.965 5.105-4.527 7.805-2 3.491-4.088 7.034-6.193 10.648.491 3.612.737 7.278.737 11.014 0 34.518-21.175 64.124-51.245 76.49l-10.053 17.469v.018l-.579 1c43.684-9.542 76.404-48.445 76.404-94.977 0-10.278-1.597-20.171-4.544-29.467m-115.948 119.673s-4.736-8.297-7.736-13.488c-30.368-12.243-51.789-41.99-51.789-76.718 0-4.069.298-8.051.859-11.962l-7.438-12.909-3.105-5.455c-3.14 9.542-4.825 19.733-4.825 30.326 0 46.672 32.912 85.698 76.825 95.082-.896-1.579-1.825-3.21-2.791-4.876" fill="#ff2d2d" transform="translate(98.37 192.32)"></path></g></svg>
            )}
          </div>
          <span className="text-lg font-bold dark:text-white">PixelSlaves</span>
      </a>
      </div>
    </header>
  );
};
export default Header;