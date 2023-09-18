import styles from "./Products.module.css"
import coffe from "../../data/shoes"
import { useState } from "react"


const Products = () => {
  const [data,setData] = useState(coffe)

  return (
   <div className={styles.container}>
    <div>
      <h2>Conheça as cápsulas CAPPUCCINO® Farmers Origins</h2>
      <p>Vindas de cinco das melhores terras cafeicultoras do planeta, CAPPUCCINO® Farmers Origins chegaram para ampliar horizontes em seus sentidos.</p>
    </div>

    <div className={styles.products}>
      {data.map((product)=>{
        return (
          <div className={styles.card} key={product.id}>
        <div className={styles.media}>
          <img src={product.img}/>
        </div>
        <div className={styles.info}>
            <h2>{product.title}</h2>
        </div>
      </div>
        )
      })}
    </div>
    
   </div>
  )
}

export default Products