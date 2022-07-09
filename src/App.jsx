import { Header, Sidebar, Post } from '@all-components';

import styles from '@/App.module.css';

import '@/global.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Elton Brayner"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium a sapiente deserunt numquam, ab ex ipsam unde similique adipisci dolorum sunt obcaecati, quae est, minima iure odio maiores ducimus. Voluptates."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
