import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { describe, it } from 'node:test';
import { project } from '../config/project.ts';
import {
  canCopyAddress,
  canTrade,
  displayFact,
  isSafeHttpsUrl,
  isValidEthAddress,
  pageUrl,
  safeUrl,
  taxLabel,
  visibleContractAddress,
} from './gates.ts';

const validAddress = `0x${'ab'.repeat(20)}`;
const swapUrl = 'https://example.com/swap';

describe('public facts', () => {
  it('keeps supplied zeroes and hides empty values', () => {
    assert.equal(displayFact('0%'), '0%');
    assert.equal(displayFact('0'), '0');
    assert.equal(displayFact(null), 'Pending');
    assert.equal(displayFact(''), 'Pending');
    assert.equal(displayFact('   '), 'Pending');
    assert.equal(displayFact('[TOTAL_SUPPLY]'), 'Pending');
    assert.equal(taxLabel(null, null), 'Pending / Pending');
    assert.equal(taxLabel('0%', null), '0% / Pending');
  });
});

describe('address and trading gates', () => {
  it('accepts only a 0x-prefixed 40-hex address', () => {
    assert.equal(isValidEthAddress(validAddress), true);
    assert.equal(isValidEthAddress(`0X${'ab'.repeat(20)}`), false);
    assert.equal(isValidEthAddress('0x1234'), false);
    assert.equal(isValidEthAddress(null), false);
    assert.equal(isValidEthAddress('0x0000000000000000000000000000000000000000'), true);
  });

  it('copies a valid address while launch details can stay pending', () => {
    assert.equal(canCopyAddress({ ...project, launchConfirmed: false, contractAddress: validAddress }), true);
    assert.equal(canCopyAddress({ ...project, launchConfirmed: true, contractAddress: null }), false);
    assert.equal(canCopyAddress({ ...project, launchConfirmed: false, contractAddress: null }), false);
    assert.equal(visibleContractAddress({ ...project, contractAddress: validAddress }), validAddress);
    assert.equal(visibleContractAddress({ ...project, contractAddress: 'not-an-address' }), null);
  });

  it('enables trading only when launch, address and swap URL are all confirmed', () => {
    const ready = { ...project, launchConfirmed: true, contractAddress: validAddress, officialSwapUrl: swapUrl };
    assert.equal(canTrade(ready), true);
    assert.equal(canTrade({ ...ready, launchConfirmed: false }), false);
    assert.equal(canTrade({ ...ready, contractAddress: null }), false);
    assert.equal(canTrade({ ...ready, officialSwapUrl: null }), false);
    assert.equal(canTrade(project), false);
  });
});

describe('https destinations', () => {
  it('rejects unsafe, blank and placeholder URLs', () => {
    assert.equal(isSafeHttpsUrl('https://example.com/path'), true);
    assert.equal(isSafeHttpsUrl('http://example.com'), false);
    assert.equal(isSafeHttpsUrl('javascript:alert(1)'), false);
    assert.equal(isSafeHttpsUrl('data:text/html,hi'), false);
    assert.equal(isSafeHttpsUrl(''), false);
    assert.equal(isSafeHttpsUrl('   '), false);
    assert.equal(isSafeHttpsUrl(null), false);
    assert.equal(isSafeHttpsUrl('[OFFICIAL_SWAP_URL]'), false);
    assert.equal(isSafeHttpsUrl('https://localhost/swap'), false);
    assert.equal(pageUrl(null, '/buy'), null);
    assert.equal(pageUrl('javascript:alert(1)', '/'), null);
    assert.equal(pageUrl('https://barstro.space', '/story'), 'https://barstro.space/story');
  });
});

describe('shipped configuration', () => {
  it('leaves launch facts pending and publishes the confirmed site URL', () => {
    assert.equal(project.launchConfirmed, false);
    assert.equal(project.contractAddress, null);
    assert.equal(canCopyAddress(project), false);
    assert.equal(canTrade(project), false);
    assert.equal(project.totalSupply, '1,000,000,000');
    assert.equal(displayFact(project.buyTax), '0%');
    assert.equal(displayFact(project.sellTax), '0%');
    assert.equal(displayFact(project.liquidityStatus), 'Burn');
    assert.equal(displayFact(project.ownershipStatus), 'Renounce');
    assert.equal(safeUrl(project.officialXUrl), 'https://x.com/barstro_eth');
    assert.equal(safeUrl(project.officialTelegramUrl), 'https://t.me/Barstro');
    assert.equal(safeUrl(project.officialSwapUrl), null);
    assert.equal(safeUrl(project.officialChartUrl), null);
    assert.equal(safeUrl(project.officialExplorerUrl), null);
    assert.equal(safeUrl(project.siteUrl), 'https://barstro.space');
    const html = readFileSync(new URL('../../index.html', import.meta.url), 'utf8');
    assert.equal(html.includes('https://barstro.space'), true);
    assert.equal(html.includes(pageMetaTitle()), true);
  });
});

function pageMetaTitle() {
  return 'Barstronaut | $BARSTRO — Bring the bars back';
}
