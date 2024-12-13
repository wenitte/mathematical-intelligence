# 

Source: https://proofwiki.org/wiki/Linear_Diophantine_Equation/Examples/10x_-_8y_%3D_42

Example of Linear Diophantine Equation
The linear diophantine equation:

$10 x - 8 y = 42$
has the general solution:

$\tuple {x, y} = \tuple {21 - 4 t, 21 - 5 t}$


Proof
Using the Euclidean Algorithm:




\(\text {(1)}: \quad\)









\(\ds 10\)

\(=\)







\(\ds -1 \times \paren {-8} + 2\)










\(\text {(2)}: \quad\)









\(\ds -8\)

\(=\)







\(\ds -4 \times 2\)









Thus we have that:

$\gcd \set {10, -8} = 2$
which is a divisor of $42$:

$42 = 21 \times 2$
So, from Solution of Linear Diophantine Equation, a solution exists.

Next we find a single solution to $10 x - 8 y = 42$.
Again with the Euclidean Algorithm:














\(\ds 2\)

\(=\)







\(\ds 10 - \paren {\paren {-1} \times \paren {-8} }\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds 42\)

\(=\)







\(\ds 21 \times \paren {1 \times 10 + 1 \times \paren {-8} }\)




















\(\ds \)

\(=\)







\(\ds 21 \times 10 + 21 \times \paren {-8}\)










and so:














\(\ds x_0\)

\(=\)







\(\ds 21\)




















\(\ds y_0\)

\(=\)







\(\ds 21\)









is a solution.

From Solution of Linear Diophantine Equation, the general solution is:

$\forall t \in \Z: x = x_0 + \dfrac b d t, y = y_0 - \dfrac a d t$
where $d = \gcd \set {a, b}$.
In this case:














\(\ds x_0\)

\(=\)







\(\ds 21\)




















\(\ds y_0\)

\(=\)







\(\ds 21\)




















\(\ds a\)

\(=\)







\(\ds 10\)




















\(\ds b\)

\(=\)







\(\ds -8\)




















\(\ds d\)

\(=\)







\(\ds 2\)










giving:














\(\ds x\)

\(=\)







\(\ds 21 - 4 t\)




















\(\ds y\)

\(=\)







\(\ds 21 - 5 t\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-3}$ The Linear Diophantine Equation: Exercise $1 \ \text {(e)}$




