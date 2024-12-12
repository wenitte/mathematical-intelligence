# 

Source: https://proofwiki.org/wiki/Equivalence_Classes_of_Cross-Relation_on_Natural_Numbers

Theorem
Let $\struct {\N, +}$ be the semigroup of natural numbers under addition.
Let $\struct {\N \times \N, \oplus}$ be the (external) direct product of $\struct {\N, +}$ with itself, where $\oplus$ is the operation on $\N \times \N$ induced by $+$ on $\N$.
Let $\boxtimes$ be the cross-relation defined on $\N \times \N$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 + y_2 = x_2 + y_1$

Then $\eqclass {\tuple {x, y} } \boxtimes$ is the equivalence class of $\tuple {x, y}$ under $\boxtimes$, where:

$\eqclass {\tuple {x_1, y_1} } \boxtimes = \eqclass {\tuple {x_2, y_2} } \boxtimes \iff \tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2}$

The equivalence class $\eqclass {\tuple {x, y} } \boxtimes$ is more often denoted more simply as $\eqclass {x, y} {}$.


Proof
We have that $\struct {\N, +}$ is a commutative semigroup from Natural Number Addition is Commutative.
We also have the result Cross-Relation on Natural Numbers is Equivalence Relation.
The result follows from the definition of equivalence class.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.5$: Theorem $2.21$




