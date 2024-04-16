import styles from './team.module.scss';

import Img1 from './assets/sarah_gilbert_x2.png';
import Img2 from './assets/stephen_joe_x2.png';
import Img3 from './assets/danie_rogue_x2.png';

const Team = () => {
  return (
    <>
      <div className={styles.team}>
        <div className={`container ${styles.team_container}`}>
          <div className={`desc ${styles.team_desc}`}>
            <h2 className="desc_title">Our Talented Member</h2>
            <p className="desc_text">Increase your insight and make the better experience with our valuable services.</p>
          </div>
          <div className={styles.team_items}>
            <div className={styles.team_item}>
              <img
                className={styles.team_item_img} 
                src={Img1}
                alt="Sarah Gilbert"
              />
              <div className={styles.team_item_info}>
                <h4 className={styles.team_item_title}>Sarah Gilbert</h4>
                <p className={styles.team_item_text}>CEO & Founder DigiXine</p>
              </div>
            </div>

            <div className={styles.team_item}>
              <img
                className={styles.team_item_img} 
                src={Img2}
                alt="Stephen Joe"
              />
              <div className={styles.team_item_info}>
                <h4 className={styles.team_item_title}>Stephen Joe</h4>
                <p className={styles.team_item_text}>Social Media Manager</p>
              </div>
            </div>

            <div className={styles.team_item}>
              <img
                className={styles.team_item_img} 
                src={Img3}
                alt="Danie Rogue"
              />
              <div className={styles.team_item_info}>
                <h4 className={styles.team_item_title}>Danie Rogue</h4>
                <p className={styles.team_item_text}>Senior UX Writer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Team };