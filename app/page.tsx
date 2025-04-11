// pages/index.js
// export default function LandingPage() {
//   return (
//     <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 text-center">
//       <h1 className="text-5xl md:text-6xl font-bold mb-6">Posturous</h1>
//       <p className="text-lg md:text-xl max-w-xl mb-8">
//         get real-time feedback on your form using Computer Vision, Pose Estimation, and Machine Learning.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-4">
//         <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all">
//           Coming Soon
//         </a>
//         <a href="#" className="border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-2xl transition-all">
//           Learn More
//         </a>
//       </div>
//       <div className="mt-16 text-sm text-gray-400">&copy; {new Date().getFullYear()} Posturous. All rights reserved.</div>
//     </main>
//   );
// }
// "use client";
"use client";

import { useState, useEffect } from "react";

export default function LandingPage() {
  const [showDylan, setShowDylan] = useState(false);
  const [showNathan, setShowNathan] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const scrollElements = document.querySelectorAll("[data-scroll]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );
    scrollElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 text-center scroll-smooth">
      {/* Header Nav */}
      <header className="w-full py-4 bg-black fixed top-0 left-0 z-50 border-b border-gray-800 shadow">
        <nav className="max-w-6xl mx-auto flex justify-around text-sm md:text-base font-medium">
          <a href="#get-paid" className="hover:text-orange-500 transition">Get Paid to Lift</a>
          <a href="#problem" className="hover:text-orange-500 transition">Problem & Solution</a>
          <a href="#how-it-works" className="hover:text-orange-500 transition">How It Works</a>
          <a href="#supported-exercises" className="hover:text-orange-500 transition">Supported Exercises</a>
          <a href="#features" className="hover:text-orange-500 transition">Features</a>
          <a href="#about" className="hover:text-orange-500 transition">About Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center min-h-screen max-w-3xl w-full pt-24" id="hero">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Posturous</h1>
        <p className="text-lg md:text-xl max-w-xl mb-4">
          Train safer, lift smarter — Posturous gives you real-time feedback on your form.
        </p>
        <div className="w-123 border-t border-white my-4" />
        <p className="text-sm text-gray-300 mb-8">Now supporting: deadlift, squat, and bench press. More exercises coming soon.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#get-paid" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all">
            Get Paid to Lift
          </a>
          <a href="#problem" className="border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-2xl transition-all">
            Learn More
          </a>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md transition-all"
          >
            Join Waitlist
          </button>
        </div>
        <div className="mt-16 text-sm text-gray-400">&copy; {new Date().getFullYear()} Posturous. All rights reserved.</div>

        {/* Waitlist Popup Form */}
        {showForm && (
          <form className="bg-white text-black p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-12 space-y-4 text-left">
            <h2 className="text-2xl font-bold mb-4">Join the Waitlist</h2>
            <label>Email: <input type="email" required className="w-full border p-2 rounded" /></label>
            <label>Where do you usually work out?</label>
            <select className="w-full border p-2 rounded">
              <option>At home</option>
              <option>At the gym</option>
              <option>Outdoors</option>
              <option>Other</option>
            </select>
            <fieldset className="space-y-1">
              <legend className="font-semibold">What types of exercises do you do regularly?</legend>
              <label><input type="checkbox" /> Weightlifting</label><br />
              <label><input type="checkbox" /> Bodyweight / calisthenics</label><br />
              <label><input type="checkbox" /> Running / cardio</label><br />
              <label><input type="checkbox" /> CrossFit / HIIT</label><br />
              <label><input type="checkbox" /> Mobility / rehab</label><br />
              <label><input type="checkbox" /> Other</label>
            </fieldset>
            <label>Have you ever used a personal trainer?</label>
            <select className="w-full border p-2 rounded">
              <option>Yes</option>
              <option>No</option>
              <option>Online / Virtual Coaching</option>
            </select>
            <label>Comfort filming workouts:</label>
            <select className="w-full border p-2 rounded">
              <option>Totally comfortable</option>
              <option>Somewhat comfortable</option>
              <option>Not really comfortable</option>
              <option>I’ve never tried it</option>
            </select>
            <label>Workout Frequency:</label>
            <select className="w-full border p-2 rounded">
              <option>1–2 times/week</option>
              <option>3–4 times/week</option>
              <option>5+ times/week</option>
              <option>Not consistently</option>
            </select>
            <label>What feature would you be most excited about in Posturous?
              <textarea className="w-full border p-2 rounded"></textarea>
            </label>
            <label>Would you be open to giving feedback or joining our beta test group?</label>
            <select className="w-full border p-2 rounded">
              <option>Yes!</option>
              <option>Maybe</option>
              <option>Not right now</option>
            </select>
            <p className="text-sm text-gray-600">✉️ We’ll use your answers to build something that actually helps — and you’ll be the first to know when it’s ready.</p>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        )}
      </section>


      {/* Get Paid to Lift Section */}
      <section id="get-paid" data-scroll className="max-w-5xl w-full py-32 px-6 md:px-12 opacity-0 transform translate-y-10 transition duration-700 ease-in-out">
        <h2 className="text-4xl font-bold text-orange-500 mb-6">Help Us Train Posturous — Get Paid to Lift!</h2>
        <p className="text-md text-gray-300 mb-8">We’re in Phase 1: Data Collection. To build the best possible product, we need real videos of real lifters. That's where you come in!</p>
        <p className="text-lg text-gray-100 mb-4">💵 Earn $5 for each completed exercise set (100 reps)<br />That’s $15 total for helping train our Machine Learning models!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-sm mb-8">
          <div className="bg-gray-800 p-4 rounded-xl">
            <p>📲 <strong>1. Download the Posturous app</strong></p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <p>🎥 <strong>2. Record or upload your reps</strong><br />Deadlift, Squat, Bench — anytime.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl">
            <p>💸 <strong>3. Submit 100 reps per movement</strong><br />Earn $5–$15 total.</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-12">Reps don’t need to be in one session — record over time at your own pace.</p>

        {/* FAQ Section */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-white mb-4">Frequently Asked Questions</h3>
          <div className="mb-6">
            <p className="font-semibold text-orange-400">Q: What’s the footage for?</p>
            <p className="text-sm text-gray-300">A: We use your reps (anonymized) to train our Machine Learning models to recognize and correct form across real-world conditions.</p>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-orange-400">Q: What if I’m a beginner?</p>
            <p className="text-sm text-gray-300">A: That’s actually great. We want data from lifters of all skill levels.</p>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-orange-400">Q: Do I have to upload all the reps at once?</p>
            <p className="text-sm text-gray-300">A: Nope! Upload over time — as little or as much as you want per session until you hit 100 per exercise.</p>
          </div>
          <div className="mb-6">
            <p className="font-semibold text-orange-400">Q: How will I get paid?</p>
            <p className="text-sm text-gray-300">A: Once your submission is verified, we’ll pay you via Venmo, PayPal, or the method you prefer.</p>
          </div>
          
        </div>
        <p className="mt-10 text-sm text-gray-300">
  Have a question, comment, concern, or idea? Email <a href="mailto:faq@posturous.com" className="text-orange-400 underline">faq@posturous.com</a> and we will get back to you ASAP!
</p>

        {/* CTA */}
        <div className="mt-12">
          <p className="text-lg font-semibold mb-4">Ready to help build the future of fitness?</p>
          <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all">
            Download Posturous (App Store)
          </a>
        </div>
      </section>

      {/* Problem & Solution */}
      <section id="problem" data-scroll className="max-w-5xl w-full py-32 px-6 md:px-12 opacity-0 transform translate-y-10 transition duration-700 ease-in-out">
        <h2 className="text-4xl font-bold text-orange-500 mb-6">The Problem</h2>
        <p className="text-lg mb-6">Millions of people unknowingly exercise with improper form — and the consequences are serious.</p>
        <ul className="list-disc text-left text-base space-y-2 ml-4">
          <li>Injuries that derail progress or require medical treatment</li>
          <li>Ineffective workouts that waste time and limit results</li>
          <li>Poor movement habits that compound over time</li>
        </ul>
        <div className="mt-12 border-t border-gray-700 pt-10">
          <h3 className="text-3xl font-semibold text-orange-500 mb-4">Our Solution</h3>
          <p className="text-lg max-w-3xl mx-auto mb-4">
            Using cutting-edge computer vision, human pose estimation, and machine learning, Posturous watches your form in real time and delivers instant feedback — no fancy equipment or expensive coach required.
          </p>
         
          <ul className="list-disc text-left text-base space-y-2 ml-12 mt-4">
            <li>Analyzes your body positioning during exercises</li>
            <li>Flags unsafe or inefficient movements</li>
            <li>Offers actionable corrections to help you improve</li>
            <li>Learns and adapts to your individual performance over time</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" data-scroll className="bg-gray-900 max-w-5xl w-full py-32 px-6 md:px-12 rounded-xl opacity-0 transform translate-y-10 transition duration-700 ease-in-out">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black border border-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">1. Set Up Your Camera</h3>
            <p className="text-sm">Use your phone or webcam to record your set from any angle.</p>
          </div>
          <div className="bg-black border border-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">2. Perform the Exercise</h3>
            <p className="text-sm">Deadlift, Squat, or Bench — do your thing while Posturous watches.</p>
          </div>
          <div className="bg-black border border-gray-700 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">3. Get Instant Feedback</h3>
            <p className="text-sm">Form correction through visual and verbal cues while you lift.</p>
          </div>
        </div>
      </section>

      {/* Supported Exercises */}
      <section id="supported-exercises" data-scroll className="max-w-5xl w-full py-32 px-6 md:px-12 opacity-0 transform translate-y-10 transition duration-700 ease-in-out">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">Supported Exercises</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Deadlift</h3>
            <p className="text-sm">Tracks back angle, hip position, and bar path to ensure safe pulling mechanics.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Squat</h3>
            <p className="text-sm">Monitors knee tracking, depth, and upper body posture to avoid injury and maximize power.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Bench Press</h3>
            <p className="text-sm">Keeps tabs on elbow flare, bar path, and shoulder control to improve pressing technique.</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-8">More movements coming soon based on user feedback and scientific research.</p>
      </section>

      {/* Features & Benefits */}
      <section id="features" data-scroll className="bg-gray-900 max-w-5xl w-full py-24 px-6 md:px-12 rounded-xl opacity-0 transform translate-y-10 transition duration-700 ease-in-out">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">Features & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc text-left space-y-2 ml-6 text-sm">
            <li>Real-time form feedback using computer vision</li>
            <li>Uses your phone or webcam — no extra gear required</li>
            <li>Trained on professionally critiqued lifting videos</li>
          </ul>
          <ul className="list-disc text-left space-y-2 ml-6 text-sm">
            <li>Customizable feedback based on body type and setup</li>
            <li>Verbal and visual cues mid-lift to guide adjustments</li>
            <li>Constant updates based on user feedback</li>
          </ul>
        </div>
      </section>

      {/* About Us */}
      <section id="about" data-scroll className="max-w-5xl w-full py-32 px-6 md:px-12 opacity-0 transform translate-y-10 transition duration-700 ease-in-out">
        <h2 className="text-4xl font-bold text-orange-500 mb-10">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Founder: Dylan Robichaud, B.S. Computer Engineering</h3>
            <p className="text-sm mb-2">📞 203-216-5226<br />📧 thedylanrobichaud@gmail.com<br />🔗 <a href="https://www.linkedin.com/in/dylan-robichaud/" className="text-orange-400 underline">LinkedIn</a></p>
            <button onClick={() => setShowDylan(!showDylan)} className="text-sm underline text-orange-500 mt-2">{showDylan ? "Hide Story" : "Hear Story"}</button>
            {showDylan && <p className="text-sm mt-2">Around when I started taking weightlifting serious at the age of 18, I got a disk bulge in my lower back. The consensus from many different doctors was that I had been lifting with incorrect form. With my background in Computer Engineering and my passion for exercising, my goal is to develop a pristine product which can help people avoid making the same mistake I did; exercising with improper form/technique.</p>}
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Co-Founder: Nathan Goldstein, B.S. Electrical Engineering</h3>
            <p className="text-sm mb-2">📞 314-604-5909<br />📧 goldstn2@union.edu<br />🔗 <a href="https://www.linkedin.com/in/nathan-goldstein-a3304125b/" className="text-orange-400 underline">LinkedIn</a></p>
            <button onClick={() => setShowNathan(!showNathan)} className="text-sm underline text-orange-500 mt-2">{showNathan ? "Hide Story" : "Hear Story"}</button>
            {showNathan && <p className="text-sm mt-2">Around when I started taking weightlifting serious at the age of 18, I got a disk bulge in my lower back. The consensus from many different doctors was that I had been lifting with incorrect form. With my background in Computer Engineering and my passion for exercising, my goal is to develop a pristine product which can help people avoid making the same mistake I did; exercising with improper form/technique.</p>}
          </div>
        </div>
        <p className="text-sm text-center mt-12">We’re two Union College students and engineers on a mission to make fitness safer and smarter. Posturous is built on the belief that good form should be accessible to everyone — and technology can get us there.</p>
      </section>

      {/* Sticky Footer */}
      <footer className="w-full text-center text-sm text-gray-400 py-6 border-t border-gray-800 bg-black fixed bottom-0 z-40">
        <p>© 2025 Posturous. All rights reserved.</p>
        <p>Designed with purpose. Built with care.</p>
      </footer>
    </main>
  );
}