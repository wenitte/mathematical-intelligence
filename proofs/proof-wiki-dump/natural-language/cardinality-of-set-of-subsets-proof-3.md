# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Subsets/Proof_3

Theorem
Let $S$ be a set such that $\card S = n$.
Let $m \le n$.

Then the number of subsets $T$ of $S$ such that $\card T = m$ is:

$\dbinom n m = \dfrac {n!} {m! \paren {n - m}!}$


Proof
Let $\N_n$ denote the set $\set {1, 2, \ldots, n}$.
Let $\struct {S_n, \circ}$ denote the symmetric group on $\N_n$.
Let $r \in \N: 0 < r \le n$.
Let $B_r$ denote the set of all subsets of $\N_n$ of cardinality $r$:

$B_r  := \set {S \subseteq \N_n: \card S = r}$

Let $*$ be the mapping $*: S_n \times B_r \to B_r$ defined as:

$\forall \pi \in S_n, \forall S \in B_r: \pi * B_r = \pi \sqbrk S$
where $\pi \sqbrk S$ denotes the image of $S$ under $\pi$.
From Group Action of Symmetric Group on Subset it is established that $*$ is a group action.

The stabilizer of any $U \in B_r$ is the set of permutations on $\N_n$ that fix $U$.

Let $U = \set {1, 2, \ldots, r}$.
So:

$\tuple {a_1, a_2, \ldots, a_r}$ can be any one of the $r!$ permutations of $1, 2, \ldots, r$
$\tuple {a_{r + 1}, a_{r + 2}, \ldots, _n}$ can be any one of the $\paren {n - r}!$ permutations of $r + 1, r + 2, \ldots, n$.
Thus:

$\order {\Stab U} = r! \paren {n - r}!$
From Group Action of Symmetric Group on Subset is Transitive:

$B_r = \Orb U$
and so:

$\card {B_r} = \card {\Orb U}$
From the Orbit-Stabilizer Theorem:

$\card {\Orb U} = \dfrac {\order {S_n} } {\order {\Stab U} } = \dfrac {n!} {r! \paren {n - r}!}$
But $\card {B_r}$ is the number of subsets of $\N_n$ of cardinality $r$.
Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.5$. Orbits: Example $120$




