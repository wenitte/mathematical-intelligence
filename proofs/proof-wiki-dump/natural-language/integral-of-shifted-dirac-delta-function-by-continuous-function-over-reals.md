# 

Source: https://proofwiki.org/wiki/Integral_of_Shifted_Dirac_Delta_Function_by_Continuous_Function_over_Reals

Theorem
Let $\map \delta x$ denote the Dirac delta function.
Let $g$ be a continuous real function.

Then:

$\ds \int_{-\infty}^{+ \infty} \map {\delta} {x - s} \map g x \rd x = \map g s$


Proof
We have that:

$\map \delta x = \ds \lim_{\epsilon \mathop \to 0} \map {F_\epsilon} x$
where:

$\map {F_\epsilon} x = \begin{cases} 0 & : x < -\epsilon + s \\ \dfrac 1 {2 \epsilon} & : -\epsilon + s \le x \le \epsilon + s \\ 0 & : x > \epsilon + s \end{cases}$

We have that:














\(\ds \int_{-\infty}^{+ \infty} \map {F_\epsilon} x \map g x \rd x\)

\(=\)







\(\ds \int_{-\infty}^{-\epsilon + s} 0 \times \map g x \rd x + \int_{-\epsilon + s}^{\epsilon + s} \dfrac 1 {2 \epsilon} \map g x \rd x + \int_{\epsilon + s}^\infty 0 \times \map g x \rd x\)





Definition of $F_\epsilon$














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to -\infty} \int_L^{-\epsilon + s} 0 \times \map g x \rd x + \int_{-\epsilon + s}^{\epsilon + s} \dfrac 1 {2 \epsilon} \map g x \rd x + \lim_{L \mathop \to \infty} \int_{\epsilon + s}^L 0 \times \map g x \rd x\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to -\infty} \int_L^{-\epsilon + s} 0 \rd x + \dfrac 1 {2 \epsilon} \int_{-\epsilon + s}^{\epsilon + s} \map g x \rd x + \lim_{L \mathop \to \infty} \int_{\epsilon + s}^L 0 \rd x\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to -\infty} \paren {0 \times \paren {-\epsilon + s - L} } + \dfrac 1 {2 \epsilon} \int_{-\epsilon + s}^{\epsilon + s} \map g x \rd x + \lim_{L \mathop \to \infty} \paren {0 \times \paren {L - \epsilon - s} }\)





Definite Integral of Constant














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to -\infty} 0 + \dfrac 1 {2 \epsilon} \int_{-\epsilon + s}^{\epsilon + s} \map g x \rd x + \lim_{L \mathop \to \infty} 0\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \epsilon} \int_{-\epsilon + s}^{\epsilon + s} \map g x \rd x\)










From Darboux's Theorem:

$\ds m \paren {\epsilon + s - \paren {-\epsilon + s} } \le \int_{-\epsilon + s}^{\epsilon + s} \map g x \rd x \le M \paren {\epsilon + s - \paren {-\epsilon + s} }$
where:

$M$ is the maximum of $\map g x$
$m$ is the minimum of $\map g x$
on $\closedint {-\epsilon + s} {\epsilon + s}$.
Hence:

$\ds 2 m \epsilon \le \int_{-\epsilon + s}^{\epsilon + s} \map g x \rd x \le 2 M \epsilon$
and so dividing by $2 \epsilon$:

$\ds m \le \dfrac 1 {2 \epsilon} \int_{-\epsilon + s}^{\epsilon + s} \map g x \rd x \le M$

Then:

$\ds \lim_{\epsilon \mathop \to 0} M = m = \map g s$
and so by the Squeeze Theorem:

$\ds \lim_{\epsilon \mathop \to 0} \int_{-\infty}^{+ \infty} \map {F_\epsilon} x \map g x \rd x = \map g s$
But by definition of the Dirac delta function:

$\ds \lim_{\epsilon \mathop \to 0} \int_{-\infty}^{+ \infty} \map {F_\epsilon} x \map g x \rd x = \int_{- \infty}^{+ \infty} \map \delta x \map g x \rd x$

Hence the result.
$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): generalized function




