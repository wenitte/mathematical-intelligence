# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_dy_%3D_(y_%2B_x%5E2_%2B_9_y%5E2)_dx



Theorem
The first order ODE:

$(1): \quad x \rd y = \paren {y + x^2 + 9 y^2} \rd x$
has the general solution:

$\map \arctan {\dfrac {3 y} x} = 3 x + C$


Proof 1
Divide both sides of $(1)$ by $x^2 \rd x$ to get:

$\dfrac 1 x \dfrac {\d y} {\d x} = \dfrac 1 x \paren {\dfrac y x } + 1 + 9 \paren {\dfrac y x}^2$
Now apply the substitution:

$y = u x$
This implies then that:

$\dfrac {\d y} {\d x} = u + x \dfrac {\d u} {\d x}$
Now substitute everything into $(1)$ to get:














\(\ds \dfrac 1 x \paren {u + x \dfrac {\d u} {\d x} }\)

\(=\)







\(\ds \dfrac 1 x u + 1 + 9 u^2\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds 1 + 9 u^2\)










Now it becomes Solution to Separable Differential Equation and we end up with:














\(\ds \frac {\d u} {9 u^2 + 1}\)

\(=\)







\(\ds \d x\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 3 \tan^{-1} \paren {3 u}\)

\(=\)







\(\ds x + K\)














\(\ds \leadsto \ \ \)





\(\ds \tan^{-1} \paren {3 u}\)

\(=\)







\(\ds 3 x + C\)










Substitute back for $u$:

$\tan^{-1} \paren {\dfrac {3 y} x} = 3 x + C$
$\blacksquare$


Proof 2
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


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors: Problem $4 \ \text{(e)}$




