# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Exponential_of_-x%5E2_by_Logarithm_of_x

Theorem
$\ds \int_0^\infty e^{-x^2} \ln x \rd x = -\frac {\sqrt \pi} 4 \paren {\gamma + 2 \ln 2}$
where $\gamma$ denotes the Euler-Mascheroni constant.


Proof
Consider the integral: 

$\ds \int_0^\infty x^t e^{-x^2} \rd x$
for positive real parameter $t$.
Using Definite Integral to Infinity of $x^m e^{-a x^2}$, we have: 

$\ds \int_0^\infty x^t e^{-x^2} \rd x = \frac 1 2 \map \Gamma {\frac {1 + t} 2}$
Differentiating the left hand side with respect to $t$ we have: 














\(\ds \frac \d {\d t} \int_0^\infty t^x e^{-x^2} \rd t\)

\(=\)







\(\ds \int_0^\infty \frac \partial {\partial t} \paren {x^t e^{-x^2} } \rd x\)





Definite Integral of Partial Derivative














\(\ds \)

\(=\)







\(\ds \int_0^\infty x^t e^{-x^2} \ln x \rd x\)





Derivative of Power of Constant



Differentiating the right hand side using the Chain Rule for Derivatives gives: 

$\ds \int_0^\infty x^t e^{-x^2} \ln x \rd x = \frac 1 4 \map {\Gamma'} {\frac {1 + t} 2}$
We therefore have: 














\(\ds \int_0^\infty e^{-x^2} \ln x \rd x\)

\(=\)







\(\ds \int_0^\infty x^0 e^{-x^2} \ln x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \map {\Gamma'} {\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \map \Gamma {\frac 1 2} \map \psi {\frac 1 2}\)





Definition of Digamma Function














\(\ds \)

\(=\)







\(\ds -\frac {\sqrt \pi} 4 \paren {\gamma + 2 \ln 2}\)





Gamma Function of One Half, Digamma Function of One Half



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.100$




