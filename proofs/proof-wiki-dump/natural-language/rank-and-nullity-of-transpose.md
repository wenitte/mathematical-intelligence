# 

Source: https://proofwiki.org/wiki/Rank_and_Nullity_of_Transpose

Theorem
Let $G$ and $H$ be $n$-dimensional vector spaces over a field.
Let $\map \LL {G, H}$ be the set of all linear transformations from $G$ to $H$.
Let $u \in \map \LL {G, H}$.
Let $u^\intercal$ be the transpose of $u$.

Then:

$u$ and $u^\intercal$ have the same rank and nullity


Proof
From Rank Plus Nullity Theorem and Results Concerning Annihilator of Vector Subspace:














\(\ds \map \dim {\map {u^\intercal} {H^*} }\)

\(=\)







\(\ds n - \map \dim {\map \ker {u^\intercal} }\)




















\(\ds \)

\(=\)







\(\ds n - \map \dim {\paren {\map u G}^\circ}\)




















\(\ds \)

\(=\)







\(\ds \map \dim {\map u G}\)




















\(\ds \)

\(=\)







\(\ds n - \map \dim {\map \ker u}\)




















\(\ds \)

\(=\)







\(\ds \map \dim {\paren {\map \ker u}^\circ}\)










Hence it follows that $u$ and $u^\intercal$ have the same rank and nullity.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.12$




