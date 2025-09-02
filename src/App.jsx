import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Mahesh Balaji Nagireddy</h1>
      <h4>Full-Stack Developer & Creative Enthusiast</h4>
      <div className="cards-container">
        <Card
          title="Coding"
          description="I love building projects with JavaScript, React, and Python."
          image="https://static.vecteezy.com/system/resources/previews/040/888/771/non_2x/ai-generated-examine-the-significance-of-debugging-tools-and-techniques-in-the-programming-workflow-and-evaluate-how-they-contribute-to-improving-code-quality-and-efficiency-free-photo.jpg"
        />
        <Card
          title="Gaming"
          description="I enjoy strategy and adventure games in my free time."
          image="https://static.vecteezy.com/system/resources/previews/022/252/108/non_2x/portrait-of-a-male-gamer-playing-online-games-on-a-computer-cyber-sport-concept-generative-ai-free-photo.jpg"
        />
        <Card
          title="Music"
          description="Listening to classical and lo-fi music while working."
          image="https://th.bing.com/th/id/R.524277ed7014f27b748624ba2711a72a?rik=GgPRmQfjDNsJiw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fMusic-desktop-background-wallpapers.jpg&ehk=8NwI9NEIDEcXmS3dKk1dOnf%2fyceQA1LzQqnCghdeRBk%3d&risl=&pid=ImgRaw&r=0"
        />
        <Card
          title="Travel"
          description="Exploring new cities and cultures inspires my creativity."
          image="https://www.pixelstalk.net/wp-content/uploads/2016/08/HD-World-Travel-Desktop-Background.jpg"
        />
      </div>
    </div>
  );
}

export default App;
