# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Disjunction_of_Negated_Conditionals/Proof_1

Theorem
$\neg \paren {p \iff q} \dashv \vdash \neg \paren {p \implies q} \lor \neg \paren {q \implies p}$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \iff q} \vdash \neg \paren {p \implies q} \lor \neg \paren {q \implies p} $


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
$\Box$

By the tableau method of natural deduction:


$\neg \paren {p \implies q} \lor \neg \paren {q \implies p} \vdash \neg \paren {p \iff q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \implies q} \lor \neg \paren {q \implies p}$

Premise

(None)




2


1

$\neg \paren {\paren {p \implies q} \land \paren {q \implies p} }$

Sequent Introduction

1

De Morgan's Laws: Disjunction of Negations


3


1

$\neg \paren {p \iff q}$

Sequent Introduction

2

Rule of Material Equivalence

$\blacksquare$





