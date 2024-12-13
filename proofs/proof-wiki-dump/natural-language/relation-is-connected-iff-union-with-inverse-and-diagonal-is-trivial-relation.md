# 

Source: https://proofwiki.org/wiki/Relation_is_Connected_iff_Union_with_Inverse_and_Diagonal_is_Trivial_Relation



Theorem
Let $\RR$ be a relation on $S$.

Then $\RR$ is a connected relation if and only if:

$\RR \cup \RR^{-1} \cup \Delta_S = S \times S$
where $\RR^{-1}$ is the inverse of $\RR$ and $\Delta_S$ is the diagonal relation.


Proof
Necessary Condition
Let $\RR$ be a connected relation.
By definition of relation:

$\RR \subseteq S \times S$
$\RR^{-1} \subseteq S \times S$
$\Delta_S \subseteq S \times S$
So from Union is Smallest Superset (and indeed, trivially):

$\RR \cup \RR^{-1} \cup \Delta_S \subseteq S \times S$

Let $\tuple {a, b} \in S \times S$.
Suppose $a = b$.
Then $\tuple {a, b} \in \Delta_S$ by definition of the diagonal relation.
Then by Set is Subset of Union:

$\tuple {a, b} \in \RR \cup \RR^{-1} \cup \Delta_S$

Suppose otherwise, that is, that $a \ne b$.
As $\RR$ is connected, either:

$\tuple {a, b} \in \RR$
or:

$\tuple {b, a} \in \RR$

From the definition of inverse relation, either:

$\tuple {a, b} \in \RR$
or:

$\tuple {a, b} \in \RR^{-1}$
That is:

$\tuple {a, b} \in R \cup \RR^{-1}$
Again by Set is Subset of Union:

$\tuple {a, b} \in \RR \cup \RR^{-1} \cup \Delta_S$

So, by definition of subset:

$S \times S \subseteq \RR \cup \RR^{-1} \cup \Delta_S$

Hence, by definition of set equality:

$\RR \cup \RR^{-1} \cup \Delta_S = S \times S$
$\Box$


Sufficient Condition
Let $\RR \cup \RR^{-1} \cup \Delta_S = S \times S$.
Let $\tuple {a, b} \in S \times S$.

Suppose $a \ne b$.
By definition of diagonal relation:

$\tuple {a, b} \notin \Delta_S$

So, by definition of set union:

$\tuple {a, b} \in \RR$
or:

$\tuple {a, b} \in \RR^{-1}$

That is, by definition of inverse relation:

$\tuple {a, b} \in \RR$
or:

$\tuple {b, a} \in \RR$

So by definition $\RR$ is connected.
$\blacksquare$


Also see
Relation is Total iff Union with Inverse is Trivial Relation




