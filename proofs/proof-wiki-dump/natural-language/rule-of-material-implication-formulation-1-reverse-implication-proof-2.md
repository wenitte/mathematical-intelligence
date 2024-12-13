# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_1/Reverse_Implication/Proof_2

Theorem
$\neg p \lor q \vdash p \implies q$


Proof
By the tableau method of natural deduction:


$\neg p \lor q \vdash p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \lor q$

Premise

(None)




2


1

$\neg \paren {\neg \neg p \land \neg q}$

Sequent Introduction

1

De Morgan's Laws: Disjunction


3


1

$\neg \neg p \implies q$

Sequent Introduction

2

Conditional is Equivalent to Negation of Conjunction with Negative: $\neg \paren {p \land \neg q} \vdash p \implies q$


4


4

$p$

Assumption

(None)




5


4

$\neg \neg p$

Double Negation Introduction: $\neg \neg \II$

4




6


1, 4

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 5




7


1

$p \implies q$

Rule of Implication: $\implies \II$

4 – 6

Assumption 4 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $48$




