# 

Source: https://proofwiki.org/wiki/Finitely_Satisfiable_Theory_has_Maximal_Finitely_Satisfiable_Extension/Proof_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $T$ be a finitely satisfiable $\LL$-theory.
There is a finitely satisfiable $\LL$-theory $T'$ which contains $T$ as a subset such that for all $\LL$-sentences $\phi$, either $\phi \in T'$ or $\neg\phi \in T'$.


This article, or a section of it, needs explaining.In particular: Does this actually mean the same as the statement of the theorem in Finitely Satisfiable Theory has Maximal Finitely Satisfiable Extension? If so, replace it. If not, then it is a different proof altogether. If the two statements are equivalent, then this needs to be demonstrated.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Lemma
Let $\LL$ be a language of predicate logic.
Let $T$ be a finitely satisfiable $\LL$-theory.
Let $\phi$ be an $\LL$-sentence.

Then either:

$T \cup \set \phi$
or:

$T \cup \set {\neg \phi}$
is finitely satisfiable.


Proof
Let $\AA$ be the set of finitely satisfiable extensions of $T$.
By the lemma, for each element $S$ of $\AA$ and each $\LL$-sentence $\phi$, either $S \cup \set \phi \in \AA$ or $S \cup \set {\neg \phi} \in \AA$.
$\AA$ has finite character, by the following argument:
Let $S \in \AA$.
Let $F$ be a finite subset of $S$.
Then $S$ is satisfiable and hence finitely satisfiable.
Thus in $\AA$.

Let $S$ be a theory on $\LL$.
Let every finite subset of $S$ be finitely satisfiable.
Then every finite subset of $S$ is satisfiable.
Therefore $S$ is finitely satisfiable.
Thus $\AA$ has finite character.
By the Restricted Tukey's Theorem, $\AA$ has an element $T'$ such that:

for each $\LL$-sentence $\phi$, either $\phi \in T'$ or $\neg \phi \in T'$.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Restricted Tukey's Theorem.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





