import Card from "../../components/Card"
import styles from "./Home.module.css"
import data from "../../data/data"

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.introduction}>
        <div className={styles.box}>
            <div className={styles.box_left}>
            <div className={styles.text}>
              <h1>Cappuccino <br /> Seu Café Favorito</h1>
            </div>
            <div className={styles.box_btn}>
              <button>View Menu</button>
            </div>
           <div className={styles.box_icons}>
            <div className={styles.icon}><img src="../../public/cup.png"/></div>
            <div className={styles.icon}><img src="../../public/maquina-coffe.png"/></div>
            <div className={styles.icon}><img src="../../public/shop.png"/></div>
            <div className={styles.icon}><img src="../../public/terraco.png"/></div>
           </div>
            </div>
        </div>
        <div className={styles.box_img}>
            <img src="../../public/Cappuccino.png" alt="cafe" />
        </div>
      </div>

      <div className={styles.showroom}>
       
          {
            data.map((info)=>{
              return (
                <Card
                key={info.id}
                url={info.url}
                title={info.title}
                description={info.description}
              />
              )
            })
          }

    </div>

    </div>
  )
}

export default Home