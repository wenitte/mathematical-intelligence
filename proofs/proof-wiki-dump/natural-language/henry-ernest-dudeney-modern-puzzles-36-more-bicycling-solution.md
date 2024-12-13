# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/36_-_More_Bicycling/Solution



Modern Puzzles by Henry Ernest Dudeney: $36$
More Bicycling
Referring to the last puzzle, let us now consider the case where a third rider has to share the same bicycle.
As a matter of fact, I understand that Anderson and Brown have taken a man named Carter into partnership, and the position today is this:
Anderson, Brown and Carter walk respectively $4$, $5$ and $3$ miles per hour,
and ride respectively $10$, $8$ and $12$ miles per hour.
How are they to use that single bicycle so that all shall complete the $20$ miles journey at the same time?


Solution
Anderson:

rides for $7 \tfrac {11} {27}$ miles, taking $44 \tfrac 4 9$ minutes
walks the remaining $12 \tfrac {16} {27}$ miles in $3$ hours and $8 \tfrac 8 9$ minutes.
Brown:

walks those $7 \tfrac {11} {27}$ miles in $1$ hour $28 \tfrac 8 9$ minutes
rides for $1 \tfrac {13} {27}$ miles, taking $11 \tfrac 1 9$ minutes
walks the remaining $11 \tfrac 1 9$ miles in $2$ hours $13 \tfrac 1 3$ minutes.
Carter:

walks $8 \tfrac 8 9$ miles in $2$ hour $57 \tfrac {21} {27}$ minutes
rides the remaining $11 \tfrac 1 9$ miles in $55 \tfrac 5 9$ minutes.
The total journey time is $3$ hours $53 \tfrac 1 3$ minutes.


Proof
Let Anderson, Brown and Carter be denoted by $A$, $B$ and $C$ respectively.
To keep it simple, we will assume:

$A$ starts by cycling, then leaves the bike for $B$
$B$ takes over cycling from $A$, then leaves the bike for $C$
$C$ finishes the journey on the cycle.
Let $d_1$ miles be the distance from the start to where $A$ dismounts to start walking and $B$ starts riding.
Let $d_2$ miles be the distance from $d_1$ to where $B$ dismounts to start walking.
Let $t$ hours be the time taken to do the total journey.
Let $t_{a_1}$ hours be the time taken by $A$ to travel $d_1$.
Let $t_{b_1}$ hours be the time taken by $B$ to travel $d_1$.
Let $t_{c_1}$ hours be the time taken by $C$ to travel $d_1$.
Let $t_{a_2}$ hours be the time taken by $A$ to travel $d_2$.
Let $t_{b_2}$ hours be the time taken by $B$ to travel $d_2$.
Let $t_{c_2}$ hours be the time taken by $C$ to travel $d_2$.
We have:














\(\ds d_1\)

\(=\)







\(\ds 10 t_{a_1}\)




















\(\ds \)

\(=\)







\(\ds 5 t_{b_1}\)




















\(\ds \)

\(=\)







\(\ds 3 t_{c_1}\)




















\(\ds d_2\)

\(=\)







\(\ds 4 t_{a_2}\)




















\(\ds \)

\(=\)







\(\ds 8 t_{b_2}\)




















\(\ds \)

\(=\)







\(\ds 3 t_{c_2}\)




















\(\ds 20 - d_1 - d_2\)

\(=\)







\(\ds 4 \paren {t - t_{a_1} - t_{a_2} }\)




















\(\ds \)

\(=\)







\(\ds 5 \paren {t - t_{b_1}- t_{b_2} }\)




















\(\ds \)

\(=\)







\(\ds 12 \paren {t - t_{c_1} - t_{c_2} }\)










We set up this system of linear simultaneous equations in matrix form as:

$\begin {pmatrix}
1 & 0 & -10 &  0 &   0 &  0 &  0 &   0 &  0 \\
1 & 0 &   0 & -5 &   0 &  0 &  0 &   0 &  0 \\
1 & 0 &   0 &  0 &  -3 &  0 &  0 &   0 &  0 \\
0 & 1 &   0 &  0 &   0 & -4 &  0 &   0 &  0 \\
0 & 1 &   0 &  0 &   0 &  0 & -8 &   0 &  0 \\
0 & 1 &   0 &  0 &   0 &  0 &  0 &  -3 &  0 \\
1 & 1 &  -4 &  0 &   0 & -4 &  0 &   0 &  4 \\
1 & 1 &   0 & -5 &   0 &  0 & -5 &   0 &  5 \\
1 & 1 &   0 &  0 & -12 &  0 &  0 & -12 & 12 \\
\end {pmatrix}
\begin {pmatrix}
d_1 \\ d_2 \\ t_{a_1} \\ t_{b_1} \\ t_{c_1} \\ t_{a_2} \\ t_{b_2} \\ t_{c_2} \\ t \\
\end {pmatrix} = \begin {pmatrix}
0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 20 \\ 20 \\ 20 \\
\end {pmatrix}$
It remains to solve this matrix equation.

In reduced echelon form, this gives:

$\begin {pmatrix}
1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 & 1 \\
\end {pmatrix}
\begin {pmatrix}
d_1 \\ d_2 \\ t_{a_1} \\ t_{b_1} \\ t_{c_1} \\ t_{a_2} \\ t_{b_2} \\ t_{c_2} \\ t \\
\end {pmatrix} = \begin {pmatrix}
200/27 \\ 40/27 \\ 20/27 \\ 40/27 \\ 200/81 \\ 10/27 \\ 5/27 \\ 40/81 \\ 35/9 \\
\end {pmatrix}$

The result can be read directly and converted into the appropriate units.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $36$. -- More Bicycling
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $64$. More Bicycling




