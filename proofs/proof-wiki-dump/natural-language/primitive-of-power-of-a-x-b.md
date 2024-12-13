# 

Source: https://proofwiki.org/wiki/Primitive_of_Power_of_a_x_%2B_b



Theorem
$\ds \int \paren {a x + b}^n \rd x = \frac {\paren {a x + b}^{n + 1} } {\paren {n + 1} a} + C$
where $n \ne 1$.


Proof 1
Let $u = a x + b$.
Then:














\(\ds \int \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \frac 1 a \int u^n \rd u\)





Primitive of Function of $a x + b$














\(\ds \)

\(=\)







\(\ds \frac 1 a \frac {u^{n + 1} } {n + 1} + C\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{n + 1} } {\paren {n + 1} a} + C\)





substituting for $u$



$\blacksquare$


Proof 2
Let $u = a x + b$.
Then:

$\dfrac {\d u} {\d x} = a$
Then:














\(\ds \int \paren {a x + b}^n \rd x\)

\(=\)







\(\ds \int \dfrac {u^n} a \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 1 a \dfrac {u^{n + 1} } {n + 1}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac {\paren {a x + b}^{n + 1} } {\paren {n + 1} a} + C\)





substituting back for $u$



$\blacksquare$


Proof 3













\(\ds \map {\dfrac \d {\d x} } {\frac {\paren {a x + b}^{n + 1} } {\paren {n + 1} a} }\)

\(=\)







\(\ds \dfrac {\paren {n + 1} \paren {a x + b}^n} {\paren {n + 1} a} \map {\dfrac \d {\d x} } {a x + b}\)





Power Rule for Derivatives, Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {a \paren {n + 1} \paren {a x + b}^n} {\paren {n + 1} a}\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \paren {a x + b}^n\)





simplifying



The result follows by definition of primitive.
$\blacksquare$


Also see
Primitive of Reciprocal of $a x + b$ for the case when $n = -1$


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(i) (b)}$
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.3$ Rules for Differentiation and Integration: Integrals of Rational Algebraic Functions: $3.3.14$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x + b$: $14.80$
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $5$.




