# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_%2B_y_%3D_2_x/Proof_1

Theorem
The second order ODE:

$(1): \quad y' ' - 2 y' + y = 2 x$
has the general solution:

$y = C_1 e^x + C_2 x e^x + 2 x + 4$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y' ' + p y' + q y = \map R x$
where:

$p = -2$
$q = 1$
$\map R x = 2 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y' ' - 2 y' + y = 0$
From Linear Second Order ODE: $y' ' - 2 y' + y = 0$, this has the general solution:

$y_g = C_1 e^x + C_2 x e^x$

It remains to find a particular solution $y_p$ to $(1)$.
Taking the expression $\map R x = 2 x$ and differentiating twice with respect to $x$:














\(\ds \map R x\)

\(=\)







\(\ds 2 x\)














\(\ds \leadsto \ \ \)





\(\ds \map {R'} x\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds \map {R' '} x\)

\(=\)







\(\ds 0\)









Trying out $y = 2 x$ in $(1)$:

$0 - 4 + 2 x = 2 x - 4$
which is off by that constant of $4$.
But by Derivative of Constant:

$4' = 0$
Hence setting $y = 2 x + 4$:

$0 - 4 + \paren {2 x + 4} = 2 x$
and it can be seen that $y_p = 2 x + 4$ is indeed a particular solution to $(1)$.

So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + C_2 x e^x + 2 x + 4$
is the general solution to $(1)$.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.19$: Problem $1$




