
import React from 'react';
import Link from 'react-router/lib/Link';
import { FlexContainer, FlexRow, FlexCol } from '../../lib/components/FlexGrid';
import Panel from '../../lib/components/Panel';
import ExternalLink from '../../lib/components/ExternalLink';
import { Breadcrumbs, Breadcrumb } from '../../lib/components/Breadcrumbs';
import styles from './styles.scss';

export default function NotSureYouOwe() {
  return (
    <FlexContainer>
      <FlexRow>
        <FlexCol className={styles.infoPage}>
          <Breadcrumbs>
            <Breadcrumb>
              <Link to="/account">Your Account</Link>
            </Breadcrumb>
            <Breadcrumb>
              Not Sure You Owe This Amount ?
            </Breadcrumb>
          </Breadcrumbs>

          <h1>Not Sure You Owe This Amount?</h1>

          <Panel padding="extra">
            <section>
              <h2>You Received the Notice But Don’t Agree With the Balance</h2>
              <h3>Refund Claim/Amended Return</h3>
              <p>
                {'If you file your tax return and then realize you made a mistake, you can amend the return.'}
              </p>
              <p>
                <ExternalLink href="https://taxpayeradvocate.irs.gov/get-help/amending-a-return">
                  {'https://taxpayeradvocate.irs.gov/get-help/amending-a-return'}
                </ExternalLink>
              </p>

              <h3>Penalty Abatement</h3>
              <p>
                {'In some cases, after the tax is paid the IRS will waive the penalties for filing and paying late. However, you’ll need to ask the IRS to do this.'}
              </p>
              <p>
                <ExternalLink href="https://taxpayeradvocate.irs.gov/get-help/consequences-of-not-filing">
                  {'https://taxpayeradvocate.irs.gov/get-help/consequences-of-not-filing'}
                </ExternalLink>
              </p>

              <h3>Injured Spouse</h3>
              <p>
                {'If you filed a joint return and you\'re not responsible for your spouse\'s debt, you\'re entitled to request your portion of the refund back from the IRS.'}
              </p>
              <p>
                <ExternalLink href="https://taxpayeradvocate.irs.gov/get-help/consequences-of-not-filing">
                  {'https://taxpayeradvocate.irs.gov/get-help/consequences-of-not-filing'}
                </ExternalLink>
              </p>

              <h3>Innocent Spouse</h3>
              <p>
                {'Many married taxpayers choose to file a joint tax return because of certain benefits this filing status allows them.  Joint and several liability means that each taxpayer is legally responsible for the entire liability. You may have filed jointly and now wish to request relief from being jointly and severally liable.'}
              </p>
              <p>
                <ExternalLink href="https://www.irs.gov/taxtopics/tc205.html">
                  {'https://www.irs.gov/taxtopics/tc205.html'}
                </ExternalLink>
              </p>

              <h3>Identity Theft</h3>
              <p>
                {'If you believe you have been a victim of identity theft here’s what you need to do. '}
              </p>
              <p>
                <ExternalLink href="https://www.irs.gov/uac/taxpayer-guide-to-identity-theft">
                  {'https://www.irs.gov/uac/taxpayer-guide-to-identity-theft'}
                </ExternalLink>
              </p>

              <h3>Audit Reconsideration</h3>
              <p>
                {'You got a notice from the IRS saying your tax return was audited (or the IRS created a return for you) and you owe taxes, and you disagree with the tax the IRS says that you owe.'}
              </p>
              <p>
                <ExternalLink href="https://taxpayeradvocate.irs.gov/get-help/audit-reconsiderations">
                  {'https://taxpayeradvocate.irs.gov/get-help/audit-reconsiderations'}
                </ExternalLink>
              </p>

              <h3>Doubt as to Liability, Offer in Compromises(OICs)</h3>
              <p>
                {'If you can’t pay your full tax debt, or if paying it all would create a financial hardship for you, an offer in compromise (OIC) may be an option. An OIC is an agreement between you and the IRS, where the IRS agrees to accept less than the full amount you owe.'}
              </p>
              <p>
                <ExternalLink href="https://taxpayeradvocate.irs.gov/get-help/offers-in-compromise">
                  {'https://taxpayeradvocate.irs.gov/get-help/offers-in-compromise'}
                </ExternalLink>
              </p>

              <h3>Preparer Issues</h3>
              <p>
                {'If you need help finding a preparer or reporting preparer fraud, find guidance here.'}
              </p>
              <p>
                <ExternalLink href="https://www.irs.gov/taxtopics/tc254.html">
                  {'https://www.irs.gov/taxtopics/tc254.html'}
                </ExternalLink>
              </p>
            </section>

            <section>
              <h2>You Didn’t Get a Notice/You Lost Your Notice</h2>

              <h3>I Got a Notice/ I Lost My Notice</h3>
              <p>
                <ExternalLink href="https://taxpayeradvocate.irs.gov/get-help/letter-from-the-irs">
                  {'https://taxpayeradvocate.irs.gov/get-help/letter-from-the-irs'}
                </ExternalLink>
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
                  {'We provide our contact phone number on the top right-hand corner of the notice or letter. Typically, you only need to contact us if you don’t agree with the information, if we requested additional information, or if you have a balance due. You can also write to us at the address in the notice or letter. If you write, allow at least 30 days for our response.'}
                </p>
              </blockquote>
              <p>
                <ExternalLink href="https://www.irs.gov/individuals/understanding-your-irs-notice-or-letter?_ga=1.9028405.1649112403.1474668304">
                  {'https://www.irs.gov/individuals/understanding-your-irs-notice-or-letter?_ga=1.9028405.1649112403.1474668304'}
                </ExternalLink>
              </p>

              <h3>Search Individual Notices and Letters</h3>
              <p>
                <ExternalLink href="https://www.irs.gov/individuals/irs-notice-or-letter-for-individual-filers">
                  {'https://www.irs.gov/individuals/irs-notice-or-letter-for-individual-filers'}
                </ExternalLink>
              </p>

              <h3>Search Business Notices and Letters</h3>
              <p>
                <ExternalLink href="https://www.irs.gov/individuals/irs-notice-or-letter-for-business-filers">
                  {'https://www.irs.gov/individuals/irs-notice-or-letter-for-business-filers'}
                </ExternalLink>
              </p>

              <h3>Online Tools for Individual Taxpayers</h3>
              <p>
                {'Includes: Get Transcript, Free File, Online Payment Agreement Office in Compromise Pre-Qualifier and Taxpayer Assistance Center Locator, and more.'}
              </p>
              <p>
                <ExternalLink href="https://www.irs.gov/help-resources/tools">
                  {'https://www.irs.gov/help-resources/tools'}
                </ExternalLink>
              </p>

              <h3>Interactive Tax Assistant (ITA)</h3>
              <p>
                {'A tax law resource that takes you through a series of questions and provides you with responses to tax law questions.'}
              </p>
              <p>
                <ExternalLink href="https://www.irs.gov/uac/interactive-tax-assistant-ita-1">
                  {'https://www.irs.gov/uac/interactive-tax-assistant-ita-1'}
                </ExternalLink>
              </p>
            </section>

            <section>
              <h2>Did Not Find Your Answer?</h2>

              <h3>Call a Customer Service Representative</h3>
              <p>
                {'If you did not find guidance on your next step you may call a representative. You should have your information ready, including your tax return information.'}
              </p>
              <p>
                <ExternalLink href="https://www.irs.gov/help-resources/telephone-assistance">
                  {'https://www.irs.gov/help-resources/telephone-assistance'}
                </ExternalLink>
              </p>

              <h3>Submit a Freedom of Information Act request</h3>
              <p>
                {'Submit a FOIA (Freedom of Information Act) request to obtain the following:'}
              </p>
              <ul>
                <li>Your Audit Report form</li>
                <li>Your Work Papers</li>
                <li>Your Notices</li>
              </ul>
              <p>
                <ExternalLink href="https://www.irs.gov/uac/irs-freedom-of-information?_ga=1.209824021.1649112403.1474668304">
                  {'https://www.irs.gov/uac/irs-freedom-of-information?_ga=1.209824021.1649112403.1474668304'}
                </ExternalLink>
              </p>
            </section>
          </Panel>
        </FlexCol>
      </FlexRow>
    </FlexContainer>
  );
}
