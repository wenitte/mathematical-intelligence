# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Power_of_x_over_Power_of_x_plus_Power_of_a

Theorem
$\ds \int_0^\infty \dfrac {x^m \rd x} {x^n + a^n} = \frac {\pi a^{m + 1 - n} } {n \map \sin {\paren {m + 1} \frac \pi n} }$
for $0 < m + 1 < n$.


Proof













\(\ds \int_0^\infty \dfrac {x^m \rd x} {x^n + a^n}\)

\(=\)







\(\ds \int_0^\infty \dfrac {x^m \rd x} {\paren {x^{m + 1} }^{\frac n {m + 1} } + \paren {a^{m + 1} }^{\frac n {m + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {m + 1} \int_0^\infty \dfrac 1 {u^{\frac n {m + 1} } + \paren {a^{m + 1} }^{\frac n {m + 1} } } \rd u\)





substituting $u = x^{m + 1}$














\(\ds \)

\(=\)







\(\ds \frac \pi {\paren {m + 1} \paren {\frac n {m + 1} \paren {a^{m + 1} }^{\frac n {m + 1} - 1} } } \map \csc {\frac {\paren {m + 1} \pi} n}\)





Definite Integral to Infinity of $\dfrac 1 {1 + x^n}$: Corollary














\(\ds \)

\(=\)







\(\ds \frac {\pi a^{m + 1} } {n a^{\paren {m + 1} \frac n {m + 1} } } \map \csc {\frac {\paren {m + 1} \pi} n}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi a^{m + 1 - n} } {n \map \sin {\paren {m + 1} \frac \pi n} }\)





Cosecant is Reciprocal of Sine



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Rational or Irrational expressions: $15.20$




