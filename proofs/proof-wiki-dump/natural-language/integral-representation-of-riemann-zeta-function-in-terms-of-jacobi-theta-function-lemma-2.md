# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Riemann_Zeta_Function_in_terms_of_Jacobi_Theta_Function/Lemma_2

Integral Representation of Riemann Zeta Function in terms of Jacobi Theta Function: Lemma 2
$\ds \int_0^1 x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x = -\frac 1 {s \paren {1 - s} } + \int_1^\infty x^{-\paren {s + 1} / 2} \sum_{n \mathop = 1}^\infty e^{-\paren {\pi n^2 x} } \rd x$
where:

$s \in \C: \map \Re s > 1$
$x \in \R_{>0}$.


Proof
Let $u = \dfrac 1 x$.
Then:














\(\ds \d u\)

\(=\)







\(\ds -\dfrac 1 {x^2} \rd x\)





Derivative of Reciprocal














\(\ds x \to 0^+\)

\(\implies\)







\(\ds u \to +\infty\)




















\(\ds x = 1\)

\(\implies\)







\(\ds u = 1\)










Hence:














\(\ds \int_0^1 x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)

\(=\)







\(\ds \int_\infty^1 \paren {\dfrac 1 u }^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\dfrac {\pi n^2} u} \paren {-\paren {\dfrac 1 u}^2} \rd u\)





Integration by Substitution: Definite Integral














\(\ds \)

\(=\)







\(\ds -\int_\infty^1 \paren {\dfrac 1 u }^{s / 2 + 1} \sum_{n \mathop = 1}^\infty e^{-\dfrac {\pi n^2} u} \rd u\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \int_1^\infty \paren {u^{-1 } }^{s / 2 + 1} \sum_{n \mathop = 1}^\infty e^{-\dfrac {\pi n^2} u} \rd u\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \int_1^\infty u^{-s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\dfrac {\pi n^2} u} \rd u\)





Power of Power














\(\ds \)

\(=\)







\(\ds \int_1^\infty x^{-s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\dfrac {\pi n^2} x} \rd x\)





rewrite in terms of $x$




Recall the Fourier Transform of $e^{-t^2}$:














\(\ds \map {\hat f \sqbrk {e^{- t^2} } } u\)

\(=\)







\(\ds \sqrt \pi e^{-\paren {\pi u}^2}\)





Fourier Transform of Normal Function














\(\ds \map {\hat f \sqbrk {e^{-\paren {t \sqrt {\pi x} }^2 } } } u\)

\(=\)







\(\ds \dfrac {\sqrt \pi} {\sqrt {\pi x} } e^{-\paren {\pi \frac u {\sqrt {\pi x} } }^2}\)





Scaling Property of Fourier Transform, setting $t = t \sqrt {\pi x}$














\(\ds \map {\hat f \sqbrk {e^{-\pi t^2 x} } } u\)

\(=\)







\(\ds x^{-1 / 2} e^{-\pi u^2 / x}\)










Therefore, by the Poisson Summation Formula:














\(\ds \sum_{t \mathop \in \Z} \map f t\)

\(=\)







\(\ds \sum_{u \mathop \in \Z} \map {\hat f \sqbrk {e^{-\pi t^2 x} } } u\)





Poisson Summation Formula








\(\ds \leadsto \ \ \)





\(\ds \sum_{-\infty}^\infty e^{- \pi t^2 x}\)

\(=\)







\(\ds \sum_{-\infty}^\infty x^{-1 / 2} e^{-\pi u^2 / x}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = -\infty}^{-1} e^{-\pi n^2 x} + 1 + \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}\)

\(=\)







\(\ds \dfrac 1 {\sqrt x} \paren {\sum_{u \mathop = -\infty}^{-1} e^{-\pi u^2 / x } + 1 + \sum_{u \mathop = 1}^\infty e^{-\pi u^2 / x} }\)














\(\ds \leadsto \ \ \)





\(\ds 1 + 2 \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}\)

\(=\)







\(\ds \dfrac 1 {\sqrt x} \paren {1 + 2 \sum_{u \mathop = 1}^\infty e^{-\pi u^2 / x} }\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt x + 2 \sqrt x \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}\)

\(=\)







\(\ds 1 + 2 \sum_{u \mathop = 1}^\infty e^{-\pi u^2 / x}\)





multiplying by $\sqrt x$








\(\ds \leadsto \ \ \)





\(\ds -1 + \sqrt x + 2 \sqrt x \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}\)

\(=\)







\(\ds 2 \sum_{u \mathop = 1}^\infty e^{-\pi u^2 / x}\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds \sum_{u \mathop = 1}^\infty e^{-\pi u^2 / x}\)

\(=\)







\(\ds -\dfrac 1 2 + \dfrac 1 2 \sqrt x + \sqrt x \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x}\)





dividing by $2$








\(\ds \leadsto \ \ \)





\(\ds \int_1^\infty x^{-s / 2 - 1} \sum_{u \mathop = 1}^\infty e^{-\pi u^2 / x} \rd x\)

\(=\)







\(\ds \int_1^\infty x^{-s / 2 - 1} \paren {-\frac 1 2 + \frac 1 2 \sqrt x + \sqrt x \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x } } \rd x\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 \int_1^\infty x^{-s / 2 - 1} \rd x + \dfrac 1 2 \int_1^\infty x^{-s / 2 - 1 / 2} \rd x + \int_1^\infty x^{-s / 2 - 1 / 2} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)





Linear Combination of Definite Integrals and Product of Powers














\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 \paren {\lim_{\gamma \mathop \to +\infty} \intlimits {-\frac 2 s x^{-s / 2} } 1 \gamma} + \dfrac 1 2 \paren {\lim_{\gamma \mathop \to +\infty} \intlimits {\frac 2 {1 - s} x^{\paren {1 - s} / 2} } 1 \gamma} + \int_1^\infty x^{-s / 2 - 1 / 2} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds -\dfrac 1 2 \paren {0 - \paren {-\frac 2 s} } + \frac 1 2 \paren {0 - \paren {\frac 2 {1 - s} } } + \int_1^\infty x^{-s / 2 - 1 / 2} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 s - \frac 1 {1 - s} + \int_1^\infty x^{-\paren {s + 1} / 2} \sum_{n \mathop = 1}^\infty e^{-\paren {\pi n^2 x} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {-\paren {1 - s} - s} {s \paren {1 - s} } + \int_1^\infty x^{-\paren {s + 1} / 2} \sum_{n \mathop = 1}^\infty e^{-\paren {\pi n^2 x} } \rd x\)





Addition of Fractions








\(\ds \leadsto \ \ \)





\(\ds \int_0^1 x^{s / 2 - 1} \sum_{n \mathop = 1}^\infty e^{-\pi n^2 x} \rd x\)

\(=\)







\(\ds -\frac 1 {s \paren {1 - s} } + \int_1^\infty x^{-\paren {s + 1} / 2} \sum_{n \mathop = 1}^\infty e^{-\paren {\pi n^2 x} } \rd x\)









$\blacksquare$





