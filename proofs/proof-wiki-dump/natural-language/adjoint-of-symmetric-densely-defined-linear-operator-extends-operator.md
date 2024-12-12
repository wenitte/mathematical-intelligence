# 

Source: https://proofwiki.org/wiki/Adjoint_of_Symmetric_Densely-Defined_Linear_Operator_Extends_Operator

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space.
Let $\struct {\map D T, T}$ be a symmetric densely-defined linear operator.
Let $\struct {\map D {T^\ast}, T^\ast}$ be the adjoint of $T$.

Then $\map D T \subseteq \map D {T^\ast}$ and: 

$T x = T^\ast x$ for each $x \in \map D T$.


Proof
For each $y \in \HH$, define the linear functional $f_x : \map D T \to \Bbb F$ by:

$\map {f_y} x = \innerprod {T x} y$ for each $x \in \map D T$.
We show that for $y \in \map D T$, $f_y$ is bounded.
Let $y \in \map D T$, then: 

$\innerprod {T x} y = \innerprod x {T y}$ for each $x \in \map D T$.
Then we have: 














\(\ds \cmod {\map {f_y} x}\)

\(=\)







\(\ds \cmod {\innerprod x {T y} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {T y} \norm x\)





Cauchy-Bunyakovsky-Schwarz Inequality for Inner Product Spaces



So $f_y$ is bounded and $\map D T \subseteq \map D {T^\ast}$. 

Now, for $x, y \in \map D T$, we have: 

$\innerprod {T x} y = \innerprod x {T y}$
since $\struct {\map D T, T}$ is symmetric and: 

$\innerprod {T x} y = \innerprod x {T^\ast y}$
from the definition of the adjoint.
So we have: 

$\innerprod x {T y - T^\ast y} = 0$
for each $x \in \map D T$. 
Taking a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\map D T$ such that $x_n \to T y - T^\ast y$. 
Since: 

$\innerprod {x_n} {T y - T^\ast y} = 0$
for each $n \in \N$, we have: 

$\innerprod {T y - T^\ast y} {T y - T^\ast y} = \norm {T y - T^\ast y}^2 = 0$
from Inner Product is Continuous.
So $T y = T^\ast y$ for each $y \in \map D T$.
$\blacksquare$





