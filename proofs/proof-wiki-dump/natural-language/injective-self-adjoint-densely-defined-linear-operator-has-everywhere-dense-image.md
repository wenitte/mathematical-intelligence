# 

Source: https://proofwiki.org/wiki/Injective_Self-Adjoint_Densely-Defined_Linear_Operator_has_Everywhere_Dense_Image

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a self-adjoint densely defined linear operator that is injective.

Then $\Img T$ is everywhere dense in $\HH$.


Proof
From Kernel of Adjoint of Densely-Defined Linear Operator is Orthocomplement of Image, we have:

$\map \ker {T^\ast} = \paren {\Img T}^\bot$
where $\tuple {\map D {T^\ast}, T^\ast}$ is the adjoint of $\tuple {\map D T, T}$.
Since $T$ is self-adjoint, we have $T^\ast = T$. 
Hence $\map \ker T = \paren {\Img T}^\bot$.
Since $T$ is injective, we have $\map \ker T = {\mathbf 0}_\HH$.
Hence:

$\paren {\Img T}^\bot = \set { {\mathbf 0}_\HH}$
From Linear Subspace Dense iff Zero Orthocomplement we have that $\Img T$ is everywhere dense in $\HH$.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $13.11$: Theorem




