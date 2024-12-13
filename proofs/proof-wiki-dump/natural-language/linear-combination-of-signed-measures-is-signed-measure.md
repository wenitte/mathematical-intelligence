# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Signed_Measures_is_Signed_Measure



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ and $\nu$ be signed measures on $\struct {X, \Sigma}$.
Let $\alpha, \beta \in \overline \R$. 
Suppose that the sum: 

$\alpha \map \mu A + \beta \map \nu A$
is well-defined for each $A \in \Sigma$. 

Then: 

$\xi = \alpha \mu + \beta \nu$ is a signed measure.


Proof
We verify both of the conditions for a signed measure.


Proof of $(1)$
We have:














\(\ds \map \xi \O\)

\(=\)







\(\ds \alpha \map \mu \O + \beta \map \nu \O\)




















\(\ds \)

\(=\)







\(\ds \alpha \times 0 + \beta \times 0\)





since $\mu$ and $\nu$ are signed measures we have $\map \mu \O = \map \nu \O = 0$














\(\ds \)

\(=\)







\(\ds 0\)









verifying $(1)$ for $\xi$.
$\Box$

Proof of $(2)$
Let $\sequence {D_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint $\Sigma$-measurable sets. 
Then: 














\(\ds \map \xi {\bigcup_{n \mathop = 1}^\infty D_n}\)

\(=\)







\(\ds \alpha \map \mu {\bigcup_{n \mathop = 1}^\infty D_n} + \beta \map \nu {\bigcup_{n \mathop = 1}^\infty D_n}\)




















\(\ds \)

\(=\)







\(\ds \alpha \sum_{n \mathop = 1}^\infty \map \mu {D_n} + \beta \sum_{n \mathop = 1}^\infty \map \nu {D_n}\)





since $\mu$ and $\nu$ are countably additive














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\alpha \map \mu {D_n} + \beta \map \nu {D_n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \xi {D_n}\)









verifying $(2)$ for $\xi$.
$\Box$

So $\xi$ is a signed measure.
$\blacksquare$





