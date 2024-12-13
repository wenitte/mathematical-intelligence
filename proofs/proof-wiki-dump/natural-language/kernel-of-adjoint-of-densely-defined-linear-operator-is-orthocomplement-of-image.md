# 

Source: https://proofwiki.org/wiki/Kernel_of_Adjoint_of_Densely-Defined_Linear_Operator_is_Orthocomplement_of_Image

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\tuple {\map D T, T}$ be a densely-defined linear operator.
Let $\tuple {\map D {T^\ast}, T^\ast}$ be the adjoint of $\tuple {\map D T, T}$.

Then we have:

$\map \ker {A^\ast} = \paren {\Img T}^\bot$
where $\bot$ denotes orthocomplementation.


Proof
Let $y \in \HH$.
Define $f_y : \map D T \to \C$ by:

$\map {f_y} x = \innerprod {A x} y$ for each $x \in \map D T$.
We have $y \in \map D {T^\ast}$ if and only if $f_y$ is a bounded linear functional.
We have $y \in \paren {\Img T}^\bot$ if and only if:

$\map {f_y} x = \innerprod {A x} y = 0$ for all $x \in \map D T$.
Hence if $y \in \paren {\Img T}^\bot$, we have $y \in \map D {T^\ast}$.
Conversely if $\map {f_y} x = 0$ for all $x \in \map D T$ we have $y \in \map D {T^\ast}$ and $y \in \paren {\Img T}^\bot$.
Hence we have $y \in \paren {\Img T}^\bot$ if and only if:

$0 = \innerprod {A x} y = \innerprod x {A^\ast y}$ for all $x \in \map D T$.
This is equivalent to:

$A^\ast y \in \map D T^\bot$
From Linear Subspace Dense iff Zero Orthocomplement, we have $\map D T^\bot = \set { {\mathbf 0}_\HH}$.
Hence this is equivalent to $A^\ast y = {\mathbf 0}_\HH$.
This is equivalent to $y \in \map \ker {A^\ast}$.
Hence we have:

$\map \ker {A^\ast} = \paren {\Img T}^\bot$
$\blacksquare$





