# 

Source: https://proofwiki.org/wiki/Multiple_of_Repdigit_Base_minus_1/Generalization

Theorem
Let $b \in \Z_{>1}$ be an integer greater than $1$.
Let $n$ be a repdigit number of $k$ instances of the digit $b - 1$ for some integer $k$ such that $k \ge 1$.
Let $m \in \N$ be an integer such that $1 \le m \le b^k$.

Then $m \times n$, when expressed in base $b$, is the concatenation of $m - 1$ with $b^k - m$, that is:

$m n = \sqbrk {\paren {m - 1} \paren {b^k - m} }_b$
If $b^k - m$ has less than $k$ digits, leading zeros are added to it until it has $k$ digits.


Proof













\(\ds n\)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} \paren {b - 1} b^j\)





Basis Representation Theorem














\(\ds \)

\(=\)







\(\ds b^k - 1\)





Sum of Geometric Sequence








\(\ds \leadsto \ \ \)





\(\ds m n\)

\(=\)







\(\ds m \paren {b^k - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {m - 1} b^k + b^k - m\)









which is exactly the representation $\sqbrk {\paren {m - 1} \paren {b^k - m} }_b$ with leading zeroes for $b^k - m$, as defined.
$\blacksquare$


Example
In base $10$, $972 \times 999 = 971 \, 028$.
Hence $971 = 972 - 1$ and $028 = 10^3 - 972$.





