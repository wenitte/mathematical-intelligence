# 

Source: https://proofwiki.org/wiki/Heine-Cantor_Theorem


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $M_1$ be compact.
Let $f: A_1 \to A_2$ be a continuous mapping.

Then $f$ is uniformly continuous.


Proof 1
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.

For all $x \in A_1$, define:

$\map \Delta x = \set {\delta \in \R_{>0}: \forall y \in A_1: \map {d_1} {x, y} < 2 \delta \implies \map {d_2} {\map f x, \map f y} < \dfrac \epsilon 2}$
Define:

$\CC = \set {\map {B_{\delta} } x: x \in A_1, \, \delta \in \map \Delta x}$
where $\map {B_{\delta} } x$ denotes the open $\delta$-ball of $x$ in $M_1$.
From the definition of continuity, it follows that $\CC$ is a cover for $A_1$.
From Open Ball of Metric Space is Open Set, it therefore follows that $\CC$ is an open cover for $A_1$.

By the definition of a compact metric space, there exists a finite subcover $\set {\map {B_{\delta_1} } {x_1}, \map {B_{\delta_2} } {x_2}, \ldots, \map {B_{\delta_n} } {x_n} }$ of $\CC$ for $A_1$.
Define:

$\delta = \min \set {\delta_1, \delta_2, \ldots, \delta_n}$

Let $x, y \in A_1$ satisfy $\map {d_1} {x, y} < \delta$.
By the definition of a cover, there exists a $k \in \set{1, 2, \ldots, n}$ such that $\map {d_1} {x, x_k} < \delta_k$.
Then:














\(\ds \map {d_1} {y, x_k}\)

\(\le\)







\(\ds \map {d_1} {y, x} + \map {d_1} {x, x_k}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \delta + \delta_k\)





Metric Space Axiom $(\text M 3)$














\(\ds \)

\(\le\)







\(\ds 2 \delta_k\)










By the definition of $\map \Delta {x_k}$, it follows that:

$\map {d_2} {\map f x, \map f {x_k} } < \dfrac \epsilon 2$
$\map {d_2} {\map f y, \map f {x_k} } < \dfrac \epsilon 2$
Hence:














\(\ds \map {d_2} {\map f x, \map f y}\)

\(\le\)







\(\ds \map {d_2} {\map f x, \map f {x_k} } + \map {d_2} {\map f {x_k}, \map f y}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





Metric Space Axiom $(\text M 3)$














\(\ds \)

\(=\)







\(\ds \epsilon\)









The result follows from the definition of uniform continuity.
$\blacksquare$


Proof 2
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


Also see
Uniform Continuity on Metric Space does not imply Compactness


Source of Name
This entry was named for Heinrich Eduard Heine and Georg Cantor.


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (previous): $4.19$




