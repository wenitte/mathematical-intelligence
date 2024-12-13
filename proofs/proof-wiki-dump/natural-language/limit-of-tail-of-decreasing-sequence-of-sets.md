# 

Source: https://proofwiki.org/wiki/Limit_of_Tail_of_Decreasing_Sequence_of_Sets

Theorem
Let $X$ be a set.
Let $\sequence {E_n}_{n \mathop \in \N}$ be a decreasing sequence of subsets of $X$ such that: 

$E_n \downarrow E$
where $E_n \downarrow E$ denotes the limit of decreasing sequence of sets.

Then for each $m \in \N$ we have: 

$E_{n + m} \downarrow E$


Proof
Let $m \in \N$.
From Tail of Decreasing Sequence of Sets is Decreasing, we have: 

$\sequence {E_{n + m} }_{n \mathop \in \N}$ is a decreasing sequence of sets.
Since: 

$E_n \downarrow E$
we have: 

$\ds \bigcap_{n \mathop = 1}^\infty E_n = E$
We show that: 

$\ds \bigcap_{n \mathop = 1}^\infty E_{n + m} = E$
That is: 

$\ds \bigcap_{n \mathop = m + 1}^\infty E_n = E$
Clearly we have: 

$\ds \bigcap_{n \mathop = 1}^\infty E_n \subseteq \bigcap_{n \mathop = m + 1}^\infty E_n$
from Intersection is Decreasing.
Now let: 

$\ds x \in \bigcap_{n \mathop = m + 1}^\infty E_n$
Then: 

$x \in E_n$ for all $n \in \N$ for all $n \ge m + 1$
and in particular: 

$x \in E_{m + 1}$
Since $\sequence {E_n}_{n \mathop \in \N}$ is a decreasing sequence of sets, we have: 

$E_{m + 1} \subseteq E_n$ for all $n \in \N$ with $n < m + 1$.
So, we actually have: 

$x \in E_n$ for all $n \in \N$.
So, from the definition of set intersection, we have: 

$\ds x \in \bigcap_{n \mathop = 1}^\infty E_n$
So, from the definition of set inclusion, we have: 

$\ds \bigcap_{n \mathop = m + 1}^\infty E_n \subseteq \bigcap_{n \mathop = 1}^\infty E_n$
So we have: 

$\ds \bigcap_{n \mathop = 1}^\infty E_{n + m} = E$
$\blacksquare$





