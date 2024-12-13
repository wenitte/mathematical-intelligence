# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Root_of_a_x_squared_plus_b_x_plus_c

Theorem
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int x^2 \sqrt {a x^2 + b x + c} \rd x = \frac {6 a x - 5 b} {24 a^2} \paren {\sqrt {a x^2 + b x + c} }^3 + \frac {5 b^2 - 4 a c} {16 a^2} \int \sqrt {a x^2 + b x + c} \rd x$


Proof













\(\ds \)

\(\)







\(\ds \int x^2 \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {2 a x^2} {2 a} \sqrt {a x^2 + b x + c} \rd x\)





multiplying top and bottom by $2 a$














\(\ds \)

\(=\)







\(\ds \int \frac {x \paren {2 a x + b - b} } {2 a} \sqrt {a x^2 + b x + c} \rd x\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int x \paren {2 a x + b} \sqrt {a x^2 + b x + c} \rd x - \frac b {2 a} \int x \sqrt {a x^2 + b x + c} \rd x\)





Linear Combination of Primitives




Let:














\(\ds z\)

\(=\)







\(\ds a x^2 + b x + c\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\rd x}\)

\(=\)







\(\ds 2 a x + b\)





Derivative of Power








\(\ds \leadsto \ \ \)





\(\ds \int \paren {2 a x + b} \sqrt {a x^2 + b x + c} \rd x\)

\(=\)







\(\ds \int \sqrt z \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {\sqrt z}^3} 3\)





Primitive of Power




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {2 \paren {\sqrt {a x^2 + b x + c} }^3} 3\)





substituting for $z$




With a view to expressing the primitive $\ds \int x \paren {2 a x + b} \sqrt {a x^2 + b x + c} \rd x$ in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 1\)





Derivative of Identity Function




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \int \paren {2 a x + b} \sqrt {a x^2 + b x + c} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {2 \paren {\sqrt {a x^2 + b x + c} }^3} 3\)





from $(2)$ above




Then:














\(\ds \)

\(\)







\(\ds \int x \paren {2 a x + b} \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds x \paren {\frac {2 \paren {\sqrt {a x^2 + b x + c} }^3} 3} - \int \paren {\frac {2 \paren {\sqrt {a x^2 + b x + c} }^3} 3} \times 1 \rd x + C\)





Integration by Parts




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {2 x \paren {\sqrt {a x^2 + b x + c} }^3} 3 - \frac 2 3 \int \paren {\sqrt {a x^2 + b x + c} }^3 \rd x + C\)





simplifying




Now consider:














\(\ds \)

\(\)







\(\ds \int \paren {\sqrt {a x^2 + b x + c} }^3 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \paren {a x^2 + b x + c} \sqrt {a x^2 + b x + c} \rd x\)





factorising




\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds a \int x^2 \sqrt {a x^2 + b x + c} \rd x + b \int x \sqrt {a x^2 + b x + c} \rd x + c \int \sqrt {a x^2 + b x + c} \rd x\)





Linear Combination of Primitives




Thus:














\(\ds \)

\(\)







\(\ds \int x^2 \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int x \paren {2 a x + b} \sqrt {a x^2 + b x + c} \rd x - \frac b {2 a} \int x \sqrt {a x^2 + b x + c} \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\frac {2 x \paren {\sqrt {a x^2 + b x + c} }^3} 3 - \frac 2 3 \int \paren {\sqrt {a x^2 + b x + c} }^3 \rd x}\)





from $(3)$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {2 a} \paren {\frac {\paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {2 a} \int \sqrt {a x^2 + b x + c} \rd x}\)





Lemma for Primitive of $x \sqrt {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac 1 {3 a} \int \paren {\sqrt {a x^2 + b x + c} }^3 \rd x\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {6 a^2} \paren {\sqrt {a x^2 + b x + c} }^3 + \frac {b^2} {4 a^2} \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {6 a^2} \paren {\sqrt {a x^2 + b x + c} }^3 + \frac {b^2} {4 a^2} \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 {3 a} \paren {a \int x^2 \sqrt {a x^2 + b x + c} \rd x + b \int x \sqrt {a x^2 + b x + c} \rd x + c \int \sqrt {a x^2 + b x + c} \rd x}\)





from $(4)$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {6 a^2} \paren {\sqrt {a x^2 + b x + c} }^3 + \frac {b^2} {4 a^2} \int \sqrt {a x^2 + b x + c} \rd x\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 3 \int x^2 \sqrt {a x^2 + b x + c} \rd x - \frac b {3 a} \int x \sqrt {a x^2 + b x + c} \rd x - \frac c {3 a} \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {6 a^2} \paren {\sqrt {a x^2 + b x + c} }^3 + \frac {b^2} {4 a^2} \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 3 \int x^2 \sqrt {a x^2 + b x + c} \rd x - \frac c {3 a} \int \sqrt {a x^2 + b x + c} \ rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac b {3 a} \paren {\frac {\paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {2 a} \int \sqrt {a x^2 + b x + c} \rd x}\)





Lemma for Primitive of $x \sqrt {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \frac {x \paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {6 a^2} \paren {\sqrt {a x^2 + b x + c} }^3 + \frac {b^2} {4 a^2} \int \sqrt {a x^2 + b x + c} \rd x\)





simplifying














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 3 \int x^2 \sqrt {a x^2 + b x + c} \rd x - \frac c {3 a} \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {b \paren {\sqrt {a x^2 + b x + c} }^3} {9 a^2} + \frac {b^2} {6 a^2} \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac x {3 a} - \frac b {6 a^2} - \frac b {9 a^2} } \paren {\sqrt {a x^2 + b x + c} }^3\)





gathering terms














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\frac {b^2} {4 a^2} - \frac c {3 a} + \frac {b^2} {6 a^2} } \int \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac 1 3 \int x^2 \sqrt {a x^2 + b x + c} \rd x\)










Hence:














\(\ds \)

\(\)







\(\ds \int x^2 \sqrt {a x^2 + b x + c} \rd x + \frac 1 3 \int x^2 \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {6 a x} {18 a^2} - \frac {3 b} {18 a^2} - \frac {2 b} {18 a^2} } \paren {\sqrt {a x^2 + b x + c} }^3\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\frac {3 b^2} {12 a^2} - \frac {4 a c} {12 a^2} + \frac {2 b^2} {12 a^2} } \int \sqrt {a x^2 + b x + c} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \frac 4 3 \int x^2 \sqrt {a x^2 + b x + c} \rd x\)

\(=\)







\(\ds \frac {6 a x - 5 b} {18 a^2} \paren {\sqrt {a x^2 + b x + c} }^3 + \frac {5 b^2 - 4 a c} {12 a^2} \int \sqrt {a x^2 + b x + c} \rd x\)














\(\ds \leadsto \ \ \)





\(\ds \int x^2 \sqrt {a x^2 + b x + c} \rd x\)

\(=\)







\(\ds \frac {6 a x - 5 b} {24 a^2} \paren {\sqrt {a x^2 + b x + c} }^3 + \frac {5 b^2 - 4 a c} {16 a^2} \int \sqrt {a x^2 + b x + c} \rd x\)





multiplying by $\dfrac 3 4$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sqrt {a x^2 + bx + c}$: $14.287$




