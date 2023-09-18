import styles from "./Footer.module.css"
import React from 'react'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.col}>
        <h3>Contato</h3>
        <ul>
          <li>Endereço: Rua das Aromas, 123 - Centro, Cidade</li>
          <li>Telefone: (123) 456-7890</li>
          <li>E-mail: contato@cafecelstial.com</li>
        </ul>
      </div>
      <div className={styles.col}>
        <h3>Horário de Funcionamento</h3>
        <ul>
          <li>Segunda a Sexta: 7h00 - 20h00</li>
          <li>Sábados: 8h00 - 18h00</li>
          <li>Domingos: Fechado</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer