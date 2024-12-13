# 

Source: https://proofwiki.org/wiki/Numbers_of_form_31_x_16%5En_are_sum_of_16_4th_Powers

Theorem
Let $m \in \Z$ be an integer of the form $31 \times 16^n$ for $n \in \Z_{\ge 0}$.
Then in order to express $m$ as the sum of fourth powers, you need $16$ of them.


Proof
We have:

$31 \times 16^n = \paren {2^{n + 1} }^4 + 15 \times \paren {2^n}^4$
so every integer of the form $31 \times 16^n$ for $n \in \Z_{\ge 0}$ can be expressed as the sum of 16 fourth powers.

Now we show that we cannot use less than $16$ fourth powers.
Observe that for an even number $2 k$:














\(\ds \paren {2 k}^4\)

\(=\)







\(\ds 16 k^4\)




















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {16}\)







For an odd number $2 k + 1$:














\(\ds \paren {2 k + 1}^4\)

\(=\)







\(\ds 16 k^4 + 32 k^3 + 24 k^2 + 8 k + 1\)





Binomial Theorem














\(\ds \)

\(\equiv\)







\(\ds 8 k \paren {k + 1} + 1\)

\(\ds \pmod {16}\)


















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {16}\)



since $k \paren {k + 1}$ is even



It is obvious that for $n = 0$, $31$ requires $16$ fourth powers to express:

$31 = 2^4 + 15 \times 1^4$
Aiming for a contradiction, suppose for some $n > 0$, $31 \times 16^n$ requires less than $16$ fourth powers to express.
Let $m$ be the smallest of those $n$.
Suppose $x$ of the summands are odd, where $x < 16$.
By the above, we must have:

$31 \times 16^m \equiv x \pmod {16}$
Since $31 \times 16^m$ is divisible by $16$, $x = 0$.
Hence each summand is even.
Dividing each summand by $2$ gives a representation of $31 \times 16^{m - 1}$ as a sum of less than $16$ fourth powers.
This contradicts the minimality condition on $m$.
Hence the result by Proof by Contradiction.
$\blacksquare$





