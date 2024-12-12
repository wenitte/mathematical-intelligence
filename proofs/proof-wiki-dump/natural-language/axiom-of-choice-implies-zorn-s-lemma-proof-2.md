# 

Source: https://proofwiki.org/wiki/Axiom_of_Choice_implies_Zorn%27s_Lemma/Proof_2

Theorem
Let the Axiom of Choice be accepted.
Then Zorn's Lemma holds.


Proof
Aiming for a contradiction, suppose that for each $x \in X$ there is a $y \in X$ such that $x \prec y$.
By the Axiom of Choice, there is a mapping $f: X \to X$ such that:

$\forall x \in X: x \prec \map f x$
Let $\CC$ be the set of all chains in $X$.
By the premise, each element of $\CC$ has an upper bound in $X$.
Thus by the Axiom of Choice, there is a mapping $g: \CC \to X$ such that for each $C \in \CC$, $\map g C$ is an upper bound of $C$.

Let $p$ be an arbitrary element of $X$.
Define a mapping $h: \On \to X$ by transfinite recursion thus:














\(\ds \map h 0\)

\(=\)







\(\ds p\)




















\(\ds \map h {\alpha^+}\)

\(=\)







\(\ds \map f {\map h \alpha}\)




















\(\ds \map h \lambda\)

\(=\)







\(\ds \map f {\map g {h \sqbrk \lambda} }\)





if $\lambda$ is a limit ordinal



when $h \sqbrk \lambda$ is the image set of $\lambda$ under $h$.


This article, or a section of it, needs explaining.In particular: If you're defining the mapping $h$, how can you define it in terms of itself? $\map h \lambda = \map f {\map g {h \sqbrk \lambda} }$ looks weird. Might be worth going to the Talk page to discuss.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then $h$ is strictly increasing, and thus injective.


This article, or a section of it, needs explaining.In particular: The above statement needs to be justified.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $h'$ be the restriction of $h$ to $\On \times \map h \On$.
Then ${h'}^{-1}$ is a surjection from $\map h \On \subseteq X$ onto $\On$.
By the Axiom of Replacement, $\On$ is a set.
By the Burali-Forti Paradox, this is a contradiction.
Thus we conclude that some element of $X$ has no strict successor, and is thus maximal.
$\blacksquare$





