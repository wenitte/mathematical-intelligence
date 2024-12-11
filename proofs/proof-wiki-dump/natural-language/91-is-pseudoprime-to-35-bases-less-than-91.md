# 

Source: https://proofwiki.org/wiki/91_is_Pseudoprime_to_35_Bases_less_than_91



Theorem
$91$ is a Fermat pseudoprime in $35$ bases less than itself:

$3, 4, 9, 10, 12, 16, 17, 22, 23, 25, 27, 29, 30, 36, 38, 40, 43, 48, 51, 53, 55, 61, 62, 64, 66, 68, 69, 74, 75, 79, 81, 82, 87, 88, 90$


Proof
By definition of a Fermat pseudoprime, we need to check for $a < 91$:

$a^{90} \equiv 1 \pmod {91}$
is satisfied or not.
By Chinese Remainder Theorem, this is equivalent to checking whether:

$a^{90} \equiv 1 \pmod 7$
and:

$a^{90} \equiv 1 \pmod {13}$
are both satisfied.

If $a$ is a multiple of $7$ or $13$, $a^{90} \not \equiv 1 \pmod {91}$.
Therefore we consider $a$ not divisible by $7$ or $13$.

By Fermat's Little Theorem, we have:

$a^6 \equiv 1 \pmod 7$
and thus:

$a^{90} \equiv 1^{15} \equiv 1 \pmod 7$

Now by Fermat's Little Theorem again:

$a^{12} \equiv 1 \pmod {13}$
and thus:

$a^{90} \equiv a^6 \paren{1^7} \equiv a^6 \pmod {13}$

We have:














\(\ds \paren {\pm 1}^6\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {13}\)


















\(\ds \paren {\pm 2}^6\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod {13}\)


















\(\ds \paren {\pm 3}^6\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {13}\)


















\(\ds \paren {\pm 4}^6\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod {13}\)


















\(\ds \paren {\pm 5}^6\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod {13}\)


















\(\ds \paren {\pm 6}^6\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod {13}\)







and thus $a$ must be equivalent to $1, 3, 4, 9, 10, 12 \pmod {13}$.
This gives $1$ and the $35$ bases less than $91$ listed above.
$\blacksquare$


Historical Note
This result is attributed by David Wells in his $1997$ work Curious and Interesting Numbers, 2nd ed. to Tiger Redman, but no corroboration can be found for this on the internet.


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $91$




