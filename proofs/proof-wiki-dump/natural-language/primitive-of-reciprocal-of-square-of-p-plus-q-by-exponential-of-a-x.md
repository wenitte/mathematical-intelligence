# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Square_of_p_plus_q_by_Exponential_of_a_x

Theorem
$\ds \int \frac {\d x} {\paren {p + q e^{a x} }^2} = \frac x {p^2} + \frac 1 {a p \paren {p + q e^{a x} } } - \frac 1 {a p^2} \ln \size {p + q e^{a x} } + C$


Proof













\(\ds z\)

\(=\)







\(\ds p + q e^{a x}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d z} {\d x}\)

\(=\)







\(\ds a q e^{a x}\)





Derivative of $e^{a x}$














\(\ds \)

\(=\)







\(\ds a \paren {z - p}\)





in terms of $z$








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {p + q e^{a x} }\)

\(=\)







\(\ds \int \frac {\d z} {a \paren {z - p} z^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d z} {z^2 \paren {z - p} }\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac {-1} {-p z} + \frac 1 {\paren {-p}^2} \ln \size {\frac {z - p} z} } + C\)





Primitive of $\dfrac 1 {x^2 \paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p z} + \frac 1 {a p^2} \ln \size {\frac {z - p} z} + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \paren {p + q e^{a x} } } + \frac 1 {a p^2} \ln \size {\frac {q e^{a x} } {p + q e^{a x} } } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \paren {p + q e^{a x} } } + \frac 1 {a p^2} \ln \size {q e^{a x} } - \frac 1 {a p^2} \ln \size {p + q e^{a x} } + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \paren {p + q e^{a x} } } + \frac 1 {a p^2} \ln \size q + \frac 1 {a p^2} \ln \size {e^{a x} } - \frac 1 {a p^2} \ln \size {p + q e^{a x} } + C\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \paren {p + q e^{a x} } } + \frac 1 {a p^2} \ln \size q + \frac 1 {a p^2} \map \ln {e^{a x} } - \frac 1 {a p^2} \ln \size {p + q e^{a x} } + C\)





$e^{a x}$ always positive














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \paren {p + q e^{a x} } } + \frac 1 {a p^2} \map \ln {e^{a x} } - \frac 1 {a p^2} \ln \size {p + q e^{a x} } + C\)





$\dfrac 1 {a p^2} \ln \size q$ subsumed into constant














\(\ds \)

\(=\)







\(\ds \frac 1 {a p \paren {p + q e^{a x} } } + \frac 1 {a p^2} a x - \frac 1 {a p^2} \ln \size {p + q e^{a x} } + C\)





Exponential of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \frac x {p^2} + \frac 1 {a p \paren {p + q e^{a x} } } - \frac 1 {a p^2} \ln \size {p + q e^{a x} } + C\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.516$




