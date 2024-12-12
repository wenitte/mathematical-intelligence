# 

Source: https://proofwiki.org/wiki/Connected_Component_is_Closed

Theorem
Let $T = \struct {S, \tau}$ be a topological space.

Then every connected component of $T$ is closed.


Proof
Let $H$ be a connected component of $T$.
By the definition of connected component, $H$ is connected.
From Closure of Connected Set is Connected then the closure $H^-$ is connected.
By the definition of the closure, $H \subseteq H^-$.
By the definition of connected component, $H$ is a maximal connected set.
Hence $H = H^-$.
From Set is Closed iff Equals Topological Closure, $H$ is closed.
$\blacksquare$





