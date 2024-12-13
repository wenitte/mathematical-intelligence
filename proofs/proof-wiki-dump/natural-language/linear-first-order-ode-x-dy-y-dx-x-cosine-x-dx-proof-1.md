# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/x_dy_%2B_y_dx_%3D_x_cosine_x_dx/Proof_1

Theorem
The linear first order ODE:

$x \rd y + y \rd x = x \cos x \rd x$
has the general solution:

$x y = x \sin x + \cos x + C$


Proof
Rearranging:

$\dfrac {d y} {\d x} + \dfrac y x = \cos x$

This is a linear first order ODE in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x y = \dfrac 1 x$
$\map Q x = \cos x$

Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int \frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^{\ln x}\)




















\(\ds \)

\(=\)







\(\ds x\)










Thus from Solution by Integrating Factor:














\(\ds \dfrac {\d} {\d x} \paren {x y}\)

\(=\)







\(\ds x \cos x\)














\(\ds \leadsto \ \ \)





\(\ds x y\)

\(=\)







\(\ds \int x \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds x \sin x + \cos x + C\)





Primitive of $x \cos a x$



$\blacksquare$





