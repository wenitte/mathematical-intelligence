# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(6x_%2B_4y_%2B_3)_dx_%2B_(3x_%2B_2y_%2B_2)_dy_%3D_0

Theorem
The first order ODE:

$(1): \quad \paren {6 x + 4 y + 3} \rd x + \paren {3 x + 2 y + 2} \rd y = 0$
has the general solution:

$3 x + 2 y + \map \ln {\paren {3 x + 2 y}^2} + x = C$


Proof
We put $(1)$ in the form:

$\dfrac {\d y} {\d x} = -\dfrac {6 x + 4 y + 3} {3 x + 2 y + 2}$
Substitute $z = 3 x + 2 y$, which gives:

$\dfrac {\d z} {\d x} = 3 + 2 \dfrac {\d y} {\d x}$
and so:

$\dfrac {\d z} {\d x} = -2 \dfrac {2 z + 3} {z + 2} + 3$
which simplifies down to:

$\dfrac {\d z} {\d x} = \dfrac {-z} {z + 2}$

This is separable:

$\ds -\int \frac {z + 2} z \rd z = \int \rd x$
which gives:

$- z - 2 \ln z = x + C$
which, after the substitutions, gives:

$3 x + 2 y + \map \ln {\paren {3 x + 2 y}^2} + x = C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $14$




