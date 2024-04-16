import styles from './team.module.scss';

const Team = () => {
  return (
    <>
      <div className={styles.team}>
        <div className='container'>
          <div className="desc">
            <h2 className="desc_title">Our Talented Member</h2>
            <p className="desc_text">Increase your insight and make the better experience with our valuable services.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export { Team };