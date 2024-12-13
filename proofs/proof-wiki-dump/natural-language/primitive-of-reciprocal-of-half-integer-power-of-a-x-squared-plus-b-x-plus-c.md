# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Half_Integer_Power_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} } = \frac {2 \paren {2 a x + b} } {\paren {2 n - 1} \paren {4 a c - b^2} \paren {a x^2 + b x + c}^{n - \frac 1 2} } + \frac {8 a \paren {n - 1} } {\paren {2 n - 1} \paren {4 a c - b^2} } \int \frac {\d x} {\paren {a x^2 + b x + c}^{n - \frac 1 2} }$


Proof













\(\ds \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)

\(=\)







\(\ds \int \paren {\frac {4 a} {\paren {2 a x + b}^2 + 4 a c - b^2} }^{n + \frac 1 2} \rd x\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \paren {2 \sqrt a}^{2 n + 1} \int \frac {\d x} {\paren {\paren {2 a x + b}^2 + 4 a c - b^2}^{n + \frac 1 2} }\)





Linear Combination of Primitives




Let:














\(\ds z\)

\(=\)







\(\ds \paren {2 a x + b}^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds 2 a \cdot 2 \paren {2 a x + b}\)





Derivative of Power and Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds 4 a \sqrt z\)










Also let $q = 4 a c - b^2$.

Then:














\(\ds \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)

\(=\)







\(\ds \paren {2 \sqrt a}^{2 n + 1} \int \frac {\d z} {4 a \sqrt z \paren {z + q}^{n + \frac 1 2} }\)





Integration by Substitution




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {\paren {2 \sqrt a}^{2 n + 1} } {4 a} \int \frac {\d z} {\paren {z + q}^{n + \frac 1 2} \sqrt z}\)





Linear Combination of Primitives



From Primitive of $\dfrac 1 {\paren {p x + q}^n \sqrt {a x + b} }$:

$\ds \int \frac {\d x} {\paren {p x + q}^n \sqrt {a x + b} } = \frac {\sqrt {a x + b} } {\paren {n - 1} \paren {a q - b p} \paren {p x + q}^{n - 1} } + \frac {\paren {2 n - 3} a} {2 \paren {n - 1} \paren {a q - b p} } \int \frac {\d x} {\paren {p x + q}^{n - 1} \sqrt {a x + b} }$

Here $p = 1, a = 1, b = 0$ and $n := n + \dfrac 1 2$:














\(\ds \)

\(\)







\(\ds \int \frac {\d x} {\paren {a x^2 + b x + c}^{n + \frac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {2 \sqrt a}^{2 n + 1} } {4 a} \int \frac {\d z} {\paren {z + q}^{n + \frac 1 2} \sqrt z}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 \sqrt a}^{2 n + 1} } {4 a} \paren {\frac {\sqrt z} {\paren {\paren {n + \frac 1 2} - 1} q \paren {z + q}^{\paren {n + \frac 1 2} - 1} } + \frac {2 \paren {n + \frac 1 2} - 3} {2 \paren {\paren {n + \frac 1 2} - 1} q} \int \frac {\d z} {\paren {z + q}^{\paren {n + \frac 1 2} - 1} \sqrt z} }\)





Primitive of $\dfrac 1 {\paren {p x + q}^n \sqrt {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 \sqrt a}^{2 n + 1} } {4 a} \paren {\frac {2 \sqrt z} {\paren {2 n - 1} q \paren {z + q}^{n - \frac 1 2} } + \frac {2 \paren {n - 1} } {\paren {2 n - 1} q} \int \frac {\d z} {\paren {z + q}^{n - \frac 1 2} \sqrt z} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 \sqrt a}^{2 n + 1} } {4 a} \paren {\frac {2 \paren {2 a x + b} } {\paren {2 n - 1} q \paren {\paren {2 a x + b}^2 + q}^{n - \frac 1 2} } + \frac {2 \paren {n - 1} } {\paren {2 n - 1} q} \int \frac {4 a \rd x} {\paren {\paren {2 a x + b}^2 + q}^{n - \frac 1 2} } }\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac 2 {2 n - 1} \frac {\paren {2 a x + b} \paren {4 a}^{n - \frac 1 2} } {\paren {4 a c - b^2} \paren {\paren {2 a x + b}^2 + 4 a c - b^2}^{n - \frac 1 2} }\)





substituting for $q$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {8 a \paren {n - 1} } {\paren {2 n - 1} \paren {4 a c - b^2} } \int \frac {\paren {4 a}^{n - \frac 1 2} \rd x} {\paren {\paren {2 a x + b}^2 + 4 a c - b^2}^{n - \frac 1 2} }\)





and simplifying














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {2 a x + b} } {\paren {2 n - 1} \paren {4 a c - b^2} \paren {a x^2 + b x + c}^{n - \frac 1 2} } + \frac {8 a \paren {n - 1} } {\paren {2 n - 1} \paren {4 a c - b^2} } \int \frac {\d x} {\paren {a x^2 + b x + c}^{n - \frac 1 2} }\)





Completing the Square



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.297$




