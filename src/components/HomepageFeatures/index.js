import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { Feather } from "@styled-icons/feather";
import { BoxToolbox } from "@styled-icons/fluentui-system-regular";
import { ReactLogo } from "@styled-icons/fa-brands";
import { Analytics } from '@vercel/analytics/react';

let icons = {
  size: 100,
  style: {
    margin: 30,
  },
};

const FeatureList = [
  {
    title: "Lightweight",
    Svg: () => <Feather {...icons} />,
    description: (
      <>
        This package weight around: 2.9 kB - MINIFIED, 1.3 kB - MINIFIED +
        GZIPPED.
        <a
          href="https://bundlephobia.com/package/hermes-io@2.2.37"
          target="_blank"
          style={{ marginLeft: 4 }}
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    title: "Fine grained updates oriented",
    Svg: () => <ReactLogo {...icons} />,
    description: (
      <>
        This package offer a state management approach driven by events.
        <a
          href="https://medium.com/@Sneyder_A/a-smart-update-oriented-reactive-design-4d29fd535569"
          target="_blank"
          style={{ marginLeft: 4 }}
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    title: "Toolkit",
    Svg: () => <BoxToolbox {...icons} />,
    description: (
      <>
        <a
          href="https://chromewebstore.google.com/detail/hermes-io/pjdkgcpikfmkncldipldmimanfkpeedm?hl=en"
          target="_blank"
        >
          Chrome extension
        </a>{" "}
        +{" "}
        <a href="https://www.npmjs.com/package/hermes-io-cli" target="_blank">
          CLI
        </a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      <Analytics />
    </section>
  );
}
