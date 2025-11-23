(function () {
  const STORAGE_KEY = "societyData";

  const DEFAULT_DATA = {
    "Computer Science Society": {
      description: "Talks, hackathons and coding workshops for all levels.",
      status: "active",
      members: [
        {
          name: "Alex Johnson",
          id: "u1234567",
          email: "alex.johnson@example.com",
          role: "President"
        },
        {
          name: "Priya Singh",
          id: "u2345678",
          email: "priya.singh@example.com",
          role: "Member"
        }
      ],
      events: [],
      announcements: []
    },

    "Drama Society": {
      description: "Productions, workshops, and theatre activities.",
      status: "archived",
      members: [
        {
          name: "Sam Taylor",
          id: "u3456789",
          email: "sam.taylor@example.com",
          role: "Director"
        },
        {
          name: "Emily Green",
          id: "u4567890",
          email: "emily.green@example.com",
          role: "Member"
        }
      ],
      events: [],
      announcements: []
    },

    "Photography Society": {
      description: "Photo walks, editing sessions, exhibitions.",
      status: "active",
      members: [
        {
          name: "Jordan Lee",
          id: "u5678901",
          email: "jordan.lee@example.com",
          role: "President"
        },
        {
          name: "Fatima Khan",
          id: "u6789012",
          email: "fatima.khan@example.com",
          role: "Member"
        }
      ],
      events: [],
      announcements: []
    }
  };

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  // Make sure each society has members, events, announcements, status, etc.
  function normalise(data) {
    if (!data || typeof data !== "object") return clone(DEFAULT_DATA);

    Object.keys(data).forEach((name) => {
      const soc = data[name] || {};
      if (!Array.isArray(soc.members)) soc.members = soc.members ? soc.members : [];
      if (!Array.isArray(soc.events)) soc.events = [];
      if (!Array.isArray(soc.announcements)) soc.announcements = [];
      if (!soc.status) soc.status = "active";
      if (typeof soc.description !== "string") soc.description = "";
      data[name] = soc;
    });

    return data;
  }

  function loadSocietyData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(DEFAULT_DATA);
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return normalise(parsed);
    } catch (e) {
      console.warn("Failed to load societyData", e);
    }
    return clone(DEFAULT_DATA);
  }

  function saveSocietyData(data) {
    try {
      const normalised = normalise(data);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(normalised));
    } catch (e) {
      console.warn("Failed to save societyData", e);
    }
  }

  window.loadSocietyData = loadSocietyData;
  window.saveSocietyData = saveSocietyData;
})();
