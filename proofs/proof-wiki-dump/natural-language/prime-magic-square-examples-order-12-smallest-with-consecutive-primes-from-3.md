# 

Source: https://proofwiki.org/wiki/Prime_Magic_Square/Examples/Order_12/Smallest_with_Consecutive_Primes_from_3



Example of Order $12$ Prime Magic Square
This order $12$ prime magic square is the smallest whose elements are consecutive odd primes starting from $3$ (including $1$).
The primes themselves are the $143$ consecutive odd primes from $3$ up to $827$.
This magic square has magic constant $4514$.


$\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|c|}
\hline   1 & 823 & 821 & 809 & 811 & 797 &  19 &  29 & 313 &  31 &  23 &  37 \\
\hline  89 &  83 & 211 &  79 & 641 & 631 & 619 & 709 & 617 &  53 &  43 & 739 \\
\hline  97 & 227 & 103 & 107 & 193 & 557 & 719 & 727 & 607 & 139 & 757 & 281 \\
\hline 223 & 653 & 499 & 197 & 109 & 113 & 563 & 479 & 173 & 761 & 587 & 157 \\
\hline 367 & 379 & 521 & 383 & 241 & 467 & 257 & 263 & 269 & 167 & 601 & 599 \\
\hline 349 & 359 & 353 & 647 & 389 & 331 & 317 & 311 & 409 & 307 & 293 & 449 \\
\hline 503 & 523 & 233 & 337 & 547 & 397 & 421 &  17 & 401 & 271 & 431 & 433 \\
\hline 229 & 491 & 373 & 487 & 461 & 251 & 443 & 463 & 137 & 439 & 457 & 283 \\
\hline 509 & 199 &  73 & 541 & 347 & 191 & 181 & 569 & 577 & 571 & 163 & 593 \\
\hline 661 & 101 & 643 & 239 & 691 & 701 & 127 & 131 & 179 & 613 & 277 & 151 \\
\hline 659 & 673 & 677 & 683 &  71 &  67 &  61 &  47 &  59 & 743 & 733 &  41 \\
\hline 827 &   3 &   7 &   5 &  13 &  11 & 787 & 769 & 773 & 419 & 149 & 751 \\
\hline
\end{array}$


Proof
It is sufficient to show that for $n \le 11$, there is no order $n$ prime magic square.
We will show this fact regardless of whether $1$ is included in the magic square.


Order $2$
First the order $2$ magic square is eliminated.
Consider:

$\begin{array}{|c|c|}
\hline  a & b \\
\hline  c & d \\
\hline
\end{array}$
Then we must have $a + b = a + c$.
So $b = c$, so they are not distinct, so this array cannot be a magic square.
$\Box$

Next, by definition of magic square, each row adds up to the magic constant.
Hence the sum of all entries of the magic square of order $n$ must be divisible by $n$.
Here is a list of:

$1 + $ the sums of the first $n^2 - 1$ odd primes
sums of the first $n^2$ odd primes
their divisibility by $n$:
$\begin{array}{|c|c|c|}
\hline    & \text{Including } 1 & \text{Divisible by } n? & \text{Not including } 1 & \text{Divisible by } n? \\
\hline  3 &    99 & \text{Yes} &   127 & \text{No} \\
\hline  4 &   380 & \text{Yes} &   438 & \text{No} \\
\hline  5 &  1059 & \text{No}  &  1159 & \text{No} \\
\hline  6 &  2426 & \text{No}  &  2582 & \text{No} \\
\hline  7 &  4887 & \text{No}  &  5115 & \text{No} \\
\hline  8 &  8892 & \text{No}  &  9204 & \text{No} \\
\hline  9 & 15115 & \text{No}  & 15535 & \text{No} \\
\hline 10 & 24132 & \text{No}  & 24678 & \text{No} \\
\hline 11 & 36887 & \text{No}  & 37559 & \text{No} \\
\hline
\end{array}$
So the only potential magic squares are of order $3$ or $4$.
These magic squares, if they exist, must have magic constants $33$ and $95$.


Order $3$
The first $8$ primes are $3, 5, 7, 11, 13, 17, 19, 23$.
Because every prime and $1$ appears exactly once in a magic square, each number contributes to at least $2$ sums: the row and column sums.
However, there is only one way to express $32$ as a sum of $2$ primes less than $23$:

$32 = 19 + 13$
and so $33$ cannot be made from a sum that includes $1$ in $2$ distinct ways.
Thus an order $3$ prime magic square cannot be made.


Order $4$
Every row of an order $4$ magic square contains $4$ odd numbers.
These sum to an even number.
But the magic constant of an order $4$ prime magic square, as shown above, is $95$.
Hence it is not possible to create an order $4$ prime magic square.
$\Box$

Hence there can be no prime magic square whose order is less than $12$.
Thus the order $12$ prime magic square is the smallest whose elements are consecutive odd primes starting from $3$ (including or not including $1$).
$\blacksquare$


Also see
Magic Constant of Smallest Prime Magic Square with Consecutive Primes from 3


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $144$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $144$
Weisstein, Eric W. "Prime Magic Square." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/PrimeMagicSquare.html




