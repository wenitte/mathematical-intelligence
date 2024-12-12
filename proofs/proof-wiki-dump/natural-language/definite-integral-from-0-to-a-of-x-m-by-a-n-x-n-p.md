# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_a_of_x%5Em_by_(a%5En_-_x%5En)%5Ep

Theorem
$\ds \int_0^a x^m \paren {a^n - x^n}^p \rd x = \frac {a^{m + 1 + n p} \, \map \Gamma {\frac {m + 1} n} \map \Gamma {p + 1} } {n \map \Gamma {\frac {m + 1} n + p + 1} }$


Proof













\(\ds \int_0^a x^m \paren {a^n - x^n}^p \rd x\)

\(=\)







\(\ds a \int_0^1 \paren {a u}^m \paren {a^n - \paren {a u}^n}^p \rd u\)





substituting $x = a u$














\(\ds \)

\(=\)







\(\ds a \times a^m \times a^{n p} \int_0^1 u^m \paren {1 - u^n}^p \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {a^{m + 1 + n p} } n \int_0^1 \frac {u^m} {u^{n - 1} } \paren {1 - t}^p \rd u\)





substituting $t = u^n$














\(\ds \)

\(=\)







\(\ds \frac {a^{m + 1 + n p} } n \int_0^1 t^{\frac {m - n + 1} n} \paren {1 - t}^p \rd u\)




















\(\ds \)

\(=\)







\(\ds \frac {a^{m + 1 + n p} } n \map \Beta {\frac {m + 1} n, p + 1}\)





Definition 1 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {a^{m + 1 + n p} \, \map \Gamma {\frac {m + 1} n} \map \Gamma {p + 1} } {n \map \Gamma {\frac {m + 1} n + p + 1} }\)





Definition 3 of Beta Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Rational or Irrational expressions: $15.24$




