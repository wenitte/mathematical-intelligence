# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bijection/Definition_3_iff_Definition_5



Theorem
The following definitions of the concept of Bijection are equivalent:

Definition 3
A mapping $f: S \to T$ is a bijection if and only if:

the inverse $f^{-1}$ of $f$ is a mapping from $T$ to $S$.
Definition 5
A relation $f \subseteq S \times T$ is a bijection if and only if:

$(1): \quad$ for each $x \in S$ there exists one and only one $y \in T$ such that $\tuple {x, y} \in f$
$(2): \quad$ for each $y \in T$ there exists one and only one $x \in S$ such that $\tuple {x, y} \in f$.


Proof
Necessary Condition
Let $f: S \to T$ be a mapping such that $f^{-1}: T \to S$ is also a mapping.
Then as $f$ is a mapping:

for all $x \in S$ there exists a unique $y \in T$ such that $\tuple {x, y} \in f$.
Similarly, as $f^{-1}$ is also a mapping:

for all $y \in T$ there exists a unique $x \in S$ such that $\tuple {y, x} \in f^{-1}$.
$\Box$


Sufficient Condition
Let $f \subseteq S \times T$ be a relation such that:

$(1): \quad$ for each $x \in S$ there exists one and only one $y \in T$ such that $\tuple {x, y} \in f$
$(2): \quad$ for each $y \in T$ there exists one and only one $x \in S$ such that $\tuple {x, y} \in f$.
Then by definition:

from $(1)$, $f$ is a mapping.
from $(2)$, $f^{-1}$ is a mapping.
$\blacksquare$





