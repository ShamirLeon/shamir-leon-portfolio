import { useRef } from 'react';
import WavesTopDesktop from '../../assets/Icons/WavesTopDesktop';
import FooterS from '../Footer/FooterS';

import { ContactSection } from '../../data/data.json';

import emailjs from '@emailjs/browser';

const Contact = params => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_22heeyf',
				'template_q6xgkp8',
				form.current,
				'R6MFX0q-pGExt-x6e'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};
	return (
		<>
			<WavesTopDesktop className='rotate-180 lg:-mb-1' />
			<section
				id='Contact'
				className='bg-Dark-Blue px-6 py-12 text-center lg:grid lg:grid-cols-12 lg:grid-rows-[.5fr_.5fr] lg:gap-5 lg:px-32'
			>
				<div className='lg:col-start-1 lg:col-end-7'>
					<h2 className='mb-6 text-3xl font-bold uppercase tracking-widest text-Light-Green lg:text-left lg:text-5xl'>
						Contacto
					</h2>
					<p className='text-justify text-lg text-White'>{ContactSection}</p>
				</div>

				<form
					ref={form}
					onSubmit={sendEmail}
					className='flex flex-col gap-12 py-6 lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:gap-4 lg:py-0'
				>
					<input
						autoComplete='off'
						id='nombre'
						type='text'
						placeholder='Nombre'
						className='h-14 w-full border-b-2 border-b-Light-Gray bg-transparent text-lg text-Light-Gray placeholder:absolute placeholder:text-lg placeholder:text-Light-Gray focus:outline-none'
						required
						name='user_name'
					/>
					<input
						autoComplete='off'
						type='email'
						placeholder='Email'
						className='h-14 w-full border-b-2 border-b-Light-Gray bg-transparent text-lg text-Light-Gray placeholder:absolute placeholder:text-lg placeholder:text-Light-Gray focus:outline-none'
						required
						name='user_email'
					/>
					<input
						autoComplete='off'
						type='text'
						placeholder='Asunto'
						className='h-14 w-full border-b-2 border-b-Light-Gray bg-transparent text-lg text-Light-Gray placeholder:absolute placeholder:text-lg placeholder:text-Light-Gray focus:outline-none'
						required
						name='subject'
					/>
					<textarea
						autoComplete='off'
						type='text'
						placeholder='Mensaje'
						className='h-20 w-full border-b-2 border-b-Light-Gray bg-transparent text-lg text-Light-Gray placeholder:absolute placeholder:text-lg placeholder:text-Light-Gray  focus:outline-none'
						required
						name='message'
					/>
					<button
						type='submit'
						className='mx-auto w-[120px] rounded-3xl bg-Light-Accent-Blue py-1 text-lg font-bold uppercase text-Dark-Blue'
					>
						Enviar
					</button>
				</form>
				<div className='lg:col-start-1 lg:col-end-7'>
					<FooterS></FooterS>
				</div>
			</section>
		</>
	);
};
export default Contact;
