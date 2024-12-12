# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bijection/Definition_3_iff_Definition_4



Theorem
The following definitions of the concept of Bijection are equivalent:

Definition 3
A mapping $f: S \to T$ is a bijection if and only if:

the inverse $f^{-1}$ of $f$ is a mapping from $T$ to $S$.
Definition 4
A mapping $f \subseteq S \times T$ is a bijection if and only if:

for each $y \in T$ there exists one and only one $x \in S$ such that $\tuple {x, y} \in f$.


Proof
Necessary Condition
Let $f^{-1}: T \to S$ be a mapping.
Then by definition:

$\forall y \in T: \exists x \in S: \tuple {y, x} \in f^{-1}$
Thus for all $y \in T$ there exists at least one $x \in S$ such that $\tuple {y, x} \in f^{-1}$.

Also by definition of mapping:

$\tuple {x_1, y} \in f^{-1} \land \tuple {x_2, y} \in f^{-1} \implies x_1 = x_2$
Thus for all $y \in T$ there exists at most one $x \in S$ such that $\tuple {y, x} \in f^{-1}$.

Hence it has been demonstrated that $y \in T$ there exists a unique $x \in S$ such that $\tuple {y, x} \in f^{-1}$.
$\Box$


Sufficient Condition
Let $f$ be such that for all $y \in T$ there exists a unique $x \in S$ such that $\tuple {y, x} \in f^{-1}$.
Then by definition $f^{-1}$ is a mapping.
$\blacksquare$





