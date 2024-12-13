# 

Source: https://proofwiki.org/wiki/Polynomials_in_Integers_with_Even_Constant_Term_forms_Ideal

Theorem
Let $\Z \sqbrk X$ be the ring of polynomials in $X$ over $\Z$.
Let $S \subseteq \Z \sqbrk X$ be the set of polynomials over $\Z$ in $X$ which have a constant term which is even.

Then $S$ is an ideal of $\Z \sqbrk X$.


Proof
For example, $X + 2$ is a polynomials over $\Z$ in $X$ with an even constant term.
So $S$ is not empty.

Let $P_1 = \ds \sum_{k \mathop = 0}^n a_k X^k$ and $P_2 = \ds \sum_{k \mathop = 0}^n b_k X^k$ be elements of $S$.
We have:














\(\ds P_1 - P_2\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n a_k X^k + \sum_{k \mathop = 0}^n b_k X^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\max \set {m, n} } \paren {a_k - b_k} X^k\)









The constant term of $P_1 - P_2$ is $a_0 - b_0$ which is even.
Thus $P_1 - P_2 \in S$.
Let $P_3 = \sum_{k \mathop = 0}^s c_k X^k \in \Z \sqbrk X$.
Then the constant term of $P_3 \times P_1$ is $c_0 \times a_0$.
As $a_0$ is even, so is $c_0 \times a_0$.
The result follows by Test for Ideal.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $21$




