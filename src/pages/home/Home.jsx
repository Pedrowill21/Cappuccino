import styles from "./Home.module.css"

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
        
      <div className={styles.card}>
          <div className={styles.container_img}>
          <img src="../../public/grao1.jpg"  />
          </div>
          <div className={styles.container_text}>
          <h2>O Segredo</h2>
          <span>No Café Cappuccino, estamos comprometidos em oferecer uma experiência d
            e café verdadeiramente extraordinária. Nossa busca incessante pela excelência começa com 
            a seleção cuidadosa dos grãos que usamos em nossas bebidas. Aqui está o que torna os nossos grã
</span>
          </div>
        </div>


        <div className={styles.card}>
          <div className={styles.container_img}>
          <img src="../../public/grao3.jpg"  />
          </div>
          <div className={styles.container_text}>
          <h2>Origem Premium</h2>
          <span>Utilizamos apenas grãos de café de origens premium. Trabalhamos em parceria com fazendas e cooperativas ao redor do mundo para garantir a qualidade excepcional de nossos grãos. Cada xícara de Café Celestial é uma viagem sensorial que o levará às paisagens remotas de regiões produtoras de café de renome.</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container_img}>
          <img src="../../public/grao1.jpg"  />
          </div >
          <div  className={styles.container_text}>
          <h2>Torra Artesanal</h2>
          <span>A torrefação é uma arte que levamos a sério. Nossos mestres torrefadores dominam a ciência e a arte da torrefação para realçar o sabor e o aroma naturais dos grãos. Cada lote é torrado com precisão para obter o perfil de sabor perfeito.</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container_img}>
          <img src="../../public/grao3.jpg"  />
          </div>
          <div className={styles.container_text}>
          <h2>Origem Premium</h2>
          <span>Utilizamos apenas grãos de café de origens premium. Trabalhamos em parceria com fazendas e cooperativas ao redor do mundo para garantir a qualidade excepcional de nossos grãos. Cada xícara de Café Celestial é uma viagem sensorial que o levará às paisagens remotas de regiões produtoras de café de renome.</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container_img}>
          <img src="../../public/grao3.jpg"  />
          </div>
          <div className={styles.container_text}>
          <h2>Origem Premium</h2>
          <span>Utilizamos apenas grãos de café de origens premium. Trabalhamos em parceria com fazendas e cooperativas ao redor do mundo para garantir a qualidade excepcional de nossos grãos. Cada xícara de Café Celestial é uma viagem sensorial que o levará às paisagens remotas de regiões produtoras de café de renome.</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container_img}>
          <img src="../../public/grao3.jpg"  />
          </div>
          <div className={styles.container_text}>
          <h2>Origem Premium</h2>
          <span>Utilizamos apenas grãos de café de origens premium. Trabalhamos em parceria com fazendas e cooperativas ao redor do mundo para garantir a qualidade excepcional de nossos grãos. Cada xícara de Café Celestial é uma viagem sensorial que o levará às paisagens remotas de regiões produtoras de café de renome.</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container_img}>
          <img src="../../public/grao3.jpg"  />
          </div>
          <div className={styles.container_text}>
          <h2>Origem Premium</h2>
          <span>Utilizamos apenas grãos de café de origens premium. Trabalhamos em parceria com fazendas e cooperativas ao redor do mundo para garantir a qualidade excepcional de nossos grãos. Cada xícara de Café Celestial é uma viagem sensorial que o levará às paisagens remotas de regiões produtoras de café de renome.</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.container_img}>
          <img src="../../public/grao3.jpg"  />
          </div>
          <div className={styles.container_text}>
          <h2>Origem Premium</h2>
          <span>Utilizamos apenas grãos de café de origens premium. Trabalhamos em parceria com fazendas e cooperativas ao redor do mundo para garantir a qualidade excepcional de nossos grãos. Cada xícara de Café Celestial é uma viagem sensorial que o levará às paisagens remotas de regiões produtoras de café de renome.</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home