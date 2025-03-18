"use client"
import { FC, useState, useEffect } from 'react'
import { IProject } from "../../../interfaces/index";

interface Props {
    projectDetails: IProject;
}

const CardDetail: FC<Props> = ({ projectDetails: initialProjects }) => {
    const [projectDetail, setprojectDetail] = useState<IProject>(initialProjects);
    const [isFavorite, setIsFavorite] = useState(false);



    useEffect(() => {
        if (initialProjects) {
            const storedFavorites = localStorage.getItem('favorites');
            const favoritesList = storedFavorites ? JSON.parse(storedFavorites) : [];
            setIsFavorite(favoritesList.includes(initialProjects.id));
        }
    }, [projectDetail]);
    const toggleFavorite = () => {
        const storedFavorites = localStorage.getItem('favorites');
        let favoritesList = storedFavorites ? JSON.parse(storedFavorites) : [];

        if (isFavorite) {
            favoritesList = favoritesList.filter((id: number) => id !== projectDetail.id);
        } else {
            favoritesList.push(projectDetail.id);
        }

        localStorage.setItem('favorites', JSON.stringify(favoritesList));
        setIsFavorite(!isFavorite);
    };
    return (
        <>
            <div dir="rtl" className="grid grid-cols-12 text-gray-300 py-6">
                <div className="col-span-1"></div>
                <div className="col-span-10">
                    <div className="italic text-4xl">{projectDetail.title}</div>
                    <div className="text-xl/10 text-justify pt-10">{projectDetail.description}</div>
                    <div className="flex justify-between py-5">
                        <div className="text-[18px] text-md text-left">نوشته شده توسط {projectDetail.producer}</div>
                        <div className="text-[18px]">مدت زمان انجام :{projectDetail.projectduration} ماه</div>
                    </div>
                    <div className="flex justify-between py-5">
                        <div className="text-[18px] text-left">تاریخ اتمام پروژه : {projectDetail.dateofcompletion}</div>
                        <div className="text-2xl">{projectDetail.price} تومان</div>
                    </div>
                    <div className="grid grid-cols-10 max-md:grid-cols-1  max-md:gap-4 place-items-center mt-10 mb-5">
                        <div dir="ltr" className="col-span-7 max-md:col-span-1 w-full bg-gray-300 rounded-full h-2.5">
                            {/* {projectdetail.status === "notstarted" ? (
                                <div className="bg-[#98f207df] h-2.5 rounded-full w-[40%]"></div>
                            )} */}

                            <div>
                                {projectDetail.status === "notstarted" ? (
                                    <div className="bg-[#98f207df] h-2.5 rounded-full w-[10%]"></div>
                                ) : projectDetail.status === "inprogress" ? (
                                    <div className="bg-[#98f207df] h-2.5 rounded-full w-[40%]"></div>
                                ) : projectDetail.status === "delivered" ? (
                                    <div className="bg-[#98f207df] h-2.5 rounded-full w-[75%]"></div>
                                ) : (
                                    <div className="bg-[#07f25df4] h-2.5 rounded-full w-[100%]"></div>
                                )}
                            </div>


                        </div>
                        {/*  */}
                        {projectDetail.status === "notstarted" ? (
                            <div className="col-span-2  max-md:col-span-1 text-lg">شروع نشده</div>
                        ) : projectDetail.status === "inprogress" ? (
                            <div className="col-span-2  max-md:col-span-1 text-lg">در حال انجام</div>
                        ) : projectDetail.status === "delivered" ? (
                            <div className="col-span-2  max-md:col-span-1 text-lg">تحویل داده شده</div>
                        ) : (
                            <div className="col-span-2  max-md:col-span-1 text-lg">تایید شده</div>
                        )}
                        <div className="col-span-1 max-md:col-span-1">
                            <div
                                className={isFavorite ? "text-yellow-500 cursor-pointer" : "text-gray-400 cursor-pointer"}
                                onClick={toggleFavorite}
                            >
                                <div className="text-3xl">&#9733;</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>
        </>
    )
}
export default CardDetail