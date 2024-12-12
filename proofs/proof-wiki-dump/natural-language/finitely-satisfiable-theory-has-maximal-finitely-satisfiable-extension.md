# 

Source: https://proofwiki.org/wiki/Finitely_Satisfiable_Theory_has_Maximal_Finitely_Satisfiable_Extension


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $T$ be a finitely satisfiable $\LL$-theory.

Then there exists a finitely satisfiable $\LL$-theory $T'$ which contains $T$ as a subset such that:

for all $\LL$-sentences $\phi$, either $\phi \in T'$ or $\neg \phi \in T'$.

This article, or a section of it, needs explaining.In particular: Presumably "sentence" is Definition:Sentence#Plain Sentence?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Lemma
Let $\LL$ be a language of predicate logic.
Let $T$ be a finitely satisfiable $\LL$-theory.
Let $\phi$ be an $\LL$-sentence.

Then either:

$T \cup \set \phi$
or:

$T \cup \set {\neg \phi}$
is finitely satisfiable.


Proof 1
The set of all finitely satisfiable $\LL$-theories containing $T$ forms an ordered set using subset inclusion as the ordering.


This article, or a section of it, needs explaining.In particular: Link to "subset is ordering"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $C$ be a non-empty chain in this ordered set.
Let $\ds T_C = \bigcup_{\Sigma \mathop \in C} \Sigma$.
Let $\Delta$ be a finite subset of $T_C$.
Then there exists a single $\Sigma$ in $C$ which contains $\Delta$.
Since this $\Sigma$ is finitely satisfiable by definition, this means that $\Delta$ is satisfiable.
Hence $T_C$ is finitely satisfiable.
Since each $\Sigma \in C$ is contained in $T_C$, this means that $T_C$ is an upper bound for $C$ in the ordered set.

Thus, by Zorn's Lemma, there is a finitely satisfiable $\LL$-theory $T'$ containing $T$ such that $T'$ contains all other such theories.

Let $\phi$ be an $\LL$-sentence.
Let $\phi \nsubseteq T'$.
Aiming for a contradiction, suppose $T' \cup \set \phi$ were finitely satisfiable.
Then by definition of $T'$, $T'$ would contain $T' \cup \set \phi$ as a subset.
This would mean that $T'$ contains $\phi$, which contradicts the assumption.
Thus $T' \cup \set \phi$ is not finitely satisfiable.
By the lemma, $T' \cup \set {\neg \phi}$ is finitely satisfiable.
Thus, by definition of $T'$, $T'$ contains $T' \cup \set {\neg \phi}$ as a subset.
Hence $T'$ contains $\neg \phi$.
$\blacksquare$


Proof 2
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
This theorem depends on the Boolean Prime Ideal Theorem (BPI).
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





