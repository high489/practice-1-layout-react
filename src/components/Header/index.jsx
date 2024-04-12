import styles from './header.module.scss';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className='container'>
          <h1 className={styles.header_title}>Digital Marketing Agency</h1>
          <p className={styles.header_text}>Award winning digital marketing agency in Singapore. A home-grown company since 2018.</p>
          <button className={styles.header_button}>Find out more</button>
        </div>
      </div>
    </>
  )
}

export { Header };