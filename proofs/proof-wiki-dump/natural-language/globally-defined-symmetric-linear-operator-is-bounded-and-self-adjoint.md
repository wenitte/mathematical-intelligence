# 

Source: https://proofwiki.org/wiki/Globally-Defined_Symmetric_Linear_Operator_is_Bounded_and_Self-Adjoint

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\HH, T}$ be a symmetric linear operator.

Then $\tuple {\HH, T}$ is bounded and self-adjoint.


Proof
Let $\tuple {\map D {T^\ast}, T^\ast}$ be the adjoint of $\tuple {\HH, T}$. 
From Adjoint of Symmetric Densely-Defined Linear Operator Extends Operator, $\tuple {\map D {T^\ast}, T^\ast}$ extends $\tuple {\HH, T}$. 
However, $\map D {T^\ast} \subseteq \HH$. 
So we have $\map D {T^\ast} = \HH = \map D T$.
Hence $T^\ast x = T x$ for each $x \in \map D T$.
So $\tuple {\HH, T} = \tuple {\HH, T^\ast}$.
So $\tuple {\HH, T}$ is self-adjoint.
From Adjoint of Densely-Defined Linear Operator is Closed, $\tuple {\HH, T}$ is also closed.
Since $\HH$ is Banach, we have that:

$T$ is bounded
from the Closed Graph Theorem.
$\blacksquare$


Sources
1991: Walter Rudin: Functional Analysis (2nd ed.) ... (previous) ... (next): $13.11$: Theorem




