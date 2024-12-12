# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Integers_Modulo_5_induced_by_Squaring/Addition_Modulo_Beta_is_not_Well-Defined

Theorem
Let $\beta$ denote the relation defined on the integers $\Z$ by:

$\forall x, y \in \Z: x \mathrel \beta y \iff x^2 \equiv y^2 \pmod 5$
We have that $\beta$ is an equivalence relation.

Let the $+_\beta$ operator ("addition") on the $\beta$-equivalence classes be defined as:

$\eqclass a \beta +_\beta \eqclass b \beta := \eqclass {a + b} \beta$
Then such an operation is not well-defined.


Proof
That $\beta$ is an equivalence relation is proved in Equivalence Relation on Integers Modulo 5 induced by Squaring.

From Number of Equivalence Classes we have:
We have:














\(\ds \eqclass 1 \beta\)

\(=\)







\(\ds \eqclass 4 \beta\)




















\(\ds \eqclass 2 \beta\)

\(=\)







\(\ds \eqclass 3 \beta\)










Thus:














\(\ds \eqclass 0 \beta\)

\(=\)







\(\ds \eqclass 5 \beta\)




















\(\ds \)

\(=\)







\(\ds \eqclass {1 + 4} \beta\)




















\(\ds \)

\(=\)







\(\ds \eqclass 1 \beta + \eqclass 4 \beta\)




















\(\ds \)

\(=\)







\(\ds \eqclass 1 \beta + \eqclass 1 \beta\)




















\(\ds \)

\(=\)







\(\ds \eqclass 2 \beta\)









Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $9 \ \text {(i)}$




