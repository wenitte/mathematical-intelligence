# 

Source: https://proofwiki.org/wiki/User:Bakkot/Compactness


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $T$ be a set of $\mathcal{L}$-sentences where $\mathcal{L}$ is a first-order language.  Then $T$ is satisfiable if and only if $T$ is finitely satisfiable (meaning that every finite subset of $T$ is satisfiable).

Note
Since the direction

$T$ satisfiable implies $T$ finitely satisfiable
is trivial, the proofs below all justify the converse

$T$ finitely satisfiable implies $T$ satisfiable.
Proof using Ultraproducts
The idea is to construct an ultraproduct using a purposefully selected ultrafilter and collection of models so that each sentence in $T$ will be realized as a result of Łoś's Theorem.

Let $\Sigma$ be the set of finite subsets of $T$, and for each sentence $E\in T$, let $\uparrow (E)$ denote the collection $\{\sigma\in\Sigma\mid E\in\sigma\}$ of finite subsets of $T$ containing $E$.
Since $\{\uparrow(E)\mid E\in T\}$ is a filter on $\Sigma$,


The validity of the material on this page is questionable.In particular: Why is $\{\uparrow(E)\mid E\in T\}$ a filter? In fact I don't think it is. A finite superset of $\uparrow(E)$
needn't equal $\uparrow(F)$ for some $F$, as far as I can see.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
the Ultrafilter Lemma shows that there is an ultrafilter $\mathcal{U}$ on $\Sigma$ which contains it.
Since every finite subset of $T$ is satisfiable and hence has a model, we can associate to each $\sigma\in\Sigma$ a model $\mathcal{M}_\sigma\models\sigma$.

Let $\mathcal{M}$ be the ultraproduct $\displaystyle{\left(\prod_{\sigma\in\Sigma}\mathcal{M}_\sigma\right)/\mathcal{U}}$.

We verify that $\mathcal{M}$ is a model of $T$:
Suppose $E\in T$.
Since $E\in\sigma$ implies that $\mathcal{M}_\sigma \models E$ by choice of $\mathcal{M}_\sigma$, it follows that $\uparrow (E)\subseteq \{\sigma\in\Sigma \mid\mathcal{M}_\sigma \models E\}$.
By choice of the ultrafilter $\mathcal{U}$, this means that $\{\sigma\in\Sigma \mid\mathcal{M}_\sigma \models E\}$ is in $\mathcal{U}$. 
Thus, by Łoś's Theorem, the ultraproduct $\mathcal{M}$ satisfies $E$.

$\blacksquare$

Proof using Ultraproducts (alternative version)
Let $\Sigma$ be the set of finite subsets of $T$. If $\Sigma_0 \in \Sigma$, then by assumption it has a model $\mathcal{A}_{\Sigma_0}$.
For every $\Sigma_0 \in \Sigma$, define $F_{\Sigma_0} = \{ \Delta \subseteq \Sigma \mid \Sigma_0 \subseteq \Delta.\}$, that is, $F_{\Sigma_0}$ is the collection of all finite subsets of $T$ containing $\Sigma_0$. Clearly $F_{\Sigma_0}$ is a subset of $\Sigma$.
Now define $F = \{ F_{\Sigma_0} \mid \Sigma_0 \in \Sigma \}$, a subset of $\mathcal{P}(\Sigma)$. We claim this has the finite intersection property. Take any collection $\{ F_{\Sigma_k} \}_{k=1,2,\dots,n}$ of elements on $F$, and observe that the set $S = \cup_{k=1}^n \Sigma_k$ is a finite subset of $T$, that is, $S \in \Sigma$. So $F_S$ is defined and is an element of $F$. Furthermore, $F_S$ is contained in each $F_{\Sigma_k}$, and hence in their intersection. So the intersection of any finite collection of elements of $F$ is nonempty as claimed.
Since $F$ is a set with the finite intersection property, there is an ultrafilter $U$ containing it. Define $\displaystyle{
\mathcal{A} = \left( \prod_{\Sigma_k \in \Sigma} \mathcal{A}_{\Sigma_k} \right) / U
}$.
We claim $\mathcal{A} \models T$. Take any $\phi \in T$. Observe that $F_{ \{ \phi \} } \in U$ by definition of $U$. Furthermore, if we define $\Phi = \{\Sigma_0 \in \Sigma \mid \mathcal{A}_{\Sigma_0} \models \phi \}$, we have $F_{ \{ \phi \} } \subseteq \Phi$. Hence, since $U$ is a filter and $F_{ \{ \phi \} } \in U$, $\Phi \in U$. Then Łoś's Theorem implies that $\mathcal{A} \models \phi$.

$\blacksquare$

Proof using Gödel's Completeness Theorem
This proof is by contraposition.  The idea is to exploit the finiteness of proofs and the relation between satisfiability and deducibility to show that if $T$ is not satisfiable, then it must have a finite subset which can be used to prove to a contradiction.

Suppose $T$ is not satisfiable.
Since $T$ has no models, it vacuously follows that $T\models \phi\wedge\neg\phi$ for some sentence $\phi$.  By Gödel's Completeness Theorem, this implies that $\phi\wedge\neg\phi$ is deducible from $T$.  But, any deduction from $T$ involves only finitely many sentences from $T$, so this means that there is a finite subset $\Delta$ of $T$ such that $\phi\wedge\neg\phi$ is deducible from $\Delta$.
By Soundness of First-Order Logic, this means that $\Delta\models\phi\wedge\neg\phi$.  Thus, $\Delta$ is not satisfiable.
$\blacksquare$


Proof using Henkin Construction
This proof actually demonstrates a stronger form of the Compactness Theorem by showing

If $T$ is finitely satisfiable and $\kappa$ is an infinite cardinal such that $\kappa > |\mathcal{L}|$, then $T$ is satisfiable by a model whose cardinality is at most $\kappa$.
This is stronger than the original statement, since it provides extra information about the model that is claimed to exist.
The proof is said to use a Henkin Construction because it involves the construction of a model all of whose elements are interpretations of the constant symbols of some language.  Such a model was used in Leon Albert Henkin's proof of the Completeness Theorem.  This special feature of the constructed model is what allows us to control its cardinality.

First, by this theorem, we can extend $\mathcal{L}$ and $T$ to find a language $\mathcal{L}^*$ of cardinality at most $\kappa$ and an $\mathcal{L}^*$-theory $T^*$ such that all finitely satisfiable $\mathcal{L}^*$-theories containing $T^*$ have the witness property.

Then, since finitely satisfiable theories have maximal finitely satisfiable extensions, we can find a finitely satisfiable $\mathcal{L}^*$-theory $T'$ containing $T^*$ such that $T'$ contains either $\phi$ or $\neg\phi$ for  each $\mathcal{L}^*$-sentence $\phi$.
Note that $T'$ has the witness property since it contains $T^*$.

Finally, by Maximal Finitely Satisfiable Theory with Witness Property is Satisfiable, $T'$ has a model.  Moreover, since $\mathcal{L}^*$ has cardinality at most $\kappa$ and hence has at most $\kappa$-many constant symbols, this theorem ensures that the model of $T'$ can be taken to have cardinality at most $\kappa$.

$\blacksquare$


Consequences
Overflow Theorem
The Class of Finite Models is not $\Delta$-Elementary
Existence of Non-Standard Models of Arithmetic


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Gödel's Completeness Theorem.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





