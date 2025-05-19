// export const onWheel = (e: WheelEvent ) => {
//       const element = scrollRef.current;
//       if (!element) return;

//       const scrollLeft = element.scrollLeft;
//       const maxScrollLeft = element.scrollWidth - element.clientWidth;

//       const isAtStart = scrollLeft <= 0;
//       const isAtEnd = scrollLeft >= maxScrollLeft - 1;

//       const scrollingRight = e.deltaY > 0;
//       const scrollingLeft = e.deltaY < 0;

//       // Prevent vertical scroll when in horizontal scroll zone
//       const shouldScrollHorizontally = (scrollingRight && !isAtEnd) || (scrollingLeft && !isAtStart);

//       if (shouldScrollHorizontally) {
//         e.preventDefault();
//         element.scrollLeft += e.deltaY;
//       }
//     };
