# 

Source: https://proofwiki.org/wiki/Order_of_Product_of_Disjoint_Permutations



Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\pi$ be a product of disjoint permutations of orders $k_1, k_2, \ldots, k_r$.
Then:

$\order \pi = \lcm \set {k_1, k_2, \ldots, k_r}$
where:

$\order \pi$ denotes the order of $\pi$ in $S_n$
$\lcm$ denotes lowest common multiple.


Proof
Suppose $\pi$ is a cycle.
Then from Order of Cycle is Length of Cycle, $\order \pi$ is its length.
As the LCM of $n \in \Z$ is $n$ itself, the result follows.

Let $\pi = \rho_1 \rho_2 \cdots \rho_r$ where:

each $\rho_s$ is of order $k_s$
$\rho_1$ to $\rho_r$ are mutually disjoint permutations.
Let $t = \lcm \set {k_1, k_2, \ldots, k_r}$.
From Disjoint Permutations Commute:

$\pi^t = \rho_1^t \rho_2^t \cdots \rho_r^t$
We have that:

$\forall s: 1 \le s \le r: \exists m \in \Z: t = m s$
Hence:

$\forall s: \rho_s^t = e$
Thus $\pi^t = e$ and certainly $\order \pi \divides t$.

Let $\pi^u = e$ for some $u \in \Z_{>0}$.
We have that $\rho_1, \rho_2, \cdots, \rho_r$ are mutually disjoint permutations.
Thus $\rho_1^u, \rho_2^u, \cdots, \rho_r^u$ are also mutually disjoint permutations.
Then we have that each $\rho_s^u = e$.
Hence $k_s \divides u$.
Thus, if $\pi^u = e$, then:

$t \divides u$
Thus, by choosing $u = \order \pi$:

$\order \pi = t = \lcm \set {k_1, k_2, \ldots, k_r}$
$\blacksquare$


Examples
Permutations in $S_9$
Consider the permutation given in cycle notation as

$\rho = \begin{pmatrix} 1 & 2 & 3 & 4 \end{pmatrix} \begin{pmatrix} 5 & 6 & 7 \end{pmatrix} \begin{pmatrix} 8 & 9 \end{pmatrix}$
Its order is given by:

$\order \rho = 12$


Non-Disjoint Permutations in $S_9$
Consider the permutation given in cycle notation as

$\rho = \begin{pmatrix} 1 & 2 & 3 & 4 \end{pmatrix} \begin{pmatrix} 2 & 6 & 7 \end{pmatrix} \begin{pmatrix} 3 & 9 \end{pmatrix}$
Its order is given by:

$\order \rho = 7$
and not $\lcm \set {4, 3, 2} = 12$.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 80$: Corollary
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Proposition $9.8$




