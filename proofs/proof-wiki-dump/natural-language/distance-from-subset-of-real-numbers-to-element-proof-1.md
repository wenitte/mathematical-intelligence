# 

Source: https://proofwiki.org/wiki/Distance_from_Subset_of_Real_Numbers_to_Element/Proof_1

Theorem
Let $S$ be a subset of the set of real numbers $\R$.
Let $x \in \R$ be a real number.
Let $\map d {x, S}$ be the distance between $x$ and $S$.

Then:

$x \in S \implies \map d {x, S} = 0$


Proof
From the definition of distance:

$\forall x, y \in \R: \map d {x, y} = \size {x - y}$
Thus:

$\ds \map d {x, S} = \map {\inf_{y \mathop \in S} } {\size {x - y} }$

Consider the set $T = \set {\size {x - y}: y \in S}$.
This has $0$ as a lower bound as Absolute Value is Bounded Below by Zero.
So:

$\ds \map d {x, S} = \map {\inf_{y \mathop \in S} } {\size {x - y} } \ge 0$
If $x \in S$ then:

$\size {x - x} = 0 \in T$
and so:

$\ds 0 \le \map {\inf_{y \mathop \in S} } {\map d {x, y} }$
Thus:

$\ds \map d {x, S} = \map {\inf_{y \mathop \in S} } {\map d {x, y} } = 0$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (5) \ \text {(i)}$




