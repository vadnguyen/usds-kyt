
import React from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import styles from './styles.scss';

export default function NotSureYouOwe() {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol className={styles.infoPage}>
          <div className={styles.breadcrumbs}>
            <Link to="/account">Your Account</Link> / Not Sure You Owe This Amount ?
          </div>

          <h1>Not Sure You Owe This Amount?</h1>

          <Panel padded>
            <section>
              <h2>You Received the Notice But Don’t Agree With the Balance</h2>
              <h3>Refund Claim/Amended Return</h3>
              <p>
                {`If you file your tax return and then realize you made a mistake, you can amend the return.`}
              </p>
              <p>
                <Link>{`https://taxpayeradvocate.irs.gov/get-help/amending-a-return`}</Link>
              </p>

              <h3>Penalty Abatement</h3>
              <p>
                {`In some cases, after the tax is paid the IRS will waive the penalties for filing and paying late. However, you’ll need to ask the IRS to do this.`}
              </p>
              <p>
                <Link>{`https://taxpayeradvocate.irs.gov/get-help/consequences-of-not-filing`}</Link>
              </p>

              <h3>Injured Spouse</h3>
              <p>
                {`If you filed a joint return and you're not responsible for your spouse's debt, you're entitled to request your portion of the refund back from the IRS.`}
              </p>
              <p>
                <Link>{`https://taxpayeradvocate.irs.gov/get-help/consequences-of-not-filing`}</Link>
              </p>

              <h3>Innocent Spouse</h3>
              <p>
                {`Many married taxpayers choose to file a joint tax return because of certain benefits this filing status allows them.  Joint and several liability means that each taxpayer is legally responsible for the entire liability. You may have filed jointly and now wish to request relief from being jointly and severally liable.`}
              </p>
              <p>
                <Link>{`https://www.irs.gov/taxtopics/tc205.html`}</Link>
              </p>

              <h3>Identity Theft</h3>
              <p>
                {`If you believe you have been a victim of identity theft here’s what you need to do. `}
              </p>
              <p>
                <Link>{`https://www.irs.gov/uac/taxpayer-guide-to-identity-theft`}</Link>
              </p>

              <h3>Audit Reconsideration</h3>
              <p>
                {`You got a notice from the IRS saying your tax return was audited (or the IRS created a return for you) and you owe taxes, and you disagree with the tax the IRS says that you owe.`}
              </p>
              <p>
                <Link>{`https://taxpayeradvocate.irs.gov/get-help/audit-reconsiderations`}</Link>
              </p>

              <h3>Doubt as to Liability, Offer in Compromises(OICs)</h3>
              <p>
                {`If you can’t pay your full tax debt, or if paying it all would create a financial hardship for you, an offer in compromise (OIC) may be an option. An OIC is an agreement between you and the IRS, where the IRS agrees to accept less than the full amount you owe.`}
              </p>
              <p>
                <Link>{`https://taxpayeradvocate.irs.gov/get-help/offers-in-compromise`}</Link>
              </p>

              <h3>Preparer Issues</h3>
              <p>
                {`If you need help finding a preparer or reporting preparer fraud, find guidance here.`}
              </p>
              <p>
                <Link>{`https://www.irs.gov/taxtopics/tc254.html`}</Link>
              </p>
            </section>

            <section>
              <h2>You Didn’t Get a Notice/You Lost Your Notice</h2>

              <h3>I Got a Notice/ I Lost My Notice</h3>
              <p>
                <Link>{`https://taxpayeradvocate.irs.gov/get-help/letter-from-the-irs`}</Link>
              </p>
            </section>
            <section>
              <h2>You Don’t Know Why You Got a Notice</h2>

              <h3>Understanding Your IRS Notice or Letter</h3>
              <p>
                Your notice may contain the following language
              </p>
              <blockquote>
                <h4>Contact us</h4> 
                <p>
                  {`We provide our contact phone number on the top right-hand corner of the notice or letter. Typically, you only need to contact us if you don’t agree with the information, if we requested additional information, or if you have a balance due. You can also write to us at the address in the notice or letter. If you write, allow at least 30 days for our response.`}
                </p>
              </blockquote>
            </section>
          </Panel>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}
