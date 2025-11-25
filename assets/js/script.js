"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// let lastClickedBtn = filterBtn[0];

// filterBtn.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("text-[#ffdb70]");
//     this.classList.add("text-[#ffdb70]");
//     lastClickedBtn = this;
//   });
// });

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// popup for project detials
// PROJECT DATA
const projectData = {
  Finance: {
    title: "Finance",
    category: "Web Development",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-1.jpg",
  },

  // ADD YOUR OTHER 8 PROJECTS HERE
  Orizon: {
    title: "Orizon",
    category: "Web Development",
    tech: ["React", "Node.js"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-2.png",
  },
  Fundo: {
    title: "Fundo",
    category: "Web Development",
    tech: ["React", "Node.js"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-3.jpg",
  },
  Brawlhalla: {
    title: "Brawlhalla",
    category: "Web Development",
    tech: ["React", "Node.js"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-4.png",
  },
  DSM: {
    title: "DSM.",
    category: "Web design",
    tech: ["Figma", "Canva"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-5.png",
  },
  MetaSpark: {
    title: "MetaSpark",
    category: "Web design",
    tech: ["Figma", "Canva"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-5.png",
  },
  Summary: {
    title: "MetaSpark",
    category: "Web development",
    tech: ["React", "Node.js"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-6.png",
  },
  Summary: {
    title: "MetaSpark",
    category: "Web development",
    tech: ["React", "Node.js"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-7.png",
  },
  TaskManager: {
    title: "TaskManager",
    category: "App development",
    tech: ["FLutter", "Dart", "React Native"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-8.jpg",
  },
  Arrival: {
    title: "Arrival",
    category: "Web development",
    tech: ["React", "Node.js"],
    description:
      "A clean financial dashboard with charts and analytics.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit magnam consequuntur recusandae quos odit provident, voluptate eaque corrupti facere.",
    img: "./assets/images/project-9.png",
  },
};

// ELEMENTS
const detailBox = document.getElementById("project-detail");
const detailClose = document.getElementById("detail-close");
const detailClose2 = document.getElementById("detail-close2");

const dImg = document.getElementById("detail-img");
const dTitle = document.getElementById("detail-title");
const dCat = document.getElementById("detail-category");
const dTech = document.getElementById("detail-tech");
const dDesc = document.getElementById("detail-desc");

// OPEN DETAILS ON CLICK
document.querySelectorAll(".project-item").forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.querySelector(".project-title").innerText;

    const p = projectData[title];

    // Fill content
    dImg.src = p.img;
    dTitle.innerText = p.title;
    dCat.innerText = `Category: ${p.category}`;
    // dTech.innerText = p.tech;
    dDesc.innerText = p.description;
    // Clear previous badges
    dTech.innerHTML = "";

    // Create badges
    p.tech.forEach((t) => {
      const badge = document.createElement("span");
      badge.className =
        " py-2 !my-4 text-[#fbd86f] rounded-full !px-3 bg-[#ffdb6e1f] border border-[#fbd86f] !text-[15px] font-medium";
      badge.innerText = t;

      dTech.appendChild(badge);
    });

    // Show detail section
    detailBox.classList.remove("hidden");
  });
});

// CLOSE DETAIL
detailClose.addEventListener("click", () => {
  detailBox.classList.add("hidden");
});
detailClose2.addEventListener("click", () => {
  detailBox.classList.add("hidden");
});

// skill progress
const skillBars = document.querySelectorAll(".skill-bar");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute("data-progress");

        bar.style.width = targetWidth + "%";

        observer.unobserve(bar); // animate only once
      }
    });
  },
  {
    threshold: 0.4, // triggers when 40% visible
  }
);

// Observe each bar
skillBars.forEach((bar) => observer.observe(bar));

// show details of process
document.querySelectorAll(".process-step").forEach((step) => {
  step.addEventListener("mouseenter", () => {
    step.querySelector(".description").style.maxHeight = "80px";
  });
  step.addEventListener("mouseleave", () => {
    step.querySelector(".description").style.maxHeight = "0";
  });
});

// toggle sidebar
const sidebar2 = document.getElementById("sidebar");
const main = document.getElementById("mainContent");

const toggleInside = document.getElementById("toggleSidebar");
const toggleOutside = document.getElementById("toggleSidebar2");

function updateBars() {
  const isClosed = sidebar2.classList.contains("closed");

  // If sidebar is closed → show outside bar
  toggleOutside.style.display = isClosed ? "flex" : "none";

  // Inside bar always visible (since it's attached to sidebar)
}

toggleInside.onclick = () => {
  sidebar2.classList.toggle("closed");
  main.classList.toggle("expanded");
  updateBars();
};

toggleOutside.onclick = () => {
  sidebar2.classList.toggle("closed");
  main.classList.toggle("expanded");
  updateBars();
};

// Initial state sync
updateBars();
// change icon direction
// if (sidebar2.classList.contains("closed")) {
//   icon.setAttribute("name", "chevron-forward");
// } else {
//   icon.setAttribute("name", "chevron-back");
// }
