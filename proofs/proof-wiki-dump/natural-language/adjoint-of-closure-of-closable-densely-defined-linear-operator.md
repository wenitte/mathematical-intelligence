# 

Source: https://proofwiki.org/wiki/Adjoint_of_Closure_of_Closable_Densely-Defined_Linear_Operator

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a closable densely-defined linear operator with adjoint $\tuple {\map D {T^\ast}, T^\ast}$. 
Let $\tuple {\map D {\overline T}, \overline T}$ be the closure of $T$ with adjoint $\tuple {\map D {\paren {\overline T}^\ast}, \paren {\overline T}^\ast}$. 

Then:

$\tuple {\map D {T^\ast}, T^\ast} = \tuple {\map D {\paren {\overline T}^\ast}, \paren {\overline T}^\ast}$


Proof
From Adjoint of Densely-Defined Linear Operator is Closed:

$\tuple {\map D {T^\ast}, T^\ast}$ is closed.
From Closable Densely-Defined Operator is Closed iff Equal to Closure, we have:

$\tuple {\map D {T^\ast}, T^\ast} = \tuple {\map D {\overline {T^\ast} }, \overline {T^\ast} }$
From Densely-Defined Linear Operator is Closable iff Adjoint is Densely-Defined, we have:

$\tuple {\map D {\overline {T^\ast} }, T^\ast} = \tuple {\map D {T^{\ast \ast \ast} }, T^{\ast \ast \ast} }$
Writing $T^{\ast \ast \ast} = \paren {T^{\ast \ast} }^\ast$, we have:

$\tuple {\map D {T^{\ast \ast \ast} }, T^{\ast \ast \ast} } = \tuple {\map D {\paren {\overline T}^\ast}, \paren {\overline T}^\ast}$
from Densely-Defined Linear Operator is Closable iff Adjoint is Densely-Defined.
$\blacksquare$


Sources
1981: Michael Reed and Barry Simon: Methods of Modern Mathematical Physics I: Functional Analysis (Revised ed.) ... (previous) ... (next): $\text {VIII}.1$: Domains, graphs, adjoints and spectrum




