# 

Source: https://proofwiki.org/wiki/Derivation_of_Fourier_Series_over_General_Range

Theorem
Let $\alpha \in \R$ be a real number.
Let $\lambda \in \R_{>0}$ be a strictly positive real number.
Let $f: \R \to \R$ be a function such that $\ds \int_{\mathop \to \alpha}^{\mathop \to \alpha + 2 \lambda} \map f x \rd x$ converges absolutely.
Let:

$\ds f \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos \frac {n \pi x} \lambda + b_n \sin \frac {n \pi x} \lambda}$

The Fourier coefficients for $f$ are calculated by:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 1 \lambda \int_{\mathop \to \alpha}^{\mathop \to \alpha + 2 \lambda} \map f x \cos \frac {n \pi x} \lambda \rd x\)




















\(\ds b_n\)

\(=\)







\(\ds \dfrac 1 \lambda \int_{\mathop \to \alpha}^{\mathop \to \alpha + 2 \lambda} \map f x \sin \frac {n \pi x} \lambda \rd x\)











Proof
By definition of Fourier series over the range of integration $\openint \alpha {\alpha + 2 \pi}$:

$(1): \quad \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}$
where:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_\alpha^{\alpha + 2 \pi} \map f x \cos n x \rd x\)




















\(\ds b_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_\alpha^{\alpha + 2 \pi} \map f x \sin n x \rd x\)










Let $\xi = \dfrac {\pi x} \lambda$.
Then let:

$\map \phi \xi \equiv \map f x$

We have that $\ds \int_{\mathop \to \alpha}^{\mathop \to \alpha + 2 \lambda} \map f x \rd x$ converges absolutely.
Thus we are ensured of the existence of:

the limit from the right of $f$ at $\alpha$
the limit from the left of $f$ at $\alpha + 2 \lambda$
Thus $f$ is defined and bounded on $\openint \alpha {\alpha + 2 \lambda}$.

Then:














\(\ds \map f {\alpha^+}\)

\(=\)







\(\ds \map \phi {\paren {\frac {\pi \alpha} \lambda}^+}\)





Definition of Limit from Above














\(\ds \map f {\paren {\alpha + 2 \lambda}^-}\)

\(=\)







\(\ds \map \phi {\paren {\dfrac {\pi \alpha + \pi 2 \lambda} \lambda}^-}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\paren {\frac {\pi \alpha} \lambda + 2 \pi}^-}\)









Setting $\beta = \dfrac {\pi \alpha} \lambda$, this allows us:














\(\ds \map f {\alpha^+}\)

\(=\)







\(\ds \map \phi {\beta^+}\)




















\(\ds \map f {\paren {\alpha + 2 \lambda}^-}\)

\(=\)







\(\ds \map \phi {\paren {\beta + 2 \pi}^-}\)









Thus we have that $\phi$ is defined and bounded on $\openint \beta {\beta + 2 \pi}$.

Then:

$\map \phi \xi \sim \ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos \xi + b_n \sin \xi}$
where:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_{\mathop \to \pi}^{\mathop \to \alpha + 2 \lambda} \map \phi \xi \cos \xi \rd \xi\)




















\(\ds b_n\)

\(=\)







\(\ds \dfrac 1 \pi \int_{\mathop \to \pi}^{\mathop \to \alpha + 2 \lambda} \map \phi \xi \sin \xi \rd \xi\)










We have that:

$\dfrac {\d \xi} {\d x} = \dfrac \pi \lambda$
and so:














\(\ds a_n\)

\(=\)







\(\ds \dfrac 1 \lambda \int_{\mathop \to \beta}^{\mathop \to \beta + 2 \lambda} \map f x \cos \frac {n \pi x} \lambda \rd x\)




















\(\ds b_n\)

\(=\)







\(\ds \dfrac 1 \lambda \int_{\mathop \to \beta}^{\mathop \to \beta + 2 \lambda} \map f x \sin \frac {n \pi x} \lambda \rd x\)









and so:

$\ds \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos \frac {n \pi x} \lambda + b_n \sin \frac {n \pi x} \lambda}$
$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 3$. Other Types of Whole-Range Series: $(1)$




