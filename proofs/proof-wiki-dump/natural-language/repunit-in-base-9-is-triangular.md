# 

Source: https://proofwiki.org/wiki/Repunit_in_Base_9_is_Triangular

Theorem
Let $m$ be a repunit base $9$.
Then $m$ is a triangular number.


Proof
Let $m$ be a repunit base $9$ with $n$ digits.
We have:














\(\ds m\)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} 9^k\)





Basis Representation Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {9^n - 1} {9 - 1}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds \dfrac {3^{2 n} - 1} 8\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3^n - 1} \paren {3^n + 1} } 8\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\paren {2 s + 1} - 1} \paren {\paren {2 s + 1} + 1} } 8\)





$3^n$ is odd, and so $3^n = 2 s + 1$ for some integer $s$














\(\ds \)

\(=\)







\(\ds \dfrac {2 s \paren {2 s + 2} } 8\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \dfrac {2 s} 2 \dfrac {2 s + 2} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {s \paren {s + 1} } 2\)









The result follows from Closed Form for Triangular Numbers.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1,111,111,111,111,111,111$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1,111,111,111,111,111,111$




