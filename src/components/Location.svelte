<script lang="ts">
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import { poiName, address, latitude, longitude, privateCarMsg1, privateCarMsg2, privateCarMsg3, privateCarMsg4, privateCarMsg5, privateCarMsg6, publicTransportMsg1, publicTransportMsg2, publicTransportMsg3, publicTransportMsg4, publicTransportMsg5, publicTransportMsg6, publicTransportMsg7, mapImageSrc } from '../resource/input';

	onMount(() => {
		let mapOption = new naver.maps.Map('naverMap', {
			center: new naver.maps.LatLng(37.5347442, 127.1339204), // 안내와 다르게 건물 근접 위,경도로 지정
			zoom: 17
		});

		let marker = new naver.maps.Marker({
			position: new naver.maps.LatLng(37.5347442, 127.1339204),
			map: mapOption
		});
	});

	//티맵 길안내
	function tMap(name: string, lat: number, lng: number) {
		const href =
			'https://apis.openapi.sk.com/tmap/app/routes?appKey=' +
			String(env.PUBLIC_TMAP_API_KEY) +
			'&name=' +
			name +
			'&lon=' +
			lng +
			'&lat=' +
			lat;
		return href;
	}

	//카카오맵 길안내
	function kakaoMap(name: string, lat: number, lng: number) {
		const href = 'https://map.kakao.com/link/to/' + name + ',' + lat + ',' + lng;
		return href;
	}

	//네이버맵 길안내
	function naverMap(name: string, lat: number, lng: number) {
		const href =
			'http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=' +
			lat +
			'&elng=' +
			lng +
			'&etitle=' +
			name;
		return href;
	}
</script>

<svelte:head>
	<script
		src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId={env.PUBLIC_NAVER_API_KEY}"
	></script>
</svelte:head>

<section>
	<div class="py-5 mx-auto">
		<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600">오시는 길</h1>
		<div class="text-center py-2 text-xl">
			<p>{poiName}</p>
			<p class="text-gray-500 text-base">{address}</p>
		</div>

		<div id="naverMap" class="w-full h-60" />
		<div class="text-center px-1 py-5">
			<a
				id="kakao-navi"
				href={kakaoMap(poiName, longitude, latitude)}
				role="button"
				class="btn rounded-lg mx-2"
			>
				<img src="image/kakao.png" height="10" width="10" alt="" />
				<span class="text-sm">카카오 지도</span>
			</a>
			<a
				id="tmap-navi"
				href={tMap(poiName, longitude, latitude)}
				role="button"
				class="btn mx-2 rounded-lg"
			>
				<img src="image/tmap.png" height="10" width="10" alt="" />
				<span class="text-sm">티맵 내비</span>
			</a>
			<a
				id="naver-navi"
				href={naverMap(poiName, longitude, latitude)}
				role="button"
				class="btn mx-2 rounded-lg"
			>
				<img src="image/naver.png" height="10" width="10" alt="" />
				<span class="text-sm">네이버 지도</span>
			</a>
		</div>
		<div class="flex flex-col w-full px-5 mt-4">
			<div>
				<p class="leading-relaxed mt-1" />
			</div>
			<div class="card p-4 my-2 bg-base-100 shadow-xl">
				<h2 class="text-xl font-bold title-font">🚗자가용</h2>
				<p class="leading-relaxed mt-1 text-base">
					{privateCarMsg1} <br />
					{privateCarMsg2} <br />
					{privateCarMsg3} <br />
					{privateCarMsg4} <br />
					{privateCarMsg5} <br />
					{privateCarMsg6}	
				</p>
			</div>
			<div class="card p-4 my-2 bg-base-100 shadow-xl">
				<h2 class="text-xl font-bold title-font">🚎대중교통</h2>
				<p class="leading-relaxed mt-1 text-base">
					{publicTransportMsg1} <br />
					{publicTransportMsg2} <br />
					{publicTransportMsg3} <br />
					{publicTransportMsg4} <br />
					{publicTransportMsg5} <br />
					{publicTransportMsg6} <br />
					{publicTransportMsg7} <br />
				</p>
			</div>
			<img src={mapImageSrc} class="mx-auto" alt="" />
		</div>
	</div>
</section>
