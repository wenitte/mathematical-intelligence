# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Cosine_of_a_x/Examples/5_%2B_3_cos_x

Example of Use of Primitive of $\dfrac 1 {p + q \cos a x}$
$\ds \int \dfrac {\d x} {5 + 3 \cos x} = \dfrac 1 2 \map \arctan {\dfrac 1 2 \tan \dfrac x 2} + C$


Proof
From Primitive of $\dfrac 1 {p + q \cos a x}$:

$\ds \int \frac {\rd x} {p + q \cos a x} = \begin {cases}
\dfrac 2 {a \sqrt {p^2 - q^2} } \map \arctan {\sqrt {\dfrac {p - q} {p + q} } \tan \dfrac {a x} 2} + C & : p^2 > q^2 \\
\dfrac 1 {a \sqrt {q^2 - p^2} } \ln \size {\dfrac {\tan \dfrac {a x} 2 + \sqrt {\dfrac {q + p} {q - p} } } {\tan \dfrac {a x} 2 - \sqrt {\dfrac {q + p} {q - p} } } } + C & : p^2 < q^2 \\
\end {cases}$
for $p \ne q$.

The result follows on setting $a \gets 1$, $p \gets 5$ and $q \gets 3$, as follows.

We have that $5^2 > 3^2$, and so:














\(\ds \int \dfrac {\d x} {5 + 3 \cos x}\)

\(=\)







\(\ds \dfrac 2 {\sqrt {5^2 - 3^2} } \map \arctan {\sqrt {\dfrac {5 - 3} {5 + 3} } \tan \dfrac x 2} + C\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {\sqrt {16} } \map \arctan {\sqrt {\dfrac 2 8} \tan \dfrac x 2} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \map \arctan {\dfrac 1 2 \tan \dfrac x 2} + C\)





simplifying



$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Exercises $\text {XIV}$: $28$.




