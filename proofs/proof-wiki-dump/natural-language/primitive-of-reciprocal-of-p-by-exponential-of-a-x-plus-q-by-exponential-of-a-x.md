# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_by_Exponential_of_a_x_plus_q_by_Exponential_of_-a_x

Theorem
$\ds \int \frac {\d x} {p e^{a x} + q e^{-a x} } = \begin{cases}
\dfrac 1 {a \sqrt {p q} } \map \arctan {\sqrt {\dfrac p q} e^{a x} } & : \sqrt {p q} > 0 \\
\dfrac 1 {2 a \sqrt {-p q} } \ln \size {\dfrac {e^{a x} - \sqrt {-\dfrac q p} } {e^{a x} + \sqrt {-\dfrac q p} } } & : \sqrt {p q} < 0 \\
\end{cases}$


Proof













\(\ds z\)

\(=\)







\(\ds e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds a e^{a x}\)





Derivative of $e^{a x}$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {p e^{a x} + q e^{-a x} }\)

\(=\)







\(\ds \int \frac 1 {p z + q z^{-1} } \frac {\d z} {a z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 {a p} \int \frac {\d z} {z^2 + \dfrac q p}\)





Primitive of Constant Multiple of Function




Let $\dfrac q p > 0$.
Then:














\(\ds \frac 1 {a p} \int \frac {\d z} {z^2 + \dfrac q p}\)

\(=\)







\(\ds \frac 1 {a p} \paren {\frac 1 {\sqrt {q / p} } \arctan \frac z {\sqrt {q / p} } } + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {p q} } \map \arctan {\sqrt {\frac p q} z}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a \sqrt {p q} } \map \arctan {\sqrt {\frac p q} e^{a x} }\)





substituting for $z$




Let $\dfrac q p < 0$.
Then let $d^2 = -\dfrac q p$ and so:














\(\ds \frac 1 {a p} \int \frac {\d z} {z^2 + \dfrac q p}\)

\(=\)







\(\ds \frac 1 {a p} \int \frac {\d z} {z^2 - d^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a p} \paren {\frac 1 {2 d} \ln \size {\frac {z - d} {z + d} } } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p} \paren {\frac 1 {2 \sqrt {-q / p} } \ln \size {\frac {z - \sqrt {-q / p} } {z + \sqrt {-q / p} } } } + C\)





substituting for $d$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \sqrt {-p q} } \ln \size {\frac {z - \sqrt {-\frac q p} } {z + \sqrt {-\frac q p} } } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a \sqrt {-p q} } \ln \size {\frac {e^{a x} - \sqrt {-\frac q p} } {e^{a x} + \sqrt {-\frac q p} } } + C\)





substituting for $z$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.517$




