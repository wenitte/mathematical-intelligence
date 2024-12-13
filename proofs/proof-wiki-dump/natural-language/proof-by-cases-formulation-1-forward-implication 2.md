# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_1/Forward_Implication



Theorem
$\paren {p \implies r} \land \paren {q \implies r} \vdash \paren {p \lor q} \implies r$


Proof 1
By the tableau method of natural deduction:


$\paren {p \implies r} \land \paren {q \implies r} \vdash \paren {p \lor q} \implies r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies r} \land \paren {q \implies r}$

Premise

(None)




2


1

$p \implies r$

Rule of Simplification: $\land \EE_1$

1




3


1

$q \implies r$

Rule of Simplification: $\land \EE_2$

1




4


1

$p \lor q \implies r \lor r$

Sequent Introduction

2, 3

Constructive Dilemma


5


5

$p \lor q$

Assumption

(None)




6


1, 5

$r \lor r$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 5




7


1, 5

$r$

Sequent Introduction

6

Rule of Idempotence: Disjunction


8


1

$p \lor q \implies r$

Rule of Implication: $\implies \II$

5 – 7

Assumption 5 has been discharged

$\blacksquare$


Proof 2
From the Constructive Dilemma we have:

$p \implies q, r \implies s \vdash p \lor r \implies q \lor s$
from which, changing the names of letters strategically:

$p \implies r, q \implies r \vdash p \lor q \implies r \lor r$
From the Rule of Idempotence we have:

$r \lor r \vdash r$
and the result follows by Hypothetical Syllogism.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Exercise $1 \ \text{(f)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.13$: Tableau Problems (TAB1): CASES




