# 

Source: https://proofwiki.org/wiki/Interior_of_Jordan_Curve_is_Simply_Connected

Theorem
Let $\gamma : \closedint 0 1 \to \R^2$ be a Jordan curve.
Let $\Int \gamma$ denote the interior of $\gamma$.
Let $\tau_0$ denote the subspace topology on $\Int \gamma$, induced by the Euclidean topology on $\R^2$.

Then $\struct {\Int \gamma, \tau_0}$ is simply connected.


Proof
Let $\map {B_1} { \mathbf 0 }$ denote the open ball in $\R^2$ with radius $1$ and center equal to the origin $\bszero$.
From the Jordan-Schönflies Theorem, it follows that $\Int \gamma$ and $\map {B_1} { \mathbf 0 }$ are homeomorphic.
From Open Ball is Simply Connected, it follows that $\map {B_1} { \mathbf 0 }$, considered as a subspace of $\R^2$, is simply connected.
From Simple Connectedness is Preserved under Homeomorphism, it follows that $\struct {\Int \gamma, \tau_0}$ is simply connected.
$\blacksquare$





