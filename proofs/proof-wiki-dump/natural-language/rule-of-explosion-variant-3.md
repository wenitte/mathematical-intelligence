# 

Source: https://proofwiki.org/wiki/Rule_of_Explosion/Variant_3

Theorem
$p, \neg p \vdash q$


Proof
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$p, \neg p \vdash q$


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

$\neg p$

Assumption

(None)




3




$q \implies (p \lor q)$

Axiom $A2$






4




$\neg p \implies (q \lor \neg p)$

Rule $RST \, 1$

3

$\neg p \, / \, q$, $q \, / \, p$


5




$q \lor \neg p$

Rule $RST \, 3$

2, 4




6




$(q \lor \neg p) \implies (\neg p \lor q)$

Axiom $A3$, Rule $RST \, 1$



$\neg p \, / \, q$, $q \, / \, p$


7




$\neg p \lor q$

Rule $RST \, 3$

5, 6




8




$p \implies q$

Rule $RST \, 2 \, (2)$






9




$q$

Rule $RST \, 3$

1, 8



$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.4$: Conditions for an Axiom System




