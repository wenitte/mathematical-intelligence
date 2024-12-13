# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/14_-_Horses_and_Bullocks/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $14$
Horses and Bullocks
A dealer bought a number of horses at $\pounds 17, 4 \shillings$ each,
and a number of bullocks at $\pounds 13, 5 \shillings$ each.
He then discovered that the horses had cost him in all $33 \shillings$ more than the bullocks.
Now, what is the smallest number of each that he must have bought?


Solution
$252$ horses and $327$ bullocks.


Proof
We have that:

$\pounds 17, 4 \shillings = 344 \shillings$
$\pounds 13, 5 \shillings = 265 \shillings$
Hence we are to find the solution to the Diophantine equation:

$344 h - 265 b = 33$
To quote Dudeney:

This is easy enough if you know how, but we cannot go into the matter here.

If one decides to go into the matter, one finds that a standard method to solve this equation is to use the Euclidean Algorithm on $344$ and $265$:














\(\ds 344\)

\(=\)







\(\ds 1 \times 265 + 79\)




















\(\ds 265\)

\(=\)







\(\ds 3 \times 79 + 28\)




















\(\ds 79\)

\(=\)







\(\ds 2 \times 28 + 23\)




















\(\ds 28\)

\(=\)







\(\ds 1 \times 23 + 5\)




















\(\ds 23\)

\(=\)







\(\ds 4 \times 5 + 3\)




















\(\ds 5\)

\(=\)







\(\ds 1 \times 3 + 2\)




















\(\ds 3\)

\(=\)







\(\ds 1 \times 2 + 1\)










Now we reverse the equations:














\(\ds 1\)

\(=\)







\(\ds 3 \times 1 - 2\)




















\(\ds \)

\(=\)







\(\ds 3 - \paren {5 - 3}\)




















\(\ds \)

\(=\)







\(\ds 2 \times 3 - 5\)




















\(\ds \)

\(=\)







\(\ds 2 \times \paren {23 - 4 \times 5} - 5\)




















\(\ds \)

\(=\)







\(\ds 2 \times 23 - 9 \times 5\)




















\(\ds \)

\(=\)







\(\ds 2 \times 23 - 9 \times \paren {28 - 23}\)




















\(\ds \)

\(=\)







\(\ds 11 \times 23 - 9 \times 28\)




















\(\ds \)

\(=\)







\(\ds 11 \times \paren {79 - 2 \times 28} - 9 \times 28\)




















\(\ds \)

\(=\)







\(\ds 11 \times 79 - 31 \times 28\)




















\(\ds \)

\(=\)







\(\ds 11 \times 79 - 31 \times \paren {265 - 3 \times 79}\)




















\(\ds \)

\(=\)







\(\ds 104 \times 79 - 31 \times 265\)




















\(\ds \)

\(=\)







\(\ds 104 \times \paren {344 - 265} - 31 \times 265\)




















\(\ds \)

\(=\)







\(\ds 104 \times 344 - 135 \times 265\)









Therefore:

$33 = \paren {33 \times 104} \times 344 - \paren {33 \times 135} \times 265$
which gives the solutions:

$h' = 3432, b' = 4455$
but this solution can be reduced.

We can subtract $265$ from $h'$ and $344$ from $b'$ simultaneously to obtain smaller solutions.
We now get:

$h = 3432 - 12 \times 265 = 252$
$b = 4455 - 12 \times 344 = 327$
which is minimal, and we check that














\(\ds \)

\(\)







\(\ds 252 \times 344 - 327 \times 265\)




















\(\ds \)

\(=\)







\(\ds 86 \, 688 - 86 \, 655\)




















\(\ds \)

\(=\)







\(\ds 33\)









Hence the dealer has bought $252$ horses and $327$ bullocks.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $14$. -- Horses and Bullocks
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $20$. Horses and Bullocks




