# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Conjunction_of_Disjunction_with_Negation_of_Conjunction/Proof_1

Theorem
$\neg \paren {p \iff q} \dashv \vdash \paren {p \lor q} \land \neg \paren {p \land q}$
That is, negation of the biconditional means the same thing as either-or but not both, that is, exclusive or.


Proof
By the tableau method of natural deduction:


$\neg \paren {p \iff q} \vdash \paren {p \lor q} \land \neg \paren {p \land q} $


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

$\paren {\neg p \land q} \lor \paren {p \land \neg q}$

Sequent Introduction

1

Non-Equivalence as Disjunction of Conjunctions: Formulation 1


3


1

$\paren {p \land \neg q} \lor \paren {\neg p \land q}$

Sequent Introduction

2

Disjunction is Commutative


4


1

$\paren {p \land \neg q} \lor \paren {q \land \neg p}$

Sequent Introduction

3

Conjunction is Commutative


5


1

$\paren {\paren {p \lor q} \land \neg q} \lor \paren {\paren {q \lor p} \land \neg p}$

Sequent Introduction

4

Conjunction of Disjunction with Negation is Conjunction with Negation


6


1

$\paren {\paren {p \lor q} \land \neg q} \lor \paren {\paren {p \lor q} \land \neg p}$

Sequent Introduction

5

Disjunction is Commutative


7


1

$\paren {p \lor q} \land \paren {\neg q \lor \neg p}$

Sequent Introduction

6

Conjunction Distributes over Disjunction


8


1

$\paren {p \lor q} \land \paren {\neg p \lor \neg q}$

Sequent Introduction

7

Disjunction is Commutative


9


1

$\paren {p \lor q} \land \neg \paren {\neg \neg p \land \neg \neg q}$

Sequent Introduction

8

De Morgan's Laws: Disjunction


10


1

$\paren {p \lor q} \land \neg \paren {p \land q}$

Double Negation Elimination: $\neg \neg \EE$

9




By the tableau method of natural deduction:


$\paren {p \lor q} \land \neg \paren {p \land q} \vdash \neg \paren {p \iff q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \lor q} \land \neg \paren {p \land q}$

Premise

(None)




2


1

$\paren {p \lor q} \land \paren {\neg p \lor \neg q}$

Sequent Introduction

1

De Morgan's Laws: Disjunction of Negations


3


1

$\paren {p \lor q} \land \paren {\neg p \lor \neg q}$

Sequent Introduction

2

Disjunction is Commutative


4


1

$\paren {\paren {p \lor q} \land \neg q} \lor \paren {\paren {p \lor q} \land \neg p}$

Sequent Introduction

3

Conjunction Distributes over Disjunction


5


1

$\paren {p \land \neg q} \lor \paren {q \land \neg p}$

Sequent Introduction

4

Conjunction of Disjunction with Negation is Conjunction with Negation


6


1

$\paren {q \land \neg p} \lor \paren {p \land \neg q}$

Sequent Introduction

5

Disjunction is Commutative


7


1

$\paren {\neg p \land q} \lor \paren {p \land \neg q}$

Sequent Introduction

6

Conjunction is Commutative


8


1

$\neg \paren {p \iff q}$

Sequent Introduction

6

Non-Equivalence as Disjunction of Conjunctions: Formulation 1

$\blacksquare$





