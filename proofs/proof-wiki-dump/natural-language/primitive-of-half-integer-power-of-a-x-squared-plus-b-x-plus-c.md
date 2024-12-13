# 

Source: https://proofwiki.org/wiki/Primitive_of_Half_Integer_Power_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x = \frac {\paren {2 a x + b} \paren {a x^2 + b x + c}^{n + \frac 1 2} } {4 a \paren {n + 1} } + \frac {\paren {2 n + 1} \paren {4 a c - b^2} } {8 a \paren {n + 1} } \int \paren {a x^2 + b x + c}^{n - \frac 1 2} \rd x$


Proof

This needs considerable tedious hard slog to complete it.In particular: This only takes on the case where $a > 0$. The case where $a < 0$ needs to be addressed.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.













\(\ds \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)

\(=\)







\(\ds \int \paren {\frac {\paren {2 a x + b}^2 + 4 a c - b^2} {4 a} }^{n + \frac 1 2} \rd x\)





Completing the Square














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {2 \sqrt a}^{2 n + 1} } \int \paren {\paren {2 a x + b}^2 + 4 a c - b^2}^{n + \frac 1 2} \rd x\)





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














\(\ds \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)

\(=\)







\(\ds \frac 1 {\paren {2 \sqrt a}^{2 n + 1} } \int \frac {\paren {z + q}^{n + \frac 1 2} } {4 a \sqrt z} \rd z\)





Integration by Substitution




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {4 a \paren {2 \sqrt a}^{2 n + 1} } \int \frac {\paren {z + q}^{n + \frac 1 2} } {\sqrt z} \rd z\)





Linear Combination of Primitives



From Primitive of $\dfrac {\paren {p x + q}^n} {\sqrt {a x + b} }$:

$\ds \int \frac {\paren {p x + q}^n} {\sqrt {a x + b} } \rd x = \frac {2 \paren {p x + q}^n \sqrt {a x + b} } {\paren {2 n + 1} a} + \frac {2 n \paren {a q - b p} } {\paren {2 n + 1} a} \int \frac {\paren {p x + q}^{n - 1} } {\sqrt {a x + b} } \rd x$

Here $p = 1, a = 1, b = 0$ and $n := n + \dfrac 1 2$:














\(\ds \)

\(\)







\(\ds \int \paren {a x^2 + b x + c}^{n + \frac 1 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {4 a \paren {2 \sqrt a}^{2 n + 1} } \int \frac {\paren {z + q}^{n + \frac 1 2} } {\sqrt z} \rd z\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a \paren {2 \sqrt a}^{2 n + 1} } \paren {\frac {2 \paren {z + q}^{n + \frac 1 2} \sqrt z} {2 \paren {n + \frac 1 2} + 1} + \frac {2 \paren {n + \frac 1 2} q} {2 \paren {n + \frac 1 2} + 1} \int \frac {\paren {z + q}^{n - \frac 1 2} } {\sqrt z} \rd z}\)





Primitive of $\dfrac {\paren {p x + q}^n} {\sqrt {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a \paren {2 \sqrt a}^{2 n + 1} } \paren {\frac {\paren {z + q}^{n + \frac 1 2} \sqrt z} {n + 1} + \frac {\paren {2 n + 1} q} {2 \paren {n + 1} } \int \paren {z + q}^{n - \frac 1 2} \frac {\d z } {\sqrt z} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a \paren {2 \sqrt a}^{2 n + 1} } \paren {\frac {\paren {\paren {2 a x + b}^2 + q}^{n + \frac 1 2} \paren {2 a x + b} } {n + 1} + \frac {\paren {2 n + 1} q} {2 \paren {n + 1} } \int \paren {\paren {2 a x + b}^2 + q}^{n - \frac 1 2} 4 a \rd x}\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac 1 {4 a \paren {n + 1} } \frac {\paren {\paren {2 a x + b}^2 + 4 a c - b^2}^{n + \frac 1 2} \paren {2 a x + b} } {\paren {4 a}^{n + \frac 1 2} }\)





substituting for $q$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\paren {2 n + 1} \paren {4 a c - b^2} } {8 a \paren {n + 1} } \int \frac {\paren {\paren {2 a x + b}^2 + \paren {4 a c - b^2} }^{n - \frac 1 2} } {\paren {4 a}^{n - \frac 1 2} } \rd x\)





and simplifying














\(\ds \)

\(=\)







\(\ds \frac {\paren {2 a x + b} \paren {a x^2 + b x + c}^{n + \frac 1 2} } {4 a \paren {n + 1} } + \frac {\paren {2 n + 1} \paren {4 a c - b^2} } {8 a \paren {n + 1} } \int \paren {a x^2 + b x + c}^{n - \frac 1 2} \rd x\)





Completing the Square



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + b x + c}$: $14.295$




