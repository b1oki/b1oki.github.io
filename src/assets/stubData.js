let Counters = {
    SocialLinksCounter: 0,
};

/**
 * @return {number}
 */
function UniqueId(counter) {
    return Counters[counter]++;
}

export default {
    'socialLinks': {
        'General': [
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'mailto:me@alexandersobyanin.ru',
                title: 'Send me a email',
                svg: '<svg class="SVGInline-svg" viewBox="0 2 37 30" xmlns="http://www.w3.org/2000/svg"><path d="M17.9864841,17.7442683 L35.9560572,4.24918119 C35.9560572,2.99963608 34.9577476,2 33.7098606,2 L2.26310764,2 C1.01522062,2 0.0169109976,2.99963608 0.0169109976,4.24918119 L17.9864841,17.7442683 Z M17.9864841,21.7844641 L0.0169109976,8.28937702 L0.0777647581,29.7508188 C0.0777647581,31.0003639 1.07607438,32 2.3239614,32 L33.7707144,32 C35.0186014,32 36.016911,31.0003639 36.016911,29.7508188 L35.9560572,8.28937702 L17.9864841,21.7844641 Z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://github.com/b1oki',
                title: 'Visit me on GitHub',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 508c0 232-160 429-375 485v-131c0-41-10-98-52-131 134-20 239-99 239-223 0-51-21-102-58-144 11-47 17-105-4-148-53 5-106 32-145 56-33-8-67-14-105-14s-73 6-106 14c-39-24-91-51-144-56-21 43-16 101-5 148-37 42-57 93-57 144 0 124 105 203 239 223-20 15-32 36-40 57-105 2-189-81-190-81-5-4-12-5-16-2-6 3-9 10-7 16 2 5 44 124 201 172v100c-215-56-375-253-375-485 0-275 223-500 500-500 275 0 500 225 500 500z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://linkedin.com/in/alexandersobyanin',
                title: 'Visit me on LinkedIn',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 277-223 500-500 500s-500-223-500-500 223-500 500-500 500 223 500 500zm-625-240c-1-41-32-73-83-73-50 0-83 32-83 73s32 73 82 73h1c51 0 83-32 83-73zm-21 136h-125v354h125v-354zm458 166c0-114-56-187-146-187-50 0-87 30-104 75l-4-54h-124c1 13 3 83 3 83v271h125v-188c0-50 23-83 62-83 38 0 63 20 63 83v188h125v-188z"></path></svg>'
            }
        ],
        'Video': [
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://youtube.com/user/AlexanderSobyanin',
                title: 'Visit me on YouTube',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 277-223 500-500 500s-500-223-500-500 223-500 500-500 500 223 500 500zm-188 0c0-229 0-229-312-229s-312 0-312 229 0 229 312 229 312 0 312-229zm-395-125l208 125-208 125v-250z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://twitch.tv/b1oki/',
                title: 'Visit me on Twitch',
                svg: '<svg class="SVGInline-svg" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M500,0 C776.142375,0 1000,223.857625 1000,500 C1000,776.142375 776.142375,1000 500,1000 C223.857625,1000 -5.68434189e-14,776.142375 -5.68434189e-14,500 C-5.68434189e-14,223.857625 223.857625,0 500,0 Z M835,206 L230,206 L185,324 L185,797 L348,797 L348,886 L436,886 L525,797 L658,797 L835,620 L835,206 Z M672,693 L510,693 L421,782 L421,693 L288,693 L288,265 L775,265 L775,590 L672,693 Z M510,383 L451,383 L451,560 L510,560 L510,383 Z M672,383 L613,383 L613,560 L672,560 L672,383 Z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://vimeo.com/alexandersobyanin',
                title: 'Visit me on Vimeo',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 277-223 500-500 500s-500-223-500-500 223-500 500-500 500 223 500 500zm-188-138c0-69-43-112-98-112-57 0-155 34-184 146 57-28 95 7 95 48 0 57-89 181-118 181-28 0-50-109-61-181-11-70-14-194-99-194l-206 160 26 27c56-41 73-33 83 0l83 271c13 43 46 125 125 125 91 0 354-290 354-471z"></path></svg>'
            }
        ],
        'Image': [
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://b1oki.deviantart.com',
                title: 'Visit me on DeviantArt',
                svg: '<svg class="SVGInline-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 112.198 112.198" xml:space="preserve"><defs><mask id="deviantart-hole"><rect width="100%" height="100%" fill="white"></rect><polygon points="76.313,35.591 63.781,59.612 76.313,59.612 76.313,75.484 55.524,75.484 48.737,88.497 35.885,88.497 35.885,77.916 49.004,52.772 35.885,52.772 35.885,36.74 57.368,36.74 64.182,23.701 76.313,23.701" fill="black"></polygon></mask></defs><circle cx="56.099" cy="56.099" r="56.098" mask="url(#deviantart-hole)"></circle></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://instagram.com/b1oki',
                title: 'Visit me on Instagram',
                svg: '<svg class="SVGInline-svg" width="1000" height="1001" viewBox="-56 -369 1000 1001" xmlns="http://www.w3.org/2000/svg"><path d="M444 631c276.142 0 500-223.858 500-500S720.142-369 444-369-56-145.142-56 131s223.858 500 500 500zm.406-800.81c-81.586 0-91.816.345-123.857 1.807-31.976 1.46-53.814 6.537-72.922 13.964-19.754 7.677-36.507 17.95-53.208 34.65-16.7 16.7-26.973 33.454-34.65 53.208-7.425 19.108-12.504 40.945-13.962 72.92C144.346 38.78 144 49.01 144 130.595c0 81.585.346 91.815 1.808 123.856 1.458 31.976 6.537 53.814 13.963 72.922 7.677 19.754 17.95 36.507 34.65 53.208 16.7 16.7 33.454 26.973 53.208 34.65 19.108 7.425 40.946 12.504 72.92 13.962C352.59 430.654 362.82 431 444.407 431c81.584 0 91.814-.346 123.856-1.808 31.975-1.458 53.812-6.537 72.92-13.962 19.754-7.677 36.507-17.95 53.21-34.65 16.7-16.7 26.97-33.454 34.648-53.208 7.426-19.108 12.504-40.946 13.963-72.92 1.462-32.042 1.807-42.272 1.807-123.857 0-81.585-.345-91.815-1.807-123.857-1.46-31.975-6.537-53.812-13.963-72.92-7.677-19.754-17.95-36.507-34.65-53.21-16.7-16.7-33.454-26.97-53.208-34.647-19.108-7.426-40.945-12.504-72.92-13.963-32.042-1.462-42.272-1.807-123.856-1.807zm0 54.127c80.21 0 89.712.306 121.39 1.75 29.288 1.337 45.194 6.23 55.78 10.345 14.022 5.45 24.03 11.96 34.54 22.472 10.513 10.51 17.023 20.518 22.472 34.54 4.114 10.586 9.008 26.492 10.344 55.78 1.445 31.678 1.75 41.18 1.75 121.39 0 80.212-.305 89.714-1.75 121.39-1.336 29.29-6.23 45.196-10.344 55.78-5.45 14.023-11.96 24.03-22.472 34.542-10.51 10.513-20.518 17.022-34.54 22.472-10.586 4.114-26.492 9.008-55.78 10.343-31.673 1.447-41.173 1.753-121.39 1.753-80.218 0-89.717-.306-121.39-1.752-29.29-1.334-45.196-6.228-55.78-10.342-14.023-5.45-24.03-11.96-34.542-22.472s-17.022-20.52-22.472-34.54c-4.114-10.586-9.008-26.493-10.343-55.782-1.447-31.676-1.753-41.178-1.753-121.39 0-80.21.306-89.712 1.752-121.39 1.334-29.288 6.228-45.194 10.342-55.78 5.45-14.022 11.96-24.03 22.472-34.54 10.512-10.513 20.52-17.023 34.54-22.472 10.586-4.114 26.493-9.008 55.782-10.344 31.676-1.445 41.178-1.75 121.39-1.75zm0 346.413c-55.304 0-100.136-44.832-100.136-100.135 0-55.304 44.832-100.135 100.136-100.135 55.303 0 100.134 44.83 100.134 100.135 0 55.303-44.83 100.135-100.134 100.135zm0-254.397c-85.198 0-154.263 69.065-154.263 154.262s69.065 154.262 154.263 154.262c85.196 0 154.26-69.065 154.26-154.262S529.603-23.667 444.407-23.667zm196.405-6.095c0 19.91-16.14 36.048-36.048 36.048s-36.048-16.14-36.048-36.048c0-19.91 16.14-36.05 36.048-36.05 19.91 0 36.05 16.14 36.05 36.05z" fill-rule="evenodd"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://pinterest.com/b1oki',
                title: 'Visit me on Pinterest',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 277-223 500-500 500-50 0-97-7-143-21 20-30 41-68 52-106 5-22 34-138 34-138 17 34 69 62 123 62 161 0 269-147 269-342 0-148-126-287-316-287-238 0-357 170-357 312 0 87 32 163 102 191 11 5 22 0 25-12 2-9 8-30 11-40 3-12 1-17-9-28-19-24-32-54-32-98 0-126 95-240 247-240 134 0 207 82 207 193 0 143-64 264-159 264-52 0-91-42-79-95 16-64 44-133 44-178 0-41-22-75-66-75-54 0-97 56-97 130 0 47 17 79 17 79s-56 231-65 273c-9 37-11 80-8 115-177-78-300-254-300-459 0-277 223-500 500-500s500 223 500 500z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://flickr.com/people/b1oki/',
                title: 'Visit me on Flickr',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 277-223 500-500 500s-500-223-500-500 223-500 500-500 500 223 500 500zm-542 0c0-91-75-167-167-167s-166 76-166 167c0 93 74 167 166 167s167-74 167-167zm417 0c0-91-75-167-167-167s-167 76-167 167c0 93 75 167 167 167s167-74 167-167z"></path></svg>'
            }
        ],
        'Sound': [
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://soundcloud.com/alexander-sobyanin',
                title: 'Visit me on SoundCloud',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 276-224 500-500 500s-500-224-500-500 224-500 500-500 500 224 500 500zm-792 21c0-10-5-44-14-71-4-9-11-11-17-11s-13 2-17 11c-9 27-14 61-14 71 0 9 5 43 14 70 4 9 11 11 17 11s13-2 17-11c9-28 14-61 14-70zm108-4c0-13-6-95-16-140-2-6-9-11-15-11s-14 4-16 11c-10 45-16 127-16 140 0 11 7 72 15 98 3 9 9 14 17 14s14-4 17-14c8-26 14-87 14-98zm107-3c0-14-7-151-16-197-1-7-8-12-15-12s-14 5-15 12c-8 46-16 183-16 197s5 66 15 102c2 9 9 13 16 13s14-4 17-13c9-36 14-88 14-102zm448 8c0-57-46-103-103-103-14 0-27 3-40 8-8-93-86-169-181-169-24 0-44 7-64 15-8 3-10 6-10 13v327c0 6 5 11 11 12h284c57 0 103-46 103-103z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://www.last.fm/ru/user/joker01delta',
                title: 'Visit me on LastFM',
                svg: '<svg class="SVGInline-svg" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M500,0 C776.142375,0 1000,223.857625 1000,500 C1000,776.142375 776.142375,1000 500,1000 C223.857625,1000 0,776.142375 0,500 C0,223.857625 223.857625,0 500,0 Z M666,385 C666.25,370.524621 671.25,358.775419 681,350 C690.25,340.776641 701.75,336.276947 715,336 C736.25,336.276947 750,339.276743 757,345 C764,351.275928 771.5,361.025266 779,375 L833,333 C831,331.777253 828.25,328.027507 825,322 C821.25,316.028322 817.75,311.028662 814,307 C810.75,303.029205 807.5,299.529442 805,297 C791.5,284.530461 779,277.030971 767,274 C755,271.031379 738.25,269.031515 717,268 C685.75,267.531616 658,278.530869 634,301 C609,323.527813 596.75,350.275996 597,381 C596.75,385.773585 597.25,390.273279 598,395 C600.25,415.271581 605.5,432.520409 614,447 C622.5,460.518508 631.75,471.767744 642,480 C651.75,488.766589 663,496.016097 676,502 C688,508.015282 700.25,512.764959 712,516 C724.25,519.764484 736,523.514229 748,528 C759,531.513686 769,536.01338 778,541 C786,546.012701 793,552.51226 799,561 C804,568.511173 806.75,578.510493 807,591 C806.75,613.00815 798.75,631.006927 783,645 C766.75,658.005094 747.5,664.754635 725,665 C686.5,664.754635 654,636.756537 628,581 C620.5,565.261394 612.75,547.512599 604,528 C595.75,507.515315 588.75,489.266555 583,473 C577.75,456.268796 570.75,439.019968 562,421 C553.75,403.022413 545.5,386.773517 538,372 C529.5,357.775487 519.5,343.776438 508,330 C495.5,316.778272 482.25,305.779018 468,297 C453.25,288.780173 436,281.780649 416,276 C396,270.781395 373.75,268.031582 349,268 C319.75,268.031582 291.25,274.531141 264,288 C236.25,300.529375 212.25,317.52822 192,339 C171.25,359.525368 155,384.023704 143,412 C131,440.0199 125,468.767947 125,498 C125.5,538.763193 135,577.010596 154,613 C172,649.005705 198.5,678.003735 233,700 C267.5,722.000747 305.25,733 346,733 C417.75,733 471.75,711.751443 508,669 C516.25,659.255009 522.25,649.505672 526,640 L491,576 C483.5,590.759662 472,607.008558 457,625 C434,651.505536 398,664.754635 349,665 C304.5,664.754635 267.75,648.005773 238,615 C208.75,581.010323 194,542.012973 194,498 C194,471.017795 201,445.269544 215,420 C229,395.272939 248.25,375.024315 273,360 C297.25,344.02642 322.75,336.276947 349,336 C371.75,336.276947 391.5,339.02676 409,345 C425.5,350.026013 440,359.025401 452,372 C464,384.023704 474.25,397.522786 483,412 C491.25,426.520817 500,445.019561 509,468 C512,475.517489 517,488.766589 524,507 C531,525.764077 536.5,540.763058 541,552 C544.5,563.761495 550.5,578.010528 558,595 C566.5,612.008218 574,626.507233 581,639 C588,650.505604 596.75,662.754771 607,675 C617.75,687.753074 628.5,698.002377 640,706 C650.5,714.00129 663.25,720.500849 678,726 C692.25,730.50017 707.75,733 724,733 C765.75,733 801.25,719.500917 831,693 C860.25,665.504585 875,631.756877 875,591 C875,523.764212 829.75,477.517353 739,453 C729.75,449.019289 722,446.519458 716,445 C710,443.519662 703.75,440.769849 697,437 C690.75,432.770392 685.25,428.020715 681,423 C676.25,417.021463 672.75,410.271921 670,402 C667.25,392.273143 665.75,386.523534 666,385 Z"></path></svg>'
            }
        ],
        'Movie': [
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://kinopoisk.ru/user/3927461/',
                title: 'Visit me on Kinopoisk',
                svg: '<svg class="SVGInline-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="39.5px" height="39.5px" viewBox="0 0 39.5 39.5" xml:space="preserve"><g><path d="M19.75,0C8.843,0,0,8.842,0,19.75S8.843,39.5,19.75,39.5S39.5,30.658,39.5,19.75S30.657,0,19.75,0z M8.889,24.471 c-2.63-0.012-4.755-2.152-4.745-4.785c0.011-2.63,2.155-4.755,4.785-4.746c2.63,0.013,4.756,2.153,4.745,4.785 C13.663,22.357,11.52,24.48,8.889,24.471z M19.685,35.355c-2.631-0.011-4.755-2.153-4.744-4.783 c0.011-2.631,2.153-4.758,4.784-4.746c2.63,0.011,4.755,2.154,4.746,4.785C24.458,33.242,22.316,35.366,19.685,35.355z M17.667,19.75c0-1.15,0.933-2.083,2.083-2.083c1.15,0,2.083,0.933,2.083,2.083c0,1.15-0.933,2.083-2.083,2.083 C18.6,21.833,17.667,20.9,17.667,19.75z M19.775,13.674c-2.631-0.011-4.755-2.154-4.745-4.785c0.011-2.631,2.153-4.755,4.785-4.744 c2.63,0.01,4.755,2.153,4.744,4.785C24.548,11.559,22.407,13.686,19.775,13.674z M30.57,24.561 c-2.631-0.012-4.756-2.151-4.744-4.785c0.011-2.63,2.154-4.755,4.783-4.743c2.632,0.011,4.757,2.152,4.746,4.782 C35.346,22.445,33.201,24.57,30.57,24.561z"></path></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://imdb.com/user/ur43995851/',
                title: 'Visit me on IMDb',
                svg: '<svg class="SVGInline-svg" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M500,1000 C223.858,1000 0,776.142 0,500 C0,223.858 223.858,0 500,0 C776.142,0 1000,223.858 1000,500 C1000,776.142 776.142,1000 500,1000 Z M211,358 L136,358 L136,639 L211,639 L211,358 Z M372,358 L354,489 L344,418 C340.458304,394.958265 337.4782,375.041867 335,358 L237,358 L237,639 L303,639 L303,453 L331,639 L378,639 L404,449 L404,639 L470,639 L470,358 L372,358 Z M497,639 L588,639 C606.108108,638.997997 619.765956,638.016446 629,636 C637.779506,634.369684 645.262533,631.002363 651,626 C657.320795,621.466295 661.606647,614.734659 664,606 C666.401412,597.623622 668,580.793029 668,556 L668,457 C668,430.440461 666.98317,412.558206 665,404 C663.496612,394.465618 659.428296,386.189541 653,379 C645.988983,371.464275 636.110069,366.275075 623,363 C610.612494,359.82288 589.473615,358 553,358 L497,358 L497,639 Z M572,406 C580.197819,406.002997 585.883845,406.772106 589,409 C591.865077,410.058302 593.785443,412.647305 595,416 C595.705808,419.919886 596,428.172333 596,441 L596,550 C596,568.040421 594.595993,579.440224 592,584 C589.722546,587.902428 582.929749,590 572,590 L572,406 Z M767,358 L694,358 L694,638 L762,638 L767,621 C772.794451,627.793303 779.573093,633.181912 787,637 C794.296864,640.180807 805.375988,642 814,642 C826.004286,642 836.281388,639.129274 845,633 C853.411226,627.023644 859.096474,619.813843 862,612 C863.615235,603.298171 865,590.910666 865,574 L865,495 C865,478.584501 864.416256,467.527407 864,462 C862.813212,457.169002 860.699518,451.709425 857,446 C852.900575,440.861238 847.28842,436.733069 840,434 C832.709835,430.785708 824.10887,429.246391 814,429 C805.229802,429.246391 794.223771,431.065584 787,434 C779.426907,437.503727 772.721358,442.683429 767,449 L767,358 Z M792,498 L792,570 C792,583.552804 791.184924,591.99879 790,596 C788.444601,599.185803 782.147861,601 777,601 C773.110798,601 769.77723,599.185803 768,596 C766.814058,592.487228 766,584.530677 766,572 L766,498 C766,485.703772 766.815076,477.677444 768,475 C769.554381,471.53509 772.592854,470 777,470 C781.554616,470 787.851356,471.53509 789,475 C791.110641,478.93243 791.926735,486.679651 792,498 Z"></path></svg>'
            }
        ],
        'Text': [
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://medium.com/@alexander.sobyanin',
                title: 'Visit me on Medium',
                svg: '<svg class="SVGInline-svg" width="1000" height="1000" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M500 0c276 0 500 224 500 500s-224 500-500 500S0 776 0 500 224 0 500 0zM259.706 352v278.365a32.028 32.028 0 0 1-8.53 27.63L185 738.243v10.582h187.647v-10.581l-66.176-80.247a33.204 33.204 0 0 1-9.118-27.631V389.624l164.706 359.2h19.117l141.471-359.2v286.302c0 7.643 0 9.113-5 14.11l-50.883 49.382V750h247.06v-10.582l-49.118-48.207a14.693 14.693 0 0 1-5.588-14.11V322.899a14.693 14.693 0 0 1 5.588-14.109L815 260.582V250H640.883L516.765 559.524 375.589 250H192.94v10.582l58.824 70.84a24.39 24.39 0 0 1 7.94 20.577z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://ru.wikipedia.org/wiki/%D0%A3%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA:B1oki',
                title: 'Visit me on Wikipedia',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 276-224 500-500 500s-500-224-500-500 224-500 500-500 500 224 500 500zm-173-202h-137l-9 2v13c0 2 4 3 6 4 1 1 4 1 6 1l12 1c14 1 18 4 24 9 5 5 6 14 2 27l-121 315-4-2-77-172c1-3 2-4 2-4l63-129c7-14 14-26 18-31 6-11 9-13 27-14 4 0 5-1 5-5v-13l-1-1s-75-1-109 0v14c0 2-1 3 0 4 2 1 2 1 4 1l5 1c14 1 20 5 22 7 3 5 5 10-3 29l-49 106-43-98c-15-32-18-41 4-43l5-2c5 0 4-1 4-4v-15h-117v15c0 3 3 4 8 5 21 3 20 5 40 48 3 7 12 27 12 27l45 98s6 12 14 32l-67 145-4-1s-102-238-132-317c-3-9-4-15-4-18 0-8 6-13 20-13l20-1c4 0 11-2 11-6v-13l-6-1h-151l-5 1v14c0 3 4 4 9 5 16 1 26 3 31 8s11 16 18 34c37 99 116 275 155 375 11 27 25 31 42-1 17-36 52-115 78-173 24 58 57 137 73 172 12 29 26 32 41 1 38-93 149-372 149-372 5-14 11-24 20-32 9-7 22-12 39-12 4 0 5-2 5-6v-15z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://reddit.com/user/b1oki/',
                title: 'Visit me on Reddit',
                svg: '<svg class="SVGInline-svg" width="1000" height="1000" viewBox="-100 -159 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M400 841c276.142 0 500-223.858 500-500S676.142-159 400-159-100 64.858-100 341s223.858 500 500 500zm268.706-445.62c.73 5.57 1.106 11.064 1.106 16.408 0 101.362-121.274 183.824-270.318 183.824-149.044 0-270.32-82.462-270.32-183.824 0-5.532.413-11.27 1.22-17.1C111.27 380.587 100 358.5 100 334.724c0-41.213 33.525-74.738 74.738-74.738 16.087 0 31.706 5.232 44.568 14.813 46.33-28.18 105.43-44.606 167.53-46.556l47.626-135.32 114.113 27.282C559.337 99.844 580.337 87 603.68 87c34.408 0 62.383 27.994 62.383 62.38 0 34.407-27.994 62.382-62.382 62.382-32.342 0-59.08-24.825-62.1-56.418l-84.074-20.1L424.6 228.77c57.694 3.636 112.425 19.93 155.644 46.35 12.937-9.808 28.725-15.15 45.02-15.15 41.21 0 74.736 33.524 74.736 74.736 0 24.28-11.606 46.613-31.294 60.675zm-532.894-60.655c0 7.48 2.213 14.756 6.225 20.98 9.844-20.868 25.275-40.555 45.32-57.824-4.032-1.386-8.27-2.1-12.62-2.1-21.468 0-38.924 17.476-38.924 38.945zM634 411.788c0-81.62-105.206-148.032-234.506-148.032S164.987 330.17 164.987 411.788c0 81.618 105.207 148.012 234.507 148.012C528.812 559.8 634 493.406 634 411.788zm-318.056 17.568c-26.888 0-48.77-21.862-48.77-48.75 0-26.868 21.882-48.73 48.77-48.73 26.868 0 48.73 21.862 48.73 48.73.02 26.888-21.843 48.75-48.73 48.75zM611.93 298.144c20.176 17.456 35.645 37.35 45.433 58.462 4.406-6.412 6.824-14.006 6.824-21.88 0-21.47-17.456-38.945-38.924-38.945-4.594 0-9.094.808-13.332 2.364zM577.095 149.38c0 14.645 11.925 26.57 26.568 26.57 14.663 0 26.57-11.925 26.57-26.57 0-14.66-11.926-26.567-26.57-26.567-14.643-.02-26.568 11.906-26.568 26.568zm-87.6 318.114c-4.857 0-9.394 1.912-12.657 5.23-.974.94-24.375 23.007-77.812 23.007-52.78 0-74.063-22.05-74.12-22.124-3.392-3.9-8.324-6.15-13.5-6.15-4.255 0-8.38 1.52-11.624 4.294-3.636 3.113-5.85 7.444-6.224 12.225-.375 4.78 1.144 9.412 4.257 13.03.825.976 8.643 9.808 25.162 18.245 21.188 10.82 46.78 16.294 76.07 16.294 29.1 0 54.993-5.38 77.005-16.013 17.044-8.23 25.537-16.817 26.456-17.792 6.732-7.05 6.525-18.338-.487-25.182-3.395-3.262-7.82-5.062-12.526-5.062zm-.563-135.62c-26.886 0-48.767 21.863-48.767 48.732 0 26.888 21.88 48.75 48.768 48.75 26.87 0 48.733-21.862 48.733-48.75.018-26.868-21.844-48.73-48.732-48.73z" fill-rule="evenodd"></path></svg>'
            }
        ],
        'Blog': [
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://sobyaninblog.wordpress.com/',
                title: 'Visit me on WordPress',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M42 299l237 650c-166-82-279-252-279-449 0-72 15-139 42-201zm752 38c19 32 41 75 41 138 0 43-17 92-38 160l-50 167-181-537c30-1 58-5 58-5 27-3 23-42-3-41 0 0-81 7-134 7-49 0-131-7-131-7-27-1-31 39-4 41 0 0 26 4 53 5l77 213-109 329-182-542c30-1 58-5 58-5 27-3 23-42-3-41 0 0-81 7-134 7-9 0-19 0-30-1 90-136 243-225 418-225 128 0 247 49 335 129h-6c-49 0-85 45-85 90 0 41 25 76 50 118zm-129 635c-53 19-107 28-165 28-49 0-96-7-141-20l147-437 159 429zm335-472c0 184-100 346-249 433l153-442c29-72 38-129 38-179 0-19-1-37-4-52 40 71 62 153 62 240z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://twitter.com/b1oki',
                title: 'Visit me on Twitter',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 277-223 500-500 500s-500-223-500-500 223-500 500-500 500 223 500 500zm-125-183c-25 11-53 18-82 22 30-17 51-45 61-79-28 17-57 28-89 35-25-28-62-45-103-45-78 0-141 63-141 142 0 10 1 22 3 32-118-5-223-62-294-149-11 22-18 46-18 72 0 50 24 93 62 118-23 0-45-7-64-18v2c0 69 49 126 114 140-12 3-24 4-37 4-9 0-19-1-27-2 18 57 71 95 132 96-48 38-108 65-176 65-11 0-23-1-33-2 62 40 138 62 217 62 262 0 404-216 404-404v-18c28-19 51-45 71-73z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'http://b1oki.tumblr.com',
                title: 'Visit me on Tumblr',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 277-223 500-500 500s-500-223-500-500 223-500 500-500 500 223 500 500zm-292 205s-59 17-104 17c-75 0-83-22-83-97v-167h167v-146h-167v-166h-104c-15 135-77 169-167 199v105h105v217c0 120 51 187 186 187 106 0 167-41 167-41v-108z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://plus.google.com/106668458256854005432/',
                title: 'Visit me on Google+',
                svg: '<svg class="SVGInline-svg" width="1000" height="1000" viewBox="-17 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M483 1000c276.142 0 500-223.858 500-500S759.142 0 483 0-17 223.858-17 500s223.858 500 500 500zM137 500.288c0 127.334 102.954 230.288 230.255 230.288 132.935 0 221.064-93.4 221.064-225.017 0-15.156 0-26.686-3.625-38.217h-217.44v79.07h130.63c-5.273 33.768-39.536 99.33-130.63 99.33-78.575 0-142.752-65.233-142.752-145.455 0-80.222 64.177-145.454 142.752-145.454 44.806 0 74.786 19.11 91.753 35.58l62.596-60.124C481.41 292.732 429.522 270 367.254 270 239.972 270 137 372.954 137 500.288zm559.89-33.562H631v65.89h65.89v65.727h65.727v-65.726h65.89v-65.89h-65.89V401H696.89v65.726z" fill-rule="evenodd"></path></svg>'
            }
        ],
        'Social': [
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://vk.com/b1oki',
                title: 'Visit me on VK',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 276-224 500-500 500s-500-224-500-500 224-500 500-500 500 224 500 500zm-299 38c0-14 17-36 58-89 38-49 55-85 55-99 0-12-11-17-27-17h-114c-12 0-19 6-22 14-14 36-29 66-46 92-30 51-50 68-60 68-7 0-18-6-18-43 0-41 2-85 2-102 0-36-10-49-88-49s-87 24-87 29 14-1 27 13c12 11 16 27 16 87 0 25-3 67-22 67-13 0-32-21-68-81-25-44-35-78-42-86-6-5-12-9-24-9h-90c-19 0-26 7-26 16 0 4 2 10 4 15 41 91 107 211 170 273 46 45 110 71 162 71h38c17 0 29-5 29-29 1-38 14-62 28-62 17 0 34 20 59 49 21 25 45 43 74 43h94c11 0 30-7 30-24s-10-33-54-77c-41-41-58-56-58-70z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://facebook.com/b1oki',
                title: 'Visit me on Facebook',
                svg: '<svg class="SVGInline-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><path d="M1000 500c0 233-159 429-375 484v-380h107l18-125h-125v-110c0-36 18-56 55-56h79v-117s-37-8-90-8c-120 0-180 67-180 166v125h-114v125h114v396c-271-6-489-228-489-500 0-276 224-500 500-500s500 224 500 500z"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://snapchat.com/add/b1oki',
                title: 'Visit me on Snapchat',
                svg: '<svg class="SVGInline-svg" width="1000" height="1000" viewBox="-171 -32 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M329 968c276.142 0 500-223.858 500-500S605.142-32 329-32s-500 223.858-500 500S52.858 968 329 968zm4.47-159.388c-1.89 0-3.704-.073-5.52-.146-1.162.073-2.396.146-3.63.146-42.992 0-70.66-19.535-97.312-38.416-18.445-13-35.8-25.345-56.353-28.758-10.02-1.67-19.97-2.47-29.556-2.47-17.357 0-31.01 2.688-40.96 4.65-6.1 1.16-11.327 2.177-15.25 2.177-4.138 0-8.64-.87-10.6-7.552-1.672-5.81-2.906-11.402-4.14-16.848-3.05-13.943-5.23-22.585-11.04-23.456-68.262-10.53-87.797-24.91-92.08-35.077-.582-1.452-.945-2.905-1.018-4.357-.218-3.92 2.542-7.407 6.39-7.988 104.864-17.284 151.922-124.47 153.882-129.046.073-.145.146-.218.146-.363 6.39-13 7.697-24.33 3.776-33.552-7.19-16.993-30.646-24.4-46.186-29.338-3.777-1.235-7.408-2.324-10.24-3.486-31.01-12.273-33.623-24.836-32.388-31.226 2.106-10.893 16.702-18.52 28.467-18.52 3.267 0 6.1.582 8.495 1.672 13.943 6.536 26.507 9.876 37.4 9.876 14.96 0 21.495-6.318 22.367-7.117-.364-7.117-.872-14.525-1.308-22.15-3.122-49.6-6.97-111.18 8.715-146.402 46.693-105.517 146.473-113.723 175.884-113.723.727 0 12.927-.145 12.927-.145h1.744c29.483 0 129.41 8.206 176.466 113.723 15.686 35.22 11.837 96.875 8.715 146.402l-.145 2.18c-.436 6.897-.872 13.58-1.235 20.042.726.8 6.754 6.535 20.334 7.044 10.31-.362 22.22-3.703 35.22-9.803 3.848-1.815 8.06-2.178 10.965-2.178 4.43 0 8.86.87 12.563 2.395l.218.073c10.53 3.703 17.43 11.11 17.574 18.808.145 7.262-5.374 18.155-32.606 28.903-2.832 1.088-6.39 2.25-10.24 3.485-15.54 4.938-38.997 12.418-46.186 29.338-3.92 9.223-2.687 20.552 3.776 33.55.073.146.145.22.145.364 1.96 4.575 48.945 111.69 153.88 129.046 3.85.653 6.61 4.066 6.465 7.988-.073 1.453-.436 2.978-1.09 4.358-4.357 10.094-23.82 24.473-92.082 35.003-5.592 1.018-7.77 8.28-11.11 23.53-1.235 5.52-2.47 10.965-4.14 16.702-1.453 4.94-4.575 7.262-9.73 7.262h-.873c-3.63 0-8.787-.653-15.25-1.96-11.547-2.252-24.545-4.358-41.03-4.358-9.66 0-19.608.872-29.63 2.47-20.478 3.413-37.834 15.685-56.28 28.684-26.65 19.027-54.247 38.562-97.31 38.562z" fill-rule="evenodd"></path></svg>'
            },
            {
                id: UniqueId('SocialLinksCounter'),
                url: 'https://steamcommunity.com/id/b1oki/',
                title: 'Visit me on Steam',
                svg: '<svg class="SVGInline-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" xml:space="preserve"><path d="M151.961,418.005c13.572,0,26.893-6.567,34.986-18.708c12.867-19.301,7.651-45.377-11.649-58.244l-33.037-22.022 c5.654-1.54,11.597-2.38,17.739-2.38c37.196,0,67.348,30.152,67.348,67.351s-30.153,67.349-67.349,67.349 c-36.202,0-65.722-28.564-67.274-64.387l35.977,23.984C135.863,415.721,143.955,418.005,151.961,418.005z M426.67,0 C473.607,0,512,38.406,512,85.344v341.314C512,473.626,473.607,512,426.67,512H85.344C38.406,512,0,473.625,0,426.659V325.145 l60.667,40.444c-5.826,31.587,3.469,65.415,27.899,89.845c39.452,39.452,103.415,39.452,142.868,0 c24.234-24.231,33.575-57.715,28.039-89.082L384,254.858v-0.001c23.123-3.319,45.408-13.872,63.197-31.661 c43.736-43.738,43.736-114.653,0-158.392c-43.74-43.739-114.654-43.739-158.393,0c-17.789,17.789-28.344,40.073-31.662,63.196l0,0 L154.796,283.115c-15.924,0.816-31.689,5.382-45.863,13.695L0,224.189V85.344C0,38.406,38.405,0,85.343,0H426.67z M448,144 c0-44.183-35.816-80-80-80s-80,35.817-80,80s35.816,80,80,80S448,188.183,448,144z M320,144c0-26.51,21.49-48,48-48s48,21.49,48,48 s-21.49,48-48,48S320,170.51,320,144z"></path></svg>'
            }
        ]
    }
}
