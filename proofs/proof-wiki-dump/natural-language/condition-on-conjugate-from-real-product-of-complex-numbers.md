# 

Source: https://proofwiki.org/wiki/Condition_on_Conjugate_from_Real_Product_of_Complex_Numbers

Theorem
Let $z_1, z_2 \in \C$ be complex numbers such that $z_1 z_2 \in \R_{\ne 0}$.

Then:

$\exists p \in \R: z_1 = p \overline {z_2}$
where $\overline {z_2}$ denotes the complex conjugate of $z_2$.


Proof
Let $z_1 = x_1 + i y_1, z_2 = x_2 + i y_2$.
As $z_1 z_2$ is real:

$(1): \quad z_1 z_2 = x_1 x_2 - y_1 y_2$
and:

$(2): \quad x_1 y_2 + y_1 x_2 = 0$

So:














\(\ds \frac {\paren {z_1} } {\paren {\overline {z_2} } }\)

\(=\)







\(\ds \frac {x_1 + i y_1} {x_2 - i y_2}\)





Definition of Complex Conjugate














\(\ds \)

\(=\)







\(\ds \frac {\paren {x_1 + i y_1} \paren {x_2 + i y_2} } {\paren {x_2 - i y_2} \paren {x_2 + i y_2} }\)





multiplying top and bottom by $x_2 + i y_2$














\(\ds \)

\(=\)







\(\ds \frac {\paren {x_1 + i y_1} \paren {x_2 + i y_2} } { {x_2}^2 + {y_2}^2}\)





Difference of Two Squares and $i^2 = -1$














\(\ds \)

\(=\)







\(\ds \frac {x_1 x_2 - y_1 y_2} { {x_2}^2 + {y_2}^2}\)





from $(1)$




So $z_1 / \overline {z_2} = p$ where $p = \dfrac {x_1 x_2 - y_1 y_2} { {x_2}^2 + {y_2}^2}$, which is real.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $163$




