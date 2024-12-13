# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%3D_y%27/Proof_2

Theorem
The second order ODE:

$(1): \quad y = y'$
has the general solution:

$y = A_1 e^x + A_2$


Proof
Using Solution of Second Order Differential Equation with Missing Independent Variable, $(1)$ can be expressed as:














\(\ds p \frac {\d p} {\d y}\)

\(=\)







\(\ds p\)





where $p = \dfrac {\d y} {\d x}$








\(\ds \leadsto \ \ \)





\(\ds \int \rd y\)

\(=\)







\(\ds \int \frac {p \rd p} p\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \int \rd y\)

\(=\)







\(\ds \int \rd p\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds p + A_2\)





Primitive of Constant








\(\ds \leadsto \ \ \)





\(\ds p = \frac {\d y} {\d x}\)

\(=\)







\(\ds y - A_2\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \frac {\d y} {\d x} - y\)

\(=\)







\(\ds -A_2\)










$(1)$ is a linear first order ODE in the form:

$\dfrac {\d y} {\d x} + \map P x y = \map Q x$
where:

$\map P x = -1$
$\map Q x = -A_2$

Thus:














\(\ds \int \map P x \rd x\)

\(=\)







\(\ds -\int \rd x\)




















\(\ds \)

\(=\)







\(\ds -x\)














\(\ds \leadsto \ \ \)





\(\ds e^{\int P \rd x}\)

\(=\)







\(\ds e^{-x}\)










Thus from Solution by Integrating Factor, $(1)$ can be rewritten as:














\(\ds \map {\dfrac {\d} {\d x} } {y e^{-x} }\)

\(=\)







\(\ds -A_2 e^{-x}\)














\(\ds \leadsto \ \ \)





\(\ds y e^{-x}\)

\(=\)







\(\ds -A_2 \int e^ \rd x\)




















\(\ds \)

\(=\)







\(\ds A_2 e^{-x} + A_1\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds -e^{-x} \paren {x^2 + 2 x + 2} + C\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds A_1 e^x + A_2\)









$\blacksquare$





