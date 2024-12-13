# 

Source: https://proofwiki.org/wiki/Interval_Divided_into_Subsets

Theorem
Let $\mathbb I$ be a real interval.
Let $S$ and $T$ be non-empty subsets of $\mathbb I$ such that $\mathbb I \subseteq S \cup T$.

Then one of $S$ or $T$ contains an element at zero distance from the other.


Proof
$\mathbb I \subseteq S \cup T \implies \forall x \in \mathbb I: x \in S \lor x \in T$ from the definition of union.
That is, every element of $\mathbb I$ belongs either to $S$ or to $T$.

The distance of an element $c \in \R$ from a subset $S$ of $\R$ is given as:

$\ds \map d {c, S} = \map {\inf_{x \mathop \in S} } {\size {c - x} }$

Assume that $S$ and $T$ have no element in common, otherwise the result is trivial.
Without loss of generality, suppose that $\exists s \in S, t \in T$ such that $s < t$.
(If not, then $\exists s \in S, t \in T$ such that $s > t$, and the following argument may be amended appropriately.)
Let $T_0 = \set {x: x \in T: x > s}$.
As $t \in T_0$ it follows that $T_0 \ne \O$.
Also, $T_0$ is bounded below by $s$.
Let $b = \map \inf {T_0}$.

If $b \notin T$ then $b \in S$.
But from Distance from Subset of Real Numbers‎, it follows that $\map d {b, T_0} = 0$.
Thus we have found an element in $S$ which is zero distance from $T$.

Otherwise, $b \in T$.
Then $b > s$, and the open interval $\openint s b$ is a non-empty subset of $S$.
Hence $b$ is an element in $T$ which is zero distance from $S$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (6)$




