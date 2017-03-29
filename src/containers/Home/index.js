
import React from 'react';
import PhoneValidator from '../../lib/helpers/validators/PhoneValidator';
import ZipCodeValidator from '../../lib/helpers/validators/ZipCodeValidator';
import EmailValidator from '../../lib/helpers/validators/EmailValidator';
import Alert from '../../lib/components/Alert';
import Label from '../../lib/components/Label';
import Panel from '../../lib/components/Panel';
import PrimaryButton from '../../lib/components/PrimaryButton';
import SecondaryButton from '../../lib/components/SecondaryButton';
import TextField from '../../lib/components/TextField';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import { Table, TableRow, TableCell } from '../../lib/components/Tables';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import { CheckList, CheckListItem } from '../../lib/components/CheckList';

import styles from './styles.scss';

function Home() {
  const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.';
  const longMessage = (
    <div>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
      <p>Not what you expected? <a href="#Back">Go back.</a></p>
    </div>);

  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol className={styles.intro}>
          <h1 className={styles.h1}>Sticker sheet </h1>
          <p className={styles.p}>
            {'This is a stratch pad and visual inventory for our components as they are developed. Add the stuff you make to this page for a quick visual inventory of what is done.'}
          </p>
          <p className={styles.p}>
            {'Base styling as been added at the App component level that sets the basics like the font-family, default font-size and color.'}
          </p>
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol>
          <TextField
            label="This input is required"
            id="secondInput"
            required
          />

          <TextField
            label="Email address"
            type="email"
            value="gwashington@potus.com"
            isValid
            validator={EmailValidator}
          />

          <TextField
            label="ZIP code"
            value="666"
            errorMessage="Invalid ZIP Code"
            validator={ZipCodeValidator}
          />

          <TextField
            type="tel"
            label="Phone number"
            validator={PhoneValidator}
          />
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol>
          <h2 className={styles.componentHeader}>Label</h2>
          <Label>Super!</Label>
          <Label size="big">Super duper!</Label>
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol>
          <h2 className={styles.componentHeader}>Breadcrumbs</h2>
          <Breadcrumbs>
            <Breadcrumb>
              <a href="">Home</a>
            </Breadcrumb>
            <Breadcrumb>
              <a href="">Puppies</a>
            </Breadcrumb>
            <Breadcrumb>
              Pembroke Welsh Corgi
            </Breadcrumb>
          </Breadcrumbs>
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol>
          <h2 className={styles.componentHeader}>CheckList</h2>
          <CheckList>
            <CheckListItem>Clean your room</CheckListItem>
            <CheckListItem>Make your bed</CheckListItem>
            <CheckListItem>Wash the dog</CheckListItem>
            <CheckListItem>Walk the car</CheckListItem>
          </CheckList>
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol>
          <h2 className={styles.componentHeader}>PrimaryButton and SecondaryButton</h2>
          <PrimaryButton>Regular</PrimaryButton>
          <SecondaryButton>Regular</SecondaryButton>
          <PrimaryButton padded>Padded</PrimaryButton>
          <SecondaryButton padded>Padded</SecondaryButton>
          <PrimaryButton padded externalLink>Padded externalLink</PrimaryButton>
          <SecondaryButton padded externalLink>Padded externalLink</SecondaryButton>
          <PrimaryButton block>Block</PrimaryButton>
          <SecondaryButton block>Block</SecondaryButton>
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol xs="12">
          <h2 className={styles.componentHeader}>Panel</h2>
        </FlexCol>
        <FlexCol md="4">
          <Panel md="8" title="Unpadded panel">
            {'Hello, I\'m an unpadded panel'}
          </Panel>
        </FlexCol>

        <FlexCol md="4">
          <Panel padding="normal" title="Padded panel">
            {'Hello, I have amazing padding'}
          </Panel>
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol xs="12">
          <h2 className={styles.componentHeader}>Alerts</h2>
        </FlexCol>
        <FlexCol md="10" mdOffset="1" lg="6" lgOffset="0">
          <Alert
            type="info"
            title="Going to the Markety"
            body={message}
          />
        </FlexCol>
        <FlexCol md="10" mdOffset="1" lg="6" lgOffset="0">
          <Alert
            type="warning"
            title="Alert Title"
            body={message}
          />
        </FlexCol>
        <FlexCol md="10" mdOffset="1" lg="6" lgOffset="0">
          <Alert
            type="error"
            title="Alert Title"
            body={message}
          />
        </FlexCol>
        <FlexCol md="10" mdOffset="1" lg="6" lgOffset="0">
          <Alert
            type="success"
            title="Alert Title"
            body={longMessage}
          />
        </FlexCol>
      </FlexRow>

      <FlexRow>
        <FlexCol xs="12">
          <h2 className={styles.componentHeader}>Tables</h2>
        </FlexCol>
        <FlexCol>
          <Table srCaption="Test table" columns={['Title', 'Foo', 'Bear']}>
            <TableRow>
              <TableCell>Happy happy</TableCell>
              <TableCell>joy joy</TableCell>
              <TableCell>song</TableCell>
            </TableRow>
          </Table>
          <Table srCaption="Test table" borderless columns={['Title', 'Foo', 'Bear']}>
            <TableRow>
              <TableCell>Happy happy</TableCell>
              <TableCell>joy joy</TableCell>
              <TableCell>song</TableCell>
            </TableRow>
          </Table>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}

export default Home;
