# 

Source: https://proofwiki.org/wiki/Restriction_of_Well-Founded_Relation_is_Well-Founded

Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $\RR$ be a well-founded relation on $S$.
Let $T$ be a subset or subclass of $S$.
Let $\RR'$ be the restriction of $\RR$ to $T$.

Then $\preceq'$ is a well-founded relation on $T$.


Proof
Let $A$ be a non-empty subset of $T$.
By Subset Relation is Transitive, $A$ is a non-empty subset of $S$.
Since $\RR$ is a well-founded relation on $S$, $A$ has a minimal element $m$ under $\RR$.

Let $x \in A$.
Let $x \mathrel {\RR'} m$.
By the definition of restriction:

$x \mathrel \RR m$
Thus by the definition of minimal element:

$x = m$
As $x$ is an arbitrary element of $A$, this holds for all $x \in A$.
Hence by definition $m$ is a minimal element of $A$ under $\RR'$.
As $A$ is an arbitrary non-empty subset of $T$, this holds for all non-empty subsets of $T$.
Hence $\RR'$ is a well-founded relation on $T$.
$\blacksquare$





