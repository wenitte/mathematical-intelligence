# 

Source: https://proofwiki.org/wiki/Bessel%27s_Equation/x%5E2_y%27%27_%2B_x_y%27_%2B_(x%5E2_-_(1_over_4))_y_%3D_0



Theorem
The special case of Bessel's equation:

$(1): \quad x^2 y + x y' + \paren {x^2 - \dfrac 1 4} y = 0$
has the general solution:

$y = C_1 \dfrac {\sin x} {\sqrt x} + C_2 \dfrac {\cos x} {\sqrt x}$


Proof
Particular Solution
Note that:














\(\ds y_1\)

\(=\)







\(\ds \frac {\sin x} {\sqrt x}\)




















\(\ds \)

\(=\)







\(\ds x^{-1/2} \sin x\)














\(\ds \leadsto \ \ \)





\(\ds {y_1}'\)

\(=\)







\(\ds x^{-1/2} \cos x - \frac 1 2 x^{-3/2} \sin x\)





Product Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds {y_1}\)

\(=\)







\(\ds -x^{-1/2} \sin x - \frac 1 2 x^{-3/2} \cos x - \frac 1 2 x^{-3/2} \cos x + \frac 3 4 x^{-5/2} \sin x\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {\frac 3 4 x^{-5/2} - x^{-1/2} } \sin x - x^{-3/2} \cos x\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 3 {4 x^2} - 1} x^{-1/2} \sin x - x^{-3/2} \cos x\)










Inserting into $(1)$, and gradually simplifying:














\(\ds \)

\(\)







\(\ds x^2 \paren {\paren {\frac 3 {4 x^2} - 1} x^{-1/2} \sin x - x^{-3/2} \cos x} + x \paren {x^{-1/2} \cos x - \frac 1 2 x^{-3/2} \sin x} + \paren {x^2 - \dfrac 1 4} x^{-1/2} \sin x\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 3 4 - x^2} x^{-1/2} \sin x - x^{1/2} \cos x + x^{1/2} \cos x - \frac 1 2 x^{-1/2} \sin x + x^{3/2} \sin x - \dfrac 1 4 x^{-1/2} \sin x\)




















\(\ds \)

\(=\)







\(\ds \frac 3 4 x^{-1/2} \sin x - x^{3/2} \sin x - \frac 1 2 x^{-1/2} \sin x + x^{3/2} \sin x - \dfrac 1 4 x^{-1/2} \sin x\)




















\(\ds \)

\(=\)







\(\ds \frac 3 4 x^{-1/2} \sin x - \frac 1 2 x^{-1/2} \sin x - \dfrac 1 4 x^{-1/2} \sin x\)




















\(\ds \)

\(=\)







\(\ds 0\)









hence demonstrating that:

$y_1 = \dfrac {\sin x} {\sqrt x}$
is a particular solution of $(1)$.
$\Box$

$(1)$ can be expressed as:

$(2): \quad y + \dfrac 1 x y' + \paren {1 - \dfrac 1 {4 x^2} } y = 0$
which is in the form:

$y + \map P x y' + \map Q x y = 0$
where:

$\map P x = \dfrac 1 x$
$\map Q x = 1 - \dfrac 1 {4 x^2}$

From Particular Solution to Homogeneous Linear Second Order ODE gives rise to Another:

$\map {y_2} x = \map v x \, \map {y_1} x$
where:

$\ds v = \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x$
is also a particular solution of $(1)$.

We have that:














\(\ds \int P \rd x\)

\(=\)







\(\ds \int \dfrac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \ln x\)





Primitive of Reciprocal








\(\ds \leadsto \ \ \)





\(\ds e^{-\int P \rd x}\)

\(=\)







\(\ds e^{-\ln x}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 x\)










Hence:














\(\ds v\)

\(=\)







\(\ds \int \dfrac 1 { {y_1}^2} e^{-\int P \rd x} \rd x\)





Definition of $v$














\(\ds \)

\(=\)







\(\ds \int \dfrac x {\sin^2 x} \frac 1 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \csc^2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \cot x\)





Primitive of $\csc^2 x$




and so:














\(\ds y_2\)

\(=\)







\(\ds v y_1\)





Definition of $y_2$














\(\ds \)

\(=\)







\(\ds \paren {-\cot x} \dfrac {\sin x} {\sqrt x}\)




















\(\ds \)

\(=\)







\(\ds -\dfrac {\cos x} {\sqrt x}\)










From Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$y = C_1 \dfrac {\sin x} {\sqrt x} + C_2 \dfrac {\cos x} {\sqrt x}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.16$: Problem $6$




