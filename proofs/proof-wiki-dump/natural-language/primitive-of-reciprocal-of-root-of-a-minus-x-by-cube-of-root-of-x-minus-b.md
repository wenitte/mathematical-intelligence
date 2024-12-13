# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_minus_x_by_Cube_of_Root_of_x_minus_b

Theorem
$\ds \int \dfrac {\d x} {\paren {a - x}^{1/2} \paren {x - b}^{3/2} } = \dfrac 2 {b - a} \sqrt {\dfrac {a - x} {x - b} } + C$


Proof 1
Let:














\(\ds x\)

\(=\)







\(\ds a \cos^2 \theta + b \sin^2 \theta\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d x} {\d \theta}\)

\(=\)







\(\ds 2 a \cos \theta \paren {-\sin \theta} + 2 b \sin \theta \cos \theta\)





Chain Rule for Derivatives, Derivative of Cosine Function, Derivative of Sine Function




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2 \paren {b - a} \cos \theta \sin \theta\)










Then we have:















\(\ds x\)

\(=\)







\(\ds a \cos^2 \theta + b \sin^2 \theta\)




















\(\ds \)

\(=\)







\(\ds a \paren {1 - \sin^2 \theta} + b \sin^2 \theta\)





Sum of Squares of Sine and Cosine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a - x\)

\(=\)







\(\ds \paren {a - b} \sin^2 \theta\)





after algebra




and:














\(\ds x\)

\(=\)







\(\ds a \cos^2 \theta + b \sin^2 \theta\)




















\(\ds \)

\(=\)







\(\ds a \cos^2 \theta + b \paren {1 - \cos^2 \theta}\)





Sum of Squares of Sine and Cosine




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds x - b\)

\(=\)







\(\ds \paren {a - b} \cos^2 \theta\)





after algebra




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {a - x} {x - b}\)

\(=\)







\(\ds \dfrac {\paren {a - b} \sin^2 \theta} {\paren {a - b} \cos^2 \theta}\)





$(2)$ divided by $(3)$














\(\ds \dfrac {a - x} {x - b}\)

\(=\)







\(\ds \tan^2 \theta\)





Definition of Real Tangent Function




Hence:














\(\ds \int \dfrac {\d x} {\paren {a - x}^{1/2} \paren {x - b}^{3/2} }\)

\(=\)







\(\ds \int \dfrac {2 \paren {b - a} \cos \theta \sin \theta \rd \theta} {\paren {a - b}^{1/2} \sin \theta \paren {a - b}^{3/2} \cos \theta}\)





substituting from $(1)$, $(2)$ and $(3)$














\(\ds \)

\(=\)







\(\ds \dfrac 2 {b - a} \int \sec^2 \theta \rd \theta\)





simplification, and Definition of Real Secant Function














\(\ds \)

\(=\)







\(\ds \dfrac 2 {b - a} \tan \theta + C\)





Primitive of Square of Secant Function














\(\ds \)

\(=\)







\(\ds \dfrac 2 {b - a} \sqrt {\dfrac {a - x} {x - b} } + C\)





substituting from $(4)$



$\blacksquare$


Proof 2













\(\ds \int \frac {\d x} {\paren {p x + q} \sqrt {\paren {a x + b} \paren {p x + q} } }\)

\(=\)







\(\ds \frac {2 \sqrt {a x + b} } {\paren {a q - b p} \sqrt {p x + q} } + C\)





Primitive of $\dfrac 1 {\paren {p x + q} \sqrt {\paren {a x + b} \paren {p x + q} } }$








\(\ds \leadsto \ \ \)





\(\ds \int \dfrac {\d x} {\paren {a - x}^{1/2} \paren {x - b}^{3/2} }\)

\(=\)







\(\ds \frac {2 \sqrt {\paren {-1} x + a} } {\paren {\paren {-1} \paren {-b} - a \cdot 1} \sqrt {1 \cdot x + \paren {-b} } } + C\)





setting $p \gets 1$, $q \gets b$, $a \gets -1$, $b \gets a$














\(\ds \)

\(=\)







\(\ds \frac {2 \sqrt {a - x} } {\paren {b - a} \sqrt {x - b} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 2 {b - a} \sqrt {\dfrac {a - x} {x - b} } + C\)





rearranging



$\blacksquare$





