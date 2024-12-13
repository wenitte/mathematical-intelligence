# 

Source: https://proofwiki.org/wiki/Hartogs%27_Lemma_(Set_Theory)/Proof_1



Theorem
Let $S$ be a set.

Then there exists an ordinal $\alpha$ such that there is no injection from $\alpha$ to $S$.


Proof
Define $\alpha = \set {\beta: \text{$\beta$ is an ordinal and there is an injection $\beta \to S$}}$.

First of all, it is to be shown that $\alpha$ is a set.
To this end, define the set $W$ by:

$W = \set {\paren {S', \preceq}: \text{$S' \subseteq S$ and $\preceq$ well-orders $S'$}}$
By the Counting Theorem, each $w \in W$ corresponds to a unique ordinal $\beta_w$.
Thus by the Axiom of Replacement, the following is a set:

$\set {\beta: \exists w \in W: \beta = \beta_w}$
It follows from Injection Induces Well-Ordering that this set coincides with $\alpha$.
In particular, then, $\alpha$ is a set.

Next, to establish $\alpha$ is an ordinal.
Suppose $\beta \in \alpha$ and $\gamma < \beta$.
Let $i: \beta \to S$ be an injection, and let $\iota: \gamma \to \beta$ be the inclusion of $\gamma$ in $\beta$.
Then by Composite of Injections is Injection, $i \circ \iota: \gamma \to S$ is an injection.
Hence $\gamma \in \alpha$, and therefore $\alpha$ is an ordinal.

Finally, by Ordinal is not Element of Itself, $\alpha \notin \alpha$.
That is to say, there is no injection $\alpha \to S$.
$\blacksquare$


Notes

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: The below two statements merit their own pages, thence this "Notes" section will be relegated to an "Also see" section.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The construction in the proof in fact defines the least such ordinal, which is called the Hartogs number of $S$.
Hartogs' lemma forms the basis for transfinite induction: There can be no strictly increasing mapping from the class of ordinals into a poset $S$, because if there were then it would be an injection from the Hartogs number of $S$ into $S$


Source of Name
This entry was named for Friedrich Moritz Hartogs.





