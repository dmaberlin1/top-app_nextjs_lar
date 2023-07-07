import Image from 'next/image';
import styles from './page.module.css';
import About from "@/app/About/page";
import Htag from "@/app/Htag/page";

export default function Home():JSX.Element {
  return (
      <>
      <div className={styles.app}>
          <Htag tag={'h2'}>text</Htag>
      </div>

          <About></About>
      </>
      );
}
