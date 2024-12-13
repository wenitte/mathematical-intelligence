# 

Source: https://proofwiki.org/wiki/Increasing_Mapping_Preserves_Lower_Bounds

Theorem
Let $L = \left({S, \preceq}\right)$, $L' = \left({S', \preceq'}\right)$ be ordered sets.
Let $f:S \to S'$ be an increasing mapping.
Let $x \in S$, $X \subseteq S$ such that

$x$ is lower bound for $X$.

Then $f \left({x}\right)$ is lower bound for $f \left[{X}\right]$.


Proof
Let $y \in f\left[{X}\right]$.
By definition of image of set:

$\exists z \in X: y = f \left({z}\right)$
By definition of lower bound:

$x \preceq z$
Thus by definition of increasing mapping:

$f \left({x}\right) \preceq' y$
$\blacksquare$


Sources
Mizar article YELLOW_2:13




