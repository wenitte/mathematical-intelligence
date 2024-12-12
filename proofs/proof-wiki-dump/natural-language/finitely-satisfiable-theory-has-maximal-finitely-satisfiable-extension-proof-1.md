# 

Source: https://proofwiki.org/wiki/Finitely_Satisfiable_Theory_has_Maximal_Finitely_Satisfiable_Extension/Proof_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $T$ be a finitely satisfiable $\LL$-theory.

Then there exists a finitely satisfiable $\LL$-theory $T'$ which contains $T$ as a subset such that:

for all $\LL$-sentences $\phi$, either $\phi \in T'$ or $\neg \phi \in T'$.


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


Axiom of Choice
This proof depends on the Axiom of Choice, by way of Zorn's Lemma.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





