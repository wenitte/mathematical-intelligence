# 

Source: https://proofwiki.org/wiki/Finite_Subset_of_Topological_Vector_Space_is_von_Neumann-Bounded

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \tau}$ be a topological vector space over $\GF$. 
Let $F$ be a finite subset of $X$. 

Then $F$ is von Neumann-bounded.


Proof
Let $F = \set {v_1, \ldots, v_m}$.
Let $U$ be an open neighborhood of ${\mathbf 0}_X$.
From Multiple of Vector in Topological Vector Space Converges, we have: 

$\ds \frac {v_i} n \to {\mathbf 0}_X$ as $n \to \infty$
for each $1 \le i \le n$.
Hence for each $1 \le i \le n$, there exists $N_i \in \N$ such that:

$\ds \frac {v_i} n \in U$ for $n \ge N_i$
Let:

$N = \max \set {N_1, \ldots, N_m}$
Then for $n \ge N$ we have:

$v_i \in n U$ for each $1 \le i \le n$.
That is:

$F \subseteq n U$ for each $1 \le i \le n$.
Since $U$ was an arbitrary open neighborhood of ${\mathbf 0}_X$, we have that $F$ is von Neumann-bounded.
$\blacksquare$





