import { LinkedinLogo } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/eltonbrayner.png"
        />
        <strong>Elton Brayner</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="https://www.linkedin.com/in/eltonbrayner/">
          <LinkedinLogo size={20} weight="fill" />
          LinkedIn
        </a>
      </footer>
    </aside>
  );
}
