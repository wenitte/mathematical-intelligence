# 

Source: https://proofwiki.org/wiki/Limit_to_Infinity_of_Error_Function

Theorem
$\ds \lim_{x \mathop \to \infty} \map \erf x = 1$
where $\erf$ denotes the error function.


Proof













\(\ds \lim_{x \mathop \to \infty} \map \erf x\)

\(=\)







\(\ds \lim_{x \mathop \to \infty} \paren {\frac 2 {\sqrt \pi} \int_0^x e^{-t^2} \rd t}\)





Definition of Error Function














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \int_0^\infty e^{-t^2} \rd t\)





Multiple Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \frac 2 {\sqrt \pi} \times \frac {\sqrt \pi} 2\)





Integral to Infinity of Exponential of -t^2














\(\ds \)

\(=\)







\(\ds 1\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Error Function $\ds \map \erf x = \frac 2 {\sqrt \pi} \int_0^x e^{-u^2} \rd u$: $35.3$




