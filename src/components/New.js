import MentorCard from "../homepage/mentor/MentorCard";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselComp = ({ mentors }) => {
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        const getProfilePic = async () => {
            const url =
                "https://firebasestorage.googleapis.com/v0/b/nff-dummy.appspot.com/o/newassignment%2FSRIJAN.jpg?alt=media&token=b1e36074-1417-45e7-9458-b054ce740f69";

            try {
                const res = await fetch(url);
                const data = await res.blob();
                const urlData = URL.createObjectURL(data);

                // Convert to Base64
                const base64Data = await new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(data);
                });

                // Log the Base64 data
                console.log("Base64 Data:", base64Data);

                // Save the Base64 string
                sessionStorage.setItem("profilePic", base64Data);

                // Set profilePic state
                setProfilePic(base64Data);

                // Log the Base64 data (optional)
                console.log("Stored Base64 Data:", sessionStorage.getItem("profilePic"));
            } catch (error) {
                console.error("Error fetching or processing image:", error);
            }
        };

        // Check if profilePic is already in sessionStorage
        const storedProfilePic = sessionStorage.getItem("profilePic");
        if (storedProfilePic) {
            setProfilePic(storedProfilePic);
        } else {
            // If not in sessionStorage, fetch and set profilePic
            getProfilePic();
        }
    }, []); // Run this effect only once when the component mounts

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                loop={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                className="h-0 w-0 md:w-auto md:h-[413px]"
            >
                {mentors.map((e) => (
                    <SwiperSlide key={e.uid}>
                        <div className="w-full h-full flex justify-center items-center">
                            <MentorCard
                                key={e.uid}
                                name={e.displayName}
                                designation={e.details?.interest}
                                src={profilePic}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CarouselComp;