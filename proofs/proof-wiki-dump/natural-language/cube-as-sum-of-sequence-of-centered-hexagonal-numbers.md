# 

Source: https://proofwiki.org/wiki/Cube_as_Sum_of_Sequence_of_Centered_Hexagonal_Numbers



Theorem
$C_n = \ds \sum_{i \mathop = 1}^n H_i$
where:

$C_n$ denotes the $n$th cube number
$H_i$ denotes the $i$th centered hexagonal number.


Proof
From Closed Form for Centered Hexagonal Numbers:

$H_n = 3 n \paren {n - 1} + 1$
Hence:














\(\ds \sum_{i \mathop = 1}^n H_i\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {3 i \paren {i - 1} + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {3 i^2 - 3 i + 1}\)




















\(\ds \)

\(=\)







\(\ds 3 \sum_{i \mathop = 1}^n i^2 - 3 \sum_{i \mathop = 1}^n i + \sum_{i \mathop = 1}^n 1\)




















\(\ds \)

\(=\)







\(\ds 3 \frac {n \paren {n + 1} \paren {2 n + 1} } 6 - 3 \sum_{i \mathop = 1}^n i + \sum_{i \mathop = 1}^n 1\)





Sum of Sequence of Squares














\(\ds \)

\(=\)







\(\ds 3 \frac {n \paren {n + 1} \paren {2 n + 1} } 6 - 3 \frac {n \paren {n + 1} } 2 + \sum_{i \mathop = 1}^n 1\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \frac {n \paren {\paren {n + 1} \paren {2 n + 1} - 3 \paren {n + 1} + 2} } 2\)





simplification














\(\ds \)

\(=\)







\(\ds \frac {n \paren {2 n^2 + 3 n + 1 - 3 n - 3 + 2} } 2\)





multiplying out














\(\ds \)

\(=\)







\(\ds \frac {n \paren {2 n^2} } 2\)





simplification














\(\ds \)

\(=\)







\(\ds n^3\)





simplification



$\blacksquare$


Examples













\(\ds 1^3\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds 3 \times 1 \paren {1 - 1} + 1\)
























\(\ds 2^3\)

\(=\)







\(\ds 8\)




















\(\ds \)

\(=\)







\(\ds 1 + 7\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 1 \paren {1 - 1} + 1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {3 \times 2 \paren {2 - 1} + 1}\)
























\(\ds 3^3\)

\(=\)







\(\ds 27\)




















\(\ds \)

\(=\)







\(\ds 1 + 7 + 19\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 1 \paren {1 - 1} + 1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {3 \times 2 \paren {2 - 1} + 1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {3 \times 3 \paren {3 - 1} + 1}\)
























\(\ds 4^3\)

\(=\)







\(\ds 64\)




















\(\ds \)

\(=\)







\(\ds 1 + 7 + 19 + 37\)




















\(\ds \)

\(=\)







\(\ds \paren {3 \times 1 \paren {1 - 1} + 1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {3 \times 2 \paren {2 - 1} + 1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {3 \times 3 \paren {3 - 1} + 1}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {3 \times 4 \paren {4 - 1} + 1}\)











Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $64$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $64$




