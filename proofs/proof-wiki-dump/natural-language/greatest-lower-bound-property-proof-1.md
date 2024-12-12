# 

Source: https://proofwiki.org/wiki/Greatest_Lower_Bound_Property/Proof_1

Theorem
Let $S \subset \R$ be a non-empty subset of the set of real numbers such that $S$ is bounded below.
Then $S$ admits an infimum in $\R$.
This is known as the greatest lower bound property of the real numbers.


Proof
Let $T = \set {x \in \R: -x \in S}$.
By Set of Real Numbers is Bounded Below iff Set of Negatives is Bounded Above:

$T$ is bounded above.
Thus by the Least Upper Bound Property, $T$ admits a supremum in $\R$.
From Negative of Supremum is Infimum of Negatives:

$\ds -\sup_{x \mathop \in T} x = \map {\inf_{x \mathop \in T} } {-x}$
That is, by definition of $T$:

$\ds -\sup_{x \mathop \in T} x = \inf_{x \mathop \in S} x$
and so $S$ admits an infimum in $\R$.
$\blacksquare$


Sources
2008: Michael Spivak: Calculus (4th ed.): $\S 8$: Least Upper Bounds: Problem $2 \ \text {(a)}$




