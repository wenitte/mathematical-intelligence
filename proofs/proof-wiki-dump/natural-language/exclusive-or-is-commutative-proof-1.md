# 

Source: https://proofwiki.org/wiki/Exclusive_Or_is_Commutative/Proof_1

Theorem
$p \oplus q \dashv \vdash q \oplus p$


Proof
By the tableau method of natural deduction:


$p \oplus q \vdash q \oplus p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \oplus q$

Premise

(None)




2


1

$\left({p \lor q} \right) \land \neg \left({p \land q}\right)$

Sequent Introduction

1

Definition of Exclusive Or


3


1

$\left({q \lor p} \right) \land \neg \left({p \land q}\right)$

Sequent Introduction

2

Disjunction is Commutative


4


1

$\left({q \lor p} \right) \land \neg \left({q \land p}\right)$

Sequent Introduction

3

Conjunction is Commutative


5


1

$q \oplus p$

Sequent Introduction

4

Definition of Exclusive Or


By the tableau method of natural deduction:


$q \oplus p \vdash p \oplus q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \oplus p$

Premise

(None)




2


1

$\left({q \lor p} \right) \land \neg \left({q \land p}\right)$

Sequent Introduction

1

Definition of Exclusive Or


3


1

$\left({q \lor p} \right) \land \neg \left({p \land q}\right)$

Sequent Introduction

2

Conjunction is Commutative


4


1

$\left({p \lor q} \right) \land \neg \left({p \land q}\right)$

Sequent Introduction

3

Disjunction is Commutative


5


1

$p \oplus q$

Sequent Introduction

4

Definition of Exclusive Or

$\blacksquare$





