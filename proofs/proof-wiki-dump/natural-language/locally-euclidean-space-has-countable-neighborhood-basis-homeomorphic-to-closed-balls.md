# 

Source: https://proofwiki.org/wiki/Locally_Euclidean_Space_has_Countable_Neighborhood_Basis_Homeomorphic_to_Closed_Balls


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M$ be a locally Euclidean space of some dimension $d$.
Let $m \in M$.

Then: 

there exists a countable neighborhood basis $\family{N_n}_{n \in \N}$ of $m$ where each $N_n$ is the homeomorphic image of a closed ball of $\R^d$
Proof
By definition of a locally Euclidean space:

there exists an open neighbourhood $U$ of $m$ which is homeomorphic to an open subset $V$ of Euclidean space $\R^d$.
Let $\phi: U \to V$ be a homeomorphism.

By definition of the Euclidean space $\R^d$ the topology on $\R^d$ is the topology induced by the metric:

$\ds \map {d_2} {x, y} := \paren {\sum_{i \mathop = 1}^n \paren {x_i - y_i}^2}^{1 / 2}$
where $x = \tuple {x_1, x_2, \ldots, x_d}, y = \tuple {y_1, y_2, \ldots, y_d} \in \R^d$.

By definition of the induced topology:

$\exists \epsilon > 0 : \map {B_\epsilon} {\map \phi m} \subseteq V$
where $\map {B_\epsilon} {\map \phi m}$ is the open ball of radius $\epsilon$ and center $\map \phi m$

Consider the set of closed balls:

$\NN_m = \set{\map {B^-_{\epsilon / 2 n}} {\map \phi m} : n \in \N_{>0}}$
From Sequence of Reciprocals is Null Sequence:

the sequence $\sequence{\dfrac \epsilon {2 n}}_{n \in \N_{>0}}$ is a null sequence
From Null Sequence induces Neighborhood Basis of Closed Sets in Metric Space:

$\NN_m$ is a countable neighborhood basis of $\map \phi m$ in $\R^d$
From Neighborhood Basis of Open Subspace iff Neighborhood Basis:

$\NN_m$ is a countable local basis of $\map \phi m$ in $V$

For each $n \in \N_{>0}$, let:

$U_n = \phi^{-1} \sqbrk {\map {B_{\epsilon / n}} {\map \phi m}}$
Consider the set:

$\NN'_m = \set{U_n : n \in \N_{>0}}$

From Inverse of Homeomorphism is Homeomorphism:

$\phi^{-1} : U \to V$ is a homeomorphism
From Homeomorphic Image of Neighborhood Basis is Neighborhood Basis and Continuity Defined from Closed Sets:

$\NN'_m$ is a Neighborhood basis of $m$ in $U$
From Neighborhood Basis of Open Subspace iff Neighborhood Basis:

$\NN'_m$ is a local basis of $m$ in $M$
From Restriction of Homeomorphism is Homeomorphism:

$\forall n \in \N_{>0}: N_n = \phi^{-1} \sqbrk {\map {B_{\epsilon / n}^-} {\map \phi m}}$ is homeomorphic to the closed ball $\map {B_{\epsilon / n}^-} {\map \phi m}$
The result follows.
$\blacksquare$





