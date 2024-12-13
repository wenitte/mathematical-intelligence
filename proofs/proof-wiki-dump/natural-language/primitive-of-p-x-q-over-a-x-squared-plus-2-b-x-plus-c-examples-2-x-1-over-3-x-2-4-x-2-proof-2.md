# 

Source: https://proofwiki.org/wiki/Primitive_of_p_x_%2B_q_over_a_x_squared_plus_2_b_x_plus_c/Examples/2_x_%2B_1_over_3_x%5E2_%2B_4_x_%2B_2/Proof_2

Example of Use of Primitive of $\dfrac {p x + q} {a x^2 + 2 b x + c}$
$\ds \int \dfrac {2 x + 1} {3 x^2 + 4 x + 2} \rd x = \dfrac 1 3 \ln \size {3 x^2 + 4 x + 2} - \dfrac 1 {3 \sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C$


Proof













\(\ds \int \dfrac {2 x + 1} {3 x^2 + 4 x + 2} \rd x\)

\(=\)







\(\ds \dfrac 1 3 \int \dfrac {6 x + 3} {3 x^2 + 4 x + 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \int \dfrac {6 x + 4 - 1} {3 x^2 + 4 x + 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \paren {\int \dfrac {6 x + 4} {3 x^2 + 4 x + 2} \rd x - \int \dfrac {\d x} {3 x^2 + 4 x + 2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \paren {\ln \size {3 x^2 + 4 x + 2} - \int \dfrac {\d x} {3 x^2 + 4 x + 2} }\)





Primitive of Function under its Derivative: $\map {\dfrac \d {\d x} } {3 x^2 + 4 x + 2} = 6 x + 4$














\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \ln \size {3 x^2 + 4 x + 2} - \dfrac 1 3 \paren {\dfrac 1 {\sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } }\)





Primitive of $\dfrac 1 {3 x^2 + 4 x + 2}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 3 \ln \size {3 x^2 + 4 x + 2} - \dfrac 1 {3 \sqrt 2} \map \arctan {\dfrac {3 x + 2} {\sqrt 2} } + C\)





simplifying



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Algebraic Integration: Type $\text B$.



