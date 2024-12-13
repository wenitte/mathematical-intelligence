# 

Source: https://proofwiki.org/wiki/Row_in_Pascal%27s_Triangle_forms_Palindromic_Sequence

Theorem
Each of the rows of Pascal's triangle forms a palindromic sequence.


Proof
The $n$th row of Pascal's triangle consists of the finite sequence:

$\dbinom n 0, \dbinom n 1, \dbinom n 2, \ldots, \dbinom n {n - 2}, \dbinom n {n - 1}, \dbinom n n$

By the Symmetry Rule for Binomial Coefficients:

$\dbinom n m = \dbinom n {n - m}$

Hence we can write the $n$th row in reverse order:














\(\ds \)

\(\)







\(\ds \dbinom n n, \dbinom n {n - 1}, \dbinom n {n - 2}, \ldots, \dbinom n 2, \dbinom n 1, \dbinom n 0\)




















\(\ds \)

\(=\)







\(\ds \dbinom n {n - n}, \dbinom n {n - \left({n - 1}\right)}, \dbinom n {n - \left({n - 2}\right)}, \ldots, \dbinom n {n - 2}, \dbinom n {n - 1}, \dbinom n {n - 0}\)




















\(\ds \)

\(=\)







\(\ds \dbinom n 0, \dbinom n 1, \dbinom n 2, \ldots, \dbinom n {n - 2}, \dbinom n {n - 1}, \dbinom n n\)









and the sequences are seen to be the same.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $8$




