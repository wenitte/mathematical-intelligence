# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_%2B_y_cot_x_%3D_2_x_cosec_x

Theorem
The linear first order ODE:

$(1): \quad y' + y \cot x = 2 x \csc x$
has the general solution:

$y = x^2 \csc x + C \csc x$


Proof
$(1)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = \cot x$
Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int \cot x \rd x\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\sin x}\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds \sin x\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\dfrac {\d} {\d x} y \sin x = 2 x$
and the general solution is:

$y \sin x = x^2 + C$
or:

$y = x^2 \csc x + C \csc x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $2 \ \text{(e)}$




