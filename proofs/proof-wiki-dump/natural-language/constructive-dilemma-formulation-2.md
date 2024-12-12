# 

Source: https://proofwiki.org/wiki/Constructive_Dilemma/Formulation_2

Theorem













\(\ds \paren {p \implies q} \land \paren {r \implies s}\)

\(\)







\(\ds \)




















\(\ds p \lor r\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds q \lor s\)

\(\)







\(\ds \)











Proof
By the tableau method of natural deduction:


$\paren {p \implies q} \land \paren {r \implies s}, p \lor r \vdash q \lor s$


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

$p \lor r$

Premise

(None)




3


1, 2

$\paren {p \lor r} \land \paren {p \implies q} \land \paren {r \implies s}$

Rule of Conjunction: $\land \II$

2, 1

Associativity is implicit


4




$\paren {\paren {p \lor r} \land \paren {p \implies q} \land \paren {r \implies s} } \implies \paren {q \lor s}$

Theorem Introduction

(None)

Constructive Dilemma: Formulation 3


5


1, 2

$q \lor s$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 3



$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables: Exercise $\text{I} \ \mathbf k.$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $5.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 1$: Decision procedures and proofs: $3$




