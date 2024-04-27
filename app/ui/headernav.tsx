import Link from 'next/link';
import NavLinks from './nav-links';

export default function HeaderNav() {
  return (
    <div className="flex items-center h-[76px] px-3 py-4 md:px-2">
      <Link
        className="mr-6 flex  h-6 items-center"
        href="/"
      >
        <svg width="123" height="14" viewBox="0 0 123 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.7405 0.792114V12.6996H8.76026V8.31042H3.98029V12.6996H0V0.792114H3.98029V5.16416H8.76026V0.792114H12.7405Z" fill="#B2B2B2"/>
            <path d="M21.9189 11.492H20.1327C19.3956 11.492 18.7494 11.9878 18.5596 12.6996H14.4258L17.8962 0.792114H24.1554L27.6258 12.6996H23.492C23.3012 11.9868 22.656 11.492 21.9189 11.492ZM22.3188 8.31143L21.1626 3.93938H20.89L19.7339 8.31143H22.3188Z" fill="#B2B2B2"/>
            <path d="M28.7026 6.73052C28.7026 3.34496 31.4581 0.606628 34.8436 0.606628C36.5955 0.606628 38.1605 1.33766 39.2833 2.49479L36.5107 5.30179C36.1027 4.82521 35.507 4.53643 34.8436 4.53643C33.636 4.53643 32.6495 5.52291 32.6495 6.73052C32.6495 7.93814 33.636 8.94179 34.8436 8.94179C35.4899 8.94179 36.0856 8.65302 36.4763 8.19361L39.2833 10.9834C38.1605 12.1406 36.5783 12.8716 34.8436 12.8716C31.4591 12.8716 28.7026 10.1332 28.7026 6.73052Z" fill="#B2B2B2"/>
            <path d="M46.0677 9.2402L45.3871 10.0742V12.6934H41.4069V0.785889H45.3871V4.66419H45.5063L48.3981 0.785889H52.8721L48.6192 6.07576L53.1437 12.6924H48.4486L46.1525 9.23919H46.0677V9.2402Z" fill="#B2B2B2"/>
            <path d="M72.0646 7.8661V0.920288H76.0449V7.79844C76.0449 9.29584 76.8274 10.0784 78.0351 10.0784C79.2427 10.0784 79.9737 9.29584 79.9737 7.79844V0.920288H83.954V7.8661C83.954 11.8807 81.1308 13.3943 77.9492 13.3943C74.7676 13.3943 72.0636 11.8807 72.0636 7.8661H72.0646Z" fill="#B2B2B2"/>
            <path d="M90.5069 4.05039V5.29234H97.0388V8.43861H90.5069V9.69771H97.0388V12.8278H86.5266V0.920288H97.0388V4.05039H90.5069Z" fill="#B2B2B2"/>
            <path d="M99.4574 9.89652H105.666C106.193 9.89652 106.449 9.65823 106.449 9.26646C106.449 8.87469 106.194 8.65357 105.649 8.65357H102.825C100.835 8.65357 99.2191 7.29248 99.2191 4.89442C99.2191 2.13892 101.107 1.13525 103.013 1.13525H110.055V4.28253H103.983C103.524 4.28253 103.2 4.45216 103.2 4.87725C103.2 5.30234 103.524 5.50731 103.983 5.50731H106.636C108.916 5.50731 110.43 6.85124 110.43 9.2493C110.43 11.5121 108.73 13.0428 106.517 13.0428H99.4069L99.4584 9.89652H99.4574Z" fill="#B2B2B2"/>
            <path d="M115.482 4.28253H111.944V1.13525H123V4.28253H119.462V13.0428H115.482V4.28253Z" fill="#B2B2B2"/>
            <path d="M67.7037 2.40686L67.7016 2.40888C66.5859 1.29517 65.0471 0.60553 63.3528 0.60553L57.4672 0.876138L57.1966 6.76074C57.1966 8.45301 57.8792 9.98575 58.9848 11.0985L58.9868 11.0964C60.1036 12.2202 61.6494 12.9169 63.3528 12.9169L69.2384 12.6463L69.509 6.76175C69.509 5.06039 68.8194 3.52158 67.7037 2.40686ZM66.3193 8.21472C66.0245 8.89022 65.4823 9.43344 64.8058 9.72828C61.9029 10.9934 59.1211 8.21068 60.3863 5.30776C60.6811 4.63227 61.2233 4.08904 61.8998 3.79421C64.8028 2.52904 67.5845 5.3118 66.3193 8.21371V8.21472Z" fill="#B2B2B2"/>
        </svg>

      </Link>
      <div className="flex grow items-center space-x-2 text-white md:space-x-6">
        <NavLinks />
      </div>
      <Link
        className="mr-6 flex  h-6 items-center"
        href="/"
      >
        Avartar
      </Link>
    </div>
  );
}