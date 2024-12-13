# 

Source: https://proofwiki.org/wiki/Non-Successor_Element_of_Peano_Structure_is_Unique

Theorem
Let $\struct {P, s, 0}$ be a Peano structure.

Then:

$P \setminus s \sqbrk P$ is a singleton
where:

$\setminus$ denotes set difference
$s \sqbrk P$ denotes the image of the mapping $s$.

It follows that the non-successor element $0$ is the only element of $P$ with this property.


Proof

This article contains statements that are justified by handwavery.In particular: It is not explicit which formulation of Peano's axioms is used, while this is very relevant for this elementary resultYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $T = P \setminus s \sqbrk P$.
From Axiom $(\text P 4)$ we know that $T \ne \O$.
Now suppose that $t_1 \in T$ and $t_2 \in T$.
Aiming for a contradiction, suppose $t_1 \ne t_2$.
Define $A = P \setminus \set {t_2}$.
Thus $t_1 \in A \ne P$.
Moreover, by the nature of $t_2$:

$x \in A \implies \map s x \in A$
Thus, by the induction axiom $(\text P 5)$, $A = P$.
From this contradiction it follows that $P \setminus s \sqbrk P$ cannot contain two different elements.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 4$: The natural numbers




