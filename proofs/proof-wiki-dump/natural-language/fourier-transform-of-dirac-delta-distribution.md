# 

Source: https://proofwiki.org/wiki/Fourier_Transform_of_Dirac_Delta_Distribution

Theorem
Let $\delta \in \map {\SS'} \R$ be the Dirac delta distribution.
Let $\mathbf 1 : \map \SS \R \to \R$ be the constant tempered distribution such that for all $\phi \in \map \SS \R$ we have:

$\ds \map {\mathbf 1} \phi = \int_{-\infty}^\infty 1 \cdot \map \phi x \rd x$

Then in the distributional sense it holds that:

$\hat \delta = \mathbf 1$
where the hat denotes the Fourier transform of a tempered distribution.


Theorem
Let $\phi \in \map \SS \R$ be a Schwartz test function.
Then:














\(\ds \map {\hat \delta} \phi\)

\(=\)







\(\ds \map \delta {\hat \phi}\)





Definition of Fourier Transform of Tempered Distribution














\(\ds \)

\(=\)







\(\ds \map {\hat \phi} 0\)





Definition of Tempered Dirac Delta Distribution














\(\ds \)

\(=\)







\(\ds \int_{- \infty}^\infty \map \phi x e^{-2 \pi i 0 x} \rd x\)





Definition of Fourier Transform of Real Function














\(\ds \)

\(=\)







\(\ds \int_{- \infty}^\infty \map \phi x \cdot 1 \rd x\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf 1} \phi\)









$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.5$: A glimpse of distribution theory. Fourier transform of (tempered) distributions




