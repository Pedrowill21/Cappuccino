import styles from "./Products.module.css"
import coffe from "../../data/seed"
import coffeMethods from "../../data/coffeePreparationMethods"
import promotion from "../../data/promotion"
import { useState } from "react"
import Card from "../../components/Card"


const Products = () => {
  const [seed, setSeed] = useState(coffe)
  const [bestsellers, setBestSellers] = useState(coffeMethods)
  const [offers,setOffers] = useState(promotion)

  return (

     
     
     
     <div className={styles.container}>
      
    <div className={styles.text}>
      <h2>Conheça as cápsulas CAPPUCCINO® Farmers Origins</h2>
      <p>Vindas de cinco das melhores terras cafeicultoras do planeta, CAPPUCCINO® Farmers Origins chegaram para ampliar horizontes em seus sentidos.</p>
    </div>

    <div className={`${styles.destaque}`}>
        <h2>Destaque</h2>
        <div className={styles.products}>
           {seed.map((product)=>{
                return (
                  <Card
                  key={product.id}
                  url={product.img}
                  title={product.title}
                  />
                )})}
        </div>
    </div>

    <div className={styles.destaque}>
        <h2>Mais vendidos</h2>
        <div className={styles.products}>
           {bestsellers.map((product)=>{
                return (
                  <Card
                  key={product.id}
                  url={product.img}
                  title={product.title}
                  description={product.description}
                  />
                )})}
        </div>
    </div>

    <div className={styles.destaque}>
        <h2>Promoção</h2>
        <div className={styles.products}>
           {offers.map((product)=>{
                return (
                  <Card
                  key={product.id}
                  url={product.img}
                  title={product.title}
                  description={product.description}
                  />
                )})}
        </div>
    </div>

    
   </div>
  )
}

export default Products