import Container from 'components/Container';
import ButtonLogout from 'components/ButtonLogout';
import s from './Views.module.scss';

export default function HomePage() {
  return (
    <Container page="home">
      <div className={s.container}>
        <h1 className={s.title}>Welcome!</h1>
        <ButtonLogout />
      </div>
    </Container>
  );
}
