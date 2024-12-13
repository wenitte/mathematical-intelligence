# 

Source: https://proofwiki.org/wiki/Ordinal_Multiplication_via_Cantor_Normal_Form/Infinite_Exponent



Theorem
Let $x$ and $y$ be ordinals.
Let $x > 1$.
Let $y \ge \omega$ where $\omega$ denotes the minimally inductive set.
Let $\sequence {a_i}$ be a sequence of ordinals that is strictly decreasing on $1 \le i \le n$.
Let $\sequence {b_i}$ be a sequence of ordinals such that $0 < b_i < x$ for all $1 \le i \le n$.

Then:

$\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i} \times x^y = x^{a_1 \mathop + y}$


Proof
It follows that:














\(\ds x^{a_1}\)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i}\)





Ordinal is Less than Sum














\(\ds \)

\(<\)







\(\ds x^{a_1 + 1}\)





Upper Bound of Ordinal Sum




By multiplying the inequalities by $x^y$ on the left:














\(\ds x^{a_1} \times x^y\)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i} \times x^y\)





Subset is Right Compatible with Ordinal Multiplication














\(\ds \)

\(\le\)







\(\ds x^{a_1 \mathop + 1} \times x^y\)










Solving for both sides of the inequality:














\(\ds x^{a_1} \times x^y\)

\(=\)







\(\ds x^{a_1 \mathop + y}\)





Ordinal Sum of Powers














\(\ds x^{a_1 \mathop + 1} \times x^y\)

\(=\)







\(\ds x^{\paren {a_1 \mathop + 1} \mathop + y}\)





Ordinal Sum of Powers














\(\ds \)

\(=\)







\(\ds x^{a_1 \mathop + \paren {1 \mathop + y} }\)





Ordinal Addition is Associative














\(\ds \)

\(=\)







\(\ds x^{a_1 \mathop + y}\)





Finite Ordinal Plus Transfinite Ordinal




Therefore:














\(\ds x^{a_1 \mathop + y}\)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i} \times x^y\)





Substitutivity of Class Equality














\(\ds \)

\(\le\)







\(\ds x^{a_1 \mathop + y}\)





Substitutivity of Class Equality








\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i} \times x^y\)

\(=\)







\(\ds x^{a_1 \mathop + y}\)





Definition 2 of Set Equality



$\blacksquare$


Also see
Definition:Cantor Normal Form


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.45$




