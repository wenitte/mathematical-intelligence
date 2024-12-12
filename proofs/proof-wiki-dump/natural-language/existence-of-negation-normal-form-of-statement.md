# 

Source: https://proofwiki.org/wiki/Existence_of_Negation_Normal_Form_of_Statement

Theorem
Any propositional formula can be expressed in negation normal form (NNF).


Proof
A propositional variable is already trivially in negation normal form (NNF).
So we consider the general propositional formula $S$.

In the following, $P$ and $Q$ are to stand for general propositional formulas.

First, from Functionally Complete Logical Connectives: Conjunction, Negation and Disjunction we have that:

$\set {\neg, \land, \lor}$
forms a functionally complete set of logical connectives.
So we can convert $S$ so that:

by the definition of the biconditional, instances of $P \iff Q$ can be converted into $\paren {P \implies Q} \land \paren {Q \implies P}$
by the Rule of Material Implication, instances of $P \implies Q$ can be converted into $\neg P \lor Q$.
Other connectives can likewise be treated appropriately.
Thus $S$ will contain nothing but connectives from $\set {\neg, \land, \lor}$.

Next we can replace:

instances of $\neg \paren {P \land Q}$ with $\neg P \lor \neg Q$, by De Morgan's Laws: Disjunction of Negations
instances of $\neg \paren {P \lor Q}$ with $\neg P \land \neg Q$, by De Morgan's Laws: Conjunction of Negations
instances of $\neg \neg P$ with $P$ by Double Negation Elimination.

At any stage where a negation appears before a parenthesis, it will then appear before the statements inside the parenthesis.
Thus the negation signs gradually move inwards or are eliminated.
Eventually all remaining negation signs will appear next to simple statements.
Hence the result.
$\blacksquare$





