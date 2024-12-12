# 

Source: https://proofwiki.org/wiki/Conversion_from_Hexadecimal_to_Binary



Theorem
Let $n$ be a (positive) integer expressed in hexadecimal notation as:

$n = \sqbrk {a_r a_{r - 1} \dotso a_1 a_0}_H$

Then $n$ can be expressed in binary notation as:

$n = \sqbrk {b_{r 3} b_{r 2} b_{r 1} b_{r 0} b_{\paren {r - 1} 3} b_{\paren {r - 1} 2} b_{\paren {r - 1} 1} b_{\paren {r - 1} 0} \dotso b_{1 3} b_{1 2} b_{1 1} b_{1 0} b_{0 3} b_{0 2} b_{0 1} b_{0 0} }_2$
where $\sqbrk {b_{j 3} b_{j 2} b_{j 1} b_{j 0} }_2$ is the expression of the hexadecimal digit $a_j$ in binary notation.

That is, you take the binary expression of each hexadecimal digit, padding them out with zeroes to make them $4$ bits long, and simply concatenate them.


Proof
We have:














\(\ds n\)

\(=\)







\(\ds \sqbrk {a_r a_{r - 1} \dotso a_1 a_0}_H\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^r a_j 16^j\)





Definition of Hexadecimal Notation




We have that:

$0 \le a_j < 16$
and so:














\(\ds a_j\)

\(=\)







\(\ds \sqbrk {b_{j 3} b_{j 2} b_{j 1} b_{j 0} }_2\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^3 b_{j k} 2^k\)





Definition of Binary Notation




and so:














\(\ds n\)

\(=\)







\(\ds \sqbrk {a_r a_{r - 1} \dotso a_1 a_0}_H\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^r a_j 16^j\)





Definition of Hexadecimal Notation














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^r \paren {\sum_{k \mathop = 0}^3 b_{j k} 2^k} 16^j\)





Definition of Binary Notation














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^r \paren {\sum_{k \mathop = 0}^3 b_{j k} 2^k} 2^{4 j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^r \paren {\sqbrk {b_{j 3} b_{j 2} b_{j 1} b_{j 0} }_2} 2^{4 j}\)





Definition of Binary Notation














\(\ds \)

\(=\)







\(\ds \sqbrk {b_{r 3} b_{r 2} b_{r 1} b_{r 0} }_2 2^{4 r} + \sqbrk {b_{\paren {r - 1} 3} b_{\paren {r - 1} 2} b_{\paren {r - 1} 1} b_{\paren {r - 1} 0} }_2 2^{4 {r - 1} } + \cdots + \sqbrk {b_{1 3} b_{1 2} b_{1 1} b_{1 0} }_2 2^4 + \sqbrk {b_{0 3} b_{0 2} b_{0 1} b_{0 0} }_2\)




















\(\ds \)

\(=\)







\(\ds \sqbrk {b_{r 3} b_{r 2} b_{r 1} b_{r 0} b_{\paren {r - 1} 3} b_{\paren {r - 1} 2} b_{\paren {r - 1} 1} b_{\paren {r - 1} 0} \dotso b_{1 3} b_{1 2} b_{1 1} b_{1 0} b_{0 3} b_{0 2} b_{0 1} b_{0 0} }_2\)









Hence the result.
$\blacksquare$


Examples
Example: $6 \mathrm C 5$
The integer expressed in hexadecimal as $6 \mathrm C 5_H$ can be expressed in binary as:

$6 \mathrm C 5_H = 110 \, 1100 \, 0101_2$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16$




