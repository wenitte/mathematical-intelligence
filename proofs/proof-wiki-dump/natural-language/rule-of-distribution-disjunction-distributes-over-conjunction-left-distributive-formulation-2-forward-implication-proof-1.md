# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_2/Forward_Implication/Proof_1

Theorem
$\vdash \paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Proof
This proof is derived in the context of the following proof system: instance 1 of a Gentzen proof system.By the tableau method:


$\vdash \paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\neg p, p, q$

Axiom






2




$\neg p, p \lor q$

$\beta$-Rule: $\beta \lor$

1




3




$\neg p, p, r$

Axiom






4




$\neg p, p \lor r$

$\beta$-Rule: $\beta \lor$

3




5




$\neg p, \paren {p \lor q} \land \paren {p \lor r}$

$\alpha$-Rule: $\alpha \land$

2, 4




6




$\neg q, \neg r, p, q$

Axiom






7




$\neg q, \neg r, p \lor q$

$\beta$-Rule: $\beta \lor$

6




8




$\neg q, \neg r, p, r$

Axiom






9




$\neg q, \neg r, p \lor r$

$\beta$-Rule: $\beta \lor$

8




10




$\neg q, \neg r, \paren {p \lor q} \land \paren {p \lor r}$

$\alpha$-Rule: $\alpha \land$

7, 9




11




$\neg \paren {q \land r}, \paren {p \lor q} \land \paren {p \lor r}$

$\beta$-Rule: $\beta \land$

10




12




$\neg \paren {p \lor \paren {q \land r} }, \paren {p \lor q} \land \paren {p \lor r}$

$\alpha$-Rule: $\alpha \land$

5, 11




13




$\paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$

$\beta$-Rule: $\beta \implies$

12



$\blacksquare$


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 3.2$: Example $3.5$




