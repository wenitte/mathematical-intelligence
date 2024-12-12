# 

Source: https://proofwiki.org/wiki/Finite_Topological_Space_is_Compact/Proof_2

Theorem
Let $T = \struct {S, \tau}$ be a topological space where $S$ is a finite set.

Then $T$ is compact.


Proof
From Power Set of Finite Set is Finite, the power set of $S$ is finite.
Since the topology $\tau$ is by definition a set of subsets of $S$, it follows that $\tau$ is finite as well.
Let $\VV$ be an open cover of $S$.
By definition $\VV \subseteq \tau$ and so is also a finite set.
From Set is Subset of Itself, $\VV \subseteq \VV$.
Thus by definition $\VV$ is a finite subcover of $\VV$.
The result follows by definition of compact.
$\blacksquare$





