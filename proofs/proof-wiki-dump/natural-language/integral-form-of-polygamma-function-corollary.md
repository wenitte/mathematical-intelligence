# 

Source: https://proofwiki.org/wiki/Integral_Form_of_Polygamma_Function/Corollary

Corollary to Integral Form of Polygamma Function
Let $z$ be a complex number with a positive real part.
Then: 

$\ds \map {\psi_n} z= -\int_0^1 \frac {u^{z - 1} \paren {\ln u}^n } {1 - u} \rd u$
where $\map {\psi_n} z$ denotes the $n$th polygamma function.


Proof













\(\ds \map {\psi_n} z\)

\(=\)







\(\ds \paren {-1}^{n + 1} \int_0^\infty \frac {t^n e^{-z t} } {1 - e^{-t} } \rd t\)





Integral Form of Polygamma Function














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \int_0^\infty \frac {t^n e^{-\paren {z - 1} t} e^{-t} } {1 - e^{-t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \int_1^0 \frac {u^{z - 1} \paren {-\ln u}^n } {1 - u} \paren {-\rd u}\)





substituting $e^{-t} \to u$, $t \to -\map \ln u$ and $-e^{-t}\rd t \to \rd u$














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \int_1^0 \paren {-1}^{n + 1} \frac {u^{z - 1} \paren {\ln u}^n} {1 - u} \rd u\)




















\(\ds \)

\(=\)







\(\ds -\int_0^1 \frac {u^{z - 1} \paren {\ln u}^n } {1 - u} \rd u\)





Reversal of Limits of Definite Integral



$\blacksquare$





