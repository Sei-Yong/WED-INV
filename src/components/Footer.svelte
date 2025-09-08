<script lang="ts">
  import { env } from '$env/dynamic/public';
  import copy from 'copy-to-clipboard';
  import { brideFullName, groomFullName, mainImageURL, dday, timeStr, poiName } from '../resource/input';

  // (타이핑 경고 방지용) 전역 Kakao 타입 선언
  declare global {
    interface Window { Kakao: any }
  }

  const imageUrl = mainImageURL;
  const title = `${groomFullName} ❤ ${brideFullName}의 결혼식에 초대합니다.`;
  const description = `${dday[0]}년 ${dday[1]}월 ${dday[2]}일 ${timeStr}\n${poiName}`;

  import { onMount } from 'svelte';
  onMount(() => {
    // SDK가 아직 로드되지 않았을 가능성 대비
    const ready = () => {
      if (!window.Kakao) return false;
      if (!window.Kakao.isInitialized?.()) {
        window.Kakao.init(env.PUBLIC_KAKAO_JS_KEY);
      }
      return true;
    };
    // 준비됐으면 카카오 공유 버튼 바인딩
    if (ready()) {
      window.Kakao.Share.createDefaultButton({
        container: '#kakao-share',
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href
          }
        },
        buttons: [
          {
            title: '청첩장 보러가기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href
            }
          }
        ]
      });
    }
  });

  function copyLink() {
    copy(window.location.href);
    alert('링크가 복사되었습니다.');
  }

  function nativeShare() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href
      });
    } else {
      copyLink();
    }
  }
</script>

<svelte:head>
  <script
    src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js"
    integrity="sha384-eKjgHJ9+vwU/FCSUG3nV1RKFolUXLsc6nLQ2R1tD0t4YFPCvRmkcF8saIfOZNWf/"
    crossorigin="anonymous">
  </script>
</svelte:head>

<section>
  <div class="text-center px-5 py-5 space-x-2">
    <!-- 카카오 전용: a 태그 대신 button 사용 (빌드 경고 해결) -->
    <button
      id="kakao-share"
      type="button"
      class="btn inline-block text-black rounded bg-gray-200 px-3 py-2 font-medium text-base">
      카카오톡으로 공유
    </button>

    <!-- 옵션 1: OS 공유 시트 -->
    <button
      type="button"
      class="btn inline-block text-black rounded bg-gray-200 px-3 py-2 font-medium text-base"
      on:click={nativeShare}>
      공유하기
    </button>

    <!-- 옵션 2: “링크 복사”를 원하면 이 버튼만 남기고 위 공유하기 제거 -->
    <button
      type="button"
      class="btn inline-block text-black rounded bg-gray-200 px-3 py-2 font-medium text-base"
      on:click={copyLink}>
      링크 복사
    </button>
  </div>
</section>

<div class="w-full bg-stone-300 py-2">
  <div class="max-w-xl w-full mx-auto flex space-x-2 text-sm justify-center items-center">
    <span> developed by </span>
    <span class="text-lg font-bold text-gray-800"> Sei-Yong </span>
  </div>
</div>