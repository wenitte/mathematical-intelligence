# 

Source: https://proofwiki.org/wiki/78,557_is_Sierpi%C5%84ski

Theorem
$78 \, 557$ is a Sierpiński number of the second kind.


Proof
When considering $\bmod {36}$, every positive integer $n$ can be written in one of the forms:

$2 k, 4 k + 1, 3 k + 1, 12 k + 11, 18 k + 15, 36 k + 27, 9 k + 3$
$\begin{array}{|c|c|}
\hline n \bmod {36} & \text { Form } \\
\hline  0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34 & 2 k \\
\hline  1, 5, 9, 13, 17, 21, 25, 29, 33 & 4 k + 1 \\
\hline  1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34 & 3 k + 1 \\
\hline  11, 23, 35 & 12 k + 11 \\
\hline  15, 33 & 18 k + 15 \\
\hline  27 & 36 k + 27 \\
\hline  3, 12, 21, 30 & 9 k + 3\\
\hline
\end{array}$
As seen by inspection, every number less than $36$ is included in the table.

And we have:














\(\ds 78557 \times 2^{2 k} + 1\)

\(\equiv\)







\(\ds 78557 \times 1^k + 1\)

\(\ds \pmod 3\)



Fermat's Little Theorem and Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 2 + 1\)

\(\ds \pmod 3\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 3\)


















\(\ds 78557 \times 2^{4 k + 1} + 1\)

\(\equiv\)







\(\ds 78557 \times 1^k \times 2 + 1\)

\(\ds \pmod 5\)



Fermat's Little Theorem and Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 2 \times 2 + 1\)

\(\ds \pmod 5\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 5\)


















\(\ds 78557 \times 2^{3 k + 1} + 1\)

\(=\)







\(\ds 78557 \times 8^k \times 2 + 1\)




















\(\ds \)

\(\equiv\)







\(\ds 78557 \times 1^k \times 2 + 1\)

\(\ds \pmod 7\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 3 \times 2 + 1\)

\(\ds \pmod 7\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 7\)


















\(\ds 78557 \times 2^{12 k + 11} + 1\)

\(\equiv\)







\(\ds 78557 \times 1^k \times 2^{11} + 1\)

\(\ds \pmod {13}\)



Fermat's Little Theorem and Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 11 \times 2048 + 1\)

\(\ds \pmod {13}\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {13}\)


















\(\ds 78557 \times 2^{18 k + 15} + 1\)

\(\equiv\)







\(\ds 78557 \times 1 \times 2^{15} + 1\)

\(\ds \pmod {19}\)



Fermat's Little Theorem and Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 11 \times 32768 + 1\)

\(\ds \pmod {19}\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {19}\)


















\(\ds 78557 \times 2^{36 k + 27} + 1\)

\(\equiv\)







\(\ds 78557 \times 1^k \times 2^{27} + 1\)

\(\ds \pmod {37}\)



Fermat's Little Theorem and Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 6 \times 512^3 + 1\)

\(\ds \pmod {37}\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 6 \times \paren {-6}^3 + 1\)

\(\ds \pmod {37}\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {37}\)


















\(\ds 78557 \times 2^{9 k + 3} + 1\)

\(\equiv\)







\(\ds 78557 \times 512^k \times 2^3 + 1\)




















\(\ds \)

\(\equiv\)







\(\ds 78557 \times 1^k \times 8 + 1\)

\(\ds \pmod {73}\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 9 \times 8 + 1\)

\(\ds \pmod {73}\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {73}\)







Therefore $78557 \times 2^n + 1$ is always divisible by one of $\set {3, 5, 7, 13, 19, 37, 73}$.
Hence they are composite for every $n$.
$\blacksquare$


Historical Note
The fact that 78,557 is Sierpiński was proved by John Lewis Selfridge in $1962$.
It is still an open question whether it is the smallest.





