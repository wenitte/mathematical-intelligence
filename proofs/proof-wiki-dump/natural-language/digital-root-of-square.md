# 

Source: https://proofwiki.org/wiki/Digital_Root_of_Square

Theorem
Let $n^2$ be a square number.
Then the digital root of $n^2$ is $1$, $4$, $7$ or $9$.


Proof
Let $\map d n$ denote the digital root base $10$ of $n$.
From Digital Root is Congruent to Number Modulo Base minus 1, $\map d n \equiv n \pmod 9$.
So, let $n = 9 k + m$ where $1 \le m \le 9$.
Thus:














\(\ds n^2\)

\(=\)







\(\ds \paren {9 k + m}^2\)




















\(\ds \)

\(=\)







\(\ds 81 k^2 + 18 k m + m^2\)




















\(\ds \)

\(=\)







\(\ds 9 \paren {9 k^2 + 2 k m} + m^2\)




















\(\ds \)

\(\equiv\)







\(\ds m^2\)

\(\ds \pmod 9\)







We enumerate the squares of the digits:














\(\ds 1^2\)

\(=\)







\(\ds 1\)




















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 9\)


















\(\ds 2^2\)

\(=\)







\(\ds 4\)




















\(\ds \)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod 9\)


















\(\ds 3^2\)

\(=\)







\(\ds 9\)




















\(\ds \)

\(\equiv\)







\(\ds 9\)

\(\ds \pmod 9\)


















\(\ds 4^2\)

\(=\)







\(\ds 16\)




















\(\ds \)

\(\equiv\)







\(\ds 7\)

\(\ds \pmod 9\)


















\(\ds 5^2\)

\(=\)







\(\ds 25\)




















\(\ds \)

\(\equiv\)







\(\ds 7\)

\(\ds \pmod 9\)


















\(\ds 6^2\)

\(=\)







\(\ds 36\)




















\(\ds \)

\(\equiv\)







\(\ds 9\)

\(\ds \pmod 9\)


















\(\ds 7^2\)

\(=\)







\(\ds 49\)




















\(\ds \)

\(\equiv\)







\(\ds 4\)

\(\ds \pmod 9\)


















\(\ds 8^2\)

\(=\)







\(\ds 64\)




















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 9\)


















\(\ds 9^2\)

\(=\)







\(\ds 81\)




















\(\ds \)

\(\equiv\)







\(\ds 9\)

\(\ds \pmod 9\)







Hence the result.
$\blacksquare$





