<<<<<<< HEAD
import { useState } from "react";
import { MdOutlineMail, MdOutlineDescription } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { FaEdit, FaCheck, FaTimes, FaCamera } from "react-icons/fa";
import { Profile } from "../constants";

const defaultStats = {
  questions: 12,
  courses: 3,
  achievements: 2,
};
const defaultActivity = [
  { description: "Asked a question about Binary Trees" },
  { description: "Completed course: Data Structures" },
  { description: "Attempted Past Paper: 2023 S1" },
];

const Dashboardprofile = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    bio: user?.bio || Profile.bio || "",
    socials: user?.socials || Profile.socials || {},
    img: user?.img || Profile.img,
  });
  const [imgPreview, setImgPreview] = useState(profileData.img);

  // Dummy stats and activity
  const stats = defaultStats;
  const recentActivity = defaultActivity;

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setEditing(false);
    setProfileData({
      name: user?.name || "",
      bio: user?.bio || Profile.bio || "",
      socials: user?.socials || Profile.socials || {},
      img: user?.img || Profile.img,
    });
    setImgPreview(user?.img || Profile.img);
  };
  const handleSave = () => {
    // TODO: Call backend to save profileData
    setEditing(false);
  };
  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImgPreview(reader.result);
      reader.readAsDataURL(file);
      // TODO: Upload to backend
    }
  };

  return (
    <div className="font-sans antialiased text-white leading-normal tracking-wider bg-black-gradient min-h-screen flex flex-col items-center justify-center py-8 relative">
      {/* Blue gradient background effect */}
      <div className="absolute z-0 w-[60%] h-[70%] -left-[30%] top-0 blue__gradient" />
      <div className="relative z-10 w-full max-w-4xl bg-black-gradient-2 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-8">
        {/* Profile Picture & Edit */}
        <div className="flex flex-col items-center md:w-1/3 w-full">
          <div className="relative group">
            <img
              src={imgPreview}
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover border-4 border-primary shadow-lg"
            />
            {editing && (
              <label className="absolute bottom-2 right-2 bg-primary p-2 rounded-full cursor-pointer hover:bg-teal-700 transition-colors">
                <FaCamera />
                <input type="file" accept="image/*" className="hidden" onChange={handleImgChange} />
              </label>
            )}
          </div>
          <h1 className="text-3xl font-bold mt-4 text-primary text-center">
            {editing ? (
              <input
                className="bg-gray-800 text-white rounded px-2 py-1 text-xl text-center"
                name="name"
                value={profileData.name}
                onChange={handleChange}
              />
            ) : (
              profileData.name || "Loading..."
            )}
          </h1>
          <p className="text-gray-400 mt-2">{user?.username || "Loading..."}</p>
          <p className="text-gray-400">{user?.email || "Loading..."}</p>
          <button
            className="mt-4 px-4 py-2 bg-primary text-white rounded-lg flex items-center gap-2 hover:bg-teal-700 transition-colors"
            onClick={editing ? handleSave : handleEdit}
          >
            {editing ? <FaCheck /> : <FaEdit />} {editing ? "Save" : "Edit Profile"}
          </button>
          {editing && (
            <button
              className="mt-2 px-4 py-2 bg-gray-600 text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors"
              onClick={handleCancel}
            >
              <FaTimes /> Cancel
            </button>
          )}
        </div>
        {/* Profile Details */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Bio */}
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <MdOutlineDescription className="text-primary" /> Bio:
            </div>
            {editing ? (
              <textarea
                className="w-full bg-gray-800 text-white rounded px-2 py-1 mt-1"
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                rows={3}
              />
            ) : (
              <p className="mt-1 text-gray-200">{profileData.bio}</p>
            )}
          </div>
          {/* Socials */}
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <TbSocial className="text-primary" /> Socials:
            </div>
            <div className="flex gap-3 mt-2 flex-wrap">
              {Object.entries(profileData.socials).length > 0 ? (
                Object.entries(profileData.socials).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-3 py-1 rounded-full text-xs hover:bg-teal-700 transition-colors"
                  >
                    {platform}
                  </a>
                ))
              ) : (
                <span className="text-gray-400 text-sm">No socials added.</span>
              )}
            </div>
            {editing && (
              <div className="mt-2 flex flex-col gap-2">
                {/* Example: Add/Edit socials (for demo, just one input) */}
                <input
                  className="bg-gray-800 text-white rounded px-2 py-1"
                  placeholder="Add/Edit Social Link (e.g. Twitter URL)"
                  name="socials"
                  value={profileData.socials?.twitter || ""}
                  onChange={e => setProfileData({
                    ...profileData,
                    socials: { ...profileData.socials, twitter: e.target.value }
                  })}
                />
              </div>
            )}
          </div>
          {/* Courses */}
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="text-primary">Courses:</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {(Profile.courses || []).map((course, idx) => (
                <span
                  key={idx}
                  className="bg-primary text-white font-bold py-1 px-2 rounded-full text-xs"
=======
import { Profile } from "../constants";
import { dashboardStyle } from "../style";
import { useState, useEffect } from "react";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { PiCityLight } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiBooksLight } from "react-icons/pi";
import { MdOutlineDescription } from "react-icons/md";
import { TbSocial } from "react-icons/tb";

const Dashboardprofile = ({user}) => {
  return (
    <div class="font-sans antialiased text-white leading-normal tracking-wider bg-cover ">
      <div class="max-w-6xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          class="w-full lg:w-3/5 rounded-[20px] lg:rounded-l-[20px] lg:rounded-r-[20px] shadow-2xl opacity-75 mx-6 lg:mx-0"
        >
          <div class="p-4 md:p-12 text-center lg:text-left max-w-4xl">
            <div
              class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center rounded-e-full"
              style={{ backgroundImage: `url(${Profile.img})` }}
            ></div>
            <div className="absolute z-[0] w-[60%] h-[70%] -left-[50%] rounded-full blue__gradient" />
            <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-primary">
              {user ? user.name : "Loading..."}
            </h1>
            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-primary opacity-25"></div>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <MdOutlineMail className=" text-primary m-2" />
              {user ? user.username : "Loading..."}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <MdOutlineMail className=" text-primary m-2" />
              {user ? user.email : "Loading..."}
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-center flex-wrap-reverse">
              {Profile.courses.map((course) => (
                <span
                  class="text-white
                bg-primary
                font-bold
                py-1
                px-2
                rounded-full
                text-xs
                m-1"
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
                >
                  {course}
                </span>
              ))}
<<<<<<< HEAD
            </div>
          </div>
          {/* Stats */}
          <div className="mt-4">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">{stats.questions}</span>
                <span className="text-xs text-gray-400">Questions</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">{stats.courses}</span>
                <span className="text-xs text-gray-400">Courses</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-primary">{stats.achievements}</span>
                <span className="text-xs text-gray-400">Achievements</span>
              </div>
            </div>
          </div>
          {/* Recent Activity */}
          <div className="mt-4">
            <div className="text-lg font-semibold text-primary mb-2">Recent Activity</div>
            <ul className="list-disc list-inside text-gray-200">
              {recentActivity.map((item, idx) => (
                <li key={idx}>{item.description}</li>
              ))}
            </ul>
          </div>
=======
            </p>
            <p class="pt-4 text-base font-bold flex items-center justify-center  lg:justify-start">
              <MdOutlineDescription className=" text-primary m-2" />
              Bio:
            </p>
            <p class="pt-2 text-sm text-center">{Profile.bio}</p>
            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"></p>

            <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <TbSocial className=" text-primary m-2" />
              Socials:
            </p>
            <div class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a class="link" href="#" data-tippy-content="@facebook_handle">
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-primary"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
              <a class="link" href="#" data-tippy-content="@twitter_handle">
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-primary"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a class="link" href="#" data-tippy-content="@github_handle">
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-primary"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a class="link" href="#" data-tippy-content="@unsplash_handle">
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-primary"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Unsplash</title>
                  <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
                </svg>
              </a>
              <a class="link" href="#" data-tippy-content="@dribble_handle">
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-primary"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Dribbble</title>
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                </svg>
              </a>
              <a class="link" href="#" data-tippy-content="@instagram_handle">
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-primary"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a class="link" href="#" data-tippy-content="@youtube_handle">
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-primary"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>YouTube</title>
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-2/5 ">
          <img
            src={Profile.img}
            class="rounded-lg lg:rounded-lg shadow-2xl hidden lg:block"
          />
>>>>>>> 3a3f932396437c3860b1c25566c4e7d86e8052ea
        </div>
      </div>
    </div>
  );
};

export default Dashboardprofile;
