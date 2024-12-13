# 

Source: https://proofwiki.org/wiki/Numbers_for_which_Sixth_Power_plus_1091_is_Composite



Theorem
The number $1091$ has the property that:

$x^6 + 1091$
is composite for all integer values of $x$ from $1$ to $3905$.


Proof
We check the result and show that it cannot be improved further by showing:

$3906$ is the smallest $x$ such that $x^6 + 1091$ is prime.

Suppose $x^6 + 1091$ is prime.
Then:

$x$ is a multiple of $42$
$x$ ends in $0$, $4$ or $6$ in decimal notation
$x \not \equiv \pm 1, \pm 3, \pm 4 \pmod {13}$
$x \not \equiv \pm 4, \pm 6, \pm 9 \pmod {19}$

The proof is split into $6$ parts:


$x$ is a multiple of $2$
Suppose not. Then $x$ is odd, and so is $x^6$.
Hence $x^6 + 1091$ is even, and thus composite.
Thus we must require $x$ to be even.
$\Box$


$x$ is a multiple of $3$
Suppose not. Write $x = 3 k \pm 1$.
Hence:














\(\ds x^6 + 1091\)

\(=\)







\(\ds \paren {3 k \pm 1}^6 + 1091\)




















\(\ds \)

\(\equiv\)







\(\ds \paren {\pm 1}^6 - 1\)

\(\ds \pmod 3\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 3\)







showing that $x^6 + 1091$ is composite (divisible by $3$).
Thus we must require $x$ to be a multiple of $3$.
$\Box$


$x$ is a multiple of $7$
Suppose not. Then $x \perp 7$.
Then:














\(\ds n^6 + 1091\)

\(\equiv\)







\(\ds 1 + 1091\)

\(\ds \pmod 7\)



Fermat's Little Theorem














\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 7\)







showing that $x^6 + 1091$ is composite (divisible by $7$).
Thus we must require $x$ to be a multiple of $7$.
$\Box$


$x$ ends in $0$, $4$ or $6$
From the above we require $x$ to be even.
Suppose $x$ ends in $2$ or $8$.
Then $x^6$ ends in $4$.
Thus $x^6 + 1091$ ends in $5$, which by Divisibility by 5 is divisible by $5$.
Hence we must require $x$ to end in $0$, $4$ or $6$.
$\Box$


$x \not \equiv \pm 1, \pm 3, \pm 4 \pmod {13}$
Here is a table of $x^6 \pmod {13}$:

$\begin{array}{|c|c|c|c|c|c|c|c|}
\hline  x \bmod {13} & 0 & \pm 1 & \pm 2 & \pm 3 & \pm 4 & \pm 5 & \pm 6 \\
\hline x^6 \bmod {13} & 0 & 1 & -1 & 1 & 1 & -1 & -1 \\
\hline
\end{array}$

For $x \equiv \pm 1, \pm 3, \pm 4 \pmod {13}$:














\(\ds x^6 + 1091\)

\(\equiv\)







\(\ds 1 - 1\)

\(\ds \pmod {13}\)


















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {13}\)







showing that $x^6 + 1091$ is composite (divisible by $13$).
Thus we must require $x \not \equiv \pm 1, \pm 3, \pm 4 \pmod {13}$.
$\Box$


$x \not \equiv \pm 4, \pm 6, \pm 9 \pmod {19}$
Here is a table of $x^6 \pmod {19}$:

$\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|}
\hline  x \bmod {19} & 0 & \pm 1 & \pm 2 & \pm 3 & \pm 4 & \pm 5 & \pm 6 & \pm 7 & \pm 8 & \pm 9 \\
\hline x^6 \bmod {19} & 0 & 1 & 7 & 7 & 11 & 6 & 11 & 1 & 1 & 11\\
\hline
\end{array}$

For $x \equiv \pm 4, \pm 6, \pm 9 \pmod {19}$:














\(\ds x^6 + 1091\)

