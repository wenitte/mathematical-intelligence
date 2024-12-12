# 

Source: https://proofwiki.org/wiki/Characterization_of_Closedness_in_terms_of_Nets

Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $E \subseteq X$ be a subset. 

Then $E$ is closed if and only if for each $x \in X$ we have $x \in E$ if and only if:

there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ in $E$ converging to $x$.


Proof
From Set is Closed iff Equals Topological Closure, we have that $E$ is closed if and only if:

$x \in E$ if and only if $x \in \map \cl E$
From Point in Set Closure iff Limit of Net, for $x \in X$ we have $x \in \map \cl E$ if and only if:

there exists a directed set $\struct {\Lambda, \preceq}$ and a net $\family {x_\lambda}_{\lambda \in \Lambda}$ in $E$ converging to $x$.
$\blacksquare$





