import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'Flexible & Configurable',
    Svg: require('@site/static/img/configurable.svg').default,
    description: (
      <>
        Whether using in-memory caching, Redis, or custom strategies, Rale4j allows you to configure your needs.
      </>
    ),
  },
  {
    title: 'Effortless Rate Limiting',
    Svg: require('@site/static/img/effortless_rate_limiting.svg').default,
    description: (
      <>
        simplifies rate limiting with annotations , ensuring your APIs remain performant and protected.
      </>
    ),
  },
  {
    title: 'Optimized for Performance',
    Svg: require('@site/static/img/performance.svg').default,
    description: (
      <>
        Designed to handle millions of requests ,using algorithms like Token Bucket and Sliding Window.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
    </section>
  );
}
