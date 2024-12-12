# 

Source: https://proofwiki.org/wiki/Equality_implies_Substitution


This page has been identified as a candidate for refactoring of basic complexity.In particular: There are two separate results being proved here - each needs its own page.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\map P x$ denote a Well-Formed Formula which contains $x$ as a free variable.
Then the following are tautologies:

$\forall x: \paren {\map P x \iff \exists y: \paren {y = x \land \map P y} }$
$\forall x: \paren {\map P x \iff \forall y: \paren {y = x \implies \map P y} }$
Note that when $y$ is substituted for $x$ in either formula, it is false in general; compare Confusion of Bound Variables.


Proof

The validity of the material on this page is questionable.In particular: Inelegant and unclear to the point of soliciting purgingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By Universal Affirmative implies Particular Affirmative iff First Predicate is not Vacuous:

$\paren {\exists y: y = x \land \forall y: \paren {y = x \implies \map P x} } \implies \exists y: \paren {y = x \land \map P x}$
Then:














\(\ds \)

\(\)







\(\ds x = x\)





Equality is Reflexive














\(\ds \)

\(\leadsto\)







\(\ds \exists y: y = x\)





Existential Generalisation














\(\ds \)

\(\leadsto\)







\(\ds \paren {\forall y: \paren {y = x \implies \map P x} \implies \exists y: \paren {y = x \land \map P x} }\)





Modus Ponendo Ponens



$\Box$















\(\ds \paren { y = x \land \map P y}\)

\(\implies\)







\(\ds \map P x\)





Substitutivity of Equality




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \exists y: \, \)



\(\ds \paren {y = x \land \map P y}\)

\(\implies\)







\(\ds \map P x\)





Universal Generalisation




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \forall y: \, \)



\(\ds \paren {y = x \implies \map P y}\)

\(\implies\)







\(\ds \map P x\)





Hypothetical Syllogism with first lemma




Work In ProgressIn particular: Theorem needs to connect the first implications.  Universal Generalisation is not sufficient.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
$\Box$

Similarly:














\(\ds \)

\(\)







\(\ds \map P x\)














\(\ds \leadsto \ \ \)





\(\ds y = x\)

\(\implies\)







\(\ds \map P y\)





Substitutivity of Equality




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \forall y: \, \)



\(\ds y = x\)

\(\implies\)







\(\ds \map P y\)





Universal Generalisation




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \exists y: \, \)



\(\ds y = x\)

\(\land\)







\(\ds \map P y\)





First lemma



The above two statements comprise the other direction of the biconditional assertions.
Together, $(1)$, $(2)$, $(3)$, and $(4)$ prove the two assertions.
$\blacksquare$


Sources
1963: Willard Van Orman Quine: Set Theory and Its Logic: $\S 6.1$
1963: Willard Van Orman Quine: Set Theory and Its Logic: $\S 6.2$




