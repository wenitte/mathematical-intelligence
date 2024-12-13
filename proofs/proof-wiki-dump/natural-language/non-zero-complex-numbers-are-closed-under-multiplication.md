# 

Source: https://proofwiki.org/wiki/Non-Zero_Complex_Numbers_are_Closed_under_Multiplication



Theorem
The set of non-zero complex numbers is closed under multiplication.


Proof 1
Recall that Complex Numbers form Field under the operations of addition and multiplication.
By definition of a field, the algebraic structure $\struct {\C_{\ne 0}, \times}$ is a group.
Thus, by definition, $\times$ is closed in $\struct {\C_{\ne 0}, \times}$.
$\blacksquare$


Proof 2
Let $z_1, z_2 \in \C_{\ne 0}$.
Then by definition of complex number:

$z_1 = x_1 + i y_1, z_2 = x_2 + i y_2$
for some $x_1, y_1, x_2, y_2 \in \R$ such that:

$x_1 \ne 0$ or $y_1 \ne 0$
$x_2 \ne 0$ or $y_2 \ne 0$
Expressing $z_1$ and $z_2$ in exponential form (although polar form is equally adequate):

$z_1 = r_1 e^{i \theta_1}$ and $z_2 = r_2 e^{i \theta_2}$
for some $r_1, r_2, \theta_1, \theta_2 \in \R$.
Then by Product of Complex Numbers in Polar Form:

$z_1 \times z_2 = \paren {r_1 \times r_2} e^{i \paren {\theta_1 + \theta_2} }$

By definition of exponential form:

$r_1 = \sqrt {x_1^2 + y_1^2}$
$r_2 = \sqrt {x_2^2 + y_2^2}$
Thus $r_1 > 0$ and $r_2 > 0$.
Hence $r_1 \times r_2 > 0$ and so $z_1 \times z_2 \ne 0$.
$\blacksquare$


Proof 3
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
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Example $8.2$




