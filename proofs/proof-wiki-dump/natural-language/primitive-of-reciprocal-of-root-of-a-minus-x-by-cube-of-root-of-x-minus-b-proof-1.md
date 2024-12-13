# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_a_minus_x_by_Cube_of_Root_of_x_minus_b/Proof_1

Theorem
$\ds \int \dfrac {\d x} {\paren {a - x}^{1/2} \paren {x - b}^{3/2} } = \dfrac 2 {b - a} \sqrt {\dfrac {a - x} {x - b} } + C$


Proof
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


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Useful substitutions: Example




