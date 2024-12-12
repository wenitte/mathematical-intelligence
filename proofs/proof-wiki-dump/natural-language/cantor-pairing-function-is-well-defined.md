# 

Source: https://proofwiki.org/wiki/Cantor_Pairing_Function_is_Well-Defined

Theorem
The Cantor pairing function is well-defined.


Proof
By definition, the Cantor pairing function $\pi : \N^2 \to \N$ is:

$\ds \map \pi {m, n} = \frac 1 2 \paren {m + n} \paren {m + n + 1} + m$
It suffices to show that, for every $m, n \in \N$:

$\paren {m + n} \paren {m + n + 1}$
is divisible by $2$.

Suppose that $m + n$ is even.
Then, by definition, $2 \divides \paren {m + n}$.
Thus, by Divisor Divides Multiple:

$2 \divides \paren {m + n} \paren {m + n + 1}$

Suppose that $m + n$ is not even.
Then, by definition, $m + n$ is odd.
But then, by definition, there exists some $k \in \Z$ such that:

$m + n = 2k + 1$
Then:














\(\ds \paren {m + n} \paren {m + n + 1}\)

\(=\)







\(\ds \paren {2k + 1} \paren {2k + 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {2k + 1} \paren {2 \paren {k + 1} }\)









By definition, $2 \paren {k + 1}$ is even.
But then, by definition, $2 \divides 2 \paren {k + 1}$.
Therefore, by Divisor Divides Multiple:

$2 \divides \paren {2k + 1} \paren {2 \paren {k + 1} } = \paren {m + n} \paren {m + n + 1}$

By Proof by Cases, $\paren {m + n} \paren {m + n + 1}$ is divisible by $2$.
$\blacksquare$





