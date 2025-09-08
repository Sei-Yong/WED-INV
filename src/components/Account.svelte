<script lang="ts">
	import AccountItem from './AccountItem.svelte';
	import { AccountInfo, AccoutMsg1, AccoutMsg2, AccoutMsg3 } from '../resource/input';

	const groomName = AccountInfo.groomName;
	const groomBank = AccountInfo.groomBank 
	const groomAccountNum = AccountInfo.groomAccountNum;

	const groomFatherName = AccountInfo.groomFatherName;
	const groomFatherBank = AccountInfo.groomFatherBank;
	const groomFatherAccountNum = AccountInfo.groomFatherAccountNum;

	const groomMotherName = AccountInfo.groomMotherName;
	const groomMotherBank = AccountInfo.groomMotherBank;
	const groomMotherAccountNum = AccountInfo.groomMotherAccountNum;

	const brideName = AccountInfo.brideName;
	const brideBank = AccountInfo.brideBank;
	const brideAccountNum = AccountInfo.brideAccountNum;

	const brideMotherName = AccountInfo.brideMotherName;
	const brideMotherBank = AccountInfo.brideMotherBank;
	const brideMotherAccountNum = AccountInfo.brideMotherAccountNum;

	const brideFatherName = AccountInfo.brideFatherName;
	const brideFatherBank = AccountInfo.brideFatherBank;
	const brideFatherAccountNum = AccountInfo.brideFatherAccountNum;
</script>

<div class="py-5 mb-20">
  <h1 class="text-3xl md:text-3xl m-5 font-bold text-center text-stone-600">마음 전하실 곳</h1>
	<p class="leading-relaxed mt-1 text-base text-center">
		{AccoutMsg1} <br />
		{AccoutMsg2} <br />
		{AccoutMsg3} <br />
		<br	/>
	</p>
  <div class="text-center m-2">
    <h2 class="text-lg font-semibold mb-2">신랑측 계좌번호</h2>
    <AccountItem name={groomName} bank={groomBank} accountNum={groomAccountNum} />
    <AccountItem name={groomFatherName} bank={groomFatherBank} accountNum={groomFatherAccountNum} />
    <AccountItem name={groomMotherName} bank={groomMotherBank} accountNum={groomMotherAccountNum} />
  </div>

  <div class="text-center m-2">
    <h2 class="text-lg font-semibold mb-2">신부측 계좌번호</h2>
    <AccountItem name={brideName} bank={brideBank} accountNum={brideAccountNum} />
    <AccountItem name={brideFatherName} bank={brideFatherBank} accountNum={brideFatherAccountNum} />
    <AccountItem name={brideMotherName} bank={brideMotherBank} accountNum={brideMotherAccountNum} />
  </div>
</div>
