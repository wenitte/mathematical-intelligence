# 

Source: https://proofwiki.org/wiki/Characterization_of_Minimal_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.In particular: including categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Work In ProgressIn particular: Check whether this is not already covered in the more recent Class Theory work (mainly from the Smullyan and Fitting source) under a more explanatory name.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.


Theorem
Let $C$ be a class.
Let $\prec$ be a relation on $C$.
Let $B$ be a subclass of $C$.
Let $x \in B$.
Let $S_x = \set {y \in C: y \prec x \text{ and } y \ne x}$ be the initial segment of $x$ in $C$.
Then $x$ is a minimal element of $B$ if and only if $B \cap S_x = \O$.


Proof
Necessary Condition
Suppose $x$ is a minimal element of $B$.
Then for each $z \in B$ such that $z \ne x$, $z \nprec x$.
Thus $S_x \cap B = \O$.
$\Box$


Sufficient Condition
Suppose that $x$ is not a minimal element of $B$.
Then for some $z \in B$, $z \prec x$ and $z \ne x$.
Thus $z \in S_x$.
Since $z \in B$, $B \cap S_x \ne \O$.
$\blacksquare$





