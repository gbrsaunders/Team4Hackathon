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
          role: "President",
        },
        {
          name: "Priya Singh",
          id: "u2345678",
          email: "priya.singh@example.com",
          role: "Member",
        },
      ],
    },

    "Drama Society": {
      description: "Productions, workshops, and theatre activities.",
      status: "archived",
      members: [
        {
          name: "Sam Taylor",
          id: "u3456789",
          email: "sam.taylor@example.com",
          role: "Director",
        },
        {
          name: "Emily Green",
          id: "u4567890",
          email: "emily.green@example.com",
          role: "Member",
        },
      ],
    },

    "Photography Society": {
      description: "Photo walks, editing sessions, exhibitions.",
      status: "active",
      members: [
        {
          name: "Jordan Lee",
          id: "u5678901",
          email: "jordan.lee@example.com",
          role: "President",
        },
        {
          name: "Fatima Khan",
          id: "u6789012",
          email: "fatima.khan@example.com",
          role: "Member",
        },
      ],
    },
  };

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function loadSocietyData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(DEFAULT_DATA);
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return parsed;
    } catch (e) {
      console.warn("Failed to load societyData", e);
    }
    return clone(DEFAULT_DATA);
  }

  function saveSocietyData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Failed to save societyData", e);
    }
  }

  window.loadSocietyData = loadSocietyData;
  window.saveSocietyData = saveSocietyData;
})();
