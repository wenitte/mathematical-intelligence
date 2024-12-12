# 

Source: https://proofwiki.org/wiki/Fermat%27s_Two_Squares_Theorem/Uniqueness_Lemma



Lemma for Fermat's Two Squares Theorem
Let $p$ be a prime number.
Suppose there were an expression:

$p = a^2 + b^2$
where $a$ and $b$ are positive integers.
Then that expression would be unique except for the order of the two summands.


Proof 1
Suppose:

$p = a^2 + b^2 = c^2 + d^2$
where $a, b, c, d \in \Z_{>0}$.
We have that:














\(\ds \paren {a c + b d} \paren {a d + b c}\)

\(=\)







\(\ds \paren {a^2 + b^2} c d + \paren {c^2 + d^2} a b\)





multiplying out and gathering terms














\(\ds \)

\(=\)







\(\ds p \paren {a b + c d}\)





as $p = a^2 + b^2 = c^2 + d^2$



$p$ is prime by hypothesis.
From Euclid's Lemma for Prime Divisors:

$p \divides \paren {a c + b d}$
or:

$p \divides \paren {a d + b c}$
Without loss of generality, suppose $p \divides \paren {a c + b d}$.
By Absolute Value of Integer is not less than Divisors: Corollary:

$(1): \quad a c + b d \ge p$

We have:














\(\ds p^2\)

\(=\)







\(\ds \paren {a^2 + b^2} \paren {c^2 + d^2}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a c + b d}^2 + \paren {a d - b c}^2\)





Brahmagupta-Fibonacci Identity








\(\ds \leadsto \ \ \)





\(\ds p^2\)

\(\ge\)







\(\ds p^2 + \paren {a d - b c}^2\)





from $(1)$: $p \le a c + b d$ and so $p^2 \le \paren {a c + b d}^2$








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\ge\)







\(\ds \paren {a d - b c}^2\)





subtracting $p^2$ from both sides








\(\ds \leadsto \ \ \)





\(\ds a d - b c\)

\(=\)







\(\ds 0\)





Square of Real Number is Non-Negative




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac c a\)

\(=\)







\(\ds \dfrac d b\)





dividing both sides by $a b$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds \dfrac {c^2} {a^2}\)

\(=\)







\(\ds \dfrac {d^2} {b^2}\)





squaring both sides














\(\ds \)

\(=\)







\(\ds \dfrac {c^2 + d^2} {a^2 + b^2}\)





Mediant is Between: Corollary $2$














\(\ds \)

\(=\)







\(\ds \dfrac p p\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 1\)









Hence:

$c = a$
and:

$b = d$
$\blacksquare$


Proof 2
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


Proof 3
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





