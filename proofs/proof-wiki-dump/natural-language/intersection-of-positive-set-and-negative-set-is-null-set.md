# 

Source: https://proofwiki.org/wiki/Intersection_of_Positive_Set_and_Negative_Set_is_Null_Set

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$. 
Let $P$ be a $\mu$-positive set. 
Let $N$ be a $\mu$-negative set.

Then: 

$P \cap N$ is a $\mu$-null set.


Proof
Note that, from Sigma-Algebra Closed under Countable Intersection:

$P \cap N \in \Sigma$
We aim to show that:

for each $E \in \Sigma$ with $E \subseteq P \cap N$ we have $\map \mu E = 0$.
Note first that from Intersection is Subset, we have: 

$P \cap N \subseteq P$
so that: 

$E \subseteq P$
So, since $P$ is $\mu$-positive, we have: 

$\map \mu E \ge 0$
We also have that, from Intersection is Subset: 

$P \cap N \subseteq N$
so that: 

$E \subseteq N$
Since $N$ is $\mu$-negative, we have: 

$\map \mu E \le 0$
Since: 

$\map \mu E \ge 0$ and $\map \mu E \le 0$
we have: 

$\map \mu E = 0$
So:

for each $E \in \Sigma$ with $E \subseteq P \cap N$ we have $\map \mu E = 0$.
So:

$P \cap N$ is a $\mu$-null set.
$\blacksquare$





