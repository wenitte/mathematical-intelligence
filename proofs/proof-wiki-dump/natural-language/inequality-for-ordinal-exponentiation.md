# 

Source: https://proofwiki.org/wiki/Inequality_for_Ordinal_Exponentiation



Theorem
Let $x$ and $y$ be ordinals.
Let $x$ be a limit ordinal and let $y > 0$.
Let $\sequence {a_i}$ be a sequence of ordinals that is strictly decreasing on $1 \le i \le n$.
Let $\sequence {b_i}$ be a sequence of natural numbers.

Then:

$\ds \paren {\sum_{i \mathop = 1}^n x^{a_i} \times b_i}^y \le x^{a_1 \mathop \times y} \times \paren {b_1 + 1}$


Proof
By Upper Bound of Ordinal Sum:

$\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} \times b_i} \le x^{a_1} \times \paren {b_1 + 1}$

So:














\(\ds \paren {\sum_{i \mathop = 1}^n x^{a_i} \times b_i}^y\)

\(\le\)







\(\ds \paren {x^{a_1} \times \paren {b_1 + 1} }^y\)





Subset is Right Compatible with Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds \paren {x^{a_1} }^y \times \paren {b_1 + 1}\)





Ordinal Multiplication via Cantor Normal Form/Limit Base














\(\ds \)

\(=\)







\(\ds x^{a_1 \mathop \times y} \times \paren {b_1 + 1}\)





Ordinal Power of Power



$\blacksquare$


This article, or a section of it, needs explaining.In particular: I can't see how $\paren {x^{a_1} \times \paren {b_1 + 1} }^y = \paren {x^{a_1} }^y \times \paren {b_1 + 1}$, from the link suggested or otherwise. I would have expected the RHS to be $\paren {x^{a_1} }^y \times \paren {b_1 + 1}^y$, unless $\paren {b_1 + 1} = \paren {b_1 + 1}^y$, which I can't get my head round without a specific link to it somewhere.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Also see
Definition:Cantor Normal Form


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.48$




