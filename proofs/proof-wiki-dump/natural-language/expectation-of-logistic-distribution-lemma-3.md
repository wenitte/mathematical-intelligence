# 

Source: https://proofwiki.org/wiki/Expectation_of_Logistic_Distribution/Lemma_3

Lemma for Expectation of Logistic Distribution
$\forall k \in \N$:
$\ds \int_{\to 0}^{\to 1} \map {\ln^{2k + 1} } {\dfrac {1 - u} u} \rd u = 0$


Proof
let:














\(\ds x\)

\(=\)







\(\ds \paren {\dfrac 1 2 - u}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds -1\)





Power Rule for Derivatives



Then:














\(\ds \int_{\to 0}^{\to 1} \map {\ln^{2k + 1} } {\dfrac {1 - u} u} \rd u\)

\(=\)







\(\ds -\int_{\to \frac 1 2}^{\to -\frac 1 2} \map {\ln^{2k + 1} } {\dfrac {1 - \paren {\dfrac 1 2 - x} } {\paren {\dfrac 1 2 - x} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{\to -\frac 1 2}^{\to \frac 1 2} \map {\ln^{2k + 1} } {\dfrac {\paren {\dfrac 1 2 + x} } {\paren {\dfrac 1 2 - x} } } \rd x\)




















\(\ds \)

\(=\)







\(\ds 0\)





Definite Integral of Odd Function



$\blacksquare$





