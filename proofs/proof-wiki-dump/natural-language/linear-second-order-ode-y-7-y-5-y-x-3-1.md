# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_7_y%27_-_5_y_%3D_x%5E3_-_1

Theorem
The second order ODE:

$(1): \quad y - 7 y' - 5 y = x^3 - 1$
has the general solution:

$y = C_1 \, \map \exp {\paren {\dfrac 7 2 + \dfrac {\sqrt {69} } 2} x} + C_2 \, \map \exp {\paren {\dfrac 7 2 - \dfrac {\sqrt {69} } 2} x} + \dfrac 1 {625} \paren {-125 x^3 + 525 x^2 - 1620 x + 2603}$


Proof
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y + p y' + q y = \map R x$
where:

$p = -7$
$q = -5$
$\map R x = x^3 - 1$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y - 7 y' - 5 y = 0$
From Linear Second Order ODE: $y - 7 y' - 5 y = 0$, this has the general solution:

$y_g = C_1 \, \map \exp {\paren {\dfrac 7 2 + \dfrac {\sqrt {69} } 2} x} + C_2 \, \map \exp {\paren {\dfrac 7 2 - \dfrac {\sqrt {69} } 2} x}$

We have that:

$\map R x = x^3 - 1$
and it is noted that $x^3 - 1$ is not itself a particular solution of $(2)$.
So from the Method of Undetermined Coefficients for Polynomials:

$y_p = A_0 + A_1 x + A_2 x^2 + A_3 x^3$
for $A_n$ to be determined.

Hence:














\(\ds y_p\)

\(=\)







\(\ds A_0 + A_1 x + A_2 x^2 + A_3 x^3\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A_1 + 2 A_2 x + 3 A_3 x^2\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds 2 A_2 + 6 A_3 x\)





Power Rule for Derivatives




Substituting into $(1)$:














\(\ds 2 A_2 + 6 A_3 x - 7 \paren {A_1 + 2 A_2 x + 3 A_3 x^2} - 5 \paren {A_0 + A_1 x + A_2 x^2 + A_3 x^3}\)

\(=\)







\(\ds x^3 - 1\)














\(\ds \leadsto \ \ \)





\(\ds -5 A_3 x^3\)

\(=\)







\(\ds x^3\)





equating powers














\(\ds \paren {-21 A_3 - 5 A_2} x^2\)

\(=\)







\(\ds 0\)




















\(\ds \paren {6 A_3 - 14 A_2 - 5 A_1} x\)

\(=\)







\(\ds 0\)




















\(\ds 2 A_2 - 7 A_1 - 5 A_0\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds A_3\)

\(=\)







\(\ds -\dfrac 1 5\)




















\(\ds A_2\)

\(=\)







\(\ds -\dfrac {21} 5 A_3\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {21} {25}\)




















\(\ds 5 A_1\)

\(=\)







\(\ds -\dfrac 6 5 - \dfrac {294} {25}\)














\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds -\dfrac {324} {125}\)




















\(\ds 5 A_0\)

\(=\)







\(\ds \dfrac {42} {25} + \dfrac {2268} {125} + 1\)














\(\ds \leadsto \ \ \)





\(\ds A_0\)

\(=\)







\(\ds \dfrac {2603} {625}\)









So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 \, \map \exp {\paren {\dfrac 7 2 + \dfrac {\sqrt {69} } 2} x} + C_2 \, \map \exp {\paren {\dfrac 7 2 - \dfrac {\sqrt {69} } 2} x} + \dfrac 1 {625} \paren {-125 x^3 + 525 x^2 - 1620 x + 2603}$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.3$ Particular solution: polynomial $\map f x$




