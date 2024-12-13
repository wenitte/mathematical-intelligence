# 

Source: https://proofwiki.org/wiki/Inverse_Relation_is_Left_and_Right_Inverse_iff_Bijection



Theorem
Let $\RR \subseteq S \times T$ be a relation on a cartesian product $S \times T$.
Let:

$I_S$ be the identity mapping on $S$
$I_T$ be the identity mapping on $T$.
Let $\RR^{-1}$ be the inverse relation of $\RR$.

Then $\RR$ is a bijection if and only if:

$\RR^{-1} \circ \RR = I_S$
and

$\RR \circ \RR^{-1} = I_T$
where $\circ$ denotes composition of relations.


Proof
Necessary Condition
Let $\RR \subseteq S \times T$ be such that:

$\RR^{-1} \circ \RR = I_S$
and

$\RR \circ \RR^{-1} = I_T$.
From Left and Right Inverse Relations Implies Bijection, it follows that $\RR$ is a bijection.
$\Box$


Sufficient Condition
Suppose $\RR$ is a bijection.
From Bijective Relation has Left and Right Inverse we have that:

$\RR^{-1} \circ \RR = I_S$ and
$\RR \circ \RR^{-1} = I_T$.
$\Box$

Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(f)}$




