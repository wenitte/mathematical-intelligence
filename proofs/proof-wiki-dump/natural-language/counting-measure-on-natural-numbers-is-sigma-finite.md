# 

Source: https://proofwiki.org/wiki/Counting_Measure_on_Natural_Numbers_is_Sigma-Finite

Theorem
Let $\mu$ be the counting measure on $\struct {\N, \map \PP \N}$. 
Then $\mu$ is $\sigma$-finite.


Proof
For each $n \in \N$, define: 

$X_n = \N \cap \closedint 1 n = \set {1, 2, \ldots, n}$
Since $X_n \subseteq \N$ for each $n$ from Intersection is Subset, we have that:

$X_n$ is $\map \PP \N$-measurable for each $n$.

We show that $\sequence {X_n}_{n \mathop \in \N}$ is an exhausting sequence in $\map \PP \N$ and that: 

$\map \mu {X_n} < \infty$ for each $n \in \N$.
From the definition of counting measure, we also have: 

$\map \mu {X_n} = n < \infty$
for each $n$. 
We have that: 

$\N \cap \closedint 1 n \subseteq \N \cap \closedint 1 {n + 1}$
from Set Intersection Preserves Subsets, so:

$X_n \subseteq X_{n + 1}$
So $\sequence {X_n}_{n \mathop \in \N}$ is an increasing sequence of $\map \PP \N$-measurable sets.
It now only remains to verify: 

$\ds \N = \bigcup_{n \mathop = 1}^\infty X_n$
We clearly have: 

$\ds \bigcup_{n \mathop = 1}^\infty X_n \subseteq \N$
For each $k \in \N$, we have $k \in X_k$, so we also have: 

$\ds \N \subseteq \bigcup_{n \mathop = 1}^\infty X_n$
so that: 

$\ds \N = \bigcup_{n \mathop = 1}^\infty X_n$
So $\sequence {X_n}_{n \mathop \in \N}$ is exhausting sequence in $\map \PP \N$ and that: 

$\map \mu {X_n} < \infty$ for each $n \in \N$.
So:

$\mu$ is $\sigma$-finite.
$\blacksquare$





