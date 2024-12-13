# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Root_of_a_x_squared_plus_b_x_plus_c/Lemma

Lemma for Primitive of $x \sqrt {a x^2 + b x + c}$
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int x \sqrt {a x^2 + b x + c} \rd x = \frac {\paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {2 a} \int \sqrt {a x^2 + b x + c} \rd x$


Proof













\(\ds \)

\(\)







\(\ds \int x \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \frac {2 a x \sqrt {a x^2 + b x + c} \rd x} {2 a}\)





multiplying top and bottom by $2 a$














\(\ds \)

\(=\)







\(\ds \int \frac {\paren {2 a x + b - b} \sqrt {a x^2 + b x + c} \rd x} {2 a}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \paren {2 a x + b} \sqrt {a x^2 + b x + c} \rd x - \frac b {2 a} \int \sqrt {a x^2 + b x + c} \rd x\)





Linear Combination of Primitives




Let:














\(\ds z\)

\(=\)







\(\ds a x^2 + b x + c\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

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




So:














\(\ds \)

\(\)







\(\ds \int x \sqrt {a x^2 + b x + c} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \int \paren {2 a x + b} \sqrt {a x^2 + b x + c} \rd x - \frac b {2 a} \int \sqrt {a x^2 + b x + c} \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a} \paren {\frac {2 \paren {\sqrt {a x^2 + b x + c} }^3} 3} - \frac b {2 a} \int \sqrt {a x^2 + b x + c} \rd x\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \frac {\paren {\sqrt {a x^2 + b x + c} }^3} {3 a} - \frac b {2 a} \int \sqrt {a x^2 + b x + c} \rd x\)





simplifying



$\blacksquare$





