# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Sine_of_a_x/Examples/3_%2B_2_sin_x

Example of Use of Primitive of $\dfrac 1 {p + q \sin a x}$
$\ds \int \dfrac {\d x} {3 + 2 \sin x} = \frac 2 {\sqrt 5} \map \arctan {\frac {3 \tan \dfrac x 2 + 2} {\sqrt 5} } + C$


Proof
From Primitive of $\dfrac 1 {p + q \sin a x}$:

$\ds \int \frac {\d x} {p + q \sin a x} = \begin{cases}
\ds \frac 2 {a \sqrt {p^2 - q^2} } \map \arctan {\frac {p \tan \dfrac {a x} 2 + q} {\sqrt {p^2 - q^2} } } + C & : q^2 - p^2 < 0 \\
\ds \frac 1 {a \sqrt {q^2 - p^2} } \ln \size {\frac {p \tan \dfrac {a x} 2 + q - \sqrt {p^2 - q^2} } {p \tan \dfrac {a x} 2 + q + \sqrt {p^2 - q^2} } } + C & : q^2 - p^2 > 0 \\
\end{cases}$

The result follows on setting $a = 1$, $p \gets 3$ and $q \gets 2$, as follows.

We have that $2^2 - 3^2 < 0$, and so:














\(\ds \int \dfrac {\d x} {3 + 2 \sin x}\)

\(=\)







\(\ds \frac 2 {\sqrt {3^2 - 2^2} } \map \arctan {\frac {3 \tan \dfrac x 2 + 2} {\sqrt {3^2 - 2^2} } } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt 5} \map \arctan {\frac {3 \tan \dfrac x 2 + 2} {\sqrt 5} } + C\)





simplifying



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $29$.




