import type { LanguageCode } from "./translations";

/**
 * Content of the legal pages (privacy policy, terms, cookie policy), per language.
 * English is the source and the fallback. Tokens inside strings:
 *   {name} {address}  → replaced by the company details
 *   {email}           → rendered as a mailto link
 *   {privacy}         → rendered as a link to the privacy policy
 * A block is a paragraph (string) or a bullet list (string[]).
 */
export type LegalSection = {
  h: string;
  b: (string | string[])[];
  /** Show the registration details box (NIF / STAT / RCS), plus email when "regEmail". */
  box?: "reg" | "regEmail";
  /** Render the contact address block. */
  contact?: boolean;
};

export type LegalDoc = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export type LegalPageKey = "privacy" | "terms" | "cookies";

export type LegalLang = {
  eyebrow: string;
  lastUpdated: string;
  updated: string;
  privacyLink: string;
  labels: { email: string; france: string; madagascar: string; address: string };
  privacy: LegalDoc;
  terms: LegalDoc;
  cookies: LegalDoc;
};

const en: LegalLang = {
  eyebrow: "Legal",
  lastUpdated: "Last updated",
  updated: "October 2026",
  privacyLink: "Privacy Policy",
  labels: {
    email: "Email",
    france: "Contact in France",
    madagascar: "Contact in Madagascar",
    address: "Address",
  },
  privacy: {
    title: "Privacy Policy",
    intro:
      "This policy explains how {name} handles the personal data submitted through this website, and the rights you have over that data.",
    sections: [
      {
        h: "1. Who is responsible for your data",
        box: "reg",
        b: ["The data controller is {name}, located at {address}."],
      },
      {
        h: "2. Data we collect",
        b: [
          "When you complete a form on this website, we collect the information you provide:",
          [
            "Name, company and job title",
            "Business email address and phone number",
            "Country",
            "Details of your project and any message you send",
          ],
          "We also record technical and contextual information related to your request: the date, the form used and the language of the website.",
        ],
      },
      {
        h: "3. Why we use it",
        b: [
          "We use this information only to:",
          [
            "answer your request and contact you about it",
            "prepare a proposal tailored to your project",
            "maintain the business relationship you initiate",
            "protect our website and prevent abuse",
          ],
          "We rely on your request and consent, on the steps needed to respond to you before any contract, and on our legitimate interest in running a secure and professional business. We do not use your data for automated decision-making.",
        ],
      },
      {
        h: "4. Cookies",
        b: [
          "This website may use cookies and similar technologies. Essential cookies are required for the site to work. Other cookies are used only according to the choices you make in the cookie banner, which you can change at any time through your browser settings.",
        ],
      },
      {
        h: "5. Retention and sharing",
        b: [
          "Your data is kept only for as long as necessary to handle your request and to manage the resulting relationship, then deleted or anonymised. We do not sell your personal data.",
          "Your data may be processed by service providers acting on our behalf, such as a customer relationship management system, hosting or email services. These providers may only use the data to deliver their service to us.",
        ],
      },
      {
        h: "6. International transfers",
        b: [
          "Our teams are based in Madagascar and we work with clients in Europe and elsewhere, so your data may be processed outside your country of residence. Where this happens, we take appropriate measures to keep your data protected in line with applicable data protection rules.",
        ],
      },
      {
        h: "7. Security",
        b: [
          "We apply technical and organisational measures to protect your data against loss, misuse and unauthorised access, including controlled access, confidentiality commitments for our staff and secure IT infrastructure.",
        ],
      },
      {
        h: "8. Your rights",
        b: [
          "Subject to applicable law, you can ask us to:",
          [
            "give you access to the data we hold about you",
            "correct inaccurate or incomplete data",
            "delete your data",
            "restrict or object to the processing of your data",
            "provide your data in a portable format",
            "withdraw your consent at any time, without affecting earlier processing",
          ],
          "To exercise these rights, write to {email}. We may ask you to confirm your identity before responding. If you believe your rights are not respected, you may also contact the data protection authority of your country.",
        ],
      },
      {
        h: "9. Children",
        b: [
          "This website is intended for business use and is not directed at children. We do not knowingly collect personal data from minors.",
        ],
      },
      {
        h: "10. Changes to this policy",
        b: [
          "We may update this policy from time to time. The date at the top of this page shows when it was last revised.",
        ],
      },
      { h: "11. Contact", b: [], contact: true },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro:
      "These terms govern your use of this website. By browsing it, you accept them. If you do not agree with them, please do not use the website.",
    sections: [
      {
        h: "1. Website publisher",
        box: "regEmail",
        b: ["This website is published by {name}, located at {address}."],
      },
      {
        h: "2. Use of this website",
        b: [
          "The content of this website is provided for information purposes about {name}'s outsourcing services. It does not constitute a contractual offer. You agree to use the website lawfully and not to disrupt its operation or attempt to access it in an unauthorised way.",
        ],
      },
      {
        h: "3. Proposals and contracts",
        b: [
          "Services, team compositions, schedules and prices are defined in a written proposal prepared for each client. Any engagement is governed by the contract signed between {name} and the client, which prevails over the information published on this website.",
        ],
      },
      {
        h: "4. Intellectual property",
        b: [
          "The texts, visuals, logos and design of this website belong to {name} or are used with permission. They may not be reproduced, modified or distributed, in whole or in part, without prior written authorisation.",
        ],
      },
      {
        h: "5. Accuracy of information and liability",
        b: [
          "We take care to keep the information on this website accurate and up to date, but we cannot guarantee that it is complete or free of errors. {name} cannot be held liable for any damage resulting from the use of this website or from temporary unavailability of the site.",
        ],
      },
      {
        h: "6. External links",
        b: [
          "This website may contain links to third-party websites. {name} has no control over their content and is not responsible for it.",
        ],
      },
      {
        h: "7. Personal data",
        b: [
          "The way we handle the personal data submitted through this website is described in our {privacy}.",
        ],
      },
      {
        h: "8. Changes to these terms",
        b: [
          "We may update these terms from time to time. The date at the top of this page shows when they were last revised.",
        ],
      },
      {
        h: "9. Governing law and jurisdiction",
        b: [
          "These terms are governed by the laws of Madagascar. Any dispute relating to the use of this website that cannot be settled amicably will be submitted to the competent courts of Antsirabe, Madagascar.",
        ],
      },
      { h: "10. Contact", b: [], contact: true },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro:
      "This policy explains which cookies and similar technologies {name} uses on this website, what they are used for and how you can control them.",
    sections: [
      {
        h: "1. What cookies are",
        b: [
          "Cookies are small files stored on your device when you visit a website. Similar technologies, such as your browser's local storage, work the same way. They allow a website to remember information between pages or between visits.",
        ],
      },
      {
        h: "2. Essential storage",
        b: [
          "Some information is stored in your browser so the site works correctly and behaves consistently on your next visit:",
          ["your language choice", "your decision about non-essential cookies"],
          "This storage is required for the site to work and does not need your consent. It is not used to track you across other websites.",
        ],
      },
      {
        h: "3. Measurement cookies",
        b: [
          "Audience measurement tools, such as Google Analytics, help us understand how the website is used so we can improve it. They are only active if they are enabled in the site configuration and you have accepted non-essential cookies. If you decline, no measurement cookies are placed on your device.",
        ],
      },
      {
        h: "4. Your choice",
        b: [
          "When you first visit the website, a banner lets you accept or decline non-essential cookies. Declining has no effect on your access to the site.",
          "To change your decision, clear this site's data in your browser settings and reload the page: the banner will appear again. You can also configure your browser to block or delete cookies at any time.",
        ],
      },
      {
        h: "5. Personal data",
        b: [
          "For more information on how we handle your personal data and on your rights, see our {privacy}.",
        ],
      },
      {
        h: "6. Changes to this policy",
        b: [
          "We may update this policy, in particular when new tools are added to the website. The date at the top of this page shows when it was last revised.",
        ],
      },
      { h: "7. Contact", b: [], contact: true },
    ],
  },
};

const fr: LegalLang = {
  eyebrow: "Juridique",
  lastUpdated: "Dernière mise à jour",
  updated: "octobre 2026",
  privacyLink: "Politique de confidentialité",
  labels: {
    email: "E-mail",
    france: "Contact en France",
    madagascar: "Contact à Madagascar",
    address: "Adresse",
  },
  privacy: {
    title: "Politique de confidentialité",
    intro:
      "Cette politique explique comment {name} traite les données personnelles transmises via ce site web, ainsi que les droits dont vous disposez sur ces données.",
    sections: [
      {
        h: "1. Responsable du traitement de vos données",
        box: "reg",
        b: ["Le responsable du traitement est {name}, situé à l'adresse suivante : {address}."],
      },
      {
        h: "2. Données collectées",
        b: [
          "Lorsque vous remplissez un formulaire sur ce site, nous collectons les informations que vous fournissez :",
          [
            "Nom, entreprise et fonction",
            "Adresse e-mail professionnelle et numéro de téléphone",
            "Pays",
            "Détails de votre projet et tout message que vous envoyez",
          ],
          "Nous enregistrons également des informations techniques et contextuelles liées à votre demande : la date, le formulaire utilisé et la langue du site.",
        ],
      },
      {
        h: "3. Pourquoi nous les utilisons",
        b: [
          "Nous utilisons ces informations uniquement pour :",
          [
            "répondre à votre demande et vous contacter à ce sujet",
            "préparer une proposition adaptée à votre projet",
            "entretenir la relation commerciale que vous initiez",
            "protéger notre site et prévenir les abus",
          ],
          "Nous nous appuyons sur votre demande et votre consentement, sur les démarches nécessaires pour vous répondre avant tout contrat, ainsi que sur notre intérêt légitime à gérer une activité sûre et professionnelle. Nous n'utilisons pas vos données pour une prise de décision automatisée.",
        ],
      },
      {
        h: "4. Cookies",
        b: [
          "Ce site peut utiliser des cookies et des technologies similaires. Les cookies essentiels sont nécessaires au fonctionnement du site. Les autres cookies ne sont utilisés que selon les choix que vous faites dans la bannière de cookies, que vous pouvez modifier à tout moment dans les paramètres de votre navigateur.",
        ],
      },
      {
        h: "5. Conservation et partage",
        b: [
          "Vos données ne sont conservées que le temps nécessaire au traitement de votre demande et à la gestion de la relation qui en découle, puis sont supprimées ou anonymisées. Nous ne vendons pas vos données personnelles.",
          "Vos données peuvent être traitées par des prestataires agissant pour notre compte, tels qu'un système de gestion de la relation client, des services d'hébergement ou de messagerie. Ces prestataires ne peuvent utiliser les données que pour nous fournir leur service.",
        ],
      },
      {
        h: "6. Transferts internationaux",
        b: [
          "Nos équipes sont basées à Madagascar et nous travaillons avec des clients en Europe et ailleurs ; vos données peuvent donc être traitées en dehors de votre pays de résidence. Dans ce cas, nous prenons les mesures appropriées pour assurer leur protection conformément aux règles applicables en matière de protection des données.",
        ],
      },
      {
        h: "7. Sécurité",
        b: [
          "Nous appliquons des mesures techniques et organisationnelles pour protéger vos données contre la perte, l'utilisation abusive et l'accès non autorisé, notamment un accès contrôlé, des engagements de confidentialité pour notre personnel et une infrastructure informatique sécurisée.",
        ],
      },
      {
        h: "8. Vos droits",
        b: [
          "Sous réserve de la loi applicable, vous pouvez nous demander de :",
          [
            "vous donner accès aux données que nous détenons à votre sujet",
            "rectifier les données inexactes ou incomplètes",
            "supprimer vos données",
            "limiter le traitement de vos données ou vous y opposer",
            "vous fournir vos données dans un format portable",
            "retirer votre consentement à tout moment, sans affecter les traitements antérieurs",
          ],
          "Pour exercer ces droits, écrivez à {email}. Nous pouvons vous demander de confirmer votre identité avant de répondre. Si vous estimez que vos droits ne sont pas respectés, vous pouvez également contacter l'autorité de protection des données de votre pays.",
        ],
      },
      {
        h: "9. Enfants",
        b: [
          "Ce site est destiné à un usage professionnel et ne s'adresse pas aux enfants. Nous ne collectons pas sciemment de données personnelles de mineurs.",
        ],
      },
      {
        h: "10. Modifications de cette politique",
        b: [
          "Nous pouvons mettre à jour cette politique de temps à autre. La date en haut de cette page indique sa dernière révision.",
        ],
      },
      { h: "11. Contact", b: [], contact: true },
    ],
  },
  terms: {
    title: "Conditions générales",
    intro:
      "Ces conditions régissent votre utilisation de ce site web. En le consultant, vous les acceptez. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le site.",
    sections: [
      {
        h: "1. Éditeur du site",
        box: "regEmail",
        b: ["Ce site est édité par {name}, situé à l'adresse suivante : {address}."],
      },
      {
        h: "2. Utilisation du site",
        b: [
          "Le contenu de ce site est fourni à titre d'information sur les services d'externalisation de {name}. Il ne constitue pas une offre contractuelle. Vous vous engagez à utiliser le site de manière licite et à ne pas perturber son fonctionnement ni tenter d'y accéder de manière non autorisée.",
        ],
      },
      {
        h: "3. Propositions et contrats",
        b: [
          "Les services, compositions d'équipe, calendriers et tarifs sont définis dans une proposition écrite préparée pour chaque client. Tout engagement est régi par le contrat signé entre {name} et le client, qui prévaut sur les informations publiées sur ce site.",
        ],
      },
      {
        h: "4. Propriété intellectuelle",
        b: [
          "Les textes, visuels, logos et le design de ce site appartiennent à {name} ou sont utilisés avec autorisation. Ils ne peuvent être reproduits, modifiés ou diffusés, en tout ou en partie, sans autorisation écrite préalable.",
        ],
      },
      {
        h: "5. Exactitude des informations et responsabilité",
        b: [
          "Nous veillons à ce que les informations de ce site soient exactes et à jour, mais nous ne pouvons garantir qu'elles soient complètes ou exemptes d'erreurs. {name} ne saurait être tenu responsable des dommages résultant de l'utilisation de ce site ou de son indisponibilité temporaire.",
        ],
      },
      {
        h: "6. Liens externes",
        b: [
          "Ce site peut contenir des liens vers des sites tiers. {name} n'a aucun contrôle sur leur contenu et n'en est pas responsable.",
        ],
      },
      {
        h: "7. Données personnelles",
        b: [
          "La manière dont nous traitons les données personnelles transmises via ce site est décrite dans notre {privacy}.",
        ],
      },
      {
        h: "8. Modification des conditions",
        b: [
          "Nous pouvons mettre à jour ces conditions de temps à autre. La date en haut de cette page indique leur dernière révision.",
        ],
      },
      {
        h: "9. Droit applicable et juridiction",
        b: [
          "Ces conditions sont régies par le droit malgache. Tout litige relatif à l'utilisation de ce site qui ne pourrait être résolu à l'amiable sera soumis aux tribunaux compétents d'Antsirabe, Madagascar.",
        ],
      },
      { h: "10. Contact", b: [], contact: true },
    ],
  },
  cookies: {
    title: "Politique relative aux cookies",
    intro:
      "Cette politique explique quels cookies et technologies similaires {name} utilise sur ce site, à quoi ils servent et comment vous pouvez les contrôler.",
    sections: [
      {
        h: "1. Qu'est-ce qu'un cookie",
        b: [
          "Les cookies sont de petits fichiers enregistrés sur votre appareil lorsque vous visitez un site web. Les technologies similaires, comme le stockage local de votre navigateur, fonctionnent de la même manière. Elles permettent à un site de mémoriser des informations entre les pages ou entre les visites.",
        ],
      },
      {
        h: "2. Stockage essentiel",
        b: [
          "Certaines informations sont enregistrées dans votre navigateur pour que le site fonctionne correctement et se comporte de manière cohérente lors de votre prochaine visite :",
          ["votre choix de langue", "votre décision concernant les cookies non essentiels"],
          "Ce stockage est nécessaire au fonctionnement du site et ne requiert pas votre consentement. Il n'est pas utilisé pour vous suivre sur d'autres sites.",
        ],
      },
      {
        h: "3. Cookies de mesure d'audience",
        b: [
          "Les outils de mesure d'audience, tels que Google Analytics, nous aident à comprendre comment le site est utilisé afin de l'améliorer. Ils ne sont actifs que s'ils sont activés dans la configuration du site et que vous avez accepté les cookies non essentiels. Si vous refusez, aucun cookie de mesure n'est déposé sur votre appareil.",
        ],
      },
      {
        h: "4. Votre choix",
        b: [
          "Lors de votre première visite, une bannière vous permet d'accepter ou de refuser les cookies non essentiels. Un refus n'a aucun effet sur votre accès au site.",
          "Pour modifier votre décision, effacez les données de ce site dans les paramètres de votre navigateur et rechargez la page : la bannière réapparaîtra. Vous pouvez aussi configurer votre navigateur pour bloquer ou supprimer les cookies à tout moment.",
        ],
      },
      {
        h: "5. Données personnelles",
        b: [
          "Pour plus d'informations sur le traitement de vos données personnelles et sur vos droits, consultez notre {privacy}.",
        ],
      },
      {
        h: "6. Modifications de cette politique",
        b: [
          "Nous pouvons mettre à jour cette politique, notamment lorsque de nouveaux outils sont ajoutés au site. La date en haut de cette page indique sa dernière révision.",
        ],
      },
      { h: "7. Contact", b: [], contact: true },
    ],
  },
};

const es: LegalLang = {
  eyebrow: "Legal",
  lastUpdated: "Última actualización",
  updated: "octubre de 2026",
  privacyLink: "Política de privacidad",
  labels: {
    email: "Correo electrónico",
    france: "Contacto en Francia",
    madagascar: "Contacto en Madagascar",
    address: "Dirección",
  },
  privacy: {
    title: "Política de privacidad",
    intro:
      "Esta política explica cómo {name} trata los datos personales enviados a través de este sitio web y los derechos que usted tiene sobre ellos.",
    sections: [
      {
        h: "1. Responsable del tratamiento de sus datos",
        box: "reg",
        b: ["El responsable del tratamiento es {name}, con domicilio en {address}."],
      },
      {
        h: "2. Datos que recopilamos",
        b: [
          "Cuando completa un formulario en este sitio web, recopilamos la información que nos proporciona:",
          [
            "Nombre, empresa y cargo",
            "Correo electrónico profesional y número de teléfono",
            "País",
            "Detalles de su proyecto y cualquier mensaje que envíe",
          ],
          "También registramos información técnica y contextual relacionada con su solicitud: la fecha, el formulario utilizado y el idioma del sitio web.",
        ],
      },
      {
        h: "3. Para qué los utilizamos",
        b: [
          "Utilizamos esta información únicamente para:",
          [
            "responder a su solicitud y contactarle al respecto",
            "preparar una propuesta adaptada a su proyecto",
            "mantener la relación comercial que usted inicia",
            "proteger nuestro sitio web y prevenir abusos",
          ],
          "Nos basamos en su solicitud y consentimiento, en las gestiones necesarias para responderle antes de cualquier contrato y en nuestro interés legítimo de gestionar un negocio seguro y profesional. No utilizamos sus datos para decisiones automatizadas.",
        ],
      },
      {
        h: "4. Cookies",
        b: [
          "Este sitio web puede utilizar cookies y tecnologías similares. Las cookies esenciales son necesarias para que el sitio funcione. Las demás cookies solo se utilizan según las opciones que elija en el banner de cookies, que puede cambiar en cualquier momento desde la configuración de su navegador.",
        ],
      },
      {
        h: "5. Conservación y comunicación",
        b: [
          "Sus datos se conservan únicamente durante el tiempo necesario para tramitar su solicitud y gestionar la relación resultante; después se eliminan o se anonimizan. No vendemos sus datos personales.",
          "Sus datos pueden ser tratados por proveedores de servicios que actúan en nuestro nombre, como un sistema de gestión de relaciones con clientes, servicios de alojamiento o de correo electrónico. Estos proveedores solo pueden usar los datos para prestarnos su servicio.",
        ],
      },
      {
        h: "6. Transferencias internacionales",
        b: [
          "Nuestros equipos están en Madagascar y trabajamos con clientes en Europa y en otros lugares, por lo que sus datos pueden tratarse fuera de su país de residencia. En tal caso, adoptamos las medidas adecuadas para mantener sus datos protegidos conforme a las normas de protección de datos aplicables.",
        ],
      },
      {
        h: "7. Seguridad",
        b: [
          "Aplicamos medidas técnicas y organizativas para proteger sus datos frente a pérdida, uso indebido y acceso no autorizado, incluidos el acceso controlado, compromisos de confidencialidad de nuestro personal y una infraestructura informática segura.",
        ],
      },
      {
        h: "8. Sus derechos",
        b: [
          "Conforme a la legislación aplicable, puede solicitarnos:",
          [
            "acceso a los datos que conservamos sobre usted",
            "la corrección de datos inexactos o incompletos",
            "la supresión de sus datos",
            "la limitación u oposición al tratamiento de sus datos",
            "la entrega de sus datos en un formato portátil",
            "retirar su consentimiento en cualquier momento, sin afectar al tratamiento anterior",
          ],
          "Para ejercer estos derechos, escriba a {email}. Podemos pedirle que confirme su identidad antes de responder. Si considera que no se respetan sus derechos, también puede dirigirse a la autoridad de protección de datos de su país.",
        ],
      },
      {
        h: "9. Menores",
        b: [
          "Este sitio web está destinado a un uso profesional y no se dirige a menores. No recopilamos conscientemente datos personales de menores.",
        ],
      },
      {
        h: "10. Cambios en esta política",
        b: [
          "Podemos actualizar esta política de vez en cuando. La fecha que figura al principio de esta página indica su última revisión.",
        ],
      },
      { h: "11. Contacto", b: [], contact: true },
    ],
  },
  terms: {
    title: "Términos y condiciones",
    intro:
      "Estos términos regulan el uso de este sitio web. Al navegar por él, usted los acepta. Si no está de acuerdo, no utilice el sitio web.",
    sections: [
      {
        h: "1. Editor del sitio web",
        box: "regEmail",
        b: ["Este sitio web es publicado por {name}, con domicilio en {address}."],
      },
      {
        h: "2. Uso del sitio web",
        b: [
          "El contenido de este sitio web se ofrece con fines informativos sobre los servicios de externalización de {name}. No constituye una oferta contractual. Usted se compromete a utilizar el sitio de forma lícita y a no perturbar su funcionamiento ni intentar acceder a él de manera no autorizada.",
        ],
      },
      {
        h: "3. Propuestas y contratos",
        b: [
          "Los servicios, la composición de los equipos, los plazos y los precios se definen en una propuesta escrita preparada para cada cliente. Cualquier compromiso se rige por el contrato firmado entre {name} y el cliente, que prevalece sobre la información publicada en este sitio web.",
        ],
      },
      {
        h: "4. Propiedad intelectual",
        b: [
          "Los textos, imágenes, logotipos y el diseño de este sitio web pertenecen a {name} o se utilizan con permiso. No pueden reproducirse, modificarse ni distribuirse, total o parcialmente, sin autorización previa por escrito.",
        ],
      },
      {
        h: "5. Exactitud de la información y responsabilidad",
        b: [
          "Nos esforzamos por mantener la información de este sitio web exacta y actualizada, pero no podemos garantizar que esté completa ni libre de errores. {name} no será responsable de ningún daño derivado del uso de este sitio web ni de su indisponibilidad temporal.",
        ],
      },
      {
        h: "6. Enlaces externos",
        b: [
          "Este sitio web puede contener enlaces a sitios de terceros. {name} no tiene control sobre su contenido y no se hace responsable del mismo.",
        ],
      },
      {
        h: "7. Datos personales",
        b: [
          "La forma en que tratamos los datos personales enviados a través de este sitio web se describe en nuestra {privacy}.",
        ],
      },
      {
        h: "8. Cambios en estos términos",
        b: [
          "Podemos actualizar estos términos de vez en cuando. La fecha que figura al principio de esta página indica su última revisión.",
        ],
      },
      {
        h: "9. Legislación aplicable y jurisdicción",
        b: [
          "Estos términos se rigen por las leyes de Madagascar. Cualquier controversia relacionada con el uso de este sitio web que no pueda resolverse de forma amistosa se someterá a los tribunales competentes de Antsirabe, Madagascar.",
        ],
      },
      { h: "10. Contacto", b: [], contact: true },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro:
      "Esta política explica qué cookies y tecnologías similares utiliza {name} en este sitio web, para qué sirven y cómo puede controlarlas.",
    sections: [
      {
        h: "1. Qué son las cookies",
        b: [
          "Las cookies son pequeños archivos que se almacenan en su dispositivo cuando visita un sitio web. Las tecnologías similares, como el almacenamiento local del navegador, funcionan de la misma manera. Permiten que un sitio web recuerde información entre páginas o entre visitas.",
        ],
      },
      {
        h: "2. Almacenamiento esencial",
        b: [
          "Cierta información se guarda en su navegador para que el sitio funcione correctamente y se comporte de forma coherente en su próxima visita:",
          ["su elección de idioma", "su decisión sobre las cookies no esenciales"],
          "Este almacenamiento es necesario para el funcionamiento del sitio y no requiere su consentimiento. No se utiliza para rastrearle en otros sitios web.",
        ],
      },
      {
        h: "3. Cookies de medición",
        b: [
          "Las herramientas de medición de audiencia, como Google Analytics, nos ayudan a entender cómo se utiliza el sitio web para poder mejorarlo. Solo están activas si se han habilitado en la configuración del sitio y usted ha aceptado las cookies no esenciales. Si las rechaza, no se instala ninguna cookie de medición en su dispositivo.",
        ],
      },
      {
        h: "4. Su elección",
        b: [
          "Cuando visita el sitio web por primera vez, un banner le permite aceptar o rechazar las cookies no esenciales. Rechazarlas no afecta a su acceso al sitio.",
          "Para cambiar su decisión, borre los datos de este sitio en la configuración de su navegador y recargue la página: el banner volverá a aparecer. También puede configurar su navegador para bloquear o eliminar cookies en cualquier momento.",
        ],
      },
      {
        h: "5. Datos personales",
        b: [
          "Para obtener más información sobre cómo tratamos sus datos personales y sobre sus derechos, consulte nuestra {privacy}.",
        ],
      },
      {
        h: "6. Cambios en esta política",
        b: [
          "Podemos actualizar esta política, en particular cuando se añadan nuevas herramientas al sitio web. La fecha que figura al principio de esta página indica su última revisión.",
        ],
      },
      { h: "7. Contacto", b: [], contact: true },
    ],
  },
};

const de: LegalLang = {
  eyebrow: "Rechtliches",
  lastUpdated: "Zuletzt aktualisiert",
  updated: "Oktober 2026",
  privacyLink: "Datenschutzerklärung",
  labels: {
    email: "E-Mail",
    france: "Kontakt in Frankreich",
    madagascar: "Kontakt in Madagaskar",
    address: "Adresse",
  },
  privacy: {
    title: "Datenschutzerklärung",
    intro:
      "Diese Erklärung beschreibt, wie {name} die über diese Website übermittelten personenbezogenen Daten verarbeitet und welche Rechte Sie an diesen Daten haben.",
    sections: [
      {
        h: "1. Verantwortlicher für Ihre Daten",
        box: "reg",
        b: ["Verantwortlich ist {name}, ansässig unter {address}."],
      },
      {
        h: "2. Welche Daten wir erheben",
        b: [
          "Wenn Sie ein Formular auf dieser Website ausfüllen, erheben wir die von Ihnen angegebenen Informationen:",
          [
            "Name, Unternehmen und Position",
            "Geschäftliche E-Mail-Adresse und Telefonnummer",
            "Land",
            "Angaben zu Ihrem Projekt und jede Nachricht, die Sie senden",
          ],
          "Außerdem erfassen wir technische und kontextbezogene Informationen zu Ihrer Anfrage: das Datum, das verwendete Formular und die Sprache der Website.",
        ],
      },
      {
        h: "3. Wofür wir sie verwenden",
        b: [
          "Wir verwenden diese Informationen ausschließlich, um:",
          [
            "Ihre Anfrage zu beantworten und Sie dazu zu kontaktieren",
            "ein auf Ihr Projekt zugeschnittenes Angebot zu erstellen",
            "die von Ihnen angestoßene Geschäftsbeziehung zu pflegen",
            "unsere Website zu schützen und Missbrauch zu verhindern",
          ],
          "Wir stützen uns auf Ihre Anfrage und Einwilligung, auf die Maßnahmen, die vor einem Vertragsabschluss zur Beantwortung Ihrer Anfrage erforderlich sind, sowie auf unser berechtigtes Interesse an einem sicheren und professionellen Geschäftsbetrieb. Wir nutzen Ihre Daten nicht für automatisierte Entscheidungen.",
        ],
      },
      {
        h: "4. Cookies",
        b: [
          "Diese Website kann Cookies und ähnliche Technologien verwenden. Essenzielle Cookies sind für den Betrieb der Website erforderlich. Andere Cookies werden nur gemäß Ihrer Auswahl im Cookie-Banner verwendet, die Sie jederzeit in den Einstellungen Ihres Browsers ändern können.",
        ],
      },
      {
        h: "5. Speicherdauer und Weitergabe",
        b: [
          "Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage und zur Pflege der daraus entstehenden Beziehung erforderlich ist, und anschließend gelöscht oder anonymisiert. Wir verkaufen Ihre personenbezogenen Daten nicht.",
          "Ihre Daten können von Dienstleistern in unserem Auftrag verarbeitet werden, etwa einem CRM-System, Hosting- oder E-Mail-Diensten. Diese Dienstleister dürfen die Daten nur nutzen, um ihre Leistung für uns zu erbringen.",
        ],
      },
      {
        h: "6. Internationale Datenübermittlung",
        b: [
          "Unsere Teams sitzen in Madagaskar und wir arbeiten mit Kunden in Europa und anderswo, sodass Ihre Daten außerhalb Ihres Wohnsitzlandes verarbeitet werden können. In diesem Fall treffen wir geeignete Maßnahmen, um Ihre Daten im Einklang mit den geltenden Datenschutzvorschriften zu schützen.",
        ],
      },
      {
        h: "7. Sicherheit",
        b: [
          "Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen, darunter kontrollierter Zugang, Vertraulichkeitsverpflichtungen für unsere Mitarbeiter und eine sichere IT-Infrastruktur.",
        ],
      },
      {
        h: "8. Ihre Rechte",
        b: [
          "Nach Maßgabe des geltenden Rechts können Sie von uns verlangen:",
          [
            "Ihnen Auskunft über die zu Ihrer Person gespeicherten Daten zu geben",
            "unrichtige oder unvollständige Daten zu berichtigen",
            "Ihre Daten zu löschen",
            "die Verarbeitung Ihrer Daten einzuschränken oder ihr zu widersprechen",
            "Ihre Daten in einem übertragbaren Format bereitzustellen",
            "Ihre Einwilligung jederzeit zu widerrufen, ohne dass die frühere Verarbeitung berührt wird",
          ],
          "Um diese Rechte auszuüben, schreiben Sie an {email}. Wir können Sie bitten, Ihre Identität zu bestätigen, bevor wir antworten. Wenn Sie der Ansicht sind, dass Ihre Rechte nicht gewahrt werden, können Sie sich außerdem an die Datenschutzbehörde Ihres Landes wenden.",
        ],
      },
      {
        h: "9. Kinder",
        b: [
          "Diese Website ist für die geschäftliche Nutzung bestimmt und richtet sich nicht an Kinder. Wir erheben wissentlich keine personenbezogenen Daten von Minderjährigen.",
        ],
      },
      {
        h: "10. Änderungen dieser Erklärung",
        b: [
          "Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Das Datum am Anfang dieser Seite zeigt, wann sie zuletzt überarbeitet wurde.",
        ],
      },
      { h: "11. Kontakt", b: [], contact: true },
    ],
  },
  terms: {
    title: "Allgemeine Geschäftsbedingungen",
    intro:
      "Diese Bedingungen regeln die Nutzung dieser Website. Mit dem Aufrufen der Website akzeptieren Sie sie. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht.",
    sections: [
      {
        h: "1. Herausgeber der Website",
        box: "regEmail",
        b: ["Diese Website wird herausgegeben von {name}, ansässig unter {address}."],
      },
      {
        h: "2. Nutzung dieser Website",
        b: [
          "Die Inhalte dieser Website dienen der Information über die Outsourcing-Dienstleistungen von {name}. Sie stellen kein vertragliches Angebot dar. Sie verpflichten sich, die Website rechtmäßig zu nutzen und weder ihren Betrieb zu stören noch sich unbefugt Zugang zu verschaffen.",
        ],
      },
      {
        h: "3. Angebote und Verträge",
        b: [
          "Leistungen, Teamzusammensetzungen, Zeitpläne und Preise werden in einem für jeden Kunden erstellten schriftlichen Angebot festgelegt. Jede Zusammenarbeit unterliegt dem zwischen {name} und dem Kunden geschlossenen Vertrag, der den auf dieser Website veröffentlichten Informationen vorgeht.",
        ],
      },
      {
        h: "4. Geistiges Eigentum",
        b: [
          "Die Texte, Bilder, Logos und das Design dieser Website gehören {name} oder werden mit Genehmigung verwendet. Sie dürfen ohne vorherige schriftliche Genehmigung weder ganz noch teilweise vervielfältigt, verändert oder verbreitet werden.",
        ],
      },
      {
        h: "5. Richtigkeit der Informationen und Haftung",
        b: [
          "Wir bemühen uns, die Informationen auf dieser Website richtig und aktuell zu halten, können jedoch nicht garantieren, dass sie vollständig oder fehlerfrei sind. {name} haftet nicht für Schäden, die aus der Nutzung dieser Website oder aus ihrer vorübergehenden Nichtverfügbarkeit entstehen.",
        ],
      },
      {
        h: "6. Externe Links",
        b: [
          "Diese Website kann Links zu Websites Dritter enthalten. {name} hat keinen Einfluss auf deren Inhalte und ist dafür nicht verantwortlich.",
        ],
      },
      {
        h: "7. Personenbezogene Daten",
        b: [
          "Wie wir die über diese Website übermittelten personenbezogenen Daten verarbeiten, ist in unserer {privacy} beschrieben.",
        ],
      },
      {
        h: "8. Änderungen dieser Bedingungen",
        b: [
          "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Das Datum am Anfang dieser Seite zeigt, wann sie zuletzt überarbeitet wurden.",
        ],
      },
      {
        h: "9. Anwendbares Recht und Gerichtsstand",
        b: [
          "Diese Bedingungen unterliegen madagassischem Recht. Streitigkeiten im Zusammenhang mit der Nutzung dieser Website, die nicht gütlich beigelegt werden können, werden den zuständigen Gerichten in Antsirabe, Madagaskar, vorgelegt.",
        ],
      },
      { h: "10. Kontakt", b: [], contact: true },
    ],
  },
  cookies: {
    title: "Cookie-Richtlinie",
    intro:
      "Diese Richtlinie erklärt, welche Cookies und ähnlichen Technologien {name} auf dieser Website verwendet, wofür sie dienen und wie Sie sie steuern können.",
    sections: [
      {
        h: "1. Was Cookies sind",
        b: [
          "Cookies sind kleine Dateien, die beim Besuch einer Website auf Ihrem Gerät gespeichert werden. Ähnliche Technologien, etwa der lokale Speicher Ihres Browsers, funktionieren genauso. Sie ermöglichen es einer Website, Informationen zwischen Seiten oder Besuchen zu speichern.",
        ],
      },
      {
        h: "2. Essenzieller Speicher",
        b: [
          "Einige Informationen werden in Ihrem Browser gespeichert, damit die Website korrekt funktioniert und sich bei Ihrem nächsten Besuch gleich verhält:",
          ["Ihre Sprachauswahl", "Ihre Entscheidung zu nicht essenziellen Cookies"],
          "Dieser Speicher ist für den Betrieb der Website erforderlich und bedarf nicht Ihrer Einwilligung. Er wird nicht verwendet, um Sie auf anderen Websites zu verfolgen.",
        ],
      },
      {
        h: "3. Messungs-Cookies",
        b: [
          "Tools zur Reichweitenmessung wie Google Analytics helfen uns zu verstehen, wie die Website genutzt wird, damit wir sie verbessern können. Sie sind nur aktiv, wenn sie in der Website-Konfiguration aktiviert sind und Sie nicht essenzielle Cookies akzeptiert haben. Wenn Sie ablehnen, werden keine Messungs-Cookies auf Ihrem Gerät gesetzt.",
        ],
      },
      {
        h: "4. Ihre Wahl",
        b: [
          "Beim ersten Besuch der Website können Sie über ein Banner nicht essenzielle Cookies akzeptieren oder ablehnen. Eine Ablehnung hat keine Auswirkungen auf Ihren Zugriff auf die Website.",
          "Um Ihre Entscheidung zu ändern, löschen Sie die Daten dieser Website in den Browsereinstellungen und laden Sie die Seite neu: Das Banner erscheint dann erneut. Sie können Ihren Browser auch so konfigurieren, dass er Cookies jederzeit blockiert oder löscht.",
        ],
      },
      {
        h: "5. Personenbezogene Daten",
        b: [
          "Weitere Informationen zum Umgang mit Ihren personenbezogenen Daten und zu Ihren Rechten finden Sie in unserer {privacy}.",
        ],
      },
      {
        h: "6. Änderungen dieser Richtlinie",
        b: [
          "Wir können diese Richtlinie aktualisieren, insbesondere wenn der Website neue Tools hinzugefügt werden. Das Datum am Anfang dieser Seite zeigt, wann sie zuletzt überarbeitet wurde.",
        ],
      },
      { h: "7. Kontakt", b: [], contact: true },
    ],
  },
};

const it: LegalLang = {
  eyebrow: "Note legali",
  lastUpdated: "Ultimo aggiornamento",
  updated: "ottobre 2026",
  privacyLink: "Informativa sulla privacy",
  labels: {
    email: "E-mail",
    france: "Contatto in Francia",
    madagascar: "Contatto in Madagascar",
    address: "Indirizzo",
  },
  privacy: {
    title: "Informativa sulla privacy",
    intro:
      "Questa informativa spiega come {name} tratta i dati personali inviati tramite questo sito web e quali diritti avete su tali dati.",
    sections: [
      {
        h: "1. Titolare del trattamento dei vostri dati",
        box: "reg",
        b: ["Il titolare del trattamento è {name}, con sede in {address}."],
      },
      {
        h: "2. Dati che raccogliamo",
        b: [
          "Quando compilate un modulo su questo sito web, raccogliamo le informazioni che ci fornite:",
          [
            "Nome, azienda e ruolo",
            "Indirizzo e-mail aziendale e numero di telefono",
            "Paese",
            "Dettagli del vostro progetto e qualsiasi messaggio inviato",
          ],
          "Registriamo inoltre informazioni tecniche e contestuali relative alla vostra richiesta: la data, il modulo utilizzato e la lingua del sito web.",
        ],
      },
      {
        h: "3. Perché li utilizziamo",
        b: [
          "Utilizziamo queste informazioni solo per:",
          [
            "rispondere alla vostra richiesta e contattarvi in merito",
            "preparare una proposta su misura per il vostro progetto",
            "mantenere il rapporto commerciale da voi avviato",
            "proteggere il nostro sito web e prevenire abusi",
          ],
          "Ci basiamo sulla vostra richiesta e sul vostro consenso, sulle misure necessarie per rispondervi prima di qualsiasi contratto e sul nostro legittimo interesse a svolgere un'attività sicura e professionale. Non utilizziamo i vostri dati per processi decisionali automatizzati.",
        ],
      },
      {
        h: "4. Cookie",
        b: [
          "Questo sito web può utilizzare cookie e tecnologie simili. I cookie essenziali sono necessari per il funzionamento del sito. Gli altri cookie vengono utilizzati solo in base alle scelte effettuate nel banner dei cookie, che potete modificare in qualsiasi momento dalle impostazioni del browser.",
        ],
      },
      {
        h: "5. Conservazione e condivisione",
        b: [
          "I vostri dati sono conservati solo per il tempo necessario a gestire la vostra richiesta e il rapporto che ne deriva, quindi vengono cancellati o resi anonimi. Non vendiamo i vostri dati personali.",
          "I vostri dati possono essere trattati da fornitori di servizi che agiscono per nostro conto, come un sistema di gestione delle relazioni con i clienti, servizi di hosting o di posta elettronica. Tali fornitori possono utilizzare i dati solo per erogarci il loro servizio.",
        ],
      },
      {
        h: "6. Trasferimenti internazionali",
        b: [
          "I nostri team hanno sede in Madagascar e lavoriamo con clienti in Europa e altrove, pertanto i vostri dati possono essere trattati al di fuori del vostro paese di residenza. In tal caso adottiamo misure adeguate per proteggere i vostri dati in conformità alle norme applicabili sulla protezione dei dati.",
        ],
      },
      {
        h: "7. Sicurezza",
        b: [
          "Applichiamo misure tecniche e organizzative per proteggere i vostri dati da perdita, uso improprio e accesso non autorizzato, tra cui accesso controllato, impegni di riservatezza per il nostro personale e un'infrastruttura informatica sicura.",
        ],
      },
      {
        h: "8. I vostri diritti",
        b: [
          "Nei limiti della legge applicabile, potete chiederci di:",
          [
            "darvi accesso ai dati che conserviamo su di voi",
            "correggere dati inesatti o incompleti",
            "cancellare i vostri dati",
            "limitare il trattamento dei vostri dati o opporvi ad esso",
            "fornirvi i vostri dati in un formato portabile",
            "revocare il consenso in qualsiasi momento, senza pregiudicare i trattamenti precedenti",
          ],
          "Per esercitare questi diritti, scrivete a {email}. Potremmo chiedervi di confermare la vostra identità prima di rispondere. Se ritenete che i vostri diritti non siano rispettati, potete anche contattare l'autorità per la protezione dei dati del vostro paese.",
        ],
      },
      {
        h: "9. Minori",
        b: [
          "Questo sito web è destinato a un uso professionale e non è rivolto ai minori. Non raccogliamo consapevolmente dati personali di minorenni.",
        ],
      },
      {
        h: "10. Modifiche a questa informativa",
        b: [
          "Possiamo aggiornare questa informativa di tanto in tanto. La data in cima a questa pagina indica quando è stata rivista l'ultima volta.",
        ],
      },
      { h: "11. Contatti", b: [], contact: true },
    ],
  },
  terms: {
    title: "Termini e condizioni",
    intro:
      "Questi termini regolano l'uso di questo sito web. Navigando sul sito, li accettate. Se non siete d'accordo, vi preghiamo di non utilizzarlo.",
    sections: [
      {
        h: "1. Editore del sito web",
        box: "regEmail",
        b: ["Questo sito web è pubblicato da {name}, con sede in {address}."],
      },
      {
        h: "2. Uso del sito web",
        b: [
          "I contenuti di questo sito web sono forniti a scopo informativo sui servizi di outsourcing di {name}. Non costituiscono un'offerta contrattuale. Vi impegnate a utilizzare il sito in modo lecito e a non comprometterne il funzionamento né tentare di accedervi in modo non autorizzato.",
        ],
      },
      {
        h: "3. Proposte e contratti",
        b: [
          "Servizi, composizione dei team, tempistiche e prezzi sono definiti in una proposta scritta preparata per ogni cliente. Ogni impegno è disciplinato dal contratto firmato tra {name} e il cliente, che prevale sulle informazioni pubblicate su questo sito web.",
        ],
      },
      {
        h: "4. Proprietà intellettuale",
        b: [
          "I testi, le immagini, i loghi e il design di questo sito web appartengono a {name} o sono utilizzati con autorizzazione. Non possono essere riprodotti, modificati o distribuiti, in tutto o in parte, senza previa autorizzazione scritta.",
        ],
      },
      {
        h: "5. Accuratezza delle informazioni e responsabilità",
        b: [
          "Ci impegniamo a mantenere accurate e aggiornate le informazioni di questo sito web, ma non possiamo garantire che siano complete o prive di errori. {name} non può essere ritenuta responsabile per eventuali danni derivanti dall'uso di questo sito web o dalla sua temporanea indisponibilità.",
        ],
      },
      {
        h: "6. Link esterni",
        b: [
          "Questo sito web può contenere link a siti di terze parti. {name} non ha alcun controllo sul loro contenuto e non ne è responsabile.",
        ],
      },
      {
        h: "7. Dati personali",
        b: [
          "Il modo in cui trattiamo i dati personali inviati tramite questo sito web è descritto nella nostra {privacy}.",
        ],
      },
      {
        h: "8. Modifiche ai presenti termini",
        b: [
          "Possiamo aggiornare questi termini di tanto in tanto. La data in cima a questa pagina indica quando sono stati rivisti l'ultima volta.",
        ],
      },
      {
        h: "9. Legge applicabile e foro competente",
        b: [
          "Questi termini sono regolati dalla legge del Madagascar. Qualsiasi controversia relativa all'uso di questo sito web che non possa essere risolta in via amichevole sarà sottoposta ai tribunali competenti di Antsirabe, Madagascar.",
        ],
      },
      { h: "10. Contatti", b: [], contact: true },
    ],
  },
  cookies: {
    title: "Cookie policy",
    intro:
      "Questa policy spiega quali cookie e tecnologie simili {name} utilizza su questo sito web, a cosa servono e come potete controllarli.",
    sections: [
      {
        h: "1. Cosa sono i cookie",
        b: [
          "I cookie sono piccoli file memorizzati sul vostro dispositivo quando visitate un sito web. Tecnologie simili, come la memoria locale del browser, funzionano allo stesso modo. Consentono a un sito web di ricordare informazioni tra una pagina e l'altra o tra una visita e l'altra.",
        ],
      },
      {
        h: "2. Memorizzazione essenziale",
        b: [
          "Alcune informazioni vengono memorizzate nel vostro browser affinché il sito funzioni correttamente e si comporti in modo coerente alla vostra prossima visita:",
          ["la vostra scelta della lingua", "la vostra decisione sui cookie non essenziali"],
          "Questa memorizzazione è necessaria al funzionamento del sito e non richiede il vostro consenso. Non viene utilizzata per tracciarvi su altri siti web.",
        ],
      },
      {
        h: "3. Cookie di misurazione",
        b: [
          "Gli strumenti di misurazione del pubblico, come Google Analytics, ci aiutano a capire come viene utilizzato il sito web per poterlo migliorare. Sono attivi solo se abilitati nella configurazione del sito e se avete accettato i cookie non essenziali. Se rifiutate, nessun cookie di misurazione viene inserito sul vostro dispositivo.",
        ],
      },
      {
        h: "4. La vostra scelta",
        b: [
          "Alla prima visita al sito web, un banner vi permette di accettare o rifiutare i cookie non essenziali. Il rifiuto non influisce sul vostro accesso al sito.",
          "Per modificare la vostra decisione, cancellate i dati di questo sito nelle impostazioni del browser e ricaricate la pagina: il banner riapparirà. Potete anche configurare il browser per bloccare o eliminare i cookie in qualsiasi momento.",
        ],
      },
      {
        h: "5. Dati personali",
        b: [
          "Per maggiori informazioni su come trattiamo i vostri dati personali e sui vostri diritti, consultate la nostra {privacy}.",
        ],
      },
      {
        h: "6. Modifiche a questa policy",
        b: [
          "Possiamo aggiornare questa policy, in particolare quando vengono aggiunti nuovi strumenti al sito web. La data in cima a questa pagina indica quando è stata rivista l'ultima volta.",
        ],
      },
      { h: "7. Contatti", b: [], contact: true },
    ],
  },
};

const pt: LegalLang = {
  eyebrow: "Jurídico",
  lastUpdated: "Última atualização",
  updated: "outubro de 2026",
  privacyLink: "Política de privacidade",
  labels: {
    email: "E-mail",
    france: "Contacto em França",
    madagascar: "Contacto em Madagáscar",
    address: "Morada",
  },
  privacy: {
    title: "Política de privacidade",
    intro:
      "Esta política explica como a {name} trata os dados pessoais submetidos através deste website e os direitos que tem sobre esses dados.",
    sections: [
      {
        h: "1. Responsável pelo tratamento dos seus dados",
        box: "reg",
        b: ["O responsável pelo tratamento é a {name}, com sede em {address}."],
      },
      {
        h: "2. Dados que recolhemos",
        b: [
          "Quando preenche um formulário neste website, recolhemos as informações que nos fornece:",
          [
            "Nome, empresa e cargo",
            "Endereço de e-mail profissional e número de telefone",
            "País",
            "Detalhes do seu projeto e qualquer mensagem que envie",
          ],
          "Registamos também informações técnicas e contextuais relacionadas com o seu pedido: a data, o formulário utilizado e o idioma do website.",
        ],
      },
      {
        h: "3. Para que os utilizamos",
        b: [
          "Utilizamos estas informações apenas para:",
          [
            "responder ao seu pedido e contactá-lo a esse respeito",
            "preparar uma proposta adaptada ao seu projeto",
            "manter a relação comercial que iniciou",
            "proteger o nosso website e prevenir abusos",
          ],
          "Baseamo-nos no seu pedido e consentimento, nas diligências necessárias para lhe responder antes de qualquer contrato e no nosso interesse legítimo em gerir uma atividade segura e profissional. Não utilizamos os seus dados para decisões automatizadas.",
        ],
      },
      {
        h: "4. Cookies",
        b: [
          "Este website pode utilizar cookies e tecnologias semelhantes. Os cookies essenciais são necessários para o funcionamento do site. Os restantes cookies só são utilizados de acordo com as escolhas que fizer no banner de cookies, que pode alterar a qualquer momento nas definições do seu navegador.",
        ],
      },
      {
        h: "5. Conservação e partilha",
        b: [
          "Os seus dados são conservados apenas durante o tempo necessário para tratar o seu pedido e gerir a relação daí resultante, sendo depois eliminados ou anonimizados. Não vendemos os seus dados pessoais.",
          "Os seus dados podem ser tratados por prestadores de serviços que atuam em nosso nome, como um sistema de gestão de relações com clientes, serviços de alojamento ou de correio eletrónico. Estes prestadores só podem utilizar os dados para nos prestar o seu serviço.",
        ],
      },
      {
        h: "6. Transferências internacionais",
        b: [
          "As nossas equipas estão sediadas em Madagáscar e trabalhamos com clientes na Europa e noutros locais, pelo que os seus dados podem ser tratados fora do seu país de residência. Nesse caso, tomamos as medidas adequadas para manter os seus dados protegidos de acordo com as regras de proteção de dados aplicáveis.",
        ],
      },
      {
        h: "7. Segurança",
        b: [
          "Aplicamos medidas técnicas e organizativas para proteger os seus dados contra perda, utilização indevida e acesso não autorizado, incluindo acesso controlado, compromissos de confidencialidade do nosso pessoal e uma infraestrutura informática segura.",
        ],
      },
      {
        h: "8. Os seus direitos",
        b: [
          "Nos termos da lei aplicável, pode solicitar-nos que:",
          [
            "lhe demos acesso aos dados que detemos sobre si",
            "corrijamos dados inexatos ou incompletos",
            "eliminemos os seus dados",
            "limitemos o tratamento dos seus dados ou a ele se oponha",
            "lhe forneçamos os seus dados num formato portável",
            "retire o seu consentimento a qualquer momento, sem afetar o tratamento anterior",
          ],
          "Para exercer estes direitos, escreva para {email}. Podemos pedir-lhe que confirme a sua identidade antes de responder. Se considerar que os seus direitos não são respeitados, pode também contactar a autoridade de proteção de dados do seu país.",
        ],
      },
      {
        h: "9. Crianças",
        b: [
          "Este website destina-se a uso profissional e não se dirige a crianças. Não recolhemos intencionalmente dados pessoais de menores.",
        ],
      },
      {
        h: "10. Alterações a esta política",
        b: [
          "Podemos atualizar esta política de tempos a tempos. A data no topo desta página indica quando foi revista pela última vez.",
        ],
      },
      { h: "11. Contacto", b: [], contact: true },
    ],
  },
  terms: {
    title: "Termos e condições",
    intro:
      "Estes termos regem a sua utilização deste website. Ao navegar no mesmo, aceita-os. Se não concordar, não utilize o website.",
    sections: [
      {
        h: "1. Editor do website",
        box: "regEmail",
        b: ["Este website é publicado pela {name}, com sede em {address}."],
      },
      {
        h: "2. Utilização deste website",
        b: [
          "O conteúdo deste website é fornecido para fins informativos sobre os serviços de outsourcing da {name}. Não constitui uma oferta contratual. Compromete-se a utilizar o website de forma lícita e a não perturbar o seu funcionamento nem tentar aceder-lhe de forma não autorizada.",
        ],
      },
      {
        h: "3. Propostas e contratos",
        b: [
          "Os serviços, a composição das equipas, os prazos e os preços são definidos numa proposta escrita preparada para cada cliente. Qualquer compromisso é regido pelo contrato assinado entre a {name} e o cliente, que prevalece sobre as informações publicadas neste website.",
        ],
      },
      {
        h: "4. Propriedade intelectual",
        b: [
          "Os textos, imagens, logótipos e o design deste website pertencem à {name} ou são utilizados com autorização. Não podem ser reproduzidos, modificados ou distribuídos, no todo ou em parte, sem autorização prévia por escrito.",
        ],
      },
      {
        h: "5. Exatidão da informação e responsabilidade",
        b: [
          "Procuramos manter as informações deste website exatas e atualizadas, mas não podemos garantir que estejam completas ou isentas de erros. A {name} não pode ser responsabilizada por quaisquer danos resultantes da utilização deste website ou da sua indisponibilidade temporária.",
        ],
      },
      {
        h: "6. Ligações externas",
        b: [
          "Este website pode conter ligações para websites de terceiros. A {name} não tem controlo sobre o seu conteúdo e não é responsável pelo mesmo.",
        ],
      },
      {
        h: "7. Dados pessoais",
        b: [
          "A forma como tratamos os dados pessoais submetidos através deste website está descrita na nossa {privacy}.",
        ],
      },
      {
        h: "8. Alterações a estes termos",
        b: [
          "Podemos atualizar estes termos de tempos a tempos. A data no topo desta página indica quando foram revistos pela última vez.",
        ],
      },
      {
        h: "9. Lei aplicável e foro competente",
        b: [
          "Estes termos são regidos pelas leis de Madagáscar. Qualquer litígio relacionado com a utilização deste website que não possa ser resolvido amigavelmente será submetido aos tribunais competentes de Antsirabe, Madagáscar.",
        ],
      },
      { h: "10. Contacto", b: [], contact: true },
    ],
  },
  cookies: {
    title: "Política de cookies",
    intro:
      "Esta política explica que cookies e tecnologias semelhantes a {name} utiliza neste website, para que servem e como pode controlá-los.",
    sections: [
      {
        h: "1. O que são cookies",
        b: [
          "Os cookies são pequenos ficheiros guardados no seu dispositivo quando visita um website. Tecnologias semelhantes, como o armazenamento local do navegador, funcionam da mesma forma. Permitem que um website se lembre de informações entre páginas ou entre visitas.",
        ],
      },
      {
        h: "2. Armazenamento essencial",
        b: [
          "Algumas informações são guardadas no seu navegador para que o site funcione corretamente e se comporte de forma consistente na sua próxima visita:",
          ["a sua escolha de idioma", "a sua decisão sobre os cookies não essenciais"],
          "Este armazenamento é necessário para o funcionamento do site e não requer o seu consentimento. Não é utilizado para o seguir noutros websites.",
        ],
      },
      {
        h: "3. Cookies de medição",
        b: [
          "As ferramentas de medição de audiência, como o Google Analytics, ajudam-nos a perceber como o website é utilizado para o podermos melhorar. Só estão ativas se estiverem ativadas na configuração do site e se tiver aceitado os cookies não essenciais. Se recusar, nenhum cookie de medição é colocado no seu dispositivo.",
        ],
      },
      {
        h: "4. A sua escolha",
        b: [
          "Na primeira visita ao website, um banner permite-lhe aceitar ou recusar os cookies não essenciais. Recusar não afeta o seu acesso ao site.",
          "Para alterar a sua decisão, elimine os dados deste site nas definições do navegador e recarregue a página: o banner voltará a aparecer. Pode também configurar o navegador para bloquear ou eliminar cookies a qualquer momento.",
        ],
      },
      {
        h: "5. Dados pessoais",
        b: [
          "Para mais informações sobre a forma como tratamos os seus dados pessoais e sobre os seus direitos, consulte a nossa {privacy}.",
        ],
      },
      {
        h: "6. Alterações a esta política",
        b: [
          "Podemos atualizar esta política, em especial quando forem adicionadas novas ferramentas ao website. A data no topo desta página indica quando foi revista pela última vez.",
        ],
      },
      { h: "7. Contacto", b: [], contact: true },
    ],
  },
};

const nl: LegalLang = {
  eyebrow: "Juridisch",
  lastUpdated: "Laatst bijgewerkt",
  updated: "oktober 2026",
  privacyLink: "Privacybeleid",
  labels: {
    email: "E-mail",
    france: "Contact in Frankrijk",
    madagascar: "Contact in Madagaskar",
    address: "Adres",
  },
  privacy: {
    title: "Privacybeleid",
    intro:
      "Dit beleid legt uit hoe {name} omgaat met de persoonsgegevens die via deze website worden ingediend en welke rechten u op die gegevens heeft.",
    sections: [
      {
        h: "1. Wie verantwoordelijk is voor uw gegevens",
        box: "reg",
        b: ["De verwerkingsverantwoordelijke is {name}, gevestigd te {address}."],
      },
      {
        h: "2. Welke gegevens wij verzamelen",
        b: [
          "Wanneer u een formulier op deze website invult, verzamelen wij de informatie die u verstrekt:",
          [
            "Naam, bedrijf en functie",
            "Zakelijk e-mailadres en telefoonnummer",
            "Land",
            "Details over uw project en elk bericht dat u verstuurt",
          ],
          "Wij registreren ook technische en contextuele informatie over uw aanvraag: de datum, het gebruikte formulier en de taal van de website.",
        ],
      },
      {
        h: "3. Waarvoor wij ze gebruiken",
        b: [
          "Wij gebruiken deze informatie uitsluitend om:",
          [
            "uw aanvraag te beantwoorden en hierover contact met u op te nemen",
            "een voorstel op maat van uw project op te stellen",
            "de zakelijke relatie te onderhouden die u start",
            "onze website te beschermen en misbruik te voorkomen",
          ],
          "Wij baseren ons op uw aanvraag en toestemming, op de stappen die nodig zijn om u te antwoorden vóór een overeenkomst, en op ons gerechtvaardigd belang bij het voeren van een veilige en professionele onderneming. Wij gebruiken uw gegevens niet voor geautomatiseerde besluitvorming.",
        ],
      },
      {
        h: "4. Cookies",
        b: [
          "Deze website kan cookies en vergelijkbare technologieën gebruiken. Essentiële cookies zijn nodig om de site te laten werken. Andere cookies worden alleen gebruikt volgens de keuzes die u maakt in de cookiebanner, die u op elk moment kunt wijzigen via de instellingen van uw browser.",
        ],
      },
      {
        h: "5. Bewaartermijn en delen",
        b: [
          "Uw gegevens worden alleen bewaard zolang dat nodig is om uw aanvraag af te handelen en de daaruit voortvloeiende relatie te beheren, en worden daarna verwijderd of geanonimiseerd. Wij verkopen uw persoonsgegevens niet.",
          "Uw gegevens kunnen worden verwerkt door dienstverleners die namens ons handelen, zoals een CRM-systeem, hosting- of e-maildiensten. Deze dienstverleners mogen de gegevens alleen gebruiken om hun dienst aan ons te leveren.",
        ],
      },
      {
        h: "6. Internationale doorgifte",
        b: [
          "Onze teams zijn gevestigd in Madagaskar en wij werken met klanten in Europa en elders, waardoor uw gegevens buiten uw land van verblijf kunnen worden verwerkt. In dat geval nemen wij passende maatregelen om uw gegevens te beschermen in overeenstemming met de toepasselijke gegevensbeschermingsregels.",
        ],
      },
      {
        h: "7. Beveiliging",
        b: [
          "Wij passen technische en organisatorische maatregelen toe om uw gegevens te beschermen tegen verlies, misbruik en onbevoegde toegang, waaronder gecontroleerde toegang, vertrouwelijkheidsverplichtingen voor ons personeel en een beveiligde IT-infrastructuur.",
        ],
      },
      {
        h: "8. Uw rechten",
        b: [
          "Met inachtneming van het toepasselijke recht kunt u ons vragen om:",
          [
            "u toegang te geven tot de gegevens die wij over u bewaren",
            "onjuiste of onvolledige gegevens te corrigeren",
            "uw gegevens te verwijderen",
            "de verwerking van uw gegevens te beperken of u daartegen te verzetten",
            "uw gegevens in een overdraagbaar formaat te verstrekken",
            "uw toestemming op elk moment in te trekken, zonder gevolgen voor eerdere verwerking",
          ],
          "Om deze rechten uit te oefenen, kunt u schrijven naar {email}. Wij kunnen u vragen uw identiteit te bevestigen voordat wij antwoorden. Als u vindt dat uw rechten niet worden gerespecteerd, kunt u ook contact opnemen met de gegevensbeschermingsautoriteit van uw land.",
        ],
      },
      {
        h: "9. Kinderen",
        b: [
          "Deze website is bedoeld voor zakelijk gebruik en richt zich niet op kinderen. Wij verzamelen niet bewust persoonsgegevens van minderjarigen.",
        ],
      },
      {
        h: "10. Wijzigingen van dit beleid",
        b: [
          "Wij kunnen dit beleid van tijd tot tijd bijwerken. De datum bovenaan deze pagina geeft aan wanneer het voor het laatst is herzien.",
        ],
      },
      { h: "11. Contact", b: [], contact: true },
    ],
  },
  terms: {
    title: "Algemene voorwaarden",
    intro:
      "Deze voorwaarden regelen uw gebruik van deze website. Door de website te bezoeken, accepteert u ze. Als u het er niet mee eens bent, gebruik de website dan niet.",
    sections: [
      {
        h: "1. Uitgever van de website",
        box: "regEmail",
        b: ["Deze website wordt uitgegeven door {name}, gevestigd te {address}."],
      },
      {
        h: "2. Gebruik van deze website",
        b: [
          "De inhoud van deze website wordt verstrekt ter informatie over de outsourcingdiensten van {name}. Het vormt geen contractueel aanbod. U stemt ermee in de website rechtmatig te gebruiken en de werking ervan niet te verstoren of zich er op onbevoegde wijze toegang toe te verschaffen.",
        ],
      },
      {
        h: "3. Voorstellen en overeenkomsten",
        b: [
          "Diensten, teamsamenstellingen, planningen en prijzen worden vastgelegd in een schriftelijk voorstel dat voor elke klant wordt opgesteld. Elke samenwerking wordt beheerst door de overeenkomst die is gesloten tussen {name} en de klant, die voorrang heeft op de informatie die op deze website is gepubliceerd.",
        ],
      },
      {
        h: "4. Intellectueel eigendom",
        b: [
          "De teksten, beelden, logo's en het ontwerp van deze website behoren toe aan {name} of worden met toestemming gebruikt. Ze mogen niet zonder voorafgaande schriftelijke toestemming, geheel of gedeeltelijk, worden gereproduceerd, gewijzigd of verspreid.",
        ],
      },
      {
        h: "5. Juistheid van informatie en aansprakelijkheid",
        b: [
          "Wij doen ons best de informatie op deze website juist en actueel te houden, maar kunnen niet garanderen dat deze volledig of foutloos is. {name} kan niet aansprakelijk worden gesteld voor schade die voortvloeit uit het gebruik van deze website of uit tijdelijke onbeschikbaarheid van de site.",
        ],
      },
      {
        h: "6. Externe links",
        b: [
          "Deze website kan links naar websites van derden bevatten. {name} heeft geen controle over hun inhoud en is er niet verantwoordelijk voor.",
        ],
      },
      {
        h: "7. Persoonsgegevens",
        b: [
          "Hoe wij omgaan met de persoonsgegevens die via deze website worden ingediend, wordt beschreven in ons {privacy}.",
        ],
      },
      {
        h: "8. Wijzigingen van deze voorwaarden",
        b: [
          "Wij kunnen deze voorwaarden van tijd tot tijd bijwerken. De datum bovenaan deze pagina geeft aan wanneer ze voor het laatst zijn herzien.",
        ],
      },
      {
        h: "9. Toepasselijk recht en bevoegde rechter",
        b: [
          "Op deze voorwaarden is het recht van Madagaskar van toepassing. Elk geschil met betrekking tot het gebruik van deze website dat niet in der minne kan worden opgelost, wordt voorgelegd aan de bevoegde rechtbanken van Antsirabe, Madagaskar.",
        ],
      },
      { h: "10. Contact", b: [], contact: true },
    ],
  },
  cookies: {
    title: "Cookiebeleid",
    intro:
      "Dit beleid legt uit welke cookies en vergelijkbare technologieën {name} op deze website gebruikt, waarvoor ze dienen en hoe u ze kunt beheren.",
    sections: [
      {
        h: "1. Wat cookies zijn",
        b: [
          "Cookies zijn kleine bestanden die op uw apparaat worden opgeslagen wanneer u een website bezoekt. Vergelijkbare technologieën, zoals de lokale opslag van uw browser, werken op dezelfde manier. Ze stellen een website in staat informatie te onthouden tussen pagina's of bezoeken.",
        ],
      },
      {
        h: "2. Essentiële opslag",
        b: [
          "Bepaalde informatie wordt in uw browser opgeslagen zodat de site correct werkt en zich bij uw volgende bezoek consistent gedraagt:",
          ["uw taalkeuze", "uw beslissing over niet-essentiële cookies"],
          "Deze opslag is nodig om de site te laten werken en vereist uw toestemming niet. Ze wordt niet gebruikt om u op andere websites te volgen.",
        ],
      },
      {
        h: "3. Meetcookies",
        b: [
          "Tools voor bezoekersmeting, zoals Google Analytics, helpen ons te begrijpen hoe de website wordt gebruikt zodat wij hem kunnen verbeteren. Ze zijn alleen actief als ze in de siteconfiguratie zijn ingeschakeld en u niet-essentiële cookies heeft geaccepteerd. Als u weigert, worden er geen meetcookies op uw apparaat geplaatst.",
        ],
      },
      {
        h: "4. Uw keuze",
        b: [
          "Bij uw eerste bezoek aan de website kunt u via een banner niet-essentiële cookies accepteren of weigeren. Weigeren heeft geen invloed op uw toegang tot de site.",
          "Om uw keuze te wijzigen, wist u de gegevens van deze site in uw browserinstellingen en laadt u de pagina opnieuw: de banner verschijnt dan opnieuw. U kunt uw browser ook zo instellen dat cookies op elk moment worden geblokkeerd of verwijderd.",
        ],
      },
      {
        h: "5. Persoonsgegevens",
        b: [
          "Voor meer informatie over hoe wij met uw persoonsgegevens omgaan en over uw rechten, zie ons {privacy}.",
        ],
      },
      {
        h: "6. Wijzigingen van dit beleid",
        b: [
          "Wij kunnen dit beleid bijwerken, met name wanneer nieuwe tools aan de website worden toegevoegd. De datum bovenaan deze pagina geeft aan wanneer het voor het laatst is herzien.",
        ],
      },
      { h: "7. Contact", b: [], contact: true },
    ],
  },
};

const ar: LegalLang = {
  eyebrow: "قانوني",
  lastUpdated: "آخر تحديث",
  updated: "أكتوبر 2026",
  privacyLink: "سياسة الخصوصية",
  labels: {
    email: "البريد الإلكتروني",
    france: "جهة الاتصال في فرنسا",
    madagascar: "جهة الاتصال في مدغشقر",
    address: "العنوان",
  },
  privacy: {
    title: "سياسة الخصوصية",
    intro:
      "توضح هذه السياسة كيفية تعامل {name} مع البيانات الشخصية المقدَّمة عبر هذا الموقع، والحقوق التي تتمتعون بها بشأن هذه البيانات.",
    sections: [
      {
        h: "1. المسؤول عن بياناتكم",
        box: "reg",
        b: ["المسؤول عن معالجة البيانات هو {name}، ومقرّه في {address}."],
      },
      {
        h: "2. البيانات التي نجمعها",
        b: [
          "عند تعبئة أحد النماذج على هذا الموقع، نجمع المعلومات التي تقدمونها:",
          [
            "الاسم والشركة والمسمّى الوظيفي",
            "عنوان البريد الإلكتروني المهني ورقم الهاتف",
            "البلد",
            "تفاصيل مشروعكم وأي رسالة ترسلونها",
          ],
          "كما نسجّل معلومات تقنية وسياقية متعلقة بطلبكم: التاريخ، والنموذج المستخدم، ولغة الموقع.",
        ],
      },
      {
        h: "3. لماذا نستخدمها",
        b: [
          "نستخدم هذه المعلومات فقط من أجل:",
          [
            "الردّ على طلبكم والتواصل معكم بشأنه",
            "إعداد عرض مصمَّم خصيصًا لمشروعكم",
            "الحفاظ على العلاقة المهنية التي تبادرون بها",
            "حماية موقعنا ومنع إساءة الاستخدام",
          ],
          "نستند إلى طلبكم وموافقتكم، وإلى الإجراءات اللازمة للردّ عليكم قبل أي عقد، وإلى مصلحتنا المشروعة في إدارة نشاط آمن ومهني. لا نستخدم بياناتكم لاتخاذ قرارات آلية.",
        ],
      },
      {
        h: "4. ملفات تعريف الارتباط",
        b: [
          "قد يستخدم هذا الموقع ملفات تعريف الارتباط وتقنيات مشابهة. ملفات تعريف الارتباط الأساسية لازمة لعمل الموقع. أما الملفات الأخرى فلا تُستخدم إلا وفق اختياراتكم في شريط ملفات تعريف الارتباط، ويمكنكم تغييرها في أي وقت من إعدادات المتصفح.",
        ],
      },
      {
        h: "5. الاحتفاظ بالبيانات ومشاركتها",
        b: [
          "نحتفظ ببياناتكم فقط للمدة اللازمة لمعالجة طلبكم وإدارة العلاقة الناتجة عنه، ثم تُحذف أو تُجهَّل هويتها. نحن لا نبيع بياناتكم الشخصية.",
          "قد تتم معالجة بياناتكم من قِبل مزوّدي خدمات يعملون نيابةً عنا، مثل نظام إدارة علاقات العملاء أو خدمات الاستضافة أو البريد الإلكتروني. ولا يجوز لهؤلاء المزوّدين استخدام البيانات إلا لتقديم خدمتهم لنا.",
        ],
      },
      {
        h: "6. عمليات النقل الدولية",
        b: [
          "فرقنا مقيمة في مدغشقر ونعمل مع عملاء في أوروبا وأماكن أخرى، لذا قد تُعالَج بياناتكم خارج بلد إقامتكم. وفي هذه الحالة نتخذ التدابير المناسبة لحماية بياناتكم وفق قواعد حماية البيانات المعمول بها.",
        ],
      },
      {
        h: "7. الأمان",
        b: [
          "نطبّق تدابير تقنية وتنظيمية لحماية بياناتكم من الفقدان وسوء الاستخدام والوصول غير المصرّح به، بما في ذلك الوصول المحدود، والتزامات السرية لموظفينا، وبنية تقنية آمنة.",
        ],
      },
      {
        h: "8. حقوقكم",
        b: [
          "مع مراعاة القانون المعمول به، يمكنكم أن تطلبوا منا:",
          [
            "إتاحة الاطلاع على البيانات التي نحتفظ بها عنكم",
            "تصحيح البيانات غير الدقيقة أو غير الكاملة",
            "حذف بياناتكم",
            "تقييد معالجة بياناتكم أو الاعتراض عليها",
            "تزويدكم ببياناتكم بصيغة قابلة للنقل",
            "سحب موافقتكم في أي وقت دون التأثير على المعالجة السابقة",
          ],
          "لممارسة هذه الحقوق، راسلونا على {email}. قد نطلب منكم تأكيد هويتكم قبل الرد. وإذا رأيتم أن حقوقكم غير محترمة، يمكنكم أيضًا التواصل مع هيئة حماية البيانات في بلدكم.",
        ],
      },
      {
        h: "9. الأطفال",
        b: [
          "هذا الموقع مخصص للاستخدام المهني وغير موجَّه للأطفال. ولا نجمع عن علم بيانات شخصية من القاصرين.",
        ],
      },
      {
        h: "10. التغييرات على هذه السياسة",
        b: [
          "قد نحدّث هذه السياسة من وقت لآخر. ويبيّن التاريخ في أعلى هذه الصفحة تاريخ آخر مراجعة لها.",
        ],
      },
      { h: "11. التواصل", b: [], contact: true },
    ],
  },
  terms: {
    title: "الشروط والأحكام",
    intro:
      "تحكم هذه الشروط استخدامكم لهذا الموقع. بتصفحه فإنكم توافقون عليها. وإذا لم توافقوا عليها، يُرجى عدم استخدام الموقع.",
    sections: [
      {
        h: "1. ناشر الموقع",
        box: "regEmail",
        b: ["يُنشر هذا الموقع من قِبل {name}، ومقرّه في {address}."],
      },
      {
        h: "2. استخدام هذا الموقع",
        b: [
          "يُقدَّم محتوى هذا الموقع لأغراض إعلامية حول خدمات الاستعانة بمصادر خارجية التي تقدمها {name}. ولا يُعدّ عرضًا تعاقديًا. وتتعهدون باستخدام الموقع بشكل قانوني وعدم تعطيل عمله أو محاولة الوصول إليه بطريقة غير مصرّح بها.",
        ],
      },
      {
        h: "3. العروض والعقود",
        b: [
          "تُحدَّد الخدمات وتشكيلات الفرق والجداول الزمنية والأسعار في عرض مكتوب يُعدّ لكل عميل. ويخضع أي التزام للعقد الموقَّع بين {name} والعميل، وهو يسود على المعلومات المنشورة على هذا الموقع.",
        ],
      },
      {
        h: "4. الملكية الفكرية",
        b: [
          "النصوص والصور والشعارات وتصميم هذا الموقع مملوكة لـ {name} أو مستخدمة بإذن. ولا يجوز نسخها أو تعديلها أو توزيعها، كليًا أو جزئيًا، دون إذن كتابي مسبق.",
        ],
      },
      {
        h: "5. دقة المعلومات والمسؤولية",
        b: [
          "نحرص على أن تكون المعلومات الواردة في هذا الموقع دقيقة ومحدّثة، لكننا لا نضمن اكتمالها أو خلوّها من الأخطاء. ولا تتحمل {name} المسؤولية عن أي ضرر ناتج عن استخدام هذا الموقع أو عن توقفه المؤقت.",
        ],
      },
      {
        h: "6. الروابط الخارجية",
        b: [
          "قد يحتوي هذا الموقع على روابط لمواقع تابعة لجهات خارجية. ولا تملك {name} أي سيطرة على محتواها ولا تتحمل المسؤولية عنه.",
        ],
      },
      {
        h: "7. البيانات الشخصية",
        b: ["تُوصف طريقة تعاملنا مع البيانات الشخصية المقدَّمة عبر هذا الموقع في {privacy}."],
      },
      {
        h: "8. التغييرات على هذه الشروط",
        b: [
          "قد نحدّث هذه الشروط من وقت لآخر. ويبيّن التاريخ في أعلى هذه الصفحة تاريخ آخر مراجعة لها.",
        ],
      },
      {
        h: "9. القانون الواجب التطبيق والاختصاص القضائي",
        b: [
          "تخضع هذه الشروط لقوانين مدغشقر. وأي نزاع يتعلق باستخدام هذا الموقع ولا يمكن تسويته ودّيًا يُحال إلى المحاكم المختصة في أنتسيرابي، مدغشقر.",
        ],
      },
      { h: "10. التواصل", b: [], contact: true },
    ],
  },
  cookies: {
    title: "سياسة ملفات تعريف الارتباط",
    intro:
      "توضح هذه السياسة ملفات تعريف الارتباط والتقنيات المشابهة التي تستخدمها {name} على هذا الموقع، والغرض منها، وكيفية التحكم بها.",
    sections: [
      {
        h: "1. ما هي ملفات تعريف الارتباط",
        b: [
          "ملفات تعريف الارتباط هي ملفات صغيرة تُخزَّن على جهازكم عند زيارة موقع إلكتروني. وتعمل التقنيات المشابهة، مثل التخزين المحلي للمتصفح، بالطريقة نفسها. وهي تتيح للموقع تذكّر المعلومات بين الصفحات أو بين الزيارات.",
        ],
      },
      {
        h: "2. التخزين الأساسي",
        b: [
          "تُحفظ بعض المعلومات في متصفحكم ليعمل الموقع بشكل صحيح ويتصرف بشكل متسق في زيارتكم القادمة:",
          ["اختياركم للغة", "قراركم بشأن ملفات تعريف الارتباط غير الأساسية"],
          "هذا التخزين لازم لعمل الموقع ولا يتطلب موافقتكم. ولا يُستخدم لتتبعكم عبر مواقع أخرى.",
        ],
      },
      {
        h: "3. ملفات القياس",
        b: [
          "تساعدنا أدوات قياس الجمهور، مثل Google Analytics، على فهم كيفية استخدام الموقع لتحسينه. ولا تكون فعّالة إلا إذا فُعّلت في إعدادات الموقع وقبلتم ملفات تعريف الارتباط غير الأساسية. وإذا رفضتم، فلن تُوضع أي ملفات قياس على جهازكم.",
        ],
      },
      {
        h: "4. اختياركم",
        b: [
          "عند زيارتكم الموقع لأول مرة، يتيح لكم شريط قبول أو رفض ملفات تعريف الارتباط غير الأساسية. والرفض لا يؤثر على وصولكم إلى الموقع.",
          "لتغيير قراركم، امسحوا بيانات هذا الموقع من إعدادات المتصفح وأعيدوا تحميل الصفحة: سيظهر الشريط مجددًا. ويمكنكم أيضًا ضبط المتصفح لحظر ملفات تعريف الارتباط أو حذفها في أي وقت.",
        ],
      },
      {
        h: "5. البيانات الشخصية",
        b: [
          "لمزيد من المعلومات حول كيفية تعاملنا مع بياناتكم الشخصية وحول حقوقكم، راجعوا {privacy}.",
        ],
      },
      {
        h: "6. التغييرات على هذه السياسة",
        b: [
          "قد نحدّث هذه السياسة، لا سيما عند إضافة أدوات جديدة إلى الموقع. ويبيّن التاريخ في أعلى هذه الصفحة تاريخ آخر مراجعة لها.",
        ],
      },
      { h: "7. التواصل", b: [], contact: true },
    ],
  },
};

export const legalContent: Record<LanguageCode, LegalLang> = { en, fr, es, de, it, pt, nl, ar };
