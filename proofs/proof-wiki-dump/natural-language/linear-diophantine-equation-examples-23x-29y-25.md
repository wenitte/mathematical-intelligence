# 

Source: https://proofwiki.org/wiki/Linear_Diophantine_Equation/Examples/23x_%2B_29y_%3D_25

Example of Linear Diophantine Equation
The linear diophantine equation:

$23 x + 29 y = 25$
has the general solution:

$\tuple {x, y} = \tuple {-125 + 29 t, 100 - 23 t}$


Proof
Using the Euclidean Algorithm:




\(\text {(1)}: \quad\)









\(\ds 29\)

\(=\)







\(\ds 1 \times 23 + 6\)










\(\text {(2)}: \quad\)









\(\ds 23\)

\(=\)







\(\ds 3 \times 6 + 5\)










\(\text {(3)}: \quad\)









\(\ds 6\)

\(=\)







\(\ds 1 \times 5 + 1\)









Thus we have that:

$\gcd \set {23, 29} = 1$
which is (trivially) a divisor of $25$.
So, from Solution of Linear Diophantine Equation, a solution exists.

Next we find a single solution to $23 x + 29 y = 25$.
Again with the Euclidean Algorithm:














\(\ds 1\)

\(=\)







\(\ds 6 - 1 \times 5\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 6 - 1 \times \paren {23 - 3 \times 6}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 4 \times 6 - 1 \times 23\)




















\(\ds \)

\(=\)







\(\ds 4 \times \paren {29 - 1 \times 23} - 1 \times 23\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 4 \times 29 - 5 \times 23\)














\(\ds \leadsto \ \ \)





\(\ds 25\)

\(=\)







\(\ds 25 \times \paren {4 \times 29 - 5 \times 23}\)




















\(\ds \)

\(=\)







\(\ds 100 \times 29 - 125 \times 23\)










and so:














\(\ds x_0\)

\(=\)







\(\ds -125\)




















\(\ds y_0\)

\(=\)







\(\ds 100\)









is a solution.

From Solution of Linear Diophantine Equation, the general solution is:

$\forall t \in \Z: x = x_0 + \dfrac b d t, y = y_0 - \dfrac a d t$
where $d = \gcd \set {a, b}$.
In this case:














\(\ds x_0\)

\(=\)







\(\ds -125\)




















\(\ds y_0\)

\(=\)







\(\ds 100\)




















\(\ds a\)

\(=\)







\(\ds 23\)




















\(\ds b\)

\(=\)







\(\ds 29\)




















\(\ds d\)

\(=\)







\(\ds 1\)










giving:














\(\ds x\)

\(=\)







\(\ds -125 + 29 t\)




















\(\ds y\)

\(=\)







\(\ds 100 - 23 t\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-3}$ The Linear Diophantine Equation: Exercise $1 \ \text {(d)}$




