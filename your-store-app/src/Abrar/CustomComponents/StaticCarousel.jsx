import { Box, Image } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";


export default function StaticCarousel ({data,redirect,mobile,tab,laptop}) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: laptop,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: tab,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: mobile,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <>
        <Box  width={{base : '95%', md : '90%'}} m='auto' mt={{base :'10px'}} >
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                  // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {data.length > 0 && data.map((elem)=>{
                    return <Box key={elem.id} w={{base : '95%'}} m='auto'>
                        <Link to={redirect}><Image src={elem.image} m='auto' draggable='false'/></Link>
                    </Box>
                })}
            </Carousel>
        </Box>
        </>
    )
}

