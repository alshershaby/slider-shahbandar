const rightContainer = document.querySelector(".col.right");
const leftContainer = document.querySelector(".col.left");
const centerImage = document.querySelector(".col.center img");

// Define the slider elements array
const sliderElements = [
    { title: "قلوب ملونة", desc: "استمتع بتلوين دفتر “يوميات خالد” حيث يحتوي على أعمال يقوم بها خالد يومياً", price: "50.00 ر.س", imageSrc: "./assets/1.png" },
    { title: "صندوق الحيوانات", desc: "في كل كتاب من سلسلة «صناديق فيزو» يحمل «فيزو» صندوقًا مختلفًا تخرج منه مفاجآت مدهشة،", price: "50.00 ر.س", imageSrc: "./assets/2.png" },
    { title: "كل شيء عن المشاعر", desc: "يا تُرى كيف تشعر هذا الصباح؟ هذه الرحلة الاستكشافية في عالم المشاعر المتنوعة", price: "50.00 ر.س", imageSrc: "./assets/3.png" },
    { title: "تفاحة - تفاحتان - ثلاث تفاحات", desc: "تم تصميم هذا الكتاب ليكون ملعبا واسعا يقضي فيه الطفل ووالديه أوقات ممتعة،", price: "50.00 ر.س", imageSrc: "./assets/4.png" },
    { title: "رحلة الغابة", desc: "اكتشف المغامرات الشيقة في رحلة الغابة المليئة بالمفاجآت والتحديات", price: "55.00 ر.س", imageSrc: "./assets/5.png" },
    { title: "ألوان السعادة", desc: "تعرف على الألوان وأهميتها في حياتنا اليومية بطريقة ممتعة وتعليمية", price: "60.00 ر.س", imageSrc: "./assets/6.png" },
    { title: "عالم الأرقام", desc: "كتاب تعليمي يساعد الأطفال على تعلم الأرقام من خلال الألعاب والتحديات", price: "45.00 ر.س", imageSrc: "./assets/7.png" },
    { title: "رحلة الكواكب", desc: "انطلق في رحلة مذهلة بين الكواكب وتعرف على الفضاء بطريقة ممتعة", price: "65.00 ر.س", imageSrc: "./assets/8.png" }
];

// Function to create a book item
const createBookItem = (item) => {
    return `
        <div class="single-book" data-image="${item.imageSrc}">
            <div class="img-holder"><img src="${item.imageSrc}" alt="${item.title}"></div>
            <div class="content">
                <div class="title"><h3>${item.title}</h3></div>
                <div class="desc">${item.desc}</div>
                <div class="price">${item.price}</div>
            </div>
        </div>
    `;
};

for (let i = 0; i < 4; i++) {
    rightContainer.innerHTML += createBookItem(sliderElements[i]);
}

for (let i = 4; i < 8; i++) {
    leftContainer.innerHTML += createBookItem(sliderElements[i]);
}

const handleBookClick = (event) => {
    const newImageSrc = event.currentTarget.getAttribute("data-image");

     document.querySelectorAll(".single-book").forEach(book => book.classList.remove("active"));
    
     event.currentTarget.classList.add("active");

    centerImage.style.animation = "rotateOut 0.4s forwards";

     setTimeout(() => {
        centerImage.src = newImageSrc;
        centerImage.style.animation = "rotateIn 0.4s forwards";
    }, 400);
};

document.querySelectorAll(".single-book").forEach(book => {
    book.addEventListener("click", handleBookClick);
});
