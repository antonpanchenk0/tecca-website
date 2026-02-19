export default function TermsOfService() {
  return (
    <div className="bg-background relative py-16 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Page header */}
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-primary/15 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
              Version 1.2
            </span>
            <span className="text-muted-foreground text-sm">—</span>
            <span className="text-muted-foreground text-sm">Feb 11, 2026</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">Terms of Service</h1>
          <p className="text-muted-foreground mt-4 text-sm">
            <strong className="text-foreground">Last updated: February 11, 2026</strong>
          </p>
        </div>

        {/* Document body */}
        <div className="mt-12 space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-bold">1. GENERAL PROVISIONS</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                These Terms and Conditions (hereinafter referred to as the &quot;Terms&quot;) govern
                Your access to and use of the website http://tecca.io, as well as its related
                software, interface, plugins, and server infrastructure (collectively referred to as
                the &quot;Platform&quot;).
              </p>
              <p>
                The purpose of the Platform is to provide Consumers with convenient and efficient
                tools for the centralized collection, management, prioritization, and tracking of
                Feedback. The Platform helps structure received Feedback, analyze it, and make
                informed decisions regarding the development of products or services.
              </p>
              <p>
                The Platform is owned and operated by Tecca LLC, a legal entity registered under the
                laws of the United States of America, with its registered address at 30 N Gould St
                Ste R, Sheridan, WY 82801 (hereinafter referred to as the &quot;Company,&quot;
                &quot;We,&quot; or &quot;Us&quot;).
              </p>
              <p>
                The Company is not a party to any agreements between Consumers, or between Consumers
                and third parties, and is not responsible for the actions of Consumers or the
                legality of their interactions. All responsibility for compliance with applicable
                laws and regulations when using the Platform rests with the Consumer.
              </p>
              <p>
                We strive to ensure transparency, security, and compliance with international
                standards. Use of the Platform constitutes Your acceptance of these Terms, which
                define Your rights, obligations, and interaction with the Company, its services, and
                other Consumers.
              </p>
              <p>
                In addition to these Terms, use of the Platform is governed by the Privacy Notice,
                which describes the collection, storage, and processing of Your personal and
                technical data. By accessing or using the Platform, You confirm that You fully
                accept these Terms. If You do not agree with any provision, You are not authorized
                to use the Platform.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  1.2. Acceptance of the Terms
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    These Terms are deemed accepted if You click the &quot;Accept&quot; button or
                    any other similar confirmation button while using the Platform, which clearly
                    indicates Your agreement to the Terms.
                  </p>
                  <p>
                    Clicking the &quot;Accept&quot; button or using the Platform constitutes the
                    primary and mandatory method of agreeing to this Agreement. Your consent
                    signifies that You have fully read, understood, and agree to comply with the
                    Terms.
                  </p>
                  <p>
                    If You do not agree with any provision of these Terms, You are prohibited from
                    using the Platform and accessing its functionality.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">
                  1.3. Eligibility to use the Platform
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    The Platform is available for use only by individuals who have the legal
                    capacity to enter into legally binding agreements under the laws of their
                    jurisdiction. Use of the Platform is prohibited for individuals who have not
                    reached the minimum legal age established by the applicable law of their country
                    or who do not meet other legal requirements.
                  </p>
                  <p>By using the Platform, You represent and warrant that:</p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      You have reached the minimum age required to enter into legally binding
                      agreements under applicable law;
                    </li>
                    <li>Your use of the Platform in Your jurisdiction is lawful;</li>
                    <li>
                      You are acting on Your own behalf or have the appropriate authority to act on
                      behalf of the organization You represent.
                    </li>
                  </ul>
                  <p>
                    The Company reserves the right to deny access to the Platform to any Consumer if
                    it is determined that the Consumer does not meet the aforementioned requirements
                    or violates any other provisions of these Terms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-bold">2. DEFINITIONS</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              This section defines the key terms used in this Agreement to ensure a clear
              understanding of the Terms.
            </p>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Platform</strong> – refers to the SaaS software
                product developed and maintained by the Company, provided to Consumers for
                organizing the collection and management of Feedback from their end consumers. The
                Platform consists of a personalized page and an internal admin panel. The
                personalized page is accessible via a unique link, where Consumers can submit
                Feedback, vote on ideas, and view their status. The internal admin panel is
                accessible only to the Consumer, allowing management of collected Feedback, creation
                of a Roadmap, and publication of a Changelog.
              </p>
              <p>
                <strong className="text-foreground">Company</strong> or{' '}
                <strong className="text-foreground">We</strong> – refers to the legal entity Tecca
                LLC, registered under the laws of the United States of America, which owns and
                manages all intellectual property rights in the Platform. The Company develops,
                maintains, administers, and ensures the operation of the Platform in accordance with
                the terms of this Agreement.
              </p>
              <p>
                <strong className="text-foreground">Consumer</strong> or{' '}
                <strong className="text-foreground">You</strong> – refers to the legal entity that
                has registered an Account on the Platform and entered into an agreement with the
                Company by accepting these Terms. The Consumer is able to create their personalized
                page for collecting Feedback and use the internal admin panel to manage the
                collected data.
              </p>
              <p>
                <strong className="text-foreground">Account</strong> – a unique record in the
                Platform system created by the Consumer for identification, access to the personal
                dashboard, management of functionality, Pricing plans, and other settings. The
                Account is personalized and may not be transferred to third parties without the
                Company&apos;s consent.
              </p>
              <p>
                <strong className="text-foreground">Feedback</strong> – any message submitted by
                Consumers on the Consumer&apos;s personalized page through the Platform, which may
                include suggestions for new features, reports of bugs or technical issues,
                descriptions of problems or needs encountered while using the product, as well as
                comments, ratings, and general impressions regarding the product.
              </p>
              <p>
                <strong className="text-foreground">Roadmap</strong> – an interactive plan for the
                Consumer&apos;s product development, created within the Platform based on collected
                Feedback. The Roadmap reflects the status of ideas and features as &quot;Low
                Priority&quot; or &quot;High Priority&quot;.
              </p>
              <p>
                <strong className="text-foreground">Changelog</strong> – a public list of changes
                that the Consumer may create within the Platform to inform their Consumers about
                implemented features, bug fixes, or other updates.
              </p>
              <p>
                <strong className="text-foreground">Subscription</strong> – a paid form of access to
                the Platform for a defined period, according to the selected Pricing plan, granting
                the Consumer the right to use the Platform&apos;s functionality within the scope and
                limits specified by that plan.
              </p>
              <p>
                <strong className="text-foreground">Pricing plan</strong> – a set of terms and scope
                of Platform functionality provided to the Consumer under the Subscription, including
                cost, duration, limitations, and additional features. Pricing plans may be modified
                by the Company unilaterally with notification to Consumers in accordance with the
                procedure established in these Terms.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-bold">3. USE OF THE PLATFORM</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Platform is provided to Consumers solely for the purpose of organizing the
                collection and management of Feedback from end consumers of their product. The
                Platform&apos;s functionality includes access to a personalized page, the
                administrative panel, and tools for creating a Roadmap and Changelog, enabling the
                systematic organization of suggestions, ideas, and bug reports, prioritization of
                development, and communication of updates.
              </p>
              <p>
                Use of the Platform&apos;s functionality is permitted only within the intended
                purpose of the Platform. The Consumer agrees to use the Platform in a manner that
                does not compromise its technical or functional stability and does not interfere
                with other Consumers&apos; access to the Platform.
              </p>
              <p>
                Access to the Platform is provided via the official web interface and other methods
                designated by the Company. Use of the Platform is permitted solely for its intended
                purpose and in accordance with these Terms.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  3.1. Access to functionality
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    The Consumer is granted access to the Platform solely within the scope of the
                    selected Pricing plan and the validity of an active Subscription. Access allows
                    the use of the Platform&apos;s functionality, but does not transfer any
                    ownership rights to the Platform or its individual components.
                  </p>
                  <p>
                    The Company reserves the right to improve and update the Platform, modify the
                    set of available tools, or change the terms of their use. Such changes are
                    implemented at the Company&apos;s discretion and take effect upon publication
                    through official communication channels.
                  </p>
                  <p>
                    The Consumer acknowledges that the operation of certain modules depends on the
                    settings configured by the Consumer within the internal admin panel. The Company
                    does not interfere with the internal management of these elements, except in
                    cases where submitted Feedback violates the law or breaches these Terms.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">3.2. General rules of use</h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Use of the Platform must be conducted strictly in accordance with applicable law
                    and these Terms. Any activity that violates these requirements, including
                    fraudulent actions, data manipulation, or other unlawful conduct, is strictly
                    prohibited.
                  </p>
                  <p>
                    Specifically, it is prohibited to knowingly provide false information, use
                    personal data of third parties without their consent, mislead the Company or
                    other Consumers, gain unlawful benefits, or attempt to circumvent any provisions
                    of these Terms. Submitting requests on behalf of others without their explicit
                    consent, or any actions that may harm the Company, also constitute a violation.
                  </p>
                  <p>
                    Uploading, posting, or distributing Feedback that contains defamation,
                    discriminatory statements, hate speech, offensive materials, promotes violence
                    or illegal activities, or infringes the intellectual property rights of third
                    parties is prohibited. Additionally, spreading viruses, trojans, spyware, or
                    other malicious code capable of destabilizing the Platform or damaging data and
                    devices of other Consumers is strictly forbidden.
                  </p>
                  <p>
                    Unauthorized use, copying, modification, or distribution of Platform content, as
                    well as any interference with its operation, including vulnerability testing,
                    use of automated data collection tools, reverse engineering of code, bypassing
                    technical restrictions, or creating copies of the Platform or its components,
                    constitutes a breach of these Terms. Using the Platform to create or promote
                    competing products is also prohibited.
                  </p>
                  <p>
                    Transferring an Account, Subscription, or access to the Platform to third
                    parties without the Company&apos;s written consent is forbidden and considered a
                    material breach of the Terms.
                  </p>
                  <p>
                    If any of the aforementioned violations are detected, the Company reserves the
                    right to immediately restrict or terminate access to the Platform, implement
                    technical or administrative measures, and disclose relevant information to
                    competent authorities in accordance with applicable law.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">
                  3.3. Role of other Consumers
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Other consumers who access a unique link created by the Consumer may submit
                    Feedback regarding the Consumer&apos;s product or service. Feedback may include
                    suggestions for new features, bug reports, or general evaluations of the
                    product.
                  </p>
                  <p>
                    Such consumers interact with the Platform solely under these Terms and the
                    Privacy Notice. To engage with the Platform, they create an Account, which is
                    individual and non-transferable to third parties. Access to the Platform for
                    these consumers is provided via the personalized page created by the Consumer,
                    and the Consumer, as the administrator of the respective page, is responsible
                    for all actions and submitted Feedback.
                  </p>
                  <p>
                    The Company reserves the right, at its sole discretion, to moderate Feedback.
                    Such moderation may be performed in cases where Feedback violates these Terms,
                    applicable law, or poses a threat to the stable operation of the Platform.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-bold">4. REGISTRATION AND ACCOUNT</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Creating an Account is a prerequisite for full use of the Platform and serves as the
              basis for the Consumer&apos;s interaction with the Platform. All rules regarding
              registration, maintenance of accurate information, security of account credentials, as
              well as possible restrictions or termination of an Account, are defined in this
              section.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  4.1. General provisions on Consumer Accounts
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    To gain access to all components and extended functionality of the Platform, the
                    Consumer must create an Account. This can be done using a Google or Discord
                    account or by entering an email address followed by verification.
                  </p>
                  <p>
                    During registration, the Consumer must provide accurate, complete, and
                    up-to-date information. The Company may also require the creation of a password
                    and confirmation of agreement to these Terms.
                  </p>
                  <p>
                    Upon successful registration, the Consumer is granted access to a personal
                    dashboard, where they can use the Platform, change the Pricing plan, update the
                    Subscription, and more.
                  </p>
                  <p>
                    The Consumer is fully responsible for maintaining the confidentiality of their
                    account credentials, including the password, and must take appropriate measures
                    to prevent unauthorized access to the Account. In the event of suspected or
                    actual unauthorized access, the Consumer must immediately notify the Company
                    through the communication channels specified in these Terms.
                  </p>
                  <p>
                    All actions performed using the Account are considered to have been carried out
                    by the Consumer unless proven otherwise. The Company is not responsible for the
                    consequences of such actions if they result from the Consumer&apos;s failure to
                    maintain confidentiality.
                  </p>
                  <p>
                    The Consumer must timely update the information provided during registration to
                    ensure it remains accurate and current. If false, outdated, or inaccurate
                    information is discovered, the Company reserves the right to suspend or restrict
                    access to the Platform, providing prior notice to the Consumer.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">
                  4.2. Account access restrictions and termination
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    The Company reserves the right to temporarily restrict or permanently terminate
                    a Consumer&apos;s access to the Platform in the following cases:
                  </p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>violation of these Terms, the Privacy Notice, or other Platform rules;</li>
                    <li>
                      misuse of the Platform&apos;s functionality or attempts to interfere with its
                      operation, including the use of automated tools or bypassing technical
                      restrictions;
                    </li>
                    <li>
                      providing knowingly false, misleading, or incomplete information during
                      registration or while using the Platform;
                    </li>
                    <li>
                      using the Platform for illegal activities or creating security risks for other
                      Consumers;
                    </li>
                    <li>engaging in actions that may harm the Company or the Platform.</li>
                  </ul>
                  <p>
                    In cases of systematic or material violations, fraudulent actions,
                    manipulations, or security risks to the Platform, the Company has the right to
                    immediately, without prior notice, temporarily block, deactivate, or permanently
                    delete the Consumer&apos;s Account along with all associated information.
                  </p>
                  <p>
                    The Consumer will be notified of any access restriction or Account deletion with
                    a general explanation, unless otherwise required by law or competent
                    authorities.
                  </p>
                  <p>
                    The Consumer may voluntarily initiate the deletion of their Account via the
                    Platform or customer support. Upon confirmation of the request, access to the
                    Platform and the Consumer&apos;s data will be terminated, except for information
                    that the Company is required to retain in accordance with applicable law or
                    internal security policies.
                  </p>
                  <p>
                    Temporary restrictions or permanent termination of access do not relieve the
                    Consumer of liability for actions taken prior to such measures and do not
                    constitute grounds for a refund of the Pricing plan, unless otherwise required
                    by law or these Terms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-bold">5. SUBSCRIPTION AND PAYMENT</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Access to the Platform is provided to the Consumer on a paid Subscription basis.
                Subscriptions may be billed on a monthly or annual basis, depending on the selected
                Pricing plan. Each Pricing plan specifies the scope of available functionality as
                well as other terms explicitly indicated during Subscription purchase.
              </p>
              <p>
                By subscribing, the Consumers confirm that they have read and understood the terms
                of the selected Pricing plan, including its cost, duration, and any applicable
                limitations. Payment for the Subscription is made in advance for the entire selected
                period and must be processed through the payment methods available on the Platform.
                All payments are handled via secure payment services partnered with the Company.
              </p>
              <p>
                Upon successful payment, the Subscription is activated automatically, and the
                Consumer gains access to the Platform&apos;s functionality in accordance with the
                selected Pricing plan. If the Consumer has chosen automatic renewal, the payment for
                each subsequent period will be automatically charged to the payment method linked to
                the Account, unless the Consumer cancels the renewal in advance.
              </p>
              <p>
                The Consumer may cancel automatic renewal or terminate the Subscription at any time
                via their Account settings. The Subscription will remain active until the end of the
                already paid period, after which access to the paid functionality will be restricted
                or suspended.
              </p>
              <p>
                Refunds for paid Subscriptions are only available if the Consumer is dissatisfied
                with the Platform&apos;s purchased functionality. Refund requests must be submitted
                within 5 days of the payment date by contacting the Company&apos;s customer support.
                No refunds will be issued after this period.
              </p>
              <p>
                In the event of changes to the cost or terms of Pricing plans, the Company will
                notify the Consumer in advance, but no less than 14 calendar days before such
                changes take effect. Continued use of the Platform after the new terms become
                effective constitutes the Consumer&apos;s acceptance of the updated rates and rules.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-bold">6. MODERATION AND MANAGEMENT OF FEEDBACK</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Company reserves the right to monitor and control Consumer activity on the
                Platform, including access to personalized pages created within Consumer Accounts.
                Such access is used to ensure technical stability, moderation, and compliance with
                these Terms.
              </p>
              <p>
                The registration of new Consumers and the creation of personalized pages by them may
                be subject to verification and confirmation by the Company. As part of such
                verification, the Company reserves the right to temporarily restrict functionality
                or suspend access to the Account until the assessment is completed.
              </p>
              <p>
                Moderation of the Platform is carried out through technical management, including
                database administration, with the ability to remove or block individual Feedback,
                pages, or Accounts. The Company may apply such measures if submitted Feedback or
                Consumer actions violate these Terms, applicable law, third-party rights, or pose a
                threat to the security or proper functioning of the Platform. Such measures may be
                taken without prior notice if required by the circumstances.
              </p>
              <p>
                In the event of restrictions or deletion of an Account, the Company will, where
                possible, inform the Consumer of the general reason for the measures taken. However,
                in cases of legal requirements or the need to ensure security, the Company may
                refrain from providing such notice until the relevant risks are eliminated.
              </p>
              <p>
                The deletion or blocking of an Account due to violations of these Terms does not
                create an obligation for the Company to refund any Subscription fees, unless
                otherwise provided by law or a special agreement with the Consumer.
              </p>
              <p>
                The Consumer agrees that the Company has the exclusive right to manage access to the
                Platform, including moderation and removal of Feedback and Accounts, and that such
                actions are necessary to ensure the safe, stable, and lawful operation of the
                Platform.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-bold">7. RIGHTS AND OBLIGATIONS OF THE PARTIES</h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  7.1. Rights and obligations of Consumers
                </h3>
                <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground">The Consumer has the right to:</p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      access the functionality of the Platform in accordance with the selected
                      Pricing plan and the terms of the active Subscription;
                    </li>
                    <li>
                      receive technical support within the scope and format defined by the Company;
                    </li>
                    <li>modify their Account at any time;</li>
                    <li>
                      delete their Account by sending a request to{' '}
                      <a href="mailto:support@tecca.io" className="text-primary hover:underline">
                        support@tecca.io
                      </a>
                      ;
                    </li>
                    <li>
                      change or update their Pricing plan in the manner established by the Company;
                    </li>
                    <li>
                      maintain the confidentiality of their data processed within the Platform, in
                      accordance with the Privacy Notice;
                    </li>
                    <li>
                      refuse Subscription renewal or terminate relations with the Company in the
                      manner provided by these Terms.
                    </li>
                  </ul>

                  <p className="font-medium text-foreground">The Consumer is obliged to:</p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      provide accurate, up-to-date, and complete information when registering an
                      Account and update it in case of changes;
                    </li>
                    <li>
                      maintain the confidentiality of their account credentials and not disclose
                      them to third parties;
                    </li>
                    <li>
                      use the Platform solely for lawful purposes and in compliance with these
                      Terms;
                    </li>
                    <li>
                      refrain from actions that may compromise the stability or security of the
                      Platform or cause harm to the Company or other Consumers;
                    </li>
                    <li>
                      make timely and full payment for the Subscription in accordance with the
                      selected Pricing plan.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">
                  7.2. Rights and obligations of the Company
                </h3>
                <div className="mt-3 space-y-4 text-muted-foreground leading-relaxed">
                  <p className="font-medium text-foreground">The Company has the right to:</p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      modify, update, or improve the Platform, including adding, changing, or
                      removing functionality, without prior approval from the Consumer;
                    </li>
                    <li>
                      temporarily suspend the operation of the Platform for technical or maintenance
                      work, notifying Consumers within a reasonable timeframe;
                    </li>
                    <li>
                      restrict or terminate a Consumer&apos;s access to the Platform in case of
                      violation of these Terms;
                    </li>
                    <li>
                      establish, modify, or cancel Pricing plan and Subscription conditions, by
                      notifying Consumers in advance.
                    </li>
                  </ul>

                  <p className="font-medium text-foreground">The Company is obliged to:</p>
                  <ul className="ml-6 space-y-2 list-disc">
                    <li>
                      provide Consumers with access to the Platform within the scope of the selected
                      Pricing plan and the active paid Subscription;
                    </li>
                    <li>
                      ensure the storage and protection of Consumers&apos; personal data in
                      accordance with applicable law and the internal Privacy Notice;
                    </li>
                    <li>
                      timely inform Consumers about changes to the Terms, Pricing plan, or Platform
                      policies;
                    </li>
                    <li>
                      take reasonable technical and organizational measures to ensure uninterrupted
                      and secure operation of the Platform.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-bold">8. INTELLECTUAL PROPERTY</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                All intellectual property rights to the Platform, including but not limited to the
                software code, architecture, databases, interface design, logos, trademarks, texts,
                graphic materials, structure, and organization of the Platform, belong exclusively
                to the Company or are lawfully used by it. Nothing in these Terms grants the
                Consumer any ownership rights to the Platform or its individual elements.
              </p>
              <p>
                The Company grants the Consumer a limited, non-exclusive, non-transferable, and
                revocable right to access and use the Platform solely within its functionality and
                in accordance with these Terms. The Consumer may use the Platform for personal or
                commercial purposes related to their activities only in the manner provided by these
                Terms and the selected Pricing plan.
              </p>
              <p>
                All Feedback left by other consumers on the Consumer&apos;s personalized pages is
                the property of the respective Consumer. The Company does not acquire ownership
                rights to such Feedback but receives a non-exclusive license to process, store, and
                display it within the Platform for the purpose of ensuring its functionality.
              </p>
              <p>
                Copying, modifying, creating derivative works, distributing, reverse engineering,
                decompiling, or any other unauthorized use of the Platform and its materials without
                the Company&apos;s written consent is prohibited.
              </p>
              <p>Consumers are also prohibited, without the Company&apos;s consent, from:</p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>
                  copying, modifying, distributing, or reproducing any elements of the Platform,
                  including its design, structure, software, database, logos, and text materials;
                </li>
                <li>creating derivative products based on the Platform or its functionality;</li>
                <li>
                  using the Company&apos;s logos, trademarks, domain names, or other intellectual
                  property for personal, commercial, or advertising purposes;
                </li>
                <li>
                  removing or altering any copyright, trademark, or other legal notices displayed on
                  the Platform;
                </li>
                <li>
                  circumventing technical protection measures of the Platform, performing hacking
                  attacks, decompiling, or engaging in other actions aimed at unauthorized access to
                  the source code or internal infrastructure of the Platform.
                </li>
              </ul>
              <p>
                Any violation of these rules constitutes an infringement of the Company&apos;s
                intellectual property rights and may result in legal liability in accordance with
                applicable law.
              </p>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-bold">
              9. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  9.1. Limitation of the Company&apos;s liability
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    The Platform is provided to the Consumer on an &quot;as is&quot; basis, without
                    any express or implied warranties regarding its uninterrupted, error-free, or
                    completely secure operation. The Company makes reasonable efforts to maintain
                    the stable functioning of the Platform; however, it does not guarantee that its
                    operation will be uninterrupted or that any defects or errors will be corrected
                    within a specified timeframe.
                  </p>
                  <p>
                    The Platform has been created as a tool intended to assist Consumers in
                    collecting Feedback, determining development priorities, and improving their own
                    products. At the same time, the Company does not guarantee the achievement of
                    any specific results in the Consumer&apos;s activities and is not responsible
                    for the effectiveness of applying Feedback or other materials obtained through
                    the Platform.
                  </p>
                  <p>
                    The Company shall not be liable for any direct or indirect damages, loss of
                    profits, data, or reputation of the Consumer arising from the use or inability
                    to use the Platform, including but not limited to technical failures,
                    interruptions of access, cyberattacks, force majeure circumstances, or actions
                    of third parties. In any case, the Company&apos;s liability is limited to the
                    amount actually paid by the Consumer for the most recent paid Subscription
                    period.
                  </p>
                  <p>
                    The Company is also not responsible for any actions or omissions of the Consumer
                    or third parties, including the provision of inaccurate data or infringement of
                    intellectual property rights.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">
                  9.2. Limitation of liability regarding Consumer data and Account
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    The Company applies reasonable technical and organizational measures to protect
                    Consumer Accounts and data from unauthorized access, loss, alteration, or
                    disclosure. However, the Consumer acknowledges that no system for data
                    transmission or storage over the Internet can guarantee absolute security.
                    Accordingly, the Company cannot fully eliminate the risk of unauthorized access
                    to the Consumer&apos;s Account or Feedback by third parties.
                  </p>
                  <p>
                    The Consumer is fully responsible for maintaining the confidentiality of their
                    Account login credentials and for all actions carried out under their Account.
                    In the event of loss or disclosure of the password, or if unauthorized access is
                    suspected, the Consumer must immediately notify the Company and take measures to
                    restore the security of their Account.
                  </p>
                  <p>
                    The Company shall not be liable for any damages or data loss resulting from the
                    Consumer&apos;s failure to maintain the confidentiality of login credentials,
                    the use of unreliable or compromised passwords, or the use of the
                    Consumer&apos;s Account by third parties, whether with or without the
                    Consumer&apos;s knowledge.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">
                  9.3. Limitation of liability for payment transactions
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    All payments for the Subscription on the Platform are processed through
                    third-party payment providers. The Platform is not a financial institution and
                    does not control the transaction processing. Accordingly, the Platform shall not
                    be liable for technical failures, bank errors, payment delays, double charges,
                    or other malfunctions arising from the payment systems.
                  </p>
                  <p>
                    The Consumer is solely responsible for ensuring the accuracy of their payment
                    method, verifying currency exchange rates, bank fees, and other conditions
                    related to the payment. If a transaction cannot be processed due to technical or
                    financial restrictions, access to the paid features of the Platform may be
                    suspended until the payment is successfully completed.
                  </p>
                  <p>
                    The Platform reserves the right to change the Subscription cost, suspend, or
                    terminate paid access in case of violations of these Terms, fraudulent actions,
                    or technical failures. In such cases, the Consumer shall not be entitled to a
                    refund or any other compensation, unless otherwise required by applicable law.
                  </p>
                  <p>
                    To the maximum extent permitted by law, the Platform&apos;s total liability in
                    connection with paid features shall be limited to the amount actually paid by
                    the Consumer during the last twelve (12) months.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">
                  9.4. Limitation of liability for Feedback
                </h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    The Platform functions as a tool for collecting, organizing, and displaying
                    Feedback to help Consumers develop their products and identify areas for
                    improvement. The Company provides only the technical capability for this process
                    and does not influence the content or evaluation of Feedback.
                  </p>
                  <p>
                    All Feedback posted by other consumers on a Consumer&apos;s personalized pages
                    reflects solely their personal opinion and does not represent the position or
                    statement of the Company. The Company does not verify the accuracy, relevance,
                    or legality of such Feedback and is not responsible for its content or any
                    consequences resulting from its use by the Consumer or third parties.
                  </p>
                  <p>
                    However, the Company reserves the right to take action regarding Feedback if its
                    content violates these Terms, applicable law, third-party rights, or poses a
                    risk to the stability and security of the Platform. Such actions may include
                    restricting access, moderating, or removing Feedback.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-bold">10. FINAL PROVISIONS</h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">10.1. Governing law</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  These Terms, as well as all legal relations between the Consumer and the Company,
                  are governed by and construed in accordance with the laws of the United States of
                  America and the State of Wyoming, regardless of the Consumer&apos;s place of
                  residence or location. Any disputes not resolved through negotiations shall be
                  finally resolved in the competent court at the Company&apos;s location.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">10.2. Dispute resolution</h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    All disputes, disagreements, or claims arising in connection with the use of the
                    Platform or the performance of these Terms shall be resolved through
                    negotiations between the parties. If an agreement cannot be reached through
                    direct negotiations within 30 (thirty) calendar days, the dispute shall be
                    resolved in accordance with applicable law.
                  </p>
                  <p>
                    The Consumer agrees that prior to initiating any judicial or administrative
                    proceedings, they must submit a written claim to the Company via the contact
                    form or email provided on the Platform. The Company undertakes to review such a
                    claim within 15 (fifteen) business days.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">10.3. Force majeure</h3>
                <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Neither party shall be liable for any partial or complete failure to fulfill its
                    obligations under these Terms if such failure results from force majeure
                    circumstances. Force majeure includes events or circumstances beyond the
                    parties&apos; control, including but not limited to: natural disasters, military
                    actions, mass riots, epidemics, actions of government authorities, failures in
                    telecommunications networks or internet providers, as well as hacker or
                    cyber-attacks.
                  </p>
                  <p>
                    The party unable to fulfill its obligations due to force majeure must promptly
                    notify the other party of the occurrence of such circumstances. The
                    responsibility for proving the existence of force majeure rests with the party
                    claiming it.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-foreground">10.4. Changes to the Terms</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  The Company reserves the right to update or modify these Terms at any time. All
                  changes take effect from the moment the new version is published on the Platform,
                  unless explicitly stated otherwise. The Consumer is responsible for periodically
                  reviewing updates. Continued use of the Platform after changes have been made
                  constitutes full acceptance of the updated Terms.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-border" />

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-bold">11. CONTACT INFORMATION</h2>
            <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
              <p>
                If you have any questions regarding this Agreement, please contact our support team
                at the following email address:{' '}
                <a
                  href="mailto:support@tecca.io"
                  className="text-primary hover:underline font-medium"
                >
                  support@tecca.io
                </a>{' '}
                or via the contact form at the following link:{' '}
                <a
                  href="https://tecca.io/contact"
                  className="text-primary hover:underline font-medium"
                >
                  https://tecca.io/contact
                </a>
              </p>
              <p>We will make every effort to provide assistance as promptly as possible.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
