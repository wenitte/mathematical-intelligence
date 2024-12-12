# 

Source: https://proofwiki.org/wiki/Field_Homomorphism_Preserves_Product_Inverses

Theorem
Let $\phi: \struct {F_1, +_1, \times_1} \to \struct {F_2, +_2, \times_2}$ be a field homomorphism.

Then:

$\forall x \in F_1^*: \map \phi {x^{-1} } = \map \phi x^{-1}$


Proof
By definition, if $\struct {F_1, +_1, \times_1}$ and $\struct {F_2, +_2, \times_2}$ are fields then $\struct {F_1^*, \times_1}$ and $\struct {F_2^*, \times_2}$ are groups.
Again by definition:

the product inverse of $x$ in $\struct {F_1, +_1, \times_1}$ for $\times_1$ is the product inverse of $x$ in $\struct {F_1^*, \times_1}$
the product inverse of $x$ in $\struct {F_2, +_2, \times_2}$ for $\times_2$ is the product inverse of $x$ in $\struct {F_2^*, \times_2}$
The result follows from Group Homomorphism Preserves Inverses.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 3$. Homomorphisms




