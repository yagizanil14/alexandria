import React, { useState } from 'react';
import styles from './faqs.module.scss';
import { TopArrowIcon } from '../../../assets/icons';
import SmoothCollapse from 'react-smooth-collapse';
const Faq = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const _toggle = () => setIsVisible(!isVisible);
  return (
    <div className={styles.faq} onClick={_toggle}>
      <div className={styles.faqContent}>
        <h1>{item.title}</h1>
        <span
          style={{
            transition: 'transform 200ms linear',
            transform: `rotateZ(${isVisible ? 0 : '-180deg'})`,
            display: 'inline-block',
          }}>
          <TopArrowIcon />
        </span>
      </div>
      <SmoothCollapse expanded={isVisible}>
        <div className={styles.desc}>
          {item.descs.map((item, index) => {
            return <p key={index}> - {item}</p>;
          })}
        </div>
      </SmoothCollapse>
    </div>
  );
};
function Faqs(props) {
  const faqs = [
    {
      title: 'iskenderiye kutuphanesi nedir ?',
      descs: [
        'milatan once 300 yılında iskenderiyede kurulan  bir eğitim kurumudur bu  kutuphane icerisinde universiteler,kurumlar,arastırma merkezleri bulunur',
      ],
    },
    {
      title: 'iskenderiye kutuphanesi sosyal kulubu nedir',
      descs: ['iskenderiye kutuphanesi sosyal kulubu nedir'],
    },
    {
      title: 'sosyel kulubun içerinde neler vardır ?',
      descs: [
        'eğitim , sanat , girimsimcilik , yatırımcılık ,vb uzerine içeride bilgi alısverisi yababilecek bir alan haftada 2 adet bilgi konferansı  canlı kisisel gelisim kitap okuma kanlı bu kanlda diğerleri ile bilgi alısverisi yapabilirsiniz',
      ],
    },
    {
      title: 'sosyal kulubun amacı nedir ?',
      descs: [
        'dunyanın ayrı yerlerinde klube katılan  2500 kisi hep birlikte kendi istedi her konuda fikir alışverişinde bulunması ve gelişimi',
      ],
    },
    {
      title: 'sosyel kulube nasıl katılırım ?',
      descs: [
        'opensea.io sitesinden satışa sunacağımız anahtarlardan birine sahip olman yeterli.',
      ],
    },
    {
      title: 'neden yanlızca 2500 anahtar var ?',
      descs: ['neden yanlızca 2500 anahtar var ?'],
    },
    {
      title: 'satın aldıgım NFT leri satabilir miyim?',
      descs: [
        'EVET! sahip olduğun  anahtarı  istedin zaman satabilirsin her hafta kulp anahtar denetimi yapılır anahtara sahip olmayan üyeler kulupten atılır.',
      ],
    },
    {
      title: 'Kararlar nasıl alınır ?',
      descs: [
        'kulup içindeki tüm üyeler esitir ve her üyeye oy hakkı verilecek. Alınacak olan her karar kütüphane meclisinden geçirilecektir.',
      ],
    },
    {
      title: 'kutuhane uyelerine neler sunuyor ?',
      descs: [
        'her hafta 2 ünlu konusması kisiselgelisim konusması yapacak',
        'farklı konularda toplant',
        'dunyanın her yerinde yetenekli insnlarla iletisim,nature ve bilgi alısverisi sansı',
        'dunyadaki onemli gelismeleriden hemen haberdal olma sansıbasyuk olayları haber sitlerinde otomatik olarak alıp kanalrımıda yayınlayan yazılmılarimiz sayesinde her detaydan haberdar olacaksınız',
        'kulupte olacak butun kararlara oy verme sansı',
      ],
    },
  ];
  return (
    <div className={styles.faqs}>
      <div className={styles.faqsTitle}>
        <h1>FAQ</h1>
      </div>

      <div className={styles.faqsWr}>
        {faqs.map((item, index) => {
          return (
            <>
              <Faq item={item} key={index} />
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Faqs;
