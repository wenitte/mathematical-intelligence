# 

Source: https://proofwiki.org/wiki/Destructive_Dilemma/Formulation_2

Theorem













\(\ds \paren {p \implies q} \land \paren {r \implies s}\)

\(\)







\(\ds \)




















\(\ds \neg q \lor \neg s\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds \neg p \lor \neg r\)

\(\)







\(\ds \)











Proof
By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {r \implies s}, \neg q \lor \neg s \vdash \neg p \lor \neg r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land \paren {r \implies s}$

Premise

(None)




2


2

$\neg q \lor \neg s$

Premise

(None)




3


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




4


1

$r \implies s$

Rule of Simplification: $\land \EE_2$

1




5


5

$\neg q$

Assumption

(None)




6


1, 5

$\neg p$

Modus Tollendo Tollens (MTT)

3, 5




7


1, 5

$\neg p \lor \neg r$

Rule of Addition: $\lor \II_1$

6




8


8

$\neg s$

Assumption

(None)




9


1, 8

$\neg r$

Modus Tollendo Tollens (MTT)

4, 8




10


1, 8

$\neg p \lor \neg r$

Rule of Addition: $\lor \II_2$

9




11


1, 2

$\neg p \lor \neg r$

Proof by Cases: $\text{PBC}$

2, 5 – 7, 8 – 10

Assumptions 5 and 8 have been discharged

$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables: Exercise $\text{II} \ \mathbf {18}.$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $6.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 1$: Decision procedures and proofs: $4$




