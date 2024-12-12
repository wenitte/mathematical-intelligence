# 

Source: https://proofwiki.org/wiki/Cauchy-Schwarz_Inequality/Complex_Numbers



Theorem
$\ds \paren {\sum \cmod {w_i}^2} \paren {\sum \cmod {z_i}^2} \ge \cmod {\sum w_i z_i}^2$
where all of $w_i, z_i \in \C$.


Proof
Let $w_1, w_2, \ldots, w_n$ and $z_1, z_2, \ldots, z_n$ be arbitrary complex numbers.
Take the Binet-Cauchy Identity:

$\ds \paren {\sum_{i \mathop = 1}^n a_i c_i} \paren {\sum_{j \mathop = 1}^n b_j d_j} = \paren {\sum_{i \mathop = 1}^n a_i d_i} \paren {\sum_{j \mathop = 1}^n b_j c_j} + \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {a_i b_j - a_j b_i} \paren {c_i d_j - c_j d_i}$
and set $a_i = w_i, b_j = \overline {z_j}, c_i = \overline {w_i}, d_j = z_j $.

This gives us:














\(\ds \paren {\sum_{i \mathop = 1}^n w_i \overline {w_i} } \paren {\sum_{j \mathop = 1}^n \overline {z_j} z_j}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n w_i z_i} \paren {\sum_{j \mathop = 1}^n \overline {z_j} \overline {w_j} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {w_i \overline {z_j} - w_j \overline {z_i} } \paren {\overline {w_i} z_j - \overline {w_j} z_i}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{i \mathop = 1}^n w_i \overline {w_i} } \paren {\sum_{j \mathop = 1}^n \overline {z_j} z_j}\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n w_i z_i} \overline {\paren {\sum_{i \mathop = 1}^n w_i z_i} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_{1 \mathop \le i \mathop < j \mathop \le n} \paren {w_i \overline {z_j} - w_j \overline {z_i} } \overline {\paren {w_i \overline {z_j} - w_j \overline {z_i} } }\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{i \mathop = 1}^n \cmod {w_i}^2} \paren {\sum_{j \mathop = 1}^n \cmod {z_j}^2}\)

\(=\)







\(\ds \cmod {\sum_{i \mathop = 1}^n w_i z_i}^2 + \sum_{1 \mathop \le i \mathop < j \mathop \le n} \cmod {w_i \overline {z_j} - w_j \overline {z_i} }^2\)





Modulus in Terms of Conjugate








\(\ds \leadsto \ \ \)





\(\ds \paren {\sum_{i \mathop = 1}^n \cmod {w_i}^2} \paren {\sum_{j \mathop = 1}^n \cmod {z_j}^2}\)

\(\ge\)







\(\ds \cmod {\sum_{i \mathop = 1}^n w_i z_i}^2\)





Complex Modulus is Non-Negative



Hence the result.
$\blacksquare$


Source of Name
This entry was named for Augustin Louis Cauchy and Karl Hermann Amandus Schwarz.


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $168$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $30$




