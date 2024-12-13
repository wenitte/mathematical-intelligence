# 

Source: https://proofwiki.org/wiki/Power_is_Well-Defined/Integer



Theorem
Let $x$ be a non-zero real number.
Let $k$ be an integer.

Then $x^k$ is well-defined.


Proof
Fix $x \in \R \setminus \set 0$.


Positive Integers
We first prove the theorem for positive integers by induction:
For all $n \in \N$, let $\map P n$ be the proposition:

$x^n$ is well-defined


Basis for the Induction
$\map P 1$ is true, since $x^1 = 1$ by definition.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$x^k$ is well-defined

Then we need to show:

$x^{k + 1}$ is well-defined


Induction Step
This is our induction step:
By definition of integer power:

$x^{k + 1} = x \cdot x^k$
From Real Multiplication is Well-Defined and the Induction Hypothesis:

$x \cdot x^k$ is well-defined
So $x^{k + 1}$ is well-defined.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$\ds \forall n \in \N: x^n$ is well-defined
$\Box$


Non-Positive Integers
Fix $k \in \Z_{< 0}$
First:

$k \in \Z_{< 0} \implies -k \in \N$
From the development above, $x^{-k}$ is well-defined.
From Powers of Group Elements/Negative Index, $\dfrac 1 {x^k}$ is well-defined.
From Reciprocal of Real Number is Unique, $x^k$ is well-defined.
Finally:

$\forall x \in \R \setminus \set 0: x^0 = 1$
So $x^k$ is well-defined for $k = 0$.
Hence the result.
$\blacksquare$





