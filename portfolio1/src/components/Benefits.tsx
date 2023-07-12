export default function Benefits() {
  return (
    <div className="bg-white h-64">
      <h1 className="text-black text-center pt-4">Benefits of My Work</h1>
      <div className="divider"></div>
      <div className="flex flex-row space-x-4">
        <div>
          {/* icon */}
          <h3 className="text-black">Technically Proficient</h3>
          <p className="text-black">
            as a self taught dev I have not ignored the importance of a strong
            foundation. thus I've immersed myself in Computer Science
            fundamentals, concepts and processes. this has helped me become a
            more knowledgable Software Engineer because I understand the
            underlying structure for running software and why optimizing that
            foundation only makes for better software.
          </p>
        </div>
        <div>
          {/* icon */}
          <h3 className="text-black">Problem Solving Skills</h3>
          <p className="text-black">
            Problem? what is that? I only focus on solution or finding them. As
            a software engineer there is either problems that have been solved
            or problems yet to solve. no inbetween. So I seek solutions, whether
            that's from my network, books, online resources, or tech communities
            on Discord - I am part of several - but most importantly, I have a
            mentor in my ring corner who has been doing this for 25+ years - so
            the wealth of knowledge at my disposal is not quantifiable.{" "}
          </p>
        </div>
        <div>
          {/* icon */}
          <h3 className="text-black">
            effective collaborator and communicator
          </h3>
          <p className="text-black">
            The value of collaboration and communication cannot be understated.
            I value it so much that I lead a group of CS degree holding devs and
            some self taught engineers in bi weekly hackathons to produce MVP
            for creative ideas that are voted on by the Hack Weekly community.
          </p>
        </div>
      </div>
    </div>
  );
}
