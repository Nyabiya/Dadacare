const m_menstrual = document.getElementById("m_menstrual");
const m_c_menstrual = document.getElementById("m_c_menstrual");
const menstrual_mobile = document.getElementById("menstrual_mobile");

   m_menstrual.addEventListener("mouseover", function() {
       m_menstrual.style.backgroundColor = "#e63946";
       m_c_normal.style.display = "none";
       m_c_menstrual.style.display = "block";
       menstrual_mobile.style.display = "block";
       });
   m_menstrual.addEventListener("mouseout", function() {
       m_menstrual.style.backgroundColor = "#F5F5F5";
       m_c_menstrual.style.display = "none"; // Nascondi
       m_c_normal.style.display = "block";
       menstrual_mobile.style.display = "none";
       });

const m_follicular = document.getElementById("m_follicular");
const m_c_follicular = document.getElementById("m_c_follicular");
const follicular_mobile = document.getElementById("follicular_mobile");

    m_follicular.addEventListener("mouseover", function() {
        m_follicular.style.backgroundColor = "#4CC9F0";
        m_c_follicular.style.display = "block";
        m_c_normal.style.display = "none";
        follicular_mobile.style.display = "block";
    });
    m_follicular.addEventListener("mouseout", function() {
        m_follicular.style.backgroundColor = "#F5F5F5";
        m_c_follicular.style.display = "none";
        m_c_normal.style.display = "block";
        follicular_mobile.style.display = "none";
    });

const m_ovulation = document.getElementById("m_ovulation");
const m_c_ovulatory = document.getElementById("m_c_ovulatory");
const ovulation_mobile = document.getElementById("ovulation_mobile");

   m_ovulation.addEventListener("mouseover", function() {
       m_ovulation.style.backgroundColor = "#FFB703";
       m_c_ovulatory.style.display = "block";
       m_c_normal.style.display = "none";
       ovulation_mobile.style.display = "block";
   });
   m_ovulation.addEventListener("mouseout", function() {
       m_ovulation.style.backgroundColor = "#F5F5F5";
       m_c_ovulatory.style.display = "none";
       m_c_normal.style.display = "block";
       ovulation_mobile.style.display = "none";
   });

const m_luteal = document.getElementById("m_luteal");
const m_c_luteal = document.getElementById("m_c_luteal"); 
const luteal_mobile = document.getElementById("luteal_mobile");

   m_luteal.addEventListener("mouseover", function() {
       m_luteal.style.backgroundColor = "#9D4EDD";
       m_c_luteal.style.display = "block";
       m_c_normal.style.display = "none";
       luteal_mobile.style.display = "block";
   });
   m_luteal.addEventListener("mouseout", function() {
       m_luteal.style.backgroundColor = "#F5F5F5";
       m_c_luteal.style.display = "none";
       m_c_normal.style.display = "block";
       luteal_mobile.style.display = "none";
   });
   
const menstrual = document.getElementById("menstrual");
const c_menstrual = document.getElementById("c_menstrual");
   menstrual.addEventListener("mouseover", function() {
       menstrual.style.backgroundColor = "#e63946";
       c_normal.style.display = "none";
       c_menstrual.style.display = "block";
       });
   menstrual.addEventListener("mouseout", function() {
       menstrual.style.backgroundColor = "#F5F5F5";
       c_menstrual.style.display = "none"; // Nascondi
       c_normal.style.display = "block";
       });
const follicular = document.getElementById("follicular");
const c_follicular = document.getElementById("c_follicular");
   follicular.addEventListener("mouseover", function() {
       follicular.style.backgroundColor = "#4CC9F0";
       c_follicular.style.display = "block";
       c_normal.style.display = "none";
   });
   follicular.addEventListener("mouseout", function() {
       follicular.style.backgroundColor = "#F5F5F5";
       c_follicular.style.display = "none";
       c_normal.style.display = "block";
   });
const ovulation = document.getElementById("ovulation");
const c_ovulatory = document.getElementById("c_ovulatory");
   ovulation.addEventListener("mouseover", function() {
       ovulation.style.backgroundColor = "#FFB703";
       c_ovulatory.style.display = "block";
       c_normal.style.display = "none";
   });
   ovulation.addEventListener("mouseout", function() {
       ovulation.style.backgroundColor = "#F5F5F5";
       c_ovulatory.style.display = "none";
       c_normal.style.display = "block";
   });
const luteal = document.getElementById("luteal");
const c_luteal = document.getElementById("c_luteal");
   luteal.addEventListener("mouseover", function() {
       luteal.style.backgroundColor = "#9D4EDD";
       c_luteal.style.display = "block";
       c_normal.style.display = "none";
   });
   luteal.addEventListener("mouseout", function() {
       luteal.style.backgroundColor = "#F5F5F5";
       c_luteal.style.display = "none";
       c_normal.style.display = "block";
   });