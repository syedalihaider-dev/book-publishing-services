"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

const stats = [
  { value: 100, label: "Professional <br/>Writers" },
  { value: 5, label: "Years of <br/>Industry Experience" },
  { value: 2500, label: "Books Published <br/>Worldwide" },
  { value: 10000, label: "Manuscripts Edited <br/>and Proofread" },
];
function Counter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const animate = (time) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            const current = Math.floor(progress * target);
            setCount(current);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);
  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className={`${styles.counter_section} sec_padding`}>
      <div className="container">
        <div className="row">
          {stats.map((stat, i) => (
            <div key={i} className="col-sm-12 col-md-3">
              <div className={styles.box}>
                <h3>
                    <Counter target={stat.value} /><span>+</span>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: stat.label }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
