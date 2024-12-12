# 

Source: https://proofwiki.org/wiki/Bijective_Relation_has_Left_and_Right_Inverse

Theorem
Let $\RR \subseteq S \times T$ be a relation on a cartesian product $S \times T$.
Let:

$I_S$ be the identity mapping on $S$
$I_T$ be the identity mapping on $T$.
Let $\RR^{-1}$ be the inverse relation of $\RR$.

Let $\RR$ be a bijection.
Then:

$\RR^{-1} \circ \RR = I_S$
and

$\RR \circ \RR^{-1} = I_T$
where $\circ$ denotes composition of relations.


Proof
Suppose $\RR$ is a bijection.
Then by definition:

$(1): \quad \RR$ is a surjection and therefore right-total.
$(2): \quad \RR$ is a mapping and therefore left-total.
$(3): \quad \RR$ is a one-to-one relation and therefore also both a many-to-one relation and a one-to-many relation.

By Inverses of Right-Total and Left-Total Relations, we have that $\RR^{-1}$ is also both right-total and left-total.
By Inverse of Many-to-One Relation is One-to-Many we have that $\RR^{-1}$ is also both a many-to-one relation and a one-to-many relation.

From Condition for Composite Relation with Inverse to be Identity, it follows that:

$\RR^{-1} \circ \RR = I_S$
and:

$\RR \circ \RR^{-1} = I_T$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(f)}$




