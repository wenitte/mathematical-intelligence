# 

Source: https://proofwiki.org/wiki/Jordan_Decomposition_Theorem/Lemma



Lemma
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$.
Let $\tuple {P, N}$ be a Hahn decomposition of $\mu$. 
For each $A \in \Sigma$, define: 

$\map {\mu^+} A = \map \mu {P \cap A}$
and:

$\map {\mu^-} A = -\map \mu {N \cap A}$
Then:

$\mu^+$ and $\mu^-$ are signed measures.


Proof
We verify both of the conditions given in the definition of a signed measure.

Proof of $(1)$
We have, from Intersection with Empty Set: 

$\map {\mu^+} \O = \map \mu \O = 0$
verifying $(1)$ for $\mu^+$.
We also have:

$\map {\mu^-} \O = -\map \mu \O = 0$
verifying $(2)$ for $\mu^-$.
$\Box$


Proof of $(2)$
Let $\sequence {D_n}_{n \in \N}$ be a sequence of pairwise disjoint $\Sigma$-measurable sets. 
We have: 














\(\ds \map {\mu^+} {\bigcup_{n \mathop = 1}^\infty D_n}\)

\(=\)







\(\ds \map \mu {P \cap \bigcup_{n \mathop = 1}^\infty D_n}\)




















\(\ds \)

\(=\)







\(\ds \map \mu {\bigcup_{n \mathop = 1}^\infty \paren {P \cap D_n} }\)





Intersection Distributes over Union



Since:

$D_i \cap D_j = \O$ whenever $i \ne j$
we have: 

$\paren {P \cap D_i} \cap \paren {P \cap D_j} = \O$
from Intersection with Empty Set.
So, since $\mu$ is countably additive, we have: 














\(\ds \map \mu {\bigcup_{n \mathop = 1}^\infty \paren {P \cap D_n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \mu {P \cap D_n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\mu^+} {D_n}\)









That is: 

$\ds \map {\mu^+} {\bigcup_{n \mathop = 1}^\infty D_n} = \sum_{n \mathop = 1}^\infty \map {\mu^+} {D_n}$
for any sequence $\sequence {D_n}_{n \mathop \in \N}$ of pairwise disjoint $\Sigma$-measurable sets, so $(2)$ is satisfied for $\mu^+$.
We also have: 














\(\ds \map {\mu^-} {\bigcup_{n \mathop = 1}^\infty D_n}\)

\(=\)







\(\ds -\map \mu {N \cap \bigcup_{n \mathop = 1}^\infty D_n}\)




















\(\ds \)

\(=\)







\(\ds -\map \mu {\bigcup_{n \mathop = 1}^\infty \paren {N \cap D_n} }\)





Intersection Distributes over Union



As before, the sets $N \cap D_n$ are pairwise disjoint. 
Since $\mu$ is countably additive, we have: 














\(\ds -\map \mu {\bigcup_{n \mathop = 1}^\infty \paren {N \cap D_n} }\)

\(=\)







\(\ds -\sum_{n \mathop = 1}^\infty \map \mu {N \cap D_n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {-\map \mu {N \cap D_n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\mu^-} {D_n}\)









That is: 

$\ds \map {\mu^-} {\bigcup_{n \mathop = 1}^\infty D_n} = \sum_{n \mathop = 1}^\infty \map {\mu^-} {D_n}$
for any sequence $\sequence {D_n}_{n \mathop \in \N}$ of pairwise disjoint $\Sigma$-measurable sets, so $(2)$ is satisfied for $\mu^-$.
$\Box$

So $\mu^+$ and $\mu^-$ satisfy both conditions $(1)$ and $(2)$, and so are both signed measures.
$\blacksquare$





