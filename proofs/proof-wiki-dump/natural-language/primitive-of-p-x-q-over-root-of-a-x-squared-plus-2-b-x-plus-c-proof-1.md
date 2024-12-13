# 

Source: https://proofwiki.org/wiki/Primitive_of_p_x_%2B_q_over_Root_of_a_x_squared_plus_2_b_x_plus_c/Proof_1

Theorem
$\ds \int \dfrac {p x + q} {\sqrt {a x^2 + 2 b x + c} } \rd x = \dfrac p a \sqrt {a x^2 + 2 b x + c} + \paren {q - \dfrac {p b} a} \int \dfrac {\d x} {\sqrt {a x^2 + 2 b x + c} }$


Proof













\(\ds \int \dfrac {p x + q} {\sqrt {a x^2 + 2 b x + c} } \rd x\)

\(=\)







\(\ds \dfrac p {2 a} \int \dfrac {2 a x + \frac {2 a q} p} {\sqrt {a x^2 + 2 b x + c} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac p {2 a} \int \dfrac {2 a x + 2 b - 2 b + \frac {2 a q} p} {\sqrt {a x^2 + 2 b x + c} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac p {2 a} \int \dfrac {2 a x + 2 b} {\sqrt {a x^2 + 2 b x + c} } \rd x + \dfrac p {2 a} \paren {\dfrac {2 a q} p - 2 b} \int \dfrac {\d x} {\sqrt {a x^2 + 2 b x + c} }\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \dfrac p {2 a} \int \dfrac {2 a x + 2 b} {\sqrt {a x^2 + 2 b x + c} } \rd x + \paren {q - \dfrac {p b} a} \int \dfrac {\d x} {\sqrt {a x^2 + 2 b x + c} }\)





simplifying




We have from Power Rule for Derivatives that $\map {\dfrac \d {\d x} } {a x^2 + b x + c} = 2 a x + 2 b$, so:












\(\ds \)

\(=\)







\(\ds \dfrac p {2 a} \paren {2 \sqrt {a x^2 + 2 b x + c} } + \paren {q - \dfrac {p b} a} \int \dfrac {\d x} {\sqrt {a x^2 + 2 b x + c} }\)





Square Root of Function under Derivative














\(\ds \)

\(=\)







\(\ds \dfrac p a \sqrt {a x^2 + 2 b x + c} + \paren {q - \dfrac {p b} a} \int \dfrac {\d x} {\sqrt {a x^2 + 2 b x + c} }\)





simplifying



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Algebraic Integration: Type $\text E$.




