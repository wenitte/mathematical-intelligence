# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/275_-_The_Necklace_Problem/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $275$
The Necklace Problem
How many different necklaces can be made with $8$ beads, where each bead may be either black or white,
the beads being indistinguishable except by colour?


Solution
$30$.


Proof
We can enumerate the strings as follows, by referring to the beads as $\mathtt B$ and $\mathtt W$ for black and white respectively.
Note that by the Product Rule for Counting there are $2^8 = 256$ different strings of $8$ beads of either black or white.
It remains to inspect these to determine whether any of them form the same necklace.

First we establish how many strings there are which contain $n$ white beads (and $8 - n$ black).
By definition of binomial coefficients, there are $\dbinom 8 n$ such different strings.
We list them:














\(\ds \dbinom 8 0\)

\(=\)







\(\ds 1\)





all black beads














\(\ds \dbinom 8 1\)

\(=\)







\(\ds 8\)





one white bead














\(\ds \dbinom 8 2\)

\(=\)







\(\ds 28\)





two white beads














\(\ds \dbinom 8 3\)

\(=\)







\(\ds 56\)





three white beads














\(\ds \dbinom 8 4\)

\(=\)







\(\ds 70\)





four white beads














\(\ds \dbinom 8 5\)

\(=\)







\(\ds 56\)





five white beads














\(\ds \dbinom 8 6\)

\(=\)







\(\ds 28\)





six white beads














\(\ds \dbinom 8 7\)

\(=\)







\(\ds 8\)





seven white beads














\(\ds \dbinom 8 8\)

\(=\)







\(\ds 1\)





all white beads




Hence we can count the number of strings in each category and ensure we have utilised  them all.

We have:

All black

$\mathtt {BBBBBBBB}$
Trivially, only one such string and only one necklace.


One white bead

$\mathtt {BBBBBBBW}$
also $\mathtt {BBBBBBWB}$, $\mathtt {BBBBBWBB}$, $\mathtt {BBBBWBBB}$, $\mathtt {BBBWBBBB}$, $\mathtt {BBWBBBBB}$, $\mathtt {BWBBBBBB}$, $\mathtt {WBBBBBBB}$
which accounts for all $8$ strings.
Hence there is one necklace with one white bead.


Two white beads

$\mathtt {BBBBBBWW}$
also $\mathtt {BBBBBWWB}$, $\mathtt {BBBBWWBB}$, $\mathtt {BBBWWBBB}$, $\mathtt {BBWWBBBB}$, $\mathtt {BWWBBBBB}$, $\mathtt {WWBBBBBB}$, $\mathtt {WBBBBBBW}$
$\mathtt {BBBBBWBW}$
also $\mathtt {BBBBWBWB}$, $\mathtt {BBBWBWBB}$, $\mathtt {BBWBWBBB}$, $\mathtt {BWBWBBBB}$, $\mathtt {WBWBBBBB}$, $\mathtt {BWBBBBBW}$, $\mathtt {WBBBBBWB}$
$\mathtt {BBBBWBBW}$
also $\mathtt {BBBWBBWB}$, $\mathtt {BBWBBWBB}$, $\mathtt {BWBBWBBB}$, $\mathtt {WBBWBBBB}$, $\mathtt {BBWBBBBW}$, $\mathtt {BWBBBBWB}$, $\mathtt {WBBBBWBB}$
$\mathtt {BBBWBBBW}$
also $\mathtt {BBWBBBWB}$, $\mathtt {BWBBBWBB}$, $\mathtt {WBBBWBBB}$
This accounts for all $28$ strings.
Hence there are $4$ necklaces with $2$ white beads


Three white beads

$\mathtt {BBBBBWWW}$
also $\mathtt {BBBBWWWB}$, $\mathtt {BBBWWWBB}$, $\mathtt {BBWWWBBB}$, $\mathtt {BWWWBBBB}$, $\mathtt {WWWBBBBB}$, $\mathtt {WWBBBBBW}$, $\mathtt {WBBBBBWW}$
$\mathtt {BBBBWBWW}$
also $\mathtt {BBBWBWWB}$, $\mathtt {BBWBWWBB}$, $\mathtt {BWBWWBBB}$, $\mathtt {WBWWBBBB}$, $\mathtt {BWWBBBBW}$, $\mathtt {WWBBBBWB}$, $\mathtt {WBBBBWBW}$
also $\mathtt {BBBBWWBW}$, $\mathtt {BBBWWBWB}$, $\mathtt {BBWWBWBB}$, $\mathtt {BWWBWBBB}$, $\mathtt {WWBWBBBB}$, $\mathtt {WBWBBBBW}$, $\mathtt {BWBBBBWW}$, $\mathtt {WBBBBWWB}$
$\mathtt {BBBWBBWW}$
also $\mathtt {BBWBBWWB}$, $\mathtt {BWBBWWBB}$, $\mathtt {WBBWWBBB}$, $\mathtt {BBWWBBBW}$, $\mathtt {BWWBBBWB}$, $\mathtt {WWBBBWBB}$, $\mathtt {WBBBWBBW}$
also $\mathtt {WBBBWWBB}$, $\mathtt {BBBWWBBW}$, $\mathtt {BBWWBBWB}$, $\mathtt {BWWBBWBB}$, $\mathtt {WWBBWBBB}$, $\mathtt {WBBWBBBW}$, $\mathtt {BBWBBBWW}$, $\mathtt {BWBBBWWB}$
$\mathtt {BBBWBWBW}$
also $\mathtt {BBWBWBWB}$, $\mathtt {BWBWBWBB}$, $\mathtt {WBWBWBBB}$, $\mathtt {BWBWBBBW}$, $\mathtt {WBWBBBWB}$, $\mathtt {BWBBBWBW}$, $\mathtt {WBBBWBWB}$
$\mathtt {BBWBBWBW}$
also $\mathtt {BWBBWBWB}$, $\mathtt {WBBWBWBB}$, $\mathtt {BBWBWBBW}$, $\mathtt {BWBWBBWB}$, $\mathtt {WBWBBWBB}$, $\mathtt {BWBBWBBW}$, $\mathtt {WBBWBBWB}$
This accounts for all $56$ such strings.
Hence there are $5$ necklaces with $3$ white beads.


