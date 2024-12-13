# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_2_y%27_%2B_y_%3D_2_x



Theorem
The second order ODE:

$(1): \quad y' ' - 2 y' + y = 2 x$
has the general solution:

$y = C_1 e^x + C_2 x e^x + 2 x + 4$


Proof 1
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


Proof 2
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

Expressing $y_g$ in the form:

$y_g = C_1 \, \map {y_1} x + C_2 \, \map {y_2} x$
we have:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^x\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds x e^x\)














\(\ds \leadsto \ \ \)





\(\ds \map { {y_1}'} x\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function














\(\ds \map { {y_2}'} x\)

\(=\)







\(\ds x e^x + e^x\)





Derivative of Exponential Function, Product Rule for Derivatives




By the Method of Variation of Parameters, we have that:

$y_p = v_1 y_1 + v_2 y_2$
where:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)









where $\map W {y_1, y_2}$ is the Wronskian of $y_1$ and $y_2$.

We have that:














\(\ds \map W {y_1, y_2}\)

\(=\)







\(\ds y_1 {y_2}' - y_2 {y_1}'\)





Definition of Wronskian














\(\ds \)

\(=\)







\(\ds e^x \paren {x e^x + e^x} - x e^x e^x\)




















\(\ds \)

\(=\)







\(\ds x e^{2 x} + e^{2 x} - x e^{2 x}\)




















\(\ds \)

\(=\)







\(\ds e^{2 x}\)










Hence:














\(\ds v_1\)

\(=\)







\(\ds \int -\frac {y_2 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -\frac {x e^x 2 x} {e^{2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int -2 x^2 e^{- x} \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 e^{-x} \paren {x^2 + 2 x + 2}\)





Primitive of $x^2 e^{a x}$


















\(\ds v_2\)

\(=\)







\(\ds \int \frac {y_1 \, \map R x} {\map W {y_1, y_2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {e^x 2 x} {e^{2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int 2 x e^{-x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -2 e^{- x} \paren {x + 1}\)





Primitive of $x e^{a x}$




It follows that:














\(\ds y_p\)

\(=\)







\(\ds 2 e^{-x} \paren {x^2 + 2 x + 2} e^x - 2 e^{-x} \paren {x + 1} x e^x\)




















\(\ds \)

\(=\)







\(\ds 2 x^2 + 4 x + 4 - 2 x^2 - 2 x\)





simplifying














\(\ds \)

\(=\)







\(\ds 2 x + 4\)





further simplifying



So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + C_2 x e^x + 2 x + 4$
is the general solution to $(1)$.
$\blacksquare$


Proof 3
It can be seen that $(1)$ is a nonhomogeneous linear second order ODE with constant coefficients in the form:

$y' ' + p y' + q y = \map R x$
where:

$p = -2$
$q = 1$
$\map R x = 2 x$

First we establish the solution of the corresponding constant coefficient homogeneous linear second order ODE:

$(2): \quad y' ' - 2 y' + y = 0$
From Linear Second Order ODE: $y - 2 y' + y = 0$, this has the general solution:

$y_g = C_1 e^x + C_2 x e^x$

We have that:

$R \left({x}\right) = 2 x$
So from the Method of Undetermined Coefficients for Polynomial:

$y_p = A_0 + A_1 x$

Hence:














\(\ds y_p\)

\(=\)







\(\ds A_0 + A_1 x\)














\(\ds \leadsto \ \ \)





\(\ds {y_p}'\)

\(=\)







\(\ds A_1\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_p}\)

\(=\)







\(\ds 0\)





Derivative of Constant




Substituting into $(1)$:














\(\ds 0 - 2 A_1 + \paren {A_0 + A_1 x}\)

\(=\)







\(\ds 2 x\)














\(\ds \leadsto \ \ \)





\(\ds -2 A_1 + A_0\)

\(=\)







\(\ds 0\)





equating coefficients








\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds 2\)














\(\ds \leadsto \ \ \)





\(\ds A_0\)

\(=\)







\(\ds 4\)










So from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$y = y_g + y_p = C_1 e^x + C_2 x e^x + 2 x + 4$
is the general solution to $(1)$.
$\blacksquare$





