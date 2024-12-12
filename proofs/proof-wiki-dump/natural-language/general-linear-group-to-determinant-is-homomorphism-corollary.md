# 

Source: https://proofwiki.org/wiki/General_Linear_Group_to_Determinant_is_Homomorphism/Corollary

Theorem
Let $\GL {n, \R}$ be the general linear group over the field of real numbers.
Let $\struct {\R_{\ne 0}, \times}$ denote the multiplicative group of real numbers.

Let $\det: \GL {n, \R} \to \struct {\R_{\ne 0}, \times}$ be the group homomorphism:

$\mathbf A \mapsto \map \det {\mathbf A}$
where $\map \det {\mathbf A}$ is the determinant of $\mathbf A$.

The kernel of the $\det$ mapping is the special linear group $\SL {n, \R}$.


Proof
From General Linear Group to Determinant is Homomorphism:

$\det$ is a group homomorphism.

The special linear group $\SL {n, \R}$ is the subset of $\GL {n, \R}$ such that:

$\forall \mathbf A \in \SL {n, \R}: \map \det {\mathbf A} = 1$
From Real Multiplication Identity is One:

$1$ is the identity of the multiplicative group of real numbers.
It follows by definition that $\SL {n, \R}$ is the kernel of the $\det$ mapping.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47.7$ Homomorphisms and their elementary properties
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Theorem $8.13: \ (3)$




