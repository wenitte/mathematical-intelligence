# 

Source: https://proofwiki.org/wiki/Duality_Principle_(Category_Theory)/Formal_Duality

This proof is about Duality Principle in the context of Category Theory. For other uses, see Duality Principle.


This page has been identified as a candidate for refactoring of basic complexity.In particular: There are two separate results here, each with its own proof.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Morphisms-Only Category Theory
Let $\Sigma$ be a statement in the language of category theory.
Suppose $\Sigma$ is provable from the axioms for morphisms-only category theory $\mathrm{MOCT}$:

$\mathrm{MOCT} \vdash \Sigma$

Then the dual statement $\Sigma^*$ is also provable from these axioms, i.e.:

$\mathrm{MOCT} \vdash \Sigma^*$


Object Category Theory
Let $\mathrm{CT}$ be the collection of seven axioms on Characterization of Metacategory via Equations.
Suppose a statement $\Sigma$ about metacategories follows from the axioms $\mathrm{CT}$.

Then so does its dual statement $\Sigma^*$.


Proof
Proof for Morphisms-Only Category Theory
From a formal perspective, if one would have derived (for some collection of statements $\Delta$):

$\Delta \vdash \Sigma$
without using the axioms, then because $R_\circ$, $\operatorname{dom}$ and $\operatorname{cod}$ would still be undefined, it follows that necessarily also:

$\Delta^* \vdash \Sigma^*$
In this correspondence, taking $\Delta$ to be $\mathrm{CT}$, it follows that:

$\mathrm{CT} \vdash \Sigma$
implies:

$\mathrm{CT}^* \vdash \Sigma^*$

As the Category Axioms are Self-Dual, in that $\mathrm{CT}^* = \mathrm{CT}$, we obtain the result.
$\blacksquare$

Proof for Object Category Theory

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 3.1$: Proposition $3.1$




