
import React from 'react';
import Link from 'react-router/lib/Link';
import PaymentOptions from '../../components/PaymentOptions';
import OverviewByTaxYear from '../../components/OverviewByTaxYear';
import RecentPayments from '../../components/RecentPayments';
import TaxRecords from '../../components/TaxRecords';
import Alert from '../../lib/components/Alert';
import Panel from '../../lib/components/Panel';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import styles from './styles.scss';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      finePrintVisible: false,
    };
    this.toggleFinePrint = this.toggleFinePrint.bind(this);
  }

  toggleFinePrint() {
    this.setState({ finePrintVisible: !this.state.finePrintVisible });
  }

  renderFinePrint() {
    if (!this.state.finePrintVisible) {
      return null;
    }

    return (
      <div id="finePrint">
        <p>The numbers here may not reflect:</p>
        <ul>
          <li>Recently filed or processing returns</li>
          <li>Recent payments or adjustments</li>
          <li>Information on your business account</li>
          <li>Civil penalties</li>
          <li>Installment agreement user fees</li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <FlexContainer>
        <FlexRow>
          <FlexCol>
            <Alert
              type="warning"
              title="Your account is in jeopardy of lien or levy."
              body={'Please pay immediately by bank account, by card, or set up a payment plan, if applicable. Resolve your balance, or we may file a Notice of Federal Tax Lien (if we haven\'t already) and levy your assets.'}
            />
          </FlexCol>
        </FlexRow>
        <FlexRow>
          <FlexCol lg="8" md="12">
            <Panel className={styles.topRow} padding="extra">
              <div className={styles.date}>
                As of Mar 22, 2017, you owe:
              </div>
              <div className={styles.baldue}>
                $5,408.97
              </div>
              <div className={styles.notSure}>
                <Link to="/notsure">Not sure you owe this amount?</Link>
              </div>
              <div className={styles.penalties}>
                Penalties and interest continue to accrue until tax is paid in full.
              </div>
              <div className={styles.finePrint}>
                <span className={styles.leadin}>
                  The information provided is based on our current data.
                </span>
                <button
                  className={styles.finePrintButton}
                  aria-expanded={this.state.finePrintVisible} aria-controls="finePrint"
                  onClick={this.toggleFinePrint}
                >
                  <span>
                    Learn more
                  </span>
                </button>
                {this.renderFinePrint()}
              </div>
            </Panel>
          </FlexCol>
          <FlexCol lg="4" md="6">
            <PaymentOptions />
          </FlexCol>
          <FlexCol lg="4" md="6">
            <OverviewByTaxYear />
          </FlexCol>
          <FlexCol lg="4" md="6">
            <RecentPayments />
          </FlexCol>
          <FlexCol lg="4" md="6">
            <TaxRecords />
          </FlexCol>
        </FlexRow>
      </FlexContainer>
    );
  }
}
