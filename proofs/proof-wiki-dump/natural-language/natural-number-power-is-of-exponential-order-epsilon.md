# 

Source: https://proofwiki.org/wiki/Natural_Number_Power_is_of_Exponential_Order_Epsilon



Theorem
Let $n \in \N$ be a natural number.

Then: 

$t \mapsto t^n$
is of exponential order $\epsilon$ for any $\epsilon > 0$ arbitrarily small in magnitude.


Proof
The proof proceeds by induction on $n$, where $n$ is the degree of the polynomial.


Basis for the Induction
When $n = 0$, the mapping is a constant mapping.
By Constant Function is of Exponential Order Zero and Raising Exponential Order, the mapping is of exponential order $\epsilon$.
This is the basis for the induction.


Induction Hypothesis
Fix $k \in \N$ with $k \ge 0$.
Assume:

$t^k \in \EE_\epsilon$
That is, 

$\forall t \ge M : \size {t^k} < K e^{\epsilon t}$
For some $M > 0$, $K > 0$, and for any $\epsilon > 0$ arbitrarily small.
This is our induction hypothesis.


Induction Step
We have:

$x^k$ is of exponential order epsilon by the induction hypothesis
Identity is of Exponential Order Epsilon
Product of Functions of Exponential Order
Therefore, $x^{k + 1}$ is also of exponential order epsilon.
The result follows by the Principle of Mathematical Induction.
$\blacksquare$





