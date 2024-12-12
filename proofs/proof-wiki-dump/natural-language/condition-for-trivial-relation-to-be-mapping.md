# 

Source: https://proofwiki.org/wiki/Condition_for_Trivial_Relation_to_be_Mapping

Theorem
Let $S$ and $T$ be sets.
Let $\RR = S \times T$ be the trivial relation in $S$ to $T$.

Then $\RR$ is a mapping if and only if either:

$(2): \card S = 0$
or:

$(1): \card T = 1$
where $\card {\, \cdot \,}$ denotes cardinality.


Proof
By definition, the trivial relation in $S$ to $T$ is the set:

$\RR = \set {\tuple {s, t}: s \in S, t \in T}$

Proof by Cases:


$(1)$: Let $\card S = 0$.
That is, $S = \O$.
By definition of the trivial relation, in this case $\RR = \O$.
This is the empty mapping.
From Empty Mapping is Mapping, this is a mapping.


$(2)$: Let $\card S \ne 0$.
That is, $S \ne \O$.


$(2) \, \text (a)$: Let $\card T = 0$.
That is, $T = \O$.
From Relation to Empty Set is Mapping iff Domain is Empty, $\RR$ cannot be a mapping for $S \ne \O$.


$(2) \, \text (b)$: Let $\card T = 1$.
So, let $T = \set t$.
Then the trivial relation in $S$ to $T$ is:

$\RR = \set {\tuple {s, t}: s \in S}$
We have that each element of $S$ is associated with exactly one element of $T$.
Hence $\RR$ is a mapping by definition.


$(2) \, \text (c)$: Let $\card T > 1$.
Then:

$\exists t_1, t_2 \in T: t_1 \ne t_2$
We have that $S \ne \O$, so $\exists s \in S$.
Thus by definition of trivial relation:

$\tuple {s, t_1} \in \RR$
and:

$\tuple {s, t_2} \in \RR$
but $t_1 \ne t_2$.
Thus $\RR$ is not a mapping.

Hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Functions




