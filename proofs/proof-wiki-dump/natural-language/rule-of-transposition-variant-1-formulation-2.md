# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_1/Formulation_2



Theorem
$\vdash \paren {p \implies \neg q} \iff \paren {q \implies \neg p}$


Forward Implication
$\vdash \paren {p \implies \neg q} \implies \paren {q \implies \neg p}$
Reverse Implication
$\vdash \left({q \implies \neg p}\right) \implies \left({p \implies \neg q}\right)$


Proof
Proof of Forward Implication
By the tableau method of natural deduction:


$\vdash \paren {p \implies \neg q} \implies \paren {q \implies \neg p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \neg q$

Assumption

(None)




2


2

$q$

Assumption

(None)




3


2

$\neg \neg q$

Double Negation Introduction: $\neg \neg \II$

2




4


1, 2

$\neg p$

Modus Tollendo Tollens (MTT)

1, 3




5


1

$q \implies \neg p$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


6




$\paren {p \implies \neg q} \implies \paren {q \implies \neg p}$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged

$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\vdash \paren {q \implies \neg p} \implies \paren {p \implies \neg q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \implies \neg p$

Assumption

(None)




2


2

$p$

Assumption

(None)




3


2

$\neg \neg p$

Double Negation Introduction: $\neg \neg \II$

2




4


1, 2

$\neg q$

Modus Tollendo Tollens (MTT)

1, 3




5


1

$p \implies \neg q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


6




$\paren {q \implies \neg p} \implies \paren {p \implies \neg q}$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged

$\blacksquare$

By the tableau method of natural deduction:


$\vdash \paren {p \implies \neg q} \iff \paren {q \implies \neg p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {p \implies \neg q} \implies \paren {q \implies \neg p}$

Theorem Introduction

(None)

Rule of Transposition: Forward Implication


2




$\paren {q \implies \neg p} \implies \paren {p \implies \neg q}$

Theorem Introduction

(None)

Rule of Transposition: Reverse Implication


3




$\paren {p \implies \neg q} \iff \paren {q \implies \neg p}$

Biconditional Introduction: $\iff \II$

1, 2



$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T112}$




