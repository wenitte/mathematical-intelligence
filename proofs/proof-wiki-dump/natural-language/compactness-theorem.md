# 

Source: https://proofwiki.org/wiki/Compactness_Theorem


This page has been identified as a candidate for refactoring.In particular: Extract the necessary and sufficient conditions into separate proofs, then we can extract the trivial direction into its own page rather than repeating it $n$ timesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\LL$ be the language of predicate logic.
Let $T$ be a set of $\LL$-sentences.

Then $T$ is satisfiable if and only if $T$ is finitely satisfiable.


Proof

This article, or a section of it, needs explaining.In particular: Missing explicit reference to the use of Boolean Prime Ideal Theorem/Ultrafilter Lemma or Axiom of Choice/Zorn's LemmaYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By definition, $T$ is finitely satisfiable means that every finite subset of $T$ is satisfiable.
Because the direction:

$T$ satisfiable implies $T$ finitely satisfiable
is trivial, the proofs below all justify the converse:

$T$ finitely satisfiable implies $T$ satisfiable.


Proof using Consistency Principle
By Extend Theory to Satisfy Witness Property, there exist a language $\LL^*$ and a set of $\LL^*$-sentences $T^*$ satisfying:

$T^*$ is finitely satisfiable
If $T^*$ is satisfiable, then $T$ is satisfiable
For every $\LL^*$-WFF of $1$ free variable $\map \phi x$, there exists some constant $c_\phi$ such that:
$T^* \models \paren {\exists x: \map \phi x} \implies \map \phi {x := c_\phi}$
Thus, it suffices to show that $T^*$ is satisfiable.

By Finitely Satisfiable Set of Sentences has Maximal Finitely Satisfiable Extension, there exists a set of $\LL^*$-sentences $T' \supseteq T^*$ such that:

For all $\LL^*$-sentences $\phi$, either $\phi \in T'$ or $\sqbrk {\neg \phi} \in T'$
As $T^* \subseteq T'$, it follows that the third property above continues to hold for $T'$.
Thus, by the lemma to Extend Theory to Satisfy Witness Property:

$T'$ satisfies the witness property
Additionally, any $\mathrm{PL}$-structure that models $T'$ will also model $T^*$.
But, by Maximal Finitely Satisfiable Theory with Witness Property is Satisfiable, there is such a $\mathrm{PL}$-structure.
$\blacksquare$


Proof using Ultraproducts
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


Proof using Gödel's Completeness Theorem
This proof is by contraposition.
The idea is to exploit the finiteness of proofs and the relation between satisfiability and deducibility to show that if $T$ is not satisfiable, then it must have a finite subset which can be used to prove to a contradiction.
Suppose $T$ is not satisfiable.
Since $T$ has no models, it vacuously follows that $T \models \phi \wedge \neg \phi$ for some sentence $\phi$.
By Gödel's Completeness Theorem, this implies that $\phi \wedge \neg \phi$ is deducible from $T$.
But any deduction from $T$ involves only finitely many sentences from $T$.
This means that there is a finite subset $\Delta$ of $T$ such that $\phi \wedge \neg \phi$ is deducible from $\Delta$.
By Soundness of First-Order Logic, this means that $\Delta \models \phi \wedge \neg \phi$.
Thus $\Delta$ is not satisfiable.
By the Rule of Transposition, $\Delta$ is satisfiable implies $T$ is satisfiable.
$\blacksquare$


Proof using Henkin Construction
This proof actually demonstrates a stronger form of the Compactness Theorem by showing:

If $T$ is finitely satisfiable and $\kappa$ is an infinite cardinal such that $\kappa > \size \LL$, then $T$ is satisfiable by a model whose cardinality is at most $\kappa$.
This is stronger than the original statement, since it provides extra information about the model that is claimed to exist.
The proof is said to use a Henkin Construction because it involves the construction of a model all of whose elements are interpretations of the constant symbols of some language.
Such a model was used in Leon Albert Henkin's proof of the Completeness Theorem.
This special feature of the constructed model is what allows us to control its cardinality.

First, by Extend Theory to Satisfy Witness Property, we can extend $\LL$ and $T$ to find a language $\LL^*$ of cardinality at most $\kappa$ and an $\LL^*$-theory $T^*$ such that all finitely satisfiable $\LL^*$-theories containing $T^*$ have the witness property.

Then, since finitely satisfiable theories have maximal finitely satisfiable extensions, we can find a finitely satisfiable $\LL^*$-theory $T'$ containing $T^*$ such that $T'$ contains either $\phi$ or $\neg\phi$ for each $\LL^*$-sentence $\phi$.
Note that $T'$ has the witness property since it contains $T^*$.

Finally, by Maximal Finitely Satisfiable Theory with Witness Property is Satisfiable, $T'$ has a model.
Moreover, since $\LL^*$ has cardinality at most $\kappa$ and hence has at most $\kappa$-many constant symbols, this theorem ensures that the model of $T'$ can be taken to have cardinality at most $\kappa$.
$\blacksquare$


Also see
Overflow Theorem
The Class of Finite Models is not $\Delta$-Elementary
Existence of Non-Standard Models of Arithmetic


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text {II}.7$ First-Order Logic Semantics: Theorem $\text {II}.7.15$




