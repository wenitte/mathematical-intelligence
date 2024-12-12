# 

Source: https://proofwiki.org/wiki/GCD_equals_GCD_with_Product_of_Coprime_Factor

Theorem
Let $a, b, c \in \Z$ be integers.
Let:

$a \perp b$
where $\perp$ denotes coprimality.

Then:

$\gcd \set {a c, b} = \gcd \set {c, b}$
where $\gcd$ denotes greatest common divisor.


Proof
Let $a, b, c \in \Z$ such that $a$ is coprime to $b$.
Let $d = \gcd \set {c, b}$.
We have:














\(\ds a\)

\(\perp\)







\(\ds b\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)

\(\ds \exists x, y \in \Z: \, \)



\(\ds 1\)

\(=\)







\(\ds a x + b y\)





Integer Combination of Coprime Integers










\(\ds \exists u, v \in \Z: \, \)



\(\ds d\)

\(=\)







\(\ds c u + b v\)





Bézout's Identity








\(\ds \leadsto \ \ \)





\(\ds d\)

\(=\)







\(\ds \paren {a x + b y} \paren {c u + b v}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds a c u x + a b v x + b c u y + b^2 v x\)





multiplying out














\(\ds \)

\(=\)







\(\ds a c \paren {u x} + b \paren {a v x + c u y + b v x}\)





rearranging














\(\ds \)

\(=\)







\(\ds \gcd \set {a c, b}\)





Bézout's Identity



$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $16 \ \text {(c)}$




