# 

Source: https://proofwiki.org/wiki/Linear_First_Order_ODE/x_y%27_%2B_y_%3D_x%5E2_cosine_x/Proof_1

Theorem
The linear first order ODE:

$x \, \dfrac {\d y} {\d x} + y = x^2 \cos x$
has the general solution:

$y = 2 \cos x + x \sin x - \dfrac 2 x \sin x + \dfrac C x$


Proof
Rearranging:

$\dfrac {\d y} {\d x} + \dfrac y x = x \cos x$
This is in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = \dfrac 1 x$
$\map Q x = x \cos x$
Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds \int \dfrac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \ln x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds x\)









Thus from Solution by Integrating Factor:

$\map {\dfrac {\d} {\d x} } {x y} = x^2 \cos x$















\(\ds \map {\dfrac {\d} {\d x} } {x y}\)

\(=\)







\(\ds x^2 \cos x\)




















\(\ds x y\)

\(=\)







\(\ds \int x^2 \cos x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2 x \cos x + \paren {x^2 - 2} \sin x + C\)





Primitive of $x^2 \cos a x$








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds 2 \cos x + x \sin x - \frac 2 x \sin x + \frac C x\)









$\blacksquare$





