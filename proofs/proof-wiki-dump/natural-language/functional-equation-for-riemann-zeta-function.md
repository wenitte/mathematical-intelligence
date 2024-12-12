# 

Source: https://proofwiki.org/wiki/Functional_Equation_for_Riemann_Zeta_Function



Theorem
Let $\zeta$ be the Riemann zeta function.
Let $\map \zeta s$ have an analytic continuation for $\map \Re s > 0$.

Then:

$\pi^{-s/2 } \map \Gamma {\dfrac s 2} \map \zeta s = \pi^{\paren {s/2 - 1/2 } } \map \Gamma {\dfrac {1 - s} 2} \map \zeta {1 - s}$
where $\Gamma$ is the gamma function


Proof
Let $\ds \map \omega x = \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}$.
Then from Integral Representation of Riemann Zeta Function in terms of Jacobi Theta Function we have:

$(1): \quad \ds \pi^{-s / 2} \map \Gamma {\frac s 2} \map \zeta s = -\frac 1 {s \paren {1 - s} } + \int_1^\infty \paren {x^{s / 2 - 1} + x^{- s / 2 - 1 / 2} } \map \omega x \rd x$

We observe that this integral is invariant under $s \mapsto 1 - s$.
Then:














\(\ds \pi^{-\paren {1 - s } / 2} \map \Gamma {\frac {1 - s} 2} \map \zeta {1 - s}\)

\(=\)







\(\ds -\frac 1 {\paren {1 - s} \paren {1 - \paren {1 - s} } } + \int_1^\infty \paren {x^{\paren {1 - s} / 2 - 1} + x^{-\paren {1 - s} / 2 - 1 / 2} } \map \omega x \rd x\)





setting $s \mapsto 1 - s$














\(\ds \)

\(=\)







\(\ds - \frac 1 {\paren {1 - s} s} + \int_1^\infty \paren {x^{- s / 2 - 1 / 2 } + x^{s / 2 - 1} } \map \omega x \rd x\)




















\(\ds \)

\(=\)







\(\ds \pi^{-s / 2} \map \Gamma {\frac s 2} \map \zeta s\)





from $(1)$



as required.
$\blacksquare$


Also see
Functional Equation for Completed Riemann Zeta Function
Integral Representation of Riemann Zeta Function in terms of Jacobi Theta Function


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 35$: Riemann Zeta Function $\map \zeta x = \dfrac 1 {1^x} + \dfrac 1 {2^x} + \dfrac 1 {3^x} + \cdots$: $35.25$




