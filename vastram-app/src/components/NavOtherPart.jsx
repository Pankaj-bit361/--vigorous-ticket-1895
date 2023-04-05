import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, Input, Text, grid } from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom"
import { BiDollar } from "react-icons/bi";
import { BsBagCheck, BsCardChecklist } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import logo from "../images/img1.png";
// import "../style.scss";

const NavOtherPart = ({setsearch,search}) => {




 const [windowDimension,detectHW]=useState({
  winWidth:window.innerWidth
 })

 const detectSize=()=>{
  detectHW({
    winWidth:window.innerWidth
  })
 }
useEffect(()=>{
  window.addEventListener("resize",detectSize)

  return ()=>{
    window.removeEventListener("resize",detectSize)
  }
},[windowDimension])

console.log(windowDimension.winWidth)
  return (
    <div
    style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}
      // className="nav-main-logo"
    
    >
   {windowDimension.winWidth>767?
    <Box  style={{
          width: "70%",
         margin:"auto",
          gridColumnStart:"1",gridColumnEnd:"2"
        }}>
     <Link to="/"> <img 
     style={{width:"100%"}}
        src={logo}
        alt=""
        // className="nav-logo"
       
      /></Link>
      </Box>:""} 
{windowDimension.winWidth>767? <Box  style={{gridColumnStart:"2",gridColumnEnd:"4"}}>
      <Input
     mt={"1.2%"}
      w={"100%"}
      h={"8vh"}
        placeholder="What can we help you find?"
        // className="nav-input"
        _placeholder={{fontSize:"90%"}}
       onChange={(e)=>setsearch(e.target.value)}
       value={search}
      />
      <Search2Icon  ml="-7%" color="gray" />
</Box>:""
}

{windowDimension.winWidth>767?<Box  style={{ marginLeft: "7%",gridColumnStart:"4",gridColumnEnd:"5" }}>
      <Box
      // className='main-icon'
      >
        <Flex>
          <Box
           
            // className='icons-box-reward'
          >
            <BsCardChecklist
              //  className='icon-reward'
              style={{
                height: "6.2vh",
                width: "40%",
                marginLeft: "23%",
              }}
            />
            <Text>Rewards+</Text>
          </Box>

          <Box
            style={{ marginLeft: "30px" }}
            // className='icon-box-dollor'
          >
            <BiDollar
              // className='icon-dollor'
              style={{
                height: "6.2vh",
                width: "40%",
                marginLeft: "23%",
              }}
            />
            <Text>Coupons</Text>
          </Box>

         <Link to="/login"> <Box
            style={{ marginLeft: "30px" }}
            // className='icon-box-account'
          >
            <VscAccount
              // className='icon-account'
              style={{
                height: "6.2vh",
                width: "40%",
                marginLeft: "23%",
              }}
            />
           <Text>Account</Text>
          </Box></Link>

         <Link to="/cart"> <Box
            style={{ marginLeft: "30px" }}
            // className='icon-box-bag'
          >
            <BsBagCheck
               style={{
                height: "6.2vh",
                width: "100%",
               
              }}
              // className='icon-bag'
            />
            <Text>Bag</Text>
          </Box></Link>
        </Flex>
      </Box>
      </Box>:<Box  style={{ gridColumnStart:"4",gridColumnEnd:"5",marginRight:":5%" }}>
      <Box
      // className='main-icon'
      >
        <Flex>
          <Box
           
            // className='icons-box-reward'
          >
            <BsCardChecklist
              //  className='icon-reward'
              style={{
                height: "6.2vh",
                width: "40%",
                marginLeft: "23%",
              }}
            />
            <Text>Rewards+</Text>
          </Box>

          <Box
            style={{ marginLeft: "30px" }}
            // className='icon-box-dollor'
          >
            <BiDollar
              // className='icon-dollor'
              style={{
                height: "6.2vh",
                width: "40%",
                marginLeft: "23%",
              }}
            />
            <Text>Coupons</Text>
          </Box>

          <Link to="/login"><Box
            style={{ marginLeft: "30px" }}
            // className='icon-box-account'
          >
            <VscAccount
              // className='icon-account'
              style={{
                height: "6.2vh",
                width: "40%",
                marginLeft: "23%",
              }}
            />
            <Text>Account</Text>
          </Box></Link>

         <Link to="/cart"> <Box
            style={{ marginLeft: "30px" }}
            // className='icon-box-bag'
          >
            <BsBagCheck
               style={{
                height: "6.2vh",
                width: "100%",
               
              }}
              // className='icon-bag'
            />
            <Text>Bag</Text>
          </Box></Link>
        </Flex>
      </Box>
      </Box>}
    </div>
  );
};

export default NavOtherPart;
