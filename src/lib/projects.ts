export interface Project {
    path: string
    image: string
    additionalImages?: string[]
    title: string
    mainColor: string
    stack: string[]
    live: string
    github?: string
    dashboard?: string
    description: string
}

export const Projects: Project[] = [
    {
        path: 'jobseeker',
        image: '/images/projects/jobseeker.webp',
        title: 'Jobseeker',
        mainColor: '#5894A0',
        stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion', 'three.js', 'React Three Fiber', 'React Three Drei', 'React Three Rapier', 'Prisma', 'PostgreSQL'],
        live: 'https://seekerapp.xyz/',
        description: 'Aplikacja do zarządzania procesem rekrutacji. Umożliwia użytkownikom zapisywanie ofert pracy, tworzenie notatek, śledzenie statusów aplikacji na tablicy kanban, przesyłanie plików oraz monitorowanie statystyk. Posiada również skraper danych ofert pracy wspomagany sztuczną inteligencją.'
    },
    {
        path: 'pizza',
        image: '/images/projects/pizza.webp',
        title: 'Pizza & Pasta',
        mainColor: '#A1343B',
        stack: ['Next.js', 'Pusher', 'Prisma', 'Zod', 'shadcn/ui', 'TailwindCSS', 'Zustand', 'PostgreSQL', 'TypeScript'],
        live: 'https://pasta-olive.vercel.app/',
        dashboard: 'https://pasta-olive.vercel.app/login',
        github: 'https://github.com/karoljanowski/pasta',
        description: 'Projekt osobisty stworzony w celu nauki podstaw Next.js. Aplikacja umożliwia użytkownikom zamawianie jedzenia z restauracji, zarządzanie zamówieniami oraz pozwala właścicielom restauracji na aktualizację menu. Oferuje kompleksowe rozwiązanie do zamawiania i zarządzania żywnością.'
    },
    {
        path: 'apartments',
        image: '/images/projects/apartments.webp',
        title: 'React Apartments',
        mainColor: '#979173',
        stack: ['React', 'TailwindCSS', 'JavaScript', 'Framer Motion', 'React Router', 'Supabase'],
        live: 'https://apartments-phi.vercel.app/',
        github: 'https://github.com/karoljanowski/apartments',
        dashboard: 'https://apartments-phi.vercel.app/admin',
        description: 'Strona internetowa prezentująca oferty mieszkań w przejrzystym formacie strony landing page. Umożliwia użytkownikom dokonywanie rezerwacji oraz zawiera panel dla właścicieli nieruchomości do zarządzania rezerwacjami.'
    },
] 