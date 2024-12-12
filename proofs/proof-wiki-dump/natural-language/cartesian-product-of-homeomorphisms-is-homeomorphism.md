# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Homeomorphisms_is_Homeomorphism

Theorem
Let $S_1, S_2, T_1, T_2$ be topological spaces.
Let $f_1: S_1 \to T_1$ and $f_2: S_2 \to T_2$ be mappings.
Let:

$f_1 \times f_2: S_1 \times S_2 \to T_1 \times T_2$
be defined as:

$\forall \tuple {x, y} \in S_1 \times S_2: \map {\paren {f_1 \times f_2} } {x, y} = \tuple {\map {f_1} x, \map {f_2} y}$
where $S_1 \times S_2$ denotes the product space of $S_1$ and $S_2$, and similarly for $T_1 \times T_2$.

Let $f_1$ and $f_2$ be homeomorphisms.

Then $f_1 \times f_2$ is also a homeomorphism.


Proof
From Cartesian Product of Mappings is Continuous iff Factor Mappings are Continuous:

$f_1 \times f_2$ is continuous.
From Cartesian Product of Bijections is Bijection:

$f_1 \times f_2$ is a bijection.
From Cartesian Product of Mappings is Continuous iff Factor Mappings are Continuous:

$\paren {f_1 \times f_2}^{-1} = f_1^{-1} \times f_2^{-1}$ is continuous.
So, by definition, $f_1 \times f_2$ is a homeomorphism.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 20$




