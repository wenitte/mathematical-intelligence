# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_squared_plus_Square_of_q_by_Hyperbolic_Sine_of_a_x



Theorem
$\ds \int \frac {\d x} {p^2 + q^2 \sinh^2 a x} = \begin {cases}
\dfrac 1 {a p \sqrt{q^2 - p^2} } \arctan \dfrac {\sqrt {q^2 - p^2} \tanh a x} p + C & : p^2 < q^2 \\
\dfrac 1 {2 a p \sqrt{p^2 - q^2} } \ln \size {\dfrac {p + \sqrt {p^2 - q^2} \tanh a x} {p - \sqrt {p^2 - q^2} \tanh a x} } + C & : p^2 > q^2 \\
\end {cases}$


Proof













\(\ds \int \frac {\d x} {p^2 + q^2 \sinh^2 a x}\)

\(=\)







\(\ds \int \frac {\sech^2 a x \rd x} {p^2 \sech^2 a x + q^2 \tanh^2 a x}\)





multiplying numerator and denominator by $\sech^2 a x$














\(\ds \)

\(=\)







\(\ds \int \frac {\sech^2 a x \rd x} {p^2 \paren {1 - \tanh^2 a x} + q^2 \tanh^2 a x}\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds \int \frac {\sech^2 a x \rd x} {p^2 + \paren {q^2 - p^2} \tanh^2 a x}\)










Then:














\(\ds u\)

\(=\)







\(\ds \tanh a x\)














\(\ds \leadsto \ \ \)





\(\ds \d u\)

\(=\)







\(\ds a \sech^2 a x \rd x\)





Derivative of Hyperbolic Tangent Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\sech^2 a x \rd x} {p^2 + \paren {q^2 - p^2} \tanh^2 a x}\)

\(=\)







\(\ds \int \frac {\d u} {a p^2 + a \paren {q^2 - p^2} u^2}\)





Integration by Substitution: $u = \tanh a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {q^2 - p^2} } \int \frac {\d u} {u^2 + \paren {\frac {p^2} {q^2 - p^2} } }\)










There are two cases to address: $q^2 - p^2 > 0$ and $q^2 - p^2 < 0$.

First suppose that $q^2 - p^2 > 0$.
Then:














\(\ds \frac 1 {a \paren {q^2 - p^2} } \int \frac {\d u} {u^2 + \paren {\frac {p^2} {q^2 - p^2} } }\)

\(=\)







\(\ds \frac 1 {a \paren {q^2 - p^2} } \int \frac {\d u} {u^2 + \paren {\frac p {\sqrt {q^2 - p^2} } }^2 }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a \paren {q^2 - p^2} } \frac {\sqrt {q^2 - p^2} } p \arctan \frac u {\frac p {\sqrt {q^2 - p^2} } } + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {q^2 - p^2} } \arctan \frac {\sqrt {q^2 - p^2} u} p + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {a p \sqrt {q^2 - p^2} } \arctan \frac {\sqrt {q^2 - p^2} \tanh a x} p + C\)





substituting $u = \tanh a x$




Now suppose that $q^2 - p^2 < 0$.
Then:














\(\ds \frac 1 {a \paren {q^2 - p^2} } \int \frac {\d u} {u^2 + \paren {\frac {p^2} {q^2 - p^2} } }\)

\(=\)







\(\ds \frac 1 {a \paren {q^2 - p^2} } \int \frac {\d u} {u^2 - \paren {\frac {p^2} {p^2 - q^2} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 - q^2} } \int \frac {\d u} {u^2 - \paren {\frac p {\sqrt {p^2 - q^2} } }^2 }\)




















\(\ds \)

\(=\)







\(\ds \frac {-1} {a \paren {p^2 - q^2} } \frac {\sqrt {p^2 - q^2} } {2 p} \ln \size {\frac {u - \frac p {\sqrt {p^2 - q^2} } } {u + \frac p {\sqrt {p^2 - q^2} } } } + C\)





Primitive of $\dfrac 1 {x^2 - a^2}$














\(\ds \)

\(=\)







\(\ds \frac {-1} {2 a p \sqrt {p^2 - q^2} } \ln \size {\frac {\sqrt {p^2 - q^2} u - p} {\sqrt {p^2 - q^2} u + p} } + C\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {p^2 - q^2} } \ln \size {\frac {\sqrt {p^2 - q^2} u + p} {\sqrt {p^2 - q^2} u - p} } + C\)





Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {p^2 - q^2} } \ln \size {\frac {\sqrt {p^2 - q^2} \tanh a x + p} {\sqrt {p^2 - q^2} \tanh a x - p} } + C\)





substituting $u = \tanh a x$














\(\ds \)

\(=\)







\(\ds \frac 1 {2 a p \sqrt {p^2 - q^2} } \ln \size {\frac {p + \sqrt {p^2 - q^2} \tanh a x} {p - \sqrt {p^2 - q^2} \tanh a x} } + C\)





as $\size {a - b} - \size {b - a}$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {p^2 + q^2 \cosh^2 a x}$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $\sinh a x$: $14.555$




