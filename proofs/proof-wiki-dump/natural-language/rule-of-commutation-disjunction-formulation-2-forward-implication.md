# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Disjunction/Formulation_2/Forward_Implication



Theorem
$\vdash \left({p \lor q}\right) \implies \left({q \lor p}\right)$


Proof
Using a tableau proof for instance 1 of a Gentzen proof system:



$\vdash \left({p \lor q}\right) \implies \left({q \lor p}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1



$\neg p, q, p$

Axiom




2



$\neg q, q, p$

Axiom




3



$\neg \left({p \lor q}\right), q, p$

$\alpha$-Rule: $\alpha\lor$

1, 2



4



$\neg \left({p \lor q}\right), q \lor p$

$\beta$-Rule: $\beta\lor$

3



5



$\left({p \lor q}\right) \implies \left({q \lor p}\right)$

$\beta$-Rule: $\beta\implies$

4


$\blacksquare$


Also see
This is an axiom of the following proof system:
Definition:Hilbert Proof System/Instance 2


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 3.2$: Example $3.4$




