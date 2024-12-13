# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_a_x_squared_plus_b_x_plus_c/Examples/x_over_x%5E2_%2B_4_x_%2B_5

Examples of Use of Primitive of $\dfrac x {a x^2 + b x + c}$
$\ds \int \dfrac {x \rd x} {x^2 + 4 x + 5} = \frac 1 2 \map \ln {x^2 + 4 x + 5} - 2 \map \arctan {x + 2} + C$


Proof
From Primitive of $\dfrac x {a x^2 + b x + c}$ with:
Let $a \in \R_{\ne 0}$.
Then:

$\ds \int \frac {x \rd x} {a x^2 + b x + c} = \frac 1 {2 a} \ln \size {a x^2 + b x + c} - \frac b {2 a} \int \frac {\d x} {a x^2 + b x + c}$















\(\ds \int \dfrac {x \rd x} {x^2 + 4 x + 5}\)

\(=\)







\(\ds \frac 1 {2 \times 1} \ln \size {x^2 + 4 x + 5} - \frac 4 {2 \times 1} \int \frac {\d x} {x^2 + 4 x + 5} + C\)





substituting $a \gets 1$, $b \gets 4$, $c \gets 5$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {x^2 + 4 x + 5} - 2 \int \frac {\d x} {x^2 + 4 x + 5} + C\)





simplifying: $x^2 + 4 x + 5 > 0$ for all $x \in \R$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln {x^2 + 4 x + 5} - 2 \map \arctan {x + 2} + C\)





Primitive of $\dfrac 1 {x^2 + 4 x + 5}$



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $17$.




