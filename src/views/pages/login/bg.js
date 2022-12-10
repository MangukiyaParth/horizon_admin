import * as React from "react"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={1920}
        height={1080}
        preserveAspectRatio="none"
        {...props}
    >
        <g mask='url("#SvgjsMask1161")' fill="none">
            <path fill="url(#SvgjsLinearGradient1162)" d="M0 0h1920v1080H0z" />
            <path
                d="M724.24 502.72a267.99 267.99 0 1 0 535.98 0 267.99 267.99 0 1 0-535.98 0z"
                fill="rgba(28, 83, 142, 0.4)"
                className="triangle-float2"
            />
            <path
                d="m1364.816 559.273-222.068-94.262-94.262 222.068 222.068 94.262zM1592.716 427.726l-67.364 151.303 218.668-83.939z"
                fill="rgba(28, 83, 142, 0.4)"
                className="triangle-float1"
            />
            <path
                d="M397.479 1064.897c103.533 6.349 215.321-13.845 272.404-100.452 62.05-94.143 58.39-218.061 1.813-315.591-56.38-97.19-161.858-153.98-274.217-153.992-112.38-.012-223.984 53.455-274.315 153.934-46.491 92.811-2.913 198.782 54.222 285.448 50.331 76.345 128.821 125.056 220.093 130.653"
                fill="rgba(28, 83, 142, 0.4)"
                className="triangle-float3"
            />
            <path
                d="M516.98 345.81a248.01 248.01 0 1 0 496.02 0 248.01 248.01 0 1 0-496.02 0z"
                fill="rgba(28, 83, 142, 0.4)"
                className="triangle-float2"
            />
            <path
                d="M620.56 788.725c50.005.719 99.386-19.615 125.313-62.38 26.839-44.27 25.513-99.657.358-144.905-25.908-46.603-72.45-83.76-125.671-80.506-49.457 3.023-78.152 50.753-101.604 94.4-21.764 40.506-39.009 86.79-17.622 127.497 22.636 43.084 70.563 65.195 119.226 65.894M1282.357 511.069 1160.45 299.455l-109.952 182.99zM701.056 207.438l-174.979 93.037 268.016 81.94z"
                fill="rgba(28, 83, 142, 0.4)"
                className="triangle-float3"
            />
            <path
                d="m517.468 535.013 245.123 178.45 32.3-263.068z"
                fill="rgba(28, 83, 142, 0.4)"
                className="triangle-float3"
            />
            <path
                d="m1725.46 370.028-117.343-187.786-70.444 305.128z"
                fill="rgba(28, 83, 142, 0.4)"
                className="triangle-float2"
            />
        </g>
        <defs>
            <linearGradient
                x1="10.94%"
                y1="-19.44%"
                x2="89.06%"
                y2="119.44%"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient1162"
            >
                <stop stopColor="#0e2a47" offset={0} />
                <stop stopColor="#00459e" offset={1} />
            </linearGradient>
            <style>
                {
                    "@keyframes float1{0%,to{transform:translate(0,0)}50%{transform:translate(-10px,0)}}@keyframes float2{0%,to{transform:translate(0,0)}50%{transform:translate(-5px,-5px)}}@keyframes float3{0%,to{transform:translate(0,0)}50%{transform:translate(0,-10px)}}.triangle-float1{animation:float1 5s infinite}.triangle-float2{animation:float2 4s infinite}.triangle-float3{animation:float3 6s infinite}"
                }
            </style>
            <mask id="SvgjsMask1161">
                <path fill="#fff" d="M0 0h1920v1080H0z" />
            </mask>
        </defs>
    </svg>
)

export default SvgComponent
