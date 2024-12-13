# 

Source: https://proofwiki.org/wiki/Non-Zero_Complex_Numbers_are_Closed_under_Multiplication/Proof_3

Theorem
The set of non-zero complex numbers is closed under multiplication.


Proof
Equivalently this is to say:

$z_1 z_2 = 0 \implies z_1 = 0 \lor z_2 = 0$

Let $z_1 z_2 = 0$.














\(\ds z_1\)

\(=\)







\(\ds \tuple {x_1, y_1}\)





Definition 2 of Complex Number: for some $x_1, y_1 \in \R$














\(\ds z_2\)

\(=\)







\(\ds \tuple {x_2, y_2}\)





Definition 2 of Complex Number: for some $x_2, y_2 \in \R$








\(\ds \leadsto \ \ \)





\(\ds z_1 z_2\)

\(=\)







\(\ds \tuple {x_1 x_2 - y_1 y_2, x_1 y_2 + y_1 x_2}\)





Definition of Complex Multiplication




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x_1 x_2\)

\(=\)







\(\ds y_1 y_2\)










\(\text {(2)}: \quad\)







\(\, \ds \land \, \)

\(\ds x_1 y_2\)

\(=\)







\(\ds -y_1 x_2\)





as $z_1 z_2 = 0$




Without loss of generality, let $\tuple {x_2, y_2} \ne \tuple {0, 0}$.
Aiming for a contradiction, suppose also that $\tuple {x_1, y_1} \ne \tuple {0, 0}$.
Then:














\(\ds x_1\)

\(=\)







\(\ds \frac {y_1 y_2} {x_2}\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \frac {y_1 y_2} {x_2} y_2\)

\(=\)







\(\ds -y_1 x_2\)





substituting in $(2)$








\(\ds \leadsto \ \ \)





\(\ds y_2^2\)

\(=\)







\(\ds - x_2^2\)














\(\ds \leadsto \ \ \)





\(\ds x_2 = y_2\)

\(=\)







\(\ds 0\)





as both $x_2$ and $y_2$ are real



From this contradiction it follows that:

$\tuple {x_1, y_1} = \tuple {0, 0}$
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Axiomatic Foundations of Complex Numbers: $75$




