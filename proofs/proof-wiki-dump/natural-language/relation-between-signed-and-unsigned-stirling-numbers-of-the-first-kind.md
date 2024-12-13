# 

Source: https://proofwiki.org/wiki/Relation_between_Signed_and_Unsigned_Stirling_Numbers_of_the_First_Kind

Theorem
Let $m, n \in \Z_{\ge 0}$ be positive integers.
Then:

$\ds {n \brack m} = \paren {-1}^{n + m} \map s {n, m}$
where:

$\ds {n \brack m}$ denotes an unsigned Stirling number of the first kind
$\map s {n, m}$ denotes a signed Stirling number of the first kind.


Proof













\(\ds \sum_k \map s {n, k} x^k\)

\(=\)







\(\ds x^{\underline n}\)





Definition of Signed Stirling Numbers of the First Kind














\(\ds \)

\(=\)







\(\ds \sum_k \paren {-1}^{n - k} {n \brack k} x^k\)





Definition of Unsigned Stirling Numbers of the First Kind








\(\ds \leadsto \ \ \)





\(\ds \map s {n, m}\)

\(=\)







\(\ds \paren {-1}^{n - m} {n \brack m}\)





Comparing coefficients of $x^m$








\(\ds \leadsto \ \ \)





\(\ds {n \brack m}\)

\(=\)







\(\ds \paren {-1}^{m - n} \map s {n, m}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + m} \map s {n, m}\)





as $\paren {-1}^{2 n} = 1$



$\blacksquare$





