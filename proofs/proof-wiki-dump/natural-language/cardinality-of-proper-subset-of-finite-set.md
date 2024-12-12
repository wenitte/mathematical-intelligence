# 

Source: https://proofwiki.org/wiki/Cardinality_of_Proper_Subset_of_Finite_Set



Theorem
Let $A$ and $B$ be finite sets such that $A \subsetneqq B$.
Let $\card B = n$, where $\card {\, \cdot \,}$ denotes cardinality.

Then $\card A < n$.


Proof
The proof proceeds by the Principle of Mathematical Induction on $n$, the cardinality of $B$.

Let $S$ be the set of $n \in \N$ such that every proper subset of any set with $m$ elements is finite and has (strictly) fewer than $n$ elements.


Basis for the Induction
The case $n = 0$ is verified as follows:

Suppose $\card B = 0$.
From Cardinality of Empty Set, $B = \O$. 
There are no sets $A$ such that $A \subsetneq \O$.
Therefore $0 \in S$ by vacuous truth.
This is the basis for the induction.


Induction Hypothesis
Fix $k \in \N$ with $k \ge 0$.
Suppose that $k \in S$.
That is:

every proper subset of any set with $k$ elements is finite and has (strictly) fewer than $k$ elements.

This is our induction hypothesis.

It remains to be proved that $k + 1 \in S$:

every proper subset of any set with $k + 1$ elements is finite and has (strictly) fewer than $k + 1$ elements.


Induction Step
This is our induction step:

Suppose we have any set $B$ such that $\card B = k + 1$.
Let $A \subsetneqq B$.
From the definition of $\subsetneqq$:

$\exists b \in B: b \notin A$
Therefore:

$A \subseteq B \setminus \set b$
From Cardinality Less One:

$\card {B - \set b} = k$
Suppose $A = B - \set b$.
Then $\card A = k < k + 1$ and so has fewer than $k + 1$ elements and is finite by definition.
Otherwise:

$A \subsetneqq B - \set b$
So by the induction hypothesis:

$A$ is finite and has fewer than $k$ elements.
But as $k < k + 1$ it also follows that $A$ is finite and has fewer than $k + 1$ elements.
Thus $A \in S$.

The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 3.7$. Similar sets: Example $56$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.5$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 6$: Finite Sets: Theorem $6.2$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 6$: Finite Sets: Corollary $6.6$




