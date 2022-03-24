import React from 'react'

const JobsCard = () => {
    return (
        <section className="relative py-16 min-w-screen animation-fade animation-delay">
        <div className="container px-8 mx-auto sm:px-12 xl:px-5">
            <h3 className="mt-1 text-2xl font-bold text-left  sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center">
                Jobs At Hey Sassy
            </h3>
            <div className="w-full px-6 py-6 mx-auto mt-10 bg-slate-50 sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3 rounded-lg">
                <h3 className="text-lg font-bold  sm:text-xl md:text-2xl">Graphic Designer</h3>
                <p className="mt-2 text-base  sm:text-lg md:text-normal">
                    We are looking for a bright graphics designer who can create eye catching visual art to engage and entrance our customers.
                    The candidate should be able to do the following: <br />
                    Study design briefs and determine requirements
                    Schedule projects and define budget constraints
                    Conceptualize visuals based on requirements
                    Prepare rough drafts and present ideas
                    Develop illustrations, logos and other designs using software or by hand
                    Use the appropriate colors and layouts for each graphic
                    Work with copywriters and creative director to produce final design
                    Test graphics across various media
                    Amend designs after feedback
                </p>
            </div>
            <div className="w-full px-6 py-6 mx-auto mt-10 bg-slate-50 sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3 rounded-lg">
                <h3 className="text-lg font-bold  sm:text-xl md:text-2xl">Fashion Merchandiser</h3>
                <p className="mt-2 text-base  sm:text-lg md:text-normal">
                    We have a wide network of fashion designer&apos;s for curation &#38; merchandising as per the aesthetic of multi designer curated stores.
                    We works only in high end fashion merchandise from established to up coming fashion labels and trends.
                    We are looking for some one with the right credentials and taste to join our team of sassy fashion Merchandisers.
                </p>
            </div>
            <div className="w-full px-6 py-6 mx-auto mt-10 bg-slate-50 sm:px-8 md:px-12 sm:py-8  lg:w-5/6 xl:w-2/3 rounded-lg">
                <h3 className="text-lg font-bold  sm:text-xl md:text-2xl">Fashion Designer</h3>
                <p className="mt-2 text-base  sm:text-lg md:text-normal">
                We are looking for an experienced Fashion Design Associate who can creatively strategize/execute anushé pirani&apos;s design sensibility. 
                This role is responsible for managing the entire design process  from research to sampling and production keeping in mind our brand and its unique aesthetic. 
                The right candidate should have command of best practices in fashion illustration, textile development 
                and management and experience with slow fashion brands.
                </p>
            </div>
        </div>
    </section>
    )
}

export default JobsCard