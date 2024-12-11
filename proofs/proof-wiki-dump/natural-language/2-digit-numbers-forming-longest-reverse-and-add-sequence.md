# 

Source: https://proofwiki.org/wiki/2-Digit_Numbers_forming_Longest_Reverse-and-Add_Sequence

Theorem
Let $m \in \Z_{>0}$ be a positive integer expressed in decimal notation.
Let $\map r m$ be the reverse-and-add process on $m$.
Let $r$ be applied iteratively to $m$.

The $2$-digit integers $m$ which need the largest number of iterations before reaching a palindromic number are $89$ and $98$, both needing $24$ iterations.


Proof
The sequence obtained by iterating $r$ on $89$ is:

$89, 187, 968, 1837, 9218, 17347, 91718, 173437, 907808, 1716517, 8872688,$
$17735476, 85189247, 159487405, 664272356, 1317544822, 3602001953, 7193004016, 13297007933,$
$47267087164, 93445163438, 176881317877, 955594506548, 170120002107, 8713200023178$
This sequence is A033670 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).

Note that $\map r {89} = \map r {98} = 187$, so the sequence obtained by iterating $r$ on $98$ is the same.

To show that no other $2$-digit integers have longer sequences, we define an equivalence relation on the $2$-digit integers as follows:

$\sqbrk {a_1 a_2} \sim \sqbrk {b_1 b_2} \iff a_1 + a_2 = b_1 + b_2$
For each $2$-digit integer $\sqbrk {a_1 a_2}$:

$\map r {\sqbrk {a_1 a_2} } = \sqbrk {a_1 a_2} + \sqbrk {a_2 a_1} = 11 \paren {a_1 + a_2}$

Notice that if $\sqbrk {a_1 a_2} \sim \sqbrk {b_1 b_2}$:

$\map r {\sqbrk {a_1 a_2} } = 11 \paren {a_1 + a_2} = 11 \paren {b_1 + b_2} = \map r {\sqbrk {b_1 b_2} }$
So the value of $r$ is equal in each equivalence class.

For each $2$-digit integer $\sqbrk {a_1 a_2}$, we have:

$18 = 9 + 9 \ge a_1 + a_2 \ge 1 + 0 = 1$

For $2$-digit integers where $a_1 + a_2 \le 9$:

$\map r {\sqbrk {a_1 a_2} } = 11 \paren {a_1 + a_2}$ is a $2$-digit multiple of $11$, which is a palindrome.

So we consider each equivalence class of $2$-digit integers with $a_1 + a_2 \ge 10$.
We have the sequences:

$19, 110, 121$
$29, 121$
$39, 132, 363$
$49, 143, 484$
$59, 154, 605, 1111$
$69, 165, 726, 1353, 4884$
$79, 176, 847, 1595, 7546, 14003, 44044$
$89, \cdots, 8713200023178$, with $24$ iterations
$99$

So:

every $2$-digit integer not in the equivalence class of $89$ has a shorter iteration
and:

$\eqclass {89} \sim = \set {89, 98}$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $89$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $89$




