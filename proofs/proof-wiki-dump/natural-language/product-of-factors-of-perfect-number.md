# 

Source: https://proofwiki.org/wiki/Product_of_Factors_of_Perfect_Number

Theorem
Let $P$ be the perfect number $2^{n - 1} \paren {2^n - 1}$.
Then:

$\ds \prod_{d \mathop \divides P} d = P^n$


Proof
The factors of $P$ are:

$1, 2, 4, \dots, 2^{n - 1}, 2^n - 1, 2 \paren {2^n - 1}, \dots, 2^{n - 1} \paren {2^n - 1}$
Therefore their product is:














\(\ds \prod_{d \mathop \divides P} d\)

\(=\)







\(\ds \paren {\prod_{i \mathop = 0}^{n - 1} 2^i} \paren {\prod_{i \mathop = 0}^{n - 1} 2^i \paren {2^n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\prod_{i \mathop = 0}^{n - 1} 2^i}^2 \paren {2^n - 1}^n\)




















\(\ds \)

\(=\)







\(\ds \paren {2^\frac {n \paren {n - 1} } 2}^2 \paren {2^n - 1}^n\)




















\(\ds \)

\(=\)







\(\ds \paren {2^{n - 1} }^n \paren {2^n - 1}^n\)




















\(\ds \)

\(=\)







\(\ds P^n\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $28$




