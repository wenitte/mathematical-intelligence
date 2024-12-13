# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_2_y%27_%2B_y_%3D_x_exp_-x

Theorem
The second order ODE:

$(1): \quad y + 2 y' + y = x e^{-x}$
has the general solution:

$y = e^{-x} \paren {C_1 + C_2 x + \dfrac {x^3} 6}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE in the form:

$y + p y' + q y = \map R x$
where:

$p = 2$
$q = 1$
$\map R x = x e^{-x}$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$y + 2 y' + y = 0$
From Linear Second Order ODE: $y + 2 y' + y = 0$, this has the general solution:

$y_g = \paren {C_1 + C_2 x} e^{-x}$

It remains to find a particular solution $y_p$ to $(1)$.

We have that:

$\map R x = x e^{-x}$
and so from the Method of Undetermined Coefficients for Product of Polynomial and Exponential, we assume a solution:














\(\ds y_p\)

\(=\)







\(\ds e^{-x} \paren {A_1 x^3 + A_2 x^2 + A_3 x + A_4}\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds -e^{-x} \paren {A_1 x^3 + A_2 x^2 + A_3 x + A_4} + e^{-x} \paren {3 A_1 x^2 + 2 A_2 x + A_3}\)




















\(\ds \)

\(=\)







\(\ds e^{-x} \paren {-A_1 x^3 + \paren {3 A_1 - A_2} x^2 + \paren {2 A_2 - A_3} x + A_3 - A_4}\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds -e^{-x} \paren {-A_1 x^3 + \paren {3 A_1 - A_2} x^2 + \paren {2 A_2 - A_3} x + A_3 - A_4} + e^{-x} \paren {-3 A_1 x^2 + 2 \paren {3 A_1 - A_2} x + \paren {2 A_2 - A_3} }\)




















\(\ds \)

\(=\)







\(\ds e^{-x} \paren {A_1 x^3 + \paren {-6 A_1 + A_2} x^2 + \paren {6 A_1 - 4 A_2 + A_3} x + 2 A_2 - 2 A_3 + A_4}\)










Substituting in $(1)$:














\(\ds \)

\(\)







\(\ds e^{-x} \paren {A_1 x^3 + \paren {-6 A_1 + A_2} x^2 + \paren {6 A_1 - 4 A_2 + A_3} x + 2 A_2 - 2 A_3 + A_4}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds 2 e^{-x} \paren {-A_1 x^3 + \paren {3 A_1 - A_2} x^2 + \paren {2 A_2 - A_3} x + A_3 - A_4}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{-x} \paren {A_1 x^3 + A_2 x^2 + A_3 x + A_4}\)




















\(\ds \)

\(=\)







\(\ds x e^{-x}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds e^{-x} \paren {A_1 x^3 + \paren {-6 A_1 + A_2} x^2 + \paren {6 A_1 - 4 A_2 + A_3} x + \paren {2 A_2 - 2 A_3 + A_4} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{-x} \paren {-2 A_1 x^3 + \paren {6 A_1 - 2 A_2} x^2 + \paren {4 A_2 - 2 A_3} x + \paren {2 A_3 - 2 A_4} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds e^{-x} \paren {A_1 x^3 + A_2 x^2 + A_3 x + A_4}\)




















\(\ds \)

\(=\)







\(\ds x e^{-x}\)










Hence by equating coefficients:














\(\ds A_1 - 2 A_1 + A_1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds 0\)




















\(\ds \paren {-6 A_1 + A_2} + \paren {6 A_1 - 2 A_2} + A_2\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds 0\)




















\(\ds \paren {6 A_1 - 4 A_2 + A_3} + \paren {4 A_2 - 2 A_3} + A_3\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds 6 A_1\)

\(=\)







\(\ds 1\)




















\(\ds \paren {2 A_2 - 2 A_3 + A_4} + \paren {2 A_3 - 2 A_4} + A_4\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A_2\)

\(=\)







\(\ds 0\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = e^{-x} \paren {C_1 + C_2 x + \dfrac {x^3} 6}$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: Problems for Chapter $1$: $9$




