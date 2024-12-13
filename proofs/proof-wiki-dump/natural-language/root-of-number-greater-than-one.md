# 

Source: https://proofwiki.org/wiki/Root_of_Number_Greater_than_One



Theorem
Let $x \in \R$ be a real number.
Let $n \in \N_{>0}$ be a natural number such that $n > 0$.

Then:

$x \ge 1 \implies x^{1/n} \ge 1$
where $x^{1/n}$ is the $n$th root of $x$.


Proof
Let $y = x^{1/n}$.
From the definition of the $n$th root of $x$, it follows that $x = y^n$.

We will show by induction that $\forall n \in \N_{>0}: y^n \ge 1 \implies y \ge 1$.

For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$y^n \ge 1 \implies y \ge 1$


Basis for the Induction
By definition, $y^1 = y$.
Thus $\map P 1$ is true, as this just says $y \ge 1 \implies y \ge 1$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So our induction hypothesis is that:

$y^k \ge 1 \implies y \ge 1$
Now we need to show that:

$y^{k + 1} \ge 1 \implies y \ge 1$


Induction Step
This is our induction step:
By definition:

$y^{k + 1} = y \cdot y^k$
Suppose $y^k \ge 1$.
From the induction hypothesis it follows that $y > 1$.
As $y \ge 1$ it follows that $y > 0$.
Let:

$y^{k + 1} = y \cdot y^k \ge 1$
Then:

$y \cdot y^k$
By Real Number Ordering is Compatible with Multiplication:

$y \cdot y^k \ge y \times 1$
and hence the result.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: y^n \ge 1 \implies y \ge 1$
As $y^n = x$ and $y = x^{1/n}$, the result follows.
$\blacksquare$





