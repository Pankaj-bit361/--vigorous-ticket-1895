
import styles from './Navbar.module.css'
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  // Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Input,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  // useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {useState,useEffect} from "react"
import Header from './Header';
import NavOtherPart from './NavOtherPart';

export default function WithSubnavigation({setsearch, search}) {
  const { isOpen, onToggle } = useDisclosure();
  // const { colorMode, toggleColorMode } = useColorMode();

  
  return (
    <Box>
    <Header/>
      <Flex
        style={{ backgroundColor: "#F5F5F5" }}
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("white", "white")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
            style={{ width: "100%", margin: "auto", display: "flex" }}
          >
          <NavOtherPart search={search} setsearch={setsearch}/>
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            {/* <DesktopNav /> */}
            {/* DesktopNav is used for dropdown multiple upper side */}

            {/* For Icons */}
          </Flex>
        </Flex>
        {/* <Button onClick={toggleColorMode}> */}
        {/* {colorMode === "light" ? <MoonIcon /> : <SunIcon />} */}
        {/* </Button> */}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <Box style={{ margin: "auto", width: "90%", paddingBottom: "20px" }}>
        <DesktopNav />
      </Box>
      <hr className={styles.navDropdown} />
    </Box>
  );
}

const DesktopNav = () => {

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

  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {windowDimension.winWidth>500?NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger >
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
            {/* {navItem.children1 && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children1.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )} */}
          </Popover>
        </Box>
      )):""}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {

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
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {windowDimension.winWidth<540?NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
      )):""}
      
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children && children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

// multiple drop down

