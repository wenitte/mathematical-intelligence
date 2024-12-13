# 

Source: https://proofwiki.org/wiki/Numbers_which_Multiplied_by_2_are_the_Reverse_of_when_Added_to_2

Theorem













\(\ds 47 + 2\)

\(=\)







\(\ds 49\)




















\(\ds 47 \times 2\)

\(=\)







\(\ds 94\)
























\(\ds 497 + 2\)

\(=\)







\(\ds 499\)




















\(\ds 497 \times 2\)

\(=\)







\(\ds 994\)
























\(\ds 4997 + 2\)

\(=\)







\(\ds 4999\)




















\(\ds 4997 \times 2\)

\(=\)







\(\ds 9994\)









... and so on:


Proof
We have that:

$\ds \paren {4 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 9 \times 10^k + 7} + 2 = 4 \times 10^n + \sum_{k \mathop = 0}^{n - 1} 9 \times 10^k$
using the Basis Representation Theorem.

It remains to be demonstrated that:

$\ds 2 \times \paren {4 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 9 \times 10^k + 7} = \sum_{k \mathop = 1}^n 9 \times 10^k + 4$
again using the Basis Representation Theorem.

Thus:














\(\ds 2 \times \paren {4 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 9 \times 10^k + 7}\)

\(=\)







\(\ds 8 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 2 \times 9 \times 10^k + 2 \times 7\)




















\(\ds \)

\(=\)







\(\ds 8 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 18 \times 10^k + 14\)




















\(\ds \)

\(=\)







\(\ds 8 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 8 \times 10^k + 4 + \sum_{k \mathop = 1}^{n - 1} 10 \times 10^k + 10\)




















\(\ds \)

\(=\)







\(\ds 8 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 8 \times 10^k + 4 + \sum_{k \mathop = 0}^{n - 1} 10 \times 10^k\)




















\(\ds \)

\(=\)







\(\ds 8 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 8 \times 10^k + 4 + \sum_{k \mathop = 1}^n 10^k\)




















\(\ds \)

\(=\)







\(\ds 8 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 8 \times 10^k + 4 + 10^n + \sum_{k \mathop = 1}^{n - 1} 10^k\)




















\(\ds \)

\(=\)







\(\ds 9 \times 10^n + \sum_{k \mathop = 1}^{n - 1} 9 \times 10^k + 4\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n 9 \times 10^k + 4\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $47$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $499$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $47$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $499$




