# 

Source: https://proofwiki.org/wiki/Equivalence_iff_Diagonal_and_Inverse_Composite



Theorem
Let $\RR$ be a relation on $S$.

Then $\RR$ is an equivalence relation on $S$ if and only if:

$\Delta_S \subseteq \RR$
and:

$\RR = \RR \circ \RR^{-1}$


Proof
Necessary Condition
Let $\RR$ be an equivalence relation.
Then by definition, it is reflexive, symmetric and transitive.

As $\RR$ is reflexive, we have $\Delta_S \subseteq \RR$ from Relation Contains Diagonal Relation iff Reflexive.
As $\RR$ is transitive:

$\RR \circ \RR \subseteq \RR$
from Relation contains Composite with Self iff Transitive.
But as $\RR$ is symmetric:

$\RR = \RR^{-1}$
from Relation equals Inverse iff Symmetric.
Thus:

$\RR \circ \RR^{-1} \subseteq \RR$

Now we need to show that $\RR \subseteq \RR \circ \RR^{-1}$:
Let $\tuple {x, y} \in \RR$.
Then as $\RR$ is reflexive:

$\tuple {x, y} \in \RR \land \tuple {y, y} \in \RR$
and so:

$\tuple {x, y} \in \RR \circ \RR$
As $\RR = \RR^{-1}$, it follows that:

$\RR \subseteq \RR \circ \RR^{-1}$

So it has been shown:

$\Delta_S \subseteq \RR$ and $\RR = \RR \circ \RR^{-1}$
$\Box$


Sufficient Condition
Now, let $\Delta_S \subseteq \RR$ and $\RR = \RR \circ \RR^{-1}$.
From Relation Contains Diagonal Relation iff Reflexive, $\RR$ is reflexive.

Let $\tuple {x, y} \in \RR$.
Then:

$\tuple {x, y} \in \RR \circ \RR^{-1}$
So:

$\exists z \in S: \tuple {x, z} \in \RR, \tuple {z, y} \in \RR^{-1}$
and so:

$\tuple {y, z} \in \RR$
That is, by definition, $\RR$ is transitive.

As $\tuple {x, z} \in \RR$:

$\tuple {z, x} \in \RR^{-1}$
and so:

$\tuple {y, x} \in \RR$
So it follows that $\RR$ is symmetric.

Thus $\RR$ is reflexive, symmetric and transitive.
Therefore, by definition, $\RR$ is an equivalence relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 10$: Equivalence Relations: Exercises $10.7$




