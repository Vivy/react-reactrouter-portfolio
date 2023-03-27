import * as S from './trainer.style';
import Card from '../../ui/card';

const Trainer = ({ image, name, job, socials }) => {
  return (
    <Card className='trainer'>
      <S.Image>
        <img src={image} alt={name} />
      </S.Image>
      <h3>{name}</h3>
      <p>{job}</p>
      <S.Socials>
        {socials.map(({ icon, link }, index) => {
          return (
            <a
              key={index}
              href={link}
              target='_blank'
              rel='noopener norefferal'
            >
              {icon}
            </a>
          );
        })}
      </S.Socials>
    </Card>
  );
};

export default Trainer;
