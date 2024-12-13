# 

Source: https://proofwiki.org/wiki/Reflexive_Closure_of_Transitive_Relation_is_Transitive



Theorem
Let $S$ be a set.
Let $\RR$ be a transitive relation.
Let $\RR^=$ be the reflexive closure of $\RR$.

Then $\RR^=$ is also transitive.


Proof
Let $a, b, c \in S$.
Suppose that $a \mathrel {\RR^=} b$ and $b \mathrel {\RR^=} c$.
If $a = b$, then since $b \mathrel {\RR^=} c$, also $a \mathrel {\RR^=} c$.
If $b = c$, then since $a \mathrel {\RR^=} b$, also $a \mathrel {\RR^=} c$.

The only case that remains is that $a \ne b$ and $b \ne c$.
Then by the definition of $\RR^=$, $a \mathrel \RR b$ and $b \mathrel \RR c$.

Since $\RR$ is transitive, it follows that:

$a \mathrel \RR c$
and hence also $a \mathrel {\RR^=} c$.

Thus $\RR^=$ is transitive.
$\blacksquare$


Also see
Reflexive Reduction of Transitive Antisymmetric Relation is Strict Ordering
Transitive Closure of Reflexive Relation is Reflexive


Sources
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.19$: Some Important Properties of Relations: Exercise $2$




