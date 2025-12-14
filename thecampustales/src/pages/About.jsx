export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Campus Tales
          </h1>

          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Campus Tales is a modern, full-stack blog application built using
              the MERN stack (MongoDB, Express.js, React.js, and Node.js). The
              platform is designed to give students a space to share stories,
              experiences, ideas, and insights from campus life in a simple,
              engaging, and user-friendly way.
            </p>

            <p>
              From personal journeys and academic experiences to tech learnings,
              career advice, and creative thoughts, Campus Tales acts as a
              digital storytelling hub for students. The application supports
              secure authentication, dynamic blog creation, editing, and
              deletion, along with a clean and responsive UI for an optimal
              reading experience.
            </p>

            <p>
              This project was built with scalability and performance in mind,
              following real-world development practices such as RESTful APIs,
              component-based architecture, and efficient state management. The
              goal of Campus Tales is not just to publish blogs, but to create a
              community-driven platform where student voices are heard and
              valued.
            </p>

            <p>
              Campus Tales reflects a passion for web development and storytelling,
              combining technology with creativity to deliver a meaningful
              product for campus communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
