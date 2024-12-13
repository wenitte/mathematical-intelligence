# 

Source: https://proofwiki.org/wiki/Inverse_Evaluation_Isomorphism_of_Annihilator

Theorem
Let $R$ be a commutative ring with unity.
Let $G$ be a module over $R$ whose dimension is finite.
Let $G^*$ be the algebraic dual of $G$.
Let $G^{**}$ be the algebraic dual of $G^*$.

Let $N$ be a submodule of $G^*$.
Let $J$ be the evaluation isomorphism from $G$ onto $G^{**}$.
Let $N^\circ$ be the annihilator of $N$.

Then:

$J^{-1} \sqbrk {N^\circ} = \set {x \in G: \forall t \in N: \map t x = 0}$
where $J^{-1} \sqbrk {N^\circ}$ denotes the preimage of $N^\circ$ under $J$.


Proof
We are given by hypothesis that $G$ is finite-dimensional.
Hence by Evaluation Isomorphism is Isomorphism, $J: G \to G^{**}$ is an isomorphism, and therefore a surjection.
Thus:

$N^\circ = \set {x^\wedge \in G^{**}: \forall t \in N: \map {x^\wedge} t = 0}$
where $x^\wedge$ is as defined in the definition of the evaluation linear transformation.
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




