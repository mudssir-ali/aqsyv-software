import { Image } from 'antd';
import './life.scss';
import { Fade } from 'react-reveal';
import img1 from '../../assets/img/img1.webp';
import img2 from '../../assets/img/img2.webp';
import img3 from '../../assets/img/img3.webp';
import img4 from '../../assets/img/img4.webp';
import img5 from '../../assets/img/img5.webp';
import img6 from '../../assets/img/img6.webp';

const Life = () => {
    return (
        <section className="life">
            <Fade bottom>
                <div className="life-card">
                    <h2 className='life-title'>Explore Life @ AQSYV</h2>
                    <div className='gallery'>
                        <Image.PreviewGroup>
                            <Image alt="life at crosspath" loading='lazy' placeholder={true} className='g-image' src={img1} />
                            <Image alt="life at crosspath" loading='lazy' placeholder={true} className='g-image' src={img2}/>
                            <Image alt="life at crosspath" loading='lazy' placeholder={true} className='g-image' src={img3} />
                            <Image alt="life at crosspath" loading='lazy' placeholder={true} className='g-image' src={img4} />
                            <Image alt="life at crosspath" loading='lazy' placeholder={true} className='g-image' src={img5} />
                            <Image alt="life at crosspath" loading='lazy' placeholder={true} className='g-image' src={img6} />
                        </Image.PreviewGroup>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Life;