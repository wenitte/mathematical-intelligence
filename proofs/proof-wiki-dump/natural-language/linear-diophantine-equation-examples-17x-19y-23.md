# 

Source: https://proofwiki.org/wiki/Linear_Diophantine_Equation/Examples/17x_%2B_19y_%3D_23



Example of Linear Diophantine Equation
The linear diophantine equation:

$17 x + 19 y = 23$
has the general solution:

$\tuple {x, y} = \tuple {207 + 19 t, -184 - 17 t}$


Graphical Presentation



Proof
Using the Euclidean Algorithm:




\(\text {(1)}: \quad\)









\(\ds 19\)

\(=\)







\(\ds 1 \times 17 + 2\)










\(\text {(2)}: \quad\)









\(\ds 17\)

\(=\)







\(\ds 8 \times 2 + 1\)










\(\text {(3)}: \quad\)









\(\ds 2\)

\(=\)







\(\ds 2 \times 1\)









Thus we have that:

$\gcd \set {17, 19} = 1$
which is (trivially) a divisor of $23$.
So, from Solution of Linear Diophantine Equation, a solution exists.

Next we find a single solution to $17 x + 19 y = 23$.
Again with the Euclidean Algorithm:














\(\ds 1\)

\(=\)







\(\ds 17 - 8 \times 2\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 17 - 8 \times \paren {19 - 1 \times 17}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds 9 \times 17 - 8 \times 19\)














\(\ds \leadsto \ \ \)





\(\ds 23\)

\(=\)







\(\ds 23 \times \paren {9 \times 17 - 8 \times 19}\)




















\(\ds \)

\(=\)







\(\ds 207 \times 17 - 184 \times 19\)










and so:














\(\ds x_0\)

\(=\)







\(\ds 207\)




















\(\ds y_0\)

\(=\)







\(\ds -184\)









is a solution.

From Solution of Linear Diophantine Equation, the general solution is:

$\forall t \in \Z: x = x_0 + \dfrac b d t, y = y_0 - \dfrac a d t$
where $d = \gcd \set {a, b}$.
In this case:














\(\ds x_0\)

\(=\)







\(\ds 207\)




















\(\ds y_0\)

\(=\)







\(\ds -184\)




















\(\ds a\)

\(=\)







\(\ds 17\)




















\(\ds b\)

\(=\)







\(\ds 19\)




















\(\ds d\)

\(=\)







\(\ds 1\)










giving:














\(\ds x\)

\(=\)







\(\ds 207 + 19 t\)




















\(\ds y\)

\(=\)







\(\ds -184 - 17 t\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-3}$ The Linear Diophantine Equation: Exercise $1 \ \text {(b)}$




