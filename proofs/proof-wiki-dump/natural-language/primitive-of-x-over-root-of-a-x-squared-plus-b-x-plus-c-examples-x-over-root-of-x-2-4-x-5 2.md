# 

Source: https://proofwiki.org/wiki/Primitive_of_x_over_Root_of_a_x_squared_plus_b_x_plus_c/Examples/x_over_Root_of_x%5E2_%2B_4_x_%2B_5

Examples of Use of Primitive of $\dfrac x {\sqrt {a x^2 + b x + c} }$
$\ds \int \dfrac {x \rd x} {\sqrt {x^2 + 4 x + 5} } = \sqrt {x^2 + 4 x + 5} - 2 \map \ln {x + 2 + \sqrt {x^2 + 4 x + 5} } + C$


Proof
From Primitive of $\dfrac x {\sqrt {a x^2 + b x + c} }$ with:
Let $a \in \R_{\ne 0}$.
Then for $x \in \R$ such that $a x^2 + b x + c > 0$:

$\ds \int \frac {x \rd x} {\sqrt {a x^2 + b x + c} } = \frac {\sqrt {a x^2 + b x + c} } a - \frac b {2 a} \int \frac {\d x} {\sqrt {a x^2 + b x + c} }$















\(\ds \int \dfrac {x \rd x} {\sqrt {x^2 + 4 x + 5} }\)

\(=\)







\(\ds \frac {\sqrt {x^2 + 4 x + 5} } 1 - \frac 4 {2 \times 1} \int \frac {\d x} {\sqrt {x^2 + 4 x + 5} } + C\)





substituting $a \gets 1$, $b \gets 4$, $c \gets 5$














\(\ds \)

\(=\)







\(\ds \sqrt {x^2 + 4 x + 5} - 2 \int \frac {\d x} {\sqrt {x^2 + 4 x + 5} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \sqrt {x^2 + 4 x + 5} - 2 \map \ln {x + 2 + \sqrt {x^2 + 4 x + 5} } + C\)





Primitive of $\dfrac 1 {\sqrt {x^2 + 4 x + 5} }$



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $18$.




