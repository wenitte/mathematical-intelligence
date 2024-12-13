# 

Source: https://proofwiki.org/wiki/Principle_of_Mathematical_Induction/One-Based



Theorem
Let $\map P n$ be a propositional function depending on $n \in \N_{>0}$.
Suppose that:

$(1): \quad \map P 1$ is true
$(2): \quad \forall k \in \N_{>0}: k \ge 1 : \map P k \implies \map P {k + 1}$

Then:

$\map P n$ is true for all $n \in \N_{>0}$.


Proof 1
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


Proof 2
Let $M$ be the set of all $n \in \N_{>0}$ for which $\map P n$ holds.
By $(1)$ we have that $1 \in M$.
By $(2)$ we have that if $k \in M$ then $k + 1 \in M$.
From the Axiomatization of $1$-Based Natural Numbers, Axiom $(\text F)$, it follows that $M = \N_{>0}$.
$\blacksquare$


Proof 3
We have that Natural Numbers are Non-Negative Integers.
Then we have that Integers form Well-Ordered Integral Domain.
The result follows from Induction on Well-Ordered Integral Domain.
$\blacksquare$


Also see
Results about Proofs by Induction can be found here.


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.1$ Mathematical Induction
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: $\mathbf{I}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.4.2$: Mathematical induction: Definition $1.29$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): mathematical induction




