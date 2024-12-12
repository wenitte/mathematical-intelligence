# 

Source: https://proofwiki.org/wiki/Existence_of_Disjunctive_Normal_Form_of_Statement

Theorem
Any propositional formula can be expressed in disjunctive normal form (DNF).


Proof
A propositional variable is already trivially in disjunctive normal form (DNF).
So we consider the general propositional formula $S$.

First we convert to negation normal form (NNF).
This is always possible, by Existence of Negation Normal Form of Statement.

Now $S$ will be of the form:

$P_1 \lor P_2 \lor \cdots \lor P_n$
where $P_1, P_2, \ldots, P_n$ are either:

literals
or:

statements of the form $\paren {Q_1 \land Q_2 \land \ldots \land Q_n}$
If all the $Q_1, \ldots, Q_n$ are literals we have finished.
Otherwise they will be of the form $Q_j = \paren {R_1 \lor R_2 \lor \ldots \lor R_m}$
If the latter is the case, then use Conjunction Distributes over Disjunction to convert:

$Q_1 \land Q_2 \land \ldots \land \paren {R_1 \lor R_2 \lor \ldots \lor R_m} \ldots \land Q_n$
into:














\(\ds \)

\(\)







\(\ds \paren {Q_1 \land Q_2 \land \ldots \land Q_n \land R_1}\)




















\(\ds \)

\(\lor\)







\(\ds \paren {Q_1 \land Q_2 \land \ldots \land Q_n \land R_2}\)




















\(\ds \)

\(\lor\)







\(\ds \ldots\)




















\(\ds \)

\(\lor\)







\(\ds \paren {Q_1 \land Q_2 \land \ldots \land Q_n \land R_m}\)









It is taken for granted that Conjunction is Associative and Conjunction is Commutative.

It can be seen then that each of the

$\paren {Q_1 \land Q_2 \land \ldots \land Q_n \land R_k}$
are terms in the DNF expression required.

If any terms are still not in the correct format, then use the above operation until they are.
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Exercises, Group $\text{III}: 43$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): disjunctive normal form




