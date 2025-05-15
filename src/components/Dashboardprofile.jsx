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
                >
                  {course}
                </span>
              ))}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboardprofile;
