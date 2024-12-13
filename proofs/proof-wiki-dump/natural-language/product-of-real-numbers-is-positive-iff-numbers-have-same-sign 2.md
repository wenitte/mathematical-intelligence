# 

Source: https://proofwiki.org/wiki/Product_of_Real_Numbers_is_Positive_iff_Numbers_have_Same_Sign



Theorem
The product of two real numbers is greater than $0$ if and only if either both are greater than $0$ or both are less than $0$.

$\forall x, y \in \R: x \times y > 0 \iff \paren {x, y \in \R_{>0} } \lor \paren {x, y \in \R_{<0} }$


Proof
Sufficient Condition
Let $x \times y > 0$.
Aiming for a contradiction, suppose either $x = 0$ or $y = 0$.
Then from Real Zero is Zero Element:

$x \times y = 0$
Therefore by Proof by Contradiction:

$y \ne 0$ and $x \ne 0$
$\Box$

Let $x > 0$.
Aiming for a contradiction, suppose $y < 0$.














\(\ds x\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x \times y\)

\(<\)







\(\ds 0 \times 0\)





Real Number Ordering is Compatible with Multiplication: Negative Factor








\(\ds \leadsto \ \ \)





\(\ds x \times y\)

\(<\)







\(\ds 0\)





Definition of Dual Ordering



But by hypothesis, $x \times y > 0$.
Therefore by Proof by Contradiction:

$y > 0$
$\Box$

Let $x < 0$.
Aiming for a contradiction, suppose $y > 0$.














\(\ds x\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x \times y\)

\(<\)







\(\ds 0 \times 0\)





Real Number Axiom $\R \text O2$: Usual Ordering is Compatible with Multiplication








\(\ds \leadsto \ \ \)





\(\ds x \times y\)

\(<\)







\(\ds 0\)





Definition of Dual Ordering



But by hypothesis, $x \times y > 0$.
Therefore by Proof by Contradiction:

$y > 0$
$\Box$

Thus:

$x \times y > 0 \implies \paren {x > 0 \land y > 0} \lor \paren {x < 0 \land y < 0}$
$\Box$


Necessary Condition
Let $x > 0$ and $y > 0$.
Then from Strictly Positive Real Numbers are Closed under Multiplication:

$x \times y > 0$
$\Box$

Let $x < 0$ and $y < 0$.














\(\ds x\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x \times y\)

\(>\)







\(\ds 0 \times 0\)





Real Number Ordering is Compatible with Multiplication: Negative Factor








\(\ds \leadsto \ \ \)





\(\ds x \times y\)

\(>\)







\(\ds 0\)





Definition of Dual Ordering



$\Box$

Thus if either $x, y > 0$ or $x, y < 0$:

$x \times y > 0$
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 4$: The Integers and the Real Numbers: Exercise $2 \ \text{(h)}$




