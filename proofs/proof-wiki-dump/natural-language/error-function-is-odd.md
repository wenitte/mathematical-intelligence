# 

Source: https://proofwiki.org/wiki/Error_Function_is_Odd

Theorem
$\map \erf {-x} = -\map \erf x$
where:

$\erf$ denotes the error function
$x$ is a real number.


Proof













\(\ds \map \erf {-x}\)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \int_0^{-x} e^{-u^2} \rd u\)





Definition of Error Function














\(\ds \)

\(=\)







\(\ds -\frac 2 {\sqrt \pi} \int_0^{-\paren {-x} } e^{-\paren {-u}^2} \rd u\)





substituting $u \mapsto -u$














\(\ds \)

\(=\)







\(\ds -\frac 2 {\sqrt \pi} \int_0^x e^{-u^2} \rd u\)




















\(\ds \)

\(=\)







\(\ds -\map \erf x\)





Definition of Error Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Error Function $\ds \map \erf x = \frac 2 {\sqrt \pi} \int_0^x e^{-u^2} \rd u$: $35.3$




