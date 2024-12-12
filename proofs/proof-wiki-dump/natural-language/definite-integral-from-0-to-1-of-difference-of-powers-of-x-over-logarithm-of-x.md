# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_Difference_of_Powers_of_x_over_Logarithm_of_x

Theorem
$\ds \int_0^1 \frac {x^m - x^n} {\ln x} \rd x = \map \ln {\frac {m + 1} {n + 1} }$
where $m$ and $n$ are real numbers with $m, n > -1$.


Proof
Let: 

$x = e^{-u}$
We have, by Derivative of Exponential Function:

$\dfrac {\d x} {\d u} = -e^{-u}$
By Exponential Tends to Zero and Infinity: 

as $x \to 0$, $u \to \infty$
By Exponential of Zero: 

as $x \to 1$, $u \to 0$.
So:














\(\ds \int_0^1 \frac {x^m - x^n} {\ln x} \rd x\)

\(=\)







\(\ds -\int_\infty^0 e^{-u} \frac {e^{-m u} - e^{-n u} } {\ln e^{-u} } \rd u\)





substituting $x = e^{-u}$














\(\ds \)

\(=\)







\(\ds -\int_0^\infty \frac {e^{-\paren {m + 1} u} - e^{-\paren {n + 1} u} } u \rd u\)





Reversal of Limits of Definite Integral, Exponential of Sum














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-\paren {n + 1} u} - e^{-\paren {m + 1} u} } u \rd u\)




















\(\ds \)

\(=\)







\(\ds \map \ln {\frac {m + 1} {n + 1} }\)





Definite Integral to Infinity of $\dfrac {e^{-a x} - e^{-b x} } x$



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Logarithmic Functions: $15.98$




