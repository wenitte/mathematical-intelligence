# 

Source: https://proofwiki.org/wiki/Primitive_of_p_x_%2B_q_over_a_x_squared_plus_2_b_x_plus_c



Theorem
$\ds \int \dfrac {p x + q} {a x^2 + 2 b x + c} \rd x = \dfrac p {2 a} \ln \size {a x^2 + 2 b x + c} + \paren {q - \dfrac {p b} a} \int \dfrac {\d x} {a^2 + 2 b x + c} + C$


Proof













\(\ds \int \dfrac {p x + q} {a x^2 + 2 b x + c} \rd x\)

\(=\)







\(\ds p \int \dfrac x {a x^2 + 2 b x + c} \rd x + q \int \dfrac {\rd x} {a x^2 + 2 b x + c}\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \frac p {2 a} \ln \size {a x^2 + 2 b x + c} - \frac {p b} a \int \frac {\d x} {a x^2 + 2 b x + c} + q \int \dfrac {\rd x} {a x^2 + 2 b x + c}  + C\)





Primitive of $\dfrac x {a x^2 + b x + c}$














\(\ds \)

\(=\)







\(\ds \dfrac p {2 a} \ln \size {a x^2 + 2 b x + c} + \paren {q - \dfrac {p b} a} \int \dfrac {\d x} {a^2 + 2 b x + c} + C\)





simplification



$\blacksquare$


Examples
Primitive of $\dfrac {2 x + 1} {3 x^2 + 4 x + 2}$
$\ds \int \dfrac {2 x + 1} {3 x^2 + 4 x + 2} \rd x = \dfrac 1 3 \ln \size {3 x^2 + 4 x + 2} - \dfrac 1 {3 \sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Algebraic Integration: Type $\text B$




