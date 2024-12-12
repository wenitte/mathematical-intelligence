# 

Source: https://proofwiki.org/wiki/Closure_of_Irreducible_Subspace_is_Irreducible



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $Y \subseteq S$ be a subset of $S$ which is irreducible in $T$.

Then its closure $Y^-$ in $T$ is also irreducible in $T$.


Proof 1
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


Proof 2
In view of Definition of Irreducible Subset, it suffices to show that for all closed sets $A_1$ and $A_2$ in $T$:

$Y^- \subseteq A_1 \cup A_2 \implies \exists i_0 \in \set {1, 2} : Y^- \subseteq A_{i_0}$

To this end, let $A_1$ and $A_2$ be closed sets in $T$ such that:

$Y^- \subseteq A_1 \cup A_2$
Then, in particular:

$Y \subseteq A_1 \cup A_2$
Since $Y \subseteq S$ is an irreducible subset:

$\exists i_0 \in \set {1, 2} : Y \subseteq A_{i_0}$
By Closure of Subset of Closed Set of Topological Space is Subset:

$Y^- \subseteq A_{i_0}$
$\blacksquare$


Proof 3
Observe that for each closed set $V$ in $T$:

$(1): \quad V \subsetneqq Y^- \implies V \cap Y \subsetneqq Y$
Indeed:














\(\ds V \cap Y\)

\(=\)







\(\ds Y\)














\(\ds \leadsto \ \ \)





\(\ds Y \setminus V\)

\(=\)







\(\ds \O\)














\(\ds \leadsto \ \ \)





\(\ds Y\)

\(\subseteq\)







\(\ds V\)














\(\ds \leadsto \ \ \)





\(\ds Y^-\)

\(\subseteq\)







\(\ds V\)





Closure of Subset of Closed Set of Topological Space is Subset








\(\ds \leadsto \ \ \)





\(\ds V\)

\(\subsetneqq\)







\(\ds Y^-\)










Aiming for a contradiction, suppose $Y^-$ is not irreducible.
That is, there exist $V_1, V_2 \subsetneqq Y^-$, closed in $\struct {Y^-, \tau_{Y^-} }$, such that:

$Y^- = V_1 \cup V_2$
$V_1$ and $V_2$ are also closed in $T$, since $Y^-$ is closed in $T$,

Then, from $(1)$:

$V_1 \cap Y \subsetneqq Y$
and:

$V_2 \cap Y \subsetneqq Y$
Therefore $V_1 \cap Y$ and $V_2 \cap Y$ are proper subsets of $Y$ such that:

$Y = \paren {V_1 \cap Y} \cup \paren {V_2 \cap Y}$
Furtheremore, $V_1 \cap Y$ and $V_2 \cap Y$ are closed in $\struct {Y, \tau_Y}$.
This contradicts the fact that $Y$ is irreducible.
$\blacksquare$


Also see
Closure of Connected Set is Connected




