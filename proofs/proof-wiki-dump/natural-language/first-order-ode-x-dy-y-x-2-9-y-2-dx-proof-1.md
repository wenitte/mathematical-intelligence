# 

Source: https://proofwiki.org/wiki/First_Order_ODE/x_dy_%3D_(y_%2B_x%5E2_%2B_9_y%5E2)_dx/Proof_1

Theorem
The first order ODE:

$(1): \quad x \rd y = \paren {y + x^2 + 9 y^2} \rd x$
has the general solution:

$\map \arctan {\dfrac {3 y} x} = 3 x + C$


Proof
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





