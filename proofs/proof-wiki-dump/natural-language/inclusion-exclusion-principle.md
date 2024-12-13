# 

Source: https://proofwiki.org/wiki/Inclusion-Exclusion_Principle



Theorem
Let $\SS$ be an algebra of sets.
Let $A_1, A_2, \ldots, A_n$ be finite sets.
Let $f: \SS \to \R$ be an additive function.

Then:














\(\ds \map f {\bigcup_{i \mathop = 1}^n A_i}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map f {A_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \map f {A_i \cap A_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop < k \mathop \le n} \map f {A_i \cap A_j \cap A_k}\)




















\(\ds \)

\(\)





\(\, \ds \cdots \, \)

\(\ds \)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{n - 1} \map f {\bigcap_{i \mathop = 1}^n A_i}\)











Corollary
Let $\SS$ be an algebra of sets.
Let $A_1, A_2, \ldots, A_n$ be finite sets which are pairwise disjoint.
Let $f: \SS \to \R$ be an additive function.

Then:

$\ds \map f {\bigcup_{i \mathop = 1}^n A_i} = \sum_{i \mathop = 1}^n \map f {A_i}$


Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P N$ be the proposition:














\(\ds \map f {\bigcup_{i \mathop = 1}^n A_i}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map f {A_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \map f {A_i \cap A_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop < k \mathop \le n} \map f {A_i \cap A_j \cap A_k}\)




















\(\ds \)

\(\)





\(\, \ds \cdots \, \)

\(\ds \)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{n - 1} \map f {\bigcap_{i \mathop = 1}^n A_i}\)










$\map P 1$ is true, as this just says $\map f {A_1} = \map f {A_1}$.


Basis for the Induction
$\map P 2$ is the case:

$\map f {A_1 \cup A_2} = \map f {A_1} + \map f {A_2} - \map f {A_1 \cap A_2}$
which is the result Additive Function is Strongly Additive.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P r$ is true, where $r \ge 2$, then it logically follows that $\map P {r + 1}$ is true.

So this is our induction hypothesis:














\(\ds \map f {\bigcup_{i \mathop = 1}^r A_i}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^r \map f {A_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le r} \map f {A_i \cap A_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop < k \mathop \le r} \map f {A_i \cap A_j \cap A_k}\)




















\(\ds \)

\(\)





\(\, \ds \cdots \, \)

\(\ds \)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{r - 1} \map f {\bigcap_{i \mathop = 1}^r A_i}\)










Then we need to show:














\(\ds \map f {\bigcup_{i \mathop = 1}^{r + 1} A_i}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^{r + 1} \map f {A_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le r + 1} \map f {A_i \cap A_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop < k \mathop \le r + 1} \map f {A_i \cap A_j \cap A_k}\)




















\(\ds \)

\(\)





\(\, \ds \cdots \, \)

\(\ds \)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^r \map f {\bigcap_{i \mathop = 1}^{r + 1} A_i}\)











Induction Step
This is our induction step:














\(\ds \map f {\bigcup_{i \mathop = 1}^{r + 1} A_i}\)

\(=\)







\(\ds \map f {\bigcup_{i \mathop = 1}^r A_i \cup A_{r + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\bigcup_{i \mathop = 1}^r A_i} + \map f {A_{r + 1} } - \map f {\bigcup_{i \mathop = 1}^r A_i \cap A_{r + 1} }\)





Basis for the Induction




Consider $\ds \map f {\bigcup_{i \mathop = 1}^r A_i \cap A_{r + 1} }$.
By the fact that Intersection Distributes over Union, this can be written:

$\ds \map f {\bigcup_{i \mathop = 1}^r \paren {A_i \cap A_{r + 1} } }$
To this, we can apply the induction hypothesis:














\(\ds \map f {\bigcup_{i \mathop = 1}^r \paren {A_i \cap A_{r + 1} } }\)

\(=\)







\(\ds \sum_{i \mathop = 1}^r \map f {A_i \cap A_{r + 1} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le r} \map f {A_i \cap A_j \cap A_{r + 1} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop < k \mathop \le r} \map f {A_i \cap A_j \cap A_k \cap A_{r + 1} }\)




















\(\ds \)

\(\)





\(\, \ds \cdots \, \)

\(\ds \)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{r - 1} \map f {\bigcap_{i \mathop = 1}^r A_i \cap A_{r + 1} }\)










At the same time, we have the expansion of the term $\ds \map f {\bigcup_{i \mathop = 1}^r A_i}$ to take into account.

