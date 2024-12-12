# 

Source: https://proofwiki.org/wiki/Closed_Subspace_of_Lindel%C3%B6f_Space_is_Lindel%C3%B6f_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {S, \tau}$ be a Lindelöf space.
Let $C = \struct {H, \tau_H}$ be a subspace of $T$.
Let $C$ be closed in $T$.

Then $\struct {H, \tau}$ is Lindelöf space.

That is, the property of being Lindelöf is weakly hereditary.


Proof
Let $T$ be a Lindelöf space.
Let $C$ be a closed subspace of $T$.
Let $\UU$ be an open cover of $H$.

We have that $H$ is closed in $T$.
It follows by definition of closed that $H \setminus C$ is open in $T$.

So if we add $S \setminus H$ to $\UU$, we see that:

$\UU \cup \set {S \setminus H}$
is also an open cover of $S$.
As $T$ is compact, there exists a countable subcover of $\UU \cup \set {S \setminus H}$, that is:

$\VV = \set {U_1, U_2, \ldots}$
This covers $H$ by the fact that it covers $S$.

Suppose $S \setminus H$ is an element of $\VV$.
Then $S \setminus H$ may be removed from $\VV$, and the rest of $\VV$ still covers $H$.
Thus we have a countable subcover of $\UU$ which covers $H$.
Hence $C$ is a Lindelöf space.
$\blacksquare$


Also see
Closed Subspace of Compact Space is Compact


Sources
1970: Stephen Willard: General Topology: Chapter $4$: Separation and Countability: $\S16$: Countability Properties: Theorem $16.6(\text b)$




