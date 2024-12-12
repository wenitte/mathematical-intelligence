# 

Source: https://proofwiki.org/wiki/Dilogarithm_of_Square/Proof_1

Theorem
$\map {\Li_2} z + \map {\Li_2} {-z} = \dfrac 1 2 \map {\Li_2} {z^2}$


Proof













\(\ds \map {\Li_2} z + \map {\Li_2} {-z}\)

\(=\)







\(\ds -\paren {\int_0^z \frac {\map \ln {1 - t} } t \rd t + \int_0^z \frac {\map \ln {1 + t} } t \rd t}\)





Definition of Dilogarithm Function














\(\ds \)

\(=\)







\(\ds -\int_0^z \frac {\map \ln {\paren {1 - t} \paren {1 + t} } } t \rd t\)





Linear Combination of Definite Integrals, Sum of Logarithms














\(\ds \)

\(=\)







\(\ds -\int_0^z \frac {\map \ln {1 - t^2} } t \rd t\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds -\int_0^{z^2} \frac {\map \ln {1 - t^2} } t \frac {\map \d {t^2} } {2 t}\)





substituting $t \to t^2$














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \int_0^{z^2} \frac {\map \ln {1 - t^2} } {t^2} \map \rd {t^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map {\Li_2} {z^2}\)





Definition of Dilogarithm Function



$\blacksquare$





