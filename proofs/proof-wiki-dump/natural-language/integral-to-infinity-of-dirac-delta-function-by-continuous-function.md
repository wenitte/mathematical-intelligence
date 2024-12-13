# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Dirac_Delta_Function_by_Continuous_Function

Theorem
Let $\map \delta x$ denote the Dirac delta function.
Let $g$ be a continuous real function.

Then:

$\ds \int_0^{+ \infty} \map \delta x \map g x \rd x = \map g 0$


Proof
We have that:

$\map \delta x = \ds \lim_{\epsilon \mathop \to 0} \map {F_\epsilon} x$
where:

$\map {F_\epsilon} x = \begin{cases} 0 & : x < 0 \\ \dfrac 1 \epsilon & : 0 \le x \le \epsilon \\ 0 & : x > \epsilon \end{cases}$

We have that:














\(\ds \int_0^{+ \infty} \map {F_\epsilon} x \map g x \rd x\)

\(=\)







\(\ds \int_0^\epsilon \dfrac 1 \epsilon \map g x \rd x + \int_\epsilon^\infty 0 \times \map g x \rd x\)





Definition 1 of Dirac Delta Function














\(\ds \)

\(=\)







\(\ds \int_0^\epsilon \dfrac 1 \epsilon \map g x \rd x + \lim_{L \mathop \to \infty} \int_\epsilon^L 0 \times \map g x \rd x\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \int_0^\epsilon \map g x \rd x + \lim_{L \mathop \to \infty} \int_\epsilon^L 0 \rd x\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \int_0^\epsilon \map g x \rd x + \lim_{L \mathop \to \infty} \paren {0 \times \paren {L - \epsilon} }\)





Definite Integral of Constant














\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \int_0^\epsilon \map g x \rd x + \lim_{L \mathop \to \infty} 0\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \int_0^\epsilon \map g x \rd x\)










From Darboux's Theorem:

$\ds m \paren {\epsilon - 0} \le \int_0^\epsilon \map g x \rd x \le M \paren {\epsilon - 0}$
where:

$M$ is the maximum of $\map g x$
$m$ is the minimum of $\map g x$
on $\closedint 0 \epsilon$.
Hence:

$\ds m \epsilon \le \int_0^\epsilon \map g x \rd x \le M \epsilon$
and so dividing by $\epsilon$:

$\ds m \le \dfrac 1 \epsilon \int_0^\epsilon \map g x \rd x \le M$

Then:

$\ds \lim_{\epsilon \mathop \to 0} M = m = \map g 0$
and so by the Squeeze Theorem:

$\ds \lim_{\epsilon \mathop \to 0} \int_0^{+\infty} \map {F_\epsilon} x \map g x \rd x = \map g 0$
But by Definition 1 of Dirac Delta Function:

$\ds \lim_{\epsilon \mathop \to 0} \int_0^{+\infty} \map {F_\epsilon} x \map g x \rd x = \int_0^{+\infty} \map \delta x \map g x \rd x$

Hence the result.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {VIII}$. The Unit Impulse function or Dirac delta function: $2$.




