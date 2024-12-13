# 

Source: https://proofwiki.org/wiki/Korselt%27s_Theorem


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $n \ge 2$ be an integer.
Then $n$ is a Carmichael number if and only if:

$(1): \quad n$ is odd
and the following conditions hold for every prime factor $p$ of $n$:

$(2): \quad p^2 \nmid n$
$(3): \quad \paren {p - 1} \divides \paren {n - 1}$
where:

$\divides$ denotes divisibility
$\nmid$ denotes non-divisibility.


Proof
Sufficient Condition
Let $n$ be a Carmichael number:

$(4): \quad \forall a \in \Z: a \perp n: a^n \equiv a \pmod n$
where $\perp$ denotes coprimality.

Suppose $n$ is even.
Set $a = -1$ in $(4)$.
Then $\paren {-1}^n = 1$ and so:

$1 \equiv -1 \pmod n$
resulting in $n = 2$.
But as $2$ is not a Carmichael number, it follows that for $n$ to be Carmichael it must be odd.
Thus:

$(1): \quad n$ is odd
holds.

From the Fundamental Theorem of Arithmetic, let $n$ be expressed as:

$n = p_1^{k_1} p_2^{k_2} \cdots p_r^{k_r}$
where:

the $p_i$'s are distinct odd primes
for all $i$, $k_i \ge 1$.
By Conditions for Integer to have Primitive Root there exists a primitive root $a_i$ modulo $p_i^{k_i}$ for each $i$.
In particular:

$a_i \perp p_i$
By the Chinese Remainder Theorem:

$\exists a: \forall i: a \equiv a_i \pmod {p_i^{k_i} }, a \perp n$

Consider a particular $i$.
We have:














\(\ds a^n\)

\(\equiv\)







\(\ds a\)

\(\ds \pmod n\)



from $(4)$








\(\ds \leadsto \ \ \)





\(\ds a^{n - 1}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod n\)












\(\ds \leadsto \ \ \)





\(\ds a^{n - 1}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {p_i^{k_i} }\)












\(\ds \leadsto \ \ \)





\(\ds {a_i}^{n - 1}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {p_i^{k_i} }\)








We have that $a_i$ is a primitive root modulo $p_i^{k_i}$.
Thus:














\(\ds \map {\operatorname {ord}_{p_i^{k_i} } } {a_i}\)

\(=\)







\(\ds \map \phi {p_i^{k_i} }\)





where $\phi$ is the Euler $\phi$ function














\(\ds \)

\(=\)







\(\ds p_i^{k_i - 1} \paren {p_i - 1}\)




















\(\ds \)

\(\divides\)







\(\ds n - 1\)










But because $p_i \divides n$:

$p_i \perp n - 1$
Thus:

$k_i = 1$
giving that $n$ is square-free, and:

$p_i - 1 \divides n - 1$
As $i$ is arbitrary, both conditions $(1)$ and $(2)$ of the statement of the theorem are thus fulfilled:
That is:

$(1): \quad n$ is odd
and for all primes $p$ such that $p \divides n$:

$(2): \quad p^2 \nmid n$
$(3): \quad \paren {p - 1} \divides \paren {n - 1}$
$\Box$


Necessary Condition
Suppose $n$ is such that:

$(1): \quad n$ is odd
and for all primes $p$ such that $p \divides n$:

$(2): \quad p^2 \nmid n$
$(3): \quad \paren {p - 1} \divides \paren {n - 1}$

Thus:

$n = p_1 p_2 \cdots p_r$
is the product of $r$ distinct odd primes such that:

$\paren {p_i - 1} \divides \paren {n - 1}$
for all $i$.

Let $a \in \Z$.
Let $a \perp p_i$.
Then by Fermat's Little Theorem:

$a^{p_i - 1} \equiv 1 \pmod {p_i}$
Thus:

$a^{n - 1} \equiv 1 \pmod {p_i}$
and so:

$a^n \equiv a \pmod {p_i}$

Let $\gcd \set {a, p_i} > 1$.
Then as $p_i$ is prime:

$p_i \divides a$
and so:

$a^n \equiv a \equiv 0 \pmod {p_i}$

Thus for all $i$ and for all $a \in \Z$:

$a^n \equiv a \pmod {p_i}$
From the Chinese Remainder Theorem:

$a^n \equiv a \pmod n$
for all $a$.
Thus, by definition, $n$ is a Carmichael number.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Also known as
Korselt's theorem is also seen referred to as Korselt's criterion.


Source of Name
This entry was named for Alwin Reinhold Korselt.


Historical Note
Alwin Reinhold Korselt first demonstrated this result in $1899$, but did not actually identify any integers that fulfilled the criterion.
That did not happen until Robert Daniel Carmichael found that $561$ was such a number in $1910$.
It turns out that Václav Šimerka had already found the first $7$ Carmichael numbers in $1885$, but his work was not noticed at the time.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $561$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $561$




