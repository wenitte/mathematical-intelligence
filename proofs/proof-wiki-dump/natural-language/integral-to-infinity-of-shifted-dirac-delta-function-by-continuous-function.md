# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_Shifted_Dirac_Delta_Function_by_Continuous_Function

Theorem
Let $\map \delta x$ denote the Dirac delta function.
Let $g$ be a continuous real function.
Let $a \in \R_{\ge 0}$ be a positive real number.

Then:

$\ds \int_0^{+ \infty} \map \delta {x - a} \, \map g x \rd x = \map g a$


Proof
We have that:

$\map \delta {x - a} = \ds \lim_{\epsilon \mathop \to 0} \map {F_\epsilon} x$
where:

$\map {F_\epsilon} x = \begin {cases} 0 & : x < a \\ \dfrac 1 \epsilon & : a \le x \le a + \epsilon \\ 0 & : x > a + \epsilon \end {cases}$

We have that:














\(\ds \int_0^{+ \infty} \map {F_\epsilon} x \map g x \rd x\)

\(=\)







\(\ds \int_0^a 0 \times \map g x + \int_a^{a + \epsilon} \dfrac 1 \epsilon \map g x \rd x + \int_{a + \epsilon}^\infty 0 \times \map g x \rd x\)





Definition of $\map {F_\epsilon} x$














\(\ds \)

\(=\)







\(\ds \int_0^a 0 \times \map g x + \int_a^{a + \epsilon} \dfrac 1 \epsilon \map g x \rd x + \lim_{L \mathop \to \infty} \int_{a + \epsilon}^L 0 \times \map g x \rd x\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \int_0^a 0 + \dfrac 1 \epsilon \int_a^{a + \epsilon} \map g x \rd x + \lim_{L \mathop \to \infty} \int_{a + \epsilon}^L 0 \rd x\)




















\(\ds \)

\(=\)







\(\ds \paren {0 \times \paren {a - 0} } + \dfrac 1 \epsilon \int_a^{a + \epsilon} \map g x \rd x + \lim_{L \mathop \to \infty} \paren {0 \times \paren {L - \paren {a + \epsilon} } }\)





Definite Integral of Constant














\(\ds \)

\(=\)







\(\ds 0 + \dfrac 1 \epsilon \int_a^{a + \epsilon} \map g x \rd x + \lim_{L \mathop \to \infty} 0\)





simplification














\(\ds \)

\(=\)







\(\ds \dfrac 1 \epsilon \int_a^{a + \epsilon} \map g x \rd x\)










From Darboux's Theorem:

$\ds m \paren {\paren {a + \epsilon} - a} \le \int_a^{a + \epsilon} \map g x \rd x \le M \paren {\paren {a + \epsilon} - 0}$
where:

$M$ is the maximum of $\map g x$
$m$ is the minimum of $\map g x$
on $\closedint a {a + \epsilon}$.
Hence:

$\ds m \epsilon \le \int_a^{a + \epsilon} \map g x \rd x \le M \epsilon$
and so dividing by $\epsilon$:

$\ds m \le \dfrac 1 \epsilon \int_a^{a + \epsilon} \map g x \rd x \le M$

Then:

$\ds \lim_{\epsilon \mathop \to 0} M = m = \map g a$
and so by the Squeeze Theorem:

$\ds \lim_{\epsilon \mathop \to 0} \int_0^{+ \infty} \map {F_\epsilon} x \map g x \rd x = \map g a$
But by definition of the Dirac delta function:

$\ds \lim_{\epsilon \mathop \to 0} \int_0^{+ \infty} \map {F_\epsilon} x \map g x \rd x = \int_0^{+ \infty} \map \delta {x - a} \map g x \rd x$

Hence the result.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {VIII}$. The Unit Impulse function or Dirac delta function: $3$.




