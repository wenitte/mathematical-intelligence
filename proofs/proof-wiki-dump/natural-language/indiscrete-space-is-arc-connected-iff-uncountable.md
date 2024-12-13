# 

Source: https://proofwiki.org/wiki/Indiscrete_Space_is_Arc-Connected_iff_Uncountable

Theorem
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space.

Then $T$ is arc-connected if and only if $S$ is an uncountable set.


Proof
Let $T = \struct {S, \set {\O, S} }$ be an indiscrete topological space such that $S$ is uncountable.
Let $a, b \in S$.

Consider an injection $f: \closedint 0 1 \to S$ such that $\map f 0 = a$ and $\map f 1 = b$.
This can always be found because $S$ is itself uncountable.

From Mapping to Indiscrete Space is Continuous, we have that $f$ is ‎continuous.
Thus $T$ is arc-connected.

Now suppose $S$ is an indiscrete topological space which is arc-connected.
Then there exists an injection $f: \closedint 0 1 \to S$ such that $\map f 0 = a$ and $\map f 1 = b$.

This can only exist if $S$ is uncountable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $4$. Indiscrete Topology: $9$




