# 

Source: https://proofwiki.org/wiki/Limit_Ordinals_Preserved_Under_Ordinal_Multiplication

Theorem
Let $x$ and $y$ be ordinals.
Let $x$ be non-empty.
Let $y$ be a limit ordinal.

It follows that the ordinal product $\left({x \times y}\right)$ is a limit ordinal.


Proof
$y$ is a limit ordinal and thus is nonzero, by definition.
$x$ and $y$ are both nonzero.
So by Ordinals have No Zero Divisors:

$x \times y \ne 0$
So by definition of limit ordinal:

$x \times y \in K_{II} \lor \exists z \in \On: x \times y = z^+$

Suppose that $x \times y = z^+$ for some ordinal $z$.














\(\ds x \times y\)

\(=\)







\(\ds \bigcup_{w \mathop \in y} \paren {x \times w}\)





Definition of Ordinal Multiplication




It follows that:














\(\ds z\)

\(\in\)







\(\ds \bigcup_{w \mathop \in y} \tuple {x \times w}\)














\(\ds \leadsto \ \ \)

\(\ds \exists w \in y: \, \)



\(\ds z\)

\(\in\)







\(\ds x \times w\)





Definition of Set Union








\(\ds \leadsto \ \ \)

\(\ds \exists w \in y: \, \)



\(\ds z^+\)

\(\in\)







\(\ds \paren {x \times w}^+\)





Successor is Less than Successor














\(\ds \paren {x \times w}^+\)

\(=\)







\(\ds \paren {x \times w} + 1\)





Ordinal Addition by One








\(\ds \leadsto \ \ \)

\(\ds \exists w \in y: \, \)



\(\ds z^+\)

\(\in\)







\(\ds \paren {x \times w} + 1\)










But by Subset is Right Compatible with Ordinal Addition:

$\paren {x \times w} + 1 \subseteq \paren {x \times w} + x$
Therefore:










\(\ds \exists w \in y: \, \)



\(\ds z^+\)

\(\in\)







\(\ds \paren {x \times w} + x\)




















\(\ds \)

\(=\)







\(\ds \paren {x \times w^+}\)





Definition of Ordinal Multiplication




But by Successor of Ordinal Smaller than Limit Ordinal is also Smaller:

$w^+ \in y$
Therefore:

$z^+ \in x \times y$
contradicting the fact that $z^+ = x \times y$.
Thus:

$z^+ \ne x \times y$
and:

$x \times y \in K_{II}$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.23$




