import { SkillsSection } from '../../data/data.json';

const Skills = params => {
	return (
		<section
			id='Skills'
			className='absolute left-0 right-0 z-30 mx-auto flex w-[300px] -translate-y-32 flex-col items-center gap-5 rounded-xl bg-White py-12 shadow-2xl'
		>
			<h2 className='text-3xl font-bold text-Accent-Blue'>Habilidades</h2>
			<span className='h-[2px] w-24 bg-Light-Green'> </span>
			{SkillsSection.Abilities.map(element => (
				<span key={element.id} className='text-lg'>
					{element.text}
				</span>
			))}
			<h2 className='text-3xl font-bold text-Accent-Blue'>Dev Tools</h2>
			<span className='h-[2px] w-24 bg-Light-Green'> </span>
			{SkillsSection.DevTools.map(element => (
				<span key={element.id} className='text-lg'>
					{element.text}
				</span>
			))}
		</section>
	);
};

export default Skills;
