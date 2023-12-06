// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  //Part 1.1
  const mainEl = document.querySelector("main");
  // const mainEl = document.getElementsByTagName("main")
  
  // Part 1.2
  mainEl.style.backgroundColor = "var(--main-bg)";
  //console.log(mainEl);
  
  // Part 1.3
  mainEl.appendChild(document.createElement("h1")).textContent =
    "DOM Manipulation!";
  //console.log(mainEl);
  
  //Part 1.4
  mainEl.classList.add("flex-ctr");
  //console.log(mainEl);
  
  //Part 2.1 Creating a Menu Bar
  const topMenuEl = document.getElementById("top-menu");
  //console.log(topMenuEl);
  
  //Part 2.2
  topMenuEl.style.height = "100%";
  //console.log(topMenuEl);
  
  //Part 2.3
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  //console.log(topMenuEl);
  
  //Part 2.4
  topMenuEl.classList.add("flex-around");
  //console.log(topMenuEl);
  
  //Part 3: Adding Menu Buttons
  //Part 3.1
  const link = document.getElementsByName("menuLinks");
  for (let link of menuLinks) {
    //Part 3.2
    let aEl = document.createElement("a");
    aEl.setAttribute("href", link.href);
    aEl.innerHTML = link.text;
    topMenuEl.append(aEl);
    //console.log(link);
  }
  
  //Part 4: Adding Interactivity
  //Part 2 ....
  