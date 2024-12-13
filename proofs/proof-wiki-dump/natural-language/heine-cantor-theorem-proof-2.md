# 

Source: https://proofwiki.org/wiki/Heine-Cantor_Theorem/Proof_2

Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $M_1$ be compact.
Let $f: A_1 \to A_2$ be a continuous mapping.

Then $f$ is uniformly continuous.


Proof
Let $A_1 \times A_1$ and $A_2 \times A_2$ be considered with the product topology.
Let $F: A_1 \times A_1 \to A_2 \times A_2$ be the mapping defined as:

$\map F {x, y} = \tuple {\map f x, \map f y}$
By Projection from Product Topology is Continuous, we have that the (first and second) projections on $A_1 \times A_1$ are continuous.
By Composite of Continuous Mappings is Continuous and Continuous Mapping to Product Space, it follows that $F$ is continuous.
By Distance Function of Metric Space is Continuous and Composite of Continuous Mappings is Continuous, it follows that $d_2 \circ F: A_1 \times A_1 \to \R$ is continuous.

Let $\epsilon \in \R_{>0}$ be a strictly positive real number.
By Continuity Defined from Closed Sets, the set:

$C = \paren {d_2 \circ F}^{-1} \sqbrk {\hointr \epsilon \to} = \set {\tuple {x, y} \in A_1 \times A_1: \map {d_2} {\map f x, \map f y} \ge \epsilon}$
is closed in $A_1 \times A_1$.
By Topological Product of Compact Spaces, $A_1 \times A_1$ is compact.
By Closed Subspace of Compact Space is Compact, $C$ is compact.
By Distance Function of Metric Space is Continuous and Continuous Image of Compact Space is Compact, $d_1 \sqbrk C$ is compact.

Therefore, $d_1 \sqbrk C$ has a smallest element $\delta$.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Metric Space Axiom $(\text M 1)$ and Metric Space Axiom $(\text M 4)$, we have that $\delta > 0$.
By construction, it follows that:

$\forall x, y \in A_1: \map {d_1} {x, y} < \delta \implies \map {d_2} {\map f x, \map f y} < \epsilon$
Hence, $f$ is uniformly continuous.
$\blacksquare$


Source of Name
This entry was named for Heinrich Eduard Heine and Georg Cantor.





