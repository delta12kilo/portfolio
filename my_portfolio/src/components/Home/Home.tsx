import './Home.css';


const Home = () => {

    return (
        <>
            <div>
                <div className='flex flex-col h-40 max-w-[130vh] mx-auto home'>
                    <div>
                        <span className='text-5xl text-[#ec8846]'>
                            Hi, I'm
                        </span>
                    </div>
                    <div>
                        <span className='text-6xl text-[#ec8846]'>
                            Deepak Kumar
                        </span>
                    </div>
                    <div>
                        <span className='text-3xl text-[#ec8846]'>
                            Your friendly neighbourhood developer...
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;