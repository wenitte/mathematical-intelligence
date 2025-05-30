# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/113_-_A_Complete_Skeleton/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $113$
A Complete Skeleton
It will be remembered that a skeleton puzzle, where the figures are represented by stars,
has not been constructed without at least one figure, or some added condition, being used.
Perhaps the following comes a little nearer to the ideal,
though there are two division sums and not one,
and they are related by the fact that the six-figure quotient of the first happens to be the dividend of the second.
There appears to be only one solution.
        ******
    ----------
 ***)*********
      ***
     ----
        ****
         ***
        -----
          ***
          ***
          ----
          ****
          ****
          ----



     *****
   -------
 **)******
    **
    ----
     ***
      **
     ----
      ***
      ***
      ----
       ***
       ***
       ---



Solution
        300324
    ----------
 333)100007892
      999
     ----
        1078
         999
        -----
          799
          666
          ----
          1332
          1332
          ----

     10356
   -------
 29)300324
    29
    ----
     103
      87
     ----
      162
      145
      ----
       174
       174
       ---

Proof
Let us first consider the first division.
Let $d$ denote the divisor.
Let $q$ denote the quotient.
Let $n$ denote the dividend.
Let $n_1$ to $n_4$ denote the partial dividends which are subject to the $1$st to $4$th division operations respectively.
Let $p_1$ to $p_4$ denote the partial products generated by the $1$st to $4$th division operations respectively.

We see that the difference $n_2 - p_2$ is a $2$-digit number.
Therefore $n_2$ must begin with $1$ and $p_2$ with $9$.
So the difference $n_1 - p_1$ is exactly $1$.
Since $n_1$ has $4$ digits and $p_1$ has $3$, we have:

$n_1 = 1000$
$p_1 = 999$
$d$ is a $3$-digit divisor of $999$.
Since $p_4$ has $4$ digits, $d$ cannot be $111$.
Since $n_3$ has only $3$ digits and $n_3 - p_3 \ge 10$, $p_3 \ne 999$ and $d \ne 999$.
Hence we get $d = 333$.
Now $p_1 = p_2 = 999$ and thus $q$ must start with $3003$.
Since $p_3$ has $3$ digits but is not $999$, the tens digit of $q$ must be $1$ or $2$.
Therefore $300 \, 310 \le q \le 300 \, 329$.

Now we turn our attention to the second division.
Since $n_2$ has $3$ digits, $p_2$ has only $2$ digits and so does $n_2 - p_2$, $n_2$ must begin with a $1$.
Thus $p_1 = 30 - 1 = 29$.
Since $29$ is prime, the divisor must be $29$.
Using this information, we now know that the quotient $q$ of the first division is divisible by $29$.

Among the numbers $300 \, 310 \le q \le 300 \, 329$, the only multiple of $29$ is:

$q = 300 \, 324$
As we already found the divisors of both divisions, the rest of the numbers can be filled in accordingly.
$\blacksquare$


Historical Note
Dudeney attributes this skeleton puzzle to a certain W. J. W., whose identity has not been ascertained.


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $113$. -- A Complete Skeleton
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $150$. A Complete Skeleton




