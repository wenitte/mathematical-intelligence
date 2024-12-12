# 

Source: https://proofwiki.org/wiki/Binet-Cauchy_Identity/Proof_1



Theorem
$\ds \paren {\sum_{i \mathop = 1}^n a_i c_i} \paren {\sum_{j \mathop = 1}^n b_j d_j} = \paren {\sum_{i \mathop = 1}^n a_i d_i} \paren {\sum_{j \mathop = 1}^n b_j c_j} + \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i b_j - a_j b_i} \paren {c_i d_j - c_j d_i}$
where all of the $a, b, c, d$ are elements of a commutative ring.
Thus the identity holds for $\Z, \Q, \R, \C$.


Proof
Expanding the last term:














\(\ds \)

\(\)







\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i b_j - a_j b_i} \paren {c_i d_j - c_j d_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i c_i b_j d_j + a_j c_j b_i d_i}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i d_i b_j c_j + a_j d_j b_i c_i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i c_i b_j d_j + a_j c_j b_i d_i} + \sum_{i \mathop = 1}^n a_i c_i b_i d_i\)





These new terms are the same














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i d_i b_j c_j + a_j d_j b_i c_i} - \sum_{i \mathop = 1}^n a_i d_i b_i c_i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n a_i c_i b_j d_j - \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n a_i d_i b_j c_j\)





Completing the sums














\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n a_i c_i} \paren {\sum_{j \mathop = 1}^n b_j d_j} - \paren {\sum_{i \mathop = 1}^n a_i d_i} \paren {\sum_{j \mathop = 1}^n b_j c_j}\)





Factoring terms indexed by $i$ and $j$




Hence the result.
$\blacksquare$


Source of Name
This entry was named for Jacques Philippe Marie Binet and Augustin Louis Cauchy.


Historical Note
The Binet-Cauchy Identity is a special case of the Cauchy-Binet Formula, which was presented by Jacques Philippe Marie Binet and Augustin Louis Cauchy on the same day in $1812$.





