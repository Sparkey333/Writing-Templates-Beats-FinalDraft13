// Seed project: the worked Matrix example from
// ../../01-screenplay/beat-sheets/the-matrix-filled-snowflake-example.md, loaded as real
// app data so a new user immediately sees a filled-out project instead of a blank page.
// This is original structural analysis of the film's plot, not the screenplay text —
// see LEGAL-AND-SOURCES.md.

import type { SnowflakeProject } from "./types";

export function matrixSeedProject(): SnowflakeProject {
  return {
    id: "seed-matrix",
    title: "The Matrix — worked example",
    format: "screenplay",
    updatedAt: new Date(0).toISOString(),

    logline:
      "A hacker discovers his world is a simulation and must choose to fight the machines that built it.",

    setup:
      "A hacker known online as \"Neo\" senses something is deeply wrong with reality and searches for a mysterious figure who might explain why.",
    disaster1:
      "Neo is captured and nearly implanted with a tracking device by agents of the system, then rescued and told the truth: his entire life has been a simulation, and the real world is a ruined future where machines farm humans for energy. He can never return to his old life.",
    disaster2:
      "Neo learns from a prophetic figure (the Oracle) that he is probably NOT \"the One\" the resistance has been waiting for — undercutting his growing confidence right as the mission's danger peaks.",
    disaster3:
      "A trusted member of the crew betrays the team to the machines; several crew members are killed or captured, including the mentor figure, Morpheus, who is taken prisoner by the system's agents.",
    ending:
      "Neo chooses to go back into the simulation to save Morpheus rather than run, dies and is revived by an act of love and belief, and emerges with full mastery over the simulation's rules — ending the film as a direct threat to the system that built the world he grew up in.",

    characters: [
      {
        id: "c-neo",
        name: "Neo",
        role: "Protagonist",
        oneLineArc:
          "A disaffected hacker becomes someone who believes enough in a cause — and in himself — to bend the rules of reality.",
        motivation: "To understand why his life feels wrong.",
        goal: "To find \"Morpheus\" and get an answer to \"what is the Matrix?\"",
        conflict: "He doesn't believe he's special; the people around him insist he is.",
        epiphany: "Belief is a choice, and choosing it changes what's possible.",
        storyline:
          "Neo starts as a passive searcher, is forced into an active role by the truth he's shown, doubts himself hardest right when he's told he might not be \"the One,\" and only becomes powerful once he stops waiting to be proven special and instead simply chooses to act.",
        unsure: false,
      },
      {
        id: "c-morpheus",
        name: "Morpheus",
        role: "Mentor",
        oneLineArc: "A true believer's faith is tested and ultimately validated.",
        motivation: "To free humanity from the simulation.",
        goal: "To find and confirm \"the One\" who can end the war.",
        conflict: "His absolute certainty makes him a target, and nearly gets him killed.",
        epiphany: "",
        storyline: "",
        unsure: true, // flagged in the source doc: does Morpheus change, or is he flat/steadfast?
      },
      {
        id: "c-trinity",
        name: "Trinity",
        role: "B-story / love interest",
        oneLineArc: "A hardened operative allows herself to hope again.",
        motivation: "Loyalty to the cause and to Morpheus.",
        goal: "Protect Neo, verify he's really \"the One.\"",
        conflict: "A prophecy told her she'd fall for \"the One\" — she resists what that means until it matters most.",
        epiphany: "Her belief, spoken aloud, is the literal mechanism of Neo's climax.",
        storyline: "",
        unsure: false,
      },
      {
        id: "c-cypher",
        name: "Cypher",
        role: "Fake-ally opponent",
        oneLineArc: "A man who has seen too much truth chooses comfortable lies instead.",
        motivation: "Exhaustion; he wants his simulated old life back, ignorance included.",
        goal: "Cut a deal with the system to be reinserted, in exchange for betraying the crew.",
        conflict: "His cynicism vs. Neo's growing faith — the story's thematic foil.",
        epiphany: "None — his refusal to change is the point.",
        storyline: "",
        unsure: false,
      },
      {
        id: "c-smith",
        name: "Agent Smith",
        role: "Antagonist",
        oneLineArc: "",
        motivation: "",
        goal: "",
        conflict: "",
        epiphany: "",
        storyline: "",
        unsure: true, // not drafted in the source doc
      },
      {
        id: "c-oracle",
        name: "The Oracle",
        role: "Prophet / mystery",
        oneLineArc: "",
        motivation: "",
        goal: "",
        conflict: "",
        epiphany: "",
        storyline: "",
        unsure: true, // not drafted in the source doc
      },
    ],

    onePageSynopsis:
      "Neo lives a double life: mild-mannered software employee by day, restless hacker by night, chasing rumors of a man named Morpheus who might have the answer to a question that's haunted him for years — \"what is the Matrix?\" Strange, impossible things keep happening around him that the world insists he ignore.\n\nContacted at last by Trinity and Morpheus's crew, Neo is warned that agents are closing in — and they are, nearly capturing and implanting him with a tracking device in a scene that plays like a nightmare made real. Freed and extracted, he's offered a choice — a pill that shows him a comforting lie, or one that shows him the truth. He chooses truth, and wakes into a ruined real world he never knew existed: humanity enslaved, farmed for energy by machines, while their minds are kept docile inside the simulated \"Matrix.\" There is no going back to the world he grew up in — it was never real.\n\n⚑ Disaster 2, Disaster 3, and the Ending paragraphs are not yet expanded to full paragraphs here — see the Focus tab.",

    characterSynopses: "",
    fourPageSynopsis: "",
    characterBibleNotes:
      "Neo — Want: answers. Need: belief in himself. Flaw: passivity/self-doubt. Ghost: a lifetime of sensing something's wrong and being told he's crazy for it.\nMorpheus — Want: to find the One. Need: ⚑ undecided. Flaw: absolute certainty can blind him to risk. Ghost: has searched, and been wrong before, many times.",

    scenes: [
      {
        id: "sc-1",
        act: "1",
        slugline: "INT. APARTMENT - NIGHT (Neo)",
        summary: "Buyers arrive for illegal software; a strange woman (Trinity) is mentioned, planting the mystery.",
        valueFrom: "ignorance",
        valueTo: "unease",
        unsure: false,
      },
      {
        id: "sc-2",
        act: "1",
        slugline: "INT. OFFICE - DAY (Neo)",
        summary: "Neo is confronted by \"Agents\" at work, panics, is warned by a call from Morpheus mid-chase.",
        valueFrom: "safety",
        valueTo: "exposure",
        unsure: false,
      },
      {
        id: "sc-3",
        act: "1",
        slugline: "INT./EXT. VARIOUS - NIGHT",
        summary: "Neo meets Morpheus; the pill choice; he wakes in the real world for the first time.",
        valueFrom: "illusion",
        valueTo: "truth",
        unsure: false,
      },
      {
        id: "sc-4",
        act: "2",
        slugline: "INT. TRAINING CONSTRUCT - DAY",
        summary: "Kung-fu download, sparring with Morpheus — the \"fun and games\" promise of the premise delivered.",
        valueFrom: "untrained",
        valueTo: "capable",
        unsure: false,
      },
      {
        id: "sc-5",
        act: "2",
        slugline: "INT. ORACLE'S APARTMENT - DAY",
        summary: "Oracle tells Neo he's not the One (Midpoint) and drops a cryptic warning about Morpheus.",
        valueFrom: "confidence",
        valueTo: "doubt",
        unsure: false,
      },
      {
        id: "sc-6",
        act: "2",
        slugline: "INT. SHIP - VARIOUS",
        summary: "Cypher's betrayal begins; crew members are unplugged/killed.",
        valueFrom: "trust",
        valueTo: "fear",
        unsure: true,
      },
      {
        id: "sc-7",
        act: "3",
        slugline: "INT. GOVERNMENT LOBBY - DAY",
        summary: "Gun-run rescue sequence begins.",
        valueFrom: "doubt",
        valueTo: "resolve",
        unsure: false,
      },
      {
        id: "sc-8",
        act: "3",
        slugline: "INT. SUBWAY STATION - NIGHT",
        summary: "Neo vs. Agent Smith; Neo is shot and dies.",
        valueFrom: "resolve",
        valueTo: "loss",
        unsure: false,
      },
      {
        id: "sc-9",
        act: "3",
        slugline: "INT. SUBWAY STATION - NIGHT (cont'd)",
        summary: "Trinity's declaration revives him; he masters the simulation's rules for the first time.",
        valueFrom: "loss",
        valueTo: "rebirth",
        unsure: false,
      },
      {
        id: "sc-10",
        act: "3",
        slugline: "INT./EXT. PHONE BOOTH -> SKY - DAY",
        summary: "Neo calls a warning to the machines and flies off.",
        valueFrom: "rebirth",
        valueTo: "power",
        unsure: false,
      },
    ],

    sceneBriefs:
      "SCENE 5 (Oracle's apartment)\nCONFLICT: Neo wants confirmation he's \"the One\"; the Oracle withholds it.\nSETBACK/TURN: She tells him he has the gift, but isn't the One — then, almost as an aside, warns him about a choice regarding Morpheus's life. Both statements will be recontextualized by the ending.\nPOV GOAL ENTERING/EXITING: Enters seeking certainty; exits with more doubt AND a hidden piece of foreshadowing he doesn't understand yet.",

    draft:
      "Title: THE MATRIX (worked example)\nCredit: Structural analysis for planning practice\nAuthor: Snowdraft example project\n\n/*\nThis is a planning skeleton, not the real screenplay. Read the original beat sheet:\n../../01-screenplay/beat-sheets/the-matrix-beat-sheet.md\nand the real, legally-hosted script (IMSDb / Script Slug — see Resources).\n*/\n\n# ACT ONE\n\n## Scene 1 - Apartment, night\n= Buyers arrive for illegal software; Trinity is mentioned.\n\n## Scene 2 - Office, day\n= Neo is confronted by Agents at work.\n\n## Scene 3 - The pill choice\n= Neo wakes in the real world for the first time.\n\n# ACT TWO\n\n## Scene 4 - Training construct\n= The kung-fu download; the promise of the premise.\n\n## Scene 5 - The Oracle's apartment\n= Midpoint: \"not the One.\"\n\n## Scene 6 - Cypher's betrayal\n= ⚑ needs expansion — see Focus tab.\n\n# ACT THREE\n\n## Scene 7 - The lobby\n= The rescue begins.\n\n## Scene 8 - Subway: Neo dies\n\n## Scene 9 - Subway: resurrection\n\n## Scene 10 - Phone booth to sky\n= Final image: full mastery of the rules.\n",

    driveFolderLink: "",
    importStatus: "not started",

    focusItems: [
      {
        id: "manual-1",
        step: "Step 3",
        label: "Decide Morpheus's arc type: flat/steadfast, or does he actually change?",
        notes: "See ../05-character/character-arc-template.md for the three arc types.",
        resolved: false,
      },
    ],
  };
}
