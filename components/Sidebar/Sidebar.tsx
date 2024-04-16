import Image from "next/image";

export default function Sidebar() {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-full text-white w-14"
        style={{ background: "#1C185BBF" }}
      >
        <div className="p-4 flex flex-col items-center justify-between h-full">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/assets/backicon.png"
              alt="Back Icon"
              width={26}
              height={26}
            />
            <svg
              width="32"
              height="35"
              viewBox="0 0 32 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4064 3.92006C16.456 3.10087 15.1253 3.10087 14.175 3.92006L3.14294 13.4294C2.15292 14.2828 2.69749 16.0415 3.95162 16.0415H5.26366V27.7082C5.26366 29.3191 6.44193 30.6249 7.89541 30.6249H13.1589V21.8749C13.1589 20.264 14.3371 18.9582 15.7906 18.9582C17.2441 18.9582 18.4224 20.264 18.4224 21.8749V30.6249H23.686C25.1394 30.6249 26.3178 29.3191 26.3178 27.7082V16.0415H27.6297C28.8825 16.0415 29.4294 14.2837 28.4384 13.4294L17.4064 3.92006Z"
                fill="white"
              />
            </svg>

            <Image
              src="/assets/textmsg.png"
              alt="Text Message"
              width={30}
              height={30}
            />
            <Image
              src="/assets/calender.png"
              alt="Text Message"
              width={30}
              height={30}
            />
            <Image
              src="/assets/notes.png"
              alt="Text Message"
              width={30}
              height={30}
            />
            <Image
              src="/assets/chart.png"
              alt="Text Message"
              width={30}
              height={30}
            />
            <Image
              src="/assets/image.png"
              alt="Text Message"
              width={30}
              height={30}
            />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Image
              src="/assets/dots.png"
              alt="Text Message"
              width={30}
              height={30}
            />
            <svg
              width="30"
              height="34"
              viewBox="0 0 30 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.229 4C10.1083 3.99983 8.02444 4.55154 6.18416 5.60038C4.34389 6.64921 2.81117 8.15872 1.73811 9.97911C0.665044 11.7995 0.0889327 13.8675 0.066939 15.9779C0.0449452 18.0883 0.577834 20.1678 1.61273 22.0099L0.123382 25.8867C-0.000426155 26.209 -0.031832 26.5592 0.032669 26.8982C0.09717 27.2372 0.255041 27.5517 0.488669 27.8066C0.722298 28.0615 1.0225 28.2468 1.35577 28.3418C1.68905 28.4368 2.0423 28.4378 2.37611 28.3447L7.02938 27.0468C8.67767 27.8219 10.48 28.2183 12.3029 28.2066C14.1259 28.195 15.923 27.7756 17.5611 26.9796C19.1993 26.1836 20.6367 25.0312 21.767 23.6077C22.8973 22.1842 23.6915 20.5261 24.0911 18.7559C24.4906 16.9857 24.4851 15.1488 24.0751 13.381C23.665 11.6132 22.8609 9.9598 21.7221 8.54302C20.5834 7.12624 19.1391 5.98236 17.4963 5.19599C15.8534 4.40962 14.052 4.00088 12.229 4ZM1.93829 16.1034C1.93912 13.8716 2.67249 11.7012 4.02682 9.9223C5.38115 8.14343 7.28229 6.85354 9.44099 6.24889C11.5997 5.64424 13.8978 5.75792 15.9856 6.57263C18.0734 7.38735 19.8366 8.85851 21.007 10.7623C22.1774 12.666 22.6909 14.8982 22.4694 17.1191C22.2478 19.34 21.3033 21.428 19.7796 23.0656C18.256 24.7032 16.2365 25.8006 14.0285 26.1908C11.8204 26.5811 9.54475 26.2428 7.54766 25.2276L7.2221 25.06L1.87093 26.5515L3.68397 21.8293L3.44447 21.4383C2.45684 19.8326 1.93549 17.986 1.93829 16.1034ZM17.7729 33.7931C16.0222 33.795 14.2918 33.4199 12.7006 32.6935C11.1093 31.9671 9.69485 30.9066 8.55428 29.5848C9.62883 29.8745 10.7344 30.0352 11.8473 30.0634C13.5799 31.2813 15.6498 31.9339 17.771 31.931C19.4587 31.931 21.0491 31.5269 22.4523 30.8138L22.7779 30.6462L28.1291 32.1377L26.316 27.4155L26.5555 27.0245C27.5098 25.4715 28.0617 23.6467 28.0617 21.6896C28.0646 19.6219 27.4356 17.6022 26.258 15.8986C26.2426 14.7909 26.095 13.6889 25.8183 12.6158C27.1129 13.7502 28.1495 15.1464 28.859 16.7111C29.5685 18.2757 29.9345 19.973 29.9327 21.6896C29.9327 23.8329 29.3714 25.8476 28.3891 27.5961L29.8766 31.4729C30.0004 31.7952 30.0318 32.1454 29.9673 32.4844C29.9028 32.8234 29.745 33.1379 29.5113 33.3928C29.2777 33.6477 28.9775 33.833 28.6442 33.928C28.3109 34.023 27.9577 34.024 27.6239 33.9309L22.9706 32.633C21.3933 33.3778 19.6289 33.7931 17.7691 33.7931H17.7729Z"
                fill="#1C185B"
              />
              <ellipse
                cx="22.7966"
                cy="8.54537"
                rx="5.79663"
                ry="5.45455"
                fill="#34C759"
              />
              <path
                d="M22.8117 11.0597C22.5106 11.0597 22.2421 11.0043 22.0063 10.8935C21.7719 10.7827 21.5858 10.63 21.4481 10.4354C21.3103 10.2408 21.2385 10.0178 21.2329 9.76634H22.1278C22.1377 9.93537 22.2087 10.0724 22.3408 10.1776C22.4729 10.2827 22.6299 10.3352 22.8117 10.3352C22.9566 10.3352 23.0844 10.3033 23.1952 10.2393C23.3074 10.174 23.3948 10.0838 23.4573 9.96875C23.5212 9.85227 23.5532 9.71875 23.5532 9.56818C23.5532 9.41477 23.5205 9.27983 23.4552 9.16335C23.3912 9.04687 23.3025 8.95597 23.1888 8.89062C23.0752 8.82528 22.9452 8.7919 22.7989 8.79048C22.6711 8.79048 22.5468 8.81676 22.426 8.86932C22.3067 8.92187 22.2137 8.99361 22.1469 9.08452L21.3266 8.9375L21.5333 6.63636H24.2009V7.39062H22.2939L22.181 8.48366H22.2066C22.2833 8.37571 22.3991 8.28622 22.5539 8.2152C22.7087 8.14418 22.882 8.10866 23.0738 8.10866C23.3366 8.10866 23.5709 8.17045 23.7769 8.29403C23.9829 8.41761 24.1455 8.58736 24.2648 8.80327C24.3841 9.01776 24.4431 9.26491 24.4417 9.54474C24.4431 9.83878 24.3749 10.1001 24.2371 10.3288C24.1008 10.5561 23.9097 10.7351 23.664 10.8658C23.4197 10.995 23.1356 11.0597 22.8117 11.0597Z"
                fill="black"
              />
            </svg>

            <Image
              src="/assets/settings.png"
              alt="Text Message"
              width={30}
              height={30}
            />
            <Image
              src="/assets/module.jpg"
              alt="Profile Picture"
              className="rounded-full"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </>
  );
}