# 

Source: https://proofwiki.org/wiki/Self-Adjoint_Densely-Defined_Linear_Operator_is_Maximally_Symmetric

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a self-adjoint densely-defined linear operator.

Then $\tuple {\map D T, T}$ is maximally symmetric.


Proof
Let $\tuple {\map D S, S}$ be a symmetric densely-defined linear operator extending $\tuple {\map D T, T}$.
Let $\tuple {\map D {S^\ast}, S^\ast}$ and $\tuple {\map D {T^\ast}, T^\ast}$ be the adjoints of $\tuple {\map D S, S}$ and $\tuple {\map D T, T}$ respectively.
From Adjoint of Densely-Defined Linear Operator reverses Extension of Mapping:

$\tuple {\map D {T^\ast}, T^\ast}$ extends $\tuple {\map D {S^\ast}, S^\ast}$.
Since $\tuple {\map D T, T}$ is self-adjoint, we have.

$\tuple {\map D T, T}$ extends $\tuple {\map D {S^\ast}, S^\ast}$.
From Adjoint of Symmetric Densely-Defined Linear Operator Extends Operator, we have:

$\tuple {\map D {S^\ast}, S^\ast}$ extends $\tuple {\map D S, S}$.
Hence $\tuple {\map D T, T}$ extends $\tuple {\map D S, S}$.
By assumption $\tuple {\map D S, S}$ extends $\tuple {\map D T, T}$.
Hence $\tuple {\map D T, T} = \tuple {\map D S, S}$.
So $\tuple {\map D T, T}$ is maximally symmetric.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $13.15$: Theorem




