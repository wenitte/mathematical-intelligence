# 

Source: https://proofwiki.org/wiki/Fermat%27s_Two_Squares_Theorem/Uniqueness_Lemma/Proof_2

Lemma for Fermat's Two Squares Theorem
Let $p$ be a prime number.
Suppose there were an expression:

$p = a^2 + b^2$
where $a$ and $b$ are positive integers.
Then that expression would be unique except for the order of the two summands.


Proof
Suppose:

$p = a^2 + b^2 = c^2 + d^2$
where $a > b > 0$ and $c > d > 0$.
We are going to show that $a = c$ and $b = d$.
From the two expressions for $p$, we have:














\(\ds \paren {a d - b c} \paren {a d + b c}\)

\(=\)







\(\ds a^2 d^2 - b^2 c^2\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {p - b^2} d^2 - b^2 \paren {p - d^2}\)





substituting for $a^2$ and $c^2$














\(\ds \)

\(=\)







\(\ds p d^2 - b^2 d^2 - p b^2 + b^2 d^2\)




















\(\ds \)

\(=\)







\(\ds p \paren {d^2 - b^2}\)




















\(\ds \)

\(\equiv\)







\(\ds 0\)





$\pmod p$



So we have:

$\paren {a d - b c} \paren {a d + b c} \equiv 0 \pmod p$
From Euclid's Lemma, that means:

$p \divides \paren {a d - b c}$
or:

$p \divides \paren {a d + b c}$

Aiming for a contradiction, suppose $p \divides \paren {a d + b c}$.
Now, we have that each of $a^2, b^2, c^2, d^2$ must be less than $p$.
Hence $0 < a, b, c, d < \sqrt p$.
This implies $0 < a d + b c < 2 p$.
That must mean that $a d + b c = p$.
But then:














\(\ds p^2\)

\(=\)







\(\ds \paren {a^2 + b^2} \paren {d^2 + c^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {a d + b c}^2 + \paren {a c - b d}^2\)





Brahmagupta-Fibonacci Identity














\(\ds \)

\(=\)







\(\ds p^2 + \paren {a c - b d}^2\)









That means:

$a c - b d = 0$
But since $a > b$ and $c > d$ we have:

$a c > b d$
This contradiction shows that $a d + b c$ can not be divisible by $p$.

So this means:

$p \divides \paren {a d - b c}$
Similarly, because $0 < a, b, c, d < \sqrt p$ we have:

$-p < a d - b c < p$
This means:

$a d = b c$
So:

$a \divides b c$
But $a \perp b$ otherwise $a^2 + b^2$ has a common divisor greater than $1$ and less than $p$.
This cannot happen because $p$ is prime.
So by Euclid's Lemma:

$a \divides c$
So we can put $c = k a$ and so $a d = b c$ becomes $d = k b$.
Hence:

$p = c^2 + d^2 = k^2 \paren {a^2 + b^2} = k^2 p$
This means $k = 1$ which means $a = c$ and $b = d$ as we wanted to show.
$\blacksquare$





