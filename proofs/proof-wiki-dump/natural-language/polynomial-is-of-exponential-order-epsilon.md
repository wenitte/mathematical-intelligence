# 

Source: https://proofwiki.org/wiki/Polynomial_is_of_Exponential_Order_Epsilon



Theorem
Let $P: \R \to \mathbb F$ be a polynomial, where $\mathbb F \in \set {\R, \C}$.

Then $P$ is of exponential order $\epsilon$ for any $\epsilon > 0$ arbitrarily small in magnitude.


Proof
If $P = 0$, the theorem holds trivially. 
Let $P_n$ be a polynomial of degree $n$, where $n \ge 0$.
The proof proceeds by induction on $n$, where $n$ is the degree of the polynomial.


Basis for the Induction
Let $P_0$ be of degree zero.
Then $P_0$ is a constant polynomial.
By Constant Function is of Exponential Order Zero, $P_0 \in \EE_0$.
Therefore, by Raising Exponential Order, it is of exponential order $\epsilon$ as well.
This is the basis for the induction.


Induction Hypothesis
Fix $n \in \N$ with $n \ge 0$.
Assume:

$P_n \in \EE_\epsilon$
That is:

$\size {\map {P_n} t} < K e^{\epsilon t}$
for some $K > 0$, for $\epsilon > 0$ arbitrarily small.
This is our induction hypothesis.


Induction Step
Let $P_{n + 1}$ be of degree $n + 1$.
By the definition of polynomial,

$P_{n + 1} = P_n + a_{n + 1} x^{n + 1}$
for some polynomials of degree $n$.
$P_n$ is of exponential order $\epsilon$ by the induction hypothesis.

Thus, by:

Sum of Functions of Exponential Order
Scalar Multiple of Function of Exponential Order
Natural Number Power is of Exponential Order Epsilon
We have that $P_{n + 1}$ is of degree $\epsilon$.

The result follows by the Principle of Mathematical Induction.
$\blacksquare$





