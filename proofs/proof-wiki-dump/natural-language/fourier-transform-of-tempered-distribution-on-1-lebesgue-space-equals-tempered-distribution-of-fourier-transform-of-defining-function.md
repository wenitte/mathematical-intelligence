# 

Source: https://proofwiki.org/wiki/Fourier_Transform_of_Tempered_Distribution_on_1-Lebesgue_Space_equals_Tempered_Distribution_of_Fourier_Transform_of_defining_Function

Theorem
Let $\map {L^1} \R$ be the Lebesgue $1$-space.
Let $f \in \map {L^1} \R$.
Let $T_f \in \map {\SS'} \R$ be a tempered distribution associated with $f$.

Then:

$\hat T_f = T_{\hat f}$
where the hat denotes the Fourier transform of the tempered distribution $T_f$ and of the real function $f$ respectively.


Proof
Let $\phi \in \map \SS \R$ be a Schwartz test function.














\(\ds \map { {\hat T}_f} \phi\)

\(=\)







\(\ds \map {T_f} {\hat \phi}\)





Definition of Fourier Transform of Tempered Distribution














\(\ds \)

\(=\)







\(\ds \int_\R \map f x \map {\hat \phi} x \rd x\)





Definition of Tempered Distribution














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty \map f x \paren {\int_{-\infty}^\infty \map \phi \xi e^{-2\pi i x \xi} \rd \xi } \rd x\)





Definition of Fourier Transform














\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty \int_{-\infty}^\infty \map f x \map \phi \xi e^{-2\pi i x \xi} \rd \xi \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty \map \phi \xi \paren {\int_{-\infty}^\infty \map f x e^{-2\pi i x \xi} \rd x} \rd \xi\)




















\(\ds \)

\(=\)







\(\ds \int_{-\infty}^\infty \map \phi \xi \map {\hat f} \xi \rd \xi\)





Definition of Fourier Transform



We have that the Fourier Transform of 1-Lebesgue Space Function is Bounded.
Then, from Lebesgue Infinity-Space is Subset of Tempered Distribution Space it follows that $\ds \int_{-\infty}^\infty \map \phi \xi \map {\hat f} \xi \rd \xi$ is a tempered distribution.
That is, by definition:

$\ds \ds \int_{-\infty}^\infty \map \phi \xi \map {\hat f} \xi \rd \xi = T_{\hat f}$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.5$: A glimpse of distribution theory. Fourier transform of (tempered) distributions




