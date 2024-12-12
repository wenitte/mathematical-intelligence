# 

Source: https://proofwiki.org/wiki/Condition_for_Open_Extension_Space_to_be_Second-Countable

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_{\bar p} = \struct {S^*_p, \tau^*_{\bar p} }$ be the open extension space of $T$.

Then $T^*_{\bar p}$ is a second-countable space if and only if $T$ is.


Proof
Let $T = \struct {S, \tau}$ be a second-countable space.
Then $\tau$ has a countable basis.
Every open set of $T$ is an open set of $T^*_{\bar p}$ by definition.
So if $\tau$ has a countable basis in $T$, then $\tau^*_{\bar p} = \tau \cup \set {S^*_p}$ has one as well.
So if $T$ is a second-countable space, then $T^*_{\bar p}$ is also a second-countable space.

Now suppose $T = \struct {S, \tau}$ is not a second-countable space.
Then $\tau$ has no countable basis in $T$.
As every open set of $T$ is an open set of $T^*_{\bar p}$ by definition, it follows that $\tau^*_{\bar p} = \tau \cup \set {S^*_p}$ has no countable basis either.
So if $T$ is not a second-countable space, then neither is $T^*_{\bar p}$ a second-countable space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $16$. Open Extension Topology: $9$




