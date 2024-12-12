# 

Source: https://proofwiki.org/wiki/Fort_Space_is_not_Extremally_Disconnected

Theorem
Let $T = \struct {S, \tau_p}$ be a Fort space on an infinite set $S$.

Then $T$ is not an extremally disconnected space.


Proof
We note from Fort Space is Completely Normal that $T$ is a $T_2$ (Hausdorff) space.
Let $H \subseteq S$ be an infinite subset of $S$ such that $p \in \relcomp S H$ and $\relcomp S H$ is infinite.
Then $H$ is open as $p \in \relcomp S H$.
From Limit Points in Fort Space, as $H$ is infinite, $p$ is the only limit point of $H$.
So $H^- = H \cup \set p$ where $H^-$ is the closure of $H$.
But as $\relcomp S {H^-}$ is infinite and does not contain $p$, it follows that $H^-$ is not open in $T$.
So by definition $T$ is not an extremally disconnected space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $23 \text { - } 24$. Fort Space: $7$




