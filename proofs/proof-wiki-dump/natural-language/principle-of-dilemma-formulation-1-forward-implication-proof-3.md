# 

Source: https://proofwiki.org/wiki/Principle_of_Dilemma/Formulation_1/Forward_Implication/Proof_3

Theorem
$\paren {p \implies q} \land \paren {\neg p \implies q} \vdash q$


Proof
From the Constructive Dilemma we have:

$p \implies q, r \implies s \vdash p \lor r \implies q \lor s$
from which, changing the names of letters strategically:

$p \implies q, \neg p \implies q \vdash p \lor \neg p \implies q \lor q$
From Law of Excluded Middle, we have:

$\vdash p \lor \neg p$
From the Rule of Idempotence we have:

$q \lor q \vdash q$
and the result follows by Hypothetical Syllogism.
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





