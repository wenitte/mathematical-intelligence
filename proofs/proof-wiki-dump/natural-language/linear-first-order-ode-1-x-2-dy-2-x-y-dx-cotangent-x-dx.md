# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/(1_%2B_x%5E2)_dy_%2B_2_x_y_dx_%3D_cotangent_x_dx

Theorem
The linear first order ODE:

$(1): \quad \paren {1 + x^2} \rd y + 2 x y \rd x = \cot x \rd x$
has the general solution:

$y = \dfrac {\map \ln {\sin x} } {1 + x^2} + \dfrac C {1 + x^2}$


Proof
$(1)$ can be written as:

$(2): \quad \paren {1 + x^2} \dfrac {\rd y} {\rd x} + 2 x y = \cot x$
We notice straight away that:

$\dfrac {\rd} {\rd x} \paren {1 + x^2} = 2 x$
and so:

$\dfrac {\rd} {\rd x} \paren {1 + x^2} y = \cot x$

Thus the general solution becomes:














\(\ds \paren {1 + x^2} y\)

\(=\)







\(\ds \int \cot x \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\sin x} + C\)









or:

$y = \dfrac {\map \ln {\sin x} } {1 + x^2} + \dfrac C {1 + x^2}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $2 \ \text{(c)}$




