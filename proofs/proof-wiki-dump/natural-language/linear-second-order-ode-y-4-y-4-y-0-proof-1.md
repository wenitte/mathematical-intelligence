# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_-_4_y%27_%2B_4_y_%3D_0/Proof_1

Theorem
The second order ODE:

$(1): \quad y - 4 y' + 4 y = 0$
has the general solution:

$y = C_1 e^{2 x} + C_2 x e^{2 x}$


Proof
Consider the functions:

$\map {y_1} x = e^{2 x}$
$\map {y_2} x = x e^{2 x}$

We have that:














\(\ds \frac \d {\d x} \, e^{2 x}\)

\(=\)







\(\ds 2 e^{2 x}\)





Power Rule for Derivatives














\(\ds \frac \d {\d x} \, x e^{2 x}\)

\(=\)







\(\ds 2 x e^{2 x} + e^{2 x}\)





Power Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \frac {\d^2} {\d x^2} \, e^{2 x}\)

\(=\)







\(\ds 4 e^{2 x}\)




















\(\ds \frac {\d^2} {\d x^2} \, e^{2 x}\)

\(=\)







\(\ds 4 x e^{2 x} + 2 e^{2 x} + 2 e^{2 x}\)




















\(\ds \)

\(=\)







\(\ds 4 x e^{2 x} + 4 e^{2 x}\)










Putting $e^{2 x}$ and $x e^{2 x}$ into $(1)$ in turn:














\(\ds 4 e^0 - 4 \times 2 e^0 + 4 e^0\)

\(=\)







\(\ds 8 - 8 + 4\)




















\(\ds \)

\(=\)







\(\ds 0\)
























\(\ds 4 \times 0 e^0 + 4 e^0 - 4 \paren {2 \times 0 e^0 + e^0} + 4 \paren {0 e^0}\)

\(=\)







\(\ds 0 + 4 - 4 + 0\)




















\(\ds \)

\(=\)







\(\ds 0\)










Hence it can be seen that:














\(\ds \map {y_1} x\)

\(=\)







\(\ds e^{2 x}\)




















\(\ds \map {y_2} x\)

\(=\)







\(\ds x e^{2 x}\)









are particular solutions to $(1)$.

Calculating the Wronskian of $y_1$ and $y_2$:














\(\ds \map  W {y_1, y_2}\)

\(=\)







\(\ds \begin{vmatrix} e^{2 x} & x e^{2 x} \\ 2 e^{2 x} & \paren {2 x + 1} e^{2 x} \end{vmatrix}\)




















\(\ds \)

\(=\)







\(\ds e^{2 x} \times \paren {2 x + 1} e^{2 x} - x e^{2 x} \times 2 e^{2 x}\)




















\(\ds \)

\(=\)







\(\ds \paren {2 x + 1} e^{4 x} - 2 x e^{4 x}\)




















\(\ds \)

\(=\)







\(\ds e^{4 x}\)









So the Wronskian of $y_1$ and $y_2$ is never zero.

Thus from Zero Wronskian of Solutions of Homogeneous Linear Second Order ODE iff Linearly Dependent:

$y_1$ and $y_2$ are linearly independent everywhere on $\R$.

We have that $(1)$ is a homogeneous linear second order ODE in the form:

$y + \map P x y' + \map Q x y = 0$
where $\map P x = -4$ and $\map Q x = 4$.
So by Constant Real Function is Continuous:

$P$ and $Q$ are continuous on $\R$.

Thus from Two Linearly Independent Solutions of Homogeneous Linear Second Order ODE generate General Solution:

$(1)$ has the general solution:
$y = C_1 e^{2 x} + C_2 x e^{2 x}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.15$: Problem $4$




