# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_squared_minus_x_squared/Logarithm_Form_1/size_of_x_less_than_a



Theorem
Let $a \in \R_{>0}$ be a strictly positive real constant.
Let $\size x < a$.
Then:

$\ds \int \frac {\d x} {a^2 - x^2} = \dfrac 1 {2 a} \map \ln {\dfrac {a + x} {a - x} } + C$


Proof 1
Let $\size x < a$.
Then:














\(\ds \int \frac {\d x} {a^2 - x^2}\)

\(=\)







\(\ds \frac 1 a \artanh {\frac x a} + C\)





Primitive of $\dfrac 1 {a^2 - x^2}$: $\artanh$ form














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\dfrac 1 2 \map \ln {\dfrac {a + x} {a - x} } } + C\)





$\artanh \dfrac x a$ in Logarithm Form














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 a} \map \ln {\dfrac {a + x} {a - x} } + C\)





simplifying





Proof 2
Let $\size x < a$.
Then:














\(\ds \int \frac {\d x} {a^2 - x^2}\)

\(=\)







\(\ds \int \frac {\d x} {\paren {a + x} \paren {a - x} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \int \frac {\d x} {2 a \paren {a + x} } + \int \frac {\d x} {2 a \paren {a - x} }\)





Partial Fraction Expansion














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \frac {\d x} {a + x} + \frac 1 {2 a} \int \frac {\d x} {a - x}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \ln \size {a + x} - \frac 1 {2 a} \ln \size {a - x} + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {a + x} - \frac 1 {2 a} \map \ln {a - x} + C\)





as both $a + x < 0$ and $a - x < 0$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 a} \map \ln {\dfrac {a + x} {a - x} } + C\)





Difference of Logarithms



$\blacksquare$


Proof 3
Let $\size x < a$.
Then:














\(\ds \int \frac {\d x} {a^2 - x^2}\)

\(=\)







\(\ds -\int \frac {\d x} {x^2 - a^2}\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\frac 1 {2 a} \map \ln {\frac {a - x} {a + x} } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$ for $\size x < a$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \map \ln {\frac {x + a} {x - a} } + C\)





Logarithm of Reciprocal



$\blacksquare$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $16$.
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(vii)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: General Rules of Integration: $14.41$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a^2 - x^2$, $x^2 < a^2$: $14.163$




