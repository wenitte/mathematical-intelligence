# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_%2B_y_%3D_2_x_exp_-x_%2B_x%5E2

Theorem
The linear first order ODE:

$(1): \quad y' + y = 2 x e^{-x} + x^2$
has the general solution:

$y = x^2 e^{-x} + x^2 - 2 x + 2 + C e^{-x}$


Proof
$(1)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = 1$
Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int 1 \rd x\)




















\(\ds \)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^x\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\dfrac \d {\d x} e^x y = 2 x + x^2 e^x$
and the general solution is:

$e^x y = x^2 + e^x \paren {x^2 - 2 x + 2} + C$
or:

$y = x^2 e^{-x} + x^2 - 2 x + 2 + C e^{-x}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $2 \ \text{(d)}$




