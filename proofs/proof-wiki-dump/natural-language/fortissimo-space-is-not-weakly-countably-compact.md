# 

Source: https://proofwiki.org/wiki/Fortissimo_Space_is_not_Weakly_Countably_Compact

Theorem
Let $T = \struct {S, \tau_p}$ be a Fortissimo space.

Then $T$ is not weakly countably compact.


Proof
It suffices to show that $T$ has an infinite subset without limit points.

Consider the set $S \setminus \set p$.
Let $x \in S$.
We have:














\(\ds \paren {S \setminus \paren {S \setminus \set p} } \cup \set x\)

\(=\)







\(\ds \set p \cup \set x\)




















\(\ds \)

\(=\)







\(\ds \set {p, x}\)










By definition, $x$ is a limit point of $S \setminus \set p$ if and only if $\set {p, x}$ is not a neighborhood of $x$.

By definition of Fortissimo space, $\set {p, x}$ is open in $T$.
Hence it is a open neighborhood of $x$.
Therefore $x$ is not a limit point of $S \setminus \set p$.

Since $x$ is arbitrary, $S \setminus \set p$ has no limit points.
Hence $T$ is not weakly countably compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $25$. Fortissimo Space: $2$




