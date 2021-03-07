import React, { Component } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

var h, wh, w;
const svgVariants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default class Banner extends Component {
  componentDidMount() {
    h = document.getElementById("navbar").clientHeight;
    wh = window.innerHeight;
    w = window.innerWidth;
    console.log(wh);
    this.forceUpdate();
  }
  render() {
    return (
      <div
        style={{
          // backgroundImage: "linear-gradient(black,black)",
          backgroundImage: "linear-gradient(rgba(255,0,0,0), rgba(255,0,0,1))",

          // background: "#333",
          margin: "0",
          height: wh - h,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.svg
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          width="858"
          height="129"
          viewBox="0 0 858 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="superbanner"
        >
          <g filter="url(#filter0_d)">
            <mask
              id="path-1-outside-1"
              maskUnits="userSpaceOnUse"
              x="4.02002"
              y="0.699997"
              width="850"
              height="120"
              fill="black"
            >
              <rect
                fill="white"
                x="4.02002"
                y="0.699997"
                width="850"
                height="120"
              />
              <path d="M64.16 30.86C64.44 29.46 64.58 27.5467 64.58 25.12C64.58 23.72 64.4867 22.3667 64.3 21.06C64.1134 19.66 63.7867 18.4467 63.32 17.42C62.8534 16.3 62.1534 15.46 61.22 14.9C60.2867 14.2467 59.0734 13.92 57.58 13.92C55.9 13.92 54.36 14.2933 52.96 15.04C51.56 15.7867 50.3 16.7667 49.18 17.98C48.1534 19.1 47.3134 20.4533 46.66 22.04C46.1 23.5333 45.82 25.12 45.82 26.8C45.82 29.2267 46.4267 31.0933 47.64 32.4C48.9467 33.7067 50.6267 34.78 52.68 35.62C54.7334 36.46 57.0667 37.16 59.68 37.72C62.2934 38.28 65 38.9333 67.8 39.68C70.1334 40.3333 72.4667 41.1733 74.8 42.2C77.1334 43.2267 79.1867 44.6267 80.96 46.4C82.8267 48.08 84.32 50.32 85.44 53.12C86.56 55.8267 87.12 59.2333 87.12 63.34C87.12 69.22 85.9534 74.1667 83.62 78.18C81.2867 82.1933 78.0667 85.46 73.96 87.98C69.8534 90.5 64.9534 92.32 59.26 93.44C53.66 94.56 47.5467 95.12 40.92 95.12C34.2 95.12 28.6934 94.7 24.4 93.86C20.2 92.9267 16.8867 91.9467 14.46 90.92C11.5667 89.7067 9.42002 88.3067 8.02002 86.72L12.78 67.54H37.42C37.3267 68.38 37.2334 69.5467 37.14 71.04C37.0467 72.44 37 73.56 37 74.4C37 75.52 37.14 76.6867 37.42 77.9C37.7 79.1133 38.12 80.2333 38.68 81.26C39.3334 82.2867 40.22 83.1267 41.34 83.78C42.46 84.4333 43.86 84.76 45.54 84.76C47.4067 84.76 49.04 84.34 50.44 83.5C51.9334 82.66 53.1467 81.6333 54.08 80.42C55.1067 79.1133 55.8534 77.7133 56.32 76.22C56.88 74.6333 57.16 73.0933 57.16 71.6C57.16 69.5467 56.6467 67.82 55.62 66.42C54.6867 65.02 53.38 63.8533 51.7 62.92C50.02 61.8933 48.06 61.0533 45.82 60.4C43.6734 59.6533 41.4334 58.9067 39.1 58.16C36.86 57.5067 34.48 56.7133 31.96 55.78C29.5334 54.8467 27.2934 53.54 25.24 51.86C23.1867 50.18 21.46 48.08 20.06 45.56C18.7534 42.9467 18.1 39.6333 18.1 35.62C18.1 29.6467 19.5934 24.6533 22.58 20.64C25.66 16.5333 29.4867 13.22 34.06 10.7C38.7267 8.18 43.8134 6.40667 49.32 5.38C54.8267 4.26 60.0534 3.7 65 3.7C71.5334 3.7 77.1334 4.49333 81.8 6.08C86.56 7.57333 90.1534 9.34666 92.58 11.4L87.4 30.86H64.16Z" />
              <path d="M143.388 33.8H171.948L159.068 94H136.388L133.868 85.04H133.028C130.601 87.9333 127.288 90.36 123.088 92.32C118.981 94.1867 114.828 95.12 110.628 95.12C105.028 95.12 100.641 93.72 97.468 90.92C94.2947 88.0267 92.708 84.2933 92.708 79.72C92.708 77.3867 93.0813 74.4933 93.828 71.04C94.668 67.4933 95.4147 64.18 96.068 61.1L101.948 33.8H130.368L123.368 66.56C123.181 67.3067 122.995 68.1933 122.808 69.22C122.621 70.2467 122.435 71.2733 122.248 72.3C122.061 73.2333 121.875 74.1667 121.688 75.1C121.595 75.94 121.548 76.64 121.548 77.2C121.548 78.6 121.828 79.8133 122.388 80.84C123.041 81.7733 124.161 82.24 125.748 82.24C127.428 82.24 129.015 81.68 130.508 80.56C132.001 79.44 133.168 78.3667 134.008 77.34L143.388 33.8Z" />
              <path d="M195.183 117.52H166.623L184.263 33.8H207.083L209.603 42.76H210.443C213.803 39.2133 217.536 36.6933 221.643 35.2C225.843 33.6133 229.949 32.82 233.963 32.82C237.229 32.82 239.936 33.3333 242.083 34.36C244.323 35.2933 246.096 36.6 247.403 38.28C248.709 39.96 249.643 41.9667 250.203 44.3C250.763 46.6333 251.043 49.1067 251.043 51.72C251.043 53.0267 250.949 54.9867 250.763 57.6C250.576 60.2133 250.156 63.1533 249.503 66.42C248.849 69.5933 247.916 72.9067 246.703 76.36C245.489 79.72 243.856 82.8 241.803 85.6C239.843 88.4 237.323 90.6867 234.243 92.46C231.256 94.2333 227.663 95.12 223.463 95.12C221.129 95.12 218.843 94.84 216.603 94.28C214.456 93.72 212.496 92.9733 210.723 92.04C208.949 91.1067 207.363 90.0333 205.963 88.82C204.656 87.5133 203.676 86.2067 203.023 84.9H202.183L195.183 117.52ZM210.023 81.54C212.263 81.54 214.129 80.3733 215.623 78.04C217.116 75.6133 218.329 72.8133 219.263 69.64C220.196 66.3733 220.849 63.1533 221.223 59.98C221.689 56.7133 221.923 54.2867 221.923 52.7C221.923 50.8333 221.596 49.2933 220.943 48.08C220.383 46.8667 219.309 46.26 217.723 46.26C215.949 46.26 214.269 46.9133 212.683 48.22C211.096 49.4333 209.929 50.5067 209.183 51.44L203.723 77.06C204.469 78.0867 205.356 79.1133 206.383 80.14C207.409 81.0733 208.623 81.54 210.023 81.54Z" />
              <path d="M285.34 65.86C284.967 67.9133 284.687 69.8733 284.5 71.74C284.407 73.6067 284.36 75.2867 284.36 76.78C284.36 77.62 284.407 78.5533 284.5 79.58C284.594 80.6067 284.78 81.5867 285.06 82.52C285.434 83.36 285.9 84.1067 286.46 84.76C287.114 85.32 288 85.6 289.12 85.6C289.96 85.6 290.894 85.32 291.92 84.76C293.04 84.2 294.114 83.4067 295.14 82.38C296.26 81.3533 297.287 80.0933 298.22 78.6C299.247 77.1067 300.04 75.4267 300.6 73.56H323.56L319.92 88.54C318.054 89.7533 315.907 90.78 313.48 91.62C311.054 92.46 308.487 93.16 305.78 93.72C303.074 94.1867 300.32 94.5133 297.52 94.7C294.72 94.98 292.06 95.12 289.54 95.12C284.874 95.12 280.534 94.7 276.52 93.86C272.507 93.02 269.007 91.5733 266.02 89.52C263.034 87.4667 260.654 84.76 258.88 81.4C257.2 77.9467 256.36 73.7 256.36 68.66C256.36 64.0867 257.06 59.6067 258.46 55.22C259.954 50.8333 262.38 46.96 265.74 43.6C269.194 40.1467 273.767 37.3933 279.46 35.34C285.247 33.2867 292.434 32.26 301.02 32.26C310.354 32.26 317.354 33.7067 322.02 36.6C326.78 39.4933 329.16 44.02 329.16 50.18C329.16 52.7 328.787 55.4533 328.04 58.44C327.294 61.3333 326.174 63.8067 324.68 65.86H285.34ZM303.96 49.2C303.96 46.3067 303.494 44.3467 302.56 43.32C301.627 42.2933 300.507 41.78 299.2 41.78C297.707 41.78 296.307 42.2933 295 43.32C293.787 44.2533 292.667 45.56 291.64 47.24C290.614 48.8267 289.68 50.6933 288.84 52.84C288 54.8933 287.3 57.0867 286.74 59.42H302.7C302.887 58.3 303.074 57.1333 303.26 55.92C303.447 54.8933 303.587 53.7733 303.68 52.56C303.867 51.3467 303.96 50.2267 303.96 49.2Z" />
              <path d="M342.723 33.8H365.543L367.643 44.3H368.623C370.77 40.94 373.523 38.0933 376.883 35.76C380.243 33.4267 384.676 32.26 390.183 32.26C390.556 32.26 391.116 32.3067 391.863 32.4C392.703 32.4 393.59 32.54 394.523 32.82C395.55 33.0067 396.576 33.3333 397.603 33.8C398.723 34.1733 399.796 34.7333 400.823 35.48L394.663 64.32H379.403C379.216 58.5333 378.703 54.52 377.863 52.28C377.023 49.9467 375.67 48.78 373.803 48.78C372.87 48.78 371.843 49.0133 370.723 49.48C369.696 49.8533 368.623 50.74 367.503 52.14L358.543 94H329.983L342.723 33.8Z" />
              <path d="M476.759 94H446.519L454.919 54.38H437.699L429.299 94H399.059L417.959 5.1H448.339L440.079 43.74H457.159L465.419 5.1H495.939L476.759 94Z" />
              <path d="M544.521 33.8H573.081L560.201 94H537.521L535.001 85.04H534.161C531.734 87.9333 528.421 90.36 524.221 92.32C520.114 94.1867 515.961 95.12 511.761 95.12C506.161 95.12 501.774 93.72 498.601 90.92C495.427 88.0267 493.841 84.2933 493.841 79.72C493.841 77.3867 494.214 74.4933 494.961 71.04C495.801 67.4933 496.547 64.18 497.201 61.1L503.081 33.8H531.501L524.501 66.56C524.314 67.3067 524.127 68.1933 523.941 69.22C523.754 70.2467 523.567 71.2733 523.381 72.3C523.194 73.2333 523.007 74.1667 522.821 75.1C522.727 75.94 522.681 76.64 522.681 77.2C522.681 78.6 522.961 79.8133 523.521 80.84C524.174 81.7733 525.294 82.24 526.881 82.24C528.561 82.24 530.147 81.68 531.641 80.56C533.134 79.44 534.301 78.3667 535.141 77.34L544.521 33.8Z" />
              <path d="M611.715 42.76C613.675 40.8933 615.869 39.1667 618.295 37.58C620.442 36.2733 623.009 35.06 625.995 33.94C628.982 32.82 632.342 32.26 636.075 32.26C640.555 32.26 643.869 33.2867 646.015 35.34C648.255 37.3933 649.515 39.9133 649.795 42.9H650.635C652.782 40.94 655.115 39.1667 657.635 37.58C659.782 36.2733 662.302 35.06 665.195 33.94C668.089 32.82 671.169 32.26 674.435 32.26C679.289 32.26 683.209 33.6133 686.195 36.32C689.275 38.9333 690.815 42.34 690.815 46.54C690.815 48.6867 690.442 51.5333 689.695 55.08C688.949 58.6267 688.109 62.5 687.175 66.7L681.295 94H653.715L661.275 57.46C661.555 56.06 661.835 54.7067 662.115 53.4C662.395 52.0933 662.535 51.02 662.535 50.18C662.535 48.8733 662.162 47.8 661.415 46.96C660.669 46.0267 659.595 45.56 658.195 45.56C656.422 45.56 654.742 46.2133 653.155 47.52C651.662 48.7333 650.495 49.76 649.655 50.6L640.555 94H614.375L622.075 57.46C622.262 56.2467 622.495 55.0333 622.775 53.82C623.055 52.5133 623.195 51.3467 623.195 50.32C623.195 48.92 622.822 47.8 622.075 46.96C621.422 46.0267 620.395 45.56 618.995 45.56C617.315 45.56 615.682 46.1667 614.095 47.38C612.602 48.5933 611.435 49.62 610.595 50.46L601.355 94H572.795L585.535 33.8H608.355L610.875 42.76H611.715Z" />
              <path d="M704.861 38.98C709.621 36.6467 714.475 34.9667 719.421 33.94C724.461 32.82 730.061 32.26 736.221 32.26C742.195 32.26 747.141 32.7267 751.061 33.66C754.981 34.5933 758.108 35.9467 760.441 37.72C762.775 39.4933 764.408 41.5933 765.341 44.02C766.275 46.4467 766.741 49.2 766.741 52.28C766.741 54.0533 766.601 55.9667 766.321 58.02C766.135 60.0733 765.901 61.8 765.621 63.2L759.041 94H736.501L733.981 85.04H733.141C730.155 88.3067 726.655 90.8267 722.641 92.6C718.721 94.28 714.801 95.12 710.881 95.12C708.641 95.12 706.448 94.7933 704.301 94.14C702.155 93.4867 700.241 92.5067 698.561 91.2C696.881 89.8 695.528 88.0733 694.501 86.02C693.475 83.8733 692.961 81.3067 692.961 78.32C692.961 73.4667 694.268 69.64 696.881 66.84C699.588 63.9467 703.088 61.8 707.381 60.4C711.768 58.9067 716.668 57.9733 722.081 57.6C727.588 57.2267 733.095 57.04 738.601 57.04C738.788 56.1067 739.021 54.8 739.301 53.12C739.581 51.3467 739.721 49.8067 739.721 48.5C739.721 46.82 739.255 45.28 738.321 43.88C737.481 42.3867 735.661 41.64 732.861 41.64C729.595 41.64 727.168 42.62 725.581 44.58C724.088 46.4467 723.108 48.7333 722.641 51.44H702.201L704.861 38.98ZM737.061 63.62H734.541C731.835 63.62 729.501 63.9933 727.541 64.74C725.675 65.3933 724.135 66.28 722.921 67.4C721.801 68.52 720.961 69.78 720.401 71.18C719.841 72.58 719.561 73.98 719.561 75.38C719.561 77.62 720.121 79.3 721.241 80.42C722.455 81.54 723.855 82.1 725.441 82.1C727.401 82.1 729.315 81.4 731.181 80C733.141 78.6 734.355 76.7333 734.821 74.4L737.061 63.62Z" />
              <path d="M809.547 42.76C811.507 40.8933 813.701 39.1667 816.127 37.58C818.274 36.2733 820.794 35.06 823.687 33.94C826.581 32.82 829.801 32.26 833.347 32.26C838.201 32.26 842.214 33.52 845.387 36.04C848.561 38.4667 850.147 41.8267 850.147 46.12C850.147 47.3333 850.007 48.8267 849.727 50.6C849.447 52.28 849.121 54.0533 848.747 55.92C848.374 57.7867 847.954 59.7 847.487 61.66C847.114 63.5267 846.787 65.2067 846.507 66.7L840.627 94H812.207L819.907 57.46C820.094 56.2467 820.327 55.0333 820.607 53.82C820.887 52.5133 821.027 51.3467 821.027 50.32C821.027 48.92 820.654 47.8 819.907 46.96C819.254 46.0267 818.227 45.56 816.827 45.56C815.147 45.56 813.514 46.1667 811.927 47.38C810.434 48.5933 809.267 49.62 808.427 50.46L799.187 94H770.627L783.367 33.8H806.187L808.707 42.76H809.547Z" />
            </mask>
            <motion.path
              d="M64.16 30.86C64.44 29.46 64.58 27.5467 64.58 25.12C64.58 23.72 64.4867 22.3667 64.3 21.06C64.1134 19.66 63.7867 18.4467 63.32 17.42C62.8534 16.3 62.1534 15.46 61.22 14.9C60.2867 14.2467 59.0734 13.92 57.58 13.92C55.9 13.92 54.36 14.2933 52.96 15.04C51.56 15.7867 50.3 16.7667 49.18 17.98C48.1534 19.1 47.3134 20.4533 46.66 22.04C46.1 23.5333 45.82 25.12 45.82 26.8C45.82 29.2267 46.4267 31.0933 47.64 32.4C48.9467 33.7067 50.6267 34.78 52.68 35.62C54.7334 36.46 57.0667 37.16 59.68 37.72C62.2934 38.28 65 38.9333 67.8 39.68C70.1334 40.3333 72.4667 41.1733 74.8 42.2C77.1334 43.2267 79.1867 44.6267 80.96 46.4C82.8267 48.08 84.32 50.32 85.44 53.12C86.56 55.8267 87.12 59.2333 87.12 63.34C87.12 69.22 85.9534 74.1667 83.62 78.18C81.2867 82.1933 78.0667 85.46 73.96 87.98C69.8534 90.5 64.9534 92.32 59.26 93.44C53.66 94.56 47.5467 95.12 40.92 95.12C34.2 95.12 28.6934 94.7 24.4 93.86C20.2 92.9267 16.8867 91.9467 14.46 90.92C11.5667 89.7067 9.42002 88.3067 8.02002 86.72L12.78 67.54H37.42C37.3267 68.38 37.2334 69.5467 37.14 71.04C37.0467 72.44 37 73.56 37 74.4C37 75.52 37.14 76.6867 37.42 77.9C37.7 79.1133 38.12 80.2333 38.68 81.26C39.3334 82.2867 40.22 83.1267 41.34 83.78C42.46 84.4333 43.86 84.76 45.54 84.76C47.4067 84.76 49.04 84.34 50.44 83.5C51.9334 82.66 53.1467 81.6333 54.08 80.42C55.1067 79.1133 55.8534 77.7133 56.32 76.22C56.88 74.6333 57.16 73.0933 57.16 71.6C57.16 69.5467 56.6467 67.82 55.62 66.42C54.6867 65.02 53.38 63.8533 51.7 62.92C50.02 61.8933 48.06 61.0533 45.82 60.4C43.6734 59.6533 41.4334 58.9067 39.1 58.16C36.86 57.5067 34.48 56.7133 31.96 55.78C29.5334 54.8467 27.2934 53.54 25.24 51.86C23.1867 50.18 21.46 48.08 20.06 45.56C18.7534 42.9467 18.1 39.6333 18.1 35.62C18.1 29.6467 19.5934 24.6533 22.58 20.64C25.66 16.5333 29.4867 13.22 34.06 10.7C38.7267 8.18 43.8134 6.40667 49.32 5.38C54.8267 4.26 60.0534 3.7 65 3.7C71.5334 3.7 77.1334 4.49333 81.8 6.08C86.56 7.57333 90.1534 9.34666 92.58 11.4L87.4 30.86H64.16Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M143.388 33.8H171.948L159.068 94H136.388L133.868 85.04H133.028C130.601 87.9333 127.288 90.36 123.088 92.32C118.981 94.1867 114.828 95.12 110.628 95.12C105.028 95.12 100.641 93.72 97.468 90.92C94.2947 88.0267 92.708 84.2933 92.708 79.72C92.708 77.3867 93.0813 74.4933 93.828 71.04C94.668 67.4933 95.4147 64.18 96.068 61.1L101.948 33.8H130.368L123.368 66.56C123.181 67.3067 122.995 68.1933 122.808 69.22C122.621 70.2467 122.435 71.2733 122.248 72.3C122.061 73.2333 121.875 74.1667 121.688 75.1C121.595 75.94 121.548 76.64 121.548 77.2C121.548 78.6 121.828 79.8133 122.388 80.84C123.041 81.7733 124.161 82.24 125.748 82.24C127.428 82.24 129.015 81.68 130.508 80.56C132.001 79.44 133.168 78.3667 134.008 77.34L143.388 33.8Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M195.183 117.52H166.623L184.263 33.8H207.083L209.603 42.76H210.443C213.803 39.2133 217.536 36.6933 221.643 35.2C225.843 33.6133 229.949 32.82 233.963 32.82C237.229 32.82 239.936 33.3333 242.083 34.36C244.323 35.2933 246.096 36.6 247.403 38.28C248.709 39.96 249.643 41.9667 250.203 44.3C250.763 46.6333 251.043 49.1067 251.043 51.72C251.043 53.0267 250.949 54.9867 250.763 57.6C250.576 60.2133 250.156 63.1533 249.503 66.42C248.849 69.5933 247.916 72.9067 246.703 76.36C245.489 79.72 243.856 82.8 241.803 85.6C239.843 88.4 237.323 90.6867 234.243 92.46C231.256 94.2333 227.663 95.12 223.463 95.12C221.129 95.12 218.843 94.84 216.603 94.28C214.456 93.72 212.496 92.9733 210.723 92.04C208.949 91.1067 207.363 90.0333 205.963 88.82C204.656 87.5133 203.676 86.2067 203.023 84.9H202.183L195.183 117.52ZM210.023 81.54C212.263 81.54 214.129 80.3733 215.623 78.04C217.116 75.6133 218.329 72.8133 219.263 69.64C220.196 66.3733 220.849 63.1533 221.223 59.98C221.689 56.7133 221.923 54.2867 221.923 52.7C221.923 50.8333 221.596 49.2933 220.943 48.08C220.383 46.8667 219.309 46.26 217.723 46.26C215.949 46.26 214.269 46.9133 212.683 48.22C211.096 49.4333 209.929 50.5067 209.183 51.44L203.723 77.06C204.469 78.0867 205.356 79.1133 206.383 80.14C207.409 81.0733 208.623 81.54 210.023 81.54Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M285.34 65.86C284.967 67.9133 284.687 69.8733 284.5 71.74C284.407 73.6067 284.36 75.2867 284.36 76.78C284.36 77.62 284.407 78.5533 284.5 79.58C284.594 80.6067 284.78 81.5867 285.06 82.52C285.434 83.36 285.9 84.1067 286.46 84.76C287.114 85.32 288 85.6 289.12 85.6C289.96 85.6 290.894 85.32 291.92 84.76C293.04 84.2 294.114 83.4067 295.14 82.38C296.26 81.3533 297.287 80.0933 298.22 78.6C299.247 77.1067 300.04 75.4267 300.6 73.56H323.56L319.92 88.54C318.054 89.7533 315.907 90.78 313.48 91.62C311.054 92.46 308.487 93.16 305.78 93.72C303.074 94.1867 300.32 94.5133 297.52 94.7C294.72 94.98 292.06 95.12 289.54 95.12C284.874 95.12 280.534 94.7 276.52 93.86C272.507 93.02 269.007 91.5733 266.02 89.52C263.034 87.4667 260.654 84.76 258.88 81.4C257.2 77.9467 256.36 73.7 256.36 68.66C256.36 64.0867 257.06 59.6067 258.46 55.22C259.954 50.8333 262.38 46.96 265.74 43.6C269.194 40.1467 273.767 37.3933 279.46 35.34C285.247 33.2867 292.434 32.26 301.02 32.26C310.354 32.26 317.354 33.7067 322.02 36.6C326.78 39.4933 329.16 44.02 329.16 50.18C329.16 52.7 328.787 55.4533 328.04 58.44C327.294 61.3333 326.174 63.8067 324.68 65.86H285.34ZM303.96 49.2C303.96 46.3067 303.494 44.3467 302.56 43.32C301.627 42.2933 300.507 41.78 299.2 41.78C297.707 41.78 296.307 42.2933 295 43.32C293.787 44.2533 292.667 45.56 291.64 47.24C290.614 48.8267 289.68 50.6933 288.84 52.84C288 54.8933 287.3 57.0867 286.74 59.42H302.7C302.887 58.3 303.074 57.1333 303.26 55.92C303.447 54.8933 303.587 53.7733 303.68 52.56C303.867 51.3467 303.96 50.2267 303.96 49.2Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M342.723 33.8H365.543L367.643 44.3H368.623C370.77 40.94 373.523 38.0933 376.883 35.76C380.243 33.4267 384.676 32.26 390.183 32.26C390.556 32.26 391.116 32.3067 391.863 32.4C392.703 32.4 393.59 32.54 394.523 32.82C395.55 33.0067 396.576 33.3333 397.603 33.8C398.723 34.1733 399.796 34.7333 400.823 35.48L394.663 64.32H379.403C379.216 58.5333 378.703 54.52 377.863 52.28C377.023 49.9467 375.67 48.78 373.803 48.78C372.87 48.78 371.843 49.0133 370.723 49.48C369.696 49.8533 368.623 50.74 367.503 52.14L358.543 94H329.983L342.723 33.8Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M476.759 94H446.519L454.919 54.38H437.699L429.299 94H399.059L417.959 5.1H448.339L440.079 43.74H457.159L465.419 5.1H495.939L476.759 94Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M544.521 33.8H573.081L560.201 94H537.521L535.001 85.04H534.161C531.734 87.9333 528.421 90.36 524.221 92.32C520.114 94.1867 515.961 95.12 511.761 95.12C506.161 95.12 501.774 93.72 498.601 90.92C495.427 88.0267 493.841 84.2933 493.841 79.72C493.841 77.3867 494.214 74.4933 494.961 71.04C495.801 67.4933 496.547 64.18 497.201 61.1L503.081 33.8H531.501L524.501 66.56C524.314 67.3067 524.127 68.1933 523.941 69.22C523.754 70.2467 523.567 71.2733 523.381 72.3C523.194 73.2333 523.007 74.1667 522.821 75.1C522.727 75.94 522.681 76.64 522.681 77.2C522.681 78.6 522.961 79.8133 523.521 80.84C524.174 81.7733 525.294 82.24 526.881 82.24C528.561 82.24 530.147 81.68 531.641 80.56C533.134 79.44 534.301 78.3667 535.141 77.34L544.521 33.8Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M611.715 42.76C613.675 40.8933 615.869 39.1667 618.295 37.58C620.442 36.2733 623.009 35.06 625.995 33.94C628.982 32.82 632.342 32.26 636.075 32.26C640.555 32.26 643.869 33.2867 646.015 35.34C648.255 37.3933 649.515 39.9133 649.795 42.9H650.635C652.782 40.94 655.115 39.1667 657.635 37.58C659.782 36.2733 662.302 35.06 665.195 33.94C668.089 32.82 671.169 32.26 674.435 32.26C679.289 32.26 683.209 33.6133 686.195 36.32C689.275 38.9333 690.815 42.34 690.815 46.54C690.815 48.6867 690.442 51.5333 689.695 55.08C688.949 58.6267 688.109 62.5 687.175 66.7L681.295 94H653.715L661.275 57.46C661.555 56.06 661.835 54.7067 662.115 53.4C662.395 52.0933 662.535 51.02 662.535 50.18C662.535 48.8733 662.162 47.8 661.415 46.96C660.669 46.0267 659.595 45.56 658.195 45.56C656.422 45.56 654.742 46.2133 653.155 47.52C651.662 48.7333 650.495 49.76 649.655 50.6L640.555 94H614.375L622.075 57.46C622.262 56.2467 622.495 55.0333 622.775 53.82C623.055 52.5133 623.195 51.3467 623.195 50.32C623.195 48.92 622.822 47.8 622.075 46.96C621.422 46.0267 620.395 45.56 618.995 45.56C617.315 45.56 615.682 46.1667 614.095 47.38C612.602 48.5933 611.435 49.62 610.595 50.46L601.355 94H572.795L585.535 33.8H608.355L610.875 42.76H611.715Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M704.861 38.98C709.621 36.6467 714.475 34.9667 719.421 33.94C724.461 32.82 730.061 32.26 736.221 32.26C742.195 32.26 747.141 32.7267 751.061 33.66C754.981 34.5933 758.108 35.9467 760.441 37.72C762.775 39.4933 764.408 41.5933 765.341 44.02C766.275 46.4467 766.741 49.2 766.741 52.28C766.741 54.0533 766.601 55.9667 766.321 58.02C766.135 60.0733 765.901 61.8 765.621 63.2L759.041 94H736.501L733.981 85.04H733.141C730.155 88.3067 726.655 90.8267 722.641 92.6C718.721 94.28 714.801 95.12 710.881 95.12C708.641 95.12 706.448 94.7933 704.301 94.14C702.155 93.4867 700.241 92.5067 698.561 91.2C696.881 89.8 695.528 88.0733 694.501 86.02C693.475 83.8733 692.961 81.3067 692.961 78.32C692.961 73.4667 694.268 69.64 696.881 66.84C699.588 63.9467 703.088 61.8 707.381 60.4C711.768 58.9067 716.668 57.9733 722.081 57.6C727.588 57.2267 733.095 57.04 738.601 57.04C738.788 56.1067 739.021 54.8 739.301 53.12C739.581 51.3467 739.721 49.8067 739.721 48.5C739.721 46.82 739.255 45.28 738.321 43.88C737.481 42.3867 735.661 41.64 732.861 41.64C729.595 41.64 727.168 42.62 725.581 44.58C724.088 46.4467 723.108 48.7333 722.641 51.44H702.201L704.861 38.98ZM737.061 63.62H734.541C731.835 63.62 729.501 63.9933 727.541 64.74C725.675 65.3933 724.135 66.28 722.921 67.4C721.801 68.52 720.961 69.78 720.401 71.18C719.841 72.58 719.561 73.98 719.561 75.38C719.561 77.62 720.121 79.3 721.241 80.42C722.455 81.54 723.855 82.1 725.441 82.1C727.401 82.1 729.315 81.4 731.181 80C733.141 78.6 734.355 76.7333 734.821 74.4L737.061 63.62Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
            <motion.path
              d="M809.547 42.76C811.507 40.8933 813.701 39.1667 816.127 37.58C818.274 36.2733 820.794 35.06 823.687 33.94C826.581 32.82 829.801 32.26 833.347 32.26C838.201 32.26 842.214 33.52 845.387 36.04C848.561 38.4667 850.147 41.8267 850.147 46.12C850.147 47.3333 850.007 48.8267 849.727 50.6C849.447 52.28 849.121 54.0533 848.747 55.92C848.374 57.7867 847.954 59.7 847.487 61.66C847.114 63.5267 846.787 65.2067 846.507 66.7L840.627 94H812.207L819.907 57.46C820.094 56.2467 820.327 55.0333 820.607 53.82C820.887 52.5133 821.027 51.3467 821.027 50.32C821.027 48.92 820.654 47.8 819.907 46.96C819.254 46.0267 818.227 45.56 816.827 45.56C815.147 45.56 813.514 46.1667 811.927 47.38C810.434 48.5933 809.267 49.62 808.427 50.46L799.187 94H770.627L783.367 33.8H806.187L808.707 42.76H809.547Z"
              stroke="#F50D0D"
              strokeWidth="6"
              mask="url(#path-1-outside-1)"
              variants={pathVariants}
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0.729309"
              y="0.699997"
              width="856.418"
              height="127.82"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </motion.svg>
        <button type="button" className="ui button">
          <Link activeclassName="active" to="gamelist" spy={true} smooth={true}>
            Explore
          </Link>
        </button>
      </div>
    );
  }
}
