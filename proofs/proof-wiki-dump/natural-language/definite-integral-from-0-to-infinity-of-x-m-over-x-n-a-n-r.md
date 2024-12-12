# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_Infinity_of_x%5Em_over_(x%5En_%2B_a%5En)%5Er

Theorem
$\ds \int_0^\infty \frac {x^m \rd x} {\paren {a^n + x^n}^r} = \frac {\paren {-1}^{r - 1} \pi a^{m + 1 - n r} \, \map \Gamma {\frac {m + 1} n} } {n \sin \frac {\paren {m + 1} \pi} n \paren {r - 1}! \, \map \Gamma {\frac {m + 1} n - r + 1} }$
for:

$0 < m + 1 < n r$
$r + 1 - \dfrac {m + 1} n \notin \N_{>0}$
$r \in \N_{>0}$.


Proof













\(\ds u\)

\(=\)







\(\ds \frac {x^n} {a^n}\)














\(\ds \leadsto \ \ \)





\(\ds \d u\)

\(=\)







\(\ds \frac {n x^{n - 1} } {a^n} \rd x\)





Power Rule for Derivatives














\(\ds \d u\)

\(=\)







\(\ds \frac {n \paren {a \times u^{\frac 1 n} }^{n - 1} } {a^n} \rd x\)





substituting for $x$








\(\ds \leadsto \ \ \)





\(\ds \d x\)

\(=\)







\(\ds \frac a n u^{\frac 1 n - 1} \rd u\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \int_0^\infty \frac {x^m \rd x} {\paren {a^n + x^n}^r}\)

\(=\)







\(\ds \int_0^\infty \frac {\paren {a \times u^{\frac 1 n} }^m } {\paren {a^n + \paren {a \times u^{\frac 1 n} }^n}^r} \frac a n u^{\frac 1 n - 1} \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac {a^{m + 1 - r n} } n \int_0^\infty \frac {\paren {u^{\frac 1 n} }^m} {\paren {1 + \paren {u^{\frac 1 n} }^n}^r} u^{\frac 1 n - 1} \rd u\)





factoring out constants














\(\ds \)

\(=\)







\(\ds \frac {a^{m + 1 - r n} } n \int_0^\infty \frac {u^{\frac {m + 1} n - 1} } {\paren {1 + u}^r} \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {a^{m + 1 - r n} } n \map \Beta {\frac {m + 1} n, r - \frac {m + 1} n}\)





Beta Function as Integral of Power of $t$ over Power of $t + 1$














\(\ds \)

\(=\)







\(\ds \frac {a^{m + 1 - r n} } n \frac {\map \Gamma {\frac {m + 1} n} \map \Gamma {r - \frac {m + 1} n} } {\map \Gamma r}\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \frac {\pi a^{m + 1 - r n} \map \Gamma {\frac {m + 1} n} } {n \map \Gamma r} \frac \pi {\map \sin {\pi \paren {r - \frac {m + 1 } n} } \map \Gamma {1 - \paren {r - \frac {m + 1} n} } }\)





Euler's Reflection Formula with restriction $r + 1 - \dfrac {m + 1} n \notin \N_{>0}$














\(\ds \)

\(=\)







\(\ds \frac {\pi a^{m + 1 - r n} \map \Gamma {\frac {m + 1} n} } {n \map \sin {\pi \paren {r - \frac {m + 1} n} } \map \Gamma r \map \Gamma {1 - r + \frac {m + 1} n} }\)





merging fractions














\(\ds \)

\(=\)







\(\ds \frac {\pi a^{m + 1 - r n} \map \Gamma {\frac {m + 1} n} } {n \paren {-1}^r \map \sin {\pi \paren {-\frac {m + 1} n} } \paren {r - 1}! \map \Gamma {1 - r + \frac {m + 1} n} }\)





Sine of Angle plus Integer Multiple of Pi and Gamma Function Extends Factorial with restriction $r \in \N_{>0}$














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{r - 1} \pi a^{m + 1 - r n} \map \Gamma {\frac {m + 1} n} } {n \map \sin {\frac {\paren {m + 1} \pi} n} \paren {r - 1}! \map \Gamma {1 - r + \frac {m + 1} n} }\)





simplifying



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Rational or Irrational expressions: $15.25$




