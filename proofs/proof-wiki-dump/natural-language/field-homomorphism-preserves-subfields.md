# 

Source: https://proofwiki.org/wiki/Field_Homomorphism_Preserves_Subfields

Theorem
Let $\struct {F_1, +_1, \circ_1}$ and $\struct {F_2, +_2, \circ_2}$ be fields.

Let $\phi: F_1 \to F_2$ be a field homomorphism such that $\phi$ is not the trivial homomorphism.

If $K$ is a subfield of $F_1$, then $\phi \sqbrk K$ is a subfield of $F_2$.


Corollary
The image of a field homomorphism $\phi: F_1 \to F_2$ is a subfield of $F_2$.


Proof
First note that if $\phi$ is the trivial homomorphism then $\phi \sqbrk K = 0_{F_2}$ and so is not a field.
Since $K$ is a field, we have that:

$0_{F_1} \in K$
$1_{F_1} \in K$
and so by Ring Homomorphism Preserves Zero and Field Homomorphism Preserves Unity:

$\map \phi {0_{F_1} } = 0_{F_2} \in \phi \sqbrk K$
$\map \phi {1_{F_1} } = 1_{F_2} \in \phi \sqbrk K$
So $\phi \sqbrk K$ contains at least the zero and unity.

From Group Homomorphism Preserves Subgroups:

$\struct {\phi \sqbrk K, +_2}$ is a subgroup of $\struct {F_2, +_2}$
$\struct {\phi \sqbrk K, \circ_2}$ is a subgroup of $\struct {F_2, \circ_2}$.
Thus, as $\struct {F_2, +_2}$ and $\struct {F_2, \circ_2}$ are both groups, the result follows.
$\blacksquare$





