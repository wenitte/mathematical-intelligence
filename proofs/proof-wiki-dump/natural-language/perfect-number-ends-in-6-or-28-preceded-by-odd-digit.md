# 

Source: https://proofwiki.org/wiki/Perfect_Number_ends_in_6_or_28_preceded_by_Odd_Digit



Theorem
Let $n$ be an even perfect number.
Then $n$ ends either in $6$ or $28$ preceded by an odd digit.


Proof
By the Theorem of Even Perfect Numbers:

$n = 2^{p - 1} \paren {2^p - 1}$
where $p$ is prime.
With the exception of $6 = 2^1 \paren {2^2 - 1}$ and $28 = 2^2 \paren {2^3 - 1}$:

$p$ is odd and $p > 4$.
We claim that:

$n$ ends in $\phantom 0 6$ preceded by an odd digit if $p \equiv 1 \pmod 4$
$n$ ends in $28$ preceded by an odd digit if $p \equiv 3 \pmod 4$
These statements are equivalent to:

$n \equiv \phantom 0 16 \pmod {\phantom 0 20}$ if $p \equiv 1 \pmod 4$
$n \equiv 128 \pmod {200}$ if $p \equiv 3 \pmod 4$

By Powers of 16 Modulo 20, we have:

$2^{4 n} = 16^n \equiv 16 \pmod {20}$ for $n \ge 1$


Case $1$: $p \equiv 1 \pmod 4$
Write $p = 4 n + 1$.
Then:














\(\ds n\)

\(=\)







\(\ds 2^{p - 1} \paren {2^p - 1}\)




















\(\ds \)

\(=\)







\(\ds 2^{4 n} \paren {2 \times 2^{4 n} - 1}\)




















\(\ds \)

\(\equiv\)







\(\ds 16 \paren {2 \times 16 - 1}\)

\(\ds \pmod {20}\)



Powers of 16 Modulo 20














\(\ds \)

\(\equiv\)







\(\ds 496\)

\(\ds \pmod {20}\)


















\(\ds \)

\(\equiv\)







\(\ds 16\)

\(\ds \pmod {20}\)







showing our first claim.
$\Box$


Case $2$: $p \equiv 3 \pmod 4$
Write $p = 4 n + 3$.
By Powers of 16 Modulo 20, we can write $2^{4 n} = 20 K + 16$ for some $K \in \Z$.
Then:














\(\ds n\)

\(=\)







\(\ds 2^{p - 1} \paren {2^p - 1}\)




















\(\ds \)

\(=\)







\(\ds 4 \times 2^{4 n} \paren {8 \times 2^{4 n} - 1}\)




















\(\ds \)

\(=\)







\(\ds 4 \paren {20 K + 16} \paren {8 \paren {20 K + 16} - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {80 K + 64} \paren {160 K + 127}\)




















\(\ds \)

\(=\)







\(\ds 12800 K^2 + 20400 K + 8128\)




















\(\ds \)

\(\equiv\)







\(\ds 128\)

\(\ds \pmod {200}\)







showing our second claim.
$\blacksquare$


Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $207$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $28$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $28$




