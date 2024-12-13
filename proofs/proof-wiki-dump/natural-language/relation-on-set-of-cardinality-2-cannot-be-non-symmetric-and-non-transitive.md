# 

Source: https://proofwiki.org/wiki/Relation_on_Set_of_Cardinality_2_cannot_be_Non-Symmetric_and_Non-Transitive

Theorem
Let $S$ be a set whose cardinality is equal to $2$:

$\card S = 2$
Let $\odot \subseteq S \times S$ be a relation on $S$.

Then it is not possible for $\odot$ to be not symmetric and also not transitive.


Proof
Without loss of generality, let $S = \set {a, b}$.
Let $\odot$ not be symmetric.
Aiming for a contradiction, suppose $\odot$ is not transitive.

As $\odot$ is not symmetric:

$\exists \tuple {x, y} \in \odot: \tuple {y, x} \notin \odot$
Thus there are two possibilities:

$\exists \tuple {a, b} \in \odot: \tuple {b, a} \notin \odot$
$\exists \tuple {b, a} \in \odot: \tuple {a, b} \notin \odot$
Without loss of generality, let $\tuple {a, b} \in \odot$.

As $\odot$ is not transitive, either:

$\exists \tuple {x, a} \in \odot: \tuple {x, b} \notin \odot$
or:

$\exists \tuple {b, y} \in \odot: \tuple {a, y} \notin \odot$

In the first case, $x \ne b$ as that would make $\odot$ symmetric.
In the second case, $y \ne a$ as that would also make $\odot$ symmetric.

Hence $x = a$ and $y = b$, and we have either:

$\exists \tuple {a, a} \in \odot: \tuple {a, b} \notin \odot$
or:

$\exists \tuple {b, b} \in \odot: \tuple {a, b} \notin \odot$
But it has been established that $\tuple {a, b} \in \odot$.
From this contradiction it follows that $\odot$ is transitive.

Hence it is not possible for $\odot$ to be neither symmetric nor transitive.
$\blacksquare$





