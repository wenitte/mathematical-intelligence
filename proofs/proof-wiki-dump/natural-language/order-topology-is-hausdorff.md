# 

Source: https://proofwiki.org/wiki/Order_Topology_is_Hausdorff


This article needs to be linked to other articles.In particular: some of the technical termsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\struct {X, \preceq, \tau}$ be a linearly ordered space.

Then $\struct {X, \tau}$ is a Hausdorff space.


Proof
Let $x, y \in X$ with $x \ne y$.
Since $\le$ is a total ordering, either $x \prec y$ or $y \prec x$.
Without loss of generality, assume that $x \prec y$.
If there is a $z \in X$ such that $x \prec z \prec y$, then $z^\prec$ and $z^\succ$ separate $x$ and $y$.

Otherwise, by Upper Closure is Strict Upper Closure of Immediate Predecessor, $y^\prec$ and $x^\succ$ separate $x$ and $y$.
Since any two distinct points can be separated by neighborhoods, $\struct {X, \tau}$ is a Hausdorff space.
$\blacksquare$





