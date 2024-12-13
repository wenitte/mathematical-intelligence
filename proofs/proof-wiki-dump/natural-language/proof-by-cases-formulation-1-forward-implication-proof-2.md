# 

Source: https://proofwiki.org/wiki/Proof_by_Cases/Formulation_1/Forward_Implication/Proof_2

Theorem
$\paren {p \implies r} \land \paren {q \implies r} \vdash \paren {p \lor q} \implies r$


Proof
From the Constructive Dilemma we have:

$p \implies q, r \implies s \vdash p \lor r \implies q \lor s$
from which, changing the names of letters strategically:

$p \implies r, q \implies r \vdash p \lor q \implies r \lor r$
From the Rule of Idempotence we have:

$r \lor r \vdash r$
and the result follows by Hypothetical Syllogism.
$\blacksquare$





