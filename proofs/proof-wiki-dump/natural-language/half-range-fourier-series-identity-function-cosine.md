# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Series/Identity_Function/Cosine

Theorem
Let $\lambda \in \R_{>0}$ be a strictly positive real number.
Let $\map f x: \openint 0 \lambda \to \R$ be the identity function on the open real interval $\openint 0 \lambda$:

$\forall x \in \openint 0 \lambda: \map f x = x$

The half-range Fourier cosine series for $\map f x$ can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac \lambda 2 - \frac {4 \lambda} {\pi^2} \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \dfrac {\paren {2 n + 1} \pi x} \lambda\)




















\(\ds \)

\(=\)







\(\ds \frac \lambda 2 - \frac {4 \lambda} {\pi^2} \paren {\cos \dfrac {\pi x} \lambda + \frac 1 {3^2} \cos \dfrac {3 \pi x} \lambda + \frac 1 {5^2} \cos \dfrac {5 \pi x} \lambda + \dotsb}\)











Proof
By definition of half-range Fourier cosine series:

$\ds \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos \dfrac {n \pi x} \lambda$

where for all $n \in \Z_{> 0}$:

$a_n = \ds \frac 2 \lambda \int_0^\lambda \map f x \cos \dfrac {n \pi x} \lambda \rd x$

Thus by definition of $f$:














\(\ds a_0\)

\(=\)







\(\ds \frac 2 \lambda \int_0^\lambda \map f x \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \int_0^\lambda x \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \intlimits {\frac {x^2} 2} 0 \lambda\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \paren {\frac {l^2} 2 - \frac {0^2} 2}\)




















\(\ds \)

\(=\)







\(\ds \lambda\)





simplification



$\Box$

For $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \frac 2 \lambda \int_0^l \map f x \cos \dfrac {n \pi x} \lambda \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \int_0^l x \cos \dfrac {n \pi x} \lambda \rd x\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \intlimits {\frac {l^2} {\pi^2 n^2} \cos \dfrac {n \pi x} \lambda + \frac \lambda {\pi n} x \sin \dfrac {n \pi x} \lambda} 0 \lambda\)





Primitive of $x \cos n x$














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \paren {\paren {\frac {\lambda^2} {\pi^2 n^2} \cos n \pi + \frac {\lambda^2} {\pi n} \sin n \pi} - \paren {\frac {\lambda^2} {\pi^2 n^2} \cos 0 + \frac \lambda {\pi n} 0 \sin 0} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \lambda} {\pi^2 n^2} \paren {\cos n \pi - \cos 0}\)





Sine of Multiple of Pi and simplification














\(\ds \)

\(=\)







\(\ds \frac {2 \lambda} {\pi^2 n^2} \paren {\paren {-1}^n - 1}\)





Cosine of Multiple of Pi




When $n$ is even, $\paren {-1}^n = 1$.
We can express $n = 2 r$ for $r \ge 1$.
Hence in that case:














\(\ds a_{2 r}\)

\(=\)







\(\ds \frac {2 \lambda} {\pi^2 n^2} \paren {\paren {-1}^n - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \lambda} {\pi^2 n^2} \paren {1 - 1}\)




















\(\ds \)

\(=\)







\(\ds 0\)










When $n$ is odd, $\paren {-1}^n = -1$.
We can express $n = 2 r + 1$ for $r \ge 0$.
Hence in that case:














\(\ds a_{2 r - 1}\)

\(=\)







\(\ds \frac {2 \lambda} {\pi^2 \paren {2 r + 1}^2} \paren {-1 - 1}\)




















\(\ds \)

\(=\)







\(\ds -\frac {4 \lambda} {\pi^2} \paren {\frac 1 {\paren {2 r + 1}^2} }\)





rearranging




Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty a_n \cos n x\)




















\(\ds \)

\(=\)







\(\ds \frac \lambda 2 - \frac {4 \lambda} {\pi^2} \sum_{r \mathop = 0}^\infty \frac 1 {\paren {2 r + 1}^2} \cos \dfrac {\paren {2 r + 1} \pi x} \lambda\)





substituting for $a_0$ and $a_n$ from above














\(\ds \)

\(=\)







\(\ds \frac \lambda 2 - \frac {4 \lambda} {\pi^2} \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \dfrac {\paren {2 n + 1} \pi x} \lambda\)





changing the name of the variable



$\blacksquare$





