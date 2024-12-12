# 

Source: https://proofwiki.org/wiki/Fermat%27s_Two_Squares_Theorem/Uniqueness_Lemma/Proof_1

Lemma for Fermat's Two Squares Theorem
Let $p$ be a prime number.
Suppose there were an expression:

$p = a^2 + b^2$
where $a$ and $b$ are positive integers.
Then that expression would be unique except for the order of the two summands.


Proof
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





