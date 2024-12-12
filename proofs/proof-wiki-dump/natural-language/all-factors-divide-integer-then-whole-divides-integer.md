# 

Source: https://proofwiki.org/wiki/All_Factors_Divide_Integer_then_Whole_Divides_Integer



Theorem
Let $S = \set {a_1, a_2, \ldots, a_r} \subseteq \Z$ be a finite subset of the integers.
Let $S$ be pairwise coprime.
Let:

$\forall j \in \set {1, 2, \ldots, r}: a_r \divides b$
where $\divides$ denotes divisibility.

Then:

$\ds \prod_{j \mathop = 1}^r a_j \divides b$


Proof
Proof by induction:

In the following, it is assumed at all times that $S = \set {a_1, a_2, \ldots, a_r} \subseteq \Z$ is pairwise coprime.

For all $r \in \N_{> 1}$, let $\map P r$ be the proposition:

$\ds \prod_{j \mathop = 1}^r a_j \divides b$


Basis for the Induction
$\map P 2$ is the case:

$a_1 a_2 \divides b$

By definition of divisibility:

$b = a_1 q_1 = a_2 q_2$
where $q_1, q_2 \in \Z$.
By Integer Combination of Coprime Integers:

$\exists x, y \in \Z: a_1 x + a_2 y = 1$
So:














\(\ds b\)

\(=\)







\(\ds a_2 q_2 \cdot a_1 x + a_1 q_1 \cdot a_2 y\)




















\(\ds \)

\(=\)







\(\ds a_1 a_2 \paren {q_2 x + q_1 y}\)









and so $a_1 a_2 \divides b$.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \prod_{j \mathop = 1}^k a_j \divides b$

Then we need to show:

$\ds \prod_{j \mathop = 1}^{k + 1} a_j \divides b$


Induction Step
This is our induction step:

By hypothesis:

$a_{k + 1} \divides b$
By Integer Coprime to all Factors is Coprime to Whole:

$\ds a_{k + 1} \perp \prod_{j \mathop = 1}^k a_j$
By the induction hypothesis:

$\ds \prod_{j \mathop = 1}^k a_j \divides b$
So by the basis for the induction:

$\ds \prod_{j \mathop = 1}^{k + 1} a_j \divides b$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:
$\ds r \in \N_{> 1}: \prod_{j \mathop = 1}^r a_j \divides b$
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.2$: Divisibility and factorization in $\mathbf Z$: Proposition $3 \ \text{(i)}$




