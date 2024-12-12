# 

Source: https://proofwiki.org/wiki/Characterization_of_Euclidean_Borel_Sigma-Algebra/Closed_equals_Compact

Theorem
Let $\CC^n$ and $\KK^n$ be the collections of closed and compact subsets of the Euclidean space $\struct {\R^n, \tau}$, respectively.

Then:

$\map \sigma {\CC^n} = \map \sigma {\KK^n}$
where $\sigma$ denotes generated $\sigma$-algebra.


Proof
By the Heine-Borel Theorem, $\KK^n \subseteq \CC^n$.
Thus from Generated Sigma-Algebra Preserves Subset, $\map \sigma {\KK^n} \subseteq \map \sigma {\CC^n}$.

Next, let, for all $n \in \N$, $\map {B_n^-} {\mathbf 0}$ be the closed ball of radius $n$ around $\mathbf 0$ in $\R^n$.
Observe that $\R^n = \ds \bigcup_{n \mathop \in \N} \map {B_n^-} {\mathbf 0}$.

Now let $U \in \CC^n$ be a closed subset of $\R^n$.
Then from Intersection with Subset is Subset and Intersection Distributes over Union:

$\ds U = U \cap \R^n = U \cap \bigcup_{n \mathop \in \N} \map {B_n^-} {\mathbf 0} = \bigcup_{n \mathop \in \N} \paren {U \cap \map {B_n^-} {\mathbf 0} }$
From Intersection of Closed Sets is Closed in Topological Space, $U \cap \map {B_n^-} {\mathbf 0}$ is closed for all $n \in \N$.
By definition, $\map {B_n^-} {\mathbf 0}$ is bounded.
Thus, by the Heine-Borel Theorem, $U \cap \map {B_n^-} {\mathbf 0}$ is compact.

Thus, any closed set is the countable union of compact sets.
By the third axiom for a $\sigma$-algebra, this means that $\CC^n \subseteq \map \sigma {\KK^n}$.
Now the definition of generated $\sigma$-algebra ensures that $\map \sigma {\CC^n} \subseteq \map \sigma {\KK^n}$.

Hence the result, by definition of set equality.
$\blacksquare$





