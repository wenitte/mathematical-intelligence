# 

Source: https://proofwiki.org/wiki/Functionally_Complete_Logical_Connectives/NAND



Theorem
The singleton set containing the following logical connective: 

$\set \uparrow$: NAND
is functionally complete.


Proof
From Functionally Complete Logical Connectives: Negation and Conjunction, any boolean expression can be expressed in terms of $\land$ and $\neg$.

From NAND with Equal Arguments:

$\neg p \dashv \vdash p \uparrow p$

From Conjunction in terms of NAND:

$p \land q \dashv \vdash \paren {p \uparrow q} \uparrow \paren {p \uparrow q}$
demonstrating that $p \land q$ is expressed solely in terms of $\uparrow$.

Thus any boolean expression can be represented solely in terms of $\uparrow$.
That is, $\set \uparrow$ is functionally complete.
$\blacksquare$


Also see
NOR is Functionally Complete


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.5$: Further Logical Constants
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables: Exercise $2 \ \text{(ii)}$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 1$: Some mathematical language: Connectives
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.4.2$




