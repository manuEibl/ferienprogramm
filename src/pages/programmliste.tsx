import React from "react";
import styles from './kalender.module.css';

export default function Programmliste() {
  return (
    <div>
      <iframe src="https://calendar.google.com/calendar/embed?src=geltendorfer.ferienprogramm%40gmail.com&ctz=Europe%2FBerlin&mode=AGENDA"
            className={`${styles.kalender}`}>
      </iframe>
    </div>
  );
}