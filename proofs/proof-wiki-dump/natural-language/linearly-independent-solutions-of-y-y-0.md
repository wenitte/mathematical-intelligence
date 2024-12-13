# 

Source: https://proofwiki.org/wiki/Linearly_Independent_Solutions_of_y%27%27_-_y_%3D_0

Theorem
The second order ODE:

$(1): \quad y - y = 0$
has solutions:

$y_1 = e^x$
$y_2 = e^{-x}$
which are linearly independent.


Proof
We have that:














\(\ds \frac \d {\d x} \, e^x\)

\(=\)







\(\ds e^x\)





Derivative of Exponential Function














\(\ds \frac \d {\d x} \, e^{-x}\)

\(=\)







\(\ds -e^{-x}\)





Derivative of Exponential Function








\(\ds \leadsto \ \ \)





\(\ds \frac {\d^2} {\d x^2} \, e^x\)

\(=\)







\(\ds e^x\)




















\(\ds \frac {\d^2} {\d x^2} \, e^{-x}\)

\(=\)







\(\ds e^{-x}\)










Hence it can be seen by inspection that:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^x\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds e^{-x}\)









are solutions to $(1)$.

Calculating the Wronskian of $y_1$ and $y_2$:














\(\ds \map W {y_1, y_2}\)

\(=\)







\(\ds \begin{vmatrix} e^x & e^{-x} \\ e^x & -e^{-x} \end{vmatrix}\)




















\(\ds \)

\(=\)







\(\ds -e^x e^{-x} - e^x e^{-x}\)




















\(\ds \)

\(=\)







\(\ds -2\)









So the Wronskian of $y_1$ and $y_2$ is never zero.
Thus from Zero Wronskian of Solutions of Homogeneous Linear Second Order ODE iff Linearly Dependent:

$y_1$ and $y_2$ are linearly independent.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.15$: Problem $1$




