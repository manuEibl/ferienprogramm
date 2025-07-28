import styles from './page.module.css';
import Container from "@mui/material/Container";
import StartPage from "@/app/start/page";

export default function Home() {
  return (
      <div>
          <main className={styles['main']}>
              <Container style={{ backgroundColor: "white"}}>
                <StartPage/>
              </Container>
          </main>
      </div>
  );
}
