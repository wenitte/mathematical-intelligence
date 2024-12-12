# 

Source: https://proofwiki.org/wiki/Gram-Schmidt_Orthogonalization/Corollary_2



Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an $n$-dimensional inner product space over $\R$ or $\C$.
Let $\tuple {v_1, \ldots, v_n}$ be any ordered basis for $V$.

Then there is an orthonormal ordered basis $\tuple {b_1, \ldots, b_n}$ satisfying the following conditions:

$\forall k \in \set {1, \ldots, n} : \span \set {v_1, \ldots v_k} = \span \set {b_1, \ldots, b_k} $


Proof
By the definition of basis, it follows that $\set{ v_1, \ldots, v_n }$ is a linearly independent subset of $V$.
From the Gram-Schmidt Orthogonalization:Corollary 1, it follows that there exists an orthonormal subset $\set {b_1, \ldots, b_n}$ of $V$ such that:

$\forall k \in \set {1, \ldots, n}: \span \set {v_1, \ldots v_k} = \span \set {b_1, \ldots, b_k} $
where $\span$ denotes linear span.
From Orthogonal Set is Linearly Independent Set, it follows that $\set {b_1, \ldots, b_n}$ is a linearly independent subset of $V$.
By Sufficient Conditions for Basis of Finite Dimensional Vector Space, it follows that $\tuple {b_1, \ldots, b_n}$ is an ordered basis of $V$.
$\blacksquare$


Source of Name
This entry was named for Jørgen Pedersen Gram and Erhard Schmidt.


Sources
2018: John M. Lee: Introduction to Riemannian Manifolds (2nd ed.) ... (previous) ... (next): $\S 2$: Riemannian Metrics. Definitions




