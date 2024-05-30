import { Link } from 'react-router-dom';
import Hero from '../component/hero.png'
import Back from '../component/backg.png'
function Home() {
    return (
        <div>
           <section className="pt-48 dark:bg-gray-900" style={{ backgroundImage: `url(${Back})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="container px-8 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <h1 className="text-4xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-5xl">
                    Enhance your
                    <br />
                    <span className="text-purple-600">Chances.</span>
                </h1>
                <p style={{fontFamily:'cursive'}} className="max-w-lg mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    Elevate your career with seamless CV <br></br>submission and interview scheduling.
                </p>
                <div className="flex mt-12">
                    <Link to="/client/interview" style={{fontFamily:'revert'}} className="mb-4 inline-flex items-center px-6 py-3 mr-6 text-lg font-semibold leading-snug text-white bg-purple-700 rounded-lg hover:bg-purple-800">
                    Schedule Your Interview
                    </Link>
                </div>
            </div>
        </div>
    </div>
</section>


            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 dark:text-white sm:text-4xl">Tailwind CSS components and templates</h2>
                        <p className="max-w-2xl mt-4 text-lg text-gray-600 dark:text-gray-400">Easily customizable, modular components and templates for building modern web applications with Tailwind CSS.</p>
                    </div>
                    <div className="flex flex-wrap mt-16 -mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50">
                                    <svg className="w-8 h-8 text-purple-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M12 2c-.508 0-.961.336-1.111.825L10.1 4H7.333C5.493 4 4 5.504 4 7.333V13.35C4 15.191 5.493 16.684 7.333 16.684H8V20c0 .553.447 1 1 1h2c.553 0 1-.447 1-1v-3.316h1.684C15.507 16.684 17 15.191 17 13.35V7.333C17 5.493 15.507 4 13.667 4H10.9L13.111 2.825C13.153 2.755 13.08 2.666 13 2.666zm0 2c.275 0 .667.266.667.666v5.984H11.33V4.666c0-.4.393-.666.67-.666zm-4.667 9.334c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667H9.64c-.047.037-.093.083-.148.148-.303.298-.48.713-.48 1.148v5.968c0 .369-.299.667-.667.667zm5 0c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667h.667c.368 0 .667.299.667.667v5.968c0 .369-.299.667-.667.667zm4.666 0c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667h.667c.368 0 .667.299.667.667v5.968c0 .369-.299.667-.667.667z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Unlimited color options</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">Customize your landing page with any color you prefer and make it truly yours.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50">
                                    <svg className="w-8 h-8 text-purple-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M12 2c-.508 0-.961.336-1.111.825L10.1 4H7.333C5.493 4 4 5.504 4 7.333V13.35C4 15.191 5.493 16.684 7.333 16.684H8V20c0 .553.447 1 1 1h2c.553 0 1-.447 1-1v-3.316h1.684C15.507 16.684 17 15.191 17 13.35V7.333C17 5.493 15.507 4 13.667 4H10.9L13.111 2.825C13.153 2.755 13.08 2.666 13 2.666zm0 2c.275 0 .667.266.667.666v5.984H11.33V4.666c0-.4.393-.666.67-.666zm-4.667 9.334c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667H9.64c-.047.037-.093.083-.148.148-.303.298-.48.713-.48 1.148v5.968c0 .369-.299.667-.667.667zm5 0c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667h.667c.368 0 .667.299.667.667v5.968c0 .369-.299.667-.667.667zm4.666 0c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667h.667c.368 0 .667.299.667.667v5.968c0 .369-.299.667-.667.667z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Fully responsive</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">Works perfectly on any device from mobile to desktop.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="flex flex-col items-center">
                                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-purple-50">
                                    <svg className="w-8 h-8 text-purple-700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor" d="M12 2c-.508 0-.961.336-1.111.825L10.1 4H7.333C5.493 4 4 5.504 4 7.333V13.35C4 15.191 5.493 16.684 7.333 16.684H8V20c0 .553.447 1 1 1h2c.553 0 1-.447 1-1v-3.316h1.684C15.507 16.684 17 15.191 17 13.35V7.333C17 5.493 15.507 4 13.667 4H10.9L13.111 2.825C13.153 2.755 13.08 2.666 13 2.666zm0 2c.275 0 .667.266.667.666v5.984H11.33V4.666c0-.4.393-.666.67-.666zm-4.667 9.334c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667H9.64c-.047.037-.093.083-.148.148-.303.298-.48.713-.48 1.148v5.968c0 .369-.299.667-.667.667zm5 0c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667h.667c.368 0 .667.299.667.667v5.968c0 .369-.299.667-.667.667zm4.666 0c-.368 0-.667-.298-.667-.666V7.333c0-.368.299-.667.667-.667h.667c.368 0 .667.299.667.667v5.968c0 .369-.299.667-.667.667z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Hero sections</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">Beautiful, responsive hero sections to showcase your product.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
