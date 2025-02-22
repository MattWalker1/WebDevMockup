import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1} ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>

    <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[27px] mb-1">
          {content}
        </p>
    </div>
  </div>
)

const Services = () => {
  return (
    <section id="features" className={layout.section}>
    
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}> Modern website design,<br className="sm:block hidden"/> packed full of blazingly fast, custom features.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Web Dojo offers custom Web development in 3 simple packages. Gold, Silver & Bronze. 
          Depending on what level of customizability and scalability your business needs. Each package contains the same expert level of design & customer care, so you don't have to compromise, no matter your budget..</p>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index}/>
          ))}
        </div>

    </section>
  )
}

export default Services