# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_a_x_squared_plus_b_x_plus_c/b_equal_to_0



Theorem
Let $a \in \R_{\ne 0}$.
Let $b = 0$.
Then:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \begin {cases}
\dfrac 1 {\sqrt {a c} } \map \arctan {x \sqrt {\dfrac a c} } + C & : a c > 0 \\
\dfrac 1 {2 \sqrt {-a c} } \ln \size {\dfrac {a x - \sqrt {-a c} } {a x + \sqrt {-a c} } } + C & : a c < 0 \\
\dfrac {-1} {a x} + C & : c = 0
\end {cases}$


Proof 1
First:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {\d x} {a x^2 + c}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {x^2 + \frac c a}\)





Primitive of Constant Multiple of Function




Let $a c > 0$.
Then $\dfrac c a > 0$ and:














\(\ds \frac c a\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \frac c a\)

\(=\)







\(\ds q^2\)





for some $q \in \R$








\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds \sqrt {\frac c a}\)










Thus:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {x^2 + q^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a q} \arctan \frac x q + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {\frac c a} } \arctan \frac x {\sqrt {\frac c a} } + C\)





substituting for $q$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {a c} } \map \arctan {x \sqrt {\dfrac a c} } + C\)





simplifying



$\Box$

Let $a c < 0$.
Then $\dfrac c a > 0$ and:














\(\ds \frac c a\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds -\frac c a\)

\(=\)







\(\ds q^2\)





for some $q \in \R$








\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds \sqrt {-\frac c a}\)










Thus:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d x} {x^2 - q^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a q} \ln \size {\frac {z - q} {z + q} } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \sqrt {-\frac c a} } \ln \size {\frac {z - \sqrt {-\frac c a} } {z + \sqrt {-\frac c a} } } + C\)





substituting for $q$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \sqrt {-a c} } \ln \size {\dfrac {a x - \sqrt {-a c} } {a x + \sqrt {-a c} } } + C\)





simplifying



$\Box$

Let $c = 0$.
Then:














\(\ds \int \frac {\d x} {a x^2 + b x + c}\)

\(=\)







\(\ds \int \frac {\d x} {a x^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-1} {a x} + C\)





Primitive of Power



$\blacksquare$


Proof 2
Let $b = 0$.
From Primitive of Reciprocal of a x squared plus b x plus c, we have:

$\ds \int \frac {\d x} {a x^2 + b x + c} = \begin{cases}
\dfrac 2 {\sqrt {4 a c - b^2} } \map \arctan {\dfrac {2 a x + b} {\sqrt {4 a c - b^2} } } + C & : b^2 - 4 a c < 0 \\
\dfrac 1 {\sqrt {b^2 - 4 a c} } \ln \size {\dfrac {2 a x + b - \sqrt {b^2 - 4 a c} } {2 a x + b + \sqrt {b^2 - 4 a c} } } + C & : b^2 - 4 a c > 0 \\
\dfrac {-2} {2 a x + b} + C & : b^2 = 4 a c
\end{cases}$

Let $a c > 0$.
Then $b^2 - 4 a c = 0 - 4 a c < 0$ and so:














\(\ds \int \frac {\d x} {a x^2 + 0 x + c}\)

\(=\)







\(\ds \frac 2 {\sqrt {4 a c - 0^2} } \map \arctan {\frac {2 a x + 0} {\sqrt {4 a c - 0^2} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt {4 a c} } \map \arctan {\frac {2 a x} {\sqrt {4 a c} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {a c} } \map \arctan {x \sqrt {\dfrac a c} } + C\)





simplifying



$\Box$

Let $a c < 0$.
Then $b^2 - 4 a c = 0 - 4 a c > 0$ and so:














\(\ds \int \frac {\d x} {a x^2 + 0 x + c}\)

\(=\)







\(\ds \frac 1 {\sqrt {0^2 - 4 a c} } \ln \size {\frac {2 a x + 0 - \sqrt {0^2 - 4 a c} } {2 a x + 0 + \sqrt {0^2 - 4 a c} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {- 4 a c} } \ln \size {\frac {2 a x - \sqrt {- 4 a c} } {2 a x + \sqrt {- 4 a c} } } + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \sqrt {-a c} } \ln \size {\dfrac {a x - \sqrt {-a c} } {a x + \sqrt {-a c} } } + C\)





simplifying



$\Box$

Let $c = 0$.
Then $b^2 - 4 a c = 0 - 0 = 0$ and so:














\(\ds \int \frac {\d x} {a x^2 + 0 x + 0}\)

\(=\)







\(\ds \frac {-2} {2 a x + 0} + C\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a x} + C\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.265$



