# 

Source: https://proofwiki.org/wiki/Relation_Compatible_with_Group_Operation_is_Reflexive_or_Antireflexive

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\RR$ be a relation on $G$ that is compatible with $\circ$.

Then $\RR$ is reflexive or antireflexive.


Proof
Suppose that $\RR$ is not antireflexive.
Then there is some $x \in G$ such that $x \mathrel \RR x$.
Let $y \in G$.
Then by the definition of compatibility:

$\paren {x \circ \paren {x^{-1} \circ y} } \mathrel \RR \paren {x \circ \paren {x^{-1} \circ y} }$
By Group Axiom $\text G 1$: Associativity and Group Axiom $\text G 3$: Existence of Inverse Element:

$y \mathrel \RR y$
Since this holds for arbitrary $y$, $\RR$ is reflexive.
Thus $\RR$ is either reflexive or antireflexive.
$\blacksquare$


This article, or a section of it, needs explaining.In particular: While the above demonstrates that if such a relation is not antireflexive it must be reflexive, it does not approach the task of demonstrating that such a relation can actually *be* antireflexive.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.




