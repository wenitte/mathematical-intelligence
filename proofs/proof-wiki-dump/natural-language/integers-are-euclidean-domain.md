# 

Source: https://proofwiki.org/wiki/Integers_are_Euclidean_Domain

Theorem
The integers $\Z$ with the mapping $\nu: \Z \to \Z$ defined as:

$\forall x \in \Z: \map \nu x = \size x$
form a Euclidean domain.


Proof
From Integers form Ordered Integral Domain we have that $\struct {\Z, +, \times, \le}$ forms an ordered integral domain.

For all $a \in \Z$, the absolute value of $a$ is defined as:

$\size a = \begin{cases} a & : 0 \le a \\ -a & : a < 0 \end{cases}$
By Product of Absolute Values on Ordered Integral Domain we have:

$\forall a, b \in \Z: \size a \cdot \size b = \size {a b}$
Since $\size b > 0$ it follows from Relation Induced by Strict Positivity Property is Compatible with Multiplication that $\size a \cdot \size b \ge \size a$.

The second criterion:

For any $a, b \in R$, $b \ne 0$, there exist $q, r \in R$ with $\map \nu r < \map \nu b$, or $r = 0$ such that:
$ a = q \circ b + r$
follows from the Division Theorem.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 27$. Euclidean Rings: Example $51$




