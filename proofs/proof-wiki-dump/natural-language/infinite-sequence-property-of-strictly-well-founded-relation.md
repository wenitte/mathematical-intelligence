# 

Source: https://proofwiki.org/wiki/Infinite_Sequence_Property_of_Strictly_Well-Founded_Relation



Theorem
Let $\struct {S, \RR}$ be a relational structure.

Then $\RR$ is a strictly well-founded relation if and only if there is no infinite sequence $\sequence {a_n}$ of elements of $S$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$


Proof
Reverse Implication
Suppose $\RR$ is not a strictly well-founded relation.
So by definition there exists a non-empty subset $T$ of $S$ which has no strictly minimal element.
Let $a \in T$.
Since $a$ is not strictly minimal in $T$, we can find $b \in T: b \mathrel \RR a$.
This holds for all $a \in T$.
Hence the restriction $\RR \restriction_{T \times T}$ of $\RR$ to $T \times T$ is a right-total endorelation on $T$.
So, by the Axiom of Dependent Choice, it follows that there is an infinite sequence $\sequence {a_n}$ in $T$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$
It follows by the Rule of Transposition that if there is no infinite sequence $\sequence {a_n}$ of elements of $S$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$
then $\RR$ is a strictly well-founded relation.
$\Box$


Forward Implication
Let $\RR$ be a strictly well-founded relation.
Aiming for a contradiction, suppose there exists an infinite sequence $\sequence {a_n}$ in $S$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$
Let $T = \set {a_0, a_1, a_2, \ldots}$.
Let $a_k \in T$ be a strictly minimal element of $T$.
That is:

$\forall y \in T: y \not \mathrel \RR a_k$
But we have that:

$a_{k + 1} \mathrel \RR a_k$
So $a_k$ is not a strictly minimal element.
It follows by Proof by Contradiction that such an infinite sequence cannot exist.
$\blacksquare$


Axiom of Dependent Choice
This theorem depends on the Axiom of Dependent Choice, by way of Infinite Sequence Property of Strictly Well-Founded Relation/Reverse Implication.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Theorem $2$




