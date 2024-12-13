# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/y%27_%2B_2_x_y_%3D_exp_-x%5E2

Theorem
The linear first order ODE:

$\dfrac {\d y} {\d x} + 2 x y = \map \exp {-x^2}$
has the general solution:

$y = \paren {x + C} \map \exp {-x^2}$


Proof
$(1)$ is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = 2 x$
$\map Q x = \map \exp {-x^2}$
Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int 2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds \map \exp {x^2}\)









Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:

$\map {\dfrac {\d} {\d x} } {\map \exp {x^2} y} = \map \exp {-x^2} \map \exp {x^2} = 1$
Hence:














\(\ds \map \exp {x^2} y\)

\(=\)







\(\ds \int 1 \rd x\)




















\(\ds \)

\(=\)







\(\ds x + C\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \paren {x + C} \map \exp {-x^2}\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 1$: Introduction: $(6)$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): Miscellaneous Problems for Chapter $2$: Problem $19$




