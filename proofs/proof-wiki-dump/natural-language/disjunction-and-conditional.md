# 

Source: https://proofwiki.org/wiki/Disjunction_and_Conditional


This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorems
Modus Tollendo Ponens
Formulation 1
$p \lor q \dashv \vdash \neg p \implies q$
Formulation 2
$\vdash \paren {p \lor q} \iff \paren {\neg p \implies q}$


Rule of Material Implication
Formulation 1
$p \implies q \dashv \vdash \neg p \lor q$
Formulation 2
$\vdash \paren {p \implies q} \iff \paren {\neg p \lor q}$

Both of the above come in negative forms:














\(\ds \neg \paren {p \implies q}\)

\(\dashv \vdash\)







\(\ds \neg \paren {\neg p \lor q}\)




















\(\ds \neg \paren {\neg p \implies q}\)

\(\dashv \vdash\)







\(\ds \neg \paren {p \lor q}\)










Disjunction is definable through implication:

$p \lor q \dashv \vdash \paren {p \implies q} \implies q$


Alternative rendition
They can alternatively be rendered as:








\(\ds \vdash \ \ \)





\(\ds \paren {\neg \paren {p \implies q} }\)

\(\iff\)







\(\ds \paren {\neg \paren {\neg p \lor q} }\)














\(\ds \vdash \ \ \)





\(\ds \paren {\neg \paren {\neg p \implies q} }\)

\(\iff\)







\(\ds \paren {\neg \paren {p \lor q} }\)














\(\ds \vdash \ \ \)





\(\ds \paren {p \lor q}\)

\(\iff\)







\(\ds \paren {\paren {p \implies q} \implies q}\)










They can be seen to be logically equivalent to the forms above.


Proof
By the tableau method of natural deduction:


$\neg \paren {p \implies q} \vdash \neg \paren {\neg p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \implies q}$

Premise

(None)




2


2

$\neg p \lor q$

Assumption

(None)

Assume the opposite of what is to be proved ...


3


2

$p \implies q$

Sequent Introduction

2

Rule of Material Implication


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1

... demonstrating a contradiction


5


1

$\neg \paren {\neg p \lor q}$

Proof by Contradiction: $\neg \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$

By the tableau method of natural deduction:


$\neg \paren {\neg p \lor q} \vdash \neg \paren {p \implies q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {\neg p \lor q}$

Premise

(None)




2


2

$p \implies q$

Assumption

(None)

Assume the opposite of what is to be proved ...


3


2

$\neg p \lor q$

Sequent Introduction

2

Rule of Material Implication


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1

... demonstrating a contradiction


5


1

$\neg \paren {p \implies q}$

Proof by Contradiction: $\neg \II$

2 – 4

Assumption 2 has been discharged
$\blacksquare$
Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Rule of Material Implication.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.

By the tableau method of natural deduction:


$\neg \paren {\neg p \implies q} \vdash \neg \paren {p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {\neg p \implies q}$

Premise

(None)




2


2

$p \lor q$

Assumption

(None)

Assume the opposite of what is to be proved ...


3


2

$\neg p \implies q$

Sequent Introduction

2

Modus Tollendo Ponens


4


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

3, 1

... demonstrating a contradiction


5


1

$\neg \paren {p \lor q}$

Proof by Contradiction: $\neg \II$

2 – 4

Assumption 2 has been discharged
$\blacksquare$

By the tableau method of natural deduction:


$\neg \paren {p \lor q} \vdash \neg \paren {\neg p \implies q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \lor q}$

Premise

(None)




2


2

$\neg p \implies q$

Assumption

(None)

Assume the opposite of what is to be proved ...


3


1

$\neg p \land \neg q$

Sequent Introduction

1

De Morgan's Laws: Conjunction of Negations


4


1

$\neg p$

Rule of Simplification: $\land \EE_1$

3




5


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 4

... from the assumption


6


1

$\neg q$

Rule of Simplification: $\land \EE_2$

3




7


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

5, 6

... demonstrating a contradiction


8


1

$\neg \paren {\neg p \implies q}$

Proof by Contradiction: $\neg \II$

2 – 7

Assumption 2 has been discharged

$\blacksquare$

By the tableau method of natural deduction:


$p \lor q \vdash (p \implies q) \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Premise

(None)




2


2

$p \implies q$

Assumption

(None)




3


3

$p$

Assumption

(None)




4


2, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




5


5

$q$

Assumption

(None)




6


2

$r$

Proof by Cases: $\text{PBC}$

1, 3 – 4, 5 – 5

Assumptions 3 and 5 have been discharged


7


1

$\paren {p \implies q} \implies q$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Comment
Note that this:

$\neg \paren {\neg p \implies q} \dashv \vdash \neg \paren {p \lor q}$
can be proved in both directions without resorting to the Law of Excluded Middle.
All the others:

$p \lor q \vdash \neg p \implies q$
$\neg p \lor q \vdash p \implies q$
$\neg \paren {p \implies q} \vdash \neg \paren {\neg p \lor q}$
are not reversible in intuitionistic logic.


Proof by Truth Table
We apply the Method of Truth Tables to the propositions in turn.
As can be seen by inspection, in all cases the truth values under the main connectives match for all boolean interpretations.

$\begin {array} {|cccc||ccccc|} \hline
\neg & (p & \lor & q) & \neg & (\neg & p & \implies & q) \\
\hline
\T & \F & \F & \F & \T & \T & \F & \F & \F \\
\F & \F & \T & \T & \F & \T & \F & \T & \T \\
\F & \T & \T & \F & \F & \F & \T & \T & \F \\
\F & \T & \T & \T & \F & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$

$\begin {array} {|cccc||ccccc|} \hline
\neg & (p & \implies & q) & \neg & (\neg & p & \lor & q) \\
\hline
\F & \F & \T & \F & \F & \T & \F & \T & \F \\
\F & \F & \T & \T & \F & \T & \F & \T & \T \\
\T & \T & \F & \F & \T & \F & \T & \F & \F \\
\F & \T & \T & \T & \F & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$





