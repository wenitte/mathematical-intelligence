# 

Source: https://proofwiki.org/wiki/Integral_of_Dirac_Delta_Function_over_Reals

Theorem
Let $\map \delta x$ denote the Dirac delta function.
Then:

$\ds \int_{-\infty}^{+\infty} \map \delta x \rd x = 1$


Proof
We have that:

$\map \delta x = \ds \lim_{\epsilon \mathop \to 0} \map {F_\epsilon} x$
where:

$\map {F_\epsilon} x = \begin {cases} 0 & : x < -\epsilon \\ \dfrac 1 {2 \epsilon} & : -\epsilon \le x \le \epsilon \\ 0 & : x > \epsilon \end {cases}$

We have that:














\(\ds \int_{-\infty}^{+\infty} \map {F_\epsilon} x \rd x\)

\(=\)







\(\ds \int_{-\infty}^{-\epsilon} 0 \rd x + \int_{-\epsilon}^\epsilon \dfrac 1 {2 \epsilon} \rd x + \int_\epsilon^\infty 0 \rd x\)





Definition 2 of Dirac Delta Function














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to -\infty} \int_L^{-\epsilon} 0 \rd x + \int_{- \epsilon}^\epsilon \dfrac 1 {2 \epsilon} \rd x + \lim_{L \mathop \to \infty} \int_\epsilon^L 0 \rd x\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to -\infty} \paren {0 \times \paren {- \epsilon - L} } + \dfrac 1 {2 \epsilon} \paren {\epsilon - \paren {-\epsilon} } + \lim_{L \mathop \to \infty} \paren {0 \times \paren {L - \epsilon} }\)





Definite Integral of Constant














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to -\infty} 0 + 1 + \lim_{L \mathop \to \infty} 0\)





simplification














\(\ds \)

\(=\)







\(\ds 1\)










Then:














\(\ds \int_{-\infty}^{+\infty} \map \delta x \rd x\)

\(=\)







\(\ds \lim_{\epsilon \mathop \to 0} \int_{-\infty}^{+\infty} \map {F_\epsilon} x \rd x\)





Definition 2 of Dirac Delta Function














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
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): generalized function




