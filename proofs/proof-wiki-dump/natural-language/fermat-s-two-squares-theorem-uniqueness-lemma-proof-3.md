# 

Source: https://proofwiki.org/wiki/Fermat%27s_Two_Squares_Theorem/Uniqueness_Lemma/Proof_3

Lemma for Fermat's Two Squares Theorem
Let $p$ be a prime number.
Suppose there were an expression:

$p = a^2 + b^2$
where $a$ and $b$ are positive integers.
Then that expression would be unique except for the order of the two summands.


Proof
For $p = 2$ the only possibility is:

$p = 1^2 + 1^2$

Assume $p \ge 3$.
Let $a \ge b$ and $c \ge d$ satisfy:

$p = a^2 + b^2 = c^2 + d^2$
As $2 \nmid p$, we have:

$(1): \quad a > b$ and $c > d$

Observe:














\(\ds \paren {a c + b d} \paren {a d + b c}\)

\(=\)







\(\ds \paren {a^2 + b^2} c d + \paren {c^2 + d^2} a b\)




















\(\ds \)

\(=\)







\(\ds p \paren {a b + c d}\)









On the other hand:














\(\ds p^2\)

\(=\)







\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a c - b d}^2 + \paren {a d + b c}^2\)





Brahmagupta-Fibonacci Identity: Corollary














\(\ds \)

\(>\)







\(\ds \paren {a d + b c}^2\)





as $a c - b d > 0$ by $(1)$ and Real Number Ordering is Compatible with Multiplication








\(\ds \leadsto \ \ \)





\(\ds p\)

\(\nmid\)







\(\ds a d + b c\)









Hence:

$p \divides a c + b d$
In particular:

$p \le a c + b d$
Thus:














\(\ds p^2\)

\(=\)







\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2}\)





by hypothesis




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {a c + b d}^2 + \paren {a d - b c}^2\)





Brahmagupta-Fibonacci Identity














\(\ds \)

\(\ge\)







\(\ds p^2 + \paren {a d - b c}^2\)














\(\ds \leadsto \ \ \)





\(\ds a d - b c\)

\(=\)







\(\ds 0\)









Inserting this back into $(2)$, we obtain:

$p^2 = \paren {a c + b d}^2$
That is:

$p = a c + b d$
Hence:














\(\ds \paren {a - c}^2 + \paren {b - d}^2\)

\(=\)







\(\ds a^2 + b^2 + c^2 + d^2 - 2 p\)




















\(\ds \)

\(=\)







\(\ds 2 p - 2p\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 0\)









Thus $a = c$ and $b = d$.
$\blacksquare$





