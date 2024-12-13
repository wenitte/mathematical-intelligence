# 

Source: https://proofwiki.org/wiki/Peirce%27s_Law_is_Equivalent_to_Law_of_Excluded_Middle



Theorem
Peirce's Law:

$\paren {p \implies q} \implies p \vdash p$
is logically equivalent to the Law of Excluded Middle:

$\vdash p \lor \neg p$

That is, Peirce's Law holds if and only if the Law of Excluded Middle holds.


Proof
Law of Excluded Middle implies Peirce's Law
Let the truth of the Law of Excluded Middle be assumed.
Then:

$\paren {p \lor \neg p} \vdash \paren {\paren {p \implies q} \implies p} \implies p$
is demonstrated, as follows.

By the tableau method of natural deduction:


$\paren {p \lor \neg p} \vdash \paren {\paren {p \implies q} \implies p} \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \neg p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$\paren {\paren {p \implies q} \implies p} \implies p$

Sequent Introduction

2

True Statement is implied by Every Statement


4


4

$\neg p$

Assumption

(None)




5


4

$p \implies q$

Sequent Introduction

4

False Statement implies Every Statement


6


6

$\paren {p \implies q} \implies p$

Assumption

(None)




7


6, 5

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

6, 5




8


5

$\paren {\paren {p \implies q} \implies p} \implies p$

Rule of Implication: $\implies \II$

6 – 7

Assumption 6 has been discharged


9


1

$\paren {\paren {p \implies q} \implies p} \implies p$

Proof by Cases: $\text{PBC}$

1, 2 – 3, 4 – 8

Assumptions 2 and 4 have been discharged


The result follows by an application of Modus Ponendo Ponens:

$\paren {\paren {p \implies q} \implies p} \implies p, \paren {p \implies q} \implies p \vdash p$
$\Box$


Peirce's Law implies Law of Excluded Middle
By the tableau method of natural deduction:


$\vdash p \lor \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$(p \lor \neg p) \implies \bot$

Assumption

(None)




2


1

$\neg(p \lor \neg p)$

Sequent Introduction

1

Negation as Implication of Bottom


3


1

$\bot$

Sequent Introduction

2

Negation of Excluded Middle is False


4


1

$p \lor \neg p$

Rule of Explosion: $\bot \EE$

3




5




$((p \lor \neg p) \implies \bot) \implies p \lor \neg p$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged


6




$p \lor \neg p$

Sequent Introduction

5

Peirce's Law

$\blacksquare$