\(\equiv\)







\(\ds 11 + 8\)

\(\ds \pmod {19}\)


















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {19}\)







showing that $x^6 + 1091$ is composite (divisible by $19$).
Thus we must require $x \not \equiv \pm 4, \pm 6, \pm 9 \pmod {19}$.
$\Box$

Below is a list of prime factorizations of $x^6 + 1091$, where $42 \divides x$ and does not end in $2$ or $8$.
If $x$ satisfies one of the above congruences, their remainder is listed instead.














\(\ds 84^6 + 1091\)

\(=\)







\(\ds 23 \times 15 \, 273 \, 827 \, 509\)




















\(\ds 126\)

\(\equiv\)







\(\ds -4 \pmod {13}\)




















\(\ds 210^6 + 1091\)

\(=\)







\(\ds 109 \times 786 \, 845 \, 146 \, 799\)




















\(\ds 294\)

\(\equiv\)







\(\ds +9 \pmod {19}\)




















\(\ds 336\)

\(\equiv\)







\(\ds -6 \pmod {19}\)




















\(\ds 420\)

\(\equiv\)







\(\ds +4 \pmod {13}\)




















\(\ds 504\)

\(\equiv\)







\(\ds -3 \pmod {13}\)




















\(\ds 546^6 + 1091\)

\(=\)







\(\ds 2129 \times 12 \, 444 \, 578 \, 592 \, 403\)




















\(\ds 630^6 + 1091\)

\(=\)







\(\ds 347 \times 41 \, 957 \times 4 \, 294 \, 468 \, 229\)




















\(\ds 714\)

\(\equiv\)







\(\ds -1 \pmod {13}\)




















\(\ds 756\)

\(\equiv\)







\(\ds -4 \pmod {19}\)




















\(\ds 840\)

\(\equiv\)







\(\ds +4 \pmod {19}\)




















\(\ds 924\)

\(\equiv\)







\(\ds +1 \pmod {13}\)




















\(\ds 966\)

\(\equiv\)







\(\ds +4 \pmod {13}\)




















\(\ds 1050\)

\(\equiv\)







\(\ds -3 \pmod {13}\)




















\(\ds 1134\)

\(\equiv\)







\(\ds +3 \pmod {13}\)




















\(\ds 1176^6 + 1091\)

\(=\)







\(\ds 34 \, 996 \, 691 \times 75 \, 581 \, 750 \, 737\)




















\(\ds 1260\)

\(\equiv\)







\(\ds -1 \pmod {13}\)




















\(\ds 1344^6 + 1091\)

\(=\)







\(\ds 11^2 \times 48 \, 709 \, 115 \, 345 \, 425 \, 307\)




















\(\ds 1386^6 + 1091\)

\(=\)







\(\ds 6 \, 282 \, 607 \times 1 \, 128 \, 338 \, 710 \, 061\)




















\(\ds 1470\)

\(\equiv\)







\(\ds +1 \pmod {13}\)




















\(\ds 1544\)

\(\equiv\)







\(\ds -4 \pmod {19}\)




















\(\ds 1596\)

\(\equiv\)







\(\ds -3 \pmod {13}\)




















\(\ds 1680\)

\(\equiv\)







\(\ds +3 \pmod {13}\)




















\(\ds 1764\)

\(\equiv\)







\(\ds -4 \pmod {13}\)




















\(\ds 1806\)

\(\equiv\)







\(\ds -1 \pmod {13}\)




















\(\ds 1890\)

\(\equiv\)







\(\ds -9 \pmod {19}\)




















\(\ds 1974^6 + 1091\)

\(=\)







\(\ds 68 \, 891 \times 3 \, 944 \, 449 \times 217 \, 737 \, 913\)




















\(\ds 2016\)

\(\equiv\)







\(\ds +1 \pmod {13}\)




















\(\ds 2100\)

\(\equiv\)







\(\ds -9 \pmod {19}\)




















