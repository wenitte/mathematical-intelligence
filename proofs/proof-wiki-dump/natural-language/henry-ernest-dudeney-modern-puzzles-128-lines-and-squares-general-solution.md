# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/128_-_Lines_and_Squares/General_Solution



Modern Puzzles by Henry Ernest Dudeney: $128$
Lines and Squares
With how few straight lines can you make exactly one hundred squares?
Thus, in the first diagram it will be found that with nine straight lines I have made twenty squares
(twelve with sides of the length $AB$, six with sides $AC$, and two with sides of the length $AD$).

In the second diagram, although I use one more line, I only get seventeen squares.


General Solution
With $n$ straight lines we can make as many as:

$\dfrac {\paren {n - 3} \paren {n - 1} \paren {n + 1} } {24}$ squares if $n$ is odd
$\dfrac {\paren {n - 2} \paren {n - 1} n } {24}$ squares if $n$ is even.


Proof
Suppose with $n$ lines, we create a rectangular grid with $a$ columns and $b$ rows.
Further suppose that $a < b$.
We can add an extra column and remove a row simultaneouly without changing the total number of lines $n$.
By adding one more column, we create:

$b$ squares with side length $1$;
$b - 1$ squares with side length $2$;
...
$b - a + 1$ squares with side length $a$.
The number of new squares this process adds will be:














\(\ds \sum_{k \mathop = b - a + 1}^{b} k\)

\(=\)







\(\ds \frac {a \paren {b - a + 1 + b} }2\)





Sum of Arithmetic Sequence



By removing a row now, we remove:

$a + 1$ squares with side length $1$;
$a$ squares with side length $2$;
...
$1$ square with side length $a + 1$.
The number of squares this process removes will be:














\(\ds \sum_{k \mathop = b - a + 1}^{b} k\)

\(=\)







\(\ds \frac {a \paren {a + 1} }2\)





Closed Form for Triangular Numbers



The net change of the number of squares is:














\(\ds \frac {a \paren {b - a + 1 + b} }2 - \frac {a \paren {a + 1} }2\)

\(=\)







\(\ds \frac a 2 \paren {b - a + 1 + b - a - 1}\)




















\(\ds \)

\(=\)







\(\ds a \paren {b - a}\)




















\(\ds \)

\(>\)







\(\ds 0\)





since $a < b$



Therefore for the same $n$, the closer the number of rows and columns are, the more squares we would create.
$\Box$

For even $n$, we would have $\dfrac n 2$ vertical lines and horizontal lines each.
This creates a square grid with side length $\dfrac n 2 - 1$.
The number of squares with side length $1$ is $\paren {\dfrac n 2 - 1}^2$.
The number of squares with side length $2$ is $\paren {\dfrac n 2 - 2}^2$.
...
The number of squares with side length $\dfrac n 2 - 1$ is $1^2$. 
Hence there would be:














\(\ds \sum_{k \mathop = 1}^{n/2 - 1} k^2\)

\(=\)







\(\ds \frac {\paren {n/2 - 1} \paren {n/2 - 1 + 1} \paren {2 \paren {n/2 - 1} + 1} } 6\)





Sum of Sequence of Squares














\(\ds \)

\(=\)







\(\ds \frac {n \paren {n - 2} \paren {n - 1} } {24}\)









$\Box$

Now suppose we create a rectangle with $n + 1$ lines. 
By adding an extra column (or row), we would create:

$\dfrac n 2 - 1$ more squares with side length $1$;
$\dfrac n 2 - 2$ more squares with side length $2$;
...
$1$ more square with side length $\dfrac n 2 - 1$.
The total number of squares will now become:














\(\ds \frac {n \paren {n - 2} \paren {n - 1} } {24} + \sum_{k \mathop = 1}^{n/2 - 1} k\)

\(=\)







\(\ds \frac {n \paren {n - 2} \paren {n - 1} } {24} + \frac {\paren {n/2 - 1} \paren {n/2 - 1 + 1} }2\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds \frac {n \paren {n - 2} \paren {n - 1} } {24} + \frac {n \paren {n - 2} } 8\)




















\(\ds \)

\(=\)







\(\ds \frac {n \paren {n - 2} } {24} \paren {n - 1 + 3}\)





factorizing














\(\ds \)

\(=\)







\(\ds \frac {n \paren {n - 2} \paren {n + 2} } {24}\)









By doing the substitution $n \to n - 1$, we obtain the formula for odd $n$:

$\dfrac {\paren {n - 3} \paren {n - 1} \paren {n + 1} } {24}$
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $128$. -- Lines and Squares
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $259$. Lines and Squares




