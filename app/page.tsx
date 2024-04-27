"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import CardOne from "./ui/cards/card-one";
import CardThree from "./ui/cards/card-three";
import CardTow from "./ui/cards/card-two";
import CardFour from "./ui/cards/card-four";
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
    <>
      {/* Trending Now */}
      <div className="mt-[24px]">
        <p className="text-textwhite">{"< / Trending Now >"}</p>
        <div className="relative">
          {/* 卡片组合 */}
          <div id="CardsBox">
            <div
              className={`flex items-center my-8 space-x-12`}
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
                    invisible: currentAddEndNum === 0,
                  }
                )}
                onClick={() => handlePageChange("reduce")}
              >{`${"<"}`}</button>
              <button
                className={clsx(
                  "w-[48px] h-[48px] bg-[black] rounded-full border border-[#676767] text-textwhite hover:bg-[#303030] hover:border-none",
                  {
                    hidden: currentAddEndNum + 3 === cardInfoArr.length,
                  }
                )}
                onClick={() => handlePageChange("add")}
              >{`${">"}`}</button>
            </div>
          </div>
        </div>
      </div>
      {/* 导航组合 */}
      <div className="mt-8">
        {/* 导航器 */}
        <ul className="py-4 flex items-center space-x-16 text-textgray border-t border-b border-textgray *:font-[250] *:text-[16px]  ">
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
        <div>
          <div
            className={`min-h-[320px] grid grid-cols-3 gap-x-[48px] mt-10 *:mt-8`}
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
    </>
  );
}
