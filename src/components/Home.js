import React, { Component} from 'react';
import './Home.css';
import {ReactComponent as YourSvg} from './letter-w-svgrepo-com.svg'

import {ReactComponent as YourSvg2} from './reshot-icon-sand-timer-SVQDFT6A9J.svg'
export class Home extends Component {
    static displayName = Home.name;
   
    constructor(props) {

        super(props);
        this.state = {
            cov1: '♀', cov2: '♂', cov3: '☹', cov4: '☺', cov5: '☻', cov6: '〠', cov7: 'ヅ', cov8: 'ツ', cov9: '㋡', cov10: '웃', cov11: '유', cov12: 'ü', cov13: 'Ü', cov14: 'シ', cov15: 'ッ', cov16: '㋛', cov17: '☐', cov18: 'ꑇ', cov19: 'ꐕ', cov20: 'ꌇ', cov21: 'ꌈ', cov22: 'ꉕ', cov23: 'ꈋ', cov24: 'ꈌ', cov25: 'ꆛ', cov26: 'ꆜ', cov27: 'ꃼ', cov28: '☠', cov29:'☃', cov30: '〲', cov31: '〴', cov32: 'ϡ', cov33: '⍢', cov34: '⍣', cov35: '⍤', cov36: '⍥', cov37: '⍨', cov38:'⍩', cov39:'ὃ', cov40:'ὕ', cov41:'ὣ', cov42:'Ѷ', cov43:'Ӫ', cov44:'ӫ', cov45:'℀', cov46:'৳', cov47:'≝', cov48:'≄',

            houg: false,
            put4: 'abcdefghijklmnopqrstuvyz',
            timer: 0, inko: true, unko: false, minute: '', time: {}, seconds: 60, currentCount: '', vistext: 'good', ipoints: '0', dpoints: '0', result1: 'good', inpucl: '',loading:false,buttonText:'Check',loading2:false,buttonText2:"Check",loadin3:false,buttonText3:"Please fill",inputValue:"",inputValue2:"",error:"",error2:"",error3:"",error4:"",LevelEnhancer:true,small:true,ReadRules:true,copy1:false,copy2:false,copy3:false,copy4:false,copy5:false,copy6:false,copy7:false,copy8:false,copy9:false,copy10:false,copy11:false,copy12:false,copy13:false,copy14:false,copy15:false,copy16:false,copy17:false,copy18:false,copy19:false,copy20:false,copy21:false,copy22:false,copy23:false,copy24:false,copy25:false,copy26:false,copy27:false,copy28:false,copy29:false,copy30:false,copy31:false,copy32:false,copy33:false,copy34:false,copy35:false,copy36:false,copy37:false,copy38:false,copy39:false,copy40:false,percentage:0,focusedInput:null
        };

        this.incrementCounter = this.incrementCounter.bind(this);
        this.incrementCounter1 = this.incrementCounter1.bind(this);
        this.restart = this.restart.bind(this);

        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.Makeid = this.Makeid.bind(this);
       
    }
    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.state.timer == 0 && this.state.seconds > 0) {
            this.state.timer = setInterval(this.countDown, 1000);

        }
    }
    restart() {
        this.setState({
            currentCount: '',
            result1:'good',
            seconds: 60,
            unko: false,
            inko: true,
            ipoints: '0',
            dpoints: '0',
            inpucl: '',
            minute: '',
            timer: 0,
            houg: false,
            loading:false,buttonText:'Check',loading2:false,buttonText2:"Check",loadin3:false,buttonText3:"Please fill",inputValue:"",inputValue2:"",error:"",error2:"",error3:"",error4:"",LevelEnhancer:true,small:true,ReadRules:true,
            percentage:0,
            focusedInput:null
        });

    }
    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.

        if (seconds == 0) {
            clearInterval(this.state.timer);


        }
    }
    incrementCounter(event) {
        this.setState({
            currentCount: event.target.value
        });
    }
    incrementCounter1(event) {
        this.setState({
            inpucl: event.target.value
        });
    }
    minuteset(event) {
        this.setState({

            minute: event.target.value
        })

    }


    // this.state.inputValue2
    Makeid() {
        var len = this.state.inputValue2
        var result = ''
        var characters = this.state.put4;
        var charactersLength = characters.length;
        for (var i = 0; i < len; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({ result1: result });

    }

    textchecker() {
        if (this.state.currentCount == this.state.result1) {
          
            return (
                <div>
                    <h1>yes your word is correct</h1>
                  
                </div>
            );
        }
        else {
            return (
                <h1>no your word is wrong</h1>
                );
        }
    }
    pointcoun(event) {
        if (event.key === 'Enter') {
            this.setState({
                currentCount: '',
                ReadRules: false,
                
            });
            this.Makeid();
            if (this.state.currentCount == this.state.result1) {
                this.setState({ ipoints: + this.state.ipoints + 1 });
            }
            else {
                this.setState({ dpoints: + this.state.dpoints + 1 });
            }
           
           
        }
        else {
            
            console.log('key pressed');
        }

    }

    
  
    render() {

        
      
        // Prevent Enter key default behavior
        const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
            if (this.state.focusedInput === 2) {
              e.preventDefault(); // Prevent form submission if second input is focused
              handleButton1(); // Trigger the submit logic for the second input
            }
          }
        };
       
        const handleButton1 = () => {
            this.setState({error2:""})
           
            this.setState({loading2:true,buttonText2:"Processing.."});
            
            // Simulate a process with a timeout
            setTimeout(() => {
                this.setState({loading2:false,buttonText2:'✔'});

            }, 1000); // Change 3000 to the desired time in milliseconds
            if(this.state.buttonText == '✔'){
                this.setState({buttonText3:'Next'})

            }
        }
       
       
            const hello = () => {
                this.setState({error3:""})
                
                this.setState({loading:true,buttonText:"Processing.."});
                
                // Simulate a process with a timeout
                setTimeout(() => {
                    this.setState({loading:false,buttonText:'✔'});
  
                }, 1000); // Change 3000 to the desired time in milliseconds
                if(this.state.buttonText2 == '✔'){
                    this.setState({buttonText3:'Next'})

                }
            }
       
            const handleChange=(e)=>{
               this.setState({inputValue:e.target.value});
               this.setState({minute:e.target.value})
               if(e.target.value != ''){
                this.setState({error:""})
            }
               
            }
            const handleChange2=(e)=>{

                this.setState({inputValue2:e.target.value});
                if(e.target.value != ''){
                    this.setState({error4:""})
                }
            }
          
        const handleClick3=()=>{
            if (this.state.inputValue == '' ){
                this.setState({error:"You have to fill the text box to move further."})

            }
            if(this.state.inputValue2 == ''){
                this.setState({error4:"You have to fill the text box to move further."})
            }
            if (this.state.buttonText != '✔'){
                this.setState({error3:"You have to Click the check button"})
            }
            if(this.state.buttonText != '✔' && this.state.inputValue2 == ''){
                this.setState({error3:"and You have to Click the check button"})
            }
            if (this.state.buttonText2 != '✔'){
                this.setState({error2:"You have to Click the check button"})
            }
            if(this.state.buttonText2 != '✔' && this.state.inputValue == ''){
                this.setState({error2:"and You have to Click the check button"})
            }
           
            
           
            if((this.state.inputValue != '' && this.state.inputValue2 != '') &&(this.state.buttonText == '✔' && this.state.buttonText2 == '✔') ){
                this.setState({ inko: false })

            }
                
                
            
        }
      
       
        
        
        if (this.state.seconds > 0) {
            if (this.state.inko) {
                
              
                
               
                return (
                    <>
              
              <div class=" inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
              <div class=" bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
              <section
        id="hero"
        class="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
      >
        
        <div id='input' class='sm:w-1/2 relative overflow-auto'>
                       
                        <form action="/submit-form"
          class="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4" onSubmit={(event)=>{event.preventDefault();}}>
                       <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <YourSvg class={`w-4 h-4 text-gray-500 dark:text-gray-400  ${this.state.error3 ? 'mb-6':'mb-0' } `} aria-hidden="true" fill="none" />
        
           
            </div>
            <button className={`text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${this.state.error3 ? 'mb-6':'mb-0' } dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`} onClick={hello}
            disabled={this.state.loading}>{this.state.buttonText}</button>
        <input type="number" id="search" value={this.state.inputValue2} 
        onChange={handleChange2} onKeyDown={(e)=>{handleKeyDown(e)}} onFocus={()=>{
            this.setState({focusedInput:1})
        }} className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${this.state.error3 ? 'border-red-500' : 'border-gray-300'}`} placeholder="Password Length" required />
        {this.state.error3 && (
        <p className="mt-1 text-red-500 text-sm ">{this.state.error4} {this.state.error3}</p>
      )}
       
              
            
    </div>

    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <YourSvg2 class={`w-4 h-4 text-gray-500 dark:text-gray-400  ${this.state.error2 ? 'mb-6':'mb-0' } `} aria-hidden="true" fill="none" />
        </div>
        <button type="submit" className={`text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${this.state.error3 ? 'mb-6':'mb-0' } dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`} onClick={handleButton1}
            disabled={this.state.loading2}>{this.state.buttonText2}</button>
        {/* <button type="submit" className={`text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${this.state.error2 ? 'mb-6':'mb-0' } dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`} onClick={handleButton1}
            disabled={this.state.loading2}>{this.state.buttonText2}</button> */}
        <input type="number" id="search" value={this.state.inputValue} 
        onChange={handleChange} onKeyDown={(e)=>{handleKeyDown(e)}} onFocus={()=>{
            this.setState({focusedInput:2})
        }} className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${this.state.error2 ? 'border-red-500' : 'border-gray-300'}`} placeholder="Time Limit" required />
         {this.state.error2 && (
        <p className="mt-1 text-red-500 text-sm ">{this.state.error} {this.state.error2}</p>
      )}
       
    </div>                     
    <button class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={handleClick3
                                }>{this.state.buttonText3}<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg></button>       

                              
                        </form>

                            
                   </div>
                   <article id='header' class="sm:w-1/2 ">
          <h2
            class="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white"
          >
            If want to waste your time,So <span class="text-indigo-700 dark:text-indigo-300">Blanker </span>is there for you...
          </h2>
          <p
            class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
          >
            We are the group of student who make your life more hard by giving you Deferred Gratification.
          </p>
          <p
            class="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400"
          >
            So,In this game you have to write passwords,yes you see what I trying to say So,earn points by writing it and Check Your <span class='underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600'>PPM</span>,And See where you lie in this Aesthetic but Empty Game. 
          </p>
        </article>
      </section>
      
      <footer class="bg-slate-700 text-white text-xl">
        <section class="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
            <address>
            <h1 className='disclamer'>Must Do: 1.Please fill the form to move forward.</h1><br />
            <h1 className='disclamer1'> 2.Please choose Password length carefully because acc. to that the challenge come.</h1>
            </address>
          
        
        
        <div class="flex flex-col sm:gap-2">
          <p class="text-right">Copyright &copy; <span id="year">2024</span></p>
          <p class="text-right">All Rights Reserved</p>
        </div>

        </section>
      

      </footer>
      </div>
      </div>
                       
                    
                    </>
                    );
                
            }
            
            if(this.state.inko == false) {
                
                
                if (!this.state.unko){

                
            
                return (
                    <>
                    <div className='fixed left-0 top-0 -z-10 h-full w-full'>
                    <div className='relative h-full w-full bg-black'>
                    <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                    </div>
                    <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
</div>
                    <section className='relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12 pt-20 scroll-mt-16'>
                      <h1 className='text-center text-4xl font-extrabold text-indigo-600 dark:text-gray-50 leading-10 tracking-widest sm:text-6xl'>Please Select Level:</h1>
                     
                     <form className='max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4'>
                         
                            
                     <h3 class="mb-5 text-lg font-medium text-gray-500 dark:text-white mt-5">Lets see who are you actually?</h3>
<ul class="grid w-full gap-8 md:grid-cols-2">
    <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required onClick={() => {
                         this.setState({
                             put4: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
                             LevelEnhancer: false,
                             unko: true,
                             seconds:this.state.seconds * this.state.minute
                               
                         })
                        
                             }} />
        <label for="hosting-small" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">                           
            
        <span class="absolute  flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <span class='relative text-gray-800'>For Beginners</span>
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
</span>
                <div class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Easy Level</div>
                <div class="relative invisible">Good for Beginners..</div>
           
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-medium" name="medium" value="hosting-medium" class="hidden peer" required onClick={() => {
                         this.setState({
                             put4: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=',
                             LevelEnhancer: false,
                             unko: true,
                             seconds:this.state.seconds * this.state.minute
                                })
                        
                             }} />
        <label for="hosting-medium" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">                           
            
        <span class="absolute  flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <span class='relative text-gray-800'>For Students</span>
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
</span>
                <div class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Medium Level</div>
                <div class="relative invisible">Good for Beginners..</div>
           
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-hard" name="hard" value="hosting-hard" class="hidden peer" required onClick={() => {
                         this.setState({
                             put4: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:;|\)(?.][%$#@!~`₹^&*-+_',
                             LevelEnhancer: false,
                             unko: true,
                             seconds:this.state.seconds * this.state.minute
                                
                         })
                        
                             }} />
        <label for="hosting-hard" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">                           
            
        <span class="absolute  flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <span class='relative text-gray-800'>For Employees</span>
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
</span>
                <div class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Hard Level</div>
                <div class="relative invisible">Good for Beginners..</div>
           
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-extreme" name="extreme" value="hosting-extreme" class="hidden peer" required onClick={() => {
                         this.setState({
                             put4: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:;|\)(?.][%$#@!~`₹^&*-+_♀♂☹☺☻〠ヅツ㋡웃유üÜシッ㋛͟ꑇꐕꌇꌈꉕꈋꈌꆛꆜꃼ☠☃〲〴ϡ⍢⍣⍤⍥⍨⍩ὃὕὣѶӪӫ℀৳≝≄',
                             unko: true,
                             LevelEnhancer: true,
                             seconds:this.state.seconds * this.state.minute
                                
                         })
                         
                             }} />
        <label for="hosting-extreme" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">                           
            
            <span class="absolute  flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <span class='relative text-gray-800'>For Programmers</span>
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
</span>
                <div class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Extreme Level</div>
                <div class="relative invisible">Good for Beginners..</div>
           
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
</ul>
                        
                       
                     </form>
                     
                         
                     
                    
                      </section>
                 </div>
                 
                 </div>
                    
                </>
                );
            }
                if(this.state.unko){
                    this.startTimer()
                    if(this.state.LevelEnhancer){
                        return (
                            <> 
                             <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
                            <div class="flex items-start justify-left -mb-10  gap-2 count-down-main">
                             <div class="timer w-16">
    <div
    class=" bg-indigo-600 py:1 px:1 md:py-2 md:px-1 lg:py-3 lg:px-2 rounded-lg overflow-hidden">
    <h3
      class="font-Cormorant font-semibold text:0.5xl md:text-1xl text-white text-center">{this.state.time.m}
    </h3>
    </div>
    <p class="font-Cormorant font-normal text-myColor mt-1 text-center text-1xl md:text-1.2xl lg:text-1.5xl w-full ">minutes</p>
    </div>
    <h3 class="font-manrope font-semibold text:1xl md:text-2xl lg:text-3xl text-myColor">:</h3>
    <div class="timer w-16">
    <div
    class=" bg-indigo-600 py:1 px:1 md:py-2 md:px-1 lg:py-3 lg:px-2 rounded-lg overflow-hidden ">
    <h3
      class="font-Cormorant font-semibold text-1xl text-white text-center animate-countinsecond">{this.state.time.s}
    </h3>
    </div>
    <p class="text-1xl md:text-1.2xl lg:text-1.5xl font-Cormorant font-normal text-myColor mt-1 text-center w-full">seconds</p>
    </div>
    </div>
                             <header class='top-0 z-10'>
                             {/* <h2 className='text-white'>Time Limit: s:{this.state.time.m} s:{this.state.time.s}</h2>  */}
                        
    
                                <section className='max-w-xl mx-auto p-4 flex justify-between items-center'>
                               
                               
                               
                               
                                <h2 className="hidden sm:block font-hero ml-40 text-yellow-light text-shadow text-6xl   leading-[80px] md:leading-[80px] text-center md:text-left  border-4 border-double border-indigo-600 bg-indigo-100 ">Game:</h2> 
                                <h2 className="sm:hidden font-hero ml-40 text-yellow-light text-shadow text-4xl   leading-[40px] md:leading-[80px] text-center md:text-left  border-4 border-double border-indigo-600 bg-indigo-100 ">Game:</h2> 
    
                                </section>
    
                                
                            
    
                            </header>
                            
                            <div class='max-w-4xl mx-auto '>
                            
                            <section id='left' class='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'>
                                    
                                
                            <div className='text-white sticky'>
                                    <div className='thirdpageplayingwords '>
                                    <h2 class="text-gray-600 text-2xl font-extrabold md:text-3xl lg:text-4xl">
     Your Writing Input: <span class="px-2 text-white bg-mybg rounded">{this.state.result1}</span>
      </h2>
                                        
                                   
        
                                    </div>
        
                                   
    <div class="relative">
        <input id="floating_helper" aria-describedby="floating_helper_text" class="block rounded-t-lg mt-3 px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type='password' value={this.state.currentCount} onChange={(e) => this.incrementCounter(e)} onKeyDown={(e) => this.pointcoun(e)}/>
        <label for="floating_helper" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Write here buddy...</label>
    </div>
    <p id="floating_helper_text" class="mt-2 text-xs text-gray-500 dark:text-gray-400">To Submit Your Password Please Click Enter Button <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Follow The Rules</a>.</p>
    
                                        
        
                                    {/* <div className='thirdpagesearchbox'>
                                        <label>Your Text:</label>
                                        <input type='password' value={this.state.currentCount} onChange={(e) => this.incrementCounter(e)} onKeyDown={(e) => this.pointcoun(e)}></input>
                                </div> */}
                                   
                                    
                                    </div>
                                    </section>
                            </div>
                            
                            <div class=" h-12xl w-full bg-slate-950">
                            <div class=" bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
                                <section class='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
                                <div class=" max-w-3xl mx-auto text-center mt-7 ">
        <h1 class="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Non-Keyboard Unicodes</span>
            <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h1>
        <div class="grid grid-cols-4 gap-4 p-4 border-2 border-black bg-slate-950">
        
       
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov1} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy1:true})
                setTimeout(() => {this.setState({
                copy1:false})},2000)
                navigator.clipboard.writeText(this.state.cov1)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy1 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy1 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov2} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy2:true})
                setTimeout(() => {this.setState({
                copy2:false})},2000)
                navigator.clipboard.writeText(this.state.cov2)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy2 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy2 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov3} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy3:true})
                setTimeout(() => {this.setState({
                copy3:false})},2000)
                navigator.clipboard.writeText(this.state.cov3)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy3 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy3 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov4} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy4:true})
                setTimeout(() => {this.setState({
                copy4:false})},2000)
                navigator.clipboard.writeText(this.state.cov4)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy4 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy4 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov5} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy5:true})
                setTimeout(() => {this.setState({
                copy5:false})},2000)
                navigator.clipboard.writeText(this.state.cov5)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy5 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy5 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov6} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy6:true})
                setTimeout(() => {this.setState({
                copy6:false})},2000)
                navigator.clipboard.writeText(this.state.cov6)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy6 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy6 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov7} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy7:true})
                setTimeout(() => {this.setState({
                copy7:false})},2000)
                navigator.clipboard.writeText(this.state.cov7)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy7 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy7 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov8} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy8:true})
                setTimeout(() => {this.setState({
                copy8:false})},2000)
                navigator.clipboard.writeText(this.state.cov8)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy8 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy8 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov9} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy9:true})
                setTimeout(() => {this.setState({
                copy9:false})},2000)
                navigator.clipboard.writeText(this.state.cov9)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy9 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy9 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov10} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy10:true})
                setTimeout(() => {this.setState({
                copy10:false})},2000)
                navigator.clipboard.writeText(this.state.cov10)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy10 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy10 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov11} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy11:true})
                setTimeout(() => {this.setState({
                copy11:false})},2000)
                navigator.clipboard.writeText(this.state.cov11)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy11 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy11 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov12} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy12:true})
                setTimeout(() => {this.setState({
                copy12:false})},2000)
                navigator.clipboard.writeText(this.state.cov12)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy12 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy12 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov13} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy13:true})
                setTimeout(() => {this.setState({
                copy13:false})},2000)
                navigator.clipboard.writeText(this.state.cov13)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy13 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy13 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov14} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy14:true})
                setTimeout(() => {this.setState({
                copy14:false})},2000)
                navigator.clipboard.writeText(this.state.cov14)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy14 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy14 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov15} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy15:true})
                setTimeout(() => {this.setState({
                copy15:false})},2000)
                navigator.clipboard.writeText(this.state.cov15)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy15 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy15 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov16} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy16:true})
                setTimeout(() => {this.setState({
                copy16:false})},2000)
                navigator.clipboard.writeText(this.state.cov16)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy16 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy16 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov17} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy17:true})
                setTimeout(() => {this.setState({
                copy17:false})},2000)
                navigator.clipboard.writeText(this.state.cov17)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy17 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy17 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov18} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy18:true})
                setTimeout(() => {this.setState({
                copy18:false})},2000)
                navigator.clipboard.writeText(this.state.cov18)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy18 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy18 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov19} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy19:true})
                setTimeout(() => {this.setState({
                copy19:false})},2000)
                navigator.clipboard.writeText(this.state.cov19)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy19 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy19 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov20} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy20:true})
                setTimeout(() => {this.setState({
                copy20:false})},2000) 
                navigator.clipboard.writeText(this.state.cov20)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy20 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy20 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov21} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy21:true})
                setTimeout(() => {this.setState({
                copy21:false})},2000)
                navigator.clipboard.writeText(this.state.cov21)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy21 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy21 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov22} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy22:true})
                setTimeout(() => {this.setState({
                copy22:false})},2000)
                navigator.clipboard.writeText(this.state.cov22)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy22 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy22 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov23} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy23:true})
                setTimeout(() => {this.setState({
                copy23:false})},2000)
                navigator.clipboard.writeText(this.state.cov23)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy23 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy23 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov24} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy24:true})
                setTimeout(() => {this.setState({
                copy24:false})},2000)
                navigator.clipboard.writeText(this.state.cov24)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy24 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy24 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov25} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy25:true})
                setTimeout(() => {this.setState({
                copy25:false})},2000)
                navigator.clipboard.writeText(this.state.cov25)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy25 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy25 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov26} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy26:true})
                setTimeout(() => {this.setState({
                copy26:false})},2000)
                navigator.clipboard.writeText(this.state.cov26)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy26 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy26 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov27} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy27:true})
                setTimeout(() => {this.setState({
                copy27:false})},2000)
                navigator.clipboard.writeText(this.state.cov27)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy27 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy27 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov28} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy28:true})
                setTimeout(() => {this.setState({
                copy28:false})},2000)
                navigator.clipboard.writeText(this.state.cov28)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy28 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy28 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov29} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy29:true})
                setTimeout(() => {this.setState({
                copy29:false})},2000)
                navigator.clipboard.writeText(this.state.cov29)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy29 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy29 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov30} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy30:true})
                setTimeout(() => {this.setState({
                copy30:false})},2000)
                navigator.clipboard.writeText(this.state.cov30)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy30 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy30 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov31} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy31:true})
                setTimeout(() => {this.setState({
                copy31:false})},2000)
                navigator.clipboard.writeText(this.state.cov31)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy31 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy31 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov32} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy32:true})
                setTimeout(() => {this.setState({
                copy32:false})},2000)
                navigator.clipboard.writeText(this.state.cov32)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy32 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy32 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov33} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy33:true})
                setTimeout(() => {this.setState({
                copy33:false})},2000)
                navigator.clipboard.writeText(this.state.cov33)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy33 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy33 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov34} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy34:true})
                setTimeout(() => {this.setState({
                copy34:false})},2000)
                navigator.clipboard.writeText(this.state.cov34)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy34 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy34 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov35} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy35:true})
                setTimeout(() => {this.setState({
                copy35:false})},2000)
                navigator.clipboard.writeText(this.state.cov35)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy35 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy35 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov36} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy36:true})
                setTimeout(() => {this.setState({
                copy36:false})},2000)
                navigator.clipboard.writeText(this.state.cov36)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy36 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy36 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov37} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy37:true})
                setTimeout(() => {this.setState({
                copy37:false})},2000)
                navigator.clipboard.writeText(this.state.cov37)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy37 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy37 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov38} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy38:true})
                setTimeout(() => {this.setState({
                copy38:false})},2000)
                navigator.clipboard.writeText(this.state.cov38)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy38 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy38 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov39} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy39:true})
                setTimeout(() => {this.setState({
                copy39:false})},2000)
                navigator.clipboard.writeText(this.state.cov39)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy39 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy39 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    <div class="w-full max-w-[16rem]">
        <div class="relative">
            <label for="npm-install-copy-text" class="sr-only">Label</label>
            <input id="npm-install-copy-text" type="text" class="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={this.state.cov40} disabled readonly/>
            <button onClick={()=>{
                this.setState({copy40:true})
                setTimeout(() => {this.setState({
                copy40:false})},2000)
                navigator.clipboard.writeText(this.state.cov40)}} class="absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy40 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy40 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
        </div>
    </div>
    
    </div>
      
    
    </div>
                                </section>
                           </div>
                           </div>
                            </div>
                           
                    
                                  
                                    
                                   
                                </>
                        );
        
    
                    }
                    if(!this.state.LevelEnhancer){
                        return(
                            <>
                                
                            <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
                            <div class="flex items-start justify-left -mb-10  gap-2 count-down-main">
                             <div class="timer w-10 md:w-16">
    <div
    class=" bg-indigo-600 py:0.5xl px:1 md:py-2 md:px-1 lg:py-3 lg:px-2 rounded-lg overflow-hidden">
    <h3
      class="font-Cormorant font-semibold text:0.5xl md:text-1xl text-white text-center">{this.state.time.m}
    </h3>
    </div>
    <p class="font-Cormorant font-normal text-myColor mt-1 text-center text-xs md:text-xl lg:text-1.5xl w-full ">minutes</p>
    </div>
    <h3 class="font-manrope font-semibold text:0.5xl md:text-2xl lg:text-3xl text-myColor">:</h3>
    <div class="timer w-16">
    <div
    class=" bg-indigo-600 py:0.5 px:1 md:py-2 md:px-1 lg:py-3 lg:px-2 rounded-lg overflow-hidden ">
    <h3
      class="font-Cormorant font-semibold text-1xl text-white text-center animate-countinsecond">{this.state.time.s}
    </h3>
    </div>
    <p class="text-xs md:text-xl lg:text-1.5xl font-Cormorant font-normal text-myColor mt-1 text-center w-full ">seconds</p>
    </div>
    </div>
                             <header class='sticky top-0 z-10'>
                             {/* <h2 className='text-white'>Time Limit: s:{this.state.time.m} s:{this.state.time.s}</h2>  */}
                        
    
                                <section className='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
                               
                               
                               <div className='max-w-3xl mx-auto'>
                               <h2 className="hidden sm:block font-hero text-yellow-light text-shadow text-6xl   leading-[80px] md:leading-[80px] text-center md:text-left  border-4 border-double border-indigo-600 bg-indigo-100 ">Game:</h2> 
                               <h2 className="sm:hidden mt-8 font-hero  text-yellow-light text-shadow text-4xl   leading-[40px] md:leading-[80px] text-center md:text-left  border-4 border-double border-indigo-600 bg-indigo-100 ">Game:</h2> 

                               </div>
                               
                               
    
                                </section>
    
                                
                            
    
                            </header>
                            
                            <div class='max-w-4xl mx-auto '>
                            
                            <section id='left' class='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'>
                                    
                                
                            <div className='text-white'>
                                    <div className='thirdpageplayingwords '>
                                    <h2 class="text-gray-600 text-2xl font-extrabold md:text-3xl lg:text-4xl">
     Your Writing Input: <span class="px-2 text-white bg-mybg rounded">{this.state.result1}</span>
      </h2>
                                        
                                   
        
                                    </div>
        
                                   
    <div class="relative">
        <input id="floating_helper" aria-describedby="floating_helper_text" class="block rounded-t-lg mt-3 px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " type='password' value={this.state.currentCount} onChange={(e) => this.incrementCounter(e)} onKeyDown={(e) => this.pointcoun(e)}/>
        <label for="floating_helper" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Write here buddy...</label>
    </div>
    <p id="floating_helper_text" class="mt-2 text-xs text-gray-500 dark:text-gray-400">To Submit Your Password Please Click Enter Button <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Follow The Rules</a>.</p>
    
                                        
        
                                    {/* <div className='thirdpagesearchbox'>
                                        <label>Your Text:</label>
                                        <input type='password' value={this.state.currentCount} onChange={(e) => this.incrementCounter(e)} onKeyDown={(e) => this.pointcoun(e)}></input>
                                </div> */}
                                   
                                    
                                    </div>
                                    </section>
                            </div>
                            <footer id='footer' className=' text-white text-xl'>
                                <section className='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
                                <div className='head'>
                                    {this.state.ReadRules && (<h3>Rules: Please Write Problem Password in the text box to earn points before Your Time Limit gets Over</h3>)}
                                        
                                     
        
                                    </div>
                                </section>
                            </footer>
                           
                            </div>
                            </>
    
                        );
                       }
                       

                    
                   
                }
            
            }
            
     
          
        }
    
        else {

           
            return (
                <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
              <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <label className='mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-3xl'>Your Performance:</label>

                </div>
                
<div id="fullWidthTabContent" class="border-t border-gray-200 dark:border-gray-600">
        <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
 <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-2 xl:grid-cols-2 dark:text-white sm:p-8">
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">{this.state.ipoints / this.state.minute}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">PPM(Password Per Minute)</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">{this.state.ipoints}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Correct Points</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">{this.state.dpoints}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Incorrect Points</dd>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <dt class="mb-2 text-3xl font-extrabold">{Number((this.state.ipoints * 100) / (this.state.ipoints + this.state.dpoints)).toPrecision(4)}</dt>
                    <dd class="text-gray-500 dark:text-gray-400">Accuracy</dd>
                </div>
              
             
            </dl>
        </div>

</div>

</div>
<div className='flex items-center justify-center w-full mt-5'>
<button  class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group" onClick={this.restart}>
    <span class="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
    <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Restart</span>
</button>
</div>

                {/* <div className='text-white'>
                    <div className='fourthpageppm'>
                    <h1> PPM(Password Per Minute):{this.state.ipoints / this.state.minute}
                        </h1>
                    </div>
                    <div className='fourthpagecorrectpoints'>
                        <h1>Correct Points:{this.state.ipoints}</h1>
                    </div>
                    <div className='fourthpageincorrectpoints'>
                        <h1>Incorrect Points:{this.state.dpoints}</h1>
                    </div>
                    <div className='fourthpagerestartbuttton'>
                        <button onClick={this.restart}>Restart</button>
                    </div>
                </div> */}
                </div>
                    );
               
        }
  }
 }
