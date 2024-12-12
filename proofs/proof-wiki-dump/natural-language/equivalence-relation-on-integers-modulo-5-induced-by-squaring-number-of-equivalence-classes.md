# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Integers_Modulo_5_induced_by_Squaring/Number_of_Equivalence_Classes

Theorem
Let $\beta$ denote the relation defined on the integers $\Z$ by:

$\forall x, y \in \Z: x \mathrel \beta y \iff x^2 \equiv y^2 \pmod 5$
We have that $\beta$ is an equivalence relation.

The number of distinct $\beta$-equivalence classes is $3$:














\(\ds \eqclass 0 \beta\)

\(\)







\(\ds \)




















\(\ds \eqclass 1 \beta\)

\(=\)







\(\ds \eqclass 4 \beta\)




















\(\ds \eqclass 2 \beta\)

\(=\)







\(\ds \eqclass 3 \beta\)











Proof
That $\beta$ is an equivalence relation is proved in Equivalence Relation on Integers Modulo 5 induced by Squaring.

The set of residue classes modulo $5$ is:

$\set {\eqclass 0 5, \eqclass 1 5, \eqclass 2 5, \eqclass 3 5, \eqclass 4 5}$

Then:














\(\ds 0 \times 0\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass 0 5 \times_5 \eqclass 0 5\)

\(=\)







\(\ds \eqclass 0 5\)




















\(\ds 1 \times 1\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass 1 5 \times_5 \eqclass 1 5\)

\(=\)







\(\ds \eqclass 1 5\)




















\(\ds 2 \times 2\)

\(=\)







\(\ds 4\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass 2 5 \times_5 \eqclass 2 5\)

\(=\)







\(\ds \eqclass 4 5\)




















\(\ds 3 \times 3\)

\(=\)







\(\ds 9\)




















\(\ds \)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds \eqclass 3 5 \times_5 \eqclass 3 5\)

\(=\)







\(\ds \eqclass 4 5\)




















\(\ds 4 \times 4\)

\(=\)







\(\ds 16\)




















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds \eqclass 4 5 \times_5 \eqclass 4 5\)

\(=\)







\(\ds \eqclass 1 5\)










Thus we have that:

$\eqclass 1 5^2 = \eqclass 4 5^2 = \eqclass 1 \beta$
$\eqclass 2 5^2 = \eqclass 3 5^2 = \eqclass 2 \beta$
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $9$




