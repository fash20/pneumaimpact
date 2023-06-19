import React from "react";

function CandleGroup({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="93"
      height="77"
      fill="none"
      viewBox="0 0 93 77"
      className='w-[73px] h-[57px] md:w-[83px] md:h-[67px] lg:w-[93px] lg:h-[77px]'
    >
      <path
        fill={color}
        d="M45.229 46.244c.742-1.64-1.919-2.94-4.239-2.042-1.361.526-5.29 3.744-5.197 4.239.587 3.031 7.796 1.36 9.436-2.197zM64.936 39.562c-4.671 1.949-31.71 21.594-33.474 24.286-.959 1.454 2.073 2.846 4.053 1.887 2.32-1.083 22.182-16.335 30.845-23.853 1.206-1.021.03-2.908-1.424-2.32zM5.258 37.923C.896 40.83.09 41.945 1.7 42.749c3.156 1.609 5.197-.804 9.065-3.31 2.63-1.733-2.011-3.867-5.507-1.516zM18.84 43.954c3.31-1.609 8.044-4.888 13.644-9.529 2.382-1.98 7.27-5.569 10.859-7.982 6.404-4.3 7.115-4.919 6.094-5.29-.866-.34-1.052-.247-11.57 6.095-10.55 6.373-18.284 11.385-21.873 14.231-4.517 3.558-1.516 4.61 2.846 2.475zM17.046 34.21c2.29-1.27 6.683-4.363 16.057-10.922C46.065 14.224 54.14 8.995 55.378 7.665l.928-.99c-1.33-1.083-2.135-2.073-6.404.155C44.147 9.8 24.1 24.062 16.582 30.31c-4.238 3.466-3 5.817.464 3.9zM13.147 53.978c-3.217 2.568-3.31 2.691-2.104 3.589 2.352 1.732 11.014-2.475 9.622-4.703-1.33-2.134-3.96-1.763-7.518 1.114zM88.634 1.601c-2.228 1.114-48.14 32.144-62.278 42.941-6.032 4.61-2.196 5.322 1.98 3.31 5.353-2.567 7.982-6.125 45.448-31.03C88.788 6.83 92.964 3.582 92.964 1.85c0-1.052-2.474-1.176-4.33-.248zM67.288 29.66c2.754-2.505 9.529-7.579 11.447-8.94.804-.65-1.3-1.052-2.382-.464C57.945 30.34 41.146 43.86 46.715 43.86c2.32 0 13.334-7.549 20.573-14.2zM76.879 29.724c-7.797 4.363-9.282 5.91-6.683 7.147 2.042.959 2.66.68 8.26-3.558 7.333-5.569 4.548-7.023-1.577-3.589zM40.217 71.645c-3.496 2.258-4.053 3.62-1.887 4.671 2.32 1.145 5.785-.402 7.425-3.28.835-1.515-3.62-2.629-5.538-1.391zM76.414 43.925c-3.403 2.475-11.354 8.6-19.645 14.138-11.478 7.672-13.736 10.178-10.24 11.2 2.134.618 6.868-2.661 15.345-10.829 3.062-2.97 11.013-9.621 15.22-12.87 2.29-1.763 1.61-3.31-.68-1.64z"
      ></path>
    </svg>
  );
}

export default CandleGroup;