# 

Source: https://proofwiki.org/wiki/Countably_Compact_Space_is_Pseudocompact

Theorem
Let $T = \struct {S, \tau}$ be a countably compact space.

Then $T$ is a pseudocompact space.


Proof
Let $T = \struct {S, \tau}$ be a countably compact space.
Then every countable open cover of $S$ has a finite subcover.
By definition:

$T$ is pseudocompact if and only if every continuous real-valued function on $S$ is bounded.
Let $f: S \to \R$ be such that $f$ is continuous.
Consider the sets:

$S_n = \set {x \in S: \size {\map f x} < n}$
$S_n$ forms a countable cover of $S$ whose finite subcover yields a bound for the absolute value of $f$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Global Compactness Properties




