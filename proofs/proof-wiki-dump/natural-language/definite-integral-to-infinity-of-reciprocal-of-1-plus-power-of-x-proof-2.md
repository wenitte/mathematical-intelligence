# 

Source: https://proofwiki.org/wiki/Definite_Integral_to_Infinity_of_Reciprocal_of_1_plus_Power_of_x/Proof_2

Theorem
$\ds \int_0^\infty \frac 1 {1 + x^n} \rd x = \frac \pi n \map \csc {\frac \pi n}$


Proof
Let $R > 1$ be a real number.
Let:

$\ds C_R = \set {R e^{i \theta} : 0 \le \theta \le \frac {2 \pi} n}$

This article, or a section of it, needs explaining.In particular: the fact that we are working in the complex plane. This is not immediately obvious.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $L_R$ be the straight line segment from $0$ to $R e^{\frac {2 \pi i} n}$.
Let $\Gamma_R = \closedint 0 R \cup C_R \cup L_R$, traversed anticlockwise. 


This article, or a section of it, needs explaining.In particular: DiagramYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then: 














\(\ds \oint_{\Gamma_R} \frac 1 {1 + z^n} \rd z\)

\(=\)







\(\ds \int_0^R \frac 1 {1 + x^n} \rd x + \int_{C_R} \frac 1 {1 + z^n} \rd z + \int_{L_R} \frac 1 {1 + z^n} \rd z\)




















\(\ds \)

\(=\)







\(\ds \int_0^R \frac 1 {1 + x^n} \rd x + \int_{C_R} \frac 1 {1 + z^n} \rd z + e^{\frac {2 \pi i} n} \int_R^0 \frac 1 {1 + e^{2 \pi i} x^n} \rd x\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \paren {1 - e^{\frac {2 \pi i} n} } \int_0^R \frac 1 {1 + x^n} \rd x + \int_{C_R} \frac 1 {1 + z^n} \rd z\)









We can show the second integral to vanish as $R \to \infty$: 














\(\ds \cmod {\int_{C_R} \frac 1 {1 + z^n} \rd z}\)

\(\le\)







\(\ds \frac {2 \pi R} n \max_{0 \le \theta \le \frac {2 \pi} n} \cmod {\frac 1 {1 + R^n e^{i n \theta} } }\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \frac {2 \pi R} {n \paren {R^n - 1} }\)




















\(\ds \)

\(\sim\)







\(\ds \frac {2 \pi} {n R^{n - 1} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $n > 1$



So we have: 

$\ds \oint_{\Gamma_\infty} \frac 1 {1 + z^n} \rd z = \paren {1 - e^{\frac {2 \pi i} n} } \int_0^\infty \frac 1 {1 + x^n} \rd x$

We have that the integrand is meromorphic with a single simple pole at $z = e^{\frac \pi n i}$.
This is contained within the contour
Hence Cauchy's Residue Theorem can be applied to evaluate the left hand side:














\(\ds \oint_{\Gamma_\infty} \frac 1 {1 + z^n} \rd z\)

\(=\)







\(\ds 2 \pi i \Res {\frac 1 {1 + z^n} } {e^{\frac \pi n i} }\)




















\(\ds \)

\(=\)







\(\ds \frac {2 \pi i} {n e^{\frac \pi n \paren {n - 1} i} }\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds \frac {2 \pi i e^{i \frac \pi n} } {n e^{\pi i} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {2 \pi i e^{i \frac \pi n} } n\)





Euler's Identity




So: 

$\ds \paren {e^{\frac {2 \pi i} n} - 1} \int_0^\infty \frac 1 {1 + x^n} \rd x = \frac {2 \pi i e^{i \frac \pi n} } n$
giving: 














\(\ds \int_0^\infty \frac 1 {1 + x^n} \rd x\)

\(=\)







\(\ds \frac \pi n \cdot 2 i \cdot \frac {e^{i \frac \pi n} } {e^{\frac {2 \pi i} n} - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac \pi n \cdot \frac {2 i e^{i \frac \pi n} } {e^{\frac \pi n i} \paren {e^{\frac \pi n i} - e^{-\frac \pi n i} } }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi n \cdot \frac {2 i} {e^{\frac \pi n i} - e^{-\frac \pi n i} }\)




















\(\ds \)

\(=\)







\(\ds \frac \pi n \map \csc {\frac \pi n}\)





Euler's Cosecant Identity



$\blacksquare$





