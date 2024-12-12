# 

Source: https://proofwiki.org/wiki/Axiom_of_Subsets_Equivalents


The validity of the material on this page is questionable.In particular: The flaw in formulation in the first proof puts this whole page without proper foundation. Curse you, Takeuti/Zaring!You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This page has been identified as a candidate for refactoring of advanced complexity.In particular: There are two results here. Separate page for each.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

It has been suggested that this page be renamed.In particular: using Specification not SubsetsTo discuss this page in more detail, feel free to use the talk page.


Theorem
The Axiom of Specification states that:

$\forall z: \forall \map P y: \exists x: \forall y: \paren {y \in x \iff \paren {y \in z \land \map P y} }$
We will prove that this statement is equivalent to the following statements:

$\forall z: \forall A: \paren {\paren {z \cap A} \in U}$
$\forall z: \forall A: \paren {A \subseteq z \implies A \in U}$
In the above statements, the universe is $U$.


Proof of the First Statement
The Axiom of Specification states:

$\forall z: \forall \map P y: \exists x: \forall y: \paren {y \in x \iff \paren {y \in z \land \map P y} }$
$y \in A$ is substituted for the propositional function $\map P y$.


The validity of the material on this page is questionable.In particular: "$y \in A$ is substituted for $\map P y$". This is definitely NOT valid! Such is the content of Unrestricted Comprehension, the source of Russell...You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
This leads to the statement:

$\forall z: \forall A: \exists x: \forall y: \paren {y \in x \iff \paren {y \in z \land y \in A} }$
By definition of intersection:

$\forall z: \forall A: \exists x: \forall y: \paren {y \in x \iff y \in \paren {z \cap A} }$
By definition of class equality:

$\forall z: \forall A: \exists x = \paren {z \cap A}$
This is equivalent to:

$\forall z: \forall A: \paren {z \cap A} \in U$
because $A \in U \iff \exists x = A$.
$\Box$


Re-derivation of the Axiom of Specification
Only bi-conditional ($\iff$) statements were used to prove the first result, so it is possible to reverse the step order and arrive at the original Axiom of Specification by Biconditional is Commutative.
$\Box$
Although this statement is shorter, it uses defined terms, and is thus unsuitable as an axiom.


Proof of the Second Statement
We will take the result of the first statement:

$\forall z: \forall A: \paren {\paren {z \cap A} \in U}$
We will now take the definition of subset:

$A \subseteq B \iff \forall x: \paren {x \in A \implies x \in B}$
From Intersection with Subset is Subset:

$A \subseteq B \iff \paren {A \cap B} = A$
Thus:

$A \subseteq B \implies \paren {\paren {A \cap B} \in U \implies A \in U}$
We will take the result of the first statement:

$\forall z: \forall A: \paren {\paren {z \cap A} \in U}$
Using the above two statements, substituting $z$ for $B$:

$\forall z: \forall A: \paren {A \subseteq z \implies A \in U}$
$\Box$


Re-derivation of the Axiom of Specification
Because $\paren {A \cap z} \subseteq z$, the antecedent of $\forall z: \forall A: \paren {A \subseteq z \implies A \in U}$ is satisfied.
We now arrive at the first statement (above), which in turn can prove the Axiom of Specification:

$\forall z: \forall A: \paren {A \cap z} \in U$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 5.12$, $\S 5.13$