Four white beads

$\mathtt {BBBBWWWW}$
also $\mathtt {BBBWWWWB}$, $\mathtt {BBWWWWBB}$, $\mathtt {BWWWWBBB}$, $\mathtt {WWWWBBBB}$, $\mathtt {WWWBBBBW}$, $\mathtt {WWBBBBWW}$, $\mathtt {WBBBBWWW}$
$\mathtt {BBBWBWWW}$
also $\mathtt {BBWBWWWB}$, $\mathtt {BWBWWWBB}$, $\mathtt {WBWWWBBB}$, $\mathtt {BWWWBBBW}$, $\mathtt {WWWBBBWB}$, $\mathtt {WWBBBWBW}$, $\mathtt {WBBBWBWW}$
also $\mathtt {WWBWBBBW}$, $\mathtt {WBWBBBWW}$, $\mathtt {BWBBBWWW}$, $\mathtt {WBBBWWWB}$, $\mathtt {BBBWWWBW}$, $\mathtt {BBWWWBWB}$, $\mathtt {BWWWBWBB}$, $\mathtt {WWWBWBBB}$
$\mathtt {BBWBBWWW}$
also $\mathtt {BWBBWWWB}$, $\mathtt {WBBWWWBB}$, $\mathtt {BBWWWBBW}$, $\mathtt {BWWWBBWB}$, $\mathtt {WWWBBWBB}$, $\mathtt {WWBBWBBW}$, $\mathtt {WBBWBBWW}$
$\mathtt {BBWWBBWW}$
also $\mathtt {BWWBBWWB}$, $\mathtt {WWBBWWBB}$, $\mathtt {WBBWWBBW}$
$\mathtt {BBBWWBWW}$
also $\mathtt {BBWWBWWB}$, $\mathtt {BWWBWWBB}$, $\mathtt {WWBWWBBB}$, $\mathtt {WBWWBBBW}$, $\mathtt {BWWBBBWW}$, $\mathtt {WWBBBWWB}$, $\mathtt {WBBBWWBW}$
$\mathtt {BBWBWBWW}$
also $\mathtt {BWBWBWWB}$, $\mathtt {WBWBWWBB}$, $\mathtt {BWBWWBBW}$, $\mathtt {WBWWBBWB}$, $\mathtt {BWWBBWBW}$, $\mathtt {WWBBWBWB}$, $\mathtt {WBBWBWBW}$
also $\mathtt {WBWBWBBW}$, $\mathtt {BWBWBBWW}$, $\mathtt {WBWBBWWB}$, $\mathtt {BWBBWWBW}$, $\mathtt {WBBWWBWB}$, $\mathtt {BBWWBWBW}$, $\mathtt {BWWBWBWB}$
$\mathtt {BWBBWBWW}$
also $\mathtt {WBBWBWWB}$, $\mathtt {BBWBWWBW}$, $\mathtt {BWBWWBWB}$, $\mathtt {WBWWBWBB}$, $\mathtt {BWWBWBBW}$, $\mathtt {WWBWBBWB}$, $\mathtt {WBWBBWBW}$
$\mathtt {BWBWBWBW}$
also $\mathtt {WBWBWBWB}$
This accounts for all $70$ such strings.
Hence there are $8$ necklaces with $4$ white beads.

We now appeal to symmetry, and suggest that:

the strings with $5$ white beads can be analysed as with $3$ black beads
the strings with $6$ white beads can be analysed as with $2$ black beads
the strings with $7$ white beads can be analysed as with $1$ black bead
and note that the analysis mirrors that as with $3$, $2$ and $1$ white beads respectively.
Hence there are another:

$5$ necklaces with $5$ white beads
$4$ necklaces with $6$ white beads
$1$ necklace with $7$ white beads
and of course trivially $1$ necklace with $8$ white beads.
Thus there are:

$1 + 1 + 4 + 5 + 8 + 5 + 4 + 1 + 1 = 30$
necklaces.
$\blacksquare$


Historical Note
Martin Gardner discusses the general problem, using a recursive formula to give the number of different necklaces with $n$ beads of $m$ different colours, in his $1966$ collection Martin Gardner's New Mathematical Diversions from Scientific American.


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $275$. -- The Necklace Problem
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $458$. The Necklace Problem




