# 

Source: https://proofwiki.org/wiki/Fourier_Series/Absolute_Value_Function_over_Symmetric_Range

Theorem
Let $\lambda \in \R_{>0}$ be a strictly positive real number.
Let $\map f x: \openint {-\lambda} \lambda \to \R$ be the absolute value function on the open real interval $\openint {-\lambda} \lambda$:

$\forall x \in \openint {-\lambda} \lambda: \map f x = \size x$

The Fourier series of $f$ over $\openint {-\lambda} \lambda$ can be given as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac \lambda 2 - \frac {4 \lambda} {\pi^2} \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \dfrac {\paren {2 n + 1} \pi x} \lambda\)




















\(\ds \)

\(=\)







\(\ds \frac \lambda 2 - \frac {4 \lambda} {\pi^2} \paren {\cos \dfrac {\pi x} \lambda + \frac 1 {3^2} \cos \dfrac {3 \pi x} \lambda + \frac 1 {5^2} \dfrac {5 \pi x} \lambda + \dotsb}\)











Proof
From Absolute Value Function is Even Function, $\map f x$ is an even function.
By Fourier Series for Even Function over Symmetric Range, we have:

$\ds \map f x \sim \sum_{n \mathop = 1}^\infty a_n \cos \frac {n \pi x} \lambda$
where:














\(\ds a_n\)

\(=\)







\(\ds \frac 2 \lambda \int_0^\pi \map f x \cos \frac {n \pi x} \lambda \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \int_0^\pi x \cos \frac {n \pi x} \lambda \rd x\)





Definition of $\map f x$




Hence from Half-Range Fourier Cosine Series for Identity Function:

$\map f x \sim \dfrac \lambda 2 - \ds \frac {4 \lambda} {\pi^2} \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \dfrac {\paren {2 n + 1} \pi x} \lambda$
Hence the result.
$\blacksquare$





