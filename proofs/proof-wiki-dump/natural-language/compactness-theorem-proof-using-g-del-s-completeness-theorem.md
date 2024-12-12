# 

Source: https://proofwiki.org/wiki/Compactness_Theorem/Proof_using_G%C3%B6del%27s_Completeness_Theorem


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\LL$ be the language of predicate logic.
Let $T$ be a set of $\LL$-sentences.

Then $T$ is satisfiable if and only if $T$ is finitely satisfiable.


Proof
By definition, $T$ is finitely satisfiable means that every finite subset of $T$ is satisfiable.
Because the direction:

$T$ satisfiable implies $T$ finitely satisfiable
is trivial, the proof below justifies the converse:

$T$ finitely satisfiable implies $T$ satisfiable.

This proof is by contraposition.
The idea is to exploit the finiteness of proofs and the relation between satisfiability and deducibility to show that if $T$ is not satisfiable, then it must have a finite subset which can be used to prove to a contradiction.
Suppose $T$ is not satisfiable.
Since $T$ has no models, it vacuously follows that $T \models \phi \wedge \neg \phi$ for some sentence $\phi$.
By Gödel's Completeness Theorem, this implies that $\phi \wedge \neg \phi$ is deducible from $T$.
But any deduction from $T$ involves only finitely many sentences from $T$.
This means that there is a finite subset $\Delta$ of $T$ such that $\phi \wedge \neg \phi$ is deducible from $\Delta$.
By Soundness of First-Order Logic, this means that $\Delta \models \phi \wedge \neg \phi$.
Thus $\Delta$ is not satisfiable.
By the Rule of Transposition, $\Delta$ is satisfiable implies $T$ is satisfiable.
$\blacksquare$


Boolean Prime Ideal Theorem
This proof depends on the Boolean Prime Ideal Theorem (BPI), by way of Gödel's Completeness Theorem.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: If this proof feature here, keep this entry and resolve the linksIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2009: Kenneth Kunen: The Foundations of Mathematics ... (previous) ... (next): $\text {II}.7$ First-Order Logic Semantics: Theorem $\text {II}.7.15$




