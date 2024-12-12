# 

Source: https://proofwiki.org/wiki/Difference_Between_Adjacent_Polygonal_Numbers_is_Triangular_Number

Theorem
Let $\map P {k, n}$ be the $n$th $k$-gonal number.

Then:

$\map P {k + 1, n} - \map P {k, n} = T_{n - 1}$
where $T_n$ is the $n$th triangular number.


Proof
From Closed Form for Polygonal Numbers:

$\map P {k, n} = \dfrac n 2 \paren {\paren {k - 2} n - k + 4}$
Thus:














\(\ds \map P {k + 1, n} - \map P {k, n}\)

\(=\)







\(\ds \dfrac n 2 \paren {\paren {\paren {k + 1} - 2} n - \paren {k + 1} + 4} - \dfrac n 2 \paren {\paren {k - 2} n - k + 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac n 2 \paren {\paren {k - 1} n - k + 3} - \dfrac n 2 \paren {\paren {k - 2} n - k + 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac n 2 \paren {k n - n - k + 3} - \dfrac n 2 \paren {k n - 2 n - k + 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac n 2 \paren {k n - n - k + 3 - k n + 2 n + k - 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac n 2 \paren {- n + 3 + 2 n - 4}\)




















\(\ds \)

\(=\)







\(\ds \frac {n \paren {n - 1} } 2\)




















\(\ds \)

\(=\)







\(\ds T_{n - 1}\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $45$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $45$




