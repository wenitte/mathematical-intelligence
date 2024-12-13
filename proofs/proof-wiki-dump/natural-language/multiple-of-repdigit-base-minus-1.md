# 

Source: https://proofwiki.org/wiki/Multiple_of_Repdigit_Base_minus_1



Theorem
Let $b \in \Z_{>1}$ be an integer greater than $1$.
Let $n$ be a repdigit number of $k$ instances of the digit $b - 1$ for some integer $k$ such that $k \ge 1$.
Let $m \in \Z_{>1}$ be an integer such that $1 < m < b$.

Then $m \times n$, when expressed in base $b$, is of the form:

$m n = \sqbrk {r d d \cdots d s}_b$
where:

$d = b - 1$
$r = m - 1$
$s = b - m$
there are $k - 1$ occurrences of $d$.


Generalization
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







\(\ds \paren {m - 1} b^k + b^k - 1 + 1 - m\)




















\(\ds \)

\(=\)







\(\ds \paren {m - 1} b^k + \sum_{j \mathop = 0}^{k - 1} \paren {b - 1} b^j + \paren {1 - m}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \paren {m - 1} b^k + \sum_{j \mathop = 1}^{k - 1} \paren {b - 1} b^j + \paren {b - 1} + \paren {1 - m}\)




















\(\ds \)

\(=\)







\(\ds \paren {m - 1} b^k + \sum_{j \mathop = 1}^{k - 1} \paren {b - 1} b^j + \paren {b - m}\)









which is exactly the representation $\sqbrk {r d d \cdots d s}_b$ as defined.
$\blacksquare$


Examples
$4 \times 999$ base $10$
$4 \times 999$ (base $10$) is equal to $3996$.


$3 \times 6666$ base $7$
$3 \times 6666$ (base $7$) is equal to $26664$ (base $7$).




