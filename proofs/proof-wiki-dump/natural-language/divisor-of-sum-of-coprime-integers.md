# 

Source: https://proofwiki.org/wiki/Divisor_of_Sum_of_Coprime_Integers

Theorem
Let $a, b, c \in \Z_{>0}$ such that:

$a \perp b$ and $c \divides \paren {a + b}$.
where:

$a \perp b$ denotes $a$ and $b$ are coprime
$c \divides \paren {a + b}$ denotes that $c$ is a divisor of $a + b$.

Then $a \perp c$ and $b \perp c$.

That is, a divisor of the sum of two coprime integers is coprime to both.


Proof
Let $d \in \Z_{>0}: d \divides c \land d \divides a$.
Then:














\(\ds d\)

\(\divides\)







\(\ds \paren {a + b}\)





as $c \divides \paren {a + b}$








\(\ds \leadsto \ \ \)





\(\ds d\)

\(\divides\)







\(\ds \paren {a + b - a}\)














\(\ds \leadsto \ \ \)





\(\ds d\)

\(\divides\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds d\)

\(=\)







\(\ds 1\)





as $d \divides a$ and $d \divides b$ which are coprime




A similar argument shows that if $d \divides c \land d \divides b$ then $d \divides a$.
It follows that:

$\gcd \set {a, c} = \gcd \set {b, c} = 1$
Hence the result.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Some Properties of $\Z$: Exercise $2.2$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $16 \ \text {(d)}$




