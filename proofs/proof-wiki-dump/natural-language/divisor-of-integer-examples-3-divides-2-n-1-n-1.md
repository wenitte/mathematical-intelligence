# 

Source: https://proofwiki.org/wiki/Divisor_of_Integer/Examples/3_divides_2%5En_%2B_(-1)%5E(n%2B1)



Theorem
Let $n$ be an integer such that $n \ge 1$.
Then:

$3 \divides 2^n + \paren {-1}^{n + 1}$
where $\divides$ indicates divisibility .


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

$3 \divides 2^n + \paren {-1}^{n + 1}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds 2^1 + \paren {-1}^2\)

\(=\)







\(\ds 2 + 3\)




















\(\ds \)

\(=\)







\(\ds 3\)














\(\ds \leadsto \ \ \)





\(\ds 3\)

\(\divides\)







\(\ds 2^1 + \paren {-1}^2\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$3 \divides 2^k + \paren {-1}^{k + 1}$

from which it is to be shown that:

$3 \divides 2^{k + 1} + \paren {-1}^{k + 2}$


Induction Step
This is the induction step:
Suppose $k$ is integer.
Then $k + 1$ is odd, and:














\(\ds 2^{k + 1} + \paren {-1}^{k + 2}\)

\(=\)







\(\ds 2^k \times 2 + \paren {-1}^k \times \paren{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2^k - 1 + 1} \times 2 + \paren {-1}^{k + 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {2^k + \paren {-1}^{k + 1} + 1} \times 2 + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {2^k + \paren {-1}^{k + 1} } \times 2 + 2 + 1\)




















\(\ds \)

\(=\)







\(\ds 3 r \times 2 + 3\)





where $3 r = 2^k + \paren {-1}^{k + 1}$: by the induction hypothesis: $3 \divides 2^k + \paren {-1}^{k + 1}$














\(\ds \)

\(=\)







\(\ds 3 \paren {2 r + 1}\)














\(\ds \leadsto \ \ \)





\(\ds 3\)

\(\divides\)







\(\ds 2^{k + 1} + \paren {-1}^{k + 2}\)





Definition of Divisor of Integer




Similarly suppose $k$ is odd.
Then $k + 1$ is integer, and:














\(\ds 2^{k + 1} + \paren {-1}^{k + 2}\)

\(=\)







\(\ds 2^k \times 2 + \paren {-1}^k \times \paren{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {2^k - 1 + 1} \times 2 + \paren {-1}^{k + 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {2^k + \paren {-1}^{k + 1} - 1} \times 2 - 1\)




















\(\ds \)

\(=\)







\(\ds \paren {2^k + \paren {-1}^{k + 1} } \times 2 - 2 - 1\)




















\(\ds \)

\(=\)







\(\ds 3 r \times 2 - 3\)





where $3 r = 2^k + \paren {-1}^{k + 1}$: by the induction hypothesis: $3 \divides 2^k + \paren {-1}^{k + 1}$














\(\ds \)

\(=\)







\(\ds 3 \paren {2 r - 1}\)














\(\ds \leadsto \ \ \)





\(\ds 3\)

\(\divides\)







\(\ds 2^{k + 1} + \paren {-1}^{k + 2}\)





Definition of Divisor of Integer



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 1}: 3 \divides 2^n + \paren {-1}^{n + 1}$
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $6 \ \text {(b)}$




