# 

Source: https://proofwiki.org/wiki/First_Order_ODE_in_form_y%27_%3D_f_(a_x_%2B_b_y_%2B_c)

Theorem
The first order ODE:

$\dfrac {\d y} {\d x} = \map f {a x + b y + c}$
can be solved by substituting:

$z := a x + b y + c$
to obtain:

$\ds x = \int \frac {\d z} {b \map f z + a}$


Proof
We have:

$\dfrac {\d y} {\d x} = \map f {a x + b y + c}$
Put:

$z := a x + b y + c$
Then:














\(\ds z\)

\(=\)







\(\ds a x + b y + c\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds a + b \dfrac {\d y} {\d x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d y} {\d x}\)

\(=\)







\(\ds \frac 1 b \paren {\frac {\d z} {\d x} - a}\)














\(\ds \leadsto \ \ \)





\(\ds \frac 1 b \paren {\frac {\d z} {\d x} - a}\)

\(=\)







\(\ds \map f z\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds b \map f z + a\)










This can be solved by Solution to Separable Differential Equation:

$\ds x = \int \frac {\d z} {b \map f z + a}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $3$




