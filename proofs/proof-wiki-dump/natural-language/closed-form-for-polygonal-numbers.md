# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Polygonal_Numbers



Theorem
Let $\map P {k, n}$ be the $n$th $k$-gonal number.

The closed-form expression for $\map P {k, n}$ is given by:














\(\ds \map P {k, n}\)

\(=\)







\(\ds \frac n 2 \paren {\paren {k - 2} n - k + 4}\)




















\(\ds \)

\(=\)







\(\ds \frac {k - 2} 2 \paren {n^2 - n} + n\)




















\(\ds \)

\(=\)







\(\ds 2 n + \dfrac 1 2 n k \paren {n - 1} - n^2\)











Proof
By definition of the $n$th $k$-gonal number:
$\map P {k, n} = \begin{cases}
0 & : n = 0 \\
\map P {k, n - 1} + \paren {k - 2} \paren {n - 1} + 1 & : n > 0
\end{cases}$

Then:

$\paren {\paren {k - 2} \paren {j - 1} + 1}$
is an arithmetic sequence.
Its initial term $a$ is $1$, and its common difference $d$ is $k - 2$.

Hence:














\(\ds \map P {k, n}\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n \paren {\paren {k - 2} \paren {j - 1} + 1}\)





Sum of Arithmetic Sequence














\(\ds \)

\(=\)







\(\ds \frac {n \paren {2 + \paren {n - 1} \paren {k - 2} } } 2\)




















\(\ds \)

\(=\)







\(\ds \frac n 2 \paren {\paren {k - 2} n - \paren {k - 2} + 2}\)




















\(\ds \)

\(=\)







\(\ds \frac n 2 \paren {\paren {k - 2} n - k + 4}\)









as required.
$\blacksquare$


Examples
The closed-form expression for $\map P {k, n}$ for various $k$ can be expressed as:








\(\ds k = 3: \ \ \)





\(\ds \frac n 2 \paren {\paren {3 - 2} n - 3 + 4}\)

\(=\)







\(\ds \frac n 2 \paren {n + 1}\)

\(\ds \quad = \frac {n \paren {n + 1} } 2\)



Definition of Triangular Number








\(\ds k = 4: \ \ \)





\(\ds \frac n 2 \paren {\paren {4 - 2} n - 4 + 4}\)

\(=\)







\(\ds \frac n 2 \paren {2 n - 0}\)

\(\ds \quad = n^2\)



Definition of Square Number








\(\ds k = 5: \ \ \)





\(\ds \frac n 2 \paren {\paren {5 - 2} n - 5 + 4}\)

\(=\)







\(\ds \frac n 2 \paren {3 n - 1}\)

\(\ds \quad = \frac {n \paren {3 n - 1} } 2\)



Definition of Pentagonal Number








\(\ds k = 6: \ \ \)





\(\ds \frac n 2 \paren {\paren {6 - 2} n - 6 + 4}\)

\(=\)







\(\ds \frac n 2 \paren {4 n - 2}\)

\(\ds \quad = n \paren {2 n - 1}\)



Definition of Hexagonal Number








\(\ds k = 7: \ \ \)





\(\ds \frac n 2 \paren {\paren {7 - 2} n - 7 + 4}\)

\(=\)







\(\ds \frac n 2 \paren {5 n - 3}\)

\(\ds \quad = \frac {n \paren {5 n - 3} } 2\)



Definition of Heptagonal Number








\(\ds k = 8: \ \ \)





\(\ds \frac n 2 \paren {\paren {8 - 2} n - 8 + 4}\)

\(=\)







\(\ds \frac n 2 \paren {6 n - 4}\)

\(\ds \quad = n \paren {3 n - 2}\)



Definition of Octagonal Number



and so on.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $45$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): figurate numbers
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $45$




