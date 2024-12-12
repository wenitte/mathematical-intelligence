# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Integers_Modulo_5_induced_by_Squaring/Multiplication_Modulo_Beta_is_Well-Defined

Theorem
Let $\beta$ denote the relation defined on the integers $\Z$ by:

$\forall x, y \in \Z: x \mathrel \beta y \iff x^2 \equiv y^2 \pmod 5$
We have that $\beta$ is an equivalence relation.

Let the $\times_\beta$ operator ("multiplication") on the $\beta$-equivalence classes be defined as:

$\eqclass a \beta \times_\beta \eqclass b \beta := \eqclass {a \times b} \beta$
Then such an operation is well-defined.


Proof
That $\beta$ is an equivalence relation is proved in Equivalence Relation on Integers Modulo 5 induced by Squaring.

Let:














\(\ds x, x'\)

\(\in\)







\(\ds \eqclass x \beta\)




















\(\ds y, y'\)

\(\in\)







\(\ds \eqclass y \beta\)










We have:














\(\ds x^2\)

\(\equiv\)







\(\ds \paren {x'}^2\)

\(\ds \pmod 5\)


















\(\ds y^2\)

\(\equiv\)







\(\ds \paren {y'}^2\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds \paren {x y}^2\)

\(\equiv\)







\(\ds \paren {x' y'}^2\)

\(\ds \pmod 5\)







Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: Equivalence Relations and Equivalence Classes: Exercise $9 \ \text{(ii)}$




