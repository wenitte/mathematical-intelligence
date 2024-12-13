# 

Source: https://proofwiki.org/wiki/Locally_Euclidean_Space_is_Locally_Compact

Theorem
Let $M$ be a locally Euclidean space of some dimension $d$.

Then $M$ is locally compact.


Proof 1
Let $m \in M$ be arbitrary.

By definition of locally Euclidean space, there exists an open neighborhood $U$ of $m$, homeomorphic to an open subset of $\R^d$.
By the definition of an open set, there is some open ball:

$B = \map {B_\delta} {\map \phi m} = \set {x \in \R^d: \size {x - \map \phi m} < \delta}$
of radius $\delta$ containing $\map \phi m$, contained in $U$.
By Closure of Open Ball in Metric Space and Topological Closure is Closed, the set:

$C = \set {x \in \R^d: \size {x - \map \phi m} \le \dfrac \delta 2}$
is closed, and $C \subseteq B \subseteq U$.
Moreover, $C$ is trivially bounded, hence compact by the Heine-Borel Theorem.
Now if $\phi$ is a homeomorphism $U \to \R^d$, then by definition $\phi^{-1}$ is continuous.
Therefore by Continuous Image of Compact Space is Compact, $\phi^{-1} \sqbrk C \subseteq M$ is compact.
Furthermore $m \in \phi^{-1} \sqbrk C$ because $\map \phi m \in C$.

Thus every point of $M$ has a compact neighborhood.


This article, or a section of it, needs explaining.In particular: Why does the existence of one compact neighborhood imply the existence of a neighborhood basis of compact sets?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Proof 2
Let $m \in M$ be arbitrary.

From Locally Euclidean Space has Countable Neighborhood Basis Homeomorphic to Closed Balls:

there exists a countable neighborhood basis $\family{K_n}_{n \in \N}$ of $m$ where each $N_n$ is the homeomorphic image of a closed ball of $\R^d$
From Closed Ball in Euclidean Space is Compact:

$\forall n \in \N: K_n$ is the homeomorphic image of a compact subspace
From Continuous Image of Compact Space is Compact:

$\forall n \in \N: K_n$ is a compact subspace
Hence:

there exists a countable neighborhood basis $\family{K_n}_{n \in \N}$ of $m$ consisting of compact subspaces

It follows that $M$ is locally compact by definition.
$\blacksquare$





