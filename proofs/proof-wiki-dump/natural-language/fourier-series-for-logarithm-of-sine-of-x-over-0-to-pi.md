# 

Source: https://proofwiki.org/wiki/Fourier_Series_for_Logarithm_of_Sine_of_x_over_0_to_Pi

Theorem
$\ds \map \ln {\sin x} = -\ln 2 - \sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n$
where $0 < x < \pi$. 


Proof 1
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


Proof 2













\(\ds \sum_{n \mathop = 1}^\infty \dfrac {\cos 2 n x} n\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \dfrac {\map \exp {2 i n x} + \map \exp {-2 i n x} } {2 n}\)





Euler's Cosine Identity: $\cos z = \dfrac {\map \exp {i z} + \map \exp {-i z} } 2$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \sum_{n \mathop = 1}^\infty \paren {\frac {\paren {\map \exp {2 i x} }^n} n + \frac {\paren {\map \exp {-2 i x} }^n} n}\)





Power of Power














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \paren {\map \ln {1 - \map \exp {2 i x} } + \map \ln {1 - \map \exp {-2 i x} } }\)





Power Series Expansion for Logarithm of 1 + x: Corollary: $-\map \ln {1 - x} = \ds \sum_{n \mathop = 1}^\infty \dfrac {x^n} n$














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \paren {\map \ln {1 - \map \exp {-2 i x} - \map \exp {2 i x} + 1} }\)





Sum of Logarithms














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \paren {\map \ln {2 - 2 \paren {\frac {\map \exp {-2 i x} + \map \exp {2 i x} } 2} } }\)





simplifying and multiplying top and bottom by $2$














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \paren {\map \ln {2 - 2 \map \cos {2 x} } }\)





Euler's Cosine Identity: $\cos z = \dfrac {\map \exp {i z} + \map \exp {-i z} } 2$














\(\ds \)

\(=\)







\(\ds -\frac 1 2 \paren {\map \ln {4 \sin^2 x} }\)





Double Angle Formula for Cosine: Corollary $2$: $1 - \cos 2 \theta = 2 \sin^2 \theta$














\(\ds \)

\(=\)







\(\ds -\paren {\map \ln {4 \sin^2 x }^{\frac 1 2} }\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds -\paren {\map \ln {2 \sin x} }\)




















\(\ds \)

\(=\)







\(\ds -\paren {\ln 2 + \map \ln {\sin x} }\)





Sum of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \dfrac {\cos 2 n x} n\)

\(=\)







\(\ds -\ln 2 - \map \ln {\sin x}\)














\(\ds \leadsto \ \ \)





\(\ds \map \ln {\sin x}\)

\(=\)







\(\ds -\ln 2 - \sum_{n \mathop = 1}^\infty \dfrac {\cos 2 n x} n\)





rearranging



$\blacksquare$





