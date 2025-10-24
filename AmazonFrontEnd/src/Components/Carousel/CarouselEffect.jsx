// import React from "react"
// import { img } from "./img/data"

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from "./CarouselEffect.module.css";


// function CarouselEffect() {
//   return (
//     <div>
//       {<carousel
//         autoPlay={true}
//         infiniteLoop={true}
//         showIndicators={true}
//         showThumbs={false}
//       >
//         {
//         img.map((imageItemLink) => {
//           return <img src={imageItemLink} />;
//         })
//         }
//       </carousel> }
//     <div className={styles.hero_img}></div>
//     </div>
//   );
// }

// export default CarouselEffect;
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from  "./img/data"
import styles from './CarouselEffect.module.css'
const CarouselEffect = () => {
  return (
      <div>
          <Carousel autoPlay={true}
              infiniteLoop={true}
              showIndicators={false}
              showThumbs={false}>
              {img.map((imageItemLink) => {
                  return <img key={imageItemLink}src={imageItemLink}/>
              })}
              
      </Carousel>
      <div className={styles.heroImg}>

      </div>
    </div>
  )
}

export default CarouselEffect;