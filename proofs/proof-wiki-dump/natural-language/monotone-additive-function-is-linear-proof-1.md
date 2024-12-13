# 

Source: https://proofwiki.org/wiki/Monotone_Additive_Function_is_Linear/Proof_1

Theorem
Let $f: \R \to \R$ be a monotone real function which is additive, that is:

$\forall x, y \in \R: \map f {x + y} = \map f x + \map f y$

Then:

$\exists a \in \R: \forall x \in \R: \map f x = a x$

That is, $f$ is a linear function.


Proof
Denote $a = \map f 1$.
As Additive Function is Linear for Rational Factors:

$ \forall r \in \Q: \map f r = r \, \map f 1 = a r$
Let $x \in \R \setminus \Q$.
Let $\sequence {r_n}$ be an increasing sequence, with $r_n \in \Q$ for each $n \in \N$, such that $\ds \lim_{n \mathop \to \infty} r_n = x$.
Likewise, let $\sequence {s_n}$ be decreasing, with $s_n \in \Q$ for each $n \in \N$, such that $\ds \lim_{n \mathop \to \infty} s_n = x$.
From the Peak Point Lemma, it is always possible to construct sequences like these, for $\Q$ is dense in $\R$.
Now, by passing to $g = -f$ if necessary, we can assume that $f$ is increasing.

Then we have:

$\map f {r_n} \le \map f x \le \map f {s_n}$
for all $n \in \N$.
As we have $\map f {r_n} = a r_n$ and $\map f {s_n} = a s_n$, it follows that:

$a r_n \le \map f x \le a s_n$
Since both $a r_n$ and $a s_n$ converge to $a x$, we have $\map f x = a x$ by the Squeeze Theorem for Real Sequences.
$\blacksquare$





