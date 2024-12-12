# 

Source: https://proofwiki.org/wiki/First_Order_ODE/exp_x_(1_%2B_x)_dx_%3D_(x_exp_x_-_y_exp_y)_dy

Theorem
The first order ordinary differential equation:

$(1): \quad e^x \paren {1 + x} \rd x = \paren {x e^x - y e^y} \rd y$
has the solution:

$2 x e^x e^{-y} + y^2 + C$


Proof
Dividing $(1)$ through by $e^y$:

$(2): \quad \paren {1 + x} e^x e^{-y} \rd x = \paren {x e^x e^{-y} - y} \rd y$
Let $z = x e^x e^{-y}$.
Then:

$\dfrac {\d z} {\d x} = \paren {1 + x} e^x e^{-y} - x e^x e^{-y} \dfrac {\d y} {\d x}$
or:

$\d z = \paren {1 + x} e^x e^{-y} \rd x - x e^x e^{-y} \rd y$
Substituting $z$ and $\d z$ in $(2)$:

$\d z = \paren {z - y} \rd y - z \rd y = - y \rd y$
which directly leads to:

$\ds \int \rd z = -\int y \rd y$
from which:

$z = -\dfrac {y^2} 2 + k$
Substituting for $z$ and letting $C = 2 k$:

$2 x e^x e^{-y} + y^2 + C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $25$




