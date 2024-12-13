# 

Source: https://proofwiki.org/wiki/Number_of_Permutations_with_Repetition



Theorem
Set $S$ be a set of $n$ elements.
Let $\sequence T_m$ be a sequence of $m$ terms of $S$.

Then there are $n^m$ different instances of $\sequence T_m$.


Proof
Let $N_m$ denote the set $\set {1, 2, \ldots, m}$.
Let $f: N_m \to S$ be the mapping defined as:

$\forall k \in N_m: \map f t = t_m$
By definition, $f$ corresponds to one of the specific instances of $\sequence T_m$.
Hence the number of different instances of $\sequence T_m$ is found from Cardinality of Set of All Mappings:

$\card S^{\card {N_m} }$
The result follows.
$\blacksquare$


Examples
$7$ Choices from $4$
Residents of a boarding house are offered a choice of $1$ of $4$ main foods for breakfast:

fish or eggs or bacon or sausages.
Over the course of a week, a resident can then order:

$1$ of $4$ dishes on Monday
$1$ of $4$ dishes on Tuesday
$\ldots$
$1$ of $4$ dishes on Sunday
The number of different breakfast arrangements over a week of $7$ days is:

$4 \times 4 \times 4 \times 4 \times 4 \times 4 \times 4 = 16 \, 384$


Sources
1932: Clement V. Durell: Advanced Algebra: Volume $\text { I }$ ... (previous) ... (next): Chapter $\text I$ Permutations and Combinations: The $r$, $s$ Principle: Example $3$.




