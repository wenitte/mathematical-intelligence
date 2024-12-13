# 

Source: https://proofwiki.org/wiki/Reflexive_Reduction_of_Well-Founded_Relation_is_Strictly_Well-Founded_Relation

Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $\RR$ be a well-founded relation on $S$.
Let $\RR^{\ne}$ be the reflexive reduction of $\RR$.

Then $\RR^{\ne}$ is a strictly well-founded relation.


Proof
Let $T$ be a non-empty subset of $S$.
Since $\RR$ is a well-founded relation, $T$ has a minimal element with respect to the relation $\RR$.
That is, there is an element $m \in T$ such that $\forall x \in T: \paren {\tuple {x, m} \notin \RR} \lor \paren {x = m}$.

Let $x \in T$.
Then $\tuple {x, m} \notin \RR$ or $x = m$.
By the definition of reflexive reduction, $\RR^{\ne}$ is a subset of $\RR$.
Thus:

if $\tuple {x, m} \notin \RR$, it follows that $\tuple {x, m} \notin \RR^{\ne}$.
if $x = m$ then by Reflexive Reduction is Antireflexive, $\tuple {x, m} \notin \RR^{\ne}$.
As $x$ is arbitrary, this holds for all $x \in T$.
Thus $m$ is a strictly minimal element under $\RR^{\ne}$ in $T$.
As $T$ is arbitrary, this condition holds for all non-empty subsets of $S$.
That is, every non-empty subset of $S$ has a strictly minimal element under $\RR^{\ne}$.
Hence, by definition, $\RR^{\ne}$ is a strictly well-founded relation on $S$.
$\blacksquare$





