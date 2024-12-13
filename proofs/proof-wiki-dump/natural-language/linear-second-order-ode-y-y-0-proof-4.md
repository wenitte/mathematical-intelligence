# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_y_%3D_0/Proof_4

Theorem
The second order ODE:

$(1): \quad y + y = 0$
has the general solution:

$y = C_1 \sin x + C_2 \cos x$


Proof
Note that:














\(\ds y_1\)

\(=\)







\(\ds \sin x\)














\(\ds \leadsto \ \ \)





\(\ds y'\)

\(=\)







\(\ds \cos x\)





Derivative of Sine Function








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -\sin x\)





Derivative of Cosine Function



and so:

$y_1 = x$
is a particular solution of $(1)$.

$(1)$  is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = 0$
$\map Q x = 1$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
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







\(\ds \int \dfrac 1 { {y_1}^2} e^{- \int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac 1 {\sin^2 x} C \rd x\)




















\(\ds \)

\(=\)







\(\ds \int C \csc^2 x \rd x\)





Definition of Cosecant














\(\ds \)

\(=\)







\(\ds -C \cot x\)





Primitive of $\csc^2 x$




and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds \sin x \paren {-C \cot x}\)




















\(\ds \)

\(=\)







\(\ds -C \cos x\)





Definition of Cotangent, and simplifying




From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 \sin x + k \paren {-C \cos x}$
where $k$ is arbitrary.

Setting $C_2 = - k C$ yields the result:

$y = C_1 \sin x + C_2 \cos x$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $2 \ \text{(a)}$




