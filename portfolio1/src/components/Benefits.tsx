export default function Benefits() {
  return (
    <div className="bg-creme h-96">
      <h1 className="text-navy text-6xl text-center pt-4 font-poppins pb-10">
        BENEFITS OF MY WORK
      </h1>
      <div className="flex justify-center p-4 text-navy text-center">
        <div>
          <h3>PROBLEM SOLVING SKILLS</h3>
          {/* TODO: MAYBE ADD ICON HERE BETWEEN TITLES AND PARAGRAPH */}
          <p>
            Problem? what is that? I only focus on solution or finding them. As
            a software engineer there is either problems that have been solved
            or problems yet to solve. no inbetween. So I seek solutions, whether
            that`s from my network, books, online resources, or tech communities
            on Discord - I am part of several - but most importantly, I have a
            mentor in my ring corner who has been doing this for 25+ years - so
            the wealth of knowledge at my disposal is not quantifiable.
          </p>
        </div>
        {/* TODO: REPLACE DIVIDER HERE WITH A COOL MINIMAL ICON */}
        <div className="divider divider-horizontal navy">❤️</div>
        <div>
          <h3>PROBLEM SOLVING SKILLS</h3>
          <p>
            Problem? what is that? I only focus on solution or finding them. As
            a software engineer there is either problems that have been solved
            or problems yet to solve. no inbetween. So I seek solutions, whether
            that`s from my network, books, online resources, or tech communities
            on Discord - I am part of several - but most importantly, I have a
            mentor in my ring corner who has been doing this for 25+ years - so
            the wealth of knowledge at my disposal is not quantifiable.
          </p>
        </div>
        <div className="divider divider-horizontal">❤️</div>
        <div>
          {/* icon */}
          <h3>EFFECTIVE COLLABORATOR AND COMMUNICATOR</h3>
          <p>
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
