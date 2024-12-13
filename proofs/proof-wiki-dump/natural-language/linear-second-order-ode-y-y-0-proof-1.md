# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_y_%3D_0/Proof_1

Theorem
The second order ODE:

$(1): \quad y - y = 0$
has the general solution:

$y = C_1 e^x + C_2 e^{-x}$


Proof
Note that:














\(\ds y_1\)

\(=\)







\(\ds e^x\)














\(\ds \leadsto \ \ \)





\(\ds y'\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function



and so by inspection:

$y_1 = e^x$
is a particular solution of $(1)$.

$(1)$  is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = 0$
$\map Q x = -1$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int 0 \rd x\)




















\(\ds \)

\(=\)







\(\ds k\)





where $k$ is arbitrary








\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{-k}\)




















\(\ds \)

\(=\)







\(\ds C\)





where $C$ is also arbitrary




Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {e^{2 x} } C \rd x\)




















\(\ds \)

\(=\)







\(\ds \int C e^{-2 x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac {C e^{-2 x} } 2\)





Primitive of $e^{a x}$




and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds e^x \paren {-\frac C 2 e^{-2 x} }\)




















\(\ds \)

\(=\)







\(\ds -\frac C 2 e^{-x}\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 \sin x + k \paren {-\dfrac C 2 e^{-x} }$
where $k$ is arbitrary.
Setting $C_2 = - \dfrac {k C} 2$ yields the result:

$y = C_1 e^x + C_2 e^{-x}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $2 \ \text{(b)}$




