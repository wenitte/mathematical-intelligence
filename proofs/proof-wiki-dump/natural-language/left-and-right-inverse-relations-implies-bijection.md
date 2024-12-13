# 

Source: https://proofwiki.org/wiki/Left_and_Right_Inverse_Relations_Implies_Bijection

Theorem
Let $\RR \subseteq S \times T$ be a relation on a cartesian product $S \times T$.
Let:

$I_S$ be the identity mapping on $S$
$I_T$ be the identity mapping on $T$.
Let $\RR^{-1}$ be the inverse relation of $\RR$.

Let $\RR$ be such that:

$\RR^{-1} \circ \RR = I_S$ and
$\RR \circ \RR^{-1} = I_T$
where $\circ$ denotes composition of relations.

Then $\RR$ is a bijection.


Proof
Let $\RR \subseteq S \times T$ be such that:

$\RR^{-1} \circ \RR = I_S$
and:

$\RR \circ \RR^{-1} = I_T$.
From Condition for Composite Relation with Inverse to be Identity, we have that:

$\RR$ is many-to-one
$\RR$ is right-total
$\RR^{-1}$ is many-to-one
$\RR^{-1}$ is right-total.

From Inverse of Many-to-One Relation is One-to-Many, it follows that both $\RR$ and $\RR^{-1}$ are by definition one-to-one.
From Inverses of Right-Total and Left-Total Relations, it also follows that both $\RR$ and $\RR^{-1}$ are left-total.

By definition, an injection is a relation which is:

One-to-one
left-total.
Also by definition, a surjection is a relation which is:

Left-total
Many-to-one
Right-total.
It follows that $\RR$ is both an injection and a surjection, and so by definition a bijection.

By the same coin, the same applies to $\RR^{-1}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(f)}$




