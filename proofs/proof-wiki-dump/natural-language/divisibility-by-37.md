# 

Source: https://proofwiki.org/wiki/Divisibility_by_37

Theorem
Let $n$ be an integer which has at least $3$ digits when expressed in decimal notation.
Let the digits of $n$ be divided into groups of $3$, counting from the right, and those groups added.

Then the result is equal to a multiple of $37$ if and only if $n$ is divisible by $37$.


Proof
Write $n = \ds \sum_{i \mathop = 0}^k a_i 10^{3 i}$, where $0 \le a_i < 1000$.
This divides the digits of $n$ into groups of $3$.
Then the statement is equivalent to:

$37 \divides n \iff 37 \divides \ds \sum_{i \mathop = 0}^k a_i$
Note that $1000 = 37 \times 27 + 1 \equiv 1 \pmod {37}$.
Hence:














\(\ds n\)

\(=\)







\(\ds \sum_{i \mathop = 0}^k a_i 10^{3 i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^k a_i 1000^i\)




















\(\ds \)

\(\equiv\)







\(\ds \sum_{i \mathop = 0}^k a_i 1^i\)

\(\ds \pmod {37}\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds \sum_{i \mathop = 0}^k a_i\)

\(\ds \pmod {37}\)







which proves our statement.
$\blacksquare$





