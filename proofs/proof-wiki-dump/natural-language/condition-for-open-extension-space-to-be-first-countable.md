# 

Source: https://proofwiki.org/wiki/Condition_for_Open_Extension_Space_to_be_First-Countable

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $T^*_{\bar p} = \struct {S^*_p, \tau^*_{\bar p} }$ be the open extension space of $T$.

Then $T^*_{\bar p}$ is a first-countable space if and only if $T$ is.


Proof
Let $T = \struct {S, \tau}$ be a first-countable space.
Then every point in $S$ has a countable local basis.
Every open set of $T$ is an open set of $T^*_{\bar p}$ by definition.
So if $x$ has a countable local basis in $T$, then it has one in $T^*_{\bar p}$ as well.
Finally we note that $p$ is by definition in exactly one open set of $T^*_{\bar p}$, that is, $S^*_p$, and thus (trivially) has a countable local basis in $T^*_{\bar p}$.
Then every point in $S^*_p$ has a countable local basis in $T^*_{\bar p}$.
So if $T$ is a first-countable space, then $T^*_{\bar p}$ is also a first-countable space.

Now suppose $T = \struct {S, \tau}$ is not a first-countable space.
Then $\exists x \in S$ such that $x$ has no countable local basis in $T$.

As every open set of $T$ is an open set of $T^*_{\bar p}$ by definition, it follows that $x$ has no countable local basis in $T^*_{\bar p}$ either.

So if $T $ is not a first-countable space, then neither is $T^*_{\bar p}$ a first-countable space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $16$. Open Extension Topology: $9$




