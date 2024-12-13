# 

Source: https://proofwiki.org/wiki/Reflexive_Relation_on_Singleton_is_Well-Ordering

Theorem
Let $S = \set s$ be a singleton.
Let $\RR$ be a reflexive relation on $S$.

Then $\RR$ is a well-ordering on $S$.


Proof
Let $S = \set s$.
By definition of reflexive relation:

$s \mathrel \RR s$

It trivially holds that:

$\forall a, b \in S: a \mathrel \RR b \land b \mathrel \RR a \implies a = b$
and so $\RR$ is antisymmetric.

It also trivially holds that:

$\forall a, b, c \in S: a \mathrel \RR b \land b \mathrel \RR c \implies a \mathrel \RR c$

Thus $\RR$ is an ordering on $S$.

We also have trivially that:

$\forall a, b \in S: a \mathrel \RR b \lor b \mathrel \RR a$
and so $\RR$ is a total ordering on $S$.

Finally from Finite Totally Ordered Set is Well-Ordered:

$\struct {S, \RR}$ is a well-ordered set.
Hence the result.
$\blacksquare$





