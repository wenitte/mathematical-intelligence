# 

Source: https://proofwiki.org/wiki/Inverse_of_Right-Total_Relation_is_Left-Total



Theorem
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.
Let $\RR^{-1} \subseteq T \times S$ be the inverse of $\RR$.

Then:

$\RR$ is right-total if and only if $\RR^{-1}$ is left-total.


Proof
Sufficient Condition
Let $\RR$ be right-total.
Then by definition:

$\forall t \in T: \exists s \in S: \tuple {s, t} \in \RR$
By definition of the inverse of $\RR$, it follows that:

$\forall t \in T: \exists s \in S: \tuple {t, s} \in \RR^{-1}$
So by definition $\RR^{-1}$ is left-total.
$\Box$


Necessary Condition
Let $\RR^{-1}$ is left-total.
Then by definition:

$\forall t \in T: \exists s \in S: \tuple {t, s} \in \RR^{-1}$
and so:

$\forall t \in T: \exists s \in S: \tuple {s, t} \in \RR$
So by definition $\RR$ is right-total.
$\blacksquare$





