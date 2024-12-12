# 

Source: https://proofwiki.org/wiki/Composite_of_Connected_Relation_is_not_necessarily_Connected

Theorem
Let $A$ be a set.
Let $\RR$ and $\SS$ be connected relations on $A$.

Then their composite $\RR \circ \SS$ is not necessarily also connected.


Proof
Recall the definition of composition of relations:
Let $\RR_1 \subseteq S_1 \times T_1$ and $\RR_2 \subseteq S_2 \times T_2$ be relations.

Then the composite of $\RR_1$ and $\RR_2$ is defined and denoted as:

$\RR_2 \circ \RR_1 := \set {\tuple {x, z} \in S_1 \times T_2: \exists y \in S_2 \cap T_1: \tuple {x, y} \in \RR_1 \land \tuple {y, z} \in \RR_2}$


Proof by Counterexample
  
Let $A = \set {a, b, c}$.
Let $\RR$ be defined as:

$\RR = \set {\tuple {a, b}, \tuple {b, c}, \tuple {c, a} }$
Let $\SS$ be defined as $\RR^{-1}$, that is, the inverse of $\RR$:

$\SS = \set {\tuple {b, a}, \tuple {c, b}, \tuple {a, c} }$
Both $\RR$ and $\SS$ can be seen to be connected.

Then we have:

$\RR \circ \SS = \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c} }$

and it is immediately apparent that $\RR \circ \SS$ is not connected.
$\blacksquare$





