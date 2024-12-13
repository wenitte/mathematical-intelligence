# 

Source: https://proofwiki.org/wiki/Second_Order_ODE/y_y%27%27_%3D_y%5E2_y%27_%2B_(y%27)%5E2

Theorem
The second order ODE:

$(1): \quad y y = y^2 y' + \paren {y'}^2$
subject to the initial conditions:

$y = -\dfrac 1 2$ and $y' = 1$ when $x = 0$
has the particular solution:

$2 y - 3 = 8 y \, \map \exp {\dfrac {3 x} 2}$


Proof
Using Solution of Second Order Differential Equation with Missing Independent Variable, $(1)$ can be expressed as:














\(\ds y p \frac {\d p} {\d y}\)

\(=\)







\(\ds y^2 p + p^2\)





where $p = \dfrac {\d y} {\d x}$








\(\ds \leadsto \ \ \)





\(\ds \frac {\d p} {\d y} - \frac p y\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds p = \dfrac {\d y} {\d x}\)

\(=\)







\(\ds y \paren {y + C_1}\)





Linear First Order ODE: $y' - \dfrac y x = k x$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d y} {y \paren {y + C_1} }\)

\(=\)







\(\ds \int \rd x\)





Solution to Separable Differential Equation








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {C_1} \map \ln {\frac y {y + C_1} }\)

\(=\)







\(\ds x + C_2\)





Primitive of Reciprocal of $\dfrac x {\paren {a x + b} }$




Now to consider the initial conditions:

$y = -\dfrac 1 2$ and $y' = 1$ when $x = 0$
After algebra:














\(\ds \map \ln {\frac y {y + C_1} }\)

\(=\)







\(\ds C_1 x + C_2\)





reassigning $C_2$








\(\ds \leadsto \ \ \)





\(\ds \frac y {y + C_1}\)

\(=\)







\(\ds e^{C_1 x + C_2}\)




















\(\ds \)

\(=\)







\(\ds e^{C_2} e^{C_1 x}\)










When $x = 0$ we have $y = -1/2$:














\(\ds \frac {-1/2} {-1/2 + C_1}\)

\(=\)







\(\ds \frac 1 {1 - 2 C_1}\)




















\(\ds \)

\(=\)







\(\ds e^{C_2}\)














\(\ds \leadsto \ \ \)





\(\ds \frac y {y + C_1}\)

\(=\)







\(\ds \frac {e^{C_1 x} } {1 - 2 C_1}\)














\(\ds \leadsto \ \ \)





\(\ds y \paren {1 - 2 C_1}\)

\(=\)







\(\ds \paren {y + C_1} e^{C_1 x}\)










Differentiating to get $y'$:

$y' \paren {1 - 2 C_1} = \paren {y + C_1} C_1 e^{C_1 x} + e^{C_1 x} y'$

Putting $y' = 1$ when $x = 0$ we get:














\(\ds 1 - 2 C_1\)

\(=\)







\(\ds \paren {-\frac 1 2 + C_1} C_1 + 1\)














\(\ds \leadsto \ \ \)





\(\ds C_1\)

\(=\)







\(\ds -\frac 3 2\)










So:














\(\ds y \paren {1 - 2 C_1}\)

\(=\)







\(\ds \paren {y + C_1} e^{C_1 x}\)














\(\ds \leadsto \ \ \)





\(\ds y \paren {1 - 2 \frac {-3} 2}\)

\(=\)







\(\ds \paren {y - \frac 3 2} e^{\frac {-3 x} 2}\)














\(\ds \leadsto \ \ \)





\(\ds 8 y\)

\(=\)







\(\ds \paren {2 y - 3} e^{\frac {-3 x} 2}\)














\(\ds \leadsto \ \ \)





\(\ds 2 y - 3\)

\(=\)







\(\ds 8 y \, \map \exp {\dfrac {3 x} 2}\)









$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.11$: Problem $2 \ \text{(b)}$




