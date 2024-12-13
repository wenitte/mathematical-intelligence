# 

Source: https://proofwiki.org/wiki/Product_Space_is_Homeomorphic_to_Product_Space_with_Factors_Commuted

Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $T_1 \times T_2$ denote the product space of $T_1$ and $T_2$.
Let $t: T_1 \times T_2 \to T_2 \times T_1$ be the mapping defined as:

$\forall \tuple {x, y} \in T_1 \times T_2: \map t {x, y} = \tuple {y, x}$

Then $t$ is a homeomorphism.


Proof
$t$ is trivially a bijection.
Let $U$ be open in $T_2 \times T_1$.
Then by definition of product space:

$U = U_2 \times U_1$
where:

$U_2$ is open in $T_2$
$U_1$ is open in $T_1$.
Hence by definition of product space:

$t^{-1} \sqbrk {U_2 \times U_1} = U_1 \times U_2$ is open in $T_1 \times T_2$.
Hence it has been shown that $t$ is continuous.

Similarly, let $V$ be open in $T_1 \times T_2$.
Then by definition of product space:

$V = V_1 \times V_2$
where:

$V_1$ is open in $T_1$
$V_2$ is open in $T_2$.
Hence by definition of product space:

$t \sqbrk {V_1 \times V_2} = V_2 \times V_1$ is open in $T_2 \times T_1$.
Hence it has been shown that $t^{-1}$ is continuous.
The result follows by definition of homeomorphism.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 18$




