# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Countable_Set



Theorem
Let $S$ be a set.

The following definitions of the concept of Countable Set are equivalent:

Definition 1
$S$ is countable if and only if there exists an injection:

$f: S \to \N$
Definition 2
$S$ is countable if and only if it is finite or countably infinite.


Proof
Definition 1 implies Definition 2
Let $S$ be a countable set by Definition 1.
Then there is an injection $f: S \to \N$.
By Law of Excluded Middle, $S$ is finite or infinite.
If $S$ is finite, then it trivially satisfies Definition 2.


This article, or a section of it, needs explaining.In particular: Implicitly we take $S \cong f[S]$ hereYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
If $S$ is infinite, then it is countably infinite by Infinite Set of Natural Numbers is Countably Infinite, and thus satisfies Definition 2.
$\Box$


Definition 2 implies Definition 1
Let $S$ be a countable set by Definition 2.
Then $S$ is finite or countably infinite.
If $S$ is countably infinite, then there is a bijection $f: S \to \N$, which is injective by definition.
If $S$ is finite, then for some natural number $n$ there is a bijection $f: S \to \N_n$, where $\N_n$ is the initial segment of $\N$ determined by $n$.

Let $f': S \to \N$ be the extension of $f$ to $\N$.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then $f'$ is an injection.
Thus in either case $S$ is countable by Definition 1.
$\blacksquare$


The validity of the material on this page is questionable.In particular: Does it really need LEM for this? LEM states that "if $A$ is not false, then it is true", not "if $A$ is not true, then it is not-true". As it defined here, a set is infinite if it is not finite. That should not require LEM to accept.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.



This needs considerable tedious hard slog to complete it.In particular: Include the proof for Definition:Countable Set/Definition 3To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 7$: Countable and Uncountable Sets: Theorem $7.1$




