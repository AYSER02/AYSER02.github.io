const ProfileCard = () => {
    return (
      <div className="p-8 space-y-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold">Ayser Ahmed Bijapur</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Aspiring Software Developer | Data Science Enthusiast | Freelance - Outlier AI
            </p>
          </div>
        </div>
  
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          Completed My B.E. in Computer Engineering from MH Saboo Siddik College of Engineering. with a CGPA of 7.19.
          Passionate about software development with experience in building
          scalable web applications, and Data Analysis. 
          Currently Looking for opportunities in Software Development and Data Science, to furthur enhance my skills and knowledge.
        </p>
  
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Achievements</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>
              Completed Appreticeship at Fugro.
            </li>
          </ul>
        </div>
  
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Current Roles</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>Outlier AI | Freelancer</li>
          </ul>
        </div>
  
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Previous Roles</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>Apprentice At Fugro Survey India</li>
          </ul>
        </div>
  
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Technical Skills and Interests</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-200">
            <li>
              <strong>Languages:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ C</li>
                <li>→ C++</li>
                <li>→ JavaScript</li>
                <li>→ TypeScript</li>
                <li>→ Java</li>
                <li>→ Python</li>
              </ul>
            </li>
            <li>
              <strong>Frameworks & Libraries:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ Node.js</li>
                <li>→ Express.js</li>
                <li>→ HonoJS</li>
                <li>→ React.js</li>
                <li>→ Next.js</li>
                <li>→ Recoil</li>
                <li>→ WebSockets</li>
                <li>→ TailwindCSS</li>
              </ul>
            </li>
            <li>
              <strong>Tools:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ Git/GitHub</li>
                <li>→ Figma</li>
                <li>→ Google Colab</li>
                <li>→ Docker</li>
                <li>→ AWS</li>
              </ul>
            </li>
            <li>
              <strong>Databases:</strong>
              <ul className="list-none list-inside ml-4">
                <li>→ MySQL</li>
                <li>→ PostgreSQL</li>
                <li>→ MongoDB</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  