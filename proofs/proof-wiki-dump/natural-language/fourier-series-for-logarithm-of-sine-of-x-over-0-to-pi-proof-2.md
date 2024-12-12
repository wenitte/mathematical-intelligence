# 

Source: https://proofwiki.org/wiki/Fourier_Series_for_Logarithm_of_Sine_of_x_over_0_to_Pi/Proof_2

Theorem
$\ds \map \ln {\sin x} = -\ln 2 - \sum_{n \mathop = 1}^\infty \frac {\cos 2 n x} n$
where $0 < x < \pi$. 


Proof













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


Sources
unknown (https://math.stackexchange.com/users/17762/unknown), Fourier series of Log sine and Log cos, URL (version: 2013-02-02): https://math.stackexchange.com/q/292468




