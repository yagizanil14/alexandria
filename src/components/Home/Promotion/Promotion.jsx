import React from 'react';
import styles from './promotion.module.scss';
function Promotion(props) {
  return (
    <div className={styles.promotion}>
      <div className={styles.desc}>
        <div className={styles.leftDesc}>
          <p>
            İskenderiye ilk olarak buyuk iskender kurar normalde kucuk bir
            balıkcı kasabasıdır.büyük iskender, iskenderiye gun batımını çok
            sevdiği için bu şehri inşa ettirir.sehri dinkrates'e kurdurdu
            dinkrates rodoslu bir mimar.iskendiriye çok pöpulerlesir avrupa ve
            asya arasında büyük bir liman kenti oldu bu yuzden dunyanın
            7.harikasından biri olan iskenderiye feneri yaptırıldı.
          </p>
          <p>
            İskender sehri kururduktan 6 sene sonrra ölür, sehir iskenderin
            kumandanlarından biri polanpotalemayos'a gecer polantalemayos
            filozof ve bilimadamıdır; barıs ve bilimi sever anatomisi
            üniversitesi açtı.iskenderiye kutuphanesini yaptırır.
          </p>
        </div>
        <div className={styles.rightDesc}>
          <p>
            Kütüphane 2500 kisilik gozlem yapalabilecek rasathane.hayvan ve
            bitki orneklerini sergilendigi müzeler içinde 150.000'den fazla eser
            var.mısırda cıkarılan yasaya gore mısıra gelengezgin ve seyyarların
            tüm eserlerine el koyulur iskenderiye kutuphanesine verilir,tercume
            bolumude okunur ve başka dildeki eserler burada tercume edilerek
            kutuphaneye konur.
          </p>
          <p>
            Binlerce öğrencini okuması icin yapılmıs suyun kaldırma kuvetini
            bulan arşimet burdan eğtim almıs.yunan araştırmacılar, yobazlar
            tarafından mısırdan kavuldular ve bilim ısığı sondu.
          </p>
        </div>
      </div>
      <div className={styles.hr}></div>
    </div>
  );
}

export default Promotion;
