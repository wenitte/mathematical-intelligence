# 

Source: https://proofwiki.org/wiki/Fourier_Series/Identity_Function_over_Minus_Pi_to_Pi


It has been suggested that this page or section be merged into Fourier Series/Sawtooth Wave/Special Cases/Half Interval Pi.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
For $x \in \openint {-\pi} \pi$:

$\ds x = 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin n x$


Proof 1
From Odd Power is Odd Function, $x$ is an odd function.
By Fourier Series for Odd Function over Symmetric Range, we have:

$\ds x \sim \sum_{n \mathop = 1}^\infty b_n \sin n x$
where:














\(\ds b_n\)

\(=\)







\(\ds \frac 2 \pi \int_0^\pi x \sin n x \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \intlimits {\frac {\sin n x} {n^2} - \frac {x \cos n x} n} 0 \pi\)





Primitive of $x \sin n x$, Fundamental Theorem of Calculus














\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \intlimits {\frac{x \cos n x} n} 0 \pi\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds -\frac 2 \pi \paren {\frac{\pi \cos n \pi} n - \frac {0 \cos 0} n}\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 \pi \cos n \pi} {\pi n}\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 \paren {-1}^n} n\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac {2 \paren {-1}^{n + 1} } n\)










Substituting for $b_n$ in $(1)$: 

$\ds x = 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin n x$
as required. 
$\blacksquare$


Proof 2
By Fourier Series for Identity Function over Symmetric Range, the function $f: \openint {-\lambda} \lambda \to \R$ defined as:

$\forall x \in \openint {-\lambda} \lambda: \map f x = x$
has a Fourier series:

$\map f x \sim \dfrac {2 \lambda} \pi \ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin \frac {n \pi x} \lambda$

Substituting for $\lambda = \pi$ gives:

$\ds x = 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin n x$
as required. 
$\blacksquare$





