# 

Source: https://proofwiki.org/wiki/General_Linear_Group_to_Determinant_is_Homomorphism



Theorem
Let $\GL {n, \R}$ be the general linear group over the field of real numbers.
Let $\struct {\R_{\ne 0}, \times}$ denote the multiplicative group of real numbers.

Let $\det: \GL {n, \R} \to \struct {\R_{\ne 0}, \times}$ be the mapping:

$\mathbf A \mapsto \map \det {\mathbf A}$
where $\map \det {\mathbf A}$ is the determinant of $\mathbf A$.

Then $\det$ is a group homomorphism.


Corollary
The kernel of the $\det$ mapping is the special linear group $\SL {n, \R}$.


Proof
From Determinant of Matrix Product:

$\map \det {\mathbf A \mathbf B} = \map \det {\mathbf A} \, \map \det {\mathbf B}$
which is seen to be a group homomorphism by definition.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 47 \ \text {(a)}$ Homomorphisms and their elementary properties
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $8$: The Homomorphism Theorem: Example $8.2$




