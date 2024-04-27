'use client'

import clsx from 'clsx';
import { useState } from "react";
import CardOne from "./ui/cards/card-one";
import CardThree from "./ui/cards/card-three";
import CardTow from "./ui/cards/card-two";
import CardFour from "./ui/cards/card-four";

export default function Home() {
  const [cardInfoArr]=useState([
    {
      title:"Introduction to programming",
      description:"This course covers the most basic concepts in programming using Solidity as an example.",
      tags:['Beginner'],
      duration:"36 Hour",
      courseNum:"5 Course",
      progress:"45% COMPLETED",
      type:"one",
      id:'card1'
    },
    {
      title:"Moonshot 2023 Summer Hackathon",
      description:"This course covers the most basic concepts in programming using Solidity as an example.",
      tags:['All Tracks','Solidity','ZK'],
      funcs:[
        {
          name:"Signup",
          date:"4/15 - 6/15",
        },
        {
          name:"Event",
          date:"6/15 - 7/15",
        },
        {
          name:"Grant size",
          date:"200K",
        }
      ],
      type:"tow",
      id:'card2'
    },
    {
      title:"Web 3.0 Programming Basics",
      description:"Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure.",
      tags:['Beginner'],
      duration:"36 Hour",
      courseNum:"5 Course",
      type:"four",
      id:'card3'
    },
    {
      title:"What is Bitcoin",
      duration:"36 Hour",
      imgurl:"/bg1.png",
      type:"three",
      id:'card4'
    }
    
  ])
  const [currentAddEndNum,setCurrentAddEndNum]=useState(0);

  const handlePageChange=(type:"add"|"reduce")=>{
    switch(type){
      case 'add':
        setCurrentAddEndNum(1);
        break;
      case 'reduce':
        setCurrentAddEndNum(currentAddEndNum-1);
        break;
      default:
        break;
    }
  }
  return (
    <div className="mt-[24px]">
      <p>{"< / Trending Now >"}</p>
      <div className="relative">
        <div id="CardsBox" >
          <div className={`flex items-center my-8 space-x-12 `} style={{translate:`${-466 * currentAddEndNum}px`}}>
            {
              cardInfoArr && cardInfoArr.map((cardInfo,index)=>{
                return cardInfo.type === 'one' ? <CardOne key={cardInfo.id} cardInfo={cardInfo}/>
                 : cardInfo.type === 'tow' ? <CardTow key={cardInfo.id} cardInfo={cardInfo}/> 
                 : cardInfo.type === 'three' ?<CardThree key={cardInfo.id} cardInfo={cardInfo}/> 
                 : <CardFour key={cardInfo.id} cardInfo={cardInfo}/> 
              })
            }
        </div>
        </div>
        <div className="w-full absolute top-[calc(50%)] mt-[-24px]">
          <div className="flex items-center justify-between *:w-[48px] h-[48px]">
            <button
              className={clsx(
                'w-[48px] h-[48px] bg-[black] rounded-full border border-[#676767] text-textwhite hover:bg-[#303030] hover:border-none',
                {
                'invisible': currentAddEndNum === 0,
              })}
              onClick={()=>handlePageChange('reduce')}
            >{`${'<'}`}</button>
            <button 
              className={clsx(
                'w-[48px] h-[48px] bg-[black] rounded-full border border-[#676767] text-textwhite hover:bg-[#303030] hover:border-none',
                {
                'hidden': currentAddEndNum+3 === cardInfoArr.length,
              })}
              onClick={()=>handlePageChange('add')}
            >{`${'>'}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
