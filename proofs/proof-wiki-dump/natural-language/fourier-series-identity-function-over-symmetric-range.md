# 

Source: https://proofwiki.org/wiki/Fourier_Series/Identity_Function_over_Symmetric_Range

Theorem
Let $\lambda \in \R_{>0}$ be a strictly positive real number.
Let $\map f x: \openint {-\lambda} \lambda \to \R$ be the identity function on the open real interval $\openint {-\lambda} \lambda$:

$\forall x \in \openint {-\lambda} \lambda: \map f x = x$

The Fourier series of $f$ over $\openint {-\lambda} \lambda$ can be given as:

$\map f x \sim \dfrac {2 \lambda} \pi \ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin \frac {n \pi x} \lambda$


Proof
From Identity Function is Odd Function, $\map f x$ is a odd function.
By Fourier Series for Odd Function over Symmetric Range, we have:

$\ds \map f x \sim \sum_{n \mathop = 1}^\infty b_n \sin \frac {n \pi x} \lambda$
where:














\(\ds b_n\)

\(=\)







\(\ds \frac 2 \lambda \int_0^\pi \map f x \sin \frac {n \pi x} \lambda \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \lambda \int_0^\pi x \sin \frac {n \pi x} \lambda \rd x\)





Definition of $\map f x$














\(\ds \)

\(=\)







\(\ds \frac {2 \lambda} {n \pi} \paren {-1}^{n + 1}\)





Half-Range Fourier Sine Series for Identity Function




Substituting for $b_n$ in $(1)$: 

$\ds x = \dfrac {2 \lambda} \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin \frac {n \pi x} \lambda$
as required. 
$\blacksquare$





