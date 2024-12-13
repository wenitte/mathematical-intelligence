# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/168_-_The_Magisterial_Bench/Solution/Proof_2

Modern Puzzles by Henry Ernest Dudeney: $168$
The Magisterial Bench
A bench of magistrates consists of two Englishmen, two Scotsmen, two Welshmen, one Frenchman, one Italian, one Spaniard, and one American.
The Englishmen will not sit beside one another, the Scotsmen will not sit beside one another, and the Welshmen also object to sitting together.
Now, in how many different ways may the ten men sit in a straight line so that no two men of the same nationality shall ever be next to one another?


Solution
$1 \, 895 \, 040$.


Proof
Let $X$ be the set of all permutations of the bench.
Let $E, S, W$ be the sets of all permutations where the two Englishmen, Scotsmen and Welshmen are forced to sit next to each other, respectively.
Then $\map {\complement_X} E, \map {\complement_X} S, \map {\complement_X} W$ are the sets of all permutations where the two Englishmen, Scotsmen and Welshmen do not sit next to each other, respectively.
The number of permutations the question asks for is:














\(\ds \)

\(\)







\(\ds \size {\map {\complement_X} E \cap \map {\complement_X} S \cap \map {\complement_X} W}\)




















\(\ds \)

\(=\)







\(\ds \size {\map {\complement_X} {E \cup S \cup W} }\)





De Morgan's Laws: Complement of Union














\(\ds \)

\(=\)







\(\ds \size X - \size {E \cup S \cup W}\)





Cardinality of Complement














\(\ds \)

\(=\)







\(\ds \size X - \paren {\size E + \size S + \size W - \size {E \cap S} - \size {S \cap W} - \size {E \cap W} + \size {E \cap S \cap W} }\)





Inclusion-Exclusion Principle




$E \cap S \cap W$ contains permutations of the form:

$\paren {E \ E} \ \paren {S \ S} \ \paren {W \ W} \ F \ I \ S \ A$
which can be considered as a set of $7$ objects that can be permuted in $7!$ ways, multiplied by $2^3$ to account for the fact that either of the two within the pairs can be arranged in $2$ different ways.
Thus:

$\size {E \cap S \cap W} = 7! \times 2^3 = 40 \, 320$

$E \cap S$ contains permutations of the form:

$\paren {E \ E} \ \paren {S \ S} \ W \ W \ F \ I \ S \ A$
where no restrictions are placed on the Welshmen.
This gives:

$\size {E \cap S} = 8! \times 2^2 = 161 \, 280$
Similarly:

$\size {S \cap W} = \size {E \cap W} = 161 \, 280$

$E$ contains all permutations of the form:

$\paren {E \ E} \ S \ S \ W \ W \ F \ I \ S \ A$
where the only restriction is the Englishmen must sit next to each other.
This gives:

$\size E = 9! \times 2 = 725 \, 760$
Similarly:

$\size S = \size W = 725 \, 760$

Finally $\size X = 10! = 3 \, 628 \, 800$.
Therefore:














\(\ds \)

\(\)







\(\ds \size X - \paren {\size E + \size S + \size W - \size {E \cap S} - \size {S \cap W} - \size {E \cap W} + \size {E \cap S \cap W} }\)




















\(\ds \)

\(=\)







\(\ds 10! - 3 \times 9! \times 2 + 3 \times 8! \times 2^2 - 7! \times 2^3\)




















\(\ds \)

\(=\)







\(\ds 1 \, 895 \, 040\)









is the number of permutations required.
$\blacksquare$





