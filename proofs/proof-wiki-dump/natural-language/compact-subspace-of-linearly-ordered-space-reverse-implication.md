# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Linearly_Ordered_Space/Reverse_Implication



Theorem
Let $\struct {X, \preceq, \tau}$ be a linearly ordered space.
Let $Y \subseteq X$ be a non-empty subset of $X$.

Let the following hold:

$(1): \quad$ For every non-empty $S \subseteq Y$, $S$ has a supremum and an infimum in $X$.
$(2): \quad$ For every non-empty $S \subseteq Y$: $\sup S, \inf S \in Y$.

Then $Y$ is a compact subspace of $\struct {X, \tau}$.


Proof 1
Let $\tau'$ be the $\tau$-relative subspace topology on $Y$.
Let $\preceq'$ be the restriction of $\preceq$ to $Y$.


Lemma
$\struct {Y, \preceq', \tau'}$ is a linearly ordered space.
$\Box$

The premises immediately show that $\struct {Y, \preceq'}$ is a complete lattice.
By Complete Linearly Ordered Space is Compact, $Y$ is a compact subspace of $X$.
$\blacksquare$


Proof 2
Let $\FF$ be an ultrafilter on $Y$.
For $S \in \FF$, let $\map f S = \inf S$.
Let $p = \sup \map f \FF$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: perhaps directly use $p := \ds \sup_{S \mathop \in \FF} \inf S$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Then $\FF$ converges to $p$:


Upward rays
Let $a \in X$ with $a \prec p$.
Since $\FF$ is an ultrafilter, either $Y \cap {\uparrow} a \in \FF$ or $Y \cap {\bar \downarrow} a \in \FF$.
Aiming for a contradiction, suppose that $Y \cap {\bar \downarrow} a \in \FF$.
For each $S \in \FF$:

$S \cap {\bar \downarrow} a \in \FF$ because an ultrafilter is a filter.

This article, or a section of it, needs explaining.In particular: Mention that $S \cap (Y \cap {\bar \downarrow} a) = S \cap {\bar \downarrow} a$ is usedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$S \cap {\bar \downarrow} a \ne \O$ because a filter on a set is proper.
By applying the definition of supremum to $p$, it follows that there exists an $S \in \FF$ such that $a \prec \inf S$.
By the definition of infimum:

$S \cap {\bar \downarrow} a = \O$
which is a contradiction.
Thus $Y \cap {\uparrow} a \in \FF$.


Downward rays
Let $b \in X$ with $p \prec b$.
Either $Y \cap {\downarrow} b \in \FF$ or $Y \cap {\bar \uparrow} b \in \FF$.
Aiming for a contradiction, suppose that $Y \cap {\bar \uparrow} b \in \FF$.
Let $b' = \map \inf {Y \cap {\bar \uparrow} b}$.
We have that $b$ is a lower bound of $Y \cap {\bar \uparrow} b$
So by the definition of infimum:

$b \preceq b'$
Since $p \prec b$ and $b \preceq b'$, $p \prec b'$ by Extended Transitivity.
By the definition of $b'$ and the definition of $f$:

$b' \in \map f \FF$
But this contradicts the fact that $p$ is the supremum, and hence an upper bound, of $\map f \FF$.
$\Box$

By the definition of the order topology, the upward and downward rays containing each point form a neighborhood sub-basis for that point.


Work In ProgressIn particular: an invocation of "Sub-Basis is Nbhd Sub-Basis" would be appropriateYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Thus by the Neighborhood Sub-Basis Criterion for Filter Convergence, $\FF$ converges.
Since every ultrafilter on $Y$ converges, $Y$ is compact by Equivalence of Definitions of Compact Topological Space.


Boolean Prime Ideal Theorem
This proof depends on the Boolean Prime Ideal Theorem (BPI), by way of Equivalence of Definitions of Compact Topological Space.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





