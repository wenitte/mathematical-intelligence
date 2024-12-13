# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/x%5E2_y%27%27_-_2_x_y%27_%2B_2_y_%3D_0/y(1)_%3D_3,_y%27(1)_%3D_5

Theorem
The second order ODE:

$(1): \quad x^2 y - 2 x y' + 2 y = 0$
with initial conditions:














\(\ds \map y 1\)

\(=\)







\(\ds 3\)




















\(\ds \map {y'} 1\)

\(=\)







\(\ds 5\)









has the particular solution:

$y = x + 2 x^2$


Proof
From Linear Second Order ODE: $x^2 y - 2 x y' + 2 y = 0$, the general solution of $(1)$ is:

$y = C_1 x + C_2 x^2$
Differentiating with respect to $x$:

$y' = C_1 + 2 C_2 x$

Thus for the initial conditions:














\(\ds \map y 1\)

\(=\)







\(\ds C_1 \times 1 + C_2 \times 1^2\)




















\(\ds \)

\(=\)







\(\ds 3\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C_1 + C_2\)

\(=\)







\(\ds 3\)










and:














\(\ds \map {y'} 1\)

\(=\)







\(\ds C_1 + 2 C_2 \times 1\)




















\(\ds \)

\(=\)







\(\ds 5\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C_1 + 2 C_2\)

\(=\)







\(\ds 5\)














\(\ds \leadsto \ \ \)





\(\ds C_2\)

\(=\)







\(\ds 2\)





$(3) - (2)$








\(\ds \leadsto \ \ \)





\(\ds C_1 + 2\)

\(=\)







\(\ds 3\)





substituting for $C_2$ in $(2)$








\(\ds \leadsto \ \ \)





\(\ds C_1\)

\(=\)







\(\ds 1\)









Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.15$: Problem $2$




