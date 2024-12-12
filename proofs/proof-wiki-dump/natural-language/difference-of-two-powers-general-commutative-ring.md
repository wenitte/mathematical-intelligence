# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Powers/General_Commutative_Ring

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring whose zero is $0_R$.
Let $a, b \in R$.
Let $n \in \N$ such that $n \ge 2$.

Then:














\(\ds a^n - b^n\)

\(=\)







\(\ds \paren {a - b} \circ \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} \circ b^j\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \circ \paren {a^{n - 1} + a^{n - 2} \circ b + a^{n - 3} \circ b^2 + \dotsb + a \circ b^{n - 2} + b^{n - 1} }\)











Proof
Let $\ds S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} \circ b^j$.
This can also be written:

$\ds S_n = \sum_{j \mathop = 0}^{n - 1} b^j \circ a^{n - j - 1}$

Consider:

$\ds a \circ S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j} \circ b^j$
Taking the first term (where $j = 0$) out of the summation, we get:

$\ds a \circ S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j} \circ b^j = a^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} \circ b^j$

Similarly, consider:

$\ds b \circ S_n = \sum_{j \mathop = 0}^{n - 1} a^j \circ b^{n - j}$
Taking the first term (where $j = 0$) out of the summation:

$\ds b \circ S_n = \sum_{j \mathop = 0}^{n - 1} a^j \circ b^{n - j} = b^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} \circ b^j$
This is equal to:

$\ds b^n + \sum_{j \mathop = 1}^{n - 1} a^j \circ b^{n - j}$
by Permutation of Indices of Summation.

So:














\(\ds \paren {a - b} \circ S_n\)

\(=\)







\(\ds a \circ \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} \circ b^j - b \circ \sum_{j \mathop = 0}^{n - 1} a^j \circ b^{n - j - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} a^{n - j} \circ b^j - \sum_{j \mathop = 0}^{n - 1} a^j \circ b^{n - j}\)




















\(\ds \)

\(=\)







\(\ds a^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} \circ b^j - \sum_{j \mathop = 1}^{n - 1} a^{n - j} \circ b^j - b^n\)




















\(\ds \)

\(=\)







\(\ds a^n - b^n\)









$\blacksquare$





