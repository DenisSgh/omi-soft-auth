import s from './Container.module.scss';

export default function Container({ page, children }) {
  return (
    <div className={page === 'home' ? s.homeContainer : s.loginContainer}>
      {children}
    </div>
  );
}
