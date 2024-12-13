# 

Source: https://proofwiki.org/wiki/Ring_of_Sets_is_Closed_under_Finite_Union



Theorem
Let $\RR$ be a ring of sets.
Let $A_1, A_2, \ldots, A_n \in \RR$.

Then:

$\ds \bigcup_{j \mathop = 1}^n A_j \in \RR$


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\ds \bigcup_{j \mathop = 1}^n A_j \in \RR$

$\map P 1$ is true, as this just says $A_1 \in \RR$.


Basis for the Induction
$\map P 2$ is the case:

$A_1 \cup A_2 \in \RR$
which is immediate, from definition 2 of ring of sets.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \bigcup_{j \mathop = 1}^k A_j \in \RR$

Then we need to show:

$\ds \bigcup_{j \mathop = 1}^{k + 1} A_j \in \RR$


Induction Step
This is our induction step:
We have that:

$\ds \bigcup_{j \mathop = 1}^{k + 1} A_j = \bigcup_{j \mathop = 1}^k A_j \cup A_{k+1}$
But from the induction hypothesis we have that:

$\ds \bigcup_{j \mathop = 1}^k A_j \in \RR$
Hence from the basis for the induction, it follows that:

$\ds \bigcup_{j \mathop = 1}^{k + 1} A_j \in \RR$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \bigcup_{j \mathop = 1}^n A_j \in \RR$
$\blacksquare$


Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras




