<script lang="ts">
	import {
		poiName, address,
		privateCarMsg1, privateCarMsg2, privateCarMsg3, privateCarMsg4, privateCarMsg5, privateCarMsg6,
		publicTransportMsg1, publicTransportMsg2, publicTransportMsg3, publicTransportMsg4, publicTransportMsg5, publicTransportMsg6, publicTransportMsg7,
		mapImageSrc
	} from '../resource/input';
</script>

<section>
	<div class="py-5 mx-auto">
		<h1 class="mb-8 text-3xl md:text-3xl font-bold text-center text-stone-600">오시는 길</h1>

		<div class="text-center py-2 text-xl">
			<p>{poiName}</p>
			<p class="text-gray-500 text-base">{address}</p>
		</div>

		<!-- 약도 이미지만 표시 -->
		<div class="w-full px-4 py-4 flex justify-center">
			<img src={mapImageSrc} alt={`${poiName} 약도`} class="max-w-full md:max-w-2xl rounded-lg shadow" />
		</div>

		<div class="flex flex-col w-full px-5 mt-4">
			<div class="card p-4 my-2 bg-base-100 shadow-xl">
				<h2 class="text-xl font-bold title-font">🚗 자가용</h2>
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
				<h2 class="text-xl font-bold title-font">🚎 대중교통</h2>
				<p class="leading-relaxed mt-1 text-base">
					{publicTransportMsg1} <br />
					{publicTransportMsg2} <br />
					{publicTransportMsg3} <br />
					{publicTransportMsg4} <br />
					{publicTransportMsg5} <br />
					{publicTransportMsg6} <br />
					{publicTransportMsg7}
				</p>
			</div>
		</div>
	</div>
</section>