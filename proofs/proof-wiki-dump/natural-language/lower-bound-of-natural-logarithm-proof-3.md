# 

Source: https://proofwiki.org/wiki/Lower_Bound_of_Natural_Logarithm/Proof_3



Theorem
$\forall x \in \R_{>0}: 1 - \dfrac 1 x \le \ln x$
where $\ln x$ denotes the natural logarithm of $x$.


Proof
Let $\sequence {f_n}$ be the sequence of mappings $f_n: \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1 }$
Let $x \in \R_{>0}$ be fixed.
We first show that:

$\forall n \in \N : 1 - \dfrac 1 x \le n \paren {\sqrt [n] x - 1}$
Let $n \in \N$.
From Sum of Geometric Sequence:

$\sqrt [n] x - 1 = \dfrac {x - 1} {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} }$


Case 1: $0 < x < 1$













\(\ds 0 < x < 1\)

\(\leadsto\)







\(\ds \forall k < n: \sqrt [n] x^{n - k} > x > 0\)





Power Function on Base between Zero and One is Strictly Decreasing/Rational Number














\(\ds \)

\(\leadsto\)







\(\ds 0 < n x < \sum_{k = 0}^{n - 1} \sqrt [n] x^{n - k}\)





Real Number Ordering is Compatible with Addition














\(\ds \)

\(\leadsto\)







\(\ds \dfrac 1 {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} } > \dfrac 1 {n x}\)





Ordering of Reciprocals














\(\ds \)

\(\leadsto\)







\(\ds \dfrac {x - 1} {n x} < \dfrac {x - 1} {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} }\)





Order of Real Numbers is Dual of Order of their Negatives














\(\ds \)

\(\leadsto\)







\(\ds \dfrac {x - 1} {n x} < \sqrt [n] x - 1\)





Sum of Geometric Sequence














\(\ds \)

\(\leadsto\)







\(\ds 1 - \dfrac 1 x < n \paren {\sqrt [n] x - 1}\)





Real Number Ordering is Compatible with Multiplication



$\Box$


Case 2: $x = 1$













\(\ds \dfrac {x - 1} x\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \sqrt [n] 1 - 1\)









$\Box$


Case 3: $x > 1$













\(\ds x > 1\)

\(\leadsto\)







\(\ds \forall k < n: 1 < \sqrt [n] x^{n - k} < x\)





Power Function on Base Greater than One is Strictly Increasing/Rational Number














\(\ds \)

\(\leadsto\)







\(\ds 0 < \sum_{k \mathop = 0}^{n - 1} \sqrt [n] x^{n - k} < n x\)





Real Number Ordering is Compatible with Addition














\(\ds \)

\(\leadsto\)







\(\ds 0 < \dfrac 1 {n x} < \dfrac 1 {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} }\)





Ordering of Reciprocals














\(\ds \)

\(\leadsto\)







\(\ds \dfrac {x - 1} {n x} < \dfrac {x - 1} {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} }\)





Real Number Ordering is Compatible with Multiplication














\(\ds \)

\(\leadsto\)







\(\ds \dfrac {x - 1} {n x} < \sqrt [n] x - 1\)





Sum of Geometric Sequence














\(\ds \)

\(\leadsto\)







\(\ds 1 - \dfrac 1 x < n \paren {\sqrt [n] x - 1 }\)





Real Number Ordering is Compatible with Multiplication



$\Box$

Thus:

$\forall n \in \N : 1 - \dfrac 1 x \le n \paren {\sqrt [n] x - 1 }$
by Proof by Cases.
Thus:

$\ds 1 - \dfrac 1 x \le \lim_{n \mathop \to \infty} n \paren {\sqrt [n] x - 1 }$
from Limit of Bounded Convergent Sequence is Bounded.
Hence the result, from the definition of $\ln$.
$\blacksquare$


Illustration





