
import LandingCounter from './LandingCounter';

const Statistic = ({ count }) => {
    return (
      <div class="mx-auto relative -top-20 rounded-xl border border-white/80 bg-white bg-opacity-80 drop-shadow-lg backdrop-blur-2xl backdrop-saturate-200 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-6 lg:py-10">
        <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div class="text-center md:border-l">
            <h6 class="text-3xl font-semibold text-blue-900 lg:text-5xl xl:text-6xl"><LandingCounter count={454} /></h6>
            <p class="text-sm font-medium tracking-widest text-blue-800 uppercase lg:text-base">
              تعداد دانشجو
            </p>
          </div>
          <div class="text-center md:border-l">
            <h6 class="text-3xl font-semibold text-blue-900 lg:text-5xl xl:text-6xl"><LandingCounter count={160} /></h6>
            <p class="text-sm font-medium tracking-widest text-blue-800 uppercase lg:text-base">
              تعداداستاد
            </p>
          </div>
          <div class="text-center md:border-l">
            <h6 class="text-3xl font-semibold text-blue-900 lg:text-5xl xl:text-6xl"><LandingCounter count={218} /></h6>
            <p class="text-sm font-medium tracking-widest text-blue-800 uppercase lg:text-base">
              تعداد دوره
            </p>
          </div>
          <div class="text-center">
            <h6 class="text-3xl font-semibold text-blue-900 lg:text-5xl xl:text-6xl"><LandingCounter count={87} /></h6>
            <p class="text-sm font-medium tracking-widest text-blue-800 uppercase lg:text-base">
              تعداد دوره فعال
            </p>
          </div>
        </div>
      </div>
    );
  };
  export default Statistic ;