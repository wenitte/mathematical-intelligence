# 

Source: https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_is_Submodule

Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct {G, +_G, \circ_G}_R$ and $\struct {H, +_H, \circ_H}_R$ be $R$-modules.
Let $\phi: G \to H$ be a linear transformation.

Let $\map \ker \phi$ denote the kernel of $\phi$.
Then $\map \ker \phi$ is a submodule of $G$.


Proof
By definition, the kernel of $\phi$ is defined as:

$\map \ker \phi := \phi^{-1} \sqbrk {\set {e_H} }$
where $e_H$ is the identity of $\struct {H, +_H}$.
where $\phi^{-1} \sqbrk S$ denotes the preimage of $S$ under $\phi$.
From Null Module is Module:

$\struct {\set {e_H}, +_H, \circ_H}_R$ is a module
where $\struct {\set {e_H}, +_H, \circ_H}_R$ is the null module.
We have that $\struct {\set {e_H}, +_H, \circ_H}_R$ is a module which is a subset of $H$.
It follows that $\struct {\set {e_H}, +_H, \circ_H}_R$ is a submodule of $H$.
The result follows from Preimage of Submodule under Linear Transformation is Submodule.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.2$




