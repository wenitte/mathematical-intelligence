# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction_of_Negations/Formulation_2/Proof_1

Theorem
$\vdash \paren {\neg p \lor \neg q} \iff \paren {\neg \paren {p \land q} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\neg p \lor \neg q} \iff \paren {\neg \paren {p \land q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \lor \neg q$

Assumption

(None)




2


1

$\neg \paren {p \land q}$

Sequent Introduction

1

De Morgan's Laws (Logic): Disjunction of Negations: Formulation 1


3




$\paren {\neg p \lor \neg q} \implies \paren {\neg \paren {p \land q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {p \land q}$

Assumption

(None)




5


4

$\neg p \lor \neg q$

Sequent Introduction

4

De Morgan's Laws (Logic): Disjunction of Negations: Formulation 1


6




$\paren {\neg \paren {p \land q} } \implies \paren {\neg p \lor \neg q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {\neg p \lor \neg q} \iff \paren {\neg \paren {p \land q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$





