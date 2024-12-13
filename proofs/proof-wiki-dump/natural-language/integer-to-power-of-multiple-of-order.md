# 

Source: https://proofwiki.org/wiki/Integer_to_Power_of_Multiple_of_Order



Theorem
Let $a$ and $n$ be integers.
Let $a \perp n$, that is, let $a$ and $b$ be coprime.
Let $c \in \Z_{>0}$ be the multiplicative order of $a$ modulo $n$.

Then $a^k \equiv 1 \pmod n$ if and only if $k$ is a multiple of $c$.


Corollary
Then $\map \phi n$ is a multiple of $c$, where $\map \phi n$ is the Euler phi function of $n$.


Proof
First note from Integer has Multiplicative Order Modulo n iff Coprime to n that unless $a \perp n$ the multiplicative order of $a$ modulo $n$ does not exist.


Necessary Condition
Let $k$ be a multiple of $c$.
Then $k = c r$, say.
Then:

$a^k = a^{c r} = \paren {a^c}^r \equiv 1^r \equiv 1 \pmod n$
$\Box$


Sufficient Condition
Let $a^k \equiv 1 \pmod n$.
Then:

$1 \equiv a^k \equiv a^{q c + r} \equiv \paren {a^c}^q a^r \equiv 1^q a^r \equiv a^r \pmod n$
So $r = 0$ or else (from the Division Theorem) $0 < r < c$ and this contradicts $c$ being the smallest integer such that $a^c \equiv 1 \pmod n$.
Hence $k$ is a multiple of $c$.
$\blacksquare$





