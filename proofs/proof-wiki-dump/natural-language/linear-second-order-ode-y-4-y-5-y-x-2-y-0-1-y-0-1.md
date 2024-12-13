# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_4_y%27_-_5_y_%3D_x%5E2/y(0)_%3D_1,_y%27(0)_%3D_-1

Theorem
Consider the second order ODE:

$(1): \quad y - 4 y' - 5 y = x^2$
whose initial conditions are:

$y = 1$ when $x = 0$
$y' = -1$ when $x = 0$

$(1)$ has the particular solution:

$y = \dfrac {e^{5 x} } {375} + \dfrac {4 e^{-x} } 3 - \dfrac {x^2} 5 + \dfrac {8 x} {25} - \dfrac {42} {125}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -4$
$q = -5$
$\map R x = x^2$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y - 4 y' - 5 y = 0$
From Linear Second Order ODE: $y - 4 y' - 5 y = 0$, this has the general solution:

$y_g = C_1 e^{5 x} + C_2 e^{-x}$

We have that:

$\map R x = x^2$
and it is noted that $x^2$ is not itself a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Polynomials:

$y_p = A_0 + A_1 x + A_2 x^2$
for $A_n$ to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A_0 + A_1 x + A_2 x^2\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A_1 + 2 A_2 x\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds 2 A_2\)





Power Rule for Derivatives




Substituting into $(1)$:














\(\ds 2 A_2 - 4 \paren {A_1 + 2 A_2 x} - 5 \paren {A_0 + A_1 x + A_2 x^2}\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds -5 A_2 x^2\)

\(=\)







\(\ds x^2\)





equating coefficients of powers














\(\ds \paren {-8 A_2 - 5 A_1} x\)

\(=\)







\(\ds 0\)




















\(\ds 2 A_2 - 4 A_1 - 5 A_0\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds A_2\)

\(=\)







\(\ds -\dfrac 1 5\)




















\(\ds 5 A_1\)

\(=\)







\(\ds \dfrac 8 5\)














\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds \dfrac 8 {25}\)




















\(\ds 5 A_0\)

\(=\)







\(\ds -\dfrac 2 5 - \dfrac {4 \times 8} {25}\)














\(\ds \leadsto \ \ \)





\(\ds A_0\)

\(=\)







\(\ds -\dfrac {42} {125}\)









So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^{5 x} + C_2 e^{-x} - \dfrac 1 5 x^2 + \dfrac 8 {25} x - \dfrac {42} {125}$

Differentiating with respect to $x$:

$y' = 5 C_1 e^{5 x} - C_2 e^{-x} - \dfrac 2 5 x + \dfrac 8 {25}$
Substituting the initial conditions, remembering that $e^0 = 1$:














\(\ds 1\)

\(=\)







\(\ds C_1 + C_2 - \dfrac {42} {125}\)





setting $y = 1$ when $x = 0$














\(\ds -1\)

\(=\)







\(\ds 5 C_1 - C_2 + \dfrac 8 {25}\)





setting $y' = -1$ when $x = 0$








\(\ds \leadsto \ \ \)





\(\ds -\dfrac 2 {125} + 6 C_1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds C_1\)

\(=\)







\(\ds \dfrac 1 {375}\)














\(\ds \leadsto \ \ \)





\(\ds C_2\)

\(=\)







\(\ds 1 - 5 A + \dfrac 8 {25}\)




















\(\ds \)

\(=\)







\(\ds 1 + \dfrac 1 {75} + \dfrac 8 {27}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 4 3\)









The result follows.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.7$ Arbitrary constants and initial conditions: Example $9$




