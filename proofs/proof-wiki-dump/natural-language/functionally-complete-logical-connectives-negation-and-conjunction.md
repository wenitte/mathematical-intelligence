# 

Source: https://proofwiki.org/wiki/Functionally_Complete_Logical_Connectives/Negation_and_Conjunction

Theorem
The set of logical connectives:

$\set {\neg, \land}$: Not and And
is functionally complete.


This article is complete as far as it goes, but it could do with expansion.In particular: to adopt the notion of Independent Set of Truth FunctionsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
From Functionally Complete Logical Connectives: Negation, Conjunction, Disjunction and Conditional, all sixteen of the binary truth functions can be expressed in terms of $\neg, \land, \lor, \implies$.

From Conjunction and Conditional, we have that:

$p \implies q \dashv \vdash \neg \paren {p \land \neg q}$
From De Morgan's laws: Disjunction, we have that:

$p \lor q \dashv \vdash \neg \paren {\neg p \land \neg q}$
So any instance of either $\implies$ or $\lor$ can be replaced identically with one using just $\neg$ and $\land$.
It follows that $\set {\neg, \land}$ is functionally complete.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.5$: Further Logical Constants
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $3$ Truth-Tables: Exercise $2 \ \text{(i)}$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 1$: Some mathematical language: Connectives
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): truth function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): truth function
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.4.2$: Theorem $2.36$




