<script lang="ts">
	import { groomFullName, dday, brideFullName, poiSubText, poiName, timeStr } from '../resource/input'

	const imgURL = 'image/Main.jpg';
	const dateText = dday[0] + '년 ' + dday[1] + '월 ' + dday[2] + '일, ' + timeStr;
	export let isTouched: boolean;
</script>

<img src={imgURL} alt="intro" width="339" height="512" class="w-3/4 mx-auto pb-5" />
<div class="text-center justify-center modal-middle flex py-5 text-2xl">
	<span class="px-3">{groomFullName}</span>
	<span class="text-xl text-primary px-3">❤</span>
	<span class="px-3">{brideFullName}</span>
</div>
<div class="text-center py-5 text-2xl">
	<p>{dateText}</p>
	<p>{poiName}</p>
	<p>{poiSubText}</p>
</div>

<style>
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-4px);
		}
	}

	.animate-bounce {
		animation: bounce 0.6s infinite;
	}
</style>