\(\ds 2184^6 + 1091\)

\(=\)







\(\ds 199 \times 66 \, 919 \times 2 \, 135 \, 519 \times 3 \, 816 \, 013\)




















\(\ds 2226\)

\(\equiv\)







\(\ds +3 \pmod {13}\)




















\(\ds 2310\)

\(\equiv\)







\(\ds -4 \pmod {13}\)




















\(\ds 2394^6 + 1091\)

\(=\)







\(\ds 41 \times 193 \times 587 \times 40 \, 528 \, 973 \, 983 \, 937\)




















\(\ds 2436\)

\(\equiv\)







\(\ds +4 \pmod {19}\)




















\(\ds 2520^6 + 1091\)

\(=\)







\(\ds 199 \times 1 \, 286 \, 915 \, 904 \, 764 \, 140 \, 709\)




















\(\ds 2604\)

\(\equiv\)







\(\ds +4 \pmod {13}\)




















\(\ds 2646^6 + 1091\)

\(=\)







\(\ds 383 \times 1 \, 100 \, 441 \times 814 \, 279 \, 501 \, 829\)




















\(\ds 2730\)

\(\equiv\)







\(\ds -6 \pmod {19}\)




















\(\ds 2814^6 + 1091\)

\(=\)







\(\ds 11 \times 23 \times 888 \, 416 \, 027 \times 2 \, 209 \, 060 \, 717\)




















\(\ds 2856\)

\(\equiv\)







\(\ds -4 \pmod {13}\)




















\(\ds 2940^6 + 1091\)

\(=\)







\(\ds 13 \, 163 \times 49 \, 060 \, 175 \, 921 \, 131 \, 657\)




















\(\ds 3024^6 + 1091\)

\(=\)







\(\ds 4153 \times 2 \, 196 \, 011 \times 83 \, 848 \, 303 \, 249\)




















\(\ds 3066^6 + 1091\)

\(=\)







\(\ds 47 \times 6577 \times 18 \, 839 \times 45 \, 869 \times 3 \, 109 \, 783\)




















\(\ds 3150\)

\(\equiv\)







\(\ds +4 \pmod {13}\)




















\(\ds 3234\)

\(\equiv\)







\(\ds -3 \pmod {13}\)




















\(\ds 3276^6 + 1091\)

\(=\)







\(\ds 11 \times 2677 \times 41 \, 978 \, 054 \, 029 \, 285 \, 861\)




















\(\ds 3360^6 + 1091\)

\(=\)







\(\ds 233 \times 9781 \times 300 \, 413 \times 2 \, 101 \, 734 \, 059\)




















\(\ds 3444\)

\(\equiv\)







\(\ds -1 \pmod {13}\)




















\(\ds 3486\)

\(\equiv\)







\(\ds +9 \pmod {19}\)




















\(\ds 3570^6 + 1091\)

\(=\)







\(\ds 19 \, 379 \times 32 \, 911 \, 471 \times 3 \, 245 \, 866 \, 399\)




















\(\ds 3654\)

\(\equiv\)







\(\ds +1 \pmod {13}\)




















\(\ds 3696\)

\(\equiv\)







\(\ds +4 \pmod {13}\)




















\(\ds 3780\)

\(\equiv\)







\(\ds -3 \pmod {13}\)




















\(\ds 3864\)

\(\equiv\)







\(\ds +3 \pmod {13}\)




















\(\ds 3906^6 + 1091\)

\(=\)







\(\ds 3 \, 551 \, 349 \, 655 \, 007 \, 944 \, 406 \, 147 \text { is prime}\)










The above results are obtained using the "Alpertron" Integer factorization calculator.
The whole operation took approximately $1$ second.
$\blacksquare$


Sources
1962: Daniel Shanks: Solved and Unsolved Problems in Number Theory
1989: Paulo Ribenboim: The Book of Prime Number Records (2nd ed.)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1091$




