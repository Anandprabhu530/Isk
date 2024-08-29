import { create } from "zustand";

const useStore = create((set) => ({
  exercise_list: [
    { name: "Push Ups", img: "../../../assets/images/PushUp.png" },
    { name: "Pull Ups", img: "../../../assets/images/aipullup.png" },
    { name: "Plank", img: "../../../assets/images/PushUp.png" },
    { name: "Bench Press", img: "../../../assets/images/aipullup.png" },
    { name: "Squats", img: "../../../assets/images/PushUp.png" },
    { name: "Crunches", img: "../../../assets/images/aipullup.png" },
  ],
  setExercise_list: (data) =>
    set((state) => [...state, { name: data.name, img: data.img }]),
}));

export default useStore;
