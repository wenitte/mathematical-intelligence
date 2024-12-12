# 

Source: https://proofwiki.org/wiki/Box_Topology_on_Finite_Product_Space_is_Product_Topology

Theorem
Let $n \in \N$.
For all $k \in \set {1, \ldots, n}$, let $T_k = \struct {X_k, \tau_k}$ be topological spaces.
Let $\ds X = \prod_{k \mathop = 1}^n X_k$ be the cartesian product of $X_1, \ldots, X_n$.

Then the box topology and the product topology on $X$ are identical.


Proof
Denote the product topology on $X$ as $\tau$, and the box topology on $X$ as $\tau'$.
Suppose that $U \in \tau'$.
Then there exists an index set $I$ such that:

$\ds U = \bigcup_{i \mathop \in I} \struct {U_{i, 1} \times U_{i, 2} \times \cdots \times U_{i, n} }$
where $U_{i, k} \in \tau_k$ for all $i \in I, k \in \set {1, \ldots, n}$.
When $\pr_k: X \to X_k$ denotes the $k$th projection on $X$, we have:

$\pr_k^{-1} \sqbrk {U_{i, k} } = X_1 \times X_2 \times \cdots \times X_{k - 1} \times U_{i, k} \times X_{k + 1} \times \cdots \times X_n$
It follows that:

$\ds U = \bigcup_{i \mathop \in I} \struct {U_{i, 1} \times U_{i, 2} \times \cdots \times U_{i, n} } = \bigcup_{i \mathop \in I} \bigcap_{k \mathop = 1}^{n_i} \pr_k^{-1} \sqbrk {U_{i, k} }$
By definition of product topology, $U \in \tau$, so $\tau' \subseteq \tau$.
$\Box$

Suppose that $U \in \tau$.
Then there exists an index set $I$, so $U$ can be expressed as:
$U = \ds \bigcup_{i \mathop \in I} \bigcap_{l \mathop = 1}^{m_i} \pr_{j_l}^{-1} \sqbrk {U_{i, l} }$
where $m_i \in \N$, $j_1, j_2, \ldots, j_{m_i} \in \set {1, \ldots, n}$, and $U_{i, l} \in \tau_{j_l}$ for all $i \in I, l \in \set {1, \ldots, m_i}$.
Then:














\(\ds U\)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \bigcap_{l \mathop = 1}^{m_i} \pr_{j_l}^{-1} \sqbrk {U_{i, l} }\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \bigcap_{k \mathop = 1}^n \bigcap_{l: k \mathop = j_l} \pr_k^{-1} \sqbrk {U_{i, l} }\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \bigcap_{k \mathop = 1}^n \struct {X_1 \times X_2 \times \cdots \times X_{k - 1} \times \bigcap_{l: k \mathop = j_l} U_{i, l} \times X_{k + 1} \times \cdots \times X_n}\)









As $\ds \bigcap_{l: k \mathop = j_l} U_{i, l} \in \tau_k$, it follows that:

$\ds \struct {X_1 \times X_2 \times \cdots \times X_{k - 1} \times \bigcap_{l: k \mathop = j_l} U_{i, l} \times X_{k + 1} \times \cdots \times X_n} \in \tau'$
By definition of topology, it follows that $U \in \tau'$, so $\tau \subseteq \tau'$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $\S 19$




