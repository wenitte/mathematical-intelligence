# 

Source: https://proofwiki.org/wiki/Sequence_of_Differences_on_Generalized_Pentagonal_Numbers

Theorem
Recall the generalised pentagonal numbers $GP_n$ for $n = 0, 1, 2, \ldots$
Consider the sequence defined as $\Delta_n = GP_{n + 1} - GP_n$:

$1, 1, 3, 2, 5, 3, 7, 4, 9, 5, 11, 6, 13, 7, 15, 8, \ldots$
This sequence is A026741 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

Then:

The values of $\Delta_n$ for odd $n$ consist of the odd numbers
The values of $\Delta_n$ for even $n$ consist of the natural numbers.


Proof
Recall the definition of the generalised pentagonal numbers $GP_n$ for $n = 0, 1, 2, \ldots$

$GP_n = \begin{cases} \dfrac {m \paren {3 m + 1} } 2 & : n = 2 m \\
\dfrac {m \paren {3 m - 1} } 2 & : n = 2 m - 1 \end{cases}$
for $n = 0, 1, 2, \ldots$

Hence:














\(\ds \Delta_{2 n - 1}\)

\(=\)







\(\ds GP_{2 n} - GP_{2 n - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {n \paren {3 n + 1} } 2 - \dfrac {n \paren {3 n - 1} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 n^2 + n - 3 n^2 + n} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 n} 2\)




















\(\ds \)

\(=\)







\(\ds n\)









which defines the sequence of natural numbers.

Then:














\(\ds \Delta_{2 n}\)

\(=\)







\(\ds GP_{2 n + 1} - GP_{2 n}\)




















\(\ds \)

\(=\)







\(\ds GP_{2 \paren {n + 1} - 1} - GP_{2 n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {n + 1} \paren {3 \paren {n + 1} - 1} } 2 - \dfrac {n \paren {3 n + 1} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 n^2 + 6 n + 3} - \paren {n + 1} - 3 n^2 - n} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {4 n + 2} 2\)




















\(\ds \)

\(=\)







\(\ds 2 n + 1\)









which defines the sequence of odd numbers.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $22$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $22$




