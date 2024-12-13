# 

Source: https://proofwiki.org/wiki/Integers_whose_Squares_end_in_444

Theorem
The sequence of positive integers whose square ends in $444$ begins:

$38, 462, 538, 962, 1038, 1462, 1538, 1962, 2038, 2462, 2538, 2962, 3038, 3462, \ldots$
This sequence is A039685 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof













\(\ds 38^2\)

\(=\)







\(\ds 1444\)




















\(\ds 462^2\)

\(=\)







\(\ds 213 \, 444\)




















\(\ds 538^2\)

\(=\)







\(\ds 289 \, 444\)




















\(\ds 962^2\)

\(=\)







\(\ds 925 \, 444\)




















\(\ds 1038^2\)

\(=\)







\(\ds 1 \, 077 \, 444\)




















\(\ds 1462^2\)

\(=\)







\(\ds 2 \, 137 \, 444\)




















\(\ds 1538^2\)

\(=\)







\(\ds 2 \, 365 \, 444\)




















\(\ds 1962^2\)

\(=\)







\(\ds 3 \, 849 \, 444\)




















\(\ds 2038^2\)

\(=\)







\(\ds 4 \, 153 \, 444\)




















\(\ds 2462^2\)

\(=\)







\(\ds 6 \, 061 \, 444\)




















\(\ds 2538^2\)

\(=\)







\(\ds 6 \, 441 \, 444\)




















\(\ds 2962^2\)

\(=\)







\(\ds 8 \, 773 \, 444\)




















\(\ds 3038^2\)

\(=\)







\(\ds 9 \, 229 \, 444\)




















\(\ds 3462^2\)

\(=\)







\(\ds 11 \, 985 \, 444\)










All such $n$ are of the form $500 m + 38$ or $500 m - 38$:














\(\ds \paren {500 m + 38}^2\)

\(=\)







\(\ds 250 \, 000 m^2 + 38 \, 000 m + 1444\)




















\(\ds \)

\(=\)







\(\ds \paren {250 m^2 + 38 m + 1} + 444\)
























\(\ds \paren {500 m - 38}^2\)

\(=\)







\(\ds 250 \, 000 m^2 - 38 \, 000 m + 1444\)




















\(\ds \)

\(=\)







\(\ds \paren {250 m^2 - 38 m + 1} + 444\)









and it is seen that all such numbers end in $444$.

Now we show that all such numbers are so expressed.
In Squares Ending in Repeated Digits, we have shown the only numbers with squares ending in $44$ ends in:

$12, 38, 62, 88$
hence any number with square ending in $444$ must also end in those numbers.

Suppose $\sqbrk {axy}^2 \equiv 444 \pmod {1000}$, where $a < 10$ and $\sqbrk {xy}$ is in the above list.
For $\sqbrk {xy} = 12$:














\(\ds 444\)

\(=\)







\(\ds \paren {100 a + 12}^2\)

\(\ds \pmod {200}\)


















\(\ds \)

\(=\)







\(\ds 10000 a^2 + 2400 a + 144\)

\(\ds \pmod {200}\)


















\(\ds \)

\(=\)







\(\ds 144\)

\(\ds \pmod {200}\)







This is a contradiction.

Similarly for $\sqbrk {xy} = 88$:














\(\ds 444\)

\(=\)







\(\ds \paren {100 a + 88}^2\)

\(\ds \pmod {200}\)


















\(\ds \)

\(=\)







\(\ds 10000 a^2 + 17600 a + 7744\)

\(\ds \pmod {200}\)


















\(\ds \)

\(=\)







\(\ds 144\)

\(\ds \pmod {200}\)







Again, a contradiction.

For $\sqbrk {xy} = 38$:














\(\ds 444\)

\(=\)







\(\ds \paren {100 a + 38}^2\)

\(\ds \pmod {1000}\)


















\(\ds \)

\(=\)







\(\ds 10000 a^2 + 7600 a + 1444\)

\(\ds \pmod {1000}\)


















\(\ds \)

\(=\)







\(\ds 600 a + 444\)

\(\ds \pmod {1000}\)







The solutions to $600 a \equiv 0 \pmod {1000}$ are $a = 0$ or $5$.
Hence:

$\paren {500 n + 38}^2 \equiv 444 \pmod {1000}$

Similarly, for $\sqbrk {xy} = 62$:














\(\ds 444\)

\(=\)







\(\ds \paren {100 a + 62}^2\)

\(\ds \pmod {1000}\)


















\(\ds \)

\(=\)







\(\ds 10000 a^2 + 12400 a + 3844\)

\(\ds \pmod {1000}\)


















\(\ds \)

\(=\)







\(\ds 400 a + 844\)

\(\ds \pmod {1000}\)







The solutions to $400 a + 400 \equiv 0 \pmod {1000}$ are $a = 4$ or $9$.
Hence:

$\paren {500 n + 462}^2 \equiv \paren {500 n - 38}^2 \equiv 444 \pmod {1000}$
$\blacksquare$


Sources
1964: Albert H. Beiler: Recreations in the Theory of Numbers
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $462$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1444$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $462$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1444$




