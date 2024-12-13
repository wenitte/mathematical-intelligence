# 

Source: https://proofwiki.org/wiki/Positive_Even_Integers_as_Sum_of_2_Composite_Odd_Integers_in_2_Ways



Theorem
Let $n \in \Z_{>0}$ be a positive even integer.
Let $n$ be such that it cannot be expressed as the sum of $2$ odd positive composite integers in at least $2$ different ways.
Then $n$ belongs to the set:

$\left\{ {2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 34, 38, 40, 44, 46, 52, 56, 62, 68}\right\}$
This sequence is A284788 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
The sequence of odd positive composite integers begins:

$9, 15, 21, 25, 27, 33, 35, 39, 45, 49, 51, 55, 57, 63, 65, \ldots$
which is more than we need for this proof.
This sequence is A071904 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

Generating the possible sums of these proceeds as follows:














\(\ds 18\)

\(=\)







\(\ds 9 + 9\)




















\(\ds 24\)

\(=\)







\(\ds 9 + 15\)




















\(\ds 30\)

\(=\)







\(\ds 9 + 21\)




















\(\ds \)

\(=\)







\(\ds 15 + 15\)




















\(\ds 34\)

\(=\)







\(\ds 9 + 25\)




















\(\ds 36\)

\(=\)







\(\ds 9 + 27\)




















\(\ds \)

\(=\)







\(\ds 15 + 21\)




















\(\ds 40\)

\(=\)







\(\ds 15 + 25\)




















\(\ds 42\)

\(=\)







\(\ds 9 + 33\)




















\(\ds \)

\(=\)







\(\ds 15 + 27\)




















\(\ds \)

\(=\)







\(\ds 21 + 21\)




















\(\ds 44\)

\(=\)







\(\ds 9 + 35\)




















\(\ds 46\)

\(=\)







\(\ds 21 + 25\)




















\(\ds 48\)

\(=\)







\(\ds 9 + 39\)




















\(\ds \)

\(=\)







\(\ds 15 + 33\)




















\(\ds \)

\(=\)







\(\ds 21 + 27\)




















\(\ds 50\)

\(=\)







\(\ds 15 + 35\)




















\(\ds \)

\(=\)







\(\ds 25 + 25\)




















\(\ds 52\)

\(=\)







\(\ds 25 + 27\)




















\(\ds 54\)

\(=\)







\(\ds 9 + 45\)




















\(\ds \)

\(=\)







\(\ds 15 + 39\)




















\(\ds \)

\(=\)







\(\ds 21 + 33\)




















\(\ds \)

\(=\)







\(\ds 27 + 27\)




















\(\ds 56\)

\(=\)







\(\ds 21 + 35\)




















\(\ds 58\)

\(=\)







\(\ds 9 + 49\)




















\(\ds \)

\(=\)







\(\ds 25 + 33\)




















\(\ds 60\)

\(=\)







\(\ds 9 + 51\)




















\(\ds \)

\(=\)







\(\ds 15 + 45\)




















\(\ds \)

\(=\)







\(\ds 21 + 39\)




















\(\ds \)

\(=\)







\(\ds 25 + 35\)




















\(\ds \)

\(=\)







\(\ds 27 + 33\)




















\(\ds 62\)

\(=\)







\(\ds 27 + 35\)




















\(\ds 64\)

\(=\)







\(\ds 9 + 55\)




















\(\ds \)

\(=\)







\(\ds 15 + 49\)




















\(\ds \)

\(=\)







\(\ds 25 + 39\)




















\(\ds 66\)

\(=\)







\(\ds 9 + 57\)




















\(\ds \)

\(=\)







\(\ds 15 + 51\)




















\(\ds \)

\(=\)







\(\ds 21 + 45\)




















\(\ds \)

\(=\)







\(\ds 27 + 39\)




















\(\ds \)

\(=\)







\(\ds 33 + 33\)




















\(\ds 68\)

\(=\)







\(\ds 33 + 35\)









This exhausts all possible sums of odd positive composite integers of $68$ or less.

It remains to be demonstrated that all positive even integers over $68$ can be so expressed in $2$ different ways.
Notice that one of $n - 15, n - 25, n - 35$ is divisible by $3$.
Similarly one of $n - 9, n - 15, n - 21, n - 27, n - 33$ is divisible by $5$.
For all above $n - k$ which is composite, since $k$ is composite, $\paren {n - k} + k$ is a way to express $n$ as the sum of $2$ odd positive composite integers.
Since $n > 68$, these two ways are distinct unless $n - 15$ is divisible by $15$.
In that case, $n - 45$ is also divisible by $15$, and $n - 45 \ne 15$.
Then $n = \paren {n - 15} + 15 = \paren {n - 45} + 45$ are two ways to express $n$ as the sum of $2$ odd positive composite integers.
$\blacksquare$


Historical Note
According to the footnote to the presentation of the solution to Positive Even Integers not Expressible as Sum of 2 Composite Odd Numbers in 1990: Solution to Problem 1328 (Math. Mag. Vol. 63, no. 4: pp. 273 – 280)  www.jstor.org/stable/2690953, this particular result was deduced by Gary R. Minnich, who is reported to have been a student.


Sources
1990: Solution to Problem 1328 (Math. Mag. Vol. 63, no. 4: pp. 273 – 280)  www.jstor.org/stable/2690953
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $68$




