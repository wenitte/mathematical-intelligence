# 

Source: https://proofwiki.org/wiki/Null_Sets_Closed_under_Countable_Union/Signed_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$. 
Let $\sequence {N_i}_{i \mathop \in \N}$ be a sequence of $\mu$-null sets.

Then: 

$\ds N = \bigcup_{i \mathop = 1}^\infty N_i$
is a $\mu$-null set.


Proof
From Countable Union of Measurable Sets as Disjoint Union of Measurable Sets, there exists a sequence of pairwise disjoint $\Sigma$-measurable sets $\sequence {A_i}_{i \in \N}$ such that: 

$\ds N = \bigcup_{i \mathop = 1}^\infty A_i$
We now show that if $E \in \Sigma$ has $E \subseteq N$, then $\map \mu E = 0$. 
Write: 














\(\ds E\)

\(=\)







\(\ds E \cap N\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop = 1}^\infty \paren {E \cap A_i}\)





Intersection Distributes over Union of Family



Since $\mu$ is countably additive, we have:

$\ds \map \mu E = \sum_{i \mathop = 1}^\infty \map \mu {E \cap A_i}$
We have, from Intersection is Subset: 

$E \cap A_i \subseteq A_i \subseteq N_i$
Since $N_i$ is a $\mu$-null set, we have that: 

$\map \mu {E \cap A_i} = 0$ for each $i$.
So:

$\ds \map \mu E = \sum_{i \mathop = 1}^\infty \map \mu {E \cap A_i} = 0$
So:

for each $E \in \Sigma$ with $E \subseteq N$, we have $\map \mu E = 0$.
So $N$ is a $\mu$-null set.
$\blacksquare$





