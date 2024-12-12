# 

Source: https://proofwiki.org/wiki/Extended_Transitivity

Theorem
Let $S$ be a set.
Let $\RR$ be a transitive relation on $S$.
Let $\RR^=$ be the reflexive closure of $\RR$.
Let $a, b, c \in S$.

Then:




\(\text {(1)}: \quad\)









\(\ds \paren {a \mathrel \RR b} \land \paren {b \mathrel \RR c}\)

\(\implies\)







\(\ds a \mathrel \RR c\)










\(\text {(2)}: \quad\)









\(\ds \paren {a \mathrel \RR b} \land \paren {b \mathrel {\RR^=} c}\)

\(\implies\)







\(\ds a \mathrel \RR c\)










\(\text {(3)}: \quad\)









\(\ds \paren {a \mathrel {\RR^=} b} \land \paren {b \mathrel \RR c}\)

\(\implies\)







\(\ds a \mathrel \RR c\)










\(\text {(4)}: \quad\)









\(\ds \paren {a \mathrel {\RR^=} b} \land \paren {b \mathrel {\RR^=} c}\)

\(\implies\)







\(\ds a \mathrel {\RR^=} c\)











Proof
$(1)$ follows from the definition of a transitive relation.
$(4)$ follows from Reflexive Closure of Transitive Relation is Transitive.

Suppose that:

$\paren {a \mathrel \RR b} \land \paren {b \mathrel {\RR^=} c}$
By the definition of reflexive closure:

$b \mathrel \RR c$ or $b = c$
If $b = c$, then since $a \mathrel \RR b$:

$a \mathrel \RR c$
If $b \mathrel \RR c$ then by transitivity of $\RR$:

$a \mathrel \RR c$
Thus $(2)$ holds.

A similar argument proves that $(3)$ holds as well:
Suppose that:

$\paren {a \mathrel {\RR^=} b} \land \paren {b \mathrel \RR c}$
By the definition of reflexive closure:

$a \mathrel \RR b$ or $a = b$
If $a = b$, then since $b \mathrel \RR c$:

$a \mathrel \RR c$
If $a \mathrel \RR b$ then by transitivity of $\RR$:

$a \mathrel \RR c$
Thus $(3)$ holds.
$\blacksquare$





