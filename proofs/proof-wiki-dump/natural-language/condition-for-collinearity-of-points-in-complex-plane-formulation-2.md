# 

Source: https://proofwiki.org/wiki/Condition_for_Collinearity_of_Points_in_Complex_Plane/Formulation_2



Theorem
Let $z_1, z_2, z_3$ be distinct complex numbers.

Then:

$z_1, z_2, z_3$ are collinear in the complex plane
if and only if:

$\exists \alpha, \beta, \gamma \in \R: \alpha z_1 + \beta z_2 + \gamma z_3 = 0$
where:
$\alpha + \beta + \gamma = 0$
not all of $\alpha, \beta, \gamma$ are zero.


Proof
Sufficient Condition
Let $z_1, z_2, z_3$ be collinear.

Then by Condition for Collinearity of Points in Complex Plane: Formulation 1 there exists a real number $b$ such that:

$z_2 - z_1 = b \paren {z_3 - z_1}$
Then:














\(\ds z_2 - z_1\)

\(=\)







\(\ds b \paren {z_3 - z_1}\)














\(\ds \leadsto \ \ \)





\(\ds z_2 - z_1 - b z_3 + b z_1\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {b - 1} z_1 + z_2 - b z_3\)

\(=\)







\(\ds 0\)









Setting $\alpha = b - 1, \beta = 1, \gamma = -b$ fits the bill, as $\paren {b - 1} + 1 + \paren {-b} = 0$.
$\Box$


Necessary Condition
Let $\alpha + \beta + \gamma = 0$ such that:

$\alpha z_1 + \beta z_2 + \gamma z_3 = 0$
at least one of $\alpha, \beta, \gamma$ is not zero.

Without loss of generality let $\alpha \ne 0$.
Then it follows that as $\alpha + \beta + \gamma = 0$, at least one of $\beta$ and $\gamma$ is also non-zero.
Without loss of generality let $\beta \ne 0$.
In the following it is immaterial whether $\gamma = 0$ or not.
We have:














\(\ds \alpha + \beta + \gamma\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \gamma\)

\(=\)







\(\ds -\paren {\alpha + \beta}\)














\(\ds \leadsto \ \ \)





\(\ds \alpha z_1 + \beta z_2\)

\(=\)







\(\ds \paren {\alpha + \beta} z_3\)





from $\alpha z_1 + \beta z_2 + \gamma z_3 = 0$








\(\ds \leadsto \ \ \)





\(\ds z_1 + \frac \beta \alpha z_2\)

\(=\)







\(\ds \frac {\alpha + \beta} \alpha z_3\)





which can be done because $\alpha \ne 0$








\(\ds \leadsto \ \ \)





\(\ds z_1 + \frac \beta \alpha z_2 - \paren {1 + \frac \beta \alpha} z_1\)

\(=\)







\(\ds \frac {\alpha + \beta} \alpha z_3 - \paren {1 + \frac \beta \alpha} z_1\)














\(\ds \leadsto \ \ \)





\(\ds \frac \beta \alpha \paren {z_2 - z_1}\)

\(=\)







\(\ds \frac {\alpha + \beta} \alpha \paren {z_3 - z_1}\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds z_2 - z_1\)

\(=\)







\(\ds \frac \alpha \beta \frac {\alpha + \beta} \alpha \paren {z_3 - z_1}\)





multiplying both sides by $\dfrac \alpha \beta$, which can be done because $\beta \ne 0$








\(\ds \leadsto \ \ \)





\(\ds z_2 - z_1\)

\(=\)







\(\ds \frac {\alpha + \beta} \beta \paren {z_3 - z_1}\)









Thus it is seen that:

$z_2 - z_1 = b \paren {z_3 - z_1}$
for some $b \in \R$.
Hence by Condition for Collinearity of Points in Complex Plane: Formulation 1, $z_1$, $z_2$ and $z_3$ are collinear.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: Exercise $4$.
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $134$




