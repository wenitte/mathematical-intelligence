# 

Source: https://proofwiki.org/wiki/Null_Sequence_induces_Neighborhood_Basis_of_Closed_Sets_in_Metric_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $a \in A$.
Let $\sequence {x_n}$ be a real null sequence such that:

$\forall n \in N: x_n > 0$
Let $\map {B^-_\epsilon} a$ denote the closed $\epsilon$-ball of $a$ in $M$.

Then:

$\NN_{\sequence {x_n} } = \set{\map {B^-_{x_n} } a : n \in \N}$ is a neighborhood basis of $a$ consisting of closed sets.


Proof
From Closed Ball in Metric Space is Closed Neighborhood:

every element of $\NN_{\sequence {x_n} }$ is an closed neighborhood of $a$.
By definition of closed neighborhood of $a$:

every element of $\NN_{\sequence {x_n} }$ is an neighborhood of $a$ and a closed set.

Let $U$ be an open neighborhood of $a$.
By definition of an open set, there exists a strictly positive real number $\epsilon$:

$\map {B_\epsilon} a \subseteq U$
From Open Ball contains Strictly Smaller Closed Ball:

$\map {B_{\epsilon/2}^-} a \subseteq \map {B_\epsilon} a$
By definition of a real null sequence:

$\exists N \in \N : \forall n > N : \size {x_n} < \dfrac \epsilon 2$

Let $m = N + 1$.
Then $\size {x_m} < \dfrac \epsilon 2$.
Since $x_m > 0$ then $x_m = \size {x_m} < \dfrac \epsilon 2 $, and so:

$\map {B_{x_m}^- } a \subseteq \map {B_{\epsilon/2}^-} a \subseteq \map {B_\epsilon} a \subseteq U$
The result follows from Subset Relation is Transitive.
$\blacksquare$





