import { SkillsSection } from '../../data/data.json';

const Skills = params => {
	return (
		<section
			id='Skills'
			className='absolute right-0 left-0 z-30 mx-auto flex w-[300px] flex-col items-center gap-5 rounded-xl bg-White py-12 text-Dark-Blue  shadow-2xl lg:relative lg:m-0 lg:gap-2 lg:pt-12'
		>
			<div className='absolute top-0 flex w-full gap-2 rounded-t-xl bg-[#E0E8F0] px-6 py-2'>
				<div className='h-3 w-3 rounded-full bg-[#3BB662]'> </div>
				<div className='h-3 w-3 rounded-full bg-[#E5C30F]'> </div>
				<div className='h-3 w-3 rounded-full bg-[#E75448]'> </div>
			</div>
			<h2 className='text-3xl font-bold text-Accent-Blue lg:text-2xl'>
				Habilidades
			</h2>
			<span className='h-[2px] w-24 bg-Light-Green'> </span>
			{SkillsSection.Abilities.map(element => (
				<span key={element.id} className='text-lg lg:text-base'>
					{element.text}
				</span>
			))}
			<h2 className='text-3xl font-bold text-Accent-Blue lg:text-2xl'>
				Dev Tools
			</h2>
			<span className='h-[2px] w-24 bg-Light-Green'> </span>
			{SkillsSection.DevTools.map(element => (
				<span key={element.id} className='text-lg lg:text-base'>
					{element.text}
				</span>
			))}
		</section>
	);
};

export default Skills;
