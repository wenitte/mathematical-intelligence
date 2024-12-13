# 

Source: https://proofwiki.org/wiki/Proof_by_Contradiction_for_Hilbert_Proof_System_Instance_1_for_Predicate_Logic

Theorem
Let $\LL$ be the language of predicate logic.
Let $\mathscr H$ be instance 1 of a Hilbert proof system for predicate logic.

Then Proof by Contradiction is a derived rule of $\mathscr H$:

If, by making an assumption $\phi$, we can infer a contradiction as a consequence, then we may infer $\neg \phi$.
The conclusion $\neg \phi$ does not depend upon the assumption $\phi$.


Proof

This article needs to be linked to other articles.In particular: To the propositional tautologiesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Suppose that $\Sigma, \phi \vdash_{\mathscr H} \bot$.
By Contradictory Antecedent, $\bot \implies \neg\phi$ is a tautology.
Therefore, $\bot \implies \neg\phi$ is an axiom of $\mathscr H$, so that by Modus Ponendo Ponens:

$\Sigma, \phi \vdash_{\mathscr H} \neg \phi$
By Deduction Theorem for Hilbert Proof System for Predicate Logic, it follows that:

$\Sigma \vdash_{\mathscr H} \phi \implies \neg \phi$
Next, note that $\paren {\phi \implies \neg \phi} \implies \neg \phi$ is a tautology and so an axiom of $\mathscr H$.
Hence by Modus Ponendo Ponens:

$\Sigma \vdash_{\mathscr H} \neg \phi$
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.11$ Some Strategies for Constructing Proofs: Lemma $\text{II}.11.4$




