# 

Source: https://proofwiki.org/wiki/Lipschitz_Equivalent_Metrics_are_Topologically_Equivalent/Proof_3

Theorem
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.
Let $d_1$ and $d_2$ be Lipschitz equivalent.

Then $d_1$ and $d_2$ are topologically equivalent.


Proof
By definition of Lipschitz equivalence:
$\exists K_1, K_2 \in \R_{>0}$ such that:

$(1): \quad \forall x, y \in A: \map {d_2} {x, y} \le K_1 \map {d_1} {x, y}$
$(2): \quad \forall x, y \in A: \map {d_1} {x, y} \le K_2 \map {d_2} {x, y}$
By Identity Mapping between Metrics separated by Scale Factor is Continuous:

the identity mapping from $M_1$ to $M_2$ is continuous
the identity mapping from $M_2$ to $M_1$ is continuous.

Hence the result by definition of topological equivalence.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 7$: Subspaces and Equivalence of Metric Spaces: Corollary $7.9$




