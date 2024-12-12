# 

Source: https://proofwiki.org/wiki/Distributional_Derivatives_of_Dirac_Delta_Distribution_do_not_Vanish

Theorem
Let $\delta \in \map {\DD'} \R$ be the Dirac delta distribution.

Then for any $n \in \N$ the distributional derivative $\delta^{\paren n}$ does not vanish.


Proof
Let $\phi \in \map \DD \R$ be a test function such that $\map \phi 0 \ne 0$.
Then:

$\forall n \in \N : \forall x \in \R : x^n \phi \in \map \DD \R$
By the definition of the distributional derivative:














\(\ds \map {\delta^{\paren n} } {x^n \phi}\)

\(=\)







\(\ds \paren {-1}^n \map \delta {\paren {x^n \phi}^{\paren n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^n \map \delta {\sum_{k \mathop = 0}^n \binom n k \paren {\dfrac {\d^k} {\d x^k} x^n} \phi^{\paren {n - k} } }\)





Leibniz's Rule in One Variable














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \binom n n n! \map \phi 0\)





Nth Derivative of Nth Power, Definition of Dirac Delta Distribution














\(\ds \)

\(\ne\)







\(\ds 0\)









$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




