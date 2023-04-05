import {
    Box,
    Button,
    Heading,
    Spinner,
    useToast,
    WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Single.modules.css";
// import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { postCartRequest } from "../redux/CartReducer/Action";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import LargeWithAppLinksAndSocial from "../components/Footer"
import WithSubnavigation from "../components/Navbar"



const SingleProduct = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();
   
console.log(id)
    const toast = useToast();

    const [isButLoading, setIsButLoading] = useState(false);

    const dispatch = useDispatch();
    function AddToCart() {
        dispatch(postCartRequest(data));
        setIsButLoading(true);
        setTimeout(() => {
            setIsButLoading(false);
            toast({
                title: "Added to Cart",
                description: "Product successfully added",
                status: "success",
                duration: 2500,
                variant: "left-accent",
                isClosable: true,
                position: "top",
            });
            navigate("/cart");
        }, 2000);
    }
    function handleBuy() {
        dispatch(postCartRequest(data));
        toast({
            title: "Added to Cart",
            description: "Product successfully added",
            status: "success",
            duration: 2500,
            isClosable: true,
            variant: "left-accent",
            position: "top",
        });
        navigate("/cart");
    }
    const handleDelivery = () => {};

 
       
   useEffect(()=>{
    axios.get(`https://determined-gold-jaguar.cyclic.app/men/${id}`)
    .then((res)=>{
        setData(res.data)
        console.log(data)
    })

   },[])
    
   
console.log(data)
    const {images,image,title,price,rating}= data

    const [img,setImg]=useState("")


       return ( 
       <>
        <WithSubnavigation/>
      
       
       <div className={styles.cont} >
              <div className="product-all">
                <div className="product-one">
                    <div style={{ marginBottom: "5px" }}>
                        <img src={images && images.image1} onClick={()=>setImg(images.image1)} alt="" />
                    </div>
                    <div style={{ marginBottom: "5px" }}>
                        <img src={images && images.image3} onClick={()=>setImg(images.image3)} alt="" />
                    </div>
                    <div style={{ marginBottom: "5px" }}>
                        <img src={images &&images.image4}onClick={()=>setImg(images.image4)}  alt="" />
                    </div>
                </div>
                <div className="product-two">
                    <div className="product-card">
                        <img src={images && img} alt="" />
                    </div>
                    <div className="product-detail">
                        <Heading as="h4" size="md">
                            Product : {title &&title}
                        </Heading>
                        <br />
                        <Heading as="h4" size="md">
                            Price : {price &&price} $/-
                        </Heading>
                        <br />
                        <Button
                            w={"40%"}
                            padding={"22px 20px"}
                            borderRadius={"25px"}
                            colorScheme="green">
                            Rating : { rating &&rating}
                             {/* <StarPurple500Icon /> */}
                         </Button> 
                         <br />
                        <button onClick={handleDelivery} className="delivery">
                            Free Delivery
                        </button>
                        <div className="size">
                            <Heading
                                style={{ padding: "10px" }}
                                as="h2"
                                size="sm">
                                Select Size
                            </Heading>
                            <Button
                                style={{
                                    marginRight: "30px",
                                    marginTop: "5px",
                                }}
                                colorScheme="gray">
                                S
                            </Button>
                            <Button
                                style={{
                                    marginRight: "30px",
                                    marginTop: "5px",
                                }}
                                colorScheme="gray">
                                M
                            </Button>
                            <Button
                                style={{
                                    marginRight: "30px",
                                    marginTop: "5px",
                                }}
                                colorScheme="gray">
                                X
                            </Button>
                            <Button
                                style={{
                                    marginRight: "30px",
                                    marginTop: "5px",
                                }}
                                colorScheme="gray">
                                XL
                            </Button>
                        </div>
                        <br />
                        <Heading as="h1" size="sm">
                            Details
                        </Heading>
                        <li>Part of our Tiny Top collection</li>
                        <li>Stretch rib knit</li>
                        <li>Rhinestone heart with flames detail</li>
                        <li>Style : 9543</li>
                        <li>Imported</li>
                        <hr style={{ margin: "20px auto" }} />
                        <Heading as="h1" size="sm">
                            Fit
                        </Heading>
                        <li>Slim fit</li>
                        <li>High neck</li>
                        <li>Cropped cut</li>
                        <li>Approx. length (M) : 16.25"</li>
                        <li>Model height : 5'10" | Wear size : Small</li>
                        <hr style={{ margin: "20px auto" }} />

                        <Heading as="h1" size="sm">
                            Care & Materials
                        </Heading>
                        <li>94% cotton, 6% spandex</li>
                        <li>Machine wash/dry</li>
                        <div className="btn">
                            <button
                                className="add-cart-btn"
                                onClick={AddToCart}>
                                {!isButLoading && `Add to Cart`}
                                {isButLoading && (
                                    <Spinner
                                        thickness="4px"
                                        speed="0.55s"
                                        emptyColor="gray.200"
                                        color="#17274a"
                                        size="sm"
                                    />
                                )}
                            </button>

                            <button className="buy-Now" onClick={handleBuy}>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        <LargeWithAppLinksAndSocial/>
        </>
    );
};

export default SingleProduct;
