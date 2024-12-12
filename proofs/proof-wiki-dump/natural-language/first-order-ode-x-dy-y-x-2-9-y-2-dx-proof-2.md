# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_dy_%3D_(y_%2B_x%5E2_%2B_9_y%5E2)_dx/Proof_2

Theorem
The first order ODE:

$(1): \quad x \rd y = \paren {y + x^2 + 9 y^2} \rd x$
has the general solution:

$\map \arctan {\dfrac {3 y} x} = 3 x + C$


Proof
Let $z = \map \arctan {3y / x}$.
Then:

$\dfrac {\partial z} {\partial x} = \dfrac 1 {1 + \paren {3 y / x}^2} \dfrac {-3 y} {x^2} = \dfrac {-3 y} {x^2 + 9 y^2}$
$\dfrac {\partial z} {\partial y} = \dfrac 1 {1 + \paren {3 y / x}^2} \dfrac 3 x = \dfrac 3 {x^2 + 9 y^2}$
So:

$\d z = \dfrac {3 x \rd y - 3 y \rd x} {x^2 + 9 y^2}$

Multiplying $(1)$ by $3$ and manipulating:

$\dfrac {3 x \rd y - 3 y \rd x} {x^2 + 9 y^2} = 3 \rd x$
From Differential of Arctangent of Quotient:

$\map \d {\map \arctan {\dfrac {3 y} x} } = 3 \rd x$
and so

$\map \arctan {\dfrac {3 y} x} = 3 x + C$
$\blacksquare$





