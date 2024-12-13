# 

Source: https://proofwiki.org/wiki/Semantic_Consequence_of_Set_minus_Tautology

Theorem
Let $\LL$ be a logical language.
Let $\mathscr M$ be a formal semantics for $\LL$.
Let $\FF$ be a set of logical formulas from $\LL$.
Let $\phi$ be an $\mathscr M$-semantic consequence of $\FF$.
Let $\psi \in \FF$ be a tautology.

Then:

$\FF \setminus \set \psi \models_{\mathscr M} \phi$
that is, $\phi$ is also a semantic consequence of $\FF \setminus \set \psi$.


Proof
Let $\MM$ be a model of $\FF \setminus \set \psi$.
Since $\psi$ is a tautology, it follows that:

$\MM \models_{\mathscr M} \psi$

Hence:

$\MM \models \FF$
which, by hypothesis, entails:

$\MM \models \phi$

Since $\MM$ was arbitrary, it follows by definition of semantic consequence that:

$\FF \setminus \set \psi \models_{\mathscr M} \phi$
$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.5.3$: Theorem $2.54$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.16$




