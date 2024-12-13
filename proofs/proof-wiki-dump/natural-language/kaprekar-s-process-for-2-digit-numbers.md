# 

Source: https://proofwiki.org/wiki/Kaprekar%27s_Process_for_2-Digit_Numbers

Theorem
Kaprekar's process, when applied to a non-repdigit $2$-digit positive integer leads to the cycle:

$09 \to 81 \to 63 \to 27 \to 45 \to 09$
Note that it is important to retain the leading zero on the $9$, or the process trivially terminates in $0$.


Proof
Let $n \in \Z_{>0}$ be a $2$-digit positive integer.
Without loss of generality, let $n$ be expressed in decimal notation as:

$n = 10 x + y$
where:

$x > y$
$0 \le x \le 9, 0 \le y \le 9$
The reversal of $n$ is $10 y + x$.

We have:














\(\ds 10x + y - 10 y - x\)

\(=\)







\(\ds 9 \left({x - y}\right)\)





where $1 \le x - y \le 9$




Thus after the first iteration of Kaprekar's process, $n$ is one of:

$09$
$18$
$27$
$36$
$45$
or their reversals.

Applying Kaprekar's process to $09$ gives:














\(\ds 09\)

\(=\)







\(\ds 90 - 09\)




















\(\ds \)

\(=\)







\(\ds 81\)




















\(\ds \)

\(\to\)







\(\ds 81 - 18\)




















\(\ds \)

\(=\)







\(\ds 63\)




















\(\ds \)

\(\to\)







\(\ds 63 - 36\)




















\(\ds \)

\(=\)







\(\ds 27\)




















\(\ds \)

\(\to\)







\(\ds 72 - 27\)




















\(\ds \)

\(=\)







\(\ds 45\)




















\(\ds \)

\(\to\)







\(\ds 45 - 54\)




















\(\ds \)

\(=\)







\(\ds 09\)









All those multiples of $9$ can be seen to be in (or end up in) this loop.
Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $63$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $63$




