# 

Source: https://proofwiki.org/wiki/Kaprekar%27s_Process_on_3_Digit_Number_ends_in_495

Theorem
Let $n$ be a $3$-digit integer whose digits are not all the same.
Kaprekar's process, when applied to $n$, results in $495$ after no more than $6$ iterations.


Proof
Let $n = \sqbrk {abc}_{10}$ denote a $3$-digit integer whose digits are $a, b, c$.
If $a = b = c$ then Kaprekar's process trivially results in $0$ after the first iteration.

Without loss of generality, let $a \ge b \ge c$ but such that $a \ne c$.
By the Basis Representation Theorem:

$n = 10^2 a + 10 b + c$
Let $n' = 10^2 a' + 10 b' + c'$ be the result of Kaprekar's process after the $1$st iteration on $n$.
We have:














\(\ds n'\)

\(=\)







\(\ds \paren {100 a + 10 b + c} - \paren {100 c + 10 b + a}\)




















\(\ds \)

\(=\)







\(\ds 100 \paren {a - c} + \paren {c - a}\)




















\(\ds \)

\(=\)







\(\ds 100 \paren {a - c} - 10 + \paren {10 + c - a}\)





as $c < a$














\(\ds \)

\(=\)







\(\ds 100 \paren {a - c - 1} + \paren {100 - 10} + \paren {10 + c - a}\)





as $c < a$














\(\ds \)

\(=\)







\(\ds 10^2 \paren {a - c - 1} + 10 \times 9 + \paren {10 + c - a}\)





as $c < a$



Thus we have that:














\(\ds a'\)

\(=\)







\(\ds a - c - 1\)




















\(\ds b'\)

\(=\)







\(\ds 9\)




















\(\ds c'\)

\(=\)







\(\ds 10 + c - a\)









Hence we have that:














\(\ds b'\)

\(\ge\)







\(\ds a'\)




















\(\ds b'\)

\(\ge\)







\(\ds c'\)




















\(\ds a' + c'\)

\(=\)







\(\ds 9\)









There are in fact only the following possibilities for $n'$:














\(\ds n'\)

\(=\)







\(\ds 099\)





note that Kaprekar's process retains leading zeroes














\(\ds n'\)

\(=\)







\(\ds 198\)




















\(\ds n'\)

\(=\)







\(\ds 297\)




















\(\ds n'\)

\(=\)







\(\ds 396\)




















\(\ds n'\)

\(=\)







\(\ds 495\)




















\(\ds n'\)

\(=\)







\(\ds 594\)




















\(\ds n'\)

\(=\)







\(\ds 693\)




















\(\ds n'\)

\(=\)







\(\ds 792\)




















\(\ds n'\)

\(=\)







\(\ds 891\)










Without loss of generality we inspect  Kaprekar's process on $198$:














\(\ds 099\)

\(\to\)







\(\ds 990 - 099\)




















\(\ds 891\)

\(\to\)







\(\ds 981 - 189\)




















\(\ds \)

\(\to\)







\(\ds 792\)




















\(\ds \)

\(\to\)







\(\ds 972 - 279\)




















\(\ds \)

\(\to\)







\(\ds 693\)




















\(\ds \)

\(\to\)







\(\ds 963 - 369\)




















\(\ds \)

\(\to\)







\(\ds 594\)




















\(\ds \)

\(\to\)







\(\ds 954 - 459\)




















\(\ds \)

\(\to\)







\(\ds 495\)










and the result is seen to follow.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $495$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $495$




