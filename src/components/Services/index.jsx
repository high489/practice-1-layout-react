import styles from './services.module.scss';

import PlayListSearchImage from './assets/gg_play-list-search.svg?react';
import InstagramImage from './assets/gg_instagram.svg?react';
import PenImage from './assets/gg_pen.svg?react';

const Services = () => {
  return (
    <>
      <div className={styles.services}>
        <div className='container'>
          <div className="desc">
            <h2 className="desc_title">Our Services</h2>
            <p className="desc_text">Increase your insight and make the better experience with our valuable services.</p>
          </div>
          <div className={styles.services_items}>
            <div className={styles.services_item}>
              <PlayListSearchImage
                className={styles.services_item_img}
                alt="Search Engine Optimization"
              />
              <h3 className={styles.servises_item_title}>Search Engine Optimization</h3>
            </div>
            <div className={styles.services_item}>
              <InstagramImage
                className={styles.services_item_img}
                alt="Search Engine Optimization"
              />
              <h3 className={styles.servises_item_title}>Social Media Optimization</h3>
            </div>
            <div className={styles.services_item}>
              <PenImage
                className={styles.services_item_img}
                alt="Search Engine Optimization"
              />
              <h3 className={styles.servises_item_title}>UX Writer</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Services };