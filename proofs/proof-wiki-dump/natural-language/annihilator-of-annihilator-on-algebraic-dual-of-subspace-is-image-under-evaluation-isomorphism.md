# 

Source: https://proofwiki.org/wiki/Annihilator_of_Annihilator_on_Algebraic_Dual_of_Subspace_is_Image_under_Evaluation_Isomorphism

Theorem
Let $G$ be an $n$-dimensional vector space over a field.
Let $G^*$ be the algebraic dual of $G$.
Let $G^{**}$ be the algebraic dual of $G^*$.
Let $J: G \to G^{**}$ be the evaluation isomorphism.
Let $M$ be an $m$-dimensional subspace of $G$.
Let $M^\circ$ be the annihilator of $M$.

Then:

$M^{\circ \circ} = J \sqbrk M$
where $J \sqbrk M$ denotes the image of $M$ under $J$.


Proof
Let Dimension of Annihilator on Algebraic Dual be applied to $M^\circ$ instead of $M$.
It is seen that the annihilator $M^{\circ \circ}$ of $M^\circ$ has dimension $n - \paren {n - m} = m$.
But clearly:

$J \sqbrk M \subseteq M^{\circ \circ}$.
As $J$ is an isomorphism, $J \sqbrk M$ has dimension $m$.
So by Dimension of Proper Subspace is Less Than its Superspace:

$J \sqbrk M = M^{\circ \circ}$.
As a consequence:

$\map {J^\gets} {M^{\circ \circ} } = M$
Hence the result:

$M^{\circ \circ} = J \sqbrk M$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.10$




