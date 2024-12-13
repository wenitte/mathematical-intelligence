# 

Source: https://proofwiki.org/wiki/Linear_Diophantine_Equation/Examples/35x_-_256y_%3D_48

Example of Linear Diophantine Equation
The linear diophantine equation:

$35 x - 256 y = 48$
has the general solution:

$\tuple {x, y} = \tuple {16 + 256 t, 2 + 35 t}$


Proof
We use Solution of Linear Diophantine Equation.
Using the Euclidean Algorithm:




\(\text {(1)}: \quad\)









\(\ds -256\)

\(=\)







\(\ds -8 \times 35 + 24\)










\(\text {(2)}: \quad\)









\(\ds 35\)

\(=\)







\(\ds 1 \times 24 + 11\)










\(\text {(3)}: \quad\)









\(\ds 24\)

\(=\)







\(\ds 2 \times 11 + 2\)










\(\text {(4)}: \quad\)









\(\ds 11\)

\(=\)







\(\ds 5 \times 2 + 1\)









Hence we see that $\gcd \set {35, -256} = 1$ which trivially divides $48$, and so there exists a solution.

Again with the Euclidean Algorithm:














\(\ds 1\)

\(=\)







\(\ds 11 - 5 \times 2\)





from $(4)$














\(\ds \)

\(=\)







\(\ds 11 - 5 \times \paren {24 - 2 \times 11}\)





from $(3)$














\(\ds \)

\(=\)







\(\ds 11 \times 11 - 5 \times 24\)




















\(\ds \)

\(=\)







\(\ds 11 \times \paren {35 - 1 \times 24} - 5 \times 24\)





from $(2)$














\(\ds \)

\(=\)







\(\ds 11 \times 35 - 16 \times 24\)




















\(\ds \)

\(=\)







\(\ds 11 \times 35 - 16 \times \paren {-256 + 8 \times 35}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds -16 \times \paren {-256} - 117 \times 35\)














\(\ds \leadsto \ \ \)





\(\ds 48\)

\(=\)







\(\ds 48 \times \paren {-16 \times \paren {-256} - 117 \times 35}\)




















\(\ds \)

\(=\)







\(\ds \paren {-5616} \times 35 + \paren {-768} \times \paren {-256}\)










From Solution of Linear Diophantine Equation, the general solution is:

$\tuple {x, y} = \tuple {-5616 + \paren {-256} t, -768 - 35 t}$
for $t \in \Z$.
This can be simplified by setting $t \to -t$, thus

$\tuple {x, y} = \tuple {-5616 + 256 t, -768 + 35 t}$

We have that:

$-5616 + 22 \times 256 = 16$
and:

$-768 + 22 \times 35 = 2$
hence giving us the answer in smallest positive integer $\tuple {x, y}$:

$\tuple {x, y} = \tuple {16 + 256 t, 2 + 35 t}$
$\blacksquare$





