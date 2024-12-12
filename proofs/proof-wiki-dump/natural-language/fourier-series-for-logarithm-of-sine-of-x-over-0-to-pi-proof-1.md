# 

Source: https://proofwiki.org/wiki/Fourier_Series_for_Logarithm_of_Sine_of_x_over_0_to_Pi/Proof_1

Theorem
$\ds \map \ln {\sin x} = -\ln 2 - \sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n$
where $0 < x < \pi$. 


Proof
We find the Half-Range Fourier Cosine Series over $\openint 0 {\dfrac \pi 2}$ for $\map \ln {\sin x}$.
By definition:

$\ds \map \ln {\sin x} \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos 2 n x$
where for all $n \in \Z_{\ge 0}$:

$\ds a_n = \frac 4 \pi \int_0^{\pi/2} \map \ln {\sin x} \cos 2 n x \ \d x$

By Definite Integral from 0 to Half Pi of Logarithm of Sine x:

$a_0 = \dfrac 4 \pi \paren {-\dfrac \pi 2 \ln 2} = -2 \ln 2$
By Definite Integral from 0 to Half Pi of Logarithm of Sine x by Cosine of 2nx:

$a_n = \dfrac 4 \pi \paren {-\dfrac \pi {4 n} } = -\dfrac 1 n$

Therefore:














\(\ds \map \ln {\sin x}\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos 2 n x\)




















\(\ds \)

\(=\)







\(\ds -\ln 2 - \sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n\)









$\blacksquare$





