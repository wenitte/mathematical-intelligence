# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_%3D_x_%2B_y



Theorem
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = x + y$
has the general solution:

$y = C e^x - x - 1$


Initial Value: $\map y 0 = 1$
The linear first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = x + y$
with initial condition:

$\map y 0 = 1$
has the particular solution:

$y = 2 e^x - x - 1$


Proof
Rearranging $(1)$:

$(2): \quad \dfrac {\d y} {\d x} - y = x$
$(2)$ is a linear first order ODE in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = -1$
$\map Q x = x$

Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds -\int \rd x\)




















\(\ds \)

\(=\)







\(\ds - x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^{-x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {e^x}\)










Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:














\(\ds \map {\dfrac {\d} {\d x} } {\dfrac y {e^x} }\)

\(=\)







\(\ds \frac x {e^x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac y {e^x}\)

\(=\)







\(\ds \int \frac x {e^x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {e^x} \paren {x + 1} + C\)





Primitive of $x e^{a x}$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds C e^x - x - 1\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Appendix $\text{A}$. Numerical Methods




