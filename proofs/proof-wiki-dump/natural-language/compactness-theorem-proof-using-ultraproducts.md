# 

Source: https://proofwiki.org/wiki/Compactness_Theorem/Proof_using_Ultraproducts


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\LL$ be the language of predicate logic.
Let $T$ be a set of $\LL$-sentences.

Then $T$ is satisfiable if and only if $T$ is finitely satisfiable.


Proof
By definition, $T$ is finitely satisfiable means that every finite subset of $T$ is satisfiable.
Because the direction:

$T$ satisfiable implies $T$ finitely satisfiable
is trivial, the proof below justifies the converse:

$T$ finitely satisfiable implies $T$ satisfiable.

The idea is to construct an ultraproduct using a purposefully selected ultrafilter and collection of models so that each sentence in $T$ will be realized as a result of Łoś's Theorem.
Let $\Sigma$ be the set of all finite subsets of $T$.
For every $\Sigma_0 \in \Sigma$, define:

$F_{\Sigma_0} = \set {\Delta \in \Sigma: \Sigma_0 \subseteq \Delta}$
That is, $F_{\Sigma_0}$ is the collection of all finite subsets of $T$ including $\Sigma_0$.
Clearly $F_{\Sigma_0}$ is a subset of $\Sigma$.

Now define:

$F = \set {F_{\Sigma_0}: \Sigma_0 \in \Sigma}$
a subset of $\powerset \Sigma$.
We claim this has the finite intersection property.
Take any finite collection $\ds \set {F_{\Sigma_k} }_{k = 1, 2, \dots, n}$ of elements on $F$, and observe that the set $\ds S = \bigcup_{k \mathop = 1}^n \Sigma_k$ is a finite subset of $T$.
That is, $S \in \Sigma$.
$S \in F_{\Sigma_k}$ for each $k$ by construction, and hence is in their intersection.
In fact, their intersection is $F_S$.
So the intersection of any finite collection of elements of $F$ is nonempty as claimed.

Since $F$, which is a set of subsets of $\Sigma$, has the finite intersection property, there is an ultrafilter $U$ on $\Sigma$ including it (by the corollary to the Ultrafilter Lemma). 
If $\Sigma_0 \in \Sigma$, then by assumption it has a model $\AA_{\Sigma_0}$.
Define:

$\ds \AA = \paren {\prod_{\Sigma_k \mathop \in \Sigma} \AA_{\Sigma_k} } / U$

We verify $\AA \models T$.
Take any $\phi \in T$.
Observe that $F_{\set \phi} \in U$ by definition of $U$.
Furthermore, if we define $\Phi = \set {\Sigma_0 \in \Sigma: \AA_{\Sigma_0} \models \phi}$, we have $F_{\set \phi} \subseteq \Phi$.
Hence, since $U$ is a filter and $F_{\set \phi} \in U$, $\Phi \in U$.
Then Łoś's Theorem implies that $\AA \models \phi$.
$\blacksquare$


Axiom of Choice
This theorem depends on the Axiom of Choice, by way of Łoś's Theorem.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: If this proof features here, keep this entry and resolve the linksIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text {II}.7$ First-Order Logic Semantics: Theorem $\text {II}.7.15$




