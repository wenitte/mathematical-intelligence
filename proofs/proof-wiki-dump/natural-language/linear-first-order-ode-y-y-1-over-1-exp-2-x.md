# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_%2B_y_%3D_1_over_(1_%2B_exp_2_x)

Theorem
The linear first order ODE:

$(1): \quad y' + y = \dfrac 1 {1 + e^{2 x} }$
has the general solution:

$y = e^{-x} \map \arctan {e^x} + C e^{-x}$


Proof
$(1)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where $\map P x = 1$.
Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int \rd x\)




















\(\ds \)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^x\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\map {\dfrac \d {\d x} } {e^x y} = \dfrac {e^x} {1 + e^{2 x} }$
and the general solution becomes:

$\ds y {e^x} = \int \frac {e^x} {1 + e^{2 x} } \rd x$
The integral on the right hand side can be solved by substituting:

$u = e^x \implies \d u = e^x \rd x$

and so:














\(\ds e^x y\)

\(=\)







\(\ds \int \frac {1 \rd u} {1 + u^2}\)




















\(\ds \)

\(=\)







\(\ds \map \arctan u + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \map \arctan {e^x} + C\)









or:

$y = e^{-x} \map \arctan {e^x} + C e^{-x}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.10$: Problem $2 \ \text{(b)}$




