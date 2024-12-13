# 

Source: https://proofwiki.org/wiki/Relation_is_Connected_and_Reflexive_iff_Total



Theorem
Let $S$ be a set.
Let $\RR$ be a relation on $S$.

Then:

$\RR$ is both a connected relation and a reflexive relation
if and only if:

$\RR$ is a total relation.


Proof
Necessary Condition
Let $\RR$ be a relation on $S$ which is both connected and reflexive.
Let $\tuple {a, b} \in S \times S$.
Suppose $a = b$.
Then as $\RR$ is reflexive, $\tuple {a, b} \in \RR$.
Suppose $a \ne b$.
Then as $\RR$ is connected, $\tuple {a, b} \in \RR \lor \tuple {b, a} \in \RR$.
That is:

$\forall \tuple {a, b} \in S \times S: \tuple {a, b} \in \RR \lor \tuple {b, a} \in \RR$.
Thus $\RR$ is a total relation.
$\Box$


Sufficient Condition
Let $\RR$ be a total relation on $S$.
Then:

$\forall \tuple {a, b} \in S \times S: \tuple {a, b} \in \RR \lor \tuple {b, a} \in \RR$
by definition.
Thus:

$\forall \tuple {a, a} \in S \times S: \tuple {a, a} \in \RR$
and so $\RR$ is reflexive.
If $a \ne b$ the condition still holds, and so:

$\forall \tuple {a, b} \in S \times S: a \ne b \implies \tuple {a, b} \in \RR \lor \tuple {b, a} \in \RR$
and so $\RR$ is connected.
$\blacksquare$





