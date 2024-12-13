# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_3_y%27_%2B_2_y_%3D_0/y(0)_%3D_-1,_y%27(0)_%3D_1

Theorem
The second order ODE:

$(1): \quad y - 3 y' + 2 y = 0$
with initial conditions:

$\map y 0 = -1$
$\map {y'} 0 = 1$
has the particular solution:

$y = -3 e^x + 2 e^{2 x}$


Proof
From Linear Second Order ODE: $y - 3 y' + 2 y = 0$, the general solution of $(1)$ is:

$y = C_1 e^x + C_2 e^{2 x}$
Differentiating with respect to $x$:

$y' = C_1 e^x + 2 C_2 e^{2 x}$

Thus for the initial conditions:














\(\ds \map y 0\)

\(=\)







\(\ds C_1 e^0 + C_2 e^{2 \times 0}\)




















\(\ds \)

\(=\)







\(\ds -1\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C_1 + C_2\)

\(=\)







\(\ds -1\)










and:














\(\ds \map {y'} 1\)

\(=\)







\(\ds C_1 e^0 + 2 C_2 e^{2 \times 0}\)




















\(\ds \)

\(=\)







\(\ds 1\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds C_1 + 2 C_2\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds C_2\)

\(=\)







\(\ds 2\)





$(3) - (2)$








\(\ds \leadsto \ \ \)





\(\ds C_1 + 2\)

\(=\)







\(\ds -1\)





substituting for $C_2$ in $(2)$








\(\ds \leadsto \ \ \)





\(\ds C_1\)

\(=\)







\(\ds -3\)









Hence the result.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.15$: Problem $3$




