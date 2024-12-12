# 

Source: https://proofwiki.org/wiki/Conjunction_of_Disjunctions_Consequence

Theorem
$\paren {p \lor q} \land \paren {r \lor s} \vdash p \lor r \lor \paren {q \land s}$


Proof
By the tableau method of natural deduction:


$\paren {p \lor q} \land \paren {r \lor s} \vdash \paren {p \lor r} \lor \paren {q \land s} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \land \paren {r \lor s}$

Premise

(None)




2


1

$\paren {p \land \paren {r \lor s} } \lor \paren {q \land \paren {r \lor s} }$

Sequent Introduction

1

Conjunction Distributes over Disjunction


3




$p \land \paren {r \lor s} \implies p$

Theorem Introduction

(None)

Simplification


4




$q \land \paren {r \lor s} \implies \paren {q \land r} \lor \paren {q \land s}$

Theorem Introduction

(None)

Conjunction Distributes over Disjunction


5




$q \land r \implies r$

Theorem Introduction

(None)

Simplification


6




$q \land s \implies q \land s$

Theorem Introduction

(None)

Law of Identity/Formulation 2


7




$\paren {q \land r} \lor \paren {q \land s} \implies r \lor \paren {q \land s}$

Sequent Introduction

5,6

Constructive Dilemma


8




$q \land \paren {r \lor s} \implies r \lor \paren {q \land s}$

Sequent Introduction

4,7

Hypothetical Syllogism


9




$\paren {p \lor q} \land \paren {r \lor s} \implies p \lor \paren {r \lor \paren {q \land s} }$

Sequent Introduction

3,8

Constructive Dilemma


10


1

$p \lor \paren {r \lor \paren {q \land s} }$

Modus Ponendo Ponens: $\implies \mathcal E$

9, 1




11


1

$\paren {p \lor r} \lor \paren {q \land s}$

Sequent Introduction

10

Rule of Association

$\blacksquare$





