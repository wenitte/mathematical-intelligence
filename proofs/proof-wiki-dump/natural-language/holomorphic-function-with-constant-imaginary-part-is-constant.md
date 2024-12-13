# 

Source: https://proofwiki.org/wiki/Holomorphic_Function_with_Constant_Imaginary_Part_is_Constant

Theorem
Let $D \subseteq \C$ be an open subset of the set of complex numbers $\C$.
Let $f: D \to \C$ be a holomorphic function such that $\map \Im f$ is constant.

Then $f$ is constant.


Proof
Define $u : \R^2 \to \R$ and $v : \R^2 \to \R$ such that:

$\map f {x + i y} = \map u {x, y} + i \map v {x, y}$
for each $x, y \in \R$.
By hypothesis, $v$ is constant.
Hence from Derivative of Constant, we have:

$\ds \frac {\partial v} {\partial x} = 0$
and:

$\ds \frac {\partial v} {\partial y} = 0$
Hence by the Cauchy-Riemann Equations, we have:

$\ds \frac {\partial u} {\partial x} = 0$
and:

$\ds \frac {\partial u} {\partial y} = 0$
Applying Zero Derivative implies Constant Function to the function $x \mapsto \map u {x, y}$ for fixed $y \in D$, we obtain:

$\map u {x, y} = \map F y$ for some $\map F y \in \C$
from the first equation.
We can apply Zero Derivative implies Constant Function to the function $y \mapsto \map u {x, y}$ for fixed $x \in D$ to obtain:

$\map u {x, y} = \map G x$ for some $\map G x \in \C$
from the second equation. 
We have $\map F y = \map G x$ for each $x, y \in D$. 
Fixing $x_0 \in D$ and setting $c = \map G {x_0}$, we have $\map F y = c$ for all $y \in \C$, and so $u$ is constant. 
Since both $u$ and $v$ are constant, $f$ is constant.
$\blacksquare$





