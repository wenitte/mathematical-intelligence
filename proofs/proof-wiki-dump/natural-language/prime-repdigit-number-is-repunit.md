# 

Source: https://proofwiki.org/wiki/Prime_Repdigit_Number_is_Repunit

Theorem
Let $b \in \Z_{>0}$ be an integer greater than $1$.
Let $n \in \Z$ expressed in base $b$ be a repdigit number with more than $1$ digit.
Let $n$ be prime.

Then $n$ is a repunit (in base $b$).


Proof
Let $n$ be a repdigit number with $k$ digits.
Then by the Basis Representation Theorem:

$\ds n = \sum_{j \mathop = 0}^k m b^j$
for some $m$ such that $1 \le m < b$.
Let $m \ge 2$.
Then:

$\ds n = m \sum_{j \mathop = 0}^k b^j$
and so has $m$ as a divisor.
Hence $n$ is not prime.
The result follows by the Rule of Transposition.
$\blacksquare$





