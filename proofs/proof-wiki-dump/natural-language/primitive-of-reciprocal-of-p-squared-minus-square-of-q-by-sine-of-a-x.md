# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_minus_square_of_q_by_Sine_of_a_x



Theorem
$\quad \ds \int \frac {\d x} {p^2 - q^2 \sin^2 a x} = \begin {cases}
\dfrac 1 {a p \sqrt {p^2 - q^2} } \arctan \dfrac {\sqrt {p^2 - q^2} \tan a x} p & : p^2 > q^2 \\
\dfrac 1 {2 a p \sqrt {q^2 - p^2} } \ln \size {\dfrac {\sqrt {q^2 - p^2} \tan a x + p} {\sqrt {q^2 - p^2} \tan a x - p} } & : p^2 < q^2
\end {cases}$


Proof













\(\ds \int \frac {\d x} {p^2 - q^2 \sin^2 a x}\)

\(=\)







\(\ds \int \frac {\sec^2 a x \rd x} {p^2 \sec^2 a x - q^2 \tan^2 a x}\)





multiplying numerator and denominator by $\sec^2 a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\sec^2 a x \rd x} {p^2 \paren {1 + \tan^2 a x} - q^2 \tan^2 a x}\)





Difference of Squares of Secant and Tangent














\(\ds \)

\(=\)







\(\ds \int \frac {\sec^2 a x \rd x} {p^2 + \paren {p^2 - q^2} \tan^2 a x}\)





simplifying



Let:














\(\ds t\)

\(=\)







\(\ds \tan a x\)














\(\ds \leadsto \ \ \)





\(\ds \d t\)

\(=\)







\(\ds a \sec^2 a x \rd x\)





Derivative of Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {p^2 - q^2 \sin^2 a x}\)

\(=\)







\(\ds \frac 1 a \int \frac {\d t} {p^2 + \paren {p^2 - q^2} t^2}\)





Integration by Substitution: substituting $t = \tan a x$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 + \tfrac {p^2} {p^2 - q^2} }\)





rearranging into a standard form




There are two cases to address.

First, suppose $p^2 > q^2$.
Then we have that $p^2 - q^2 > 0$, and so:














\(\ds \int \frac {\d x} {p^2 - q^2 \sin^2 a x}\)

\(=\)







\(\ds \frac 1 {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 + \paren {\tfrac p {\sqrt {p^2 - q^2} } }^2}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {p^2 - q^2} } \frac {\sqrt {p^2 - q^2} } p \map \arctan {\frac {\sqrt {p^2 - q^2} } p t} + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {p^2 - q^2} } \map \arctan {\frac {\sqrt {p^2 - q^2} } p t} + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {p^2 - q^2} } \map \arctan {\frac {\sqrt {p^2 - q^2} \tan a x} p} + C\)





substituting $t = \tan a x$




Now suppose $p^2 < q^2$.
Then we have that $p^2 - q^2 < 0$, and so:















\(\ds \int \frac {\d x} {p^2 - q^2 \sin^2 a x}\)

\(=\)







\(\ds \frac 1 {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 - \tfrac {p^2} {q^2 - p^2} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {p^2 - q^2} } \int \frac {\rd t} {t^2 - \paren {\tfrac p {\sqrt {q^2 - p^2} } }^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {q^2 - p^2} } \frac {\sqrt {q^2 - p^2} } {2 p} \ln \size {\frac {t - \tfrac p {\sqrt {q^2 - p^2} } } {t + \tfrac p {\sqrt {q^2 - p^2} } } } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a p \sqrt {q^2 - p^2} } \ln \size {\frac {\sqrt {q^2 - p^2} t - p} {\sqrt {q^2 - p^2} t + p} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {q^2 - p^2} } \ln \size {\frac {\sqrt {q^2 - p^2} t + p} {\sqrt {q^2 - p^2} t - p} } + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {q^2 - p^2} } \ln \size {\frac {\sqrt {q^2 - p^2} \tan a x + p} {\sqrt {q^2 - p^2} \tan a x - p} } + C\)





substituting $t = \tan a x$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p^2 - q^2 \cos^2 a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sin a x$: $14.363$




