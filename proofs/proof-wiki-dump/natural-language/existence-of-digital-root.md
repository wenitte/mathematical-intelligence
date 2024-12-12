# 

Source: https://proofwiki.org/wiki/Existence_of_Digital_Root

Theorem
Let $n \in \N$ be a natural number.
Let $b \in \N$ such that $b \ge 2$ also be a natural number.
Let $n$ be expressed in base $b$.

Then the digital root base $b$ exists for $n$.


Proof
By definition, the digital root base $b$ for $n$ is the single digit resulting from:

adding up the digits in $n$, and expressing the result in base $b$
adding up the digits in that result, and again expressing the result in base $b$
repeating until down to one digit.

Let $n = d_1 + b d_2 + \dotsb + b^{m - 1} d_m$ where, for all $i$, $0 \le d_i < b$.
Let $\map S n$ be the digit sum of $n$.
Then:

$\map S n = d_1 + d_2 + \dotsb + d_m$
Thus:

$\map S n < n$
unless $d_2, d_3, \dotsb, d_m = 0$
in which case $n$ is a one digit number.
Similarly: 

$\map S {\map S n} < \map S n$
Every time the digit sum is taken, the result is at least one less than the previous digit sum.
As $n$ is finite, it will take a finite number of steps to reduce the result to a one digit number.
Hence the result.
$\blacksquare$





