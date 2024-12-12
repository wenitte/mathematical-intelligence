# 

Source: https://proofwiki.org/wiki/Equidecomposability_Unaffected_by_Union

Theorem

This article, or a section of it, needs explaining.In particular: I guess the sets should be disjoint, in the sense that $S_i \cap S_j$ is empty for $i \ne j$. Similar for $T$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\set {S_1, \ldots, S_m}, \set {T_1, \ldots, T_m}$ be sets of sets in $\R^n$ such that:

for each $k \in \set {1, \dots, m}, S_k$ and $T_k$ are equidecomposable.

Then the set $\ds S = \bigcup_{i \mathop = 1}^m S_i$ is equidecomposable with $\ds T = \bigcup_{i \mathop = 1}^m T_i$.


Proof
We have for each $k \in \set{1, \dots, m}$ a decomposition $\set {A_{k, 1}, \cdots, A_{k, l_k} }$ and set of isometries $\phi_{i, j}: \R^n \to \R^n$ such that:

$\ds S_k = \bigcup_{a \mathop = 1}^{l_k} \map {\phi_{k, a} } {A_{k, a} }$
and similarly for $T_k$ and some isometries $\theta_{i, j}: \R^n \to \R^n$:

$\ds T_k = \bigcup_{a \mathop = 1}^{l_k} \map {\theta_{k, a} } {A_{k, a} }$
Thus:

$\ds S = \bigcup_{k \mathop = 1}^m \bigcup_{i \mathop = 1}^{l_k} \map {\phi_{k, i} } {A_{k, i} }$
and:

$\ds T = \bigcup_{k \mathop = 1}^m \bigcup_{i \mathop = 1}^{l_k} \map {\theta_{k, i} } {A_{k, i} }$
This yields equivalent decompositions of $S$ and $T$.
$\blacksquare$





