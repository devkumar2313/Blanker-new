import React, { Component } from 'react';

export class Contact extends Component {
    static displayName = Contact.name;
    constructor(props) {
        super(props);
        this.state = { email:'devkumarpal@gmail.com'};
    }
    render() {
        return (
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
               <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
               <section class='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
               <div class=" text-gray-900 max-w-3xl mx-auto  mt-14 ">
               <h3 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Have Questions? <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Contact Us!</span></h3>
               <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
        Contact details:
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Details and informations about Creator.
        </p>
    </div>
    <div class="border-t border-gray-200">
        <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Dev Kumar Pal
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Best techno
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    React JS
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    devkumarpal444@gmail.com
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Phone no.
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    8595101129
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Friends:
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    Kunal Saini, Aman Verma, Vishal Panchal
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    About
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    I am a non-talented Student in India who want to be magician by waving hands on the keyboard.
                </dd>
            </div>

        </dl>
    </div>
</div>
                {/* <span className='pagehe0'>
                    <h1>For Support,Complain and Help:</h1>
                </span> */}
                {/* <h1>Contact details:</h1>
                <div className='pagehe1'>
                    
                    <h3>Email:devkumarpal@gmail.com</h3>
                </div>
                <div className='pagebu'>
                    <button onClick={() => { navigator.clipboard.writeText(this.state.email) }}>COPY</button>
                </div>
                <div className='pagehe2'>
                    <h3>Phone:7457935579</h3>
                    <h3>Youtube Channel:<a href='https://www.youtube.com/channel/UCPkyg4Q9iKflb_DB9bmI0tQ'>Team 7</a></h3>
                </div>
                
                <h1>Website Designer Details:</h1>
                <div className='pagehe3'>
                    <h3>Name: Dev Kumar Pal</h3>
                    <h3>Profession: Student</h3>
                    <h3>Freinds: Divyanshu and Rohit</h3>
                </div>
                <h1>Thank you for Visiting My First Website</h1>
                <div>
                    <h1>SINCE 2021</h1>
                </div> */}

                </div>
                </section>
            
            </div>
            </div>
            
            );
    }
}