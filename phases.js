const m_menstrual = document.getElementById("m_menstrual");
const m_c_normal = document.getElementById("m_c_normal");
const m_c_menstrual = document.getElementById("m_c_menstrual");
const menstrual_mobile = document.getElementById("menstrual_mobile");

const m_follicular = document.getElementById("m_follicular");
const m_c_follicular = document.getElementById("m_c_follicular");
const follicular_mobile = document.getElementById("follicular_mobile");

const m_ovulation = document.getElementById("m_ovulation");
const m_c_ovulatory = document.getElementById("m_c_ovulatory");
const ovulation_mobile = document.getElementById("ovulation_mobile");

const m_luteal = document.getElementById("m_luteal");
const m_c_luteal = document.getElementById("m_c_luteal");
const luteal_mobile = document.getElementById("luteal_mobile");

const menstrual = document.getElementById("menstrual");
const c_normal = document.getElementById("c_normal");
const c_menstrual = document.getElementById("c_menstrual");

const follicular = document.getElementById("follicular");
const c_follicular = document.getElementById("c_follicular");

const ovulation = document.getElementById("ovulation");
const c_ovulatory = document.getElementById("c_ovulatory");

const luteal = document.getElementById("luteal");
const c_luteal = document.getElementById("c_luteal");

// Store original background colors to restore on mouseout
const origBg = {
  m_menstrual: window.getComputedStyle(m_menstrual).backgroundColor,
  m_follicular: window.getComputedStyle(m_follicular).backgroundColor,
  m_ovulation: window.getComputedStyle(m_ovulation).backgroundColor,
  m_luteal: window.getComputedStyle(m_luteal).backgroundColor,
  menstrual: window.getComputedStyle(menstrual).backgroundColor,
  follicular: window.getComputedStyle(follicular).backgroundColor,
  ovulation: window.getComputedStyle(ovulation).backgroundColor,
  luteal: window.getComputedStyle(luteal).backgroundColor,
};

// MOBILE PHASES

m_menstrual.addEventListener("mouseover", function() {
  m_menstrual.style.backgroundColor = "#e63946";
  m_c_normal.style.display = "none";
  m_c_menstrual.style.display = "block";
  menstrual_mobile.style.display = "block";
});
m_menstrual.addEventListener("mouseout", function() {
  m_menstrual.style.backgroundColor = origBg.m_menstrual;
  m_c_menstrual.style.display = "none";
  m_c_normal.style.display = "block";
  menstrual_mobile.style.display = "none";
});

m_follicular.addEventListener("mouseover", function() {
  m_follicular.style.backgroundColor = "#4CC9F0";
  m_c_follicular.style.display = "block";
  m_c_normal.style.display = "none";
  follicular_mobile.style.display = "block";
});
m_follicular.addEventListener("mouseout", function() {
  m_follicular.style.backgroundColor = origBg.m_follicular;
  m_c_follicular.style.display = "none";
  m_c_normal.style.display = "block";
  follicular_mobile.style.display = "none";
});

m_ovulation.addEventListener("mouseover", function() {
  m_ovulation.style.backgroundColor = "#FFB703";
  m_c_ovulatory.style.display = "block";
  m_c_normal.style.display = "none";
  ovulation_mobile.style.display = "block";
});
m_ovulation.addEventListener("mouseout", function() {
  m_ovulation.style.backgroundColor = origBg.m_ovulation;
  m_c_ovulatory.style.display = "none";
  m_c_normal.style.display = "block";
  ovulation_mobile.style.display = "none";
});

m_luteal.addEventListener("mouseover", function() {
  m_luteal.style.backgroundColor = "#9D4EDD";
  m_c_luteal.style.display = "block";
  m_c_normal.style.display = "none";
  luteal_mobile.style.display = "block";
});
m_luteal.addEventListener("mouseout", function() {
  m_luteal.style.backgroundColor = origBg.m_luteal;
  m_c_luteal.style.display = "none";
  m_c_normal.style.display = "block";
  luteal_mobile.style.display = "none";
});

// DESKTOP PHASES

menstrual.addEventListener("mouseover", function() {
  menstrual.style.backgroundColor = "#e63946";
  c_normal.style.display = "none";
  c_menstrual.style.display = "block";
});
menstrual.addEventListener("mouseout", function() {
  menstrual.style.backgroundColor = origBg.menstrual;
  c_menstrual.style.display = "none";
  c_normal.style.display = "block";
});

follicular.addEventListener("mouseover", function() {
  follicular.style.backgroundColor = "#4CC9F0";
  c_follicular.style.display = "block";
  c_normal.style.display = "none";
});
follicular.addEventListener("mouseout", function() {
  follicular.style.backgroundColor = origBg.follicular;
  c_follicular.style.display = "none";
  c_normal.style.display = "block";
});

ovulation.addEventListener("mouseover", function() {
  ovulation.style.backgroundColor = "#FFB703";
  c_ovulatory.style.display = "block";
  c_normal.style.display = "none";
});
ovulation.addEventListener("mouseout", function() {
  ovulation.style.backgroundColor = origBg.ovulation;
  c_ovulatory.style.display = "none";
  c_normal.style.display = "block";
});

luteal.addEventListener("mouseover", function() {
  luteal.style.backgroundColor = "#9D4EDD";
  c_luteal.style.display = "block";
  c_normal.style.display = "none";
});
luteal.addEventListener("mouseout", function() {
  luteal.style.backgroundColor = origBg.luteal;
  c_luteal.style.display = "none";
  c_normal.style.display = "block";
});
