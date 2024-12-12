# 

Source: https://proofwiki.org/wiki/Best_Rational_Approximations_to_Root_2_generate_Pythagorean_Triples/Proof_2

Theorem
Consider the Sequence of Best Rational Approximations to Square Root of 2:

$\sequence S := \dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \ldots$
Every odd term of $\sequence S$ can be expressed as:

$\dfrac {2 a + 1} b$
such that:

$a^2 + \paren {a + 1}^2 = b^2$


Proof
From Pell Number as Sum of Squares, we have:

$P_{2 n + 1} = P_{n + 1}^2 + P_n^2$
Therefore:














\(\ds P_{2 n + 1}^2\)

\(=\)







\(\ds \paren {P_{n + 1}^2 + P_n^2}^2\)




















\(\ds \)

\(=\)







\(\ds P_{n + 1}^4 + 2 P_{n + 1}^2 P_n^2 + P_n^4\)





Square of Sum














\(\ds \)

\(=\)







\(\ds P_{n + 1}^4 + 2 P_{n + 1}^2 P_n^2 + P_n^4 + 2 P_{n + 1}^2 P_n^2 - 2 P_{n + 1}^2 P_n^2\)





adding zero














\(\ds \)

\(=\)







\(\ds P_{n + 1}^4 - 2 P_{n + 1}^2 P_n^2 + P_n^4 + 4 P_{n + 1}^2 P_n^2\)





regrouping














\(\ds \)

\(=\)







\(\ds \paren {P_{n + 1}^2 - P_n^2}^2 + \paren {2 P_{n + 1} P_n}^2\)










$\blacksquare$





