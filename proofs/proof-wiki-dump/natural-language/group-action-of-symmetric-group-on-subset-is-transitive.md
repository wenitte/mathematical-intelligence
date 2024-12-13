# 

Source: https://proofwiki.org/wiki/Group_Action_of_Symmetric_Group_on_Subset_is_Transitive

Theorem
Let $\N_n$ denote the set $\set {1, 2, \ldots, n}$.
Let $\struct {S_n, \circ}$ denote the symmetric group on $\N_n$.

Let $r \in \N: 0 < r \le n$.
Let $B_r$ denote the set of all subsets of $\N_n$ of cardinality $r$:

$B_r  := \set {S \subseteq \N_n: \card S = r}$

Let $*$ be the mapping $*: S_n \times B_r \to B_r$ defined as:

$\forall \pi \in S_n, \forall S \in B_r: \pi * B_r = \pi \sqbrk S$
where $\pi \sqbrk S$ denotes the image of $S$ under $\pi$.

Then $*$ is a transitive group action.


Proof
From Group Action of Symmetric Group on Subset it is established that $*$ is a group action.
Let $U = \set {u_1, u_2, \ldots, u_r}$ and $V = \set {v_1, v_2, \ldots, v_r}$ be elements of $B_r$.
Then there exists a permutation $\rho \in S_n$ such that:

$\map \rho {u_k} = v_k$
for all $k \in \set {1, 2, \ldots, r}$.
Thus:

$\rho \sqbrk U = V$
Thus $B_r$ is the orbit of all $U \in B_r$.
Hence the result by definition of transitive group action.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.5$. Orbits: Example $120$




