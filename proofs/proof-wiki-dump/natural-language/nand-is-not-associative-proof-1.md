# 

Source: https://proofwiki.org/wiki/NAND_is_not_Associative/Proof_1

Theorem
$p \uparrow \paren {q \uparrow r} \not \vdash \paren {p \uparrow q} \uparrow r$


Proof
By the tableau method of natural deduction:


$\neg \paren {\paren {p \uparrow q} \uparrow r \implies p \uparrow \paren {q \uparrow r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \uparrow q} \uparrow r \implies p \uparrow \paren {q \uparrow r}$

Assumption

(None)




2


2

$p \land \neg r$

Assumption

(None)




3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


2

$\neg r$

Rule of Simplification: $\land \EE_2$

2




5


2

$\paren {\neg q} \lor \paren {\neg r}$

Rule of Addition: $\lor \II_2$

4




6


2

$\neg \paren {q \land r}$

Sequent Introduction

5

De Morgan's Laws: Disjunction of Negations


7


2

$q \uparrow r$

Sequent Introduction

6

Definition of Logical NAND


8


2

$p \land \paren {q \uparrow r}$

Rule of Conjunction: $\land \II$

3, 7




9


2

$\neg \neg \paren {p \land \paren {q \uparrow r} }$

Double Negation Introduction: $\neg \neg \II$

8




10


2

$\neg \paren {p \uparrow \paren {q \uparrow r} }$

Sequent Introduction

9

Definition of Logical NAND


11


2

$\paren {\neg \paren {p \uparrow q} } \lor \paren {\neg r}$

Rule of Addition: $\lor \II_2$

4




12


2

$\neg \paren {\paren {p \uparrow q} \land r}$

Sequent Introduction

11

De Morgan's Laws: Disjunction of Negations


13


2

$\paren {p \uparrow q} \uparrow r$

Sequent Introduction

12

Definition of Logical NAND


14


2

$\neg \neg \paren {\paren {p \uparrow q} \uparrow r}$

Double Negation Introduction: $\neg \neg \II$

13




15


2

$\neg \neg \paren {\paren {p \uparrow q} \uparrow r} \land \neg \paren {p \uparrow \paren {q \uparrow r} }$

Rule of Conjunction: $\land \II$

13, 10




16


2

$\neg \paren {\neg \paren {\paren {p \uparrow q} \uparrow r} \lor \paren {p \uparrow \paren {q \uparrow r} } }$

Sequent Introduction

15

De Morgan's Laws: Conjunction of Negations


17


2

$\neg \paren {\paren {p \uparrow q} \uparrow r \implies p \uparrow \paren {q \uparrow r} }$

Sequent Introduction

16

Disjunction and Conditional


18


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

1, 17



Taking $p = \top$, $r = \bot$, we find $\vdash p \land \neg r$, and conclude our initial assumption was false.
$\blacksquare$





