
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="heading-gradient">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-blue to-electric-teal mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - About text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer & Data Scientist with a passion for creating meaningful solutions
            </h3>
            
            <p className="text-gray-300">
              I am a dedicated Web Developer & Data Scientist currently pursuing my Master's in Computer Applications 
              at SRM University with a CGPA of 8.80. I combine analytical thinking with creative problem-solving to 
              build data-driven applications and insightful visualizations.
            </p>
            
            <p className="text-gray-400">
              My journey began with a BSc (Honors) in Infromation Technology from Bhavans College, Andheri(8.35 CGPA), 
              where I developed a strong foundation in programming, machine learning, and statistics. 
              I've since expanded my skills to include web development, creating responsive interfaces 
              that make data accessible and intuitive.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="text-electric-blue font-semibold mb-2">Education</h4>
                <ul className="space-y-3">
                  <li className="text-gray-300">
                    <span className="font-medium block">MCA, Computer Applications</span>
                    <span className="text-sm text-gray-400">SRM University | 8.80 CGPA</span>
                  </li>
                  <li className="text-gray-300">
                    <span className="font-medium block">BSc (Hons), Infromation Technology</span>
                    <span className="text-sm text-gray-400">Bhavans College, Andheri | 8.35 CGPA</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-electric-teal font-semibold mb-2">Core Competencies</h4>
                <ul className="text-gray-300">
                  <li>App Development</li>
                  <li>Web Development</li>
                  <li>Predictive Modeling</li>
                  <li>Dashboard Building</li>
                </ul>
              </div>
            </div>
            
            <a href="https://drive.google.com/file/d/1Qyr1U_14HpLZXrcqD-sbpHR5s4aIX5Sw/view?usp=sharing" className="btn-secondary inline-flex items-center gap-2">
              Download Resume <ArrowRight size={16} />
            </a>
          </div>
          
          {/* Right column - Skills overview */}
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6">Technical Proficiencies</h3>
            
            {/* Programming */}
            <div className="mb-8">
              <h4 className="text-electric-blue font-medium mb-3">Programming</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-1">
                    <span className="text-sm">Python</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-1">
                    <span className="text-sm">JavaScript</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-1">
                    <span className="text-sm">C++</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-1">
                    <span className="text-sm">Java</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-electric-blue h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Frameworks & Libraries */}
            <div className="mb-8">
              <h4 className="text-electric-teal font-medium mb-3">Frameworks & Libraries</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-1">
                    <span className="text-sm">NumPy/Pandas</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-electric-teal h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-1">
                    <span className="text-sm">React.js</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-electric-teal h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-1">
                    <span className="text-sm">Flask</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-electric-teal h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-1">
                    <span className="text-sm">SpringBoot</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-electric-teal h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools */}
            <div>
              <h4 className="text-electric-blue font-medium mb-3">Tools & Platforms</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="mb-1">
                    <span className="text-sm">Power BI</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-electric-blue to-electric-teal h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-1">
                    <span className="text-sm">Android Studio</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-electric-blue to-electric-teal h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
