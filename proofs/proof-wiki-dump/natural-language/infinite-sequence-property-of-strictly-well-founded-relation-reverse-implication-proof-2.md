# 

Source: https://proofwiki.org/wiki/Infinite_Sequence_Property_of_Strictly_Well-Founded_Relation/Reverse_Implication/Proof_2

Theorem
Let $\struct {S, \RR}$ be a relational structure.
Let $\RR$ be such that there exists no infinite sequence $\sequence {a_n}$ of elements of $S$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$

Then $\RR$ is a strictly well-founded relation.


Proof
Suppose $\RR$ is not a strictly well-founded relation.
Hence there exists $T \subseteq S$ such that $T$ has no strictly minimal element under $\RR$.

Let $a_0 \in T$.
We have that $a_0$ is not strictly minimal in $T$.
So:

$\exists a_1 \in T: a_1 \mathrel \RR a_0$

Similarly, $a_1$ is not strictly minimal in $T$.
So:

$\exists a_2 \in T: a_2 \mathrel \RR a_1$

Let $a_{k + 1}$ be an arbitrary element for which $a_{k + 1} \mathrel \RR a_k$.
In order to allow this to be possible in the infinite case, it is necessary to invoke the Axiom of Dependent Choice as follows:
Let $a_k \in T$.
Then as $a_k$ is not strictly minimal in $T$:

$\exists a_{k + 1} \in T: a_{k + 1} \mathrel \RR a_k$
Hence by definition $\RR$ is a right-total relation.

So, by the Axiom of Dependent Choice, it follows that:

$\forall n \in \N: \exists a_n \in T: a_{n + 1} \mathrel \RR a_n$
Thus we have been able to construct an infinite sequence $\sequence {a_n}$ in $T$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$.

It follows by the Rule of Transposition that if there is no infinite sequence $\sequence {a_n}$ of elements of $S$ such that:

$\forall n \in \N: a_{n + 1} \mathrel \RR a_n$
then $\RR$ is a strictly well-founded relation.
$\blacksquare$


Axiom of Dependent Choice
This theorem depends on the Axiom of Dependent Choice.
Although not as strong as the Axiom of Choice, the Axiom of Dependent Choice is similarly independent of the Zermelo-Fraenkel axioms.
The consensus in conventional mathematics is that it is true and that it should be accepted.





