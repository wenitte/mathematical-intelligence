# 

Source: https://proofwiki.org/wiki/Greatest_Lower_Bound_Property/Proof_2

Theorem
Let $S \subset \R$ be a non-empty subset of the set of real numbers such that $S$ is bounded below.
Then $S$ admits an infimum in $\R$.
This is known as the greatest lower bound property of the real numbers.


Proof
Let $T$ be the set of lower bounds of $S$:

$T = \set {x \in \R: x \le \forall y \in S}$

Since $S$ is bounded below, $T$ is non-empty.
Now, every $x \in T$ and $y \in S$ satisfy $x \leq y$.
That is, $T$ is bounded above by every element of $S$.
By the Least Upper Bound Property, $T$ admits a supremum in $\R$.
Let $B = \sup T$.

Since every element of $S$ is an upper bound of $T$ it follows from the definition of supremum that:

$\forall y \in S : y \ge B$
Thus $B$ is a lower bound of $S$.

Because $B$ is an upper bound of $T$:

$\forall x \in T : x \le B$
and so $B$ is the infimum of $S$.
$\blacksquare$


Sources
2008: Michael Spivak: Calculus (4th ed.): $\S 8$: Least Upper Bounds: Problem $2 \ \text {(b)}$




