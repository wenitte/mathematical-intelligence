# 

Source: https://proofwiki.org/wiki/Functionally_Complete_Logical_Connectives/Negation_and_Conditional

Theorem
The set of logical connectives:

$\set {\neg, \implies}$: Not and Implies
is functionally complete.


Proof
From Functionally Complete Logical Connectives: Negation and Conjunction, we can represent any boolean expression in terms of $\land$ and $\neg$.
From Conjunction and Conditional, we have that:

$p \land q \dashv \vdash \neg \paren {p \implies \neg q}$
So it follows that we can replace all occurrences of $\land$ by $\implies$ and $\neg$.
Thus $\set {\neg, \implies}$ is functionally complete.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.5$: Further Logical Constants
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.4.2$: Theorem $2.36$




