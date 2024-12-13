# 

Source: https://proofwiki.org/wiki/Image_of_Transpose_of_Linear_Transformation_is_Annihilator_of_Kernel

Theorem
Let $G$ and $H$ be $n$-dimensional vector spaces over a field.
Let $\map \LL {G, H}$ be the set of all linear transformations from $G$ to $H$.
Let $u \in \map \LL {G, H}$.
Let $u^\intercal$ be the transpose of $u$.
Then:

The image of $u^\intercal$ is the annihilator of $\map \ker u$.
where $\map \ker u$ denotes the kernel of $u$.


Proof
Let $x \in \map \ker u$.
Let $H^*$ be the algebraic dual of $H$.
Let $\innerprod x t$ be the evaluation linear transformation.

Then:

$\forall y \in H^*: \innerprod x {\map {u^\intercal} y} = \innerprod {\map u x} y = \innerprod 0 y = 0$
So:

$\map {u^\intercal} {H^*} \subseteq \paren {\map \ker u}^\circ$

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










Hence:

$\map {u^\intercal} {H^*} = \paren {\map \ker u}^\circ$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text V$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.12$




