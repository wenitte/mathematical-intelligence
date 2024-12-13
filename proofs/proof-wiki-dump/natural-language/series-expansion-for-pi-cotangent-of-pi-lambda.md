# 

Source: https://proofwiki.org/wiki/Series_Expansion_for_Pi_Cotangent_of_Pi_Lambda


It has been suggested that this page or section be merged into Mittag-Leffler Expansion for Cotangent Function.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

It has been suggested that this page or section be merged into Partial Fractions Expansion of Cotangent.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\lambda \in \R \setminus \Z$ be a real number which is not an integer.

Then:

$\ds \pi \cot \pi \lambda = \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \frac {2 \lambda} {\lambda^2 - n^2}$


Proof
Let $\map f x$ be the real function defined on $\openint 0 \pi$ as:

$\map f x = \cos \lambda x$

From Half-Range Fourier Cosine Series: $\cos \lambda x$ over $\openint 0 \pi$ its Fourier series can be expressed as:

$\ds \cos \lambda x \sim \frac {2 \lambda \sin \lambda \pi} \pi \paren {\frac 1 {2 \lambda^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos n x} {\lambda^2 - n^2} }$

Because of the nature of this expansion, we have that:

$\map f \pi = \map f {-\pi}$
and so the expansion holds for $x = \pi$.
Also note that because $\lambda$ is not an integer, $\sin \lambda \pi \ne 0$ and so $\cot \pi \lambda$ is defined.

So, setting $x = \pi$:














\(\ds \cos \lambda \pi\)

\(=\)







\(\ds \frac {2 \lambda \sin \lambda \pi} \pi \paren {\frac 1 {2 \lambda^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos n \pi} {\lambda^2 - n^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \pi \cot \pi \lambda\)

\(=\)







\(\ds 2 \lambda \paren {\frac 1 {2 \lambda^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos n \pi} {\lambda^2 - n^2} }\)





Definition of Real Cotangent Function














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {2 \lambda \cos n \pi} {\lambda^2 - n^2}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {2 \lambda \paren {-1}^n} {\lambda^2 - n^2}\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \frac {2 \lambda} {\lambda^2 - n^2}\)





simplification



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text I$: $5. \, \text{(i)}$




