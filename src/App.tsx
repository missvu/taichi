import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Citation } from './components/Citation';
import heroImage from 'figma:asset/1c5874e4901e881be4b10b8ed38f8701209d7f87.png';
import sleepImage from 'figma:asset/80c0dac806f6d2ae3906e6359091f590688e2c8d.png';
import pillsImage from 'figma:asset/83f35ef1a064a169959e846a9a951f4a11f04546.png';
import sleepTrackerImage from 'figma:asset/97527f58eae3348fed1a32b5e4ebb5118b52967f.png';
import taiChiGroupImage from 'figma:asset/2991a1216b20b7dd5ecec3b0471a276f4a698dc3.png';
import exerciseGroupImage from 'figma:asset/e098ff4d7fcbbc0acc80c1068c985c182f494167.png';
import controlGroupImage from 'figma:asset/cb5fb4206eb669ea2083406cbd22ef4921377363.png';
import abstractImage from 'figma:asset/eb480e10e2e5dd94514f57b1294d6ac9b4268b1d.png';

export default function App() {
  const scrollToNextSection = () => {
    const element = document.getElementById('why-sleep-matters');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Person sleeping peacefully with Tai Chi silhouettes - representing restful sleep through Tai Chi practice"
            className="w-full h-full object-cover object-center opacity-60"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 
            className="mb-6 text-indigo-900 text-5xl md:text-6xl lg:text-7xl" 
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              textShadow: 'rgb(186 177 255) 0px 0px 12px, rgba(255, 255, 255, 1) 0px 0px 16px'
            }}
          >
            Tai Chi for Restful Sleep: A Natural Path to Better Nights
          </h1>
          <p className="text-xl md:text-2xl text-indigo-900 max-w-2xl mx-auto">
            Discover how gentle movement and mindful breathing can help aging bodies sleep better
          </p>
          <div className="mt-8">
            <button 
              onClick={scrollToNextSection}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer border-0"
              style={{
                background: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 30%, #4f46e5 60%, #6366f1 100%)'
              }}
            >
              <span className="relative z-10 text-white text-lg">Learn More</span>
              
              {/* Moon icon */}
              <svg className="relative z-10 w-6 h-6 text-yellow-200 group-hover:text-yellow-100 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"/>
              </svg>
              
              {/* Decorative stars */}
              <span className="absolute top-3 right-8 text-yellow-100 opacity-60 animate-pulse" style={{ fontSize: '8px' }}>✦</span>
              <span className="absolute top-6 right-16 text-blue-200 opacity-40 animate-pulse" style={{ fontSize: '6px', animationDelay: '0.5s' }}>✦</span>
              <span className="absolute bottom-4 left-12 text-purple-200 opacity-50 animate-pulse" style={{ fontSize: '7px', animationDelay: '1s' }}>✦</span>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>

        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-0 p-2 hover:scale-110 transition-transform"
          aria-label="Scroll to next section"
        >
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </header>

      {/* Section 1: Why Sleep Matters */}
      <section id="why-sleep-matters" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-indigo-900 text-[3.25rem] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why Good Sleep Is Essential</h2>
              
              <div className="space-y-4 mb-6">
                <p>Sleep supports brain health, memory, and mood. It's during sleep that your brain consolidates memories, processes emotions, and clears out toxins that accumulate during waking hours.</p>
                
                <p><strong>What is insomnia?</strong> Insomnia is characterized by difficulty falling asleep, waking up repeatedly during the night, and having trouble going back to sleep once awakened.<Citation number={3} author="Irwin et al." year="2015" shortTitle="Cognitive behavioral therapy and Tai Chi reverse cellular and genomic markers of inflammation" /></p>
                
                <p><strong>This condition is remarkably common.</strong> In industrialized countries, research shows that one-third to one-half of the population experiences short-term insomnia, while chronic insomnia (lasting three months or longer) affects 5–10% of individuals.<Citation number={7} author="Sateia et al." year="2017" shortTitle="Clinical Practice Guideline for Pharmacologic Treatment of Chronic Insomnia" /></p>
                
                <p>The impact of insomnia is especially pronounced in later life, affecting about <strong>50% of older adults</strong>. This frequency increases dramatically to 65% among those living in nursing homes and care facilities.<Citation number={2} author="Hosseini et al." year="2011" shortTitle="The effect of Tai Chi exercise on the sleep quality of the elderly residents" /></p>
                
                <p>When insomnia continues over extended periods of time, it predicts <strong>elevated rates of disease and premature death</strong>, making effective treatment crucial for healthy aging.<Citation number={9} author="Siu et al." year="2021" shortTitle="Effects of Tai Chi or Exercise on Sleep in Older Adults With Insomnia" /></p>
              </div>

              <div 
                className="relative text-white p-6 rounded-2xl shadow-lg overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 30%, #4f46e5 60%, #6366f1 100%)'
                }}
              >
                <p className="relative z-10 text-xl">
                  <strong>Key Takeaway:</strong> A good night's sleep isn't a luxury. It's a foundation for healthy aging.
                </p>
                
                {/* Moon icon */}
                <svg className="absolute top-4 right-6 w-8 h-8 text-yellow-200 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z"/>
                </svg>
                
                {/* Decorative stars */}
                <span className="absolute top-3 right-16 text-yellow-100 opacity-60 animate-pulse" style={{ fontSize: '8px' }}>✦</span>
                <span className="absolute top-8 right-20 text-blue-200 opacity-40 animate-pulse" style={{ fontSize: '6px', animationDelay: '0.5s' }}>✦</span>
                <span className="absolute bottom-4 left-8 text-purple-200 opacity-50 animate-pulse" style={{ fontSize: '7px', animationDelay: '1s' }}>✦</span>
              </div>
            </div>

            <div className="relative">
              <img 
                src={sleepImage}
                alt="Sunlight streaming into peaceful bedroom"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem with Sleeping Pills */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 w-screen left-1/2 -translate-x-1/2">
          <img 
            src={pillsImage}
            alt="Pills background"
            className="w-full h-full object-contain object-top opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h2 className="mb-8 text-indigo-900 text-center text-[3.25rem] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why Pills Aren't the Only Answer</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-gray-900">Short-Term Relief Only</h3>
              <p className="text-gray-700">Common sleep medications like benzodiazepines provide only temporary help and lose effectiveness quickly.<Citation number={7} author="Sateia et al." year="2017" shortTitle="Clinical Practice Guideline for Pharmacologic Treatment of Chronic Insomnia" /></p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-3 text-gray-900">Serious Side Effects</h3>
              <p className="text-gray-700">These medications often cause memory problems, dependence, and tolerance within just two weeks of regular use.<Citation number={6} author="Passos et al." year="2012" shortTitle="Is exercise an alternative treatment for chronic insomnia?" /><Citation number={2} author="Hosseini et al." year="2011" shortTitle="The effect of Tai Chi exercise on the sleep quality of the elderly residents" /></p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="mb-3 text-gray-900">Long-Term Risks</h3>
              <p className="text-gray-700">Prolonged use has been linked to cognitive deficits and increased mortality risk in older adults.<Citation number={6} author="Passos et al." year="2012" shortTitle="Is exercise an alternative treatment for chronic insomnia?" /></p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-600 p-8 rounded-xl">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-xl mb-2"><strong>A Concerning Statistic:</strong></p>
                <p className="text-lg">Older adults consume more than 40% of all sleeping pills produced in the United States, despite these medications being considered unsafe for long-term use.<Citation number={2} author="Hosseini et al." year="2011" shortTitle="The effect of Tai Chi exercise on the sleep quality of the elderly residents" /> Other prescription sleep medications have also become increasingly unfavorable due to concerns about toxicity and risks of long-term dependence.<Citation number={4} author="Li et al." year="2020" shortTitle="The effect of Tai Chi for improving sleep quality" /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: A Holistic Alternative - Tai Chi */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-indigo-900 text-[3.25rem] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>A Holistic Alternative: Tai Chi</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1599744403700-b7330f3c4dbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbWluZGZ1bG5lc3MlMjBuYXR1cmV8ZW58MXx8fHwxNzYyNTQ4MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Meditation and mindfulness in nature"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div>
              <p className="mb-4">Tai Chi is an ancient Chinese practice that combines slow, flowing movements with meditative breathing and mindful awareness of bodily sensations. Think of it as "meditation in motion": a gentle form of exercise that calms both body and mind.<Citation number={4} author="Li et al." year="2020" shortTitle="The effect of Tai Chi for improving sleep quality" /></p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Strengthens Muscles & Improves Balance</h4>
                    <p className="text-gray-700">With regular practice, Tai Chi can improve muscle control, strength, and mind-body coordination.<Citation number={2} author="Hosseini et al." year="2011" shortTitle="The effect of Tai Chi exercise on the sleep quality of the elderly residents" /></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Reduces Stress & Anxiety</h4>
                    <p className="text-gray-700">The mindful breathing and gentle movements calm the nervous system, supporting better sleep quality.<Citation number={2} author="Hosseini et al." year="2011" shortTitle="The effect of Tai Chi exercise on sleep quality of elderly residents" /></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Low-Impact & Accessible</h4>
                    <p className="text-gray-700">Tai Chi requires no special equipment and offers an accessible, low-cost, low-intensity form of exercise safe for older adults. Unlike intense exercise, it won't leave you exhausted.<Citation number={2} author="Hosseini et al." year="2011" shortTitle="The effect of Tai Chi exercise on the sleep quality of the elderly residents" /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What the Research Shows */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-indigo-900 text-center text-[3.25rem] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Science Behind Tai Chi and Sleep<Citation number={9} author="Siu et al." year="2021" shortTitle="Effects of Tai Chi or Exercise on Sleep in Older Adults With Insomnia" customTooltip="All data in this section are drawn from Siu et al. (2021), &quot;Effects of Tai Chi or exercise on sleep in older adults with insomnia: A randomized clinical trial.&quot;" /></h2>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
            <h3 className="mb-6 text-indigo-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>The Landmark Study</h3>
            
            <p className="mb-6 text-lg">In a rigorous 12-week randomized clinical trial, researchers enrolled 320 adults aged 60 or older with chronic insomnia. Participants were divided into three groups:</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="relative overflow-hidden p-6 rounded-xl border-2 border-blue-200 min-h-[280px] flex flex-col justify-end">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{ backgroundImage: `url(${taiChiGroupImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50 via-blue-50/60 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mb-3">1</div>
                  <h4 className="mb-2 text-gray-900">Tai Chi Group</h4>
                  <p className="text-gray-700">Practiced Tai Chi regularly</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden p-6 rounded-xl border-2 border-purple-200 min-h-[280px] flex flex-col justify-end">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{ backgroundImage: `url(${exerciseGroupImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-50 via-purple-50/60 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mb-3">2</div>
                  <h4 className="mb-2 text-gray-900">Conventional Exercise</h4>
                  <p className="text-gray-700">Did standard physical exercise</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden p-6 rounded-xl border-2 border-gray-300 min-h-[280px] flex flex-col justify-end">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-65"
                  style={{ backgroundImage: `url(${controlGroupImage})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/60 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center mb-3">3</div>
                  <h4 className="mb-2 text-gray-900">Control Group</h4>
                  <p className="text-gray-700">No intervention</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-xl mb-6">
              <h4 className="mb-3 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Key Finding:</h4>
              <p className="text-lg">Both <strong className="text-blue-500">Tai Chi</strong> and <strong className="text-purple-500">conventional exercise</strong> led to notable improvements in sleep outcomes compared to the <strong className="text-gray-500">no-intervention</strong> control group. However, <strong>Tai Chi showed somewhat greater improvements than the exercise group</strong>.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-6 items-center">
              <div>
                <h4 className="mb-4 text-indigo-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Measured Sleep Improvements:</h4>
                
                <p className="mb-4">Researchers used <strong>actigraphy</strong>—a wrist-worn device that objectively tracks sleep patterns (not just self-reports)—to measure improvements across multiple sleep parameters:</p>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={sleepTrackerImage} 
                  alt="Sleep tracking device with sleep pattern graphs showing measured sleep improvements"
                  className="w-full max-w-md rounded-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Better sleep efficiency</strong> (percentage of time in bed actually spent sleeping)</span>
              </div>
              
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Fewer awakenings</strong> during the night</span>
              </div>
              
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Longer total sleep time</strong> (based on self-reports)</span>
              </div>
              
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Lasting improvements</strong> maintained at 24-month follow-up</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl">
              <h4 className="mb-2 text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Why This Matters:</h4>
              <p className="text-lg">The significance of these findings lies in demonstrating that Tai Chi can serve as a safe and accessible alternative to long-term pharmacological treatment.<Citation number={9} author="Siu et al." year="2021" shortTitle="Effects of Tai Chi or Exercise on Sleep in Older Adults With Insomnia" variant="light" /> The benefits persisted at the 24-month follow-up, showing that this is not just a temporary fix but a sustainable approach to better sleep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How Tai Chi Works */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-indigo-900 text-center text-[3.25rem] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Mind–Body Science in Motion</h2>
          
          <p className="text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
            How does Tai Chi improve sleep? The answer lies in its comprehensive effects on multiple biological systems in your body.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Reduces Inflammation</h3>
              <p className="text-gray-700">Research has linked insomnia to increased levels of inflammation throughout the body and within cells, particularly in older adults.<Citation number={3} author="Irwin et al." year="2015" shortTitle="Cognitive behavioral therapy and Tai Chi reverse cellular and genomic markers of inflammation" /> Tai Chi helps restore balance to these inflammatory processes, creating a healthier internal environment for sleep.<Citation number={9} author="Siu et al." year="2021" shortTitle="Effects of Tai Chi or Exercise on Sleep in Older Adults With Insomnia" /></p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Balances Stress Systems</h3>
              <p className="text-gray-700">Tai Chi helps regulate the body's stress response system (called the HPA axis), which controls cortisol and other stress hormones.<Citation number={3} author="Irwin et al." year="2015" shortTitle="Cognitive behavioral therapy and Tai Chi reverse cellular and genomic markers of inflammation" /> By restoring balance to this system, Tai Chi creates the calm physiological state needed for restful sleep.<Citation number={9} author="Siu et al." year="2021" shortTitle="Effects of Tai Chi or Exercise on Sleep in Older Adults With Insomnia" /></p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Calms Hyperactive Brain Areas</h3>
              <p className="text-gray-700">Brain imaging studies show that people with insomnia experience "hyperarousal"—their brain activity remains abnormally active during sleep due to elevated metabolism.<Citation number={5} author="Nofzinger et al." year="2004" shortTitle="Functional neuroimaging evidence for hyperarousal in insomnia" /> Tai Chi counters this hyperarousal by restoring the brain's natural capacity for sleep.<Citation number={10} author="Xie et al." year="2019" shortTitle="Tai Chi Chuan exercise related change in brain function" /></p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Enhances Cognitive Function</h3>
              <p className="text-gray-700">Tai Chi has been shown to improve balance, memory, and focus in older adults, indicating the potential to reverse some cognitive decline due to aging.<Citation number={10} author="Xie et al." year="2019" shortTitle="Tai Chi Chuan exercise related change in brain function" /> Better cognitive function during the day supports better sleep at night.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white p-10 rounded-2xl shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="mb-4 text-white" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>A Biopsychosocial Approach to Healing</h3>
                <p className="text-xl text-blue-100 mb-4">
                  Tai Chi aligns with the biopsychosocial model of health<Citation number={1} author="Engel" year="1977" shortTitle="The need for a new medical model: A challenge for biomedicine" variant="light" />, a comprehensive framework that recognizes health emerges from the interaction of biological, psychological, and social factors.
                </p>
                <p className="text-lg text-blue-100">
                  <strong>Tai Chi heals through movement, mindfulness, and community</strong> by combining physical exercise with arousal regulation and mindfulness cultivation, while also promoting social connection through community participation. It addresses the body, mind, and spirit together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Get Started */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-indigo-900 text-[3.25rem] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Bring Tai Chi into Your Life</h2>
            <p className="text-xl text-gray-700">Small steps can lead to peaceful nights and brighter days</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758798458635-f01402b40919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGRlciUyMGFkdWx0cyUyMGV4ZXJjaXNlJTIwZ3JvdXB8ZW58MXx8fHwxNzYyNTQ4MTU4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Group of older adults exercising together"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl">1</div>
                  <div>
                    <h4 className="mb-2 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Find a Local Class</h4>
                    <p className="text-gray-700">Look for community Tai Chi classes at senior fitness programs, community centers, or wellness facilities. Many parks also offer free outdoor classes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl">2</div>
                  <div>
                    <h4 className="mb-2 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Start Small</h4>
                    <p className="text-gray-700">Begin with just 10–20 minutes per day of guided movements. You can find beginner-friendly online tutorials to practice at home.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl">3</div>
                  <div>
                    <h4 className="mb-2 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Create a Calm Space</h4>
                    <p className="text-gray-700">Choose a calm, well-lit space for practice. Consider pairing your sessions with gentle music or nature sounds to enhance relaxation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl">4</div>
                  <div>
                    <h4 className="mb-2 text-gray-900" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Be Patient & Consistent</h4>
                    <p className="text-gray-700">Remember that benefits build over time. The research showed improvements after 12 weeks of regular practice, with benefits lasting years.<Citation number={9} author="Siu et al." year="2021" shortTitle="Effects of Tai Chi or Exercise on Sleep in Older Adults With Insomnia" /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl">
            <h3 className="mb-6 text-indigo-900 text-center" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>Why Tai Chi Matters for Public Health<Citation number={9} author="Siu et al." year="2021" shortTitle="Effects of Tai Chi or Exercise on Sleep in Older Adults With Insomnia" /></h3>
            
            <p className="text-lg text-gray-700 mb-6">
              By reducing reliance on medications and enhancing cognitive resilience, Tai Chi functions as more than just a treatment for sleep disturbance. It provides a holistic approach that addresses both the disorder and the problems associated with its care.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              As a practical, low-cost, and adaptable strategy, Tai Chi can be integrated into community and public-health initiatives for aging populations. This makes it accessible to those who need it most, without the financial barriers of ongoing medication costs.
            </p>

            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-xl">
              <p className="text-xl">
                <strong>The Bigger Picture:</strong> By incorporating physical, cognitive, and social dimensions of health, Tai Chi underscores the importance of multidimensional behavioral interventions in advancing both the treatment of insomnia and the broader goals of health psychology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-indigo-900 text-center text-[3.25rem] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Research Abstract</h2>
          
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <img 
              src={abstractImage}
              alt="JAMA Network Open research abstract: Effects of Tai Chi or Exercise on Sleep in Older Adults With Insomnia - A Randomized Clinical Trial"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Research References Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-indigo-900 text-center text-[3.25rem] leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>References</h2>
          

          <div className="bg-gray-50 p-8 rounded-xl">
            
            <div className="space-y-4 text-sm text-gray-700">
              <p id="ref-1" className="transition-colors duration-500"><strong>[1]</strong> <strong>Engel, G. L. (1977).</strong> The need for a new medical model: A challenge for biomedicine. Science, 196(4286), 129–136. https://doi.org/10.1126/science.847460</p>
              
              <p id="ref-2" className="transition-colors duration-500"><strong>[2]</strong> <strong>Hosseini, H., Esfirizi, M. F., Marandi, S. M., & Rezaei, A. (2011).</strong> The effect of Tai Chi exercise on the sleep quality of the elderly residents in Isfahan. Iranian Journal of Nursing and Midwifery Research, 16(1), 55–60. https://pubmed.ncbi.nlm.nih.gov/22039380/</p>
              
              <p id="ref-3" className="transition-colors duration-500"><strong>[3]</strong> <strong>Irwin, M. R., Olmstead, R., Breen, E. C., Witarama, T., Carrillo, C., Sadeghi, N., Arevalo, J. M., Ma, J., Nicassio, P., Bootzin, R., & Cole, S. (2015).</strong> Cognitive behavioral therapy and Tai Chi reverse cellular and genomic markers of inflammation in late-life insomnia: A randomized controlled trial. Biological Psychiatry, 78(10), 721–729. https://doi.org/10.1016/j.biopsych.2015.01.010</p>
              
              <p id="ref-4" className="transition-colors duration-500"><strong>[4]</strong> <strong>Li, H., Chen, J., Xu, G., Duan, Y., Huang, D., Tang, C., & Liu, J. (2020).</strong> The effect of Tai Chi for improving sleep quality: A systematic review and meta-analysis. Journal of Affective Disorders, 274, 1102–1112. https://doi.org/10.1016/j.jad.2020.05.076</p>
              
              <p id="ref-5" className="transition-colors duration-500"><strong>[5]</strong> <strong>Nofzinger, E. A., Buysse, D. J., Germain, A., Price, J. C., Miewald, J. M., & Kupfer, D. J. (2004).</strong> Functional neuroimaging evidence for hyperarousal in insomnia. American Journal of Psychiatry, 161(11), 2126–2128. https://doi.org/10.1176/appi.ajp.161.11.2126</p>
              
              <p id="ref-6" className="transition-colors duration-500"><strong>[6]</strong> <strong>Passos, G. S., Poyares, D., Santana, M. G., Tufik, S., & Mello, M. T. (2012).</strong> Is exercise an alternative treatment for chronic insomnia? Clinics, 67(6), 653–659. https://doi.org/10.6061/clinics/2012(06)17</p>
              
              <p id="ref-7" className="transition-colors duration-500"><strong>[7]</strong> <strong>Sateia, M. J., Buysse, D. J., Krystal, A. D., Neubauer, D. N., & Heald, J. L. (2017).</strong> Clinical practice guideline for the pharmacologic treatment of chronic insomnia in adults: An American Academy of Sleep Medicine clinical practice guideline. Journal of Clinical Sleep Medicine, 13(2), 307–349. https://doi.org/10.5664/jcsm.6470</p>
              
              <p id="ref-8" className="transition-colors duration-500"><strong>[8]</strong> <strong>Schubert, C. R., Cruickshanks, K. J., Dalton, D. S., Klein, B. E. K., Klein, R., & Nondahl, D. M. (2002).</strong> Prevalence of sleep problems and quality of life in an older population. Sleep, 25(8), 889–893. https://doi.org/10.1093/sleep/25.8.889</p>
              
              <p id="ref-9" className="transition-colors duration-500"><strong>[9]</strong> <strong>Siu, P. M., Yu, A. P., Tam, B. T., Wong, C. K., Chung, K. F., Hui, S. S., Woo, J., & Tse, M. A. (2021).</strong> Effects of Tai Chi or exercise on sleep in older adults with insomnia: A randomized clinical trial. JAMA Network Open, 4(12), e2132232. https://doi.org/10.1001/jamanetworkopen.2021.32232</p>
              
              <p id="ref-10" className="transition-colors duration-500"><strong>[10]</strong> <strong>Xie, H., Zhang, M., Huo, C., Xu, G., Li, Z., & Fan, Y. (2019).</strong> Tai Chi Chuan exercise related change in brain function as assessed by functional near–infrared spectroscopy. Scientific Reports, 9, 13198. https://doi.org/10.1038/s41598-019-49401-9</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white py-12 px-6 relative overflow-hidden">
        {/* Starry background effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-20 w-1 h-1 bg-yellow-200 rounded-full"></div>
          <div className="absolute top-20 left-40 w-1 h-1 bg-blue-200 rounded-full"></div>
          <div className="absolute top-16 right-32 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-32 right-16 w-1 h-1 bg-yellow-100 rounded-full"></div>
          <div className="absolute bottom-20 left-16 w-1 h-1 bg-blue-100 rounded-full"></div>
          <div className="absolute bottom-16 right-40 w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-24 left-[60%] w-1 h-1 bg-yellow-200 rounded-full"></div>
          <div className="absolute bottom-24 left-[30%] w-1 h-1 bg-blue-200 rounded-full"></div>
          <div className="absolute top-40 right-[20%] w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute bottom-32 right-[60%] w-1 h-1 bg-yellow-100 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-4">
            <svg className="w-10 h-10 mx-auto mb-3 text-blue-300 opacity-70" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
          <p className="text-xl mb-4 text-blue-100">Ready to transform your sleep naturally?</p>
          <p className="text-blue-200 mb-6">
            Consult with your healthcare provider about incorporating Tai Chi into your wellness routine.
          </p>
          <div className="border-t border-indigo-800 pt-6 mt-6">
            <p className="text-sm text-slate-300">
              This information is based on peer-reviewed research and is intended for educational purposes. Always consult healthcare professionals before beginning new exercise programs.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
