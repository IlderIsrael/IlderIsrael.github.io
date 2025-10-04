export const profile = {
	fullName: 'Ilder Israel Salgado Marin',
	title: 'Undergraduate Physics Student',
	institute: 'Universidad Nacional Autónoma de Mexico',
	author_name: 'Salgado, I.', // Author name to be highlighted in the papers section
	research_areas: [
	{
		title: 'Mechanical Physics',
		description: 'Experience in classical mechanics, including Newtonian dynamics and analytical formulations.',
		field: 'mechanics',
	},
	{
		title: 'Fluid Mechanics',
		description: 'Knowledge in fluid dynamics, including laminar and turbulent flow, Navier-Stokes equations, and theoretical development.',
		field: 'fluid-mechanics',
	},
],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: '',
	x: 'https://www.x.com/',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Ilder Israel',
	default_description: 'Estudiante de licenciatura, especial interes en mecánica.',
	default_image: '/images/astro-academia.png',
}
