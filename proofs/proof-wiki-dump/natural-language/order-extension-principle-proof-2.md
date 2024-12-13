# 

Source: https://proofwiki.org/wiki/Order-Extension_Principle/Proof_2

Theorem
Let $S$ be a set.
Let $\preceq$ be an ordering on $S$.

Then there exists a total ordering $\le$ on $S$ such that:

$\forall a, b \in S: \paren {a \preceq b \implies a \le b}$


Proof
Let $\prec$ be the reflexive reduction of $\preceq$.
By Reflexive Reduction of Ordering is Strict Ordering, $\prec$ is a strict ordering.
By the strict form of the Order-Extension Principle, there exists a strict total ordering $<$ on $S$ such that:

$\forall a, b \in S: \paren {a \prec b \implies a < b}$
Let $\le$ be the reflexive closure of $<$.
Let $a, b \in S$.
If $a \preceq b$, then by Law of Excluded Middle either $a \prec b$ or $a = b$.
If $a = b$, then by the definition of reflexive closure, $a \le b$.
If $a \prec b$, then by the choice of $<$, $a < b$ so $a \le b$.
Thus for all $a, b \in S$, $a \preceq b \implies a < b$.
By Reflexive Closure of Strict Total Ordering is Total Ordering, $\le$ is a total ordering.
$\blacksquare$


Boolean Prime Ideal Theorem
This theorem depends on the Boolean Prime Ideal Theorem (BPI), by way of Order-Extension Principle/Strict.
Although not as strong as the Axiom of Choice, the BPI is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





