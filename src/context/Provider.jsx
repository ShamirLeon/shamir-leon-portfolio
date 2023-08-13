import { useEffect, useState } from 'react';
import DataContext from './Context';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	import.meta.env.VITE_SUPABASE_PROJECT_URL,
	import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Provider = ({ children }) => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		getProjects();
	}, []);

	const getProjects = async () => {
		const { data, error } = await supabase
			.from('projects')
			.select('*')
			.order('id', { ascending: false });

		if (error) console.log(error);
		else setProjects(data);
	};

	return (
		<DataContext.Provider value={{ projects }}>{children}</DataContext.Provider>
	);
};

export default Provider;
