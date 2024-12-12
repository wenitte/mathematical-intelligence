# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Power_of_x_by_Logarithm_of_x_over_One_plus_x

Theorem
$\ds \int_0^\infty \frac {x^{p - 1} \ln x} {1 + x} \rd x = -\pi^2 \csc p \pi \cot p \pi$
where: 

$p$ is a real number with $0 < p < 1$
$\csc$ denotes the cosecant function
$\cot$ denotes the cotangent function.


Proof













\(\ds \int_0^\infty \frac {x^{p - 1} \ln x} {1 + x} \rd x\)

\(=\)







\(\ds \int_0^\infty \frac 1 {1 + x} \map {\frac \partial {\partial p} } {x^{p - 1} } \rd x\)





Derivative of Power of Constant














\(\ds \)

\(=\)







\(\ds \frac \d {\d p} \int_0^\infty \frac {x^{p - 1} } {1 + x} \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \map {\frac \d {\d p} } {\pi \csc p \pi}\)





Definite Integral to Infinity of $\dfrac {x^{p - 1} } {1 + x}$














\(\ds \)

\(=\)







\(\ds -\pi^2 \csc p \pi \cot p \pi\)





Chain Rule for Derivatives, Derivative of Cosecant Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.97$




