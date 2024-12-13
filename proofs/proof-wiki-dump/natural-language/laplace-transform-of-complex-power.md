# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Complex_Power

  This article was Featured Proof between 31st December 2021 and 30th January 2023.


Theorem
Let $q$ be a constant complex number with $\map \Re q > -1$.
Let $t^q$ be the the principal branch of the $q$-th complex power whose domain contains the half-plane $\map \Re s > 0$.

Then $t^q$ has a Laplace transform given by:

$\laptrans {t^q} = \dfrac {\map \Gamma {q + 1} } {s^{q + 1} }$
where $\Gamma$ denotes the gamma function.


Proof
By definition of Laplace transform for a function not continuous at zero,

$\ds \laptrans {t^q} = \lim_{\varepsilon \mathop \to 0^+} \lim_{L \mathop \to +\infty} \map I {\varepsilon, L}$
where:

$\ds \map I {\varepsilon, L} = \int_\varepsilon^L t^q e^{-s t} \rd t$

Let $n \in \Z_{>0}$.
From Laplace Transform of Positive Integer Power:

$\laptrans {t^n} = \dfrac {n!} { s^{n + 1} }$
From Gamma Function Extends Factorial, a reasonable Ansatz is:

$\laptrans {t^q} = \dfrac {\map \Gamma {q + 1} } { s^{q + 1} }$
From Poles of Gamma Function, $\map \Gamma {-1}$ is undefined.
This suggests that having $q > -1$ would be a good idea for $q$ wholly real.
Reasons for insisting $\map \Re q > -1$ for complex $q$ will become apparent during the course of the proof.

With the aim of expressing $\map I {\varepsilon, L}$ in a form similar to the integral defining $\Gamma$, we use Complex Riemann Integral is Contour Integral to express $\map I {\varepsilon, L}$ as a contour integral.
Write $s = \sigma + i \omega$ for $\sigma, \omega \in \mathbb R$ and $\sigma > 0$.
From Complex Power by Complex Exponential is Analytic, the integrand for $\map I {\varepsilon, L}$ is analytic.
Thus the conditions for Contour Integration by Substitution are satisfied for $\map \Re s > 0$.
Substitute:














\(\ds u\)

\(=\)







\(\ds s t\)




















\(\ds \)

\(=\)







\(\ds \paren {\sigma + i \omega} t\)














\(\ds \leadsto \ \ \)





\(\ds s \rd t\)

\(=\)







\(\ds \rd u\)




















\(\ds u\)

\(=\)







\(\ds \paren {\sigma + i \omega} \varepsilon\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds \varepsilon\)




















\(\ds u\)

\(=\)







\(\ds \paren {\sigma + i \omega} L\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds L\)




















\(\ds \int_\varepsilon^L t^q e^{-s t} \rd t\)

\(=\)







\(\ds \int_{\sigma \varepsilon \mathop + i \omega \varepsilon}^{\sigma L \mathop + i \omega L} \paren {\frac u s}^q e^{-u} \rd \frac u s\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {s^{q + 1} } \int_{\sigma \varepsilon \mathop + i \omega \varepsilon}^{\sigma L \mathop + i \omega L} u^q e^{-u} \rd u\)










Denote:

$I_C := \ds \int_C u^q e^{-u} \rd u$
Consider the simple closed contour:

$C = C_1 + C_2 - C_3 + C_4$
defined as a concatenation of four contours, where:

$C_1$ is the line segment connecting $\sigma \varepsilon$ to $L \sigma$
$C_2$ is the line segment connecting $L\sigma$ to $L\sigma + i L \omega$
$C_3$ is the line segment connecting $i \varepsilon$ to $L\sigma + i L \omega$
$C_4$ is the circular arc connecting $i \varepsilon$ to $\sigma \varepsilon$ whose center is at the origin.

Note that $C_1$, $C_2$, and $C_4$ are positively oriented with respect to the interior of $C$, while $C_3$ is negatively oriented with respect to the interior of $C$.
The contours are illustrated in the following graph:



