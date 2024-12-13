# 

Source: https://proofwiki.org/wiki/Relation_is_Total_iff_Union_with_Inverse_is_Trivial_Relation



Theorem
Let $\RR$ be a relation on $S$.

Then $\RR$ is a total relation if and only if:

$\RR \cup \RR^{-1} = S \times S$
where:

$\RR^{-1}$ is the inverse of $\RR$.
$S \times S$ is the trivial relation on $S$.


Proof
Necessary Condition
Let $\RR$ be a total relation.
By definition of relation, both $\RR \subseteq S \times S$ and $\RR^{-1} \subseteq S \times S$.
So from Union is Smallest Superset (and indeed, trivially) $\RR \cup \RR^{-1} \subseteq S \times S$.

Let $\tuple {a, b} \in S \times S$.
As $\RR$ is total, either:

$\tuple {a, b} \in \RR$
or:

$\tuple {b, a} \in \RR$

From the definition of inverse relation, this means that either:

$\tuple {a, b} \in \RR$
or:

$\tuple {a, b} \in \RR^{-1}$
That is:

$\tuple {a, b} \in \RR \cup \RR^{-1}$
and so by definition of subset:

$S \times S \subseteq \RR \cup \RR^{-1}$

Hence, by definition of set equality:

$\RR \cup \RR^{-1} = S \times S$
$\Box$


Sufficient Condition
Let $\RR \cup \RR^{-1} = S \times S$.
Let $\tuple {a, b} \in S \times S$.

Then by definition of set union:

$\tuple {a, b} \in \RR$
or:

$\tuple {a, b} \in \RR^{-1}$

That is, by definition of inverse relation:

$\tuple {a, b} \in R$
or:

$\tuple {b, a} \in R$

So by definition $\RR$ is total.
$\blacksquare$


Also see
Relation is Connected iff Union with Inverse and Diagonal is Trivial Relation


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order




