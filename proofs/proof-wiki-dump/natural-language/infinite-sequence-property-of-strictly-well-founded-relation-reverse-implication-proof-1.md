# 

Source: https://proofwiki.org/wiki/Infinite_Sequence_Property_of_Strictly_Well-Founded_Relation/Reverse_Implication/Proof_1

Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $\RR$ be such that there exists no infinite sequence $\sequence {a_n}$ of elements of $S$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$

Then $\RR$ is a strictly well-founded relation.


Proof
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
$\blacksquare$


Axiom of Dependent Choice
This theorem depends on the Axiom of Dependent Choice.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.





