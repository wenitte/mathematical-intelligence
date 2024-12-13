# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Equivalence_with_Negation/Formulation_1/Forward_Implication

Theorem
$\neg \paren {p \iff q} \vdash \paren {p \iff \neg q}$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \iff q} \vdash \paren {p \iff \neg q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \iff q}$

Premise

(None)




2


1

$\neg \paren {\paren {p \implies q} \land \paren {q \implies p} }$

Sequent Introduction

1

Rule of Material Equivalence


3


1

$\neg \paren {p \implies q} \lor \neg \paren {q \implies p}$

Sequent Introduction

2

De Morgan's Laws: Disjunction of Negations


4


4

$p$

Assumption

(None)




5


4

$p$

Law of Identity

4




6


6

$q$

Assumption

(None)




7


6

$p \implies q$

Rule of Implication: $\implies \II$

4 – 6

Assumption 4 has been discharged


8


6

$\neg \neg \paren {p \implies q}$

Double Negation Introduction: $\neg \neg \II$

7




9


1, 6

$\neg \paren {q \implies p}$

Modus Tollendo Ponens $\mathrm {MTP}_1$

3, 8




10


1, 6

$q \land \neg p$

Sequent Introduction

9

Conjunction with Negative is Equivalent to Negation of Conditional


11


1, 6

$\neg p$

Rule of Simplification: $\land \EE_2$

10




12


1, 4, 6

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 11




13


1, 4

$\neg q$

Proof by Contradiction: $\neg \II$

6 – 12

Assumption 6 has been discharged


14


1

$p \implies \neg q$

Rule of Implication: $\implies \II$

4 – 13

Assumption 4 has been discharged


15


15

$\neg q$

Assumption

(None)




16


15

$\neg q$

Law of Identity

15




17


17

$\neg p$

Assumption

(None)




18


17

$\neg q \implies \neg p$

Rule of Implication: $\implies \II$

16 – 17

Assumption 16 has been discharged


19


17

$p \implies q$

Sequent Introduction

18

Rule of Transposition


20


1, 17

$\neg \paren {q \implies p}$

Modus Tollendo Ponens $\mathrm {MTP}_1$

3, 19




21


1, 17

$q \land \neg p$

Sequent Introduction

20

Conjunction with Negative is Equivalent to Negation of Conditional


22


1, 17

$q$

Rule of Simplification: $\land \EE_1$

21




23


1, 15, 17

$\bot$

Principle of Non-Contradiction: $\neg \EE$

15, 22




24


1, 15

$p$

Proof by Contradiction: $\neg \II$

17 – 23

Assumption 17 has been discharged


25


1

$\neg q \implies p$

Rule of Implication: $\implies \II$

15 – 24

Assumption 15 has been discharged


26


1

$\paren {p \iff \neg q}$

Biconditional Introduction: $\iff \II$

14, 25


$\blacksquare$


Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.





