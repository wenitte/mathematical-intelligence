# 

Source: https://proofwiki.org/wiki/False_Statement_implies_Every_Statement/Formulation_2



Theorem
$\vdash \neg p \implies \paren {p \implies q}$


Proof 1
By the tableau method of natural deduction:


$\vdash \neg p \implies \left({p \implies q}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p$

Assumption

(None)




2


2

$p$

Assumption

(None)




3


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

2, 1




4


1, 2

$q$

Rule of Explosion: $\bot \EE$

3




5


1

$p \implies q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged


6




$\neg p \implies \left({p \implies q}\right)$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged

$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$\vdash \neg p \implies \left({p \implies q}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p$

Assumption

(None)




2


1

$p \implies q$

Sequent Introduction

1

False Statement implies Every Statement: Formulation 1


3




$\neg p \implies \left({p \implies q}\right)$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{I}$: 'NOT' and 'IF': $\S 5$: Theorem $\text{T18}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.4$: Statement Forms




