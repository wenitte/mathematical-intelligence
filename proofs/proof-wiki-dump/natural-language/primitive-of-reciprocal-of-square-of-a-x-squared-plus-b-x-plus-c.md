# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_square_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {\paren {a x^2 + b x + c}^2} = \frac {2 a x + b} {\paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {2 a} {4 a c - b^2} \int \frac {\d x} {a x^2 + b x + c}$


Proof
Let:














\(\ds z\)

\(=\)







\(\ds 2 a x + b\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a\)





Derivative of Power




Then:














\(\ds \int \frac {\d x} {\paren {a x^2 + b x + c}^2}\)

\(=\)







\(\ds \int \paren {\frac {4 a} {\paren {2 a x + b}^2 + 4 a c - b^2} }^2 \rd x\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {4 a}^2} {\paren {z^2 + 4 a c - b^2}^2} \frac {\d z} {2 a}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds 8 a \int \frac {\d z} {\paren {z^2 + 4 a c - b^2}^2}\)





simplifying




Let $u = z^2$.
Let:














\(\ds u\)

\(=\)







\(\ds z^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d z}\)

\(=\)







\(\ds 2 z\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds 8 a \int \frac {\d z} {\paren {z^2 + 4 a c - b^2}^2}\)

\(=\)







\(\ds 8 a \int \frac {\d u} {2 \sqrt u \paren {u + 4 a c - b^2}^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds 4 a \int \frac {\d u} {\sqrt u \paren {u + 4 a c - b^2}^2}\)





simplifying



Recall the result Primitive of $\dfrac 1 {\paren {p x + q}^n \sqrt {a x + b} }$:

$\ds \int \frac {\d x} {\paren {p x + q}^n \sqrt {a x + b} } = \frac {\sqrt {a x + b} } {\paren {n - 1} \paren {a q - b p} \paren {p x + q}^{n - 1} } + \frac {\paren {2 n - 3} a} {2 \paren {n - 1} \paren {a q - b p} } \int \frac {\d x} {\paren {p x + q}^{n - 1} \sqrt {a x + b} }$

Let:














\(\ds x\)

\(=:\)







\(\ds u\)




















\(\ds a\)

\(=:\)







\(\ds 1\)




















\(\ds b\)

\(=:\)







\(\ds 0\)




















\(\ds p\)

\(=:\)







\(\ds 1\)




















\(\ds q\)

\(=:\)







\(\ds 4 a c - b^2\)




















\(\ds n\)

\(=:\)







\(\ds 2\)










Then:














\(\ds 4 a \int \frac {\d u} {\sqrt u \paren {u + 4 a c - b^2}^2}\)

\(=\)







\(\ds 4 a \paren {\frac {\sqrt u} {\paren {4 a c - b^2} \paren {u + 4 a c - b^2} } + \frac 1 {2 \paren {4 a c - b^2} } \int \frac {\d u} {\paren {u + 4 a c - b^2} \sqrt u} }\)




















\(\ds \)

\(=\)







\(\ds 4 a \paren {\frac z {\paren {4 a c - b^2} \paren {z^2 + 4 a c - b^2} } + \frac 1 {2 \paren {4 a c - b^2} } \int \frac {2 z \rd z} {\paren {z^2 + 4 a c - b^2} z} }\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds 4 a \frac {2 a x + b} {\paren {4 a c - b^2} \paren {\paren {2 a x + b}^2 + 4 a c - b^2} } + \frac {2 a} {4 a c - b^2} \int \frac {4 a \rd x} {\paren {\paren {2 a x + b}^2 + 4 a c - b^2} }\)





substituting for $x$














\(\ds \)

\(=\)







\(\ds \frac {2 a x + b} {\paren {4 a c - b^2} \paren {a x^2 + b x + c} } + \frac {2 a} {4 a c - b^2} \int \frac {\d x} {\paren {a x^2 + b x + c} }\)





Completing the Square



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $a x^2 + b x + c$: $14.272$




