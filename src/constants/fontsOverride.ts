import InterRegular from '@fonts/Inter-Regular.woff2';
import InterLight from '@fonts/Inter-Light.woff2';
import InterMedium from '@fonts/Inter-Medium.woff2';
import InterSemiBold from '@fonts/Inter-SemiBold.woff2';
import InterBold from '@fonts/Inter-Bold.woff2';

export const fontsStatic: string = `
      @font-face {
        font-display: swap;
        font-family: Inter;
        font-weight: 300;
        src: local('Inter-Regular'), url(${InterLight}) format('woff2');
      }

      @font-face {
        font-display: swap;
        font-family: Inter;
        font-weight: 400;
        src: local('Inter-Regular'), url(${InterRegular}) format('woff2');
      }

      @font-face {
        font-display: swap;
        font-family: Inter;
        font-weight: 500;
        src: local('Inter-Regular'), url(${InterMedium}) format('woff2');
      }

      @font-face {
        font-display: swap;
        font-family: Inter;
        font-weight: 600;
        src: local('Inter-Regular'), url(${InterSemiBold}) format('woff2');
      }

      @font-face {
        font-display: swap;
        font-family: Inter;
        font-weight: 700;
        src: local('Inter-Regular'), url(${InterBold}) format('woff2');
      }`;

export const fontsCdn = (() => {
  document.head.innerHTML += `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">`;
})();
