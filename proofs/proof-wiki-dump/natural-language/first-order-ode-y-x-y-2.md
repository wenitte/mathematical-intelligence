# 

Source: https://proofwiki.org/wiki/First_Order_ODE/y%27_%3D_(x_%2B_y)%5E2

Theorem
The first order ODE:

$\dfrac {\d y} {\d x} = \paren {x + y}^2$
has the general solution:

$x + y = \map \tan {x + C}$


Proof
Make the substitution:

$z = x + y$
Then from First Order ODE in form $y' = f (a x + b y + c)$ with $a = b = 1$:














\(\ds x\)

\(=\)







\(\ds \int \frac {\d z} {z^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds \arctan z + C_1\)





Primitive of $\dfrac 1 {x^2 + a^2}$








\(\ds \leadsto \ \ \)





\(\ds y - C_1\)

\(=\)







\(\ds \map \arctan {x + y}\)














\(\ds \leadsto \ \ \)





\(\ds x + y\)

\(=\)







\(\ds \map \tan {x + C}\)





letting $C = - C_1$



$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $3 \ \text{(a)}$




