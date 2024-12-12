# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Inconsistent_(Logic)



Theorem
The following definitions of the concept of Inconsistent in the context of Logic are equivalent:
Let $\LL$ be a logical language.
Let $\mathscr P$ be a proof system for $\LL$.

Definition $1$
A set $\FF$ of logical formulas is inconsistent for $\mathscr P$ if and only if:

For every logical formula $\phi$, $\FF \vdash_{\mathscr P} \phi$.
That is, every logical formula $\phi$ is a provable consequence of $\FF$.

Definition $2$
A set $\FF$ of logical formulas is inconsistent for $\mathscr P$ if and only if:

There exists a logical formula $\phi$ such that both
$\FF \vdash_{\mathscr P} \paren {\phi \land \neg \phi}$


Proof
Definition $(1)$ implies Definition $(2)$
Let $\FF$ be an inconsistent set of logical formulas by definition $1$.
Let $\phi$ be an arbitrary logical formula in $\FF$.
Then by hypothesis:

$\phi \land \lnot \phi$
is a logical formula in $\FF$.
Thus $\FF$ is an inconsistent set of logical formulas by definition $2$.
$\Box$


Definition $(2)$ implies Definition $(1)$
Let $\FF$ be an inconsistent set of logical formulas by definition $2$.
Then by definition:

$\exists \phi \in \F: \FF \vdash_{\mathscr P} \paren {\phi \land \neg \phi}$
That is, $\phi \land \neg \phi$ is a logical formula in $\FF$.
Let $\psi$ be an arbitrary logical formula.
By the Rule of Explosion:

$\forall \psi: \paren {\phi \land \neg \phi} \implies \psi$
That is:

$\forall \psi: \FF \vdash_{\mathscr P} \psi$
That is:

$\psi \in \FF$
As $\psi$ is arbitrary, it follows that every logical formula is a provable consequence of $\FF$.
Thus $\FF$ is an inconsistent set of logical formulas by definition $1$.
$\blacksquare$





