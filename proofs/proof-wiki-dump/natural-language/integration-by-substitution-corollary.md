# 

Source: https://proofwiki.org/wiki/Integration_by_Substitution/Corollary

Corollary to Integration by Substitution
Let $f : \R \to \R$ be a real function.
Let $f$ be integrable.
Let $a$, $b$, and $c$ be real numbers.

Then:

$\ds \int_{a - c}^{b - c} \map f t \rd t = \int_a^b \map f {t - c} \rd t$


Proof
Let $\map \phi u = u - c$.
By Sum Rule for Derivatives, Derivative of Identity Function, and Derivative of Constant, we have:

$\map {\phi'} u = 1$

By Integration by Substitution:














\(\ds \int_{\map \phi a}^{\map \phi b} \map f t \rd t\)

\(=\)







\(\ds \int_a^b \map f {\map \phi u} \map {\phi'} u \rd u\)














\(\ds \leadsto \ \ \)





\(\ds \int_{a - c}^{b - c} \map f t \rd t\)

\(=\)







\(\ds \int_a^b \map f {u - c} \paren 1 \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \map f {u - c} \rd u\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \map f {t - c} \rd t\)









$\blacksquare$





