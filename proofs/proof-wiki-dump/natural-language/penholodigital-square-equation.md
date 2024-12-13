# 

Source: https://proofwiki.org/wiki/Penholodigital_Square_Equation

Theorem
The following equations, which include each digit from $1$ to $9$ inclusive, are the only ones of their kind:














\(\ds 567^2\)

\(=\)







\(\ds 321 \, 489\)




















\(\ds 854^2\)

\(=\)







\(\ds 729 \, 316\)











Proof
The square of a $2$-digit integer cannot have more than $4$ digits:

$99^2 = 9801$
The square of a $4$-digit integer has at least $7$ digits:

$1000^2 = 1 \, 000 \, 000$
Hence we only need to inspect $3$-digit integers, with a corresponding $6$-digit square.

A lower bound is given by $\ceiling {\sqrt {123 \, 456}} = 352$, where $123 \, 456$ is the smallest $6$-digit integer without repeating digits or $0$.
An upper bound is given by $\floor {\sqrt {876 \, 543}} = 936$, where $876 \, 543$ is the largest $6$-digit integer without repeating digits or $9$.
It is seen that it is not necessary to investigate $6$-digit squares beginning with $9$, because its square root would also begin with $9$.

It is noted that integers ending in $1$, $5$ or $6$ have squares ending in those same digits.
Such numbers can be eliminated from our search, as they will duplicate the appearance of those digits.
We also cannot have $0$ as a digit.

Moreover, observe that an integer $\bmod 9$ and its square $\bmod 9$ have the following pattern:

$\begin{array}{|c|c|c|c|c|c|c|c|c|c|}
\hline n \bmod 9 & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 \\
\hline n^2 \bmod 9 & 0 & 1 & 4 & 0 & 7 & 7 & 0 & 4 & 1 \\
\hline
\end{array}$
By Congruence of Sum of Digits to Base Less 1, the sum of digits of $n$ and $n^2 \pmod 9$ are congruent to $n$ and $n^2 \pmod 9$ respectively.
We must require their sum to be congruent to $0 \bmod 9$ since the sum of all their digits is:

$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45 \equiv 0 \pmod 9$
Hence $n \equiv 0$ or $8 \pmod 9$.

There are $52$ numbers left to check:
For $n \equiv 0 \pmod 9$:














\(\ds 369^2\)

\(=\)







\(\ds 136 \, 161\)




















\(\ds 378^2\)

\(=\)







\(\ds 142 \, 884\)




















\(\ds 387^2\)

\(=\)







\(\ds 149 \, 769\)




















\(\ds 423^2\)

\(=\)







\(\ds 178 \, 929\)




















\(\ds 432^2\)

\(=\)







\(\ds 186 \, 624\)




















\(\ds 459^2\)

\(=\)







\(\ds 210 \, 681\)




















\(\ds 468^2\)

\(=\)







\(\ds 219 \, 024\)




















\(\ds 513^2\)

\(=\)







\(\ds 263 \, 169\)




















\(\ds 549^2\)

\(=\)







\(\ds 301 \, 401\)




















\(\ds 567^2\)

\(=\)







\(\ds 321 \, 489\)





is penholodigital














\(\ds 594^2\)

\(=\)







\(\ds 352 \, 836\)




















\(\ds 612^2\)

\(=\)







\(\ds 374 \, 544\)




















\(\ds 639^2\)

\(=\)







\(\ds 408 \, 321\)




















\(\ds 648^2\)

\(=\)







\(\ds 419 \, 904\)




















\(\ds 657^2\)

\(=\)







\(\ds 431 \, 649\)




















\(\ds 684^2\)

\(=\)







\(\ds 467 \, 856\)




















\(\ds 693^2\)

\(=\)







\(\ds 480 \, 249\)




















\(\ds 729^2\)

\(=\)







\(\ds 531 \, 441\)




















\(\ds 738^2\)

\(=\)







\(\ds 544 \, 644\)




















\(\ds 783^2\)

\(=\)







\(\ds 613 \, 089\)




















\(\ds 792^2\)

\(=\)







\(\ds 627 \, 264\)




















\(\ds 819^2\)

\(=\)







\(\ds 670 \, 761\)




















\(\ds 837^2\)

\(=\)







\(\ds 700 \, 569\)




















\(\ds 864^2\)

\(=\)







\(\ds 746 \, 496\)




















\(\ds 873^2\)

\(=\)







\(\ds 762 \, 129\)




















\(\ds 918^2\)

\(=\)







\(\ds 842 \, 724\)




















\(\ds 927^2\)

\(=\)







\(\ds 859 \, 329\)









For $n \equiv 8 \pmod 9$:














\(\ds 359^2\)

\(=\)







\(\ds 128 \, 881\)




















\(\ds 368^2\)

\(=\)







\(\ds 135 \, 424\)




















\(\ds 413^2\)

\(=\)







\(\ds 170 \, 569\)




















\(\ds 458^2\)

\(=\)







\(\ds 209 \, 764\)




















\(\ds 467^2\)

\(=\)







\(\ds 218 \, 089\)




















\(\ds 512^2\)

\(=\)







\(\ds 262 \, 144\)




















\(\ds 539^2\)

\(=\)







\(\ds 290 \, 521\)




















\(\ds 548^2\)

\(=\)







\(\ds 300 \, 304\)




















\(\ds 584^2\)

\(=\)







\(\ds 341 \, 056\)




















\(\ds 593^2\)

\(=\)







\(\ds 351 \, 649\)




















\(\ds 629^2\)

\(=\)







\(\ds 395 \, 641\)




















\(\ds 638^2\)

\(=\)







\(\ds 407 \, 044\)




















\(\ds 647^2\)

\(=\)







\(\ds 418 \, 609\)




















\(\ds 674^2\)

\(=\)







\(\ds 454 \, 276\)




















\(\ds 683^2\)

\(=\)







\(\ds 466 \, 489\)




















\(\ds 692^2\)

\(=\)







\(\ds 478 \, 864\)




















\(\ds 719^2\)

\(=\)







\(\ds 516 \, 961\)




















\(\ds 728^2\)

\(=\)







\(\ds 529 \, 984\)




















\(\ds 764^2\)

\(=\)







\(\ds 583 \, 696\)




















\(\ds 782^2\)

\(=\)







\(\ds 611 \, 524\)




















\(\ds 827^2\)

\(=\)







\(\ds 683 \, 929\)




















\(\ds 854^2\)

\(=\)







\(\ds 729 \, 316\)





is penholodigital














\(\ds 863^2\)

\(=\)







\(\ds 744 \, 769\)




















\(\ds 872^2\)

\(=\)







\(\ds 760 \, 384\)




















\(\ds 917^2\)

\(=\)







\(\ds 840 \, 889\)









Hence the result by inspection.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $567$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $567$




