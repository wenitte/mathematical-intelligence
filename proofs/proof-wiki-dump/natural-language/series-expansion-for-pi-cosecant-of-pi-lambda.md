# 

Source: https://proofwiki.org/wiki/Series_Expansion_for_Pi_Cosecant_of_Pi_Lambda

Theorem
Let $\lambda \in \R \setminus \Z$ be a real number which is not an integer.

Then:

$\ds \pi \csc \pi \lambda = \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {n + \lambda} + \frac 1 {n - 1 - \lambda} }$


Proof
Let $\map f x$ be the real function defined on $\openint 0 \pi$ as:

$\map f x = \cos \lambda x$

From Half-Range Fourier Cosine Series: $\cos \lambda x$ over $\openint 0 \pi$ its Fourier series can be expressed as:

$\ds \cos \lambda x \sim \frac {2 \lambda \sin \lambda \pi} \pi \paren {\frac 1 {2 \lambda^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos n x} {\lambda^2 - n^2} }$

Because of the nature of this expansion, we have that:

$\map f {0^+} = \map f {0^-}$
and so the expansion holds for $x = 0$.

So, setting $x = 0$:














\(\ds \cos 0\)

\(=\)







\(\ds \frac {2 \lambda \sin \lambda \pi} \pi \paren {\frac 1 {2 \lambda^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\cos 0} {\lambda^2 - n^2} }\)














\(\ds \leadsto \ \ \)





\(\ds \frac \pi {\sin \lambda \pi}\)

\(=\)







\(\ds 2 \lambda \paren {\frac 1 {2 \lambda^2} + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac 1 {\lambda^2 - n^2} }\)





Cosine of Zero is One and rearrangement








\(\ds \leadsto \ \ \)





\(\ds \pi \csc \lambda \pi\)

\(=\)







\(\ds \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {2 \lambda} {\lambda^2 - n^2}\)





Definition of Real Cosecant Function














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \paren {-1}^n \frac {\lambda + n + \lambda - n} {\paren {\lambda + n} \paren {\lambda - n} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac {\lambda - n} {\paren {\lambda + n} \paren {\lambda - n} } + \frac {\lambda + n} {\paren {\lambda + n} \paren {\lambda - n} } }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {\lambda + n} + \frac 1 {\lambda - n} }\)










This expression is fine as is, but to obtain the form we set out to prove, we observe:














\(\ds \)

\(\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {n - \lambda} + \frac 1 {n - 1 - \lambda} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {n - \lambda} } - \sum_{n \mathop = 1}^\infty \paren {-1}^{n - 1} \paren {\frac 1 {n - 1 - \lambda} }\)





Both converge by Power Series Expansion for Logarithm of 1 + x














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {n - \lambda} } - \sum_{n \mathop = 0}^\infty \paren {-1}^n \paren {\frac 1 {n - \lambda} }\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds - \paren {-1}^0 \paren {\frac 1 {0 - \lambda} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 \lambda\)









and thus:














\(\ds \)

\(\)







\(\ds \frac 1 \lambda + \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {\lambda + n} + \frac 1 {\lambda - n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {\lambda + n} + \frac 1 {\lambda - n} } + \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {n - \lambda} + \frac 1 {n - 1 - \lambda} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\frac 1 {n + \lambda} + \frac 1 {n - 1 - \lambda} }\)









The result follows.
$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Exercises on Chapter $\text I$: $5. \, \text{(ii)}$




