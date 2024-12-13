# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/12_-_A_Weird_Game/Solution



Modern Puzzles by Henry Ernest Dudeney: $12$
A Weird Game
Seven men engaged in play.
Whenever a player won a game he doubled the money of each of the other players.
That is, he gave each player just as much money as each had in his pocket.
They played $7$ games and, strange to say, each won a game in turn in the order of their names,
which began with the letters $\text A$, $\text B$, $\text C$, $\text D$, $\text E$, $\text F$, and $\text G$.
When they had finished it was found that each man had exactly $2$ shillings and $8$ pence in his pocket.
How much had each man had in his pocket before play?


Solution
$A$ had $9 \shillings 4 \tfrac 1 4 \oldpence$
$B$ had $4 \shillings 8 \tfrac 1 4 \oldpence$
$C$ had $2 \shillings 4 \tfrac 1 4 \oldpence$
$D$ had $1 \shillings 2 \tfrac 1 4 \oldpence$
$E$ had $7 \tfrac 1 4 \oldpence$
$F$ had $3 \tfrac 3 4 \oldpence$
$G$ had $2 \oldpence$


Proof
Recall that one shilling is $12$ pence.

We convert to pence.
Thus at the end, each person had exactly $32 \oldpence$
Because we know what direction this is going in, we decide to work entirely in farthings.
Recall that there are $4$ farthings to the old penny.
So, each starts with $4 \times 32 = 128$ farthings.
From here on in, all numbers are quantities of farthings. 

Before the last game, which $\text G$, won:

Each of $\text A$ to $\text F$ had $\dfrac {128} 2 = 64$
$\text G$ had $128 + 6 \times 64 = 512$

Before the game which $\text F$ won:

$\text G$ had $\dfrac {512} 2 = 256$
Each of $\text A$ to $\text E$ had $\dfrac {64} 2 = 32$
$\text F$ had $64 + 5 \times 32 + 256 = 480$

Before the game which $\text E$ won:

$\text G$ had $\dfrac {256} 2 = 128$
$\text F$ had $\dfrac {480} 2 = 240$
Each of $\text A$ to $\text D$ had $\dfrac 32 2 = 16$
$\text E$ had $32 + 4 \times 16 + 240 + 128 = 464$

Before the game which $\text D$ won:

$\text G$ had $\dfrac {128} 2 = 64$
$\text F$ had $\dfrac {240} 2 = 120$
$\text E$ had $\dfrac {464} 2 = 232$
Each of $\text A$ to $\text C$ had $\dfrac 16 2 = 8$
$\text D$ had $16 + 3 \times 8 + 232 + 120 + 64 = 456$

Before the game which $\text C$ won:

$\text G$ had $\dfrac {64} 2 = 32$
$\text F$ had $\dfrac {120} 2 = 60$
$\text E$ had $\dfrac {232} 2 = 116$
$\text D$ had $\dfrac {456} 2 = 228$
$\text A$ and $\text B$ had $\dfrac 8 2 = 4$
$\text C$ had $8 + 2 \times 4 + 228 + 116 + 60 + 32 = 452$

Before the game which $\text B$ won:

$\text G$ had $\dfrac 32 2 = 16$
$\text F$ had $\dfrac {60} 2 = 30$
$\text E$ had $\dfrac {116} 2 = 58$
$\text D$ had $\dfrac {228} 2 = 114$
$\text C$ had $\dfrac {452} 2 = 226$
$\text A$ had $\dfrac 4 2 = 2$
$\text B$ had $4 + 2 + 226 + 114 + 58 + 30 + 16 = 450$

Before the game which $\text A$ won:

$\text G$ had $\dfrac {16} 2 = 8$
$\text F$ had $\dfrac {30} 2 = 15$
$\text E$ had $\dfrac {58} 2 = 29$
$\text D$ had $\dfrac {114} 2 = 57$
$\text C$ had $\dfrac {226} 2 = 113$
$\text B$ had $\dfrac {450} 2 = 225$
$\text A$ had $2 + 225 + 113 + 57 + 29 + 15 + 8 = 449$

It remains to convert back to shillings and pence.
We have that:

$8$ farthings is $\dfrac 8 4 = 2 \oldpence$
$15$ farthings is $\dfrac {15} 4 = 3 \tfrac 3 4 \oldpence$
$29$ farthings is $\dfrac {29} 4 = 7 \tfrac 1 4 \oldpence$
$57$ farthings is $\dfrac {57} 4 = 14 \tfrac 1 4 \oldpence = 1 \shillings 2 \tfrac 1 4 \oldpence$
$113$ farthings is $\dfrac {113} 4 = 28 \tfrac 1 4 \oldpence = 2 \shillings 4 \tfrac 1 4 \oldpence$
$225$ farthings is $\dfrac {225} 4 = 56 \tfrac 1 4 \oldpence = 4 \shillings 8 \tfrac 1 4 \oldpence$
$449$ farthings is $\dfrac {225} 4 = 112 \tfrac 1 4 \oldpence = 9 \shillings 4 \tfrac 1 4 \oldpence$
$\blacksquare$


This theorem requires a proof.In particular: Dudeney says: "The answer may be found by laboriously working backwards, but a simpler method is as follows: $7 + 1 = 8$; $2 \times 7 + 1 = 15$; $4 \times 7 + 1 = 29$; and so on, where the multiplied increases in powers of $2$, that is, $2$, $4$, $8$, $16$, $32$ and $64$." Hence a proof is needed in which a recurrence relation is constructed and solved.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $12$. -- A Weird Game
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $8$. A Weird Game




