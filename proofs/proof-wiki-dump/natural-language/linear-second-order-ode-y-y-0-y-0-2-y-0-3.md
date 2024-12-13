# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_y_%3D_0/y(0)_%3D_2,_y%27(0)_%3D_3

Theorem
The second order ODE:

$(1): \quad y + y = 0$
with initial conditions:

$\map y 0 = 2$
$\map {y'} 0 = 3$
has the particular solution:

$y = 3 \sin x + 2 \cos x$


Proof
From Linear Second Order ODE: $y + y = 0$, the general solution of $(1)$ is:

$y = C_1 \sin x + C_2 \cos x$
Differentiating with respect to $x$:

$y' = C_1 \cos x - C_2 \sin x$

Thus for the initial conditions:














\(\ds \map y 0\)

\(=\)







\(\ds C_1 \sin 0 + C_2 \cos 0\)




















\(\ds \)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds C_1 \times 0 + C_2 \times 1\)

\(=\)







\(\ds 2\)





Sine of Zero is Zero, Cosine of Zero is One








\(\ds \leadsto \ \ \)





\(\ds C_2\)

\(=\)







\(\ds 2\)










and:














\(\ds \map {y'} 0\)

\(=\)







\(\ds C_1 \cos 0 - C_2 \sin 0\)




















\(\ds \)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds C_1 \times 1 - C_2 \times 0\)

\(=\)







\(\ds 3\)





Sine of Zero is Zero, Cosine of Zero is One








\(\ds \leadsto \ \ \)





\(\ds C_1\)

\(=\)







\(\ds 3\)









Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.15$: The General Solution of the Homogeneous Equation: Example $1$




