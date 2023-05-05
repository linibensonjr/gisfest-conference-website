import { TSVGProps } from '@/config/types';

const VerifiedIcon = ({
	width,
	height,
	strokeWidth,
	strokeColor = 'currentColor',
}: TSVGProps) => (
	<svg
		width={width}
		height={height}
		fill="none"
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g>
			<path
				d="M7.014 1.74934C7.13896 1.61206 7.29121 1.50239 7.46099 1.42735C7.63078 1.35231 7.81437 1.31355 8 1.31355C8.18563 1.31355 8.36922 1.35231 8.53901 1.42735C8.70879 1.50239 8.86104 1.61206 8.986 1.74934L9.666 2.496C9.79803 2.64095 9.9604 2.75499 10.1415 2.83001C10.3227 2.90502 10.5181 2.93916 10.714 2.93L11.7227 2.88334C11.908 2.8746 12.0932 2.90466 12.2662 2.97157C12.4393 3.03848 12.5965 3.14079 12.7278 3.27193C12.859 3.40308 12.9615 3.56018 13.0286 3.73319C13.0957 3.9062 13.1259 4.09131 13.1173 4.27667L13.07 5.286C13.0608 5.48185 13.095 5.67731 13.17 5.85846C13.245 6.0396 13.3591 6.20197 13.504 6.334L14.2507 7.014C14.3879 7.13896 14.4976 7.29121 14.5727 7.461C14.6477 7.63078 14.6865 7.81437 14.6865 8C14.6865 8.18563 14.6477 8.36922 14.5727 8.53901C14.4976 8.7088 14.3879 8.86104 14.2507 8.986L13.504 9.666C13.3591 9.79803 13.245 9.9604 13.17 10.1415C13.095 10.3227 13.0608 10.5182 13.07 10.714L13.1167 11.7227C13.1254 11.908 13.0953 12.0932 13.0284 12.2662C12.9615 12.4393 12.8592 12.5965 12.7281 12.7278C12.5969 12.859 12.4398 12.9615 12.2668 13.0286C12.0938 13.0957 11.9087 13.1259 11.7233 13.1173L10.714 13.07C10.5181 13.0608 10.3227 13.095 10.1415 13.17C9.9604 13.245 9.79803 13.3591 9.666 13.504L8.986 14.2507C8.86104 14.3879 8.70879 14.4976 8.53901 14.5727C8.36922 14.6477 8.18563 14.6865 8 14.6865C7.81437 14.6865 7.63078 14.6477 7.46099 14.5727C7.29121 14.4976 7.13896 14.3879 7.014 14.2507L6.334 13.504C6.20197 13.3591 6.0396 13.245 5.85845 13.17C5.67731 13.095 5.48185 13.0608 5.286 13.07L4.27733 13.1167C4.09198 13.1254 3.90685 13.0954 3.73377 13.0284C3.5607 12.9615 3.4035 12.8592 3.27222 12.7281C3.14095 12.5969 3.0385 12.4398 2.97142 12.2668C2.90434 12.0938 2.87411 11.9087 2.88267 11.7233L2.93 10.714C2.93916 10.5182 2.90502 10.3227 2.83 10.1415C2.75499 9.9604 2.64094 9.79803 2.496 9.666L1.74933 8.986C1.61206 8.86104 1.50239 8.7088 1.42735 8.53901C1.3523 8.36922 1.31354 8.18563 1.31354 8C1.31354 7.81437 1.3523 7.63078 1.42735 7.461C1.50239 7.29121 1.61206 7.13896 1.74933 7.014L2.496 6.334C2.64094 6.20197 2.75499 6.0396 2.83 5.85846C2.90502 5.67731 2.93916 5.48185 2.93 5.286L2.88333 4.27734C2.8746 4.09198 2.90465 3.90685 2.97157 3.73377C3.03848 3.5607 3.14078 3.4035 3.27193 3.27223C3.40308 3.14095 3.56018 3.0385 3.73319 2.97142C3.9062 2.90434 4.09131 2.87411 4.27667 2.88267L5.286 2.93C5.48185 2.93916 5.67731 2.90502 5.85845 2.83001C6.0396 2.75499 6.20197 2.64095 6.334 2.496L7.014 1.74934Z"
				stroke={strokeColor}
				strokeWidth={strokeWidth}
			/>
			<path
				d="M6 8.00001L7.33333 9.33334L10 6.66667"
				stroke={strokeColor}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
	</svg>
);

export default VerifiedIcon;