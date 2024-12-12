# 

Source: https://proofwiki.org/wiki/Basis_Representation_Theorem_for_Ordinals



Theorem
Let $x$ and $y$ be ordinals.
Let $x > 1$ and $y > 0$.

Then there exist unique finite sequences of ordinals:

$\sequence {a_i}, \sequence {b_i}$
both of unique length $n$ such that:

$(1): \quad \sequence {a_i}$ is a strictly decreasing sequence for $1 \le i \le n$
$(2): \quad 0 < b_i < x$ for all $1 \le i \le n$
$(3): \quad \ds y = \sum_{i \mathop = 1}^n x^{a_i} b_i$


Proof
The proof shall proceed by Transfinite Induction (Strong Induction) on $y$.

The inductive hypothesis states that for all $v < y$, there exist unique finite sequences of ordinals:

$\sequence {c_i}, \sequence {d_i}$
both of unique length $n$ such that:

$(1): \quad \sequence {c_i}$ is strictly decreasing sequence for $1 \le i \le n$
$(2): \quad 0 < d_i < x$ for all $1 \le i \le n$.
$(3): \quad \ds v = \sum_{i \mathop = 1}^n x^{c_i} d_i$

Since $x > 1$, it follows by Unique Ordinal Exponentiation Inequality that:

$x^z \le y < x^{z + 1}$
for some unique $z$.

By the Division Theorem for Ordinals:

$y = x^z w + v$ and $v < x^z$
for some unique $z$, $w$, and $v$.

Thus:














\(\ds v\)

\(<\)







\(\ds x^z\)





Division Theorem for Ordinals, as shown above














\(\ds \)

\(\le\)







\(\ds y\)





Unique Ordinal Exponentiation Inequality, as shown above



So $v < y$.
If $v = 0$, then the statement is proven.

If $v \ne 0$, then we may apply the inductive hypothesis.
By the inductive hypothesis:

$\ds v = \sum_{i \mathop = 1}^n x^{c_i} d_i$

Therefore:

$\ds y = x^z w + \sum_{i \mathop = 1}^n x^{c_i} d_i$
$\Box$

Set:

$a_1 = z$
$a_{i + 1} = c_i$ for $1 \le i \le n$
$b_1 = w$
$b_{i + 1} = d_i$ for $1 \le i \le n$

Since $w \ne 0$ and $d_i \ne 0$, it follows that $b_i \ne 0$ for all $1 \le i \le n+1$.
$\Box$

Moreover, since $z > c_1$ and $\sequence {c_i}$ is strictly decreasing, it follows that also $\sequence {a_i}$ is strictly decreasing.
$\Box$

The equation for the first lemma can be rewritten:

$\ds y = x^{a_1} b_1 + \sum_{i \mathop = 1}^n x^{a_{i + 1} } b_{i + 1}$
By General Associative Law for Ordinal Sum, it follows that:

$\ds y = \sum_{i \mathop = 1}^{n + 1} x^{a_i} b_i$
Thus, existence is proven.
$\Box$

Furthermore, since $z$ and $\sequence {c_i}$ are unique, and $w$ and $\sequence {a_i}$ are unique, then $\sequence {a_i}$ and $\sequence {b_i}$ are unique.
$\blacksquare$


Also see
Definition:Cantor Normal Form


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.44$




