# 

Source: https://proofwiki.org/wiki/Borel-Carath%C3%A9odory_Lemma/Lemma

Theorem
Let $D \subset \C$ be an open set with $0 \in D$.
Let $R > 0$ be such that the open disk $\map B {0, R} \subset D$.
Let $f: D \to \C$ be analytic with $\map f 0 = 0$.
Let $\map \Re {\map f z} \le M$ for $\cmod z \le R$.
Let $0 < r < R$.

Then:

$\ds \forall n \in \Z_{\ge 1} : \quad \frac {\cmod {\map {f^{\paren n} } 0} }{ n! } \le \frac {2 M} {R^n}$


Proof
By Cauchy Integral Theorem:

$\ds \forall k \in \Z_{\ge 0} : \quad \oint_{\partial D} z^{k-1} \map f z \rd z = 0$
Parametrizing $\partial D$ by $R e^{2 \pi i t}$:

$\ds \forall k \in \Z_{\ge 0} : \quad \int _0^1 e^{2\pi i k t} \map f {R e^{2 \pi ikt} } \rd t = 0$
On the other hand:














\(\ds \map {f^{\paren n} } 0\)

\(=\)







\(\ds \frac {n!} {2 \pi i} \oint_{\partial D} \frac {\map f z} {z^{n + 1} } \rd z\)




















\(\ds \)

\(=\)







\(\ds \frac {n!} {2 \pi i} \int_0^1 \frac {\map f {R e^{2 \pi i t} } } { \paren {R e^{2 \pi i t} }^{n+1} } \paren {2 \pi i} R e^{2 \pi i t} \rd t\)





Parametrize $\partial D$ by $R e^{2 \pi i t}$














\(\ds \)

\(=\)







\(\ds \frac {n!}{R^n} \int_0^1 e^{- 2 \pi i n t} \map f {R e^{2 \pi i t} } \rd t\)





Cauchy's Integral Formula




Let $\theta_n := \map \arg {\map {f^{\paren n} } 0}$.
Then:














\(\ds \cmod {\map {f^{\paren n} } 0}\)

\(=\)







\(\ds e^{-\theta_n i} \map {f^{\paren n} } 0\)




















\(\ds \)

\(=\)







\(\ds \frac {n!}{R^n} \int_0^1 \map f {R e^{2 \pi i t} } e^{- \paren {2 \pi n t + \theta_n} i} \rd t\)









Since:

$\ds \int_0^1 \map f {R e^{2 \pi i t} } \paren {2 + e^{\paren {2 \pi n t + \theta_n} i } } \rd t = 0$
we have:














\(\ds \cmod {\map {f^{\paren n} } 0}\)

\(=\)







\(\ds \frac {n!}{R^n} \int_0^1 \map f {R e^{2 \pi i t} } \paren {2 + e^{\paren {2 \pi n t + \theta_n} i } + e^{- \paren {2 \pi n t + \theta_n} i } } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {2 n!}{R^n} \int_0^1 \map f {R e^{2 \pi i t} } \paren {1 + \map \cos { 2 \pi n t + \theta_n } } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {2 n!}{R^n} \int_0^1 \map \Re {\map f {R e^{2 \pi i t} } } \paren {1 + \map \cos { 2 \pi n t + \theta_n } } \rd t\)




















\(\ds \)

\(\le\)







\(\ds \frac {2 M n!}{R^n} \int_0^1 1 + \map \cos { 2 \pi n t + \theta_n  } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {2 M n!}{R^n}\)









$\blacksquare$