By the Cauchy-Goursat Theorem:

$I_C = I_{C_1} + I_{C_2} - I_{C_3} + I_{C_4} = 0$
Consider $I_{C_2}$ as $L \to +\infty$:














\(\ds \cmod {I_{C_2} }\)

\(=\)







\(\ds \cmod { \int_{L \omega}^{i \sigma \mathop + i L\omega} u^q e^{-u} \rd u}\)




















\(\ds \)

\(\le\)







\(\ds \max_{u \mathop \in C_2} \cmod {u^q e^{-u} } L\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \max_{u \mathop \in C_2} \cmod {u^q} \, \map \exp{-\map \Re u} L\)





Modulus of Exponential is Exponential of Real Part














\(\ds \)

\(\sim\)







\(\ds \cmod {L^q} e^{- L} L\)





asymptotic equivalence for $\cmod u$ sufficiently large














\(\ds \)

\(\le\)







\(\ds k e^{3^{-1} L} e^{-L} L\)





$L^q$ is of exponential order $3^{-1}$ for some constant $k > 0$, because $\map \Re q > -1$














\(\ds \)

\(=\)







\(\ds \frac {k L} {\map \exp {\paren {1 - 3^{-1} } L} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)

\(\ds L \to +\infty\)



Limit at Infinity of Polynomial over Complex Exponential




Now consider $I_{C_4}$ for $\varepsilon \to 0^+$:














\(\ds \cmod {I_{C_4} }\)

\(=\)







\(\ds \cmod {\int_{i \varepsilon}^{\varepsilon \sigma} u^q e^{-u} \rd u }\)




















\(\ds \)

\(\le\)







\(\ds \max_{u \mathop \in C_4} \cmod {u^q e^{-u} } \varepsilon \frac {\pi} 2\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \max_{u \mathop \in C_4} \cmod {u^q}  e^{-\map \Re u} \varepsilon \frac {\pi} 2\)





Modulus of Exponential is Exponential of Real Part














\(\ds \)

\(\sim\)







\(\ds \cmod {\varepsilon^{q + 1} } e^{-\varepsilon} \frac {\pi} 2\)





asymptotic equivalence for $\cmod u$ sufficiently small














\(\ds \)

\(=\)







\(\ds \frac {\varepsilon^{\map \Re {q + 1} } } {e^\varepsilon} \frac {\pi} 2\)





Modulus of Positive Real Number to Complex Power is Positive Real Number to Power of Real Part














\(\ds \)

\(\to\)







\(\ds 0\)





as $\varepsilon \to 0^+$, because $\map \Re q > -1$



Thus $I_{C_4} \to 0$ as $\varepsilon \to 0^+$ and $I_{C_2} \to 0$ as $L \to +\infty$.

Thus, taking limits on $I_C = 0$:

$I_C = I_{C_1} - I_{C_3} = 0$

That is, $I_{C_1} = I_{C_3}$ in the limit:














\(\ds \lim_{\varepsilon \mathop \to 0^+} \lim_{L \mathop \to +\infty} \int_{\varepsilon s}^{L s} u^q e^{-u} \rd u\)

\(=\)







\(\ds \lim_{\varepsilon \mathop \to 0^+} \lim_{L \mathop \to +\infty} \int_{\varepsilon \sigma}^{L \sigma} u^q e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_{\text{positive real axis} } u^s e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} t^{\paren {s + 1}-1} e^{-t} \rd t\)





Complex Riemann Integral is Contour Integral



Thus:














\(\ds \laptrans {t^q}\)

\(=\)







\(\ds \lim_{\varepsilon \mathop \to 0^+} \lim_{L \mathop \to +\infty} \map I {\varepsilon, L}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {s^{q + 1} } \int_0^{\to +\infty} t^{\paren {s + 1} - 1} e^{-t} \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {q + 1} } {s^{q + 1} }\)









and the Ansatz is proved correct.
$\blacksquare$





