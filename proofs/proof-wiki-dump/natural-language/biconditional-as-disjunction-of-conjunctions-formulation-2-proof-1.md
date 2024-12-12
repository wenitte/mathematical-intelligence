# 

Source: https://proofwiki.org/wiki/Biconditional_as_Disjunction_of_Conjunctions/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \iff q} \iff \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \iff q} \iff \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Assumption

(None)




2


1

$\paren {p \land q} \lor \paren {\neg p \land \neg q}$

Sequent Introduction

1

Biconditional as Disjunction of Conjunctions: Formulation 1


3




$\paren {p \iff q} \implies \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \land q} \lor \paren {\neg p \land \neg q}$

Assumption

(None)




5


4

$p \iff q$

Sequent Introduction

4

Biconditional as Disjunction of Conjunctions: Formulation 1


6




$\paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} } \implies \paren {p \iff q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \iff q} \iff \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$





