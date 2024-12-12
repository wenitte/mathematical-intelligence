# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_dy_%3D_(x%5E5_%2B_x%5E3_y%5E2_%2B_y)_dx

Theorem
The first order ODE:

$(1): \quad x \rd y = \paren {x^5 + x^3 y^2 + y} \rd x$
has the general solution:

$\arctan \dfrac x y = -\dfrac {x^4} 4 + C$


Proof
Rearranging, we have:

$y \rd x - x \rd y = -\paren {x^2 + y^2} x^3 \rd x$
from which:

$\dfrac {y \rd x - x \rd y} {x^2 + y^2} = - x^3 \rd x$
From Differential of Arctangent of Quotient:

$\map \d {\arctan \dfrac x y} = \dfrac {y \rd x - x \rd y} {x^2 + y^2}$
from which $(1)$ evolves into:

$\map \d {\arctan \dfrac x y} = -x^3 \rd x$
Hence the result:

$\arctan \dfrac x y = -\dfrac {x^4} 4 + C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors: Problem $4 \ \text{(c)}$




