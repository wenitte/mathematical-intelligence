# 

Source: https://proofwiki.org/wiki/Generalized_Sum_is_Monotone


It has been suggested that this page be renamed.In particular: Nomenclature is not optimalTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $I$ be an indexing set.
Let $\family {a_i}_{i \mathop \in I}$ be an $I$-indexed family of positive real numbers.
That is, let $a_i \in \R_{\ge 0}$ for all $i \in I$.

Then, for every finite subset $F$ of $I$:

$\ds \sum_{i \mathop \in F} a_i \le \sum_{i \mathop \in I} a_i$
provided the generalized sum on the right converges.


Proof
Let $\struct {\FF, \subseteq}$ be the set of finite subsets of $I$, ordered by inclusion.
From Finite Subsets form Directed Set, $\struct {\FF, \subseteq}$ is directed.
For brevity write:

$\ds s_X = \sum_{i \mathop \in X} a_i$
for $X \in \FF$. 
Aiming for a contradiction, suppose that:

$\ds \sum_{i \mathop \in F} a_i > \sum_{i \mathop \in I} a_i$
for some finite subset $F$ of $I$.
Take $\epsilon > 0$ such that:

$\ds \sum_{i \mathop \in F} a_i > \sum_{i \mathop \in I} a_i + \epsilon$
Since $\family {s_X}_{X \mathop \in \FF}$ converges to $\ds \sum_{i \mathop \in I} a_i$, there exists a finite set $G$ such that if $X$ is a finite set with $X \supseteq G$, we have:

$\ds \size {\sum_{i \mathop \in X} a_i - \sum_{i \mathop \in I} a_i} < \epsilon$
Then in particular for $X = F \cup G$ we have:

$\ds \sum_{i \mathop \in F \cup G} a_i \le \sum_{i \mathop \in I} a_i + \epsilon < \sum_{i \mathop \in F} a_i$
However since $F \subseteq F \cup G$ and $a_i \in \R_{\ge 0}$ for each $i \in F \cup G$, we have:

$\ds \sum_{i \mathop \in F} a_i \le \sum_{i \mathop \in F \cup G} a_i < \sum_{i \mathop \in F} a_i$
a contradiction.
So:

$\ds \sum_{i \mathop \in F} a_i \le \sum_{i \mathop \in I} a_i$
for each $F \in \FF$.
$\blacksquare$





