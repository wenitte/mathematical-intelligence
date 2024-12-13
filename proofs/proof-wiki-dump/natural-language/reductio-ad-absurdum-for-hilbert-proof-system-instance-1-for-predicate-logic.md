# 

Source: https://proofwiki.org/wiki/Reductio_ad_Absurdum_for_Hilbert_Proof_System_Instance_1_for_Predicate_Logic

Theorem
Let $\LL$ be the language of predicate logic.
Let $\mathscr H$ be instance 1 of a Hilbert proof system for predicate logic.

Then Reductio ad Absurdum is a derived rule of $\mathscr H$:

If, by making an assumption $\neg \phi$, we can infer a contradiction as a consequence, then we may infer $\phi$.
The conclusion $\phi$ does not depend upon the assumption $\neg \phi$.


Proof

This article needs to be linked to other articles.In particular: To the propositional tautologiesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Suppose that $\Sigma, \neg \phi \vdash_{\mathscr H} \bot$.
By Contradictory Antecedent, $\bot \implies \phi$ is a tautology.
Therefore, $\bot \implies \phi$ is an axiom of $\mathscr H$, so that by Modus Ponendo Ponens:

$\Sigma, \neg \phi \vdash_{\mathscr H} \phi$
By Deduction Theorem for Hilbert Proof System for Predicate Logic, it follows that:

$\Sigma \vdash_{\mathscr H} \neg \phi \implies \phi$
Next, note that $\paren{ \neg \phi \implies \phi } \implies \phi$ is a tautology and so an axiom of $\mathscr H$.
Hence by Modus Ponendo Ponens:

$\Sigma \vdash_{\mathscr H} \phi$
$\blacksquare$


Sources
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text{II}.11$ Some Strategies for Constructing Proofs: Lemma $\text{II}.11.4$




