# 

Source: https://proofwiki.org/wiki/Limit_of_Sequence_is_Accumulation_Point

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $A \subseteq S$.

Let $\sequence {x_n}$ be a sequence in $A$.
Let $\alpha$ be a limit of $\sequence {x_n}$.

Then $\alpha$ is also an accumulation point of $\sequence {x_n}$.


Proof
Let $\alpha$ be a limit of $\sequence {x_n}$.
Then by definition of limit, $\sequence {x_n}$ converges to $\alpha$.
By definition of convergence that means:

for any open set $U \subseteq T$ such that $\alpha \in U$: $\exists N \in \R: n > N \implies x_n \in U$.
As there is an infinite number of values of $n > N$, there are an infinite number of terms of $\sequence {x_n}$.
Hence the result, from definition of accumulation point.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Limit Points




