# 

Source: https://proofwiki.org/wiki/Language_of_Predicate_Logic_has_Unique_Parsability


This page has been identified as a candidate for refactoring of medium complexity.In particular: This should be rewritten in accordance with Language of Propositional Logic has Unique ParsabilityUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Each WFF of predicate logic which starts with a left bracket or a negation sign has exactly one main connective.


This article, or a section of it, needs explaining.In particular: probably, in the correct formulation of 'main connective', the quantifiers ought to be connectives as wellYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
We have the following cases:

$\mathbf A = \neg \mathbf B$, where $\mathbf B$ is a WFF of length $k$.
$\mathbf A = \paren {\mathbf B \circ \mathbf C}$ where $\circ$ is one of the binary connectives.
$\mathbf A = \map p {t_1, t_2, \ldots, t_n}$, where $t_1, t_2, \ldots, t_n$ are terms, and $p \in \PP_n$.
$\mathbf A = \paren {Q x: \mathbf B}$, where $\mathbf B$ is a WFF of length $k - 5$, $Q$ is a quantifier ($\forall$ or $\exists$) and $x$ is a variable.
We deal with these in turn.

Cases 1 and 2 are taken care of by Language of Propositional Logic has Unique Parsability.
Cases 3 and 4 do not start with either a left bracket or a negation sign, so do not have to be investigated. 


This theorem requires a proof.In particular: clearly, under the new, correct formal grammar, case 4 does need investigationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability: $\S 2.2$: Theorem $2.2.4$




