# 

Source: https://proofwiki.org/wiki/Fourier_Transform_of_Derivative_of_Tempered_Distribution

Theorem
Let $T \in \map {\SS'} \R$ be a tempered distribution.
Let $\xi \in \R$ be a real number.
Let the hat denote the Fourier transform.

Then in the distributional sense it holds that:

$\hat {\paren{T'} }  = 2 \pi i \xi \hat T$


Proof
Let $\phi \in \map \SS \R$ be a Schwartz test function.
Then:














\(\ds \map {\hat {\paren {T'} } } {\map \phi x}\)

\(=\)







\(\ds \map {T'} {\map {\hat \phi} x}\)





Definition of Fourier Transform of Tempered Distribution














\(\ds \)

\(=\)







\(\ds \map {T'} {\int_{-\infty}^\infty \map \phi \xi e^{-2\pi i \xi x} }\)





Definition of Fourier Transform of Real Function














\(\ds \)

\(=\)







\(\ds -\map T {\dfrac \d {\d x} \int_{-\infty}^\infty \map \phi \xi e^{-2\pi i \xi x} }\)





Definition of Derivative of Tempered Distribution














\(\ds \)

\(=\)







\(\ds -\map T {-2\pi i \xi \int_{-\infty}^\infty \map \phi \xi e^{-2\pi i \xi x} }\)




















\(\ds \)

\(=\)







\(\ds 2\pi i \xi \map T {\int_{-\infty}^\infty \map \phi \xi e^{-2\pi i \xi x} }\)





Definition of Tempered Distribution














\(\ds \)

\(=\)







\(\ds 2\pi i \xi \map T {\map {\hat \phi} x}\)





Definition of Fourier Transform of Real Function














\(\ds \)

\(=\)







\(\ds 2\pi i \xi \map {\hat T} {\map \phi x}\)





Definition of Fourier Transform of Tempered Distribution




$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.5$: A glimpse of distribution theory. Fourier transform of (tempered) distributions




