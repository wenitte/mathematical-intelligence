# 

Source: https://proofwiki.org/wiki/Compactness_Theorem/Proof_using_Henkin_Construction


This article has been proposed for deletion.In particular: There isn't much of a reason to have this page. Similar methodology is used in my new Compactness Theorem/Proof using Consistency Principle, but without requiring the Axiom of Choice to well-order the language (which would be required here for the stronger result). I plan to use a bona-fide Henkin construction to prove Gödel's Completeness Theorem in the special case of well-orderable languages, including the cardinality constraint. This would yield both the stronger version of Compatness listed here and the BPI-only version of Completeness with minimal extra effort. When that is done, I might repurpose Compactness Theorem/Proof using Gödel's Completeness Theorem for the former.Please assess the validity of this proposal.To discuss this page in more detail, feel free to use the talk page.

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

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Lots of discursive material that, if it needs to be anywhere at all, needs to be on a different page. Also, sentences are too long and imprecise.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
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


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: If this proof feature here, keep this entry and resolve the linksIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text {II}.7$ First-Order Logic Semantics: Theorem $\text {II}.7.15$




