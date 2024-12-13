# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_p_plus_q_by_Exponential_of_a_x

Theorem
$\ds \int \frac {\d x} {p + q e^{a x} } = \frac x p - \frac 1 {a p} \ln \size {p + q e^{a x} } + C$


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







\(\ds \int \frac {\d z} {a \paren {z - p} z}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac 1 a \int \frac {\d z} {z \paren {z - p} }\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac 1 a \paren {\frac 1 {-p} \ln \size {\frac z {z - p} } } + C\)





Primitive of $\dfrac 1 {x \paren {a x + b} }$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p} \ln \size {\frac {p + q e^{a x} } {q e^{a x} } } + C\)





substituting for $z$














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p} \paren {\ln \size {p + q e^{a x} } - \ln \size {q e^{a x} } } + C\)





Difference of Logarithms














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p} \paren {\ln \size {p + q e^{a x} } - \paren {\ln \size {e^{a x} } + \ln \size q} } + C\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p} \ln \size {p + q e^{a x} } + \frac 1 {a p} \map \ln {e^{a x} } + \frac 1 {a p} \ln \size q + C\)





$e^{a x}$ always positive














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p} \ln \size {p + q e^{a x} } + \frac 1 {a p} \map \ln {e^{a x} } + C\)





$\dfrac 1 {a p} \ln \size q$ subsumed into arbitrary constant














\(\ds \)

\(=\)







\(\ds \frac {-1} {a p} \ln \size {p + q e^{a x} } + \frac 1 {a p} a x + C\)





Exponential of Natural Logarithm














\(\ds \)

\(=\)







\(\ds \frac x p - \frac 1 {a p} \ln \size {p + q e^{a x} } + C\)





simplification



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving $e^{a x}$: $14.515$




