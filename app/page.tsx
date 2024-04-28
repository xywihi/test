"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import CardOne from "./ui/cards/card-one";
import CardThree from "./ui/cards/card-three";
import CardTow from "./ui/cards/card-two";
import CardFour from "./ui/cards/card-four";
// import HeaderNav from "./ui/headernav";
// import Footer from "./ui/footer";
import { ListenScroll } from "./lib/util";

type CardInfo= {
      title?: string,
      description?:string,
      tags?: string[],
      duration?: string,
      courseNum?: string,
      progress?: string,
      type: string,
      id: string,
}
type Tab= {
      name: string,
      active:boolean,
      cards: CardInfo[] | any,
      id: number,
}

type ScrollState = {
  isToBottom: boolean,
  isToTop: boolean,
}
export default function Home() {
  const [cardInfoArr] = useState([
    {
      title: "Introduction to programming",
      description:
        "This course covers the most basic concepts in programming using Solidity as an example.",
      tags: ["Beginner"],
      duration: "36 Hour",
      courseNum: "5 Course",
      progress: "45% COMPLETED",
      type: "one",
      id: "card1",
    },
    {
      title: "Moonshot 2023 Summer Hackathon",
      description:
        "This course covers the most basic concepts in programming using Solidity as an example.",
      tags: ["All Tracks", "Solidity", "ZK"],
      funcs: [
        {
          name: "Signup",
          date: "4/15 - 6/15",
        },
        {
          name: "Event",
          date: "6/15 - 7/15",
        },
        {
          name: "Grant size",
          date: "200K",
        },
      ],
      type: "tow",
      id: "card2",
    },
    {
      title: "Web 3.0 Programming Basics",
      description:
        "Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.",
      tags: ["Beginner"],
      duration: "36 Hour",
      courseNum: "5 Course",
      type: "four",
      id: "card3",
    },
    {
      title: "What is Bitcoin",
      duration: "36 Hour",
      imgurl: "/bg1.png",
      type: "three",
      id: "card4",
    },


    {
      title: "Introduction to programming",
      description:
        "This course covers the most basic concepts in programming using Solidity as an example.",
      tags: ["Beginner"],
      duration: "36 Hour",
      courseNum: "5 Course",
      progress: "45% COMPLETED",
      type: "one",
      id: "card5",
    },
    // {
    //   title: "Moonshot 2023 Summer Hackathon",
    //   description:
    //     "This course covers the most basic concepts in programming using Solidity as an example.",
    //   tags: ["All Tracks", "Solidity", "ZK"],
    //   funcs: [
    //     {
    //       name: "Signup",
    //       date: "4/15 - 6/15",
    //     },
    //     {
    //       name: "Event",
    //       date: "6/15 - 7/15",
    //     },
    //     {
    //       name: "Grant size",
    //       date: "200K",
    //     },
    //   ],
    //   type: "tow",
    //   id: "card6",
    // },
    // {
    //   title: "Web 3.0 Programming Basics",
    //   description:
    //     "Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.",
    //   tags: ["Beginner"],
    //   duration: "36 Hour",
    //   courseNum: "5 Course",
    //   type: "four",
    //   id: "card7",
    // },
    // {
    //   title: "Introduction to programming",
    //   description:
    //     "This course covers the most basic concepts in programming using Solidity as an example.",
    //   tags: ["Beginner"],
    //   duration: "36 Hour",
    //   courseNum: "5 Course",
    //   progress: "45% COMPLETED",
    //   type: "one",
    //   id: "card8",
    // },
    // {
    //   title: "Moonshot 2023 Summer Hackathon",
    //   description:
    //     "This course covers the most basic concepts in programming using Solidity as an example.",
    //   tags: ["All Tracks", "Solidity", "ZK"],
    //   funcs: [
    //     {
    //       name: "Signup",
    //       date: "4/15 - 6/15",
    //     },
    //     {
    //       name: "Event",
    //       date: "6/15 - 7/15",
    //     },
    //     {
    //       name: "Grant size",
    //       date: "200K",
    //     },
    //   ],
    //   type: "tow",
    //   id: "card9",
    // },
    // {
    //   title: "Web 3.0 Programming Basics",
    //   description:
    //     "Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.",
    //   tags: ["Beginner"],
    //   duration: "36 Hour",
    //   courseNum: "5 Course",
    //   type: "four",
    //   id: "card10",
    // },
  ]);
  const [currentAddEndNum, setCurrentAddEndNum] = useState(0);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "Syntax",
      active: true,
      cards:[],
    },
    {
      id: 2,
      name: "Guided Project",
      active: false,
      cards:[],
    },
    {
      id: 3,
      name: "Concept Learning",
      active: false,
      cards:[],
    },
    {
      id: 4,
      name: "Teaser",
      active: false,
      cards:[],
    },
  ]);
  const [scrollState, setScrollState] = useState({isToBottom:false,isToTop:true});
  const ref = useRef<any>(null);
  let listenScroll =  new ListenScroll(ref.current)
  useEffect(() => {
    
    handleGetTabCardsArr(1)
  },[])
  const handlePageChange = (type: "add" | "reduce") => {
    switch (type) {
      case "add":
        setCurrentAddEndNum(1);
        break;
      case "reduce":
        setCurrentAddEndNum(currentAddEndNum - 1);
        break;
      default:
        break;
    }
  };
  const handleGetTabCardsArr = (id:number) => {
    const randomNum = Math.floor(Math.random() * 4);
      const newArr:CardInfo[] = Array.from(cardInfoArr).slice(randomNum || 1).map((item:CardInfo)=>{
        item.id = `${item.id}-${Math.random()}`
        return item
      })
      
      const newTabs:Tab[] = tabs.map((item:Tab)=>{
        // console.log("newTabs------",item.id , id)
        if(item.id === id){
          return {...item, active: true,cards:newArr.length === 0 ? cardInfoArr : newArr}
        }else{
          return {...item, active: false,cards:[]}
        }
      })
      // console.log("newTabs",newTabs)
      setTabs(newTabs);

      
      }


  return (
    <main className="flex px-8 min-h-screen flex-col items-center justify-between bg-black2 smallPhone:px-4">
      
      <div className="w-full desktop:w-[calc(1600px-258px)] laptop:w-full  m-auto">
      {/* Trending Now */}
      <div className="mt-[24px]">
        <p className="text-textwhite">{"< / Trending Now >"}</p>
        <div className="relative">
          {/* 卡片组合 */}
          <div id="CardsBox" className="transition-all duration-1000 scroll-px-[40px]" ref={ref} onScroll={e=>listenScroll.getIsToBottom(e.target,'hor',(toBottom:ScrollState)=>{setScrollState(toBottom)})}>
            <div
              
              className={`w-max flex items-center my-8 space-x-9`}
              style={{
                transitionDuration: "0.5s",
                transform: `translateX(${-currentAddEndNum * 466}px)`,
              }}
            >
              {cardInfoArr &&
                cardInfoArr.map((cardInfo, index) => {
                  return cardInfo.type === "one" ? (
                    <CardOne key={cardInfo.id} cardInfo={cardInfo} />
                  ) : cardInfo.type === "tow" ? (
                    <CardTow key={cardInfo.id} cardInfo={cardInfo} />
                  ) : cardInfo.type === "three" ? (
                    <CardThree key={cardInfo.id} cardInfo={cardInfo} />
                  ) : (
                    <CardFour key={cardInfo.id} cardInfo={cardInfo} />
                  );
                })}
            </div>
          </div>
          {/* 滚动按钮 */}
          <div className="w-full absolute top-[calc(50%)] mt-[-24px]">
            <div className="flex items-center justify-between *:w-[48px] h-[48px]">
              <button
                className={clsx(
                  "w-[48px] h-[48px] bg-[black] rounded-full border border-[#676767] text-textwhite hover:bg-[#303030] hover:border-none",
                  {
                    invisible: scrollState.isToTop,
                  }
                )}
                onClick={() => listenScroll.handleScrollByDistance((ref.current.children[0].children[0].clientWidth),'hor','top')}
              >{`${"<"}`}</button>
              <button
                className={clsx(
                  "w-[48px] h-[48px] bg-[black] rounded-full border border-[#676767] text-textwhite hover:bg-[#303030] hover:border-none",
                  {
                    hidden: scrollState.isToBottom,
                  }
                )}
                onClick={() => listenScroll.handleScrollByDistance((ref.current.children[0].children[0].clientWidth),'hor','bottom')}
              >{`${">"}`}</button>
            </div>
          </div>
        </div>
      </div>
      {/* 导航组合 */}
      <div className="mt-8">
        {/* 导航器 */}
        <ul className="overflow-x-auto py-4 flex items-center space-x-16 overscroll-contain whitespace-pre text-textgray border-t border-b border-textgray *:font-[250] *:text-[16px]  ">
        {tabs.map((tab) => (
            <li
              key={tab.id}
              className={clsx("hover:text-textwhite  font-[700]", {'text-textwhite': tab.active})}
            >
              <button onClick={()=>handleGetTabCardsArr(tab.id)}>{tab.active ? `</${tab.name}>` : tab.name}</button>
            </li>
          ))}
        </ul>
        {/* 卡片组合 */}
        <div className="mb-10 laptop:mb-20">
          <div
            className={`min-h-[320px] grid laptop:grid-cols-3 tablet:grid-cols-2 gap-x-[48px] mt-14 *:mb-8`}
          >
            {tabs &&
              tabs.filter((item:Tab)=>item.cards && item.cards.length>0)[0]?.cards.map((cardInfo: any,index:number) => {
                return (
                  <div key={cardInfo.id} className={`opacity-0 motion-safe:animate-zommAnim`} style={{animationDelay:`${index * 0.2}s`}}>
                    {
                      cardInfo.type === "one" ? (
                        <CardOne  cardInfo={cardInfo} />
                      ) : cardInfo.type === "tow" ? (
                        <CardTow cardInfo={cardInfo} />
                      ) : cardInfo.type === "three" ? (
                        <CardThree cardInfo={cardInfo} />
                      ) : (
                        <CardFour cardInfo={cardInfo} />
                      )
                    }
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </div>
    
    </main>
  );
}
