# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Consistent_Proof_System



Theorem
The following definitions of the concept of Consistent Proof System for Propositional Logic are equivalent:

Let $\LL_0$ be the language of propositional logic.
Let $\mathscr P$ be a proof system for $\LL_0$.

Definition 1
Then $\mathscr P$ is consistent if and only if:

There exists a logical formula $\phi$ such that $\not \vdash_{\mathscr P} \phi$
That is, some logical formula $\phi$ is not a theorem of $\mathscr P$.

Definition 2
Suppose that in $\mathscr P$, the Rule of Explosion (Variant 3) holds.

Then $\mathscr P$ is consistent if and only if:

For every logical formula $\phi$, not both of $\phi$ and $\neg \phi$ are theorems of $\mathscr P$


Proof
Definition 1 implies Definition 2
Suppose that $\neg \vdash_{\mathscr P} \phi$.
Suppose additionally that there is some logical formula $\psi$ such that:

$\vdash_{\mathscr P} \psi, \neg \psi$
By the Rule of Explosion:

$\psi, \neg \psi \vdash_{\mathscr P} \phi$
By Provable Consequence of Theorems is Theorem, we conclude:

$\vdash_{\mathscr P} \phi$
in contradiction to our assumption.
$\Box$


Definition 2 implies Definition 1
Suppose either $\phi$ or $\neg \phi$ is not a theorem of $\mathscr P$.
The implication follows trivially.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.4$: Conditions for an Axiom System: Theorem $3$, Theorem $4$




