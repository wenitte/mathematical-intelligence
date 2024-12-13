# 

Source: https://proofwiki.org/wiki/Repunit_Integer_as_Product_of_Base_-_1_by_Increasing_Digit_Integer/General_Result

Theorem
Let $b \in \Z_{>1}$.
Then:

$\ds \paren {b - 1} \sum_{j \mathop = 0}^n \paren {n - j} b^j + n + 1 = \sum_{j \mathop = 0}^n b^j$


Proof













\(\ds \)

\(\)







\(\ds \paren {b - 1} \sum_{j \mathop = 0}^n \paren {n - j} b^j + n + 1\)




















\(\ds \)

\(=\)







\(\ds n \paren {b - 1} \sum_{j \mathop = 0}^n b^j - \paren {b - 1} \sum_{j \mathop = 0}^n j b^j + n + 1\)




















\(\ds \)

\(=\)







\(\ds n \paren {b - 1} \frac {b^{n + 1} - 1} {b - 1} - \paren {b - 1} \sum_{j \mathop = 0}^n j b^j + n + 1\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds n \paren {b - 1} \frac {b^{n + 1} - 1} {b - 1} - \paren {b - 1} \frac {n b^{n + 2} - \paren {n + 1} b^{n + 1} + b} {\paren {b - 1}^2} + n + 1\)





Sum of Sequence of Power by Index














\(\ds \)

\(=\)







\(\ds \frac {n \paren {b - 1} \paren {b^{n + 1} - 1} - \paren {n b^{n + 2} - \paren {n + 1} b^{n + 1} + b} + \paren {b - 1} n + \paren {b - 1} } {b - 1}\)





elementary simplification














\(\ds \)

\(=\)







\(\ds \frac {n b^{n + 2} - n b^{n - 1} - n b + n - n b^{n + 2} + n b^{n - 1} + b^{n + 1} - b + n b - n + b - 1} {b - 1}\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {b^{n + 1} - 1} {b - 1}\)





simplification














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^n b^j\)





Sum of Geometric Sequence



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $20 \ \text({b, c})$




