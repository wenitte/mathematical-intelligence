# 

Source: https://proofwiki.org/wiki/Sequence_of_Dudeney_Numbers



Theorem
The only Dudeney numbers are:

$0, 1, 8, 17, 18, 26, 27$
two of which are themselves cubes, and one of which is prime.
This sequence is A046459 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
We have trivially that:














\(\ds 0^3\)

\(=\)







\(\ds 0\)




















\(\ds 1^3\)

\(=\)







\(\ds 1\)










Then:














\(\ds 8^3\)

\(=\)







\(\ds 512\)




















\(\ds 8\)

\(=\)







\(\ds 5 + 1 + 2\)
























\(\ds 17^3\)

\(=\)







\(\ds 4913\)




















\(\ds 17\)

\(=\)







\(\ds 4 + 9 + 1 + 3\)
























\(\ds 18^3\)

\(=\)







\(\ds 5832\)




















\(\ds 18\)

\(=\)







\(\ds 5 + 8 + 3 + 2\)
























\(\ds 26^3\)

\(=\)







\(\ds 17576\)




















\(\ds 26\)

\(=\)







\(\ds 1 + 7 + 5 + 7 + 6\)
























\(\ds 27^3\)

\(=\)







\(\ds 19683\)




















\(\ds 27\)

\(=\)







\(\ds 1 + 9 + 6 + 8 + 3\)










A quick empirical test shows that when $n = 46$, it is already too large to be the sum of the digits of its cube.

For $46 < n \le 54$, $n^3 \le 54^3 < 200 \, 000$.
Hence the sum of the digits of $n^3$ is less than:

$1 + 5 \times 9 = 46 < n$

For $54 < n < 100$, $n^3 < 10^6$.
Hence the sum of the digits of $n^3$ is less than:

$6 \times 9 = 54 < n$

For $n \ge 100$, let $n$ be a $d$-digit number, where $d \ge 3$.
Then $10^{d - 1} \le n < 10^d$ and $n^3 < 10^{3 d}$.
Hence the sum of the digits of $n^3$ is less than:














\(\ds 3 d \times 9\)

\(=\)







\(\ds 27 d\)




















\(\ds \)

\(\le\)







\(\ds 27 d + 63 d - 189\)




















\(\ds \)

\(<\)







\(\ds 90 d - 170\)




















\(\ds \)

\(=\)







\(\ds 10 \paren {1 + 9 \paren {d - 2} }\)




















\(\ds \)

\(\le\)







\(\ds 10 \times \paren {1 + 9}^{d - 2}\)





Bernoulli's Inequality














\(\ds \)

\(\le\)







\(\ds n\)









so no numbers greater than $46$ can have this property.
$\blacksquare$


Also reported as
Some sources (either deliberately or by oversight) do not include $0$ in this list.


Also see
Definition:Armstrong Number, with which the numbers in this entry appear frequently to be conflated


Historical Note
The earliest known appearance of this result is from Claude Séraphin Moret-Blanc in $1879$, although exactly where this was published is still to be identified.
Henry Ernest Dudeney subsequently published it in one of his own collections.
As a result, a number which equals the sum of the digits of its cube is now called a Dudeney number.
It continues to crop up occasionally in publications devoted to recreational mathematics.


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $69$. -- Root Extraction
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $120$. Root Extraction
1979: S.P. Mohanty and Hemant Kumar: Powers of Sums of Digits (Math. Mag. Vol. 52: pp. 310 – 312)  www.jstor.org/stable/2689785
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables: $27$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $17$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $18$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $26$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $27$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $4913$
1992: Joe Roberts: Lure of the Integers: $27$
1993: Monte James Zerger: The 'Number of Mathematics' (Journal of Recreational Mathematics Vol. 25, no. 4: pp. 247 – 251)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $17$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $18$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $26$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $27$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $4913$
Weisstein, Eric W. "Cubic Number." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/CubicNumber.html




