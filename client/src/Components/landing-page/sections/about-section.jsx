import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../shared/card'
import { Button } from '../../shared/button'

const AboutSection = () => {
    return (
        <div className='bg-base-white flex justify-center items-center py-12'>
            <div className='flex flex-col -mr-10'>
                <img src="/assets/about-image-podcast.jpg" alt="podcast-image" className='w-96 h-72 rounded-t-2xl'/>
                <img src="/assets/about-image-concert.jpg" alt="concert-image" className='w-96 h-72 rounded-b-2xl'/>
            </div>
                <Card className="w-[95%] md:w-[470px] gap-12 py-14 z-10 bg-deep-blue px-6 border-deep-blue rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-primary text-4xl font-semibold">
                         About Us
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-12">
                        <p className='text-base-white text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sapien eu efficitur tristique. Vivamus volutpat ornare ornare. Donec sed sollicitudin turpis. Donec iaculis aliquet mi. Phasellus sed metus erat. Curabitur et turpis vel quam sodales sagittis eu venenatis ante. Mauris posuere feugiat dolor sit amet pharetra.</p>
                        <p className='text-base-white text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit sapien eu efficitur tristique. Vivamus volutpat ornare ornare. Donec sed sollicitudin turpis. Donec iaculis aliquet mi. Phasellus sed metus erat. Curabitur et turpis vel quam sodales sagittis eu venenatis ante. Mauris posuere feugiat dolor sit amet pharetra.</p>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-primary text-deep-blue text-lg w-full">
                            Learn More
                        </Button>
                    </CardFooter>
                </Card>
            <div className='flex flex-col -ml-10'>
                <img src="/assets/about-image-get-together.jpg" alt="get-together-image" className='w-96 h-72 rounded-t-2xl'/>
                <img src="/assets/about-image-dinner.jpg" alt="dinner-image" className='w-96 h-72 rounded-b-2xl'/>
            </div>
        </div>
    )
}

export default AboutSection