# 

Source: https://proofwiki.org/wiki/Integral_Form_of_Polygamma_Function



Theorem
Let $z$ be a complex number with a positive real part.

Then: 

$\ds \map {\psi_n} z = \paren {-1}^{n + 1} \int_0^\infty \frac {t^n e^{-z t} } {1 - e^{-t} } \rd t$
where $\map {\psi_n} z$ denotes the $n$th polygamma function.


Corollary
Let $z$ be a complex number with a positive real part.
Then: 

$\ds \map {\psi_n} z= -\int_0^1 \frac {u^{z - 1} \paren {\ln u}^n } {1 - u} \rd u$
where $\map {\psi_n} z$ denotes the $n$th polygamma function.


Proof
From Gauss's Integral Form of Digamma Function, we have:

$\ds \map \psi z = \int_0^\infty \paren {\frac {e^{-t} } t - \frac {e^{-z t} } {1 - e^{-t} } } \rd t$

Therefore:














\(\ds \map \psi z\)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t} } t - \frac {e^{-z t} } {1 - e^{-t} } } \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d^n} {\d z^n} \map \psi z\)

\(=\)







\(\ds \dfrac {\d^n} {\d z^n} \paren {\int_0^\infty \paren {\frac {e^{-t} } t - \frac {e^{-z t} } {1 - e^{-t} } } \rd t }\)





taking $n$th derivative














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \int_0^\infty \frac {t^n e^{-z t} } {1 - e^{-t} } \rd t\)





Derivative of Exponential Function: Corollary $1$



$\blacksquare$


Also see
Gauss's Integral Form of Digamma Function




