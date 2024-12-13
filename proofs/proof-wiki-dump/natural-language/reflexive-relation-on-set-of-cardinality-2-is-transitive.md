# 

Source: https://proofwiki.org/wiki/Reflexive_Relation_on_Set_of_Cardinality_2_is_Transitive

Theorem
Let $S$ be a set whose cardinality is equal to $2$:

$\card S = 2$
Let $\odot \subseteq S \times S$ be a reflexive relation on $S$.

Then $\odot$ is also transitive.


Proof
Without loss of generality, let $S = \set {a, b}$.
Let $\odot$ be reflexive.
By definition of reflexive relation:

$\Delta_S \subseteq \odot$
where $\Delta_S$ is the diagonal relation:

$\Delta_S = \set {\tuple {x, x}: x \in S}$
That is:

$\set {\tuple {a, a}, \tuple {b, b} } \subseteq \odot$
Suppose $\set {\tuple {a, a}, \tuple {b, b} } = \odot$.
Then by Diagonal Relation is Equivalence, $\odot$ is transitive.

Suppose there exists $\tuple {x, y} \in \odot$ such that $\tuple x \ne y$ and $\tuple {y, x} \notin \odot$.
Then:

$x \odot x, x \odot y \implies x \odot y$
and:

$x \odot y, y \odot y \implies x \odot y$
Now suppose there exists $\tuple {x, y} \in \odot$ such that $\tuple x \ne y$ and $\tuple {y, x} \in \odot$.

Then we have:

$x \odot y, y \odot x \implies x \odot x$
and:

$y \odot x, x \odot y \implies y \odot y$
which hold because $\odot$ is reflexive

Hence in all cases, a reflexive relation on $S$ is also transitive.
$\blacksquare$





