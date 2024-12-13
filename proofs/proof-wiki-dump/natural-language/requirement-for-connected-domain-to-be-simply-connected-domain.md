# 

Source: https://proofwiki.org/wiki/Requirement_for_Connected_Domain_to_be_Simply_Connected_Domain

Theorem
Let $D \subseteq \C$ be a connected domain.

Then $D$ is simply connected if and only if all paths in $D$ with the same initial points and end points are path-homotopic.
That is, given two paths in $D$:

$\gamma: \closedint a b \to D$
$\sigma: \closedint c d \to D$
with $\map \gamma a = \map \sigma c$ and $\map \gamma b = \map \sigma d$, there exists a continuous function $H: \closedint 0 1 \times \closedint 0 1 \to D$ such that:

$\map H {s, 0} = \map \gamma s$ for all $s \in \closedint 0 1$
$\map H {s, 1} = \map \sigma s$ for all $s \in \closedint 0 1$
$\map H {t, 0} = \map \gamma t$ for all $t \in \closedint 0 1$
$\map H {t, 1} = \map \sigma t$ for all $t \in \closedint 0 1$


Proof
From Open Domain is Connected iff it is Path-Connected, it follows that $D$ is path-connected.
The results now follows by the definition of simply connected sets.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 3.1$




