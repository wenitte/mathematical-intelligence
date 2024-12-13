# 

Source: https://proofwiki.org/wiki/Interior_of_Closure_is_Regular_Open

Theorem
Let $T = \left({S, \tau}\right)$ be a topological space.
Let $H \subseteq S$.

Then $H^{- \circ}$ is regular open.


Proof
We must show that $H^{- \circ - \circ} = H^{- \circ}$.

First we show that $H^{- \circ - \circ} \subseteq H^{- \circ}$.

By the definition of interior:

$H^{- \circ} \subseteq H^-$
By Topological Closure of Subset is Subset of Topological Closure:

$H^{- \circ -} \subseteq H^{--} = H^-$
By Interior of Subset:

$H^{- \circ - \circ } \subseteq H^{- \circ}$
$\Box$

Next we show $H^{- \circ - \circ} \supseteq H^{- \circ}$.

Again by the definition of interior:

$H^{- \circ -} \supseteq H^{- \circ}$
By Interior of Subset:

$H^{- \circ - \circ}  \supseteq H^{- \circ \circ} = H^{- \circ}$
$\Box$

Thus by definition of set equality:

$H^{- \circ - \circ} = H^{- \circ}$
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology: $\text{I}: \ \S 2$: Interior, Exterior, Boundary and Closure




