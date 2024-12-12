# 

Source: https://proofwiki.org/wiki/General_Positivity_Rule_in_Ordered_Integral_Domain



Theorem
Let $\struct {D, +, \times}$ be an ordered integral domain, whose (strict) positivity property is denoted $P$.
Let $S \subset D$ be a subset of $D$ such that:

$\forall s \in S: \map P x$

Then the following are true:

$\ds \forall n \in \N_{>0}: \forall s_i \in S: \map P {\sum_{i \mathop = 1}^n s_i}$
$\ds \forall n \in \N_{>0}: \forall s_i \in S: \map P {\prod_{i \mathop = 1}^n s_i}$
where:

$\ds \sum_{i \mathop = 1}^n s_i = s_1 + s_2 + \cdots + s_n$
$\ds \prod_{i \mathop = 1}^n s_i = s_1 \times s_2 \times \cdots \times s_n$
That is, the ring sum and ring product of any number of elements in $D$ which have the (strict) positivity property also have the (strict) positivity property.


Corollary
Let $\map P x$ where $x \in D$.
Then:

$\map P {n \cdot x}$ and $\map P {x^n}$


Proof
Trivially true for $n = 1$, and true by definition for $n = 2$.
Suppose it is true for all $n$ up to $n = k$ for some $k \in \N$.
Then:

$\ds \forall s_i \in S: \map P {\sum_{i \mathop = 1}^k s_i}$
$\ds \forall s_i \in S: \map P {\prod_{i \mathop = 1}^k s_i}$

Take any $\ds \sum_{i \mathop = 1}^{k + 1} s_i = \sum_{i \mathop = 1}^k s_i + s_{k + 1}$.
Then:

$\ds \map P {\sum_{i \mathop = 1}^k s_i}$ and $\map P {s_{k + 1} }$
so:

$\ds \map P {\sum_{i \mathop = 1}^{k + 1} s_i}$
because the (strict) positivity property holds for all $s_i \in S$.

Similarly:

$\ds \map P {\prod_{i \mathop = 1}^k s_i}$ and $\map P {s_{k + 1} }$
so:

$\ds \map P {\prod_{i \mathop = 1}^{k + 1} s_i}$

The result follows by the Principle of Complete Induction.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Ordered and Well-Ordered Integral Domains: $\S 7$. Order: Example $11$




