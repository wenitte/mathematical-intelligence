# 

Source: https://proofwiki.org/wiki/Positive_Even_Integers_not_Expressible_as_Sum_of_2_Composite_Odd_Numbers



Theorem
The positive even integers which cannot be expressed as the sum of $2$ composite odd numbers are:

$2, 4, 6, 8, 10, 12, 14, 16, 20, 22, 26, 28, 32, 38$
This sequence is A118081 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
The smallest composite odd numbers are $9$ and $15$, so trivially $2$ to $16$ and $20$ to $22$ cannot be expressed as the sum of $2$ composite odd numbers.
We have:














\(\ds 18\)

\(=\)







\(\ds 9 + 9\)




















\(\ds 24\)

\(=\)







\(\ds 9 + 15\)




















\(\ds 30\)

\(=\)







\(\ds 21 + 9\)




















\(\ds \)

\(=\)







\(\ds 15 + 15\)




















\(\ds 34\)

\(=\)







\(\ds 9 + 25\)




















\(\ds 36\)

\(=\)







\(\ds 9 + 27\)










It remains to investigate $26, 28$ and $32$.
This will be done by progressively subtracting smaller composite odd numbers from them, and noting that the difference is not composite.














\(\ds 26 - 9\)

\(=\)







\(\ds 17\)





which is prime














\(\ds 26 - 15\)

\(=\)







\(\ds 11\)





which is prime














\(\ds 26 - 21\)

\(=\)







\(\ds 5\)





which is prime














\(\ds 26 - 25\)

\(=\)







\(\ds 1\)





which is not composite


















\(\ds 28 - 9\)

\(=\)







\(\ds 19\)





which is prime














\(\ds 28 - 15\)

\(=\)







\(\ds 13\)





which is prime














\(\ds 28 - 21\)

\(=\)







\(\ds 7\)





which is prime














\(\ds 28 - 25\)

\(=\)







\(\ds 3\)





which is prime














\(\ds 28 - 27\)

\(=\)







\(\ds 1\)





which is not composite


















\(\ds 32 - 9\)

\(=\)







\(\ds 32\)





which is prime














\(\ds 32 - 15\)

\(=\)







\(\ds 17\)





which is prime














\(\ds 32 - 21\)

\(=\)







\(\ds 11\)





which is prime














\(\ds 32 - 25\)

\(=\)







\(\ds 7\)





which is prime














\(\ds 32 - 27\)

\(=\)







\(\ds 5\)





which is prime




It remains to be demonstrated that all even integers greater than $38$ can be expressed as the sum of $2$ composite odd numbers.

We note that $9 + 6 k$ is odd and a multiple of $3$.
Numbers $18$ and greater of the form $6 n$ can be expressed as:

$\left({9 + 6 k}\right) + 9$
Numbers $34$ and greater of the form $6 n + 4$ can be expressed as:

$\left({9 + 6 k}\right) + 25$
Numbers $44$ and greater of the form $6 n + 2$ can be expressed as:

$\left({9 + 6 k}\right) + 35$
We have that $40$ and $42$ are of the form $6 n + 4$ and $6 n$ respectively.
Hence all even integers greater than $38$ are accounted for.
$\blacksquare$


Also see
Positive Even Integers as Sum of 2 Composite Odd Integers in 2 Ways
Largest Even Integer not expressible as Sum of 2 k Odd Composite Integers


Sources
1989: Ronald E. Ruemmler: Problem 1328 (Math. Mag. Vol. 62, no. 4: p. 274)  www.jstor.org/stable/2689772
1990: Solution to Problem 1328 (Math. Mag. Vol. 63, no. 4: pp. 273 – 280)  www.jstor.org/stable/2690953
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $38$




