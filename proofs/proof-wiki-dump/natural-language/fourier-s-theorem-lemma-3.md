# 

Source: https://proofwiki.org/wiki/Fourier%27s_Theorem/Lemma_3

Lemma for Fourier's Theorem
Let $\psi$ be a real function defined on an open interval $\openint a b$.
Let $\psi$ and its derivative $\psi'$ be piecewise continuous with one-sided limits on $\openint a b$.
Let $\map \psi u$ have both right-hand derivative and left-hand derivative at a point $u = x$ where $x \in \openint a b$.

Then:

$\ds \lim_{N \mathop \to \infty} \int_a^b \map \psi u \frac {\sin N \paren {u - x} } {u - x} \rd u = \frac \pi 2 \paren {\map \psi {x^+} + \map \psi {x^-} }$
where:

$\map \psi {x^+}$ denotes the limit of $\psi$ at $x$ from the right
$\map \psi {x^-}$ denotes the limit of $\psi$ at $x$ from the left.


Proof
From Sum of Integrals on Adjacent Intervals for Integrable Functions, we have:

$\ds \int_a^b \map \psi u \frac {\sin N \paren {u - x} } {u - x} \rd u = \int_a^x \map \psi u \frac {\sin N \paren {u - x} } {u - x} \rd u + \int_x^b \map \psi u \frac {\sin N \paren {u - x} } {u - x} \rd u$

Let $u = x - \xi$.
Then by Integration by Substitution:

$\ds \int_a^x \map \psi u \frac {\sin N \paren {u - x} } {u - x} \rd u = \int_0^{x - a} \map \phi \xi \frac {\sin N \xi} \xi \rd \xi$
where:

$\map \phi \xi = \map \psi {u - \xi}$

This article, or a section of it, needs explaining.In particular: It needs to be established how the limits change from $a \to x$ to $0 \to x - a$ as this is not obvious.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Fourier's Theorem: Lemma 2:














\(\ds \lim_{N \mathop \to \infty} \int_0^{x - a} \map \phi \xi \frac {\sin N \xi} \xi \rd \xi\)

\(=\)







\(\ds \frac \pi 2 \map \phi {0^+}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 \map \psi {x^-}\)










Similarly, substituting $u = x + \eta$:

$\ds \int_x^b \map \psi u \frac {\sin N \paren {u - x} } {u - x} \rd u = \int_0^{b - x} \map \chi \eta \frac {\sin N \eta} \eta \rd \eta$
where:

$\map \chi \xi = \map \psi {x + \eta}$

By Fourier's Theorem: Lemma 2:














\(\ds \lim_{N \mathop \to \infty} \int_0^{b - x} \map \chi \eta \frac {\sin N \eta} \eta \rd \eta\)

\(=\)







\(\ds \frac \pi 2 \map \phi {0^+}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 \map \psi {x^+}\)









The result follows by adding the two limits.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter Two: $\S 2$. Some Important Limits: Lemma $(3)$




