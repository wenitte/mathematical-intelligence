# 

Source: https://proofwiki.org/wiki/Functionally_Complete_Logical_Connectives/NOR



Theorem
The singleton set containing the following logical connective: 

$\set \downarrow$: NOR
is functionally complete.


Proof
From Functionally Complete Logical Connectives: Negation and Disjunction, any boolean expression can be expressed in terms of $\lor$ and $\neg$.

From NOR with Equal Arguments:

$\neg p \dashv \vdash p \downarrow p$

From Disjunction in terms of NOR:

$p \lor q \dashv \vdash \paren {p \downarrow q} \downarrow \paren {p \downarrow q}$
demonstrating that $p \lor q$ can be represented solely in terms of $\downarrow$.

That is, $\set \downarrow$ is functionally complete.
$\blacksquare$


Also see
NAND is Functionally Complete


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables: Exercise $2 \ \text{(ii)}$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 1$: Some mathematical language: Connectives
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.4.2$




