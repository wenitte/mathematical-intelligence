# 

Source: https://proofwiki.org/wiki/Gelfand%27s_Spectral_Radius_Formula/Bounded_Linear_Operator

Theorem
Let $\struct {X, \norm \cdot _X}$ be a Banach space over $\C$.
Let $\map B X$ be the set of bounded linear operators on $X$.
Let $\norm \cdot_{\map B X}$ denote the operator norm on $\map B X$.
Let $T \in \map B X$.
Let $\size {\map \sigma T}$ be the spectral radius of $T$.

Then:

$\ds \size {\map \sigma T} = \lim_{n \mathop \to \infty} \paren {\norm {T^n}_{\map B X} }^{1/n} = \inf_{n \mathop \in \N_{>0} } \paren {\norm {T^n}_{\map B X} }^{1/n}$


Proof
Let $z \in \C$ be such that:

$\ds \cmod z > \inf_{n \mathop \in \N_{>0} } \paren {\norm {T^n}_{\map B X} }^{1/n}$
That is, there exists an $m \in \N_{>0}$ such that:

$\ds \cmod z > \paren {\norm {T^m}_{\map B X} }^{1/m}$
Then:














\(\ds \paren {T - z I}^{-1}\)

\(=\)







\(\ds -z^{-1} \paren {I - z^{-1} T}^{-1}\)




















\(\ds \)

\(=\)







\(\ds -z^{-1} \sum_{N \mathop \ge 0} \paren {z^{-1} T}^N\)





Invertibility of Identity Minus Operator, as $\norm {z^{-1} T} < 1$














\(\ds \)

\(=\)







\(\ds -z^{-1} \sum_{r \mathop = 0}^{m - 1} \paren {z^{-1} T}^r \sum_{q \mathop \in \N} \paren {z^{-1} T}^{m q}\)





Quotient-Remainder Theorem



exists, that is:

$z \in \C \setminus \map \sigma T$
Therefore:

$\forall z \in \C : \ds z \in \map \sigma T \implies \cmod z \le \inf_{n \mathop \in \N_{>0} } \paren {\norm{T^n}_{\map B X} }^{1/n}$
By definition of spectral radius we have:

$\ds \size {\map \sigma T} \le \inf_{n \mathop \in \N_{>0} } \paren {\norm{T^n}_{\map B X} }^{1/n}$

It remains to show:

$\ds \size{\map \sigma T} \ge \limsup_{n \mathop \to \infty} \paren {\norm {T^n}_{\map B X} }^{1/n}$
Let $\struct { {\map B X}^\ast, \norm {\cdot}_{ {\map B X}^\ast} }$ be the normed dual space of $\struct {\map B X, \norm \cdot_{\map B X} }$.
For $\ell \in {\map B X}^\ast$, we define a complex function $F_\ell : \C \setminus \map \sigma T \to \C$ by:

$\map {F_\ell} z := \map \ell {\paren {T - z I}^{-1} }$
By Resolvent Mapping is Analytic, $F_\ell$ is analytic on $\C \setminus \map \sigma T$.
Moreover, if $\cmod z > \norm T_{\map B T}$, then:














\(\ds \map {F_\ell} z\)

\(=\)







\(\ds -z^{-1} \map \ell {\paren {I - z^{-1} T}^{-1} }\)




















\(\ds \)

\(=\)







\(\ds -z^{-1} \map \ell {- \sum_{n \mathop \ge 0} \paren {z^{-1} T^n}^n }\)





Invertibility of Identity Minus Operator




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds -\sum_{n \mathop \ge 0} \dfrac {\map \ell {T^n} }{z^{n + 1} }\)









Thus for all $\delta > 0$ and $m \in \N$:














\(\ds \oint _{\cmod z \mathop = \size {\map \sigma T} \mathop + \delta} \map {F_\ell} z z^m \rd z\)

\(=\)







\(\ds \oint _{\cmod z \mathop = \norm T_{\map B T} \mathop + 1} \map {F_\ell} z z^m \rd z\)





Cauchy-Goursat Theorem














\(\ds \)

\(=\)







\(\ds \oint_{\cmod z \mathop = \norm T_{\map B T} \mathop + 1} - \sum_{n \mathop \ge 0} \dfrac {\map \ell {T^n} }{z^{n - m + 1} } \rd z\)





by $(1)$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds -2 \pi i \; \map \ell {T^m}\)





Cauchy's Residue Theorem



By Existence of Support Functional, for each $m \in \N$ there is an $\ell_m \in {\map B X}^\ast$ such that:

$\norm {\ell_m}_{ {\map B X}^\ast} = 1$
$\map {\ell_m} {T^m} = \norm {T^m}_{\map B T}$
Thus:














\(\ds \norm {T^m} _{\map B T}\)

\(=\)







\(\ds \dfrac {-1} {2 \pi i} \oint_{\cmod z \mathop = \size {\map \sigma T} + \delta} \map {F_{\ell_m} } z z^m \rd z\)





by $(2)$














\(\ds \)

\(\le\)







\(\ds \paren {\sup_{\cmod z \mathop = \size {\map \sigma T} \mathop + \delta} \cmod {\map {F_{\ell_m} } z z^m} } \paren {\size {\map \sigma T} + \delta}\)





Triangle Inequality for Contour Integrals














\(\ds \)

\(=\)







\(\ds \paren {\size {\map \sigma T} \mathop + \delta}^{m + 1} \paren {\sup_{\cmod z \mathop = \size {\map \sigma T} \mathop + \delta} \cmod {\map {F_{\ell_m} } z} }\)




















\(\ds \)

\(\le\)







\(\ds \paren {\size {\map \sigma T} \mathop + \delta}^{m + 1} \paren {\sup_{\cmod z \mathop = \size {\map \sigma T} \mathop + \delta} \norm {\paren {T - z I}^{-1} }_{\map B T} }\)





as $\norm {\ell_m}_{ {\map B X}^\ast} = 1$



Letting $m \to \infty$, we obtain:

$\ds \limsup_{m \mathop \to \infty} \paren {\norm {T^m}_{\map B X} }^{1 / m} \le \size {\map \sigma T} + \delta$
The result follows by $\delta \to 0$.
$\blacksquare$


Sources
2002: Peter D. Lax: Functional Analysis: $17.1$: Normed Algebras




