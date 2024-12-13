# 

Source: https://proofwiki.org/wiki/Rising_Sum_of_Binomial_Coefficients/Proof_by_Induction



Theorem
$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + m + 1} {n + 1} = \binom {n + m + 1} m$


Proof
Proof by induction:
Let $n \in \Z$.
For all $m \in \N$, let $\map P m$ be the proposition:

$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + m + 1} {n + 1}$

$\map P 0$ is true, as this just says:

$\dbinom n n = \dbinom {n + 1} {n + 1}$
But $\dbinom n n = \dbinom {n + 1} {n + 1} = 1$ from the Definition of Binomial Coefficient.


Basis for the Induction
$\map P 1$ is the case:














\(\ds \sum_{j \mathop = 0}^1 \binom {n + j} n\)

\(=\)







\(\ds \binom n n + \binom {n + 1} n\)




















\(\ds \)

\(=\)







\(\ds 1 + \paren {n + 1}\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds n + 2\)




















\(\ds \)

\(=\)







\(\ds \binom {n + 2} {n + 1}\)





Definition of Binomial Coefficient



So:

$\ds \sum_{j \mathop = 0}^1 \binom {n + j} n = \binom {n + 2} {n + 1}$
and $\map P 1$ is seen to hold.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \sum_{j \mathop = 0}^k \binom {n + j} n = \binom {n + k + 1} {n + 1}$

Then we need to show:

$\ds \sum_{j \mathop = 0}^{k+1} \binom {n + j} n = \binom {n + k + 2} {n + 1}$


Induction Step
This is our induction step:














\(\ds \sum_{j \mathop = 0}^{k + 1} \binom {n + j} n\)

\(=\)







\(\ds \sum_{j \mathop = 0}^k \binom {n + j} n + \binom {n + k + 1} n\)




















\(\ds \)

\(=\)







\(\ds \binom {n + k + 1} {n + 1} + \binom {n + k + 1} n\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \binom {n + k + 2} {n + 1}\)





Pascal's Rule



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \sum_{j \mathop = 0}^m \binom {n + j} n = \binom {n + m + 1} {n + 1}$

Finally, from Symmetry Rule for Binomial Coefficients:

$\dbinom {n + m + 1} {n + 1} = \dbinom {n + m + 1} m$
$\blacksquare$


Proof
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Exercise $5$




