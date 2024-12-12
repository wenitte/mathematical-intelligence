# 

Source: https://proofwiki.org/wiki/Closure_of_Irreducible_Subspace_is_Irreducible/Proof_1

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $Y \subseteq S$ be a subset of $S$ which is irreducible in $T$.

Then its closure $Y^-$ in $T$ is also irreducible in $T$.


Proof
By definition, $Y$ is an irreducible subset of $S$ in $T$ if and only if the subspace $\struct {Y, \tau_Y}$ is an irreducible topological space.
That is, such that two arbitrary non-empty open sets of $\struct {Y, \tau_Y}$ are not disjoint.

The open sets of $T$ in $Y^-$ are the same as the open sets of $\struct {Y, \tau_Y}$.


This needs considerable tedious hard slog to complete it.In particular: Prove the above statementTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Hence by definition of irreducible space, any two open sets in $Y^-$ are not disjoint in $Y^-$.

That is $Y^-$ is also irreducible.
More generally, we can also show that if $Y^-$ is irreducible for a subset $Y \subseteq S$, then $Y$ is also irreducible in $T$. 

Aiming for a contradiction, suppose $Y$ is not irreducible.
Then there exist two proper subsets $Y_1$, $Y_2$ of $Y$ which are closed in $Y$ such that $Y = Y_1 \cup Y_2$.


This article, or a section of it, needs explaining.In particular: How do we know that?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:

$Y^- = {Y_1}^- \cup {Y_2}^-$
which contradicts the assumption.
$\blacksquare$





