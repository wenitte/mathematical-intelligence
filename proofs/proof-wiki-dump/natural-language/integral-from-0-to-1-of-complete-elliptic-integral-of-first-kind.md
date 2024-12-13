# 

Source: https://proofwiki.org/wiki/Integral_from_0_to_1_of_Complete_Elliptic_Integral_of_First_Kind

Theorem
Let $G$ denote Catalan's constant.
Then:

$2 G = \ds \int_0^1 \map K k \rd k$
where $\map K k$ denotes the complete elliptic integral of the first kind:

$\map K k = \ds \int \limits_0^{\pi / 2} \dfrac {\d \phi} {\sqrt {1 - k^2 \sin^2 \phi} }$


Proof













\(\ds \int_0^1 \map K k \rd k\)

\(=\)







\(\ds \int_0^1 \int_0^{\pi / 2} \dfrac 1 {\sqrt {1 - k^2 \sin^2 \phi} } \rd \phi \rd k\)





Definition of Complete Elliptic Integral of the First Kind














\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \int_0^1 \dfrac 1 {\sqrt {1 - k^2 \sin^2 \phi} } \rd k \rd \phi\)





Tonelli's Theorem














\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \dfrac 1 {\sin \phi} \int_0^{\sin \phi} \dfrac 1 {\sqrt {1 - u^2} } \rd u \rd \phi\)





Substitution of $u = k \sin \phi$ and $\rd u = \rd k \sin \phi$














\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \dfrac {\map \arcsin {\sin \phi} } {\sin \phi} \rd \phi\)





Arcsine as Integral














\(\ds \)

\(=\)







\(\ds \int_0^{\pi / 2} \dfrac \phi {\sin \phi} \rd \phi\)





Definition of Inverse Sine














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 4} \dfrac {2 \theta} {\sin 2 \theta} \rd \theta\)





Substitution of $2 \theta = \phi$ and $2 \rd \theta = \rd \phi$














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 4} \dfrac {\theta} {\sin \theta \cos \theta} \rd \theta\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 4} \dfrac {\theta} {\sin \theta \times \dfrac {\cos \theta} {\cos \theta} \times \cos \theta} \rd \theta\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds 2 \int_0^{\pi / 4} \dfrac \theta {\tan \theta} \sec^2 \theta \rd \theta\)




















\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \dfrac {\arctan t} t \rd t\)





Substitution of $t = \tan \theta$ and $\rd t = \sec^2 \theta \rd \theta$














\(\ds \)

\(=\)







\(\ds 2 \int_0^1 \dfrac 1 t \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {t^{2 n + 1} } {2 n + 1} \rd t\)





Power Series Expansion for Real Arctangent Function














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n} {2 n + 1} \int_0^1 t^{2 n} \rd t\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds 2 \sum_{n \mathop = 0}^\infty \dfrac {\paren {-1}^n} {\paren {2 n + 1}^2}\)





Integral of Power














\(\ds \)

\(=\)







\(\ds 2 G\)





Definition of Catalan's Constant



$\blacksquare$


Sources
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,91596 55941 77219 01505 \ldots$




