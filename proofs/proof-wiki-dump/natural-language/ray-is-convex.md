# 

Source: https://proofwiki.org/wiki/Ray_is_Convex


It has been suggested that this page or section be merged into Upper and Lower Closures are Convex.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $I$ be a ray, either open or closed.

Then $I$ is convex in $S$.


Proof
The cases for upward-pointing and downward-pointing rays are equivalent.


This article, or a section of it, needs explaining.In particular: "Dual of convex is convex" and duality, upon which the above statement depends.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Without loss of generality, suppose that $U$ is an upward-pointing ray.
By the definition of a ray, there exists an $a \in S$ such that:

$I = a^\succ$
or;

$I = a^\succeq$
according to whether $U$ is open or closed.
Let $x, y, z \in S$ such that $x \prec y \prec z$ and $x, z \in I$.
Then:

$a \preceq x \prec y$
so:

$a \prec y$
Therefore:

$y \in a^\succ \subseteq I$
Thus $I$ is convex.
$\blacksquare$


Also see
Upper and Lower Closures are Convex




