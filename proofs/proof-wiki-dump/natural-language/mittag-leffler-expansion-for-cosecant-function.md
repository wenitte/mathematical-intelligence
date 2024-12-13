# 

Source: https://proofwiki.org/wiki/Mittag-Leffler_Expansion_for_Cosecant_Function



Theorem
$\ds \pi \cosec \pi z = \frac 1 z + 2\sum_{n \mathop = 1}^\infty \paren {-1}^n \frac z {z^2 - n^2}$
where:

$z \in \C$ is not an integer
$\cosec$ is the cosecant function.


Real Domain
Let $\alpha \in \R$ be a real number which is specifically not an integer.
Then:

$\pi \cosec \pi \alpha = \dfrac 1 \alpha + \ds 2 \sum_{n \mathop \ge 1} \paren {-1}^n \dfrac {\alpha} {\alpha^2 - n^2}$


Proof













\(\ds \pi \cosec \pi z\)

\(=\)







\(\ds \map \Gamma z \map \Gamma {1 - z}\)





Euler's Reflection Formula














\(\ds \)

\(=\)







\(\ds \map \Beta {z, 1 - z}\)





Definition 3 of Beta Function














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} t^{z - 1} \paren {1 - t}^{-z} \rd t\)





Definition 1 of Beta Function














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to \infty} \paren {\dfrac x {1 + x} }^{z - 1} \paren {1 - \dfrac x {1 + x} }^{-z} \dfrac {\d x} {\paren {1 + x}^2}\)





substituting $x = \dfrac t {1 - t}$














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to \infty} \dfrac {x^{z - 1} } {1 + x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \dfrac {x^{z - 1} } {1 + x} \rd x + \int_{\mathop \to 1}^{\mathop \to \infty} \dfrac {x^{z - 1} } {1 + x} \rd x\)





Sum of Integrals on Adjacent Intervals for Integrable Functions














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \dfrac {u^{z - 1} } {1 + u} \rd u - \int_{\mathop \to 1}^{\mathop \to 0} \dfrac {\paren {1 / u}^{z - 1} } {1 + 1/u} \frac {\rd u} {u^2}\)





substituting $u = x$ for the first integral and $u = \dfrac 1 x$ for the second integral














\(\ds \)

\(=\)







\(\ds \int_{\mathop \to 0}^{\mathop \to 1} \dfrac {u^{z - 1} } {1 + u} \rd u + \int _0^1 \dfrac {u^{-z} } {1 + u} \rd u\)





Reversal of Limits of Definite Integral














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \int_0^1 u^{n - 1 + z} \rd u + \sum_{n \mathop = 0}^\infty \paren {-1}^n \int_0^1 u^{n - z} \rd u\)





Power Series Expansion for Reciprocal of 1 + x with $x = u$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac 1 {n + z} + \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac 1 {n - z + 1}\)





Integral of Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 z + \sum_{n \mathop = 1}^\infty \paren {-1}^n \paren {\dfrac 1 {n + z} - \dfrac 1 {n - z} }\)





reindexing and combining convergent series














\(\ds \)

\(=\)







\(\ds \dfrac 1 z - 2 \sum_{n \mathop = 1}^\infty \paren {-1}^n \dfrac z {n^2 - z^2}\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \dfrac 1 z + 2 \sum_{n \mathop = 1}^\infty \paren {-1}^n \dfrac z {z^2 - n^2}\)









$\blacksquare$


Source of Name
This entry was named for Magnus Gustaf Mittag-Leffler.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 37$: Partial Fraction Expansions: $37.2$




