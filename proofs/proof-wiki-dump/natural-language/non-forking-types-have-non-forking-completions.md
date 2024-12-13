# 

Source: https://proofwiki.org/wiki/Non-Forking_Types_have_Non-Forking_Completions


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $T$ be a complete $\LL$-theory.
Let $\mathfrak C$ be a monster model for $T$.
Let $A\subseteq B$ be subsets of the universe of $\mathfrak C$.
Let $\map \pi {\bar x}$ be an $n$-type over $B$.

If $\pi$ does not fork over $A$, then there is a complete $n$-type $p$ over $B$ such that $\pi \subseteq p$ and $p$ does not fork over $A$.


Proof
Suppose $\pi$ does not fork over $A$.

We will use Zorn's Lemma to find a candidate for the needed complete type.

Consider the collection $\Pi$ of all non-forking sets $\pi'$ of $\LL$-formulas with parameters from $B$ such that $\pi'$ contains $\pi$.
Order $\Pi$ by subset inclusion.
Since a set forks iff a finite subset forks, the union over any chain is still a non-forking set, and hence is an upper bound for the chain.
Thus, by Zorn's Lemma, there is a maximal (with respect to subset inclusion) $p$ in $\Pi$.

Aiming for a contradiction, suppose $p$ is not complete.

By definition, for some $\map \phi {\bar x, \bar b}$, $p$ contains neither $\map \phi {\bar x, \bar b}$ nor $\neg \map \phi {\bar x, \bar b}$.
Since $p$ is non-forking, by Formula and its Negation Cannot Both Cause Forking, at least one of $p \cup \map \phi {\bar x, \bar b}$ or $p \cup \neg \map \phi {\bar x, \bar b}$ is non-forking as well.
Hence $p$ is not maximal in $\Pi$, contradicting the choice of $p$.

Thus $p$ is complete.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





