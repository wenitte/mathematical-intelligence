# 

Source: https://proofwiki.org/wiki/User:DingChao/Sandbox/Compactness_Theorem


This page has been identified as a candidate for refactoring.In particular: Proof per pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\mathcal L$ be the language of predicate logic.
Let $T$ be a set of $\mathcal L$-sentences.

Then $T$ is satisfiable if and only if $T$ is finitely satisfiable.


Proof
By definition, $T$ is finitely satisfiable means that every finite subset of $T$ is satisfiable.
Since the direction

$T$ satisfiable implies $T$ finitely satisfiable
is trivial, the proofs below all justify the converse

$T$ finitely satisfiable implies $T$ satisfiable.


Proof using Ultraproducts
The idea is to construct an ultraproduct using a purposefully selected ultrafilter and collection of models so that each sentence in $T$ will be realized as a result of Łoś's Theorem.
Let $\Sigma$ be the set of all finite subsets of $T$.
For every $\Sigma_0 \in \Sigma$, define:

$F_{\Sigma_0} = \left\{{\Delta \in \Sigma: \Sigma_0 \subseteq \Delta}\right\}$
That is, $F_{\Sigma_0}$ is the collection of all finite subsets of $T$ including $\Sigma_0$.
Clearly $F_{\Sigma_0}$ is a subset of $\Sigma$.

Now define:

$F = \left\{{F_{\Sigma_0}: \Sigma_0 \in \Sigma}\right\}$
a subset of $\mathcal P \left({\Sigma}\right)$.
We claim this has the finite intersection property.
Take any finite collection $\left\{{F_{\Sigma_k}}\right\}_{k = 1, 2, \dots, n}$ of elements on $F$, and observe that the set $\displaystyle S = \cup_{k \mathop = 1}^n \Sigma_k$ is a finite subset of $T$.
That is, $S \in \Sigma$.
$S \in F_{\Sigma_k}$ for each $k$ by construction, and hence is in their intersection.
In fact, their intersection is $F_S$.
So the intersection of any finite collection of elements of $F$ is nonempty as claimed.

Since $F$, which is a set of subsets of $\Sigma$, has the finite intersection property, there is an ultrafilter $U$ on $\Sigma$ including it (by the corollary to the Ultrafilter Lemma). 
If $\Sigma_0 \in \Sigma$, then by assumption it has a model $\mathcal A_{\Sigma_0}$.
Define:

$\displaystyle \mathcal A = \left({\prod_{\Sigma_k \mathop \in \Sigma} \mathcal A_{\Sigma_k}}\right) / U$

We verify $\mathcal A \models T$.
Take any $\phi \in T$.
Observe that $F_{\left\{{\phi}\right\}} \in U$ by definition of $U$.
Furthermore, if we define $\Phi = \left\{{\Sigma_0 \in \Sigma: \mathcal A_{\Sigma_0} \models \phi}\right\}$, we have $F_{\left\{{\phi}\right\}} \subseteq \Phi$.
Hence, since $U$ is a filter and $F_{\left\{{\phi}\right\}} \in U$, $\Phi \in U$.
Then Łoś's Theorem implies that $\mathcal A \models \phi$.
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
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Gödel's Completeness Theorem.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Proof using Henkin Construction

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Lots of discursive material that, if it needs to be anywhere at all, needs to be on a different page. Also, sentences are too long and imprecise.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This proof actually demonstrates a stronger form of the Compactness Theorem by showing:

If $T$ is finitely satisfiable and $\kappa$ is an infinite cardinal such that $\kappa > \left|{\mathcal L}\right|$, then $T$ is satisfiable by a model whose cardinality is at most $\kappa$.
This is stronger than the original statement, since it provides extra information about the model that is claimed to exist.
The proof is said to use a Henkin Construction because it involves the construction of a model all of whose elements are interpretations of the constant symbols of some language.
Such a model was used in Leon Albert Henkin's proof of the Completeness Theorem.
This special feature of the constructed model is what allows us to control its cardinality.

First, by Extend Theory to Satisfy Witness Property, we can extend $\mathcal L$ and $T$ to find a language $\mathcal L^*$ of cardinality at most $\kappa$ and an $\mathcal L^*$-theory $T^*$ such that all finitely satisfiable $\mathcal L^*$-theories containing $T^*$ have the witness property.

Then, since finitely satisfiable theories have maximal finitely satisfiable extensions, we can find a finitely satisfiable $\mathcal L^*$-theory $T'$ containing $T^*$ such that $T'$ contains either $\phi$ or $\neg\phi$ for  each $\mathcal L^*$-sentence $\phi$.
Note that $T'$ has the witness property since it contains $T^*$.

Finally, by Maximal Finitely Satisfiable Theory with Witness Property is Satisfiable, $T'$ has a model.
Moreover, since $\mathcal L^*$ has cardinality at most $\kappa$ and hence has at most $\kappa$-many constant symbols, this theorem ensures that the model of $T'$ can be taken to have cardinality at most $\kappa$.
$\blacksquare$


Also see
Overflow Theorem
The Class of Finite Models is not $\Delta$-Elementary
Existence of Non-Standard Models of Arithmetic


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\mathrm{II}.7$ First-Order Logic Semantics: Theorem $\mathrm{II.7.15}$




