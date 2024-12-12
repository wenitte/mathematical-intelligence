# 

Source: https://proofwiki.org/wiki/Existence_of_Conjunctive_Normal_Form_of_Statement

Theorem
Any propositional formula can be expressed in conjunctive normal form (CNF).


Proof
A propositional variable is already trivially in conjunctive normal form (CNF).
So we consider the general propositional formula $S$.

First we convert to negation normal form (NNF).
This is always possible, by Existence of Negation Normal Form of Statement.

Now $S$ will be of the form:

$P_1 \land P_2 \land \cdots \land P_n$
where $P_1, P_2, \ldots, P_n$ are either:

literals
or:

statements of the form $\paren {Q_1 \lor Q_2 \lor \ldots \lor Q_n}$.

If all the $Q_1, \ldots, Q_n$ are literals we have finished.
Otherwise they will be of the form:

$Q_j = \paren {R_1 \land R_2 \land \ldots \land R_m}$

If the latter is the case, then use the Disjunction Distributes over Conjunction to convert:

$Q_1 \lor Q_2 \lor \ldots \lor \paren {R_1 \land R_2 \land \ldots \land R_m} \ldots \lor Q_n$
into:














\(\ds \)

\(\)







\(\ds \paren {Q_1 \lor Q_2 \lor \ldots \lor Q_n \lor R_1}\)




















\(\ds \)

\(\land\)







\(\ds \paren {Q_1 \lor Q_2 \lor \ldots \lor Q_n \lor R_2}\)




















\(\ds \)

\(\land\)







\(\ds \ldots\)




















\(\ds \)

\(\land\)







\(\ds \paren {Q_1 \lor Q_2 \lor \ldots \lor Q_n \lor R_m}\)









It is taken for granted that Disjunction is Associative and Disjunction is Commutative.

It can be seen then that each of the

$\paren {Q_1 \lor Q_2 \lor \ldots \lor Q_n \lor R_k}$
are terms in the CNF expression required.

If any terms are still not in the correct format, then use the above operation until they are.
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.7$: Decision Procedures and Normal Forms: Theorem $2$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous): $\S 4.8$: Completeness: Theorem $6$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Exercises, Group $\text{III}: 42$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): conjunctive normal form




