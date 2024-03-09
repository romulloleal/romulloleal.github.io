import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import {
  translate,
  setLanguage,
  languages,
  currentLanguage,
} from './utils/Translate';
import { workExperience } from './data';

function App() {
  return (
    <>
      <main className="min-h-[calc(100vh-8rem)] pb-[10px]">
        <header className="header">
          <div className="me"></div>

          <select
            className="noprint absolute right-5 top-5"
            value={currentLanguage}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((language) => (
              <option value={language.name} key={language.name}>
                {translate(language.desc)}
              </option>
            ))}
          </select>
        </header>

        <section className="flex items-center flex-col mb-4">
          <div className="font-semibold text-4xl">
            Romullo Leal, 28 {translate('years')}
          </div>
          <div className="text-2xl text-gray-500">
            {translate('fullStackDeveloper')}
          </div>
        </section>

        <section className="informations flex flex-col md:flex-row gap-10 w-[90%] mx-auto">
          <article className="flex flex-col gap-10 md:w-1/2">
            <div className="topic">
              <div className="title">{translate('personalProfileTitle')}</div>
              <div className="description">
                {translate('personalProfileDescription')}
              </div>
            </div>
            <div className="topic">
              <div className="title">{translate('skills')}</div>
              <div className="description">
                HTML, CSS, JavaScript, React.js, Node,js, TypeScript, PHP, API,
                Postgresql, MySQL, Git
              </div>
            </div>
            <div className="topic">
              <div className="title">{translate('education')}</div>
              <div className="description">
                <div className="font-bold">
                  {translate('educationDescription')}
                </div>
                <div>UniFacid Wyden</div>
              </div>
            </div>
            <div className="topic">
              <div className="title">{translate('certifications')}</div>
              <div className="description">
                <div className="font-bold">
                  Bootcamp GoStack (React, React Native, Node.js)
                </div>
                <div>Rocketseat</div>
              </div>
              <div className="description">
                <div className="font-bold">Full Stack PHP Developer</div>
                <div>UpInside</div>
              </div>
              <div className="description">
                <div className="font-bold">Laravel Developer</div>
                <div>UpInside</div>
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-10 md:w-1/2">
            <div className="topic">
              <div className="title">{translate('workExperience')}</div>
              {workExperience.map((job) => (
                <div className="description">
                  <div className="font-bold">{job.company}</div>
                  <div>{job.period}</div>
                  <div className="font-semibold">{translate(job.title)}</div>
                  <div>{translate(job.desc)}</div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <footer className="flex justify-center items-center p-3 h-32 bottom-0 bg-[#5c73f2] text-white">
        <div className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
          <span className="socialLinks">
            <BsGithub className="mr-1 text-xl" />
            <a className="underline" href="https://github.com/romulloleal">
              github.com/romulloleal
            </a>
          </span>
          <span className="socialLinks">
            <BsLinkedin className="mr-1 text-xl" />
            <a className="underline" href="https://linkedin.com/in/romulloleal">
              linkedin.com/in/romulloleal
            </a>
          </span>
          <span className="socialLinks">
            <IoMdMail className="mr-1 text-xl" />
            romulloleal@gmail.com
          </span>
          <span className="socialLinks">
            <IoLocationSharp className="mr-1 text-xl" />
            Teresina, Piauí
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
