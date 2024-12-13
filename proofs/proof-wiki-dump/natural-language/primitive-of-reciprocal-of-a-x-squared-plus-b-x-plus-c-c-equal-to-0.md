# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_plus_b_x_plus_c/c_equal_to_0



Theorem
Let $a, b \in \R_{\ne 0}$.
Let $c = 0$.
Then:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \frac 1 b \ln \size {\frac x {a x + b} } + C$


Proof 1
First:














\(\ds c\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {\d x} {a x^2 + b x}\)




















\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {x \paren {a x + b} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 b \ln \size {\frac x {a x + b} } + C\)





Primitive of $\dfrac 1 {x \paren {a x + b} }$



$\blacksquare$


Proof 2
Let $c = 0$.
From Primitive of $\dfrac 1 {a x^2 + b x + c}$, we have:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \begin {cases}
\dfrac 2 {\sqrt {4 a c - b^2} } \map \arctan {\dfrac {2 a x + b} {\sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac 1 {\sqrt {b^2 - 4 a c} } \ln \size {\dfrac {2 a x + b - \sqrt {b^2 - 4 a c} } {2 a x + b + \sqrt {b^2 - 4 a c} } } + C & : b^2 - 4 a c > 0 \\
\dfrac {-2} {2 a x + b} + C & : b^2 = 4 a c
\end{cases}$
As $b \ne 0$ it follows that $b^2 - 4 a c = b^2 > 0$.

Thus:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \frac 1 {\sqrt {b^2 - 0} } \ln \size {\dfrac {2 a x + b - \sqrt {b^2 - 0} } {2 a x + b + \sqrt {b^2 - 0} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {b^2} } \ln \size {\frac {2 a x + b - b} {2 a x + b + b} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 b \ln \size {\frac {a x} {a x + b} } + C\)





further simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 b \paren {\ln \size {\frac x {a x + b} } + \ln \size a} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 b \ln \size {\frac x {a x + b} } + C\)





subsuming $\dfrac 1 b \ln \size a$ into the arbitrary constant



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + bx + c$: $14.265$




