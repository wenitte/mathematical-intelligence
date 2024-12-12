# 

Source: https://proofwiki.org/wiki/Clavius%27s_Law/Formulation_1



Theorem
$\neg p \implies p \vdash p$


Proof 1
By the tableau method of natural deduction:


$\neg p \implies p \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies p$

Premise

(None)




2




$p \lor \neg p$

Law of Excluded Middle

(None)




3


3

$\neg p$

Assumption

(None)

Either $p$ is false ...


4


1, 3

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


5

$p$

Assumption

(None)

... or $p$ is true


6


1

$p$

Proof by Cases: $\text{PBC}$

2, 3 – 4, 5 – 5

Assumptions 3 and 5 have been discharged

$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$\neg p \implies p \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies p$

Premise

(None)




2


2

$p \implies \bot$

Assumption

(None)




3


2

$\neg p$

Sequent Introduction

2

Negation as Implication of Bottom


4


1,2

$p$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1

$(p \implies \bot) \implies p$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


6


1

$p$

Sequent Introduction

5

Peirce's Law

$\blacksquare$


Source of Name
This entry was named for Christopher Clavius.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Exercise $1 \ \text{(j)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 2 \ \text{(a)}$




