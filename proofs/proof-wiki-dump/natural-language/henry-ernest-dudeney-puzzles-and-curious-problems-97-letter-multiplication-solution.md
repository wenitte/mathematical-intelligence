# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/97_-_Letter_Multiplication/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $97$
Letter Multiplication
In this little multiplication sum the five letters represent $5$ different digits.
What are the actual figures?
There is no $0$.
    S E A M
x         T
-----------
  M E A T S



Solution
    4 9 7 3
x         8
-----------
  3 9 7 8 4

Proof
Note that:

$M < T$, because $MEATS = SEAM \times T < 10000 \times T = T0000$.
$M < S$, because $MEATS = SEAM \times T < SEAM \times 10 = SEAM0$, and $M \ne S$.
Also $S \ne T$.
By observing the lower triangular part of the modulo $10$ multiplication table below:
$\begin{array}{c|cccccccc}
T \backslash M & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline
2 & 2 \\
3 & 3 & \color {red} 6 \\
4 & 4 & \color {red} 8 & 2 \\
5 & 5 & 0 & 5 & 0 \\
6 & 6 & 2 & \color {red} 8 & 4 & 0 \\
7 & 7 & \color {red} 4 & 1 & \color {red} 8 & 5 & 2 \\
8 & 8 & \color {red} 6 & \color {red} 4 & 2 & 0 & 8 & 6 \\
9 & 9 & \color {red} 8 & \color {red} 7 & \color {red} 6 & 5 & 4 & 3 & 2 &  \\
\end{array}$
we see that only the $\color { red } {\text {red} }$ numbers satisfy the conditions for $S$.

Now we consider an additional condition:

$M \ge \floor {\dfrac {S \times T} {10}}$
i.e. the tens digit of $S \times T$ cannot exceed $M$.
Otherwise $\floor {\dfrac {S \times T} {10}} \ge M + 1$,
and $SEAM \times T > S000 \times T = 10000 \times \dfrac {S \times T} {10} \ge 10000 \paren {M + 1} > MEATS$.

Hence only the $\color { red } {\text {red} }$ numbers in:
$\begin{array}{c|ccc}
T \backslash M & 2 & 3 & 4\\
\hline
3 & \color {red} 6 \\
4 & 8 & 2 \\
5 & 0 & 5 & 0 \\
6 & 2 & 8 & 4 \\
7 & \color {red} 4 & 1 & 8 \\
8 & 6 & \color {red} 4 & 2 \\
9 & 8 & 7 & 6 \\
\end{array}$
remain.

Using only the values of $M, T, S$, we can determine the value of $SEAM$ by the formula:

$SEAM = \dfrac {S00M0 - M00TS} {10 - T}$
since:














\(\ds SEAM \times \paren {10 - T}\)

\(=\)







\(\ds SEAM0 - MEATS\)




















\(\ds \)

\(=\)







\(\ds 10^4 \paren {S - M} + 10^3 \paren {E - E} + 10^2 \paren {A - A} + 10 \paren {M - T} + \paren {0 - S}\)




















\(\ds \)

\(=\)







\(\ds 10^4 S + 10 M - 10^4 M - 10 T - S\)




















\(\ds \)

\(=\)







\(\ds S00M0 - M00TS\)









Now we inspect the $3$ remaining cases using the formula.
$M = 2, T = 3, S = 6$ gives:

$6EA2 = \dfrac {60020 - 20036} {10 - 3} = 5712$
$M = 2, T = 7, S = 4$ gives:

$4EA2 = \dfrac {40020 - 20074} {10 - 7} = 6648 \tfrac 2 3$
$M = 3, T = 8, S = 4$ gives:

$4EA3 = \dfrac {40030 - 30084} {10 - 8} = 4973$

Only $4973$ matches the required form of $SEAM$.
Hence the solution given is the unique solution.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $97$. -- Letter Multiplication
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $157$. Letter Multiplication




