
import React from 'react';
import Alert from '../../lib/Alert';
import Label from '../../lib/Label';
import { FlexRow, FlexCol } from '../../lib/FlexGrid';
import styles from './styles.scss';

function Home() {
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';
  const longMessage = (
    <div>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      <p>Not what you expected? <a href="#Back">Go back.</a></p>
    </div>);

  return (
    <section>
      <h1>Hello world <Label>Super!</Label></h1>
      <p className={styles.paragraph}>
        Welcome to the <strong>Universal React Starter-kyt</strong>.
        This starter kyt should serve as the base for an advanced,
        server-rendered React app.
      </p>
      <p className={styles.paragraph}>
        Check out the Tools section for an outline of the libraries that
        are used in this Starter-kyt.
      </p>
      <FlexRow>
        <FlexCol md="10" mdOffset="1" lg="6" lgOffset="0">
          <Alert
            type="info"
            title="Going to the Markety"
            body={message}
          />
        </FlexCol>
        <FlexCol md="10" mdOffset="1" lg="6" lgOffset="0">
          <Alert
            type="info"
            title="Going to the Markety"
            body={message}
          />
        </FlexCol>
      </FlexRow>

      <Alert
        type="warning"
        title="Alert Title"
        body={message}
      />
      <Alert
        type="error"
        title="Alert Title"
        body={message}
      />
      <Alert
        type="success"
        title="Alert Title"
        body={longMessage}
      />
    </section>
  );
}

export default Home;