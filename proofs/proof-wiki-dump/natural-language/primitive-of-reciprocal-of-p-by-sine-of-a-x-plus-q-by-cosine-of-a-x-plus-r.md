# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_by_Sine_of_a_x_plus_q_by_Cosine_of_a_x_plus_r


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
$\ds \int \frac {\d x} {p \sin a x + q \cos a x + r} = \begin{cases}
\ds \frac 2 {a \sqrt {r^2 - p^2 - q^2} } \map \arctan {\frac {p + \paren {r - q} \tan \dfrac {a x} 2} {\sqrt {r^2 - p^2 - q^2} } } + C & : p^2 + q^2 < r^2 \\
\ds \frac 1 {a \sqrt {p^2 + q^2 - r^2} } \ln \size {\frac {p - \sqrt {p^2 + q^2 - r^2} + \paren {r - q} \tan \dfrac {a x} 2} {p + \sqrt {p^2 + q^2 - r^2} + \paren {r - q} \tan \dfrac {a x} 2} } + C & : p^2 + q^2 > r^2
\end{cases}$


Proof
Let $u = \tan \dfrac {a x} 2$.
Then we have:














\(\ds \d x\)

\(=\)







\(\ds \dfrac {2 \rd u} {a \paren {1 + u^2} }\)




















\(\ds \sin a x\)

\(=\)







\(\ds \dfrac {2 u} {1 + u^2}\)




















\(\ds \cos a x\)

\(=\)







\(\ds \dfrac {1 - u^2} {1 + u^2}\)









Hence:














\(\ds \int \frac {\d x} {p \sin a x + q \cos a x + r}\)

\(=\)







\(\ds \int \dfrac {2 \rd u} {a \paren {1 + u^2} } \frac 1 {p \dfrac {2 u} {1 + u^2} + q \dfrac {1 - u^2} {1 + u^2} + r}\)





Weierstrass Substitution














\(\ds \)

\(=\)







\(\ds \dfrac 2 a \int \frac {\d u} {2 p u + q \paren {1 - u^2} + r \paren {1 + q^2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 a \int \frac {\d u} {\paren {r - q} u^2 + 2 p u + \paren {r + q} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {a \paren {r - q} } \int \frac {\d u} {u^2 + \dfrac {2 p} {r - q} u + \dfrac {r + q} {r - q} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {a \paren {r - q} } \int \frac {\d u} {\paren {u + \dfrac p {r - q} }^2 - \dfrac {p^2} {\paren {r - q}^2} + \dfrac {r + q} {r - q} }\)





completing the square














\(\ds \)

\(=\)







\(\ds \dfrac 2 {a \paren {r - q} } \int \frac {\d u} {\paren {u + \dfrac p {r - q} }^2 + \dfrac {r^2 - \paren {p^2 + q^2} } {\paren {r - q}^2} }\)





rearranging




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac 2 {a \paren {r - q} } \int \frac {\d z} {z^2 + \dfrac {r^2 - \paren {p^2 + q^2} } {\paren {r - q}^2} }\)





Integration by Substitution: substituting $z = u + \dfrac p {r - q}$: $\d z = \d u$




There are $2$ cases: $r^2 > p^2 + q^2$ and $r^2 < p^2 + q^2$.

First suppose $r^2 > p^2 + q^2$.
Then:

$r^2 - \paren {p^2 + q^2} > 0$
and so $(1)$ may be written as:














\(\ds \int \frac {\d x} {p \sin a x + q \cos a x + r}\)

\(=\)







\(\ds \dfrac 2 {a \paren {r - q} } \int \frac {\d z} {z^2 + \paren {\dfrac {\sqrt {r^2 - p^2 - q^2} } {r - q} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {a \paren {r - q} } \dfrac {r - q} {\sqrt {r^2 - p^2 - q^2} } \map \arctan {\dfrac {\paren {r - q} z} {\sqrt {r^2 - p^2 - q^2} } } + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \dfrac 2 {a \sqrt {r^2 - p^2 - q^2} } \map \arctan {\dfrac {\paren {r - q} \paren {u + \dfrac p {r - q} } } {\sqrt {r^2 - p^2 - q^2} } } + C\)





substituting back for $z$














\(\ds \)

\(=\)







\(\ds \dfrac 2 {a \sqrt {r^2 - p^2 - q^2} } \map \arctan {\dfrac {p + \paren {r - q} \tan \dfrac {a x} 2} {\sqrt {r^2 - p^2 - q^2} } } + C\)





simplifying and substituting back for $u$




Next suppose $r^2 < p^2 + q^2$.
Then:

$r^2 - \paren {p^2 + q^2} < 0$
and so $(1)$ may be written as:














\(\ds \int \frac {\d x} {p \sin a x + q \cos a x + r}\)

\(=\)







\(\ds \dfrac 2 {a \paren {r - q} } \int \frac {\d z} {z^2 - \paren {\dfrac {\sqrt {p^2 + q^2 - r^2} } {r - q} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {a \paren {r - q} } \dfrac {r - q} {2 \sqrt {p^2 + q^2 - r^2} } \ln \size {\frac {z - \dfrac {\sqrt {p^2 + q^2 - r^2} } {r - q} } {z + \dfrac {\sqrt {p^2 + q^2 - r^2} } {r - q} } } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a \sqrt {p^2 + q^2 - r^2} } \ln \size {\frac {\paren {r - q} \paren {u + \dfrac p {r - q} } - \sqrt {p^2 + q^2 - r^2} } {\paren {r - q} \paren {u + \dfrac p {r - q} } + \sqrt {p^2 + q^2 - r^2} } } + C\)





substituting back for $z$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {a \sqrt {p^2 + q^2 - r^2} } \ln \size {\frac {p - \sqrt {p^2 + q^2 - r^2} + \paren {r - q} \tan \dfrac {a x} 2} {p + \sqrt {p^2 + q^2 - r^2} + \paren {r - q} \tan \dfrac {a x} 2} } + C\)





simplifying and substituting back for $u$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p \sin a x + q \cos a x}$ for the case where $r = 0$
Primitive of $\dfrac 1 {p \sin a x + q \paren {1 + \cos a x} }$ for the case where $r = q$
Primitive of $\dfrac 1 {p \sin a x + q \cos a x + \sqrt {p^2 + q^2} }$ for the case where $r = \sqrt {p^2 + q^2}$
Primitive of $\dfrac 1 {p \sin a x + q \cos a x - \sqrt {p^2 + q^2} }$ for the case where $r = -\sqrt {p^2 + q^2}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$ and $\cos a x$: $14.420$




