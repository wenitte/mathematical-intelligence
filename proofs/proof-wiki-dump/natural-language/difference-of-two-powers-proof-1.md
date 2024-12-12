# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Powers/Proof_1

Theorem
Let $\mathbb F$ denote one of the standard number systems, that is $\Z$, $\Q$, $\R$ and $\C$.
Let $n \in \N$ such that $n \ge 2$.

Then for all $a, b \in \mathbb F$:














\(\ds a^n - b^n\)

\(=\)







\(\ds \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j\)




















\(\ds \)

\(=\)







\(\ds \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + a^{n - 3} b^2 + \dotsb + a b^{n - 2} + b^{n - 1} }\)











Proof
Let $\ds S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$.
This can also be written:

$\ds S_n = \sum_{j \mathop = 0}^{n - 1} b^j a^{n - j - 1}$

Consider:

$\ds a S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j}  b^j$
Taking the first term (where $j = 0$) out of the summation, we get:

$\ds a S_n = \sum_{j \mathop = 0}^{n - 1} a^{n - j} b^j = a^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} b^j$

Similarly, consider:

$\ds b S_n = \sum_{j \mathop = 0}^{n - 1} a^j b^{n - j}$
Taking the first term (where $j = 0$) out of the summation:

$\ds b S_n = \sum_{j \mathop = 0}^{n - 1} a^j b^{n - j} = b^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} b^j$
This is equal to:

$\ds b^n + \sum_{j \mathop = 1}^{n - 1} a^j b^{n - j}$
by Permutation of Indices of Summation.

So:














\(\ds \paren {a - b} S_n\)

\(=\)







\(\ds a \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j - b \sum_{j \mathop = 0}^{n - 1} a^j b^{n - j - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} a^{n - j} b^j - \sum_{j \mathop = 0}^{n - 1} a^j b^{n - j}\)




















\(\ds \)

\(=\)







\(\ds a^n + \sum_{j \mathop = 1}^{n - 1} a^{n - j} b^j - \sum_{j \mathop = 1}^{n - 1} a^{n - j} b^j - b^n\)




















\(\ds \)

\(=\)







\(\ds a^n - b^n\)









$\blacksquare$





