# 

Source: https://proofwiki.org/wiki/Conjunction_is_Equivalent_to_Negation_of_Conditional_of_Negative/Formulation_2/Proof_1

Theorem
$\vdash \paren {p \land q} \iff \paren {\neg \paren {p \implies \neg q} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \land q} \iff \paren {\neg \paren {p \implies \neg q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$\neg \paren {p \implies \neg q}$

Sequent Introduction

1

Conjunction is Equivalent to Negation of Conditional of Negative: Formulation 1: Forward Implication


3




$\paren {p \land q} \implies \paren {\neg \paren {p \implies \neg q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {p \implies \neg q}$

Assumption

(None)




5


4

$p \land q$

Sequent Introduction

4

Conjunction is Equivalent to Negation of Conditional of Negative: Formulation 1: Reverse Implication


6




$\paren {\neg \paren {p \implies \neg q} \implies \paren {p \land q} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \land q} \iff \paren {\neg \paren {p \implies \neg q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$





