# 

Source: https://proofwiki.org/wiki/Euler-Mascheroni_Constant_as_Difference_of_Integrals_involving_Cosine

Theorem
$\ds \int_0^1 \frac {1 - \cos x} x \rd x - \int_1^\infty \frac {\cos x} x \rd x = \gamma$
where $\gamma$ is the Euler-Mascheroni Constant.


Proof
From Characterization of Cosine Integral Function, we have: 

$\ds \int_t^\infty \frac {\cos x} x \rd x = -\gamma - \ln t + \int_0^t \frac {1 - \cos x} x \rd x$
for all real $t > 0$.
Rearranging: 

$\ds \int_0^t \frac {1 - \cos x} x \rd x - \int_t^\infty \frac {\cos x} x \rd x = \gamma + \ln t$
Setting $t = 1$ gives the result, from Natural Logarithm of 1 is 0.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Trigonometric Functions: $15.65$




