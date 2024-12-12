# 

Source: https://proofwiki.org/wiki/Countable_Union_of_Measurable_Sets_as_Disjoint_Union_of_Measurable_Sets

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\sequence {A_n}_{n \in \N}$ be a sequence of $\Sigma$-measurable sets.

Then there exists a sequence of $\Sigma$-measurable pairwise disjoint sets $\sequence {B_n}_{n \in \N}$ such that: 

$\ds \bigcup_{n \mathop = 1}^\infty A_n = \bigcup_{n \mathop = 1}^\infty B_n$
That is: 

any countable union of $\Sigma$-measurable sets can be rewritten as the countable union of pairwise disjoint $\Sigma$-measurable sets.


Proof
Define the sequence $\sequence {B_i}_{i \mathop \in \N}$ by: 

$B_1 = A_1$
and: 

$\ds B_n = A_n \setminus \paren {\bigcup_{i \mathop = 1}^{n - 1} A_i}$
for $n > 1$.

We show that each $B_n$ is $\Sigma$-measurable.
Since $A_1 \in \Sigma$, we immediately get $B_1 \in \Sigma$.
By De Morgan's Laws, we have: 

$\ds B_n = A_n \cap \paren {\bigcap_{i \mathop = 1}^{n - 1} \paren {X \setminus A_i} }$
Note that since $A_i \in \Sigma$ for each $i$, we have: 

$X \setminus A_i \in \Sigma$ for each $i$
by the definition of a $\sigma$-algebra.
Then from Sigma-Algebra Closed under Countable Intersection, we have: 

$\ds \bigcap_{i \mathop = 1}^{n - 1} \paren {X \setminus A_i} \in \Sigma$
Applying Sigma-Algebra Closed under Countable Intersection again we have: 

$\ds B_n = A_n \cap \paren {\bigcap_{i \mathop = 1}^{n - 1} \paren {X \setminus A_i} } \in \Sigma$
for $n > 1$.
So each $B_n$ is $\Sigma$-measurable.

We now show that $\sequence {B_n}_{n \mathop \in \N}$ is a pairwise disjoint family of sets.
Since: 

$\ds B_n = A_n \setminus \paren {\bigcup_{i \mathop = 1}^{n - 1} A_i}$
By the definition of set difference, we have: 

$\ds B_n \cap \paren {\bigcup_{i \mathop = 1}^{n - 1} A_i} = \O$
so:

$B_n$ is disjoint to $A_1, A_2, \ldots, A_{n - 1}$ for each $n > 1$.
Since $B_i \subseteq A_i$ for each $i$, we therefore have: 

$B_n$ is disjoint to $B_1, B_2, \ldots, B_{n - 1}$ for each $n > 1$.
So if $i \ne j$, we have, setting $n = \max \set {i, j}$ and $m = \min \set {i, j}$:

$B_n$ is disjoint to $B_m$.
So:

$\sequence {B_n}_{n \mathop \in \N}$ is a pairwise disjoint family of sets.
That is: 

$B_n \cap B_m = B_i \cap B_j = \O$ whenever $i \ne j$.

It remains to show that: 

$\ds \bigcup_{n \mathop = 1}^\infty A_n = \bigcup_{n \mathop = 1}^\infty B_n$
Let: 

$\ds x \in \bigcup_{n \mathop = 1}^\infty B_n$
then:

$\ds x \in B_n$ for some $n$.
That is: 

$\ds x \in A_n \setminus \paren {\bigcup_{i \mathop = 1}^{n - 1} A_i}$ for some $n$.
so:

$x \in A_n$
giving: 

$\ds x \in \bigcup_{n \mathop = 1}^\infty A_n$
So:

$\ds \bigcup_{n \mathop = 1}^\infty B_n \subseteq \bigcup_{n \mathop = 1}^\infty A_n$
Now let: 

$\ds x \in \bigcup_{n \mathop = 1}^\infty A_n$
then: 

$\ds x \in A_n$ for some $n$.
By the well-ordering principle, there exists a least $m$ such that $x \in A_m$.
Then: 

$\ds x \not \in \bigcup_{i \mathop = 1}^{m - 1} A_i$
By the definition of set difference, we have: 

$\ds x \in A_m \setminus \paren {\bigcup_{i \mathop = 1}^{m - 1} A_i} = B_m$
so:

$\ds x \in \bigcup_{m \mathop = 1}^\infty B_m$
giving:

$\ds \bigcup_{n \mathop = 1}^\infty A_n \subseteq \bigcup_{n \mathop = 1}^\infty B_n$
So we obtain: 

$\ds \bigcup_{n \mathop = 1}^\infty A_n = \bigcup_{n \mathop = 1}^\infty B_n$
$\blacksquare$





