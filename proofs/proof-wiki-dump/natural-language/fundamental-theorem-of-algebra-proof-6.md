# 

Source: https://proofwiki.org/wiki/Fundamental_Theorem_of_Algebra/Proof_6

Theorem
Every non-constant polynomial with coefficients in $\C$ has a root in $\C$.


Proof
Let $p: \C \to \C$ be a complex, non-constant polynomial.
Aiming for a contradiction, suppose that $\map p z \ne 0$ for all $z \in \C$.
Therefore by Reciprocal of Holomorphic Function $\dfrac 1 {\map p z}$ is entire.














\(\ds 0\)

\(<\)







\(\ds \cmod {\dfrac 1 {\map p 0} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\frac 1 {2 \pi i} \oint_{\set {w \in \C : \cmod w = R} } \frac {\rd z} {z \cdot \map p z} }\)





Cauchy's Integral Formula














\(\ds \)

\(\le\)







\(\ds \frac 1 {2 \pi} \max \limits_{\size z \mathop = R} \paren {\frac 1 {\size {z \cdot \map p z} } } 2 \pi R\)





Estimation Lemma for Contour Integrals














\(\ds \)

\(=\)







\(\ds \max \limits_{\size z \mathop = R} \frac 1 {\size {\map p z} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $R \to +\infty$



This is a contradiction.
$\blacksquare$





