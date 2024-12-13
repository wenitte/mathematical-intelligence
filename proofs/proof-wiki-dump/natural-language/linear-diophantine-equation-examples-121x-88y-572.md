# 

Source: https://proofwiki.org/wiki/Linear_Diophantine_Equation/Examples/121x_-_88y_%3D_572

Example of Linear Diophantine Equation
The linear diophantine equation:

$121 x - 88 y = 572$
has the general solution:

$\tuple {x, y} = \tuple {156 - 8 t, 208 - 11 t}$


Proof
Using the Euclidean Algorithm:




\(\text {(1)}: \quad\)









\(\ds 121\)

\(=\)







\(\ds -1 \times \paren {-88} + 33\)










\(\text {(2)}: \quad\)









\(\ds -88\)

\(=\)







\(\ds \paren {-3} \times 33 + 11\)










\(\text {(3)}: \quad\)









\(\ds 33\)

\(=\)







\(\ds 3 \times 11\)









Thus we have that:

$\gcd \set {121, -88} = 11$
which is a divisor of $572$:

$572 = 52 \times 11$
So, from Solution of Linear Diophantine Equation, a solution exists.

Next we find a single solution to $121 x - 88 y = 572$.
Again with the Euclidean Algorithm:














\(\ds 11\)

\(=\)







\(\ds -88 - \paren {\paren {-3} \times 33}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds -88 + 3 \times 33\)




















\(\ds \)

\(=\)







\(\ds -88 + 3 \times \paren {1 \times 121 - \paren {\paren {-1} \times \paren {-88} } }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds -88 + 3 \times \paren {121 + 1 \times \paren {-88} }\)




















\(\ds \)

\(=\)







\(\ds 4 \times \paren {-88} + 3 \times 121\)














\(\ds \leadsto \ \ \)





\(\ds 572\)

\(=\)







\(\ds 52 \times \paren {3 \times 121 + 4 \times \paren {-88} }\)




















\(\ds \)

\(=\)







\(\ds 156 \times 121 + 208 \times \paren {-88}\)










and so:














\(\ds x_0\)

\(=\)







\(\ds 156\)




















\(\ds y_0\)

\(=\)







\(\ds 208\)









is a solution.

From Solution of Linear Diophantine Equation, the general solution is:

$\forall t \in \Z: x = x_0 + \dfrac b d t, y = y_0 - \dfrac a d t$
where $d = \gcd \set {a, b}$.
In this case:














\(\ds x_0\)

\(=\)







\(\ds 156\)




















\(\ds y_0\)

\(=\)







\(\ds 208\)




















\(\ds a\)

\(=\)







\(\ds 121\)




















\(\ds b\)

\(=\)







\(\ds -88\)




















\(\ds d\)

\(=\)







\(\ds 11\)










giving:














\(\ds x\)

\(=\)







\(\ds 156 - 8 t\)




















\(\ds y\)

\(=\)







\(\ds 208 - 11 t\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-3}$ The Linear Diophantine Equation: Exercise $1 \ \text {(f)}$




