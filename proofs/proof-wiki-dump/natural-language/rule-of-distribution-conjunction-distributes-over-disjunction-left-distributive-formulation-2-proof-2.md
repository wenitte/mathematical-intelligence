# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Conjunction_Distributes_over_Disjunction/Left_Distributive/Formulation_2/Proof_2

Theorem
$\vdash \paren {p \land \paren {q \lor r} } \iff \paren {\paren {p \land q} \lor \paren {p \land r} }$


Proof
By the tableau method of natural deduction:


$\vdash \paren {p \land \paren {q \lor r} } \iff \paren {\paren {p \land q} \lor \paren {p \land r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {p \land \paren {q \lor r} } \implies \paren {\paren {p \land q} \lor \paren {p \land r} }$

Theorem Introduction

(None)

Conjunction Distributes over Disjunction: Forward Implication


2




$\paren {\paren {p \land q} \lor \paren {p \land r} } \implies \paren {p \land \paren {q \lor r} }$

Theorem Introduction

(None)

Conjunction Distributes over Disjunction: Reverse Implication


3




$\paren {p \land \paren {q \lor r} } \iff \paren {\paren {p \land q} \lor \paren {p \land r} }$

Biconditional Introduction: $\iff \II$

1, 2



$\blacksquare$





