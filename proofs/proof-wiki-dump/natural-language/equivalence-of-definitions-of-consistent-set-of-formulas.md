# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Consistent_Set_of_Formulas



Theorem
The following definitions of the concept of Consistent Proof System for Propositional Logic are equivalent:

Let $\LL_0$ be the language of propositional logic.
Let $\mathscr P$ be a proof system for $\LL_0$.
Let $\FF$ be a collection of logical formulas.

Definition 1
Then $\FF$ is consistent for $\mathscr P$ if and only if:

There exists a logical formula $\phi$ such that $\FF \not \vdash_{\mathscr P} \phi$
That is, some logical formula $\phi$ is not a $\mathscr P$-provable consequence of $\FF$.

Definition 2
Suppose that in $\mathscr P$, the Rule of Explosion (Variant 3) holds.

Then $\FF$ is consistent for $\mathscr P$ if and only if:

For every logical formula $\phi$, not both of $\phi$ and $\neg \phi$ are $\mathscr P$-provable consequences of $\FF$


Proof
Definition 1 implies Definition 2
Suppose that $\FF \not \vdash_{\mathscr P} \phi$.
Aiming for a contradiction, suppose that there exists $\psi$ such that $\FF \vdash_{\mathscr P} \psi$ and $\FF \vdash_{\mathscr P} \neg \psi$.
Then by the Rule of Explosion (Variant 3):

$\psi, \neg \psi \vdash_{\mathscr P} \phi$
and therefore, combining the two above lines:

$\FF \vdash_{\mathscr P} \phi$
which is a contradiction.
$\Box$


Definition 2 implies Definition 1
According to definition 2, for every logical formula $\phi$ either $\phi$ or $\neg \phi$ is not a $\mathscr P$-provable consequence of $\FF$.
In particular, then, there exists a logical formula $\psi$ such that $\FF \not \vdash_{\mathscr P} \psi$.
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.11$ Some Strategies for Constructing Proofs: Lemma $\text{II}.11.3$




