# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Dirac_Delta_Function

Theorem
Let $\map \delta x$ denote the Dirac delta function.
Then:

$\ds \int_0^{+ \infty} \map \delta x \rd x = 1$


Proof
We have that:

$\map \delta x = \ds \lim_{\epsilon \mathop \to 0} \map {F_\epsilon} x$
where:

$\map {F_\epsilon} x = \begin {cases} 0 & : x < 0 \\ \dfrac 1 \epsilon & : 0 \le x \le \epsilon \\ 0 & : x > \epsilon \end {cases}$

We have that:














\(\ds \int_0^{+ \infty} \map {F_\epsilon} x \rd x\)

\(=\)







\(\ds \int_0^\epsilon \dfrac 1 \epsilon \rd x + \int_\epsilon^\infty 0 \rd x\)





Definition 1 of $\map {F_\epsilon} x$














\(\ds \)

\(=\)







\(\ds \int_0^\epsilon \dfrac 1 \epsilon \rd x + \lim_{L \mathop \to \infty} \int_\epsilon^L 0 \rd x\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \paren {\epsilon - 0} + \lim_{L \mathop \to \infty} \paren {0 \times \paren {L - \epsilon} }\)





Definite Integral of Constant














\(\ds \)

\(=\)







\(\ds 1 + \lim_{L \mathop \to \infty} 0\)





simplification














\(\ds \)

\(=\)







\(\ds 1\)










Then:














\(\ds \int_0^{+ \infty} \map \delta x \rd x\)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \int_0^{+ \infty} \map {F_\epsilon} x \rd x\)





Definition 1 of Dirac Delta Function














\(\ds \)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} 1\)





from above














\(\ds \)

\(=\)







\(\ds 1\)









Hence the result.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {VIII}$. The Unit Impulse function or Dirac delta function: $1$.




