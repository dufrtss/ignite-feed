import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/eduardofreitas2.png',
			name: 'Eduardo Freitas',
			role: 'Sofware Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: 'eduardo.design/doctorcare' },
		],

		publishedAt: new Date('2022-12-15 15:50:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/SofiaMartinslv.png',
			name: 'Sofia Martins',
			role: 'Sofware Developer',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{ type: 'link', content: '👉 eduardo.design/doctorcare' },
		],

		publishedAt: new Date('2022-12-16 16:00:00'),
	},
];

function App() {
	return (
		<>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map((post) => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</>
	);
}

export default App;
