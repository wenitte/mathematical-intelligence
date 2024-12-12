# 

Source: https://proofwiki.org/wiki/Beta_Function_as_Integral_of_Power_of_t_over_Power_of_t_plus_1

Theorem
$\ds \map \Beta {x, y} = \int_{\mathop \to 0}^{\mathop \to \infty} \frac {t^{x - 1} } {\paren {1 + t}^{x + y} } \rd t$
where $\Beta$ denotes the Beta function.


Proof
Consider the substitution $s = \dfrac t {1 + t}$.
We have the following:

$\dfrac 1 {1 + t} = 1 - s$
$t \to 0, s \to 0$
$t \to \infty, s \to 1$
$\rd s = \dfrac 1 {\paren {1 + t}^2} \rd t$

Then:








\(\ds \leadsto \ \ \)





\(\ds \int_{\to 0}^{\to \infty} \frac {t^{x - 1} } {\paren {1 + t}^{x + y} } \rd t\)

\(=\)







\(\ds \int_{\to 0}^{\to \infty} \paren {\frac t {1 + t} }^{x - 1} \paren {\frac 1 {1 + t} }^{y - 1} \frac {\rd t} {\paren {1 + t}^2}\)




















\(\ds \)

\(=\)







\(\ds \int_{\to 0}^{\to 1} s^{x - 1} \paren {1 - s}^{y - 1} \rd s\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \map \Beta {x, y}\)





Definition of Beta Function



$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $17.5$: The Beta Function:Some Important Results




