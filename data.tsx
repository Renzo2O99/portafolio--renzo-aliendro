import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Rss, Crop, Pencil, Computer, Book, Rocket, Speech, Instagram, Github } from "lucide-react";
import { 
    htmlIcon, cssIcon, javascriptIcon, typescriptIcon, phpIcon,
    sassIcon, npmIcon, 
    reactIcon, viteJsIcon, nextJsIcon,
    tailwindIcon, bootstrapIcon, gulpIcon, wordpressIcon,
    gitIcon, githubIcon, vsCodeIcon } from './components/icons/icons-component';

export type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "#!",
    },
];

export const technologiesIcons = [
    sassIcon, npmIcon, 
    reactIcon, viteJsIcon, nextJsIcon,
    tailwindIcon, bootstrapIcon, gulpIcon, wordpressIcon,
    gitIcon, githubIcon, vsCodeIcon
]

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "TechSolutions",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.",
        date: "Nov 2023 ",
        icons: [] as IconComponent[], 
    },
    {
        id: 2,
        title: "Creador de Experiencias Digitales",
        subtitle: "PixelCrafters",
        description: "Trabaja en proyectos emocionantes que desafían los límites de la creatividad y la tecnología. Únete a nosotros mientras creamos experiencias digitales cautivadoras que inspiran y cautivan a nuestros usuarios.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Especialista en Desarrollo Frontend",
        subtitle: "CodeForge Solutions",
        description: "Como desarrollador frontend, tendrás la oportunidad de colaborar en proyectos diversos y desafiantes que te permitirán expandir tus habilidades y dejar tu huella en el mundo digital.",
        date: "Ago 2019",
    },
    {
        id: 4,
        title: "Prácticas Grado",
        subtitle: "WebWizards Inc.",
        description: "Únete a nosotros mientras creamos sitios web y aplicaciones interactivas que sorprenden y deleitan a nuestros clientes. Si tienes pasión por el diseño y la programación, y disfrutas colaborar en un entorno creativo, ¡queremos conocerte!        ",
        date: "Mar 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortafolio = [
    {
        id: 1,
        position: 1,
        title: "Landing Page - Empresa de Arquitectura",
        image: "/mockup-project-1.jpg",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
        urlGithub: "https://github.com/Renzo2O99/Landing-Page-Empresa-Arquitectura",
        urlDemo: "https://renzo2o99.github.io/Landing-Page-Empresa-Arquitectura/",
        icons: [
            htmlIcon, cssIcon
        ] as IconComponent[],
    },
    {
        id: 2,
        position: 2,
        title: "Landing Page - Nust (Tarjeta de Crédito)",
        image: "/mockup-project-2.png",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
        urlGithub: "https://github.com/Renzo2O99/Proyecto---Landing-Page-de-Nust--Tarjeta-de-Credito",
        urlDemo: "https://renzo2o99.github.io/Proyecto---Landing-Page-de-Nust--Tarjeta-de-Credito/",
        icons: [htmlIcon, cssIcon] as IconComponent[],
    },
    {
        id: 3,
        position: 3,
        title: "Landing Page - Meeti",
        image: "/mockup-project-3.png",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
        urlGithub: "https://github.com/Renzo2O99/Proyecto--Landing-Page-Meeti",
        urlDemo: "#!",
        icons: [htmlIcon, cssIcon, npmIcon,gulpIcon, sassIcon] as IconComponent[],
    },
    {
        id: 4,
        position: 4,
        title: "Web Site - Sitio Web Cafetería",
        image: "/mockup-project-4.png",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
        urlGithub: "https://github.com/Renzo2O99/Proyecto---Sitio-Web-de-una-Cafeteria",
        urlDemo: "https://renzo2o99.github.io/Proyecto---Sitio-Web-de-una-Cafeteria/",
        icons: [
            htmlIcon, cssIcon, 
            npmIcon, gulpIcon, sassIcon,
        ] as IconComponent[],
    },
    {
        id: 5,
        position: 5,
        title: "Landing Page - Podcast FM",
        image: "/mockup-project-5.png",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
        urlGithub: "https://github.com/Renzo2O99/Proyecto--Landing-Page-PodcastFM",
        urlDemo: "https://renzo2o99.github.io/Proyecto--Landing-Page-PodcastFM/",
        icons: [
            htmlIcon, cssIcon, 
            npmIcon, sassIcon, gulpIcon,
        ] as IconComponent[],
    },
    {
        id: 6,
        position: 6,
        title: "Landing Page - Festival Techno Music",
        image: "/mockup-project-6.png",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
        urlGithub: "https://github.com/Renzo2O99/Proyecto---Festival-de-Musica-Techno",
        urlDemo: "https://renzo2o99.github.io/Proyecto---Festival-de-Musica-Techno/",
        icons: [
            htmlIcon, cssIcon, javascriptIcon,
            npmIcon,gulpIcon, sassIcon,
        ] as IconComponent[],
    },
    {
        id: 7,
        position: 7,
        title: "Web Site/Blog - GymFitness",
        image: "/mockup-project-7.png",
        description: "Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.",
        urlGithub: "https://dev-gymfitnessdemo.pantheonsite.io/",
        urlDemo: "https://dev-gymfitnessdemo.pantheonsite.io/",
        icons: [
            htmlIcon, cssIcon, phpIcon, 
            npmIcon, wordpressIcon
        ] as IconComponent[],
    },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];

// Contenido de la biografía:
export const biografyContent = {
    speciality: "Web Developer especializado en Frontend.",
    description: "Me dedico a desarrollar proyectos web en mi tiempo libre.",
    pictureProfileUrl: "/home-4.png",
}

// Configuración de las Animaciones:
export const animationSettings = {
    delayTypeAnimation: 1000,
    stringTypeAnimationPhrase: "Si puedes imaginarlo,",
    arrayTypeAnimationPhrases: [
        "puedes diseñarlo.",
        "puedes programarlo.",
        "puedes optimizarlo.",
        "puedes implementarlo.",
        "puedes desarrollarlo.",
        "puedes crearlo."
    ],
    sequence: () => {
        const { arrayTypeAnimationPhrases, delayTypeAnimation } = animationSettings;
        return arrayTypeAnimationPhrases.flatMap((phrase) => [
            phrase,
            delayTypeAnimation // Este retraso se aplica después de cada frase
        ]);
    }
};

// Configuración de Botones:
export const buttonSettings = {
    contactButtonWhite: "Visualizar Proyectos",
    contactButtonOrange: "Contactar Conmigo"
};