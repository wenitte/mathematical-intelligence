# 

Source: https://proofwiki.org/wiki/Forward-Backward_Induction



Theorem
Let $P$ be a propositional function on the natural numbers $\N$.
Suppose that:

$(1): \quad \forall n \in \N: \map P {2^n}$ holds.
$(2): \quad \map P n \implies \map P {n - 1}$.
Then $\map P n$ holds for all $\forall n \in \N$.

The proof technique based on this result is called forward-backward induction.


Proof
Aiming for a contradiction, suppose $\exists k \in \N$ such that $\map P k$ is false.
From Power of Real Number greater than One is Unbounded Above‎:

$\set {2^n: n \in \N}$ is unbounded above.
Therefore we can find:

$M = 2^N > k$
Now let us create the set:

$S = \set {n \in \N: n < M, \map P n \text { is false} }$
As $k < M$ and $\map P k$ is false:

$S \ne \O$
As $\forall x \in S: x < M$ it follows that $S$ is bounded above.
So from Set of Integers Bounded Above by Integer has Greatest Element, $S$ has a greatest element, which we call $m$.
We have that $\map P n$ holds for $m < n \le M$.
Hence $\map P {m + 1}$ holds.
But $\map P {m + 1} \implies \map P m$.
This contradicts our assertion that $\map P n$ is false.
Hence by Proof by Contradiction there can be no such $k \in \N$ such that $\map P k$ is false.
Hence the result.
$\blacksquare$


Also known as
The technique of Forward-Backward Induction is also known as backwards induction or backwards induction.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: Exercise $\S 3.11 \ (5)$




