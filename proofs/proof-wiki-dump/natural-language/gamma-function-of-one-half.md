# 

Source: https://proofwiki.org/wiki/Gamma_Function_of_One_Half



Theorem
Let $\Gamma$ denote the Gamma function.
Then:

$\map \Gamma {\dfrac 1 2} = \sqrt \pi$


Decimal Expansion
The decimal expansion of $\map \Gamma {\dfrac 1 2}$ starts:

$\map \Gamma {\dfrac 1 2} = 1 \cdotp 77245 \, 38509 \, 05516 \, 02729 \, 81674 \, 83341 \, 14518 \, 27975 \ldots$


Proof 1
From the definition of the Beta function:

$\map \Beta {x, y} := \dfrac {\map \Gamma x \map \Gamma y} {\map \Gamma {x + y} }$
Setting $x = y = \dfrac 1 2$:














\(\ds \map \Beta {\dfrac 1 2, \dfrac 1 2}\)

\(=\)







\(\ds \frac {\map \Gamma {\dfrac 1 2} \map \Gamma {\dfrac 1 2} } {\map \Gamma {\dfrac 1 2 + \dfrac 1 2} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \Gamma {\dfrac 1 2} }^2\)










Then from Beta Function of Half with Half:

$\map \Beta {\dfrac 1 2, \dfrac 1 2} = \pi$
Hence the result.
$\blacksquare$


Proof 2
From Euler's Reflection Formula:

$\forall z \notin \Z: \map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$
Setting $z = \dfrac 1 2$:














\(\ds \map \Gamma {\frac 1 2} \map \Gamma {\frac 1 2}\)

\(=\)







\(\ds \frac \pi {\map \sin {\frac \pi 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 1\)





Sine of Right Angle








\(\ds \leadsto \ \ \)





\(\ds \map \Gamma {\frac 1 2}\)

\(=\)







\(\ds \pm \sqrt \pi\)









By definition of the gamma function:

$\forall z \in \R_{\ge 0}: \map \Gamma z > 0$
and so the negative square root can be discarded.
Hence:

$\map \Gamma {\dfrac 1 2} = \sqrt \pi$
as required.
$\blacksquare$


Proof 3













\(\ds \map \Gamma {\dfrac 1 2}\)

\(=\)







\(\ds \int_0^{\to \infty} t^{-\frac 1 2} e^{-t} \rd t\)





Definition of Gamma Function














\(\ds \)

\(=\)







\(\ds \int_0^{\to \infty} u^{-1} e^{-u^2} 2 u \rd u\)





Integration by Substitution, $\map \phi u = u^2$














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\to \infty} e^{-u^2} \rd u\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \int_{\to -\infty}^{\to \infty} e^{-u^2} \rd u\)





Definite Integral of Even Function














\(\ds \)

\(=\)







\(\ds \sqrt \pi\)





Gaussian Integral



$\blacksquare$


Proof 4













\(\ds \map \Gamma {\frac 1 2}\)

\(=\)







\(\ds \frac {0!} {2^0 0!} \sqrt \pi\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \sqrt \pi\)





Factorial of Zero



$\blacksquare$


Proof 5














\(\ds \map \Gamma 1 \, \map \Gamma {\frac 1 2}\)

\(=\)







\(\ds 2^0 \sqrt \pi \ \map \Gamma 1\)





Legendre's Duplication Formula








\(\ds \leadsto \ \ \)





\(\ds 0! \, \map \Gamma {\frac 1 2}\)

\(=\)







\(\ds 0! \, \sqrt \pi\)





Definition of Gamma Function








\(\ds \leadsto \ \ \)





\(\ds \map \Gamma {\frac 1 2}\)

\(=\)







\(\ds \sqrt \pi\)





Factorial of Zero



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {I}$. The Gamma function: $2$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 1$: Special Constants: $1.23$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $16.5$: Special Values for the Gamma Function
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1 \cdotp 772 \, 453 \, 850 \, 905 \, 516 \, 027 \, 298 \, 167 \, 483 \, 341 \, 145 \, 182 \, 797 \ldots$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $9$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1 \cdotp 77245 \, 38509 \, 05516 \, 02729 \, 81674 \, 83341 \, 14518 \, 27975 \ldots$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): gamma function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): gamma function