const NAV_ITEMS = [
  {
    label: "Gifts",
    children: [
      {
  label: "Beuty Gifts",
        href: "#",
      },
      {
        label: "Cozy Shop",
        href: "#",
      },
      {
        label: "Designer Handbags",
        href: "#",
      },
      {
        label: "Eco Friendly",
        href: "#",
      },
      {
        label: "Fine Jewelry",
        href: "#",
      },   
      {
        label: "Forthe Thrend Setter",
        href: "#",
      },
      {
        label: "Gift Cards",
        href: "#",
      },
      {
        label: "Gifts with a Perpose",
        href: "#",
      },
      {
        label: "Intimates",
        href: "#",
      },

    ],
  //   children1: [
  //     {
  // label: "Beuty Gifts",
  //       href: "#",
  //     },
  //     {
  //       label: "Cozy Shop",
  //       href: "#",
  //     },
  //     {
  //       label: "Designer Handbags",
  //       href: "#",
  //     },
  //     {
  //       label: "Eco Friendly",
  //       href: "#",
  //     },
  //   ]
    
  },
  {
    label: "Women",
    href:"/womens",
    children: [
      {
        label: "Shop All Women",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Clothing",
        subLabel: "",
        href: "#",
      },
      {
        label: "Plus Size Clothing",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Top",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Shoes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women",
        subLabel: "",
        href: "#",
      },
      {
        label: "Trends",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Dresses",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Accessories",
        subLabel: "",
        href: "#",
      },
      {
        label: "Juniors Clothing",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Men",
    href:"/mens",
    children: [
      {
        label: "Shop All Men",
        subLabel: "",
        href: "#",
      },
      {
        label: "Men's Clothing",
        subLabel: "",
        href: "#",
      },
      {
        label: "Plus Size Clothing",
        subLabel: "",
        href: "#",
      },
      {
        label: "Men's shirts",
        subLabel: "",
        href: "#",
      },
      {
        label: "Men's Shoes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Men",
        subLabel: "",
        href: "#",
      },
      {
        label: "Trends",
        subLabel: "",
        href: "#",
      },
      {
        label: "Men's Dresses",
        subLabel: "",
        href: "#",
      },
      {
        label: "Men's Accessories",
        subLabel: "",
        href: "#",
      },
      {
        label: "Juniors Clothing",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Kids",
    href:"/kids",
    children: [
      {
        label: "Shop All Kids",
        subLabel: "",
        href: "#",
      },
      {
        label: "Boys's Clothing",
        subLabel: "",
        href: "#",
      },
      {
        label: "Plus Size Clothing",
        subLabel: "",
        href: "#",
      },
      {
        label: "Girls's Clothing",
        subLabel: "",
        href: "#",
      },
      {
        label: "Kids Shoes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Baby Clothing",
        subLabel: "",
        href: "#",
      },
      {
        label: "Toys & Games",
        subLabel: "",
        href: "#",
      },
      {
        label: "Kids Dresses",
        subLabel: "",
        href: "#",
      },
      {
        label: "Kids",
        subLabel: "",
        href: "#",
      },
      {
        label: "Kids Brands",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Shoes",
    children: [
      {
        label: "Shop All Shoes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Shoes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Kids Shoes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Men's Shoes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Shoes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Shoes Brands",
        subLabel: "",
        href: "#",
      },
      {
        label: "Sales",
        subLabel: "",
        href: "#",
      },
      {
        label: "Extended Sizes",
        subLabel: "",
        href: "#",
      },
      {
        label: "Sneakers",
        subLabel: "",
        href: "#",
      },
      {
        label: "Juniors Shoes",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Handbags",
    children: [
      {
        label: "Shop All Handbags",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Handbags",
        subLabel: "",
        href: "#",
      },
      {
        label: "Plus Size Handbags",
        subLabel: "",
        href: "#",
      },
      {
        label: "Travel & Luggage",
        subLabel: "",
        href: "#",
      },
      {
        label: "Small Accessories",
        subLabel: "",
        href: "#",
      },
      {
        label: "Handbags",
        subLabel: "",
        href: "#",
      },
      {
        label: "Trends",
        subLabel: "",
        href: "#",
      },
      {
        label: "Handbags Brands",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Accessories",
        subLabel: "",
        href: "#",
      },
      {
        label: "Kids Handbags",
        subLabel: "",
        href: "#",
      },
    ],
  },
  {
    label: "Jewelry",
    children: [
      {
        label: "Fine Jewelry",
        subLabel: "",
        href: "#",
      },
      {
        label: "Fashion Jewelry",
        subLabel: "",
        href: "#",
      },
      {
        label: "Watches",
        subLabel: "",
        href: "#",
      },
      {
        label: "Women's Jewelry",
        subLabel: "",
        href: "#",
      },
      {
        label: "Men's Jewelry",
        subLabel: "",
        href: "#",
      },
      {
        label: "Kids Jewelry",
        subLabel: "",
        href: "#",
      },
      {
        label: "Wedding & Engagement",
        subLabel: "",
        href: "#",
      },
      {
        label: "Jewelry Care",
        subLabel: "",
        href: "#",
      },
      {
        label: "Jewelry",
        subLabel: "",
        href: "#",
      },
      {
        label: "Featured Shops",
        subLabel: "",
        href: "#",
      },
    ],
  },
  // {
  //   label: "Beauty",
  //   children: [
  //     {
  //       label: "Shop All Beauty",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Skin Care",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Makeup",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Bath & Body",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Hair Care & Tools",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Nail Polish & Tool",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Beauty",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Clean Beauty",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Beauty Brands",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Masks & Hand Sanitizers",
  //       subLabel: "",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Home",
  //   children: [
  //     {
  //       label: "Shop All Home",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Kitchen",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Tabletop & Bar",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Home Decor",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Furniture",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Toys & Games",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Food & Gourmet Gifts",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Holiday",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Bed & Bath",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Camping & Outdoor",
  //       subLabel: "",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Brands",
  //   children: [
  //     {
  //       label: "Shop All Brads",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Holiday",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "New Arrival",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Brands",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Women's Brands",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Kids Brands",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Men's Brands",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Beauty Brands",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Active Brands",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Juniors Clothing Brands",
  //       subLabel: "",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Clearance",
  //   children: [
  //     {
  //       label: "Women's Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Men's Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Jewelry Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Kids Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Shoes Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Handbags Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Gift Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Women's Dresses Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Beauty Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //     {
  //       label: "Juniors Clothing Clearance",
  //       subLabel: "",
  //       href: "#",
  //     },
  //   ],
  // },
];
