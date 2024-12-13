# 

Source: https://proofwiki.org/wiki/Multiplicative_Magic_Square_from_9_Terms_of_Geometric_Sequence_from_1,_2,_4



Problem
With the first $9$ terms of the geometric sequence $1, 2, 4, \ldots$,
form a product of $4096$ each way.
That is, form a multiplicative magic square whose magic constant is $4096$.


Solution
$\begin{array}{|c|c|c|} \hline 2 & 64 & 32 \\ \hline 256 & 16 & 1 \\ \hline 8 & 4 & 128 \\ \hline \end{array}$


Proof
Take the order $3$ (additive) magic square:

$\begin {array} {|c|c|c|} \hline 2 & 7 & 6 \\ \hline 9 & 5 & 1 \\ \hline 4 & 3 & 8 \\ \hline \end {array}$

Subtract $1$ from each element:

$\begin{array}{|c|c|c|} \hline 1 & 6 & 5 \\ \hline 8 & 4 & 0 \\ \hline 3 & 2 & 7 \\ \hline \end{array}$
This square is still magic.
Now replace each element $n$ with $2^n$:

$\begin{array}{|c|c|c|} \hline 2^1 & 2^6 & 2^5 \\ \hline 2^8 & 2^4 & 2^0 \\ \hline 2^3 & 2^2 & 2^7 \\ \hline \end{array}$
which is:

$\begin{array}{|c|c|c|} \hline 2 & 64 & 32 \\ \hline 256 & 16 & 1 \\ \hline 8 & 4 & 128 \\ \hline \end{array}$
$\blacksquare$


Sources
1821: John Jackson: Rational Amusement for Winter Evenings
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Rational Amusements for Winter Evenings: $152$




