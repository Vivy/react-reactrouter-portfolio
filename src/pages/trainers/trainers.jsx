import * as S from './trainers.style';
import HeaderImage from '/images/header_bg_5.jpg';
import { trainers } from '../../data';
import PagesHeader from '../../component/pagesheader/pagesheader';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import Trainer from '../../component/trainer/trainer';

const Trainers = () => {
  return (
    <>
      <PagesHeader title='Our Trainers' image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores cum
        doloremque debitis magni aliquid qui quasi similique incidunt!
      </PagesHeader>
      <S.Trainers>
        <S.Container>
          {trainers.map(({ id, image, name, job, socials }) => (
            <Trainer
              key={id}
              name={name}
              job={job}
              image={image}
              socials={[
                { icon: <BsInstagram />, link: socials[0] },
                { icon: <AiOutlineTwitter />, link: socials[1] },
                { icon: <FaFacebookF />, link: socials[2] },
                { icon: <FaLinkedin />, link: socials[3] },
              ]}
            />
          ))}
        </S.Container>
      </S.Trainers>
    </>
  );
};

export default Trainers;
