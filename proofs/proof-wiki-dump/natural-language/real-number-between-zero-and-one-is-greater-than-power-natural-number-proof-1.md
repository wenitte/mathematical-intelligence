# 

Source: https://proofwiki.org/wiki/Real_Number_between_Zero_and_One_is_Greater_than_Power/Natural_Number/Proof_1



Theorem
Let $x \in \R$.
Let $0 < x < 1$.
Let $n$ be a natural number.

Then:

$0 < x^n \le x$


Proof
For all $n \in \N$, let $\map P n$ be the proposition:

$0 < x < 1 \implies 0 < x^n \le x$


Basis for the Induction
$\map P 1$ is true, since $0 < x < 1 \implies 0 < x^1 \le x$ by definition of exponent of $1$.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$0 < x < 1 \implies 0 < x^k \le x$

Then we need to show:

$0 < x < 1 \implies 0 < x^{k + 1} \le x$


Induction Step
This is our induction step:














\(\ds 0 < x < 1\)

\(\leadsto\)







\(\ds 0 < x^k \le x\)





Induction Hypothesis














\(\ds \)

\(\leadsto\)







\(\ds 0 < x^{k + 1} \le x \cdot x\)





Real Number Ordering is Compatible with Multiplication














\(\ds \)

\(\leadsto\)







\(\ds 0 < x^{k + 1} \le x\)





Multiple of Positive Real Number with Number Less Than One is Less Than Real Number



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$\forall n \in \N: 0 < x < 1 \implies 0 < x^n \le x$
Hence the result.
$\blacksquare$





