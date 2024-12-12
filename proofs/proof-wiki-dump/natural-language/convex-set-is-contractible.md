# 

Source: https://proofwiki.org/wiki/Convex_Set_is_Contractible


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $V$ be a topological vector space over $\R$ or $\C$.
Let $A\subset V$ be a convex subset.
Then $A$ is contractible.


Proof

Work In ProgressIn particular: Lots of imprecision and incorrect grammar which needs to be resolved. Too much to do on the flyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Let $x_0 \in A$.
Define $H : A \times \closedint 0 1 \to A$ by:

$\map H {x, t} = t x_0 + \paren {1 - t} x$
Note that by the definition of a convex set, $\Cdm H$ is also a convex set.


This article needs proofreading.In particular: Verify if the codomain of H is convexIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $I_A$ be defined as the identity mapping: 

$I_A: A \to A$
Such that:

$I_A = \set {\tuple {x, x}: x \in A}$
Let $S$ and $T$ be sets. Let $x_0$ be defined as the constant map:

$x_0: S \to T$ defined as:
$0 \in T: x_0: S \to T: \forall x \in S: \map {x_0} x = 0$

This article needs proofreading.In particular: Verify if the definition is used correctlyIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
The map $H$ yields a (free) homotopy between the identity map:

$I_A$
and the constant map:

$x_0$

This needs considerable tedious hard slog to complete it.In particular: Prove that the map H yields a homotopy between the identity map and the constant mapTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By the assumption of convexity for $A$, $H$ takes values in $A$.
Since $H$ is a polynomial separately in $x, t$, it is a continuous function.
And:

$\map H {-, 0} = I_A$
$\map H {-, 1} \equiv x_0$ (the constant function)
Thus, $H: I_A \simeq c_{x_0}$.


This needs considerable tedious hard slog to complete it.In particular: Prove that the above statement implies that the identity map on A is homotopic to the constant map from A to ATo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It follows that, the identity map $\operatorname{id}_A$ is homotopic to the constant map $A \to A$.
Hence, by definition of a contractible space, this implies that:

$A$ is contractible
as required.
$\blacksquare$





