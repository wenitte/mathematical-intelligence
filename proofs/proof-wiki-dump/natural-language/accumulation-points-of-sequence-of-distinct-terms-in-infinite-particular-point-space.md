# 

Source: https://proofwiki.org/wiki/Accumulation_Points_of_Sequence_of_Distinct_Terms_in_Infinite_Particular_Point_Space

Theorem
Let $T = \struct {S, \tau_p}$ be an infinite particular point space.
Let $U \in \tau_p$ be a countably infinite open set of $T$.
Let the elements of $U$ be arranged into a sequence $\sequence {a_i}$ of distinct terms in $T$.

Then while every element $x$ of $U$ such that $x \ne p$ is a limit point of $U$, there exists no $x \in U$ such that $x$ is an accumulation point of $\sequence {a_i}$.


Proof
We note from Limit Points in Particular Point Space that every $x \in U$ such that $x \ne p$ is a limit point of $U$.

Let $\sequence {a_i}$ be the (infinite) sequence in $T$ whose terms are the elements of $U$.
Aiming for a contradiction, suppose $\beta \in S$ is an accumulation point of $\sequence {a_i}$.
Then from Accumulation Points for Sequence in Particular Point Space, $\beta$ is such that an infinite number of terms of $\sequence {a_i}$ are equal either to $\beta$ or to $p$.
But this contradicts the assertion that $\sequence {a_i}$ is a sequence of distinct terms.
Hence no element of $U$ is an accumulation point of $\sequence {a_i}$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $9 \text { - } 10$. Infinite Particular Point Topology: $1$




