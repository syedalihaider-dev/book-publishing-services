import styles from "../terms-and-conditions/page.module.css";

export default function PrivacyPolicy() {
return (
<div className={styles.privacy}>
  <section className={styles.term_banner}>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <h1>
            <span className="primarytxt">Privacy Policy</span>
          </h1>
        </div>
      </div>
    </div>
  </section>
  <div className={styles.terms_content}>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className={styles.wrapper}>
            <div className={styles.inner_wrapper}>
              <h3>Our Privacy Policy</h3>
              <p>
                We collect information from you when you register on our site, place an order, subscribe to our
                newsletter, or fill out a form.
                <br /><br />
                When ordering or registering on our site, as appropriate, you may be asked to enter your name, e-mail
                address, mailing address, phone number, or credit card information. You may, however, visit our site
                anonymously.
              </p>
            </div>
            <div className={styles.inner_wrapper}>
              <h3>What do we use your information for?</h3>
              <p>
                The information we collect from you may be used in one of the following ways:
              </p>
              <br />
              <ul>
                <li>To personalize your experience – your information helps us better respond to your individual needs.
                </li>
                <li>To improve our website – we continually strive to improve our website offerings based on the
                  information and feedback we receive from you.</li>
                <li>To improve customer service – your information helps us effectively respond to your customer service
                  requests and support needs.</li>
                <li>To process transactions – your information, whether public or private, will not be sold, exchanged,
                  transferred, or given to any other company for any reason whatsoever, without your consent, other than
                  for the express purpose of delivering the purchased product or service requested.</li>
                <li>To send periodic emails – the email address you provide may be used to send you information, respond
                  to inquiries, and/or other requests or questions.</li>
              </ul>
            </div>
            <div className={styles.inner_wrapper}>
              <h3>How do we protect your information?</h3>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information when you
                place an order or enter, submit, or access your personal information.
                <br /><br />
                We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure
                Socket Layer (SSL) technology and then encrypted into our payment gateway providers database only to be
                accessible by those authorized with special access rights to such systems, and are required to keep the
                information confidential.
                <br /><br />
                After a transaction, your private information (credit cards, social security numbers, financials, etc.)
                will not be stored on our servers.
              </p>
            </div>
            <div className={styles.inner_wrapper}>
              <h3>Do we use cookies?</h3>
              <p>
                Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive
                through your Web browser (if you allow) that enables the sites or service providers systems to recognize
                your browser and capture and remember certain information.
                <br /><br />
                We use cookies to keep track of advertisements and compile aggregate data about site traffic and site
                interaction so that we can offer better site experiences and tools in the future. We may contract with
                third- party service providers to assist us in better understanding our site visitors. These service
                providers are not permitted to use the information collected on our behalf except to help us conduct and
                improve our business.
              </p>
            </div>
            <div className={styles.inner_wrapper}>
              <h3>Why do we use cookies?</h3>
              <p>
                We use cookies to keep track of advertisements and compile aggregate data about site traffic and site
                interactions. It enables us to offer better site experiences and tools to the users. If required, we may
                seek services from a third party to assist us in understanding the behavior of visitors. However,
                third-party service providers are not allowed to use the collected information except for the sole
                purpose of customers analysis.
              </p>
            </div>
            <div className={styles.inner_wrapper}>
              <h3>Do we disclose any information to outside parties?</h3>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable
                information. This does not include trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those parties agree to keep this information
                confidential. We may also release your information when we believe release is appropriate to comply with
                the law, enforce our site policies, or protect ours or others rights, property, or safety. However,
                non-personally identifiable visitor information may be provided to other parties for marketing,
                advertising, or other uses.
              </p>
            </div>
            <div className={styles.inner_wrapper}>
              <h3>Third party links</h3>
              <p>
                Occasionally, at our discretion, we may include or offer third party products or services on our
                website.
                <br /><br />
                These third party sites have separate and independent privacy policies. We therefore have no
                responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek
                to protect the integrity of our site and welcome any feedback about these sites.
              </p>
            </div>
            <div className={styles.inner_wrapper}>
              <h3>Online privacy policy only</h3>
              <p>
                This online privacy policy applies only to information collected through our website and not to
                information collected offline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}