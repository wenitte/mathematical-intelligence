# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/One-Based/Proof_1

Theorem
Let $\map P n$ be a propositional function depending on $n \in \N_{>0}$.
Suppose that:

$(1): \quad \map P 1$ is true
$(2): \quad \forall k \in \N_{>0}: k \ge 1 : \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N_{>0}$.


Proof
Let $S$ be the set defined as:

$S := \set {n \in \N_{>0}: \map P n \text { is false} }$
Aiming for a contradiction, suppose $S \ne \O$.
From the Well-Ordering Principle it follows that $S$ has a minimal element $m$.
From $(1)$ we have that $\map P 1$ holds.
Hence $1 \notin S$.
Therefore $m \ne 1$.
Therefore $m - 1 \in \N_{>0}$.
But $m$ is the minimal element of $S$.
So $m - 1 \notin S$.
Therefore $\map P {m - 1}$ is true.
Hence by $(2)$ it follows that $\map P m$.
But then $m \notin S$.
This contradicts our supposition that $m \in S$.
Hence there can be no such $m \in S$.
So $S = \O$ and the result follows.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: $\S 3.8$: Theorem (principle of induction)




