<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '../components/Header.svelte';
  import MainImage from '../components/MainImage.svelte';
  import MainMessage from '../components/MainMessage.svelte';
  import AnimationFrame from '../components/AnimationFrame.svelte';
  import Calendar from '../components/Calendar.svelte';
  import Location from '../components/Location.svelte';
  import Gallery from '../components/Gallery.svelte';
  import Footer from '../components/Footer.svelte';
  import Account from '../components/Account.svelte';
  import { dday, mainDescription, mainImageURL, mainTitle, siteURL } from '../resource/input';

  let isTouched: boolean = false;
  const imageUrl = mainImageURL;
  const siteUrl = siteURL;
  const title = mainTitle;
  const description = mainDescription;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href={siteUrl} />
  <meta name="description" content={description} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={siteUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter Card (선택이지만 권장) -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
</svelte:head>

<Header />
<MainImage bind:isTouched />
<div class="divider py-10" />
<MainMessage />
<Calendar year={dday[0]} month={dday[1]} theDay={dday[2]} />
<div class="divider py-10" />
<Gallery />
<div class="divider py-10" />
<Location />
<div class="divider py-10" />
<Account />
<Footer />