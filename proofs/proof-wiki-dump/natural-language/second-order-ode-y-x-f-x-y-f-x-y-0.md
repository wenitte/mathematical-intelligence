# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y%27%27_-_x_f(x)_y%27_%2B_f(x)_y_%3D_0

Theorem
The second order ODE:

$(1): \quad y - x \, \map f x y' + \map f x y = 0$
has the general solution:

$\ds y = C_1 x + C_2 x \int x^{-2} e^{\int x \, \map f x \rd x} \rd x$


Proof
Note that:














\(\ds y_1\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds {y_1}'\)

\(=\)







\(\ds 1\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_1}\)

\(=\)







\(\ds 0\)





Derivative of Constant




Substituting into $(1)$:














\(\ds y - x \map f x y' + \map f x y\)

\(=\)







\(\ds 0 - x \map f x 1 + \map f x x\)




















\(\ds \)

\(=\)







\(\ds 0\)









and so it has been demonstrated that:

$y_1 = x$
is a particular solution of $(1)$.

$(1)$ is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = -x \map f x$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \paren {-x \map f x} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{-\int \paren {-x \map f x} \rd x}\)




















\(\ds \)

\(=\)







\(\ds e^{\int x \map f x \rd x}\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {x^2} e^{\int x \map f x \rd x} \rd x\)





as $y_1 = x$




and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds x \int x^{-2} e^{\int x \map f x \rd x} \rd x\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$\ds y = C_1 x + C_2 x \int x^{-2} e^{\int x \map f x \rd x} \rd x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $8$




