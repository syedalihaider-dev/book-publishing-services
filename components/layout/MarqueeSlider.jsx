"use client";

import React from "react";
import styles from "./MarqueeSlider.module.css";

export default function MarqueeSlider() {
  return (
    <div className={styles.marquee_wrapper} aria-label="Site disclaimer marquee">
      <div className={styles.marquee}>
        <div className={styles.marquee__group}>
          <span>
            Disclaimer: 1. Book Publishing Services is an independent publishing
            entity and is not affiliated with, endorsed by, or connected to
            Amazon®. Any similarity in name is purely for marketing and
            identification purposes. All trademarks and brand names remain the
            property of their respective owners. 2. Book Publishing Services is
            a wholly independent publishing organization. We are not affiliated
            with, sponsored by, or in any way connected to Amazon® or any of its
            parent or subsidiary companies. The inclusion of these terms in our
            name is intended solely for marketing distinction and does not imply
            any form of partnership or endorsement. All referenced trademarks
            are the property of their respective owners. 3. We operate as an
            independent publishing service. Our name may reference Amazon, but
            we have no official connection or partnership with the platform. The
            use of such terms is solely intended for branding and promotional
            clarity.
          </span>

          {/* Duplicate for infinite loop */}
          <span>
            Disclaimer: 1. Book Publishing Services is an independent publishing
            entity and is not affiliated with, endorsed by, or connected to
            Amazon®. Any similarity in name is purely for marketing and
            identification purposes. All trademarks and brand names remain the
            property of their respective owners. 2. Book Publishing Services is
            a wholly independent publishing organization. We are not affiliated
            with, sponsored by, or in any way connected to Amazon® or any of its
            parent or subsidiary companies. The inclusion of these terms in our
            name is intended solely for marketing distinction and does not imply
            any form of partnership or endorsement. All referenced trademarks
            are the property of their respective owners. 3. We operate as an
            independent publishing service. Our name may reference Amazon, but
            we have no official connection or partnership with the platform. The
            use of such terms is solely intended for branding and promotional
            clarity.
          </span>
        </div>
      </div>
    </div>
  );
}
