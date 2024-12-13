# 

Source: https://proofwiki.org/wiki/Reversal_formed_by_Repdigits_of_Base_minus_1_by_Addition_and_Multiplication



Theorem
Let $b \in \Z_{>1}$ be an integer greater than $1$.
Let $n = b^k - 1$ for some integer $k$ such that $k \ge 1$.

Then:

$n + n$ is the reversal of $\paren {b - 1} n$
when both are expressed in base $b$ representation.


Proof
By Power of Base minus 1 is Repdigit Base minus 1, $n$ is a repdigit number consisting of $k$ occurrences of $b - 1$.
Let $a = b - 1$.
Thus $n$ can be expressed in base $b$ as:

$n = {\overbrace {\sqbrk {aaa \cdots a} }^k}_b$

We have that:














\(\ds n + n\)

\(=\)







\(\ds 2 n\)




















\(\ds \)

\(=\)







\(\ds \sqbrk {1aa \cdots ac}_b\)





Multiple of Repdigit Base minus 1: $k - 1$ occurrences of $a$, and $c = b - 2$



where there are:

$k - 1$ occurrences of $a$
$c = b - 2$.

Then:














\(\ds \paren {b - 1} \times n\)

\(=\)







\(\ds a n\)




















\(\ds \)

\(=\)







\(\ds \sqbrk {caa \cdots a1}_b\)





Multiple of Repdigit Base minus 1



where there are:

$k - 1$ occurrences of $a$
$c = b - 2$.
Hence the result.
$\blacksquare$


Examples
Reversal of $9 + 9$













\(\ds 9 + 9\)

\(=\)







\(\ds 18\)




















\(\ds 9 \times 9\)

\(=\)







\(\ds 81\)











Reversal of $99 + 99$













\(\ds 99 + 99\)

\(=\)







\(\ds 198\)




















\(\ds 9 \times 99\)

\(=\)







\(\ds 891\)











Reversal of $7 + 7$ Base $8$













\(\ds 7 + 7\)

\(=\)







\(\ds 16_8\)




















\(\ds 7 \times 7\)

\(=\)







\(\ds 61_8\)











Historical Note
David Wells reports in Curious and Interesting Numbers of $1986$ that this result was discussed in Volume $10$ of Journal of Recreational Mathematics by D.Y. Hsu, but further corroborating evidence for this has not yet been found.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $18$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $18$




