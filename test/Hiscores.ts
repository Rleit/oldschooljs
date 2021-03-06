import { Hiscores } from '../dist';

import test from 'tape';

test('Hiscores', async t => {
	t.plan(40);

	const [lynxTitan, zulu, mgby, leaguesMgby, virtualMgby] = await Promise.all([
		Hiscores.fetch('Lynx Titan'),
		Hiscores.fetch('Zulu'),
		Hiscores.fetch('Mgby'),
		Hiscores.fetch('Mgby', {
			type: 'seasonal'
		}),
		Hiscores.fetch('Mgby', { virtualLevels: true })
	]);

	t.equal(lynxTitan.username, 'Lynx Titan', 'Expected name to equal Lynx Titan.');
	t.equal(lynxTitan.combatLevel, 126, 'Expected combat level to equal 126');
	t.equal(lynxTitan.skills.overall.level, 2277, 'Expected total level to equal 2277');
	t.equal(lynxTitan.skills.overall.xp, 4600000000, 'Expected total xp to equal 4600000000');
	t.equal(lynxTitan.clues.all.score >= 22, true, 'Expected correct clue scores');
	t.equal(
		typeof lynxTitan.minigames.bountyHunter.rank,
		'number',
		'Expected correct minigame scores'
	);

	t.equal(zulu.bossRecords.giantMole.rank > 1, true);
	t.equal(zulu.bossRecords.giantMole.score, 1222);

	t.equal(zulu.bossRecords.commanderZilyana.rank > 1, true);
	t.equal(zulu.bossRecords.commanderZilyana.score, 1082);

	t.equal(zulu.bossRecords.chambersofXeric.rank > 1, true);
	t.equal(zulu.bossRecords.chambersofXeric.score, 872);

	t.equal(zulu.bossRecords.zulrah.rank > 1, true);
	t.equal(zulu.bossRecords.zulrah.score, 2475);

	t.equal(zulu.bossRecords.callisto.rank > 1, true);
	t.equal(zulu.bossRecords.callisto.score, 327);

	t.equal(zulu.bossRecords.cerberus.rank > 1, true);
	t.equal(zulu.bossRecords.cerberus.score, 7073);

	t.equal(zulu.minigames.bountyHunter.rank > 1, true);
	t.equal(zulu.minigames.bountyHunter.score, 4);

	t.equal(zulu.minigames.bountyHunterRogue.rank > 1, true);
	t.equal(zulu.minigames.bountyHunterRogue.score, 3);

	t.equal(zulu.minigames.LMS.score, 500);

	t.equal(mgby.clues.all.score, 137);

	t.equal(mgby.clues.beginner.score, 5);
	t.equal(mgby.clues.easy.score, 12);

	t.equal(mgby.clues.medium.score, 56);
	t.equal(mgby.clues.hard.score, 44);

	t.equal(mgby.clues.elite.score, 13);
	t.equal(mgby.clues.master.score, 7);

	t.equal(mgby.minigames.bountyHunter.rank, -1);
	t.equal(mgby.minigames.bountyHunter.score, -1);

	t.equal(mgby.minigames.bountyHunterRogue.rank > 1, true);
	t.equal(mgby.minigames.bountyHunterRogue.score, 2);

	t.equal(mgby.minigames.LMS.score, -1);

	t.equal(leaguesMgby.username, 'Mgby');
	t.equal(leaguesMgby.skills.overall.level > 1, true);

	t.equal(virtualMgby.skills.firemaking.level, 106, 'Expected fm level to equal 106');
	t.equal(virtualMgby.skills.cooking.level, 100, 'Expected fm level to equal 106');
	t.equal(virtualMgby.skills.fletching.level, 99, 'Expected fm level to equal 106');
});
