import { Navbar } from "./components/Navbar";
import styles from './page.module.css';
import Container from "@mui/material/Container";


export default function Home() {
  return (
      <div>
          <main className={styles['main']}>
              <Container maxWidth="md" style={{ backgroundColor: "white", padding: 24 }}>
                <Navbar />
              </Container>
          </main>
      </div>
  );
}
