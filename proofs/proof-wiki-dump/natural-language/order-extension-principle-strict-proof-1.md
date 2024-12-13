# 

Source: https://proofwiki.org/wiki/Order-Extension_Principle/Strict/Proof_1

Theorem
Let $S$ be a set.
Let $\prec$ be a strict ordering on $S$.

Then there exists a strict total ordering $<$ on $S$ such that:

$\forall a, b \in S: a \prec b \implies a < b$


Proof
Let $\AA$ be the set of relations $A$ on $S$ with the property that the transitive closure $A^+$ of $A$ is a strict ordering of $S$.
For each $\tuple {x, y} \in S \times S$, let $\tuple {x, y}' = \tuple {y, x}$.

Let $A \in \AA$.
Let $\tuple {x, y} \in S \times S$.
Let $\tuple {x, y} \in A^+$.
Then:

$\paren {A \cup \set {\tuple {x, y} } }^+ = A^+$
so:

$A \cup \set {\tuple {x, y} } \in \AA$

Let $\tuple {y, x} \in A^+$.
Then:

$\paren {A \cup \set {\tuple {y, x} } }^+ = A^+$
so:

$A \cup \set {\tuple {x, y}'} = A \cup \set {\tuple {y, x} } \in \AA$

Otherwise, $x$ and $y$ are non-comparable by $A^+$.
So by Strict Ordering can be Expanded to Compare Additional Pair:

$A \cup \set {\tuple {x, y} } \in \AA$
Thus it has been shown that for each $A \in \AA$ and each $\tuple {x, y} \in S$, either:

$A \cup \set {\tuple {x, y} } \in \AA$
or:

$A \cup \set {\tuple {x, y}'} \in \AA$
$\Box$

Let $A \subseteq S \times S$.
Let $A \in \AA$.
Let $F$ be a finite subset of $A$.
Since $A^+$ is a strict ordering, it is asymmetric.
Since Transitive Closure is Closure Operator, $F^+ \subseteq A^+$.
So $F^+$ is also asymmetric.
Since $F^+$ is also transitive, it is a strict ordering.
So $F \in \AA$.

Suppose instead that each finite subset of $A$ is in $\AA$.
We must show that $A^+$ is antireflexive.
Aiming for a contradiction, suppose that for some $x \in S$, $\tuple {x, x} \in A^+$.
Then by the definition of transitive closure, there are elements $y_0, \dots, y_n$ such that $x = y_0 = y_n$ and:

$\tuple {y_0, y_1}, \tuple {y_1, y_2}, \dotsc, \tuple {y_{n - 1}, y_n} \in A$
Let $F = \set {\tuple {y_0, y_1}, \tuple {y_1, y_2}, \dotsc, \tuple {y_{n - 1}, y_n} }$.
Then $F$ is a finite subset of $A$.
But $\tuple {x, x} \in F^+$, contradicting the fact that $F \in \AA$.
Thus we see that $A^+$ is antireflexive, and thus a strict ordering of $S$.
Therefore, $\AA$ has finite character.
$\Box$

Note that ${\prec} = {\prec^+}$, so ${\prec} \in \AA$.
By the Restricted Tukey's Theorem (Strong Form), there exists an $R \in \AA$ such that:

${\prec} \subseteq R$
For each $\tuple {m, n} \in S \times S$, either $\tuple {m, n} \in R$ or $\tuple {n, m} = \tuple {m, n}' \in R$.
Then:

$R^+$ is a strict total ordering of $S$.
$\forall a, b \in S: a \prec b \implies a < b$
$\blacksquare$


Boolean Prime Ideal Theorem
This proof depends on the Boolean Prime Ideal Theorem (BPI), by way of Restricted Tukey's Theorem.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





