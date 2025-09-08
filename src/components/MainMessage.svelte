<script>
	import { AccountInfo, brideName, groomName } from "../resource/input";
	import { mainImageURL, siteURL, groomFullName, brideFullName, dday, timeStr, poiName } from '$lib/resource/input'; // 경로 맞게
	const title = `${groomFullName} ❤ ${brideFullName}의 결혼식에 초대합니다.`;
	const description = `${dday[0]}년 ${dday[1]}월 ${dday[2]}일 ${timeStr} ${poiName}`;
</script>

<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600">모시는 말씀</h1>

<div class="container mx-auto">
	<img src="/image/image3.jpg" alt="" class="block w-full md:w-1/2 mx-auto h-auto" />
</div>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={mainImageURL} />
  <meta property="og:url" content={siteURL} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={mainImageURL} />
</svelte:head>

<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600">모시는 말씀</h1>

<div class="container mx-auto">
  <img src="/image/image3.jpg" alt="" class="w-full h-auto" />
</div>