So we can consider the general term of $s$ intersections in the expansion of $\ds \map f {\bigcup_{i \mathop = 1}^{r + 1} A_i}$:

$\ds \paren {-1}^{s - 1} \sum_{\substack {I \subseteq \closedint 1 r \\ \card I = s} } \map f {\bigcap_{i \mathop \in I} A_i} - \paren {-1}^{s - 2} \sum_{\substack {J \subseteq \closedint 1 r \\ \card J = s - 1} } \map f {\bigcap_{i \mathop \in J} A_i \cap A_{r + 1} }$
where:

$I$ ranges over all sets of $s$ elements out of $\closedint 1 r$
$J$ ranges over all sets of $s - 1$ elements out of $\closedint 1 r$
$1 \le s \le r$

Messy though it is, it can be seen that this expression is merely:

$\ds \paren {-1}^{s - 1} \sum_{\substack {I' \subseteq \closedint 1 {r + 1} \\ \card {I'} = s} } \map f {\bigcap_{i \mathop \in I'} A_i}$
where this time, $I'$ ranges over all sets of $s$ elements out of $\closedint 1 {r + 1}$ and $1 \le s \le r + 1$.

This is the required term in $s$ intersections in the expansion of $\ds \map f {\bigcup_{i \mathop = 1}^{r + 1} A_i}$.

Just to check, we can see the first term is:

$\ds \sum_{i \mathop = 1}^r \map f {A_i} + \map f {A_{r + 1} } = \sum_{i \mathop = 1}^{r + 1} \map f {A_i}$
As the expression $\ds \map f {\bigcup_{i \mathop = 1}^r A_i \cap A_{r + 1} }$ consists only of intersections of two or more elements of $\SS$, we see it does not contribute to this first term.

Finally, let us make sure of the last term.
This is:

$\ds -\paren {-1}^{r - 1} \map f {\bigcap_{i \mathop = 1}^r A_i \cap A_{r + 1} }$
which works out as:

$\ds \paren {-1}^r \map f {\bigcap_{i \mathop = 1}^{r + 1} A_i}$

We've done enough.

So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:














\(\ds \map f {\bigcup_{i \mathop = 1}^n A_i}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \map f {A_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \map f {A_i \cap A_j}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop < k \mathop \le n} \map f {A_i \cap A_j \cap A_k}\)




















\(\ds \)

\(\)





\(\, \ds \cdots \, \)

\(\ds \)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {-1}^{n - 1} \map f {\bigcap_{i \mathop = 1}^n A_i}\)









$\blacksquare$

Examples
$3$ Events in Event Space
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $A, B, C \in \Sigma$.
Then:














\(\ds \map \Pr {A \cup B \cup C}\)

\(=\)







\(\ds \map \Pr A + \map \Pr B + \map \Pr C\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \map \Pr {A \cap B} - \map \Pr {B \cap C} - \map \Pr {A \cap C}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \map \Pr {A \cap B \cap C}\)











$3$ Events in Event Space: Example
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $A, B, C \in \Sigma$ such that:.
Then:














\(\ds \map \Pr A\)

\(=\)







\(\ds \dfrac 5 {10}\)




















\(\ds \map \Pr B\)

\(=\)







\(\ds \dfrac 7 {10}\)




















\(\ds \map \Pr C\)

\(=\)







\(\ds \dfrac 6 {10}\)




















\(\ds \map \Pr {A \cap B}\)

\(=\)







\(\ds \dfrac 3 {10}\)




















\(\ds \map \Pr {B \cap C}\)

\(=\)







\(\ds \dfrac 4 {10}\)




















\(\ds \map \Pr {A \cap C}\)

\(=\)







\(\ds \dfrac 2 {10}\)




















\(\ds \map \Pr {A \cap B \cap C}\)

\(=\)







\(\ds \dfrac 1 {10}\)









The probability that exactly $2$ of the events $A$, $B$ and $C$ occur is $\dfrac 6 {10}$.


Context
This result is usually quoted in the context of combinatorics, where $f$ is the cardinality function.
It is also seen in the context of probability theory, in which $f$ is taken to be a probability measure.


Historical Note
The Inclusion-Exclusion Principle, in various forms, has been attributed to:

Abraham de Moivre
Daniel da Silva
James Joseph Sylvester
Henri Poincaré.


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.11$: Problems: $12 \ \text{(a)}$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): inclusion-exclusion principle
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): probability
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): probability
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): inclusion-exclusion principle




