import Image from "next/image";
export default function CardThree({cardInfo}:{cardInfo:any}) {
    return (
        <div className="relative">
            <svg className="transform scale-[0.99]" width="416" height="278" viewBox="0 0 416 278" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.57233e-07 238.001L9.35541e-07 40.0001C1.02238e-06 17.9087 17.9086 5.94695e-05 40 5.75382e-05L229.45 4.0976e-05C238.544 4.0181e-05 247.367 3.09913 254.464 8.78632L283.573 32.1139C290.67 37.8011 299.493 40.9002 308.587 40.9002L376 40.9002C398.091 40.9002 416 58.8088 416 80.9002L416 238.001C416 260.092 398.091 278.001 376 278.001L40 278.001C17.9086 278.001 -1.56562e-06 260.092 1.57233e-07 238.001Z" fill="url(#paint0_linear_2_522)"/>
            <defs>
            <linearGradient id="paint0_linear_2_522" x1="208" y1="278.001" x2="208" y2="4.28512e-05" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D9E313"/>
            <stop offset="1" stopColor="#3CBC34"/>
            </linearGradient>
            </defs>
            </svg>
            
            <div className="absolute top-0 hover:translate-x-[5px] hover:translate-y-[-5px]">
            {/* <Image className="absolute top-[20px] left-[20px] z-10" width={380} height={238} src="/bg1.png" alt="card"/> */}
            <img className="absolute top-[20px] left-[20px] z-10" width={380} height={238} src="/bg1.png" alt="card"/>
            <div className="relative w-[416px] h-[278px] min-w-[416px] rounded-[36px] bg-[#111111]">
                <div className="h-full w-full flex flex-col justify-between px-10 py-8 pb-4 absolute top-0 left-0">
                <div className="w-[46px] h-[4px] bg-test222 rounded-full"></div>
                <div className="inline-block absolute bottom-[60px]">
                    <p className="font-[700] text-[16px] text-[#EDEDED]">{cardInfo.title}</p>
                </div>
                <div className="inline-block absolute bottom-[14px] right-[80px]">
                    <div className="flex items-center space-x-6">
                        <div className="text-textwhite">
                            <span className="text-[12px] font-[400]">{cardInfo.duration}</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    )
}