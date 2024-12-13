# 

Source: https://proofwiki.org/wiki/Linear_Diophantine_Equation/Examples/5x_%2B_6y_%3D_1

Example of Linear Diophantine Equation
The linear diophantine equation:

$5 x + 6 y = 1$
has the general solution:

$x = -1 + 6 t, y = 1 - 5 t$


Proof
We have that:

$\gcd \set {5, 6} = 1$
which is (trivially) a divisor of $1$.
So, from Solution of Linear Diophantine Equation, a solution exists.

First we find a single solution to $5 x + 6 y = 1$:

$1 = 1 \times 6 - 1 \times 5$
So $y_0 = 1, x_0 = -1$ is a solution.

From Solution of Linear Diophantine Equation, the general solution is then:

$\forall t \in \Z: x = x_0 + \dfrac b d t, y = y_0 - \dfrac a d t$
where $d = \gcd \set {a, b}$.
In this case:














\(\ds x_0\)

\(=\)







\(\ds -1\)




















\(\ds y_0\)

\(=\)







\(\ds 1\)




















\(\ds a\)

\(=\)







\(\ds 5\)




















\(\ds b\)

\(=\)







\(\ds 6\)




















\(\ds d\)

\(=\)







\(\ds 1\)










giving:














\(\ds x\)

\(=\)







\(\ds -1 + 6 t\)




















\(\ds y\)

\(=\)







\(\ds 1 - 5 t\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-3}$ The Linear Diophantine Equation: Example $\text {2-13}$




