import React from 'react'

/* tslint:disable:max-line-length */

interface Prop {
  className?: string,
  color: string
}

export const MainBannerSvg: React.SFC<Prop> = ({
  className = '',
  color
}) => (
  <svg
    className={className}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 1293 591'
    aria-labelledby='title'
  >
    <title id='title'>Naver Logo Icon</title>
    <g fill='none'>
      <g stroke={color}>
        <path d='M117.87 180.63L295.5 3 588 295.5l-43.722 43.721M62.754 355.255L3 295.5l60.524-60.523M469.012 414.488L295.5 588 121.485 413.986'/>
        <path d='M117.54 180.302l212.393-166.06L576.76 329.933l-24.937 19.497M75.28 339.137l-61.039-78.07 45.635-35.68M468.837 414.313L261.067 576.76 129.878 408.97'/>
      </g>
      <path d='M1371 296.5H323' stroke={color}/>
      <g fill={color}>
        <path d='M88.835 236.652c-3.665-2.043-6.553-4.864-8.663-8.463-2.11-3.599-3.165-7.64-3.165-12.129 0-4.487 1.055-8.53 3.165-12.128 2.11-3.598 4.998-6.419 8.663-8.464 3.666-2.043 7.786-3.065 12.362-3.065 3.377 0 6.486.545 9.33 1.633 2.843 1.089 5.265 2.7 7.264 4.832l-2.133 2.198c-3.73-3.686-8.508-5.531-14.328-5.531-3.909 0-7.463.89-10.662 2.666-3.198 1.777-5.708 4.231-7.53 7.364-1.823 3.132-2.733 6.63-2.733 10.495 0 3.866.91 7.364 2.733 10.496 1.822 3.132 4.332 5.587 7.53 7.364 3.2 1.778 6.753 2.665 10.662 2.665 5.776 0 10.551-1.865 14.328-5.597l2.133 2.199c-2 2.132-4.431 3.755-7.298 4.865-2.865 1.111-5.963 1.666-9.296 1.666-4.576 0-8.696-1.022-12.362-3.066M158.574 233.92c3.154-1.776 5.642-4.231 7.464-7.364 1.821-3.131 2.732-6.63 2.732-10.496 0-3.865-.91-7.364-2.732-10.495-1.822-3.133-4.31-5.587-7.464-7.364-3.155-1.777-6.686-2.666-10.595-2.666-3.91 0-7.454.89-10.63 2.666-3.176 1.777-5.675 4.231-7.497 7.364-1.822 3.131-2.732 6.63-2.732 10.495 0 3.866.91 7.365 2.732 10.496 1.822 3.133 4.32 5.588 7.497 7.364 3.176 1.778 6.72 2.666 10.63 2.666 3.91 0 7.44-.888 10.595-2.666m-22.99 2.7c-3.688-2.067-6.587-4.9-8.697-8.498-2.11-3.598-3.166-7.619-3.166-12.062 0-4.441 1.055-8.462 3.166-12.061 2.11-3.599 5.009-6.431 8.697-8.497 3.686-2.066 7.818-3.099 12.395-3.099 4.575 0 8.707 1.023 12.395 3.066 3.687 2.044 6.586 4.865 8.696 8.463 2.11 3.598 3.165 7.642 3.165 12.128 0 4.488-1.056 8.53-3.165 12.129-2.11 3.598-5.01 6.42-8.696 8.463-3.688 2.045-7.82 3.066-12.395 3.066-4.577 0-8.709-1.033-12.395-3.099M222.016 192.736v46.648h-2.8l-31.787-40.516v40.516h-3.399v-46.648h2.866l31.72 40.518v-40.518zM276.26 192.736v46.648h-2.799l-31.787-40.516v40.516h-3.399v-46.648h2.866l31.72 40.518v-40.518zM324.708 236.32v3.065H292.52v-46.65h31.188v3.067h-27.79v18.392h24.858v3h-24.857v19.125zM344.2 236.652c-3.666-2.043-6.553-4.864-8.664-8.463-2.11-3.599-3.164-7.64-3.164-12.129 0-4.487 1.054-8.53 3.164-12.128 2.11-3.598 4.998-6.419 8.664-8.464 3.665-2.043 7.786-3.065 12.361-3.065 3.377 0 6.487.545 9.33 1.633 2.843 1.089 5.265 2.7 7.264 4.832l-2.132 2.198c-3.731-3.686-8.508-5.531-14.328-5.531-3.91 0-7.463.89-10.663 2.666-3.198 1.777-5.708 4.231-7.53 7.364-1.822 3.132-2.733 6.63-2.733 10.495 0 3.866.91 7.364 2.733 10.496 1.822 3.132 4.332 5.587 7.53 7.364 3.2 1.778 6.753 2.665 10.663 2.665 5.775 0 10.55-1.865 14.328-5.597l2.132 2.199c-1.999 2.132-4.431 3.755-7.298 4.865-2.864 1.111-5.963 1.666-9.296 1.666-4.575 0-8.696-1.022-12.361-3.066M392.88 195.802h-16.793v-3.066h36.985v3.066H396.28v43.582h-3.398zM90.402 275.77H73.609v-3.065h36.984v3.066H93.8v43.582h-3.398zM156.975 272.705v46.648h-3.4v-22.191h-31.187v22.191h-3.399v-46.648h3.399v21.459h31.187v-21.459zM205.422 316.288v3.066h-32.188v-46.65h31.188v3.067h-27.79v18.392h24.858v3h-24.857v19.125zM109.594 377.73c2.621-2.176 3.932-5.287 3.932-9.33 0-4.042-1.311-7.164-3.932-9.362-2.622-2.2-6.42-3.3-11.395-3.3h-13.33v25.257H98.2c4.975 0 8.773-1.087 11.395-3.265m2.399-20.892c3.333 2.777 4.998 6.63 4.998 11.562 0 4.888-1.665 8.72-4.998 11.496-3.332 2.777-7.93 4.165-13.794 4.165h-13.33v15.26h-3.398v-46.648H98.2c5.863 0 10.462 1.389 13.794 4.165M142.848 383.261v16.06h-3.4v-16.06l-18.792-30.588h3.732l16.86 27.456 16.86-27.456h3.532zM178.835 355.738H162.04v-3.065h36.985v3.065h-16.793v43.584h-3.398zM245.408 352.673v46.648h-3.4v-22.19H210.82v22.19h-3.398v-46.648h3.398v21.458h31.188v-21.458zM292.055 393.857c3.154-1.776 5.642-4.232 7.464-7.364 1.821-3.132 2.732-6.63 2.732-10.495 0-3.866-.91-7.365-2.732-10.496-1.822-3.132-4.31-5.587-7.464-7.364-3.155-1.777-6.686-2.666-10.596-2.666s-7.453.889-10.63 2.666c-3.176 1.777-5.675 4.232-7.496 7.364-1.822 3.131-2.732 6.63-2.732 10.496 0 3.864.91 7.363 2.732 10.495 1.821 3.132 4.32 5.588 7.497 7.364 3.176 1.777 6.72 2.665 10.63 2.665 3.909 0 7.44-.888 10.595-2.665m-22.99 2.699c-3.688-2.067-6.587-4.898-8.698-8.497-2.11-3.598-3.165-7.619-3.165-12.061 0-4.443 1.055-8.464 3.165-12.062 2.111-3.599 5.01-6.432 8.698-8.497 3.686-2.066 7.818-3.099 12.394-3.099 4.575 0 8.708 1.022 12.396 3.066 3.686 2.044 6.586 4.864 8.696 8.462 2.11 3.6 3.165 7.643 3.165 12.13 0 4.487-1.056 8.529-3.165 12.128-2.11 3.598-5.01 6.42-8.696 8.463-3.688 2.045-7.82 3.066-12.396 3.066-4.576 0-8.708-1.033-12.394-3.1M355.497 352.673v46.648h-2.8l-31.787-40.517v40.517h-3.399v-46.648h2.866l31.72 40.518v-40.518zM371.756 399.322h3.399v-46.649h-3.399zM393.915 397.889c-3.088-1.177-5.499-2.7-7.231-4.565l1.534-2.533c1.641 1.733 3.853 3.144 6.63 4.232 2.776 1.09 5.698 1.633 8.763 1.633 4.442 0 7.798-.843 10.063-2.532 2.266-1.689 3.398-3.888 3.398-6.598 0-2.088-.6-3.753-1.799-4.998-1.2-1.243-2.688-2.2-4.465-2.865-1.777-.667-4.176-1.355-7.197-2.066-3.422-.844-6.165-1.666-8.23-2.466a13.143 13.143 0 0 1-5.265-3.698c-1.444-1.667-2.165-3.9-2.165-6.698 0-2.265.6-4.342 1.799-6.231 1.2-1.887 3.032-3.387 5.498-4.499 2.465-1.11 5.542-1.665 9.23-1.665 2.575 0 5.108.378 7.596 1.133 2.488.756 4.642 1.777 6.464 3.065l-1.266 2.732a21.611 21.611 0 0 0-6.163-2.932c-2.245-.666-4.455-1-6.632-1-4.31 0-7.575.867-9.796 2.6-2.222 1.732-3.332 3.977-3.332 6.73 0 2.089.6 3.756 1.8 4.998 1.2 1.244 2.688 2.2 4.464 2.866 1.777.666 4.199 1.378 7.264 2.132 3.42.845 6.153 1.667 8.197 2.466 2.043.8 3.788 2.01 5.231 3.632 1.443 1.622 2.166 3.81 2.166 6.564 0 2.266-.611 4.332-1.832 6.198-1.223 1.866-3.1 3.355-5.632 4.464-2.533 1.112-5.642 1.667-9.329 1.667-3.422 0-6.676-.589-9.763-1.766M440.263 355.738H423.47v-3.065h36.984v3.065h-16.793v43.584h-3.398zM494.108 383.328l-12.262-26.923-12.195 26.923h24.457zm1.267 2.866h-27.057l-5.931 13.127h-3.665l21.458-46.648h3.399l21.458 46.648h-3.665l-5.997-13.127zM516 397.889c-3.089-1.177-5.5-2.7-7.231-4.565l1.533-2.533c1.642 1.733 3.853 3.144 6.63 4.232 2.777 1.09 5.698 1.633 8.763 1.633 4.442 0 7.798-.843 10.063-2.532 2.266-1.689 3.399-3.888 3.399-6.598 0-2.088-.6-3.753-1.8-4.998-1.199-1.243-2.688-2.2-4.465-2.865-1.776-.667-4.176-1.355-7.197-2.066-3.421-.844-6.164-1.666-8.23-2.466a13.143 13.143 0 0 1-5.264-3.698c-1.444-1.667-2.166-3.9-2.166-6.698 0-2.265.6-4.342 1.8-6.231 1.199-1.887 3.031-3.387 5.497-4.499 2.466-1.11 5.542-1.665 9.23-1.665 2.575 0 5.108.378 7.596 1.133 2.489.756 4.642 1.777 6.465 3.065l-1.266 2.732a21.611 21.611 0 0 0-6.164-2.932c-2.245-.666-4.455-1-6.631-1-4.31 0-7.575.867-9.796 2.6-2.222 1.732-3.333 3.977-3.333 6.73 0 2.089.6 3.756 1.8 4.998 1.2 1.244 2.688 2.2 4.465 2.866 1.776.666 4.198 1.378 7.263 2.132 3.42.845 6.154 1.667 8.197 2.466 2.043.8 3.788 2.01 5.232 3.632 1.443 1.622 2.166 3.81 2.166 6.564 0 2.266-.612 4.332-1.833 6.198-1.223 1.866-3.1 3.355-5.631 4.464-2.533 1.112-5.643 1.667-9.33 1.667-3.421 0-6.676-.589-9.762-1.766M269.27 290.653l11.605 4.847-11.605 4.847-4.848 11.606-4.848-11.606-11.606-4.847 11.606-4.847 4.848-11.606z'/>
        <path d='M284.102 373.344l6.555 2.737-6.555 2.738-2.738 6.556-2.738-6.556-6.556-2.738 6.556-2.737 2.738-6.556zM150.864 213.417l7.151 2.987-7.151 2.988-2.987 7.15-2.987-7.15-7.151-2.988 7.151-2.987 2.987-7.15z'/>
      </g>
    </g>
  </svg>
)