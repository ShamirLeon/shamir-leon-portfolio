import { SkillsSection } from '../../data/data.json';

const Skills = params => {
	return (
		<section
			id='Skills'
			className='relative z-30 mx-auto flex w-[300px] -translate-y-32 flex-col items-center gap-5 rounded-xl bg-White py-12 shadow-2xl'
		>
			<div className='w-full bg-[#E0E8F0] absolute top-0 rounded-t-xl flex px-6 py-2 gap-2'>
				<div className='bg-[#3BB662] w-3 h-3 rounded-full'> </div>
				<div className='bg-[#E5C30F] w-3 h-3 rounded-full'> </div>
				<div className='bg-[#E75448] w-3 h-3 rounded-full'> </div>
			</div>
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
