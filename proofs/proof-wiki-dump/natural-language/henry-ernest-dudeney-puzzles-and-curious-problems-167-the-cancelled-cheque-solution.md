# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/167_-_The_Cancelled_Cheque/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $167$
The Cancelled Cheque
Bankers at a certain bank would cancel their paid cheques by punching star-shaped holes in them.

There was a case in which they happened to punch out the $6$ figures that form the number of the cheque.
The puzzle is to find out what those figures were.
It was a square number multiplied by $113$, and when divided into three $2$-figure numbers,
each of these three numbers was a square number.
Can you find the number of the cheque?


Solution
$81 \, 64 \, 25 = 113 \times 85^2$


Proof
Let $n$ be the $6$-digit number on the cheque.
We have that $n = 113 m$ where $m$ is a square number.
Because $100 \, 000 \le n \le 999 \, 999$ we have that:

$885 \le m \le 8849$.
From Square Modulo 5: Corollary, no square number ends with $2$, $3$, $7$ or $8$.
So $m$, being square, ends in $0$, $1$, $4$, $5$, $6$ or $9$.
If $m$ ends in $1$, then $n$ ends in $3$, so is not a square.
If $m$ ends in $4$, then $n$ ends in $2$, so is not a square.
If $m$ ends in $6$, then $n$ ends in $8$, so is not a square.
If $m$ ends in $9$, then $n$ ends in $7$, so is not a square.

Suppose $m$ ends in $0$.
Then $n$ also ends in $0$.
But then the last two digits form a square ending in $0$.
Hence the last two digits of $n$ would have to be $00$.
In order for $n$ to end in $00$, we find that $m$ must also end in $00$.

Suppose $m$ ends in $5$.
Then $n$ also ends in $5$, and then in fact must end in $25$.
In order for $n$ to end in $25$, we find that $m$ must also end in $25$.

Thus $m$ is a square number which lies between $900$ and $8825$ inclusive, and ends in either $00$ or $25$.
It remains to investigate all square numbers of this form.
Thus we need to investigate the squares of all numbers ending in $0$ and $5$ between $30$ and $90$, as $25^2 = 526$ and $95^2 = 9025$.

This is not arduous, so we proceed:














\(\ds 113 \times 30^2\)

\(=\)







\(\ds 113 \times 900\)

\(\ds = 10 \, 17 \, 00\)



not in the correct form














\(\ds 113 \times 35^2\)

\(=\)







\(\ds 113 \times 1225\)

\(\ds = 13 \, 84 \, 25\)



not in the correct form














\(\ds 113 \times 40^2\)

\(=\)







\(\ds 113 \times 1600\)

\(\ds = 18 \, 08 \, 00\)



not in the correct form














\(\ds 113 \times 45^2\)

\(=\)







\(\ds 113 \times 2025\)

\(\ds = 22 \, 88 \, 25\)



not in the correct form














\(\ds 113 \times 50^2\)

\(=\)







\(\ds 113 \times 2500\)

\(\ds = 28 \, 35 \, 00\)



not in the correct form














\(\ds 113 \times 55^2\)

\(=\)







\(\ds 113 \times 3025\)

\(\ds = 34 \, 18 \, 25\)



not in the correct form














\(\ds 113 \times 60^2\)

\(=\)







\(\ds 113 \times 3600\)

\(\ds = 40 \, 68 \, 00\)



not in the correct form














\(\ds 113 \times 65^2\)

\(=\)







\(\ds 113 \times 4225\)

\(\ds = 47 \, 74 \, 25\)



not in the correct form














\(\ds 113 \times 70^2\)

\(=\)







\(\ds 113 \times 4900\)

\(\ds = 55 \, 37 \, 00\)



not in the correct form














\(\ds 113 \times 75^2\)

\(=\)







\(\ds 113 \times 5625\)

\(\ds = 63 \, 56 \, 25\)



not in the correct form














\(\ds 113 \times 80^2\)

\(=\)







\(\ds 113 \times 6400\)

\(\ds = 72 \, 32 \, 00\)



not in the correct form














\(\ds 113 \times 85^2\)

\(=\)







\(\ds 113 \times 7225\)

\(\ds = 81 \, 64 \, 25\)



which fits the bill -- $81 = 9^2$, $64 = 8^2$, $25 = 5^2$














\(\ds 113 \times 90^2\)

\(=\)







\(\ds 113 \times 8100\)

\(\ds = 91 \, 53 \, 00\)



not in the correct form



$\blacksquare$

Note that Dudeney's analysis dispenses of square numbers ending in $00$ before he even starts, suggesting that he may not be comfortable with defining $00$ itself as a square.
He also jumps straight from the fact that $m$ lying between $885$ and $8845$ eliminates all possibilities except $1225$ and $7225$ without considering the other numbers, which suggests he has further techniques to eliminate them.


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $167$. -- The Cancelled Cheque




