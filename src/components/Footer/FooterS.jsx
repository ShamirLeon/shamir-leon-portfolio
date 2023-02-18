import GitHubIcon from '../../assets/Icons/GithubIcon';
import FemIcon from '../../assets/Icons/FEMIcon';
// import LinkedInIcon from '../../assets/Icons/LinkedInIcon.png'

const FooterS = params => {
	return (
		<footer className='flex items-center justify-center gap-6 bg-Dark-Blue py-6'>
			<a href='https://github.com/ShamirLeon' target='_blank' rel='noreferrer'>
				<GitHubIcon className='h-12 w-12 fill-White' />
			</a>
			<a
				href='https://frontendmentor.io/profile/ShamirLeon'
				target='_blank'
				rel='noreferrer'
			>
				<FemIcon className='h-10 w-10 fill-White' />
			</a>
			{/* <a href="" target='_blank' rel="noreferrer">
                <img src={LinkedInIcon} alt=" " className='w-12 h-12'/>
            </a> */}
		</footer>
	);
};
export default FooterS;
