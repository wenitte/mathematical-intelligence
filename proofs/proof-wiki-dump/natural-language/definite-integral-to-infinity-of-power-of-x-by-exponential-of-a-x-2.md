# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Power_of_x_by_Exponential_of_-a_x%5E2

Theorem
$\ds \int_0^\infty x^m e^{-a x^2} \rd x = \frac {\map \Gamma {\paren {m + 1}/2} } {2 a^{\paren {m + 1}/2} }$
where $m$ and $a$ are real numbers with $m > -1$ and $a > 0$.


Proof













\(\ds \int_0^\infty x^m e^{-a x^2} \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 1 {2 \sqrt t} \paren {\sqrt t}^m e^{-a t} \rd t\)





substituting $t = x^2$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^\infty t^{\paren {\paren {m + 1}/2} - 1} e^{-a t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {\paren {m + 1}/2} } {2 a^{\paren {m + 1}/2} }\)





Laplace Transform of Real Power



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.77$




