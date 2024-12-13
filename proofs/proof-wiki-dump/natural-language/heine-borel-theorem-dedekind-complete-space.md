# 

Source: https://proofwiki.org/wiki/Heine-Borel_Theorem/Dedekind_Complete_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $T = \struct {X, \preceq, \tau}$ be a Dedekind-complete linearly ordered space.
Let $Y$ be a non-empty subset of $X$.

Then $Y$ is compact if and only if $Y$ is closed and bounded in $T$.


Proof
Sufficient Condition
Let $Y$ be a compact subspace of $T$.
From:

Order Topology is Hausdorff
Compact Subspace of Hausdorff Space is Closed
it follows that $Y$ is closed in $T$.

From Compact Subspace of Linearly Ordered Space: Lemma 1, $\struct {Y, \preceq {\restriction_Y} }$ is a complete lattice.


This needs considerable tedious hard slog to complete it.In particular: Not much to do, just need to show that a complete lattice in this context is bounded.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence $Y$ is closed and bounded in $T$.


Necessary Condition
Let $Y$ be a closed and bounded subspace of $T$.
Let $S$ be a non-empty subset of $Y$.
Since $Y$ is bounded and $S \subseteq Y$, $S$ is bounded.
Since $X$ is Dedekind complete, $S$ has a supremum and infimum in $X$.
We will show that $\sup S, \inf S \in Y$.
Aiming for a contradiction, suppose $\sup S \notin Y$.
By Closed Set in Linearly Ordered Space, $b$ is not a supremum of $S$, a contradiction.
Thus $\sup S \in Y$.
A similar argument shows that $\inf S \in Y$.
Thus by Compact Subspace of Linearly Ordered Space, $Y$ is compact.
$\blacksquare$





