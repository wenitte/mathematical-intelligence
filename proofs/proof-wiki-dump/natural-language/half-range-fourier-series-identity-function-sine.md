# 

Source: https://proofwiki.org/wiki/Half-Range_Fourier_Series/Identity_Function/Sine

Theorem
Let $\lambda \in \R_{>0}$ be a strictly positive real number.
Let $\map f x: \openint 0 \lambda \to \R$ be the identity function on the open real interval $\openint 0 \lambda$:

$\forall x \in \openint 0 \lambda: \map f x = x$

The half-range Fourier sine series for $\map f x$ can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \dfrac {2 \lambda} \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin \frac {n \pi x} \lambda\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \lambda} \pi \paren {\sin \dfrac {\pi x} \lambda - \frac 1 2 \sin \dfrac {2 \pi x} \lambda + \frac 1 3 \sin \dfrac {3 \pi x} \lambda - \dotsb}\)











Proof
By definition of half-range Fourier sine series:

$(1): \quad \map f x \sim \ds \sum_{n \mathop = 1}^\infty b_n \sin \dfrac {n \pi x} \lambda$

where for all $n \in \Z_{> 0}$:














\(\ds b_n\)

\(=\)







\(\ds \frac 2 \lambda \int_0^\lambda \map f x \sin \dfrac {n \pi x} \lambda \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \int_0^\lambda x \sin \frac {n \pi x} \lambda \rd x\)





Definition of $\map f x$














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \intlimits {\frac {\lambda^2} {n^2 \pi^2} \sin \dfrac {n \pi x} \lambda - \frac \lambda {n \pi} x \cos \dfrac {n \pi x} \lambda} 0 \lambda\)





Primitive of $x \sin a x$, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \paren {\paren {\frac {\lambda^2} {n^2 \pi^2} \sin n \pi - \frac {\lambda^2} {n \pi} \cos n \pi} - \paren {\frac {\lambda^2} {n^2 \pi^2} \sin 0 - \frac \lambda {n \pi} 0 \cos 0} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 \lambda} {n \pi} \cos n \pi\)





Sine of Multiple of Pi and simplification














\(\ds \)

\(=\)







\(\ds -\frac {2 \lambda} {n \pi} \paren {-1}^n\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac {2 \lambda} {n \pi} \paren {-1}^{n + 1}\)










Substituting for $b_n$ in $(1)$: 

$\ds \map f x = \dfrac {2 \lambda} \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin \frac {n \pi x} \lambda$
as required.
$\blacksquare$





