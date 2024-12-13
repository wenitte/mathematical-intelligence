# 

Source: https://proofwiki.org/wiki/Integral_Representation_of_Dirichlet_Beta_Function_in_terms_of_Gamma_Function

Theorem
$\ds \map \beta s = \frac 1 {\map \Gamma s} \int_0^\infty \frac {x^{s - 1} e^{-x} } {1 + e^{-2 x} } \rd x$
where: 

$\beta$ denotes the Dirichlet beta function
$\Gamma$ denotes the gamma function
$s$ is a complex number with $\map \Re s > 0$.


Proof
We have, by Laplace Transform of Power: 

$\ds \frac {\paren {-1}^n \map \Gamma s} {\paren {2 n + 1}^s} = \paren {-1}^n \int_0^\infty x^{s - 1} e^{-\paren {2 n + 1} x} \rd x$
for $\map \Re s > 0$.

Summing, we have:  














\(\ds \map \Gamma s \sum_{n \mathop = 0}^N \frac {\paren {-1}^n} {\paren {2 n + 1}^s}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^N \paren {-1}^n \int_0^\infty x^{s - 1} e^{-\paren {2 n + 1} x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty x^{s - 1} \sum_{n \mathop = 0}^N \paren {-1}^n e^{-\paren {2 n + 1} x} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \int_0^\infty x^{s - 1} e^{-x} \paren {\sum_{n \mathop = 0}^N \paren {-e^{-2 x} }^n} \rd x\)










We have: 














\(\ds \lim_{N \mathop \to \infty} \paren {\map \Gamma s \sum_{n \mathop = 0}^N \frac {\paren {-1}^n} {\paren {2 n + 1}^s} }\)

\(=\)







\(\ds \map \Gamma s \lim_{N \mathop \to \infty} \paren {\sum_{n \mathop = 0}^N \frac {\paren {-1}^n} {\paren {2 n + 1}^s} }\)





Multiple Rule for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \map \Gamma s \map \beta s\)





Definition of Dirichlet Beta Function



Therefore: 














\(\ds \map \Gamma s \map \beta s\)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \paren {\int_0^\infty x^{s - 1} e^{-x} \paren {\sum_{n \mathop = 0}^N \paren {-e^{-2 x} }^n} \rd x}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty x^{s - 1} e^{-x} \paren {\lim_{N \mathop \to \infty} \sum_{n \mathop = 0}^N \paren {-e^{-2 x} }^n} \rd x\)





Lebesgue's Dominated Convergence Theorem














\(\ds \)

\(=\)







\(\ds \int_0^\infty x^{s - 1} e^{-x} \paren {\sum_{n \mathop = 0}^\infty \paren {-e^{-2 x} }^n} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {x^{s - 1} e^{-x} } {1 - \paren {-e^{- 2x} } } \rd x\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {x^{s - 1} e^{-x} } {1 + e^{-2 x} } \rd x\)









giving: 

$\ds \map \beta s = \frac 1 {\map \Gamma s} \int_0^\infty \frac {x^{s - 1} e^{-x} } {1 + e^{-2 x} } \rd x$
$\blacksquare$





