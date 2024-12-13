# 

Source: https://proofwiki.org/wiki/Relation_is_Antisymmetric_iff_Intersection_with_Inverse_is_Coreflexive



Theorem
Let $\RR$ be a relation on $S$.

Then:

$\RR$ is antisymmetric
if and only if:

$\RR \cap \RR^{-1}$ is coreflexive
where $\RR^{-1}$ is the inverse of $\RR$.
That is, if and only if:

$\RR \cap \RR^{-1} \subseteq \Delta_S$


Proof
Necessary Condition
Let $\RR$ be an antisymmetric relation.
Let $\tuple {a, b} \in \RR \cap \RR^{-1}$.
That means:

$\tuple {a, b} \in \RR$
and

$\tuple {a, b} \in \RR^{-1}$
which means, by definition of inverse relation:

$\tuple {b, a} \in \RR$
But as $\RR$ is antisymmetric, that means $a = b$.
Thus:

$\tuple {a, b} = \tuple {a, a}$
and so:

$\tuple {a, b} \in \Delta_S$
where $\Delta_S$ is the diagonal relation.
Thus from the definition of subset:

$\RR \cap \RR^{-1} \subseteq \Delta_S$
Hence, by definition, $\RR$ is coreflexive.
$\Box$


Sufficient Condition
Let $\RR \cap \RR^{-1}$ be coreflexive.
Hence by definition of coreflexive:

$\RR \cap \RR^{-1} \subseteq \Delta_S$
Let $\tuple {a, b} \in \RR$ and $\tuple {b, a} \in \RR$.
That is, by definition of inverse relation:

$\tuple {a, b} \in \RR$
and

$\tuple {a, b} \in \RR^{-1}$
That is:

$\tuple {a, b} \in \RR \cap \RR^{-1}$
But as $\RR \cap \RR^{-1} \subseteq \Delta_S$ it follows that $a = b$.
So by definition $\RR$ is antisymmetric.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order




