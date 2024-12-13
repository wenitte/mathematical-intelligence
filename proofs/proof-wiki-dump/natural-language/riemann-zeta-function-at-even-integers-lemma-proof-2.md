# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_at_Even_Integers/Lemma/Proof_2

Lemma
Let $x \in \R$ be such that $\size x < 1$.
Then:

$\ds \pi x \cot {\pi x} = 1 - 2  \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n}$
where $\zeta$ denotes the Riemann zeta function.


Proof
From Laurent Series Expansion for Cotangent Function:

$\ds \pi \cot \pi z = \frac 1 z - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} z^{2 n - 1}$
where:

$z \in \C$ such that $\cmod z < 1$
$\zeta$ is the Riemann Zeta function.

Letting $x \in \R$ replace $z$, and multiplying through by $x$:














\(\ds \pi x \cot \pi x\)

\(=\)







\(\ds x \paren {\frac 1 x - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n - 1} }\)




















\(\ds \)

\(=\)







\(\ds 1 - 2 x \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n - 1}\)




















\(\ds \)

\(=\)







\(\ds 1 - 2 \sum_{n \mathop = 1}^\infty \map \zeta {2 n} x^{2 n}\)









$\blacksquare$





