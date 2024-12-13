# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_WRT_Filter_Complement_is_Prime_in_Distributive_Lattice/Lemma_4


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.In particular: plenty throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Maximal Ideal WRT Filter Complement is Prime in Distributive Lattice
Let $\struct {S, \vee, \wedge, \preceq}$ be a distributive lattice.
Let $F$ be a filter in $L$.
Let $M$ be an ideal in $L$ which is disjoint from $F$ such that:

no ideal in $L$ larger than $M$ is disjoint from $F$.

Let $N = \set {x \in L: \exists m \in M: x \le m \vee a}$.

Then we have that:

$N \cap F = \O$


Proof
Aiming for a contradiction, suppose $x \in N \cap F$.
Then:

$x \in N$
so for some $m \in M$:

$x \le m \vee a$
Furthermore, $x \in F$.
So by the definition of a filter:

$m \vee a \in F$
But this contradicts our assumption that $\forall m \in M: m \vee a \notin F$.


This article, or a section of it, needs explaining.In particular: The above assertion must come from the result of one of the other lemmata, or otherwise a priori.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

$\blacksquare$





