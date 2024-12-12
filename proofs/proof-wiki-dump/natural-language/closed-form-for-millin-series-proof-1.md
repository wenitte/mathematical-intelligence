# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Millin_Series/Proof_1

Theorem
The Millin series has the closed form expression:

$\ds \sum_{n \mathop = 0}^\infty \frac 1 {F_{2^n} } = \frac {7 - \sqrt 5} 2$


Proof
First we will prove that:

$\ds \sum_{r \mathop = 0}^n \frac 1 {F_{2^r} } = 3 - \frac {F_{2^n - 1} } {F_{2^n} }$
for $n \ge 1$.

We see that:

$\dfrac 1 {F_1} + \dfrac 1 {F_2} = 2 = 3 - \dfrac {F_1} {F_2}$
so the proposition holds for $n = 1$.
Suppose the proposition is true for $n = k$.
Then:














\(\ds \sum_{r \mathop = 0}^{k + 1}  \frac 1 {F_{2^r} }\)

\(=\)







\(\ds 3 - \frac {F_{2^k - 1} } {F_{2^k} } + \frac 1 {F_{2^{k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^k - 1} F_{2^{k + 1} } - F_{2^k} } {F_{2^k} F_{2^{k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^k - 1} F_{2^k} \paren {F_{2^k + 1} + F_{2^k - 1} } - F_{2^k} } {F_{2^k} F_{2^{k + 1} } }\)





repeated Fibonacci recurrence formula on $F_{2^{k + 1} }$














\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^k - 1} F_{2^k + 1} + F_{2^k - 1}^2 - 1} {F_{2^{k + 1} } }\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^k}^2 + F_{2^k - 1}^2} {F_{2^{k + 1} } }\)





Cassini's Identity














\(\ds \)

\(=\)







\(\ds 3 - \frac {F_{2^{k + 1} - 1} } {F_{2^{k + 1} } }\)





repeated Fibonacci recurrence formula on $F_{2^{k + 1} - 1}$




Thus by Principle of Mathematical Induction, the proof is complete. 
$\Box$

Now taking the limit, we have:














\(\ds \sum_{r \mathop = 0}^\infty \frac 1 {F_{2^r} }\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{r \mathop = 0}^n \frac 1 {F_{2^r} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {3 - \frac {F_{2^n - 1} } {F_{2^n } } }\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac 2 {\sqrt 5 + 1 }\)





Ratio of Consecutive Fibonacci Numbers














\(\ds \)

\(=\)







\(\ds 3 - \frac 2 {\sqrt 5 + 1 } \paren {\frac {\sqrt 5 - 1 } {\sqrt 5 - 1 } }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds 3 - \frac {2 \paren {\sqrt 5 - 1 } } 4\)




















\(\ds \)

\(=\)







\(\ds 3 - \frac {\sqrt 5 - 1} 2\)




















\(\ds \)

\(=\)







\(\ds \frac {7 - \sqrt 5} 2\)









as required.
$\blacksquare$


Sources
1974: I.J. Good: A Reciprocal Series of Fibonacci Numbers (Fibonacci Quart. Vol. 12, no. 4: p. 346) (as an outline only)




