# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Formulation_2/Forward_Implication/Proof

Theorem

This page has been identified as a candidate for refactoring of basic complexity.In particular: A layer is missing hereUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
$\vdash \paren {p \implies q} \implies \paren {\neg q \implies \neg p}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \implies \paren {\neg q \implies \neg p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Assumption

(None)




2


2

$\neg q$

Assumption

(None)




3


1, 2

$\neg p$

Modus Tollendo Tollens (MTT)

1, 2




4


1

$\neg q \implies \neg p$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged


5




$\paren {p \implies q} \implies \paren {\neg q \implies \neg p}$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T13}$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $42$




