# 

Source: https://proofwiki.org/wiki/Conjugacy_Class_Equation/Proof_2

Theorem
Let $G$ be a group.
Let $\order G$ denote the order of $G$.
Let $\map Z G$ denote the center of $G$.
Let $x \in G$.
Let $\map {N_G} x$ denote the normalizer of $x$ in $G$.
Let $\index G {\map {N_G} x}$ denote the index of $\map {N_G} x$ in $G$.

Let $m$ be the number of non-singleton conjugacy classes of $G$.
Let $x_j: j \in \set {1, 2, \ldots, m}$ be arbitrary elements of those conjugacy classes.
Then:

$\ds \order G = \order {\map Z G} + \sum_{j \mathop = 1}^m \index G {\map {N_G} {x_j} }$


Proof
Let the distinct orbits of $G$ under the conjugacy action be:

$\Orb {x_1}, \Orb {x_2}, \ldots, \Orb {x_s}$
Then from the Partition Equation:

$\order G = \order {\Orb {x_1} } + \order {\Orb {x_2} } + \cdots + \order {\Orb {x_s} }$

From the Orbit-Stabilizer Theorem:

$\order {\Orb {x_i} } \divides \order G, i = 1, \ldots, s$

The result follows from the definition of the conjugacy action.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions




