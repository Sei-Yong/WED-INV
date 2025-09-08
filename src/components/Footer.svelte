<script lang="ts">
  import copy from 'copy-to-clipboard';

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
      copyLink(); // 공유 시트가 없으면 자동으로 복사
    }
  }
</script>

<section>
  <div class="text-center px-5 py-5 space-x-2">
    <!-- 필요 없으면 둘 중 하나만 남기세요 -->
    <button
      type="button"
      class="btn inline-block text-black rounded bg-gray-200 px-3 py-2 font-medium text-base"
      on:click={nativeShare}>
      공유하기
    </button>

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