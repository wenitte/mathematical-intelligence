# 

Source: https://proofwiki.org/wiki/Ordinal_Exponentiation_via_Cantor_Normal_Form/Limit_Exponents



Theorem
Let $x$ and $y$ be ordinals.
Let $x$ and $y$ be limit ordinals.
Let $\sequence {a_i}$ be a sequence of ordinals that is strictly decreasing on $1 \le i \le n$.
Let $\sequence {b_i}$ be a sequence of natural numbers.

Then:

$\ds \paren {\sum_{i \mathop = 1}^n x^{a_i} \times b_i}^y = x^{a_1 \mathop \times y}$


Proof
By Upper Bound of Ordinal Sum:

$\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} \times b_i} \le x^{a_1} \times \paren {b_1 + 1}$

Furthermore:

$\ds x^{a_1} \le \sum_{i \mathop = 1}^n \paren {x^{a_i} \times b_i}$

It follows that:














\(\ds \paren {x^{a_1} }^y\)

\(\le\)







\(\ds \paren {\sum_{i \mathop = 1}^n x^{a_i} \times b_i}^y\)





Subset is Right Compatible with Ordinal Exponentiation














\(\ds \)

\(\le\)







\(\ds \paren {x^{a_1} \times \paren {b_1 + 1} }^y\)





Subset is Right Compatible with Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds x^{a_1 \times y}\)





Ordinal Exponentiation of Terms




It follows that:














\(\ds x^{a_1 \mathop + y}\)

\(\le\)







\(\ds \paren {\sum_{i \mathop = 1}^n x^{a_i} b_i}^y\)





Ordinal Power of Power














\(\ds \)

\(\le\)







\(\ds x^{a_1 \mathop + y}\)





proven above








\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{i \mathop = 1}^n x^{a_i} b_i}^y\)

\(=\)







\(\ds x^{a_1 \mathop + y}\)





Definition 2 of Set Equality



$\blacksquare$


Also see
Definition:Cantor Normal Form


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.49$




