# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_4/Proof_2

Theorem
$\vdash \paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$


Proof
This proof is derived in the context of the following proof system: instance 1 of a Hilbert proof system.By the tableau method:


$\vdash \paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Assumption

(None)




2


2

$p \implies q$

Assumption

(None)




3


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


4

$q \implies r$

Assumption

(None)




5


1, 2, 4

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 4




6


2, 4

$p \implies r$

Deduction Rule

5




7


2

$\paren {q \implies r} \implies \paren {p \implies r}$

Deduction Rule

6




8




$\paren {p \implies q} \implies \paren {\paren {q \implies r} \implies \paren {p \implies r} }$

Deduction Rule

7


$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 3.4$: Theorem $3.16$




