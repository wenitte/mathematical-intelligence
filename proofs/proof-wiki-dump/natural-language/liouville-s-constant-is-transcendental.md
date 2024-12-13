# 

Source: https://proofwiki.org/wiki/Liouville%27s_Constant_is_Transcendental



Theorem
Liouville's constant:














\(\ds \sum_{n \mathop = 1}^\infty \dfrac 1 {10^{n!} }\)

\(=\)







\(\ds \frac 1 {10^1} + \frac 1 {10^2} + \frac 1 {10^6} +  \frac 1 {10^{24} } + \cdots\)




















\(\ds \)

\(=\)







\(\ds 0.11000 \, 10000 \, 00000 \, 00000 \, 00010 \, 00 \ldots\)









is transcendental.


Corollary
All real numbers of the form:














\(\ds \sum_{n \mathop = 1}^\infty \frac {a_n} {10^{n!} }\)

\(=\)







\(\ds \frac {a_1} {10^1} + \frac {a_2} {10^2} + \frac {a_3} {10^6} + \frac {a_4} {10^{24} } + \cdots\)









where

$a_1, a_2, a_3, \ldots \in \set {1, 2, \ldots, 9}$
are transcendental.


Proof
Let $q = 10^{n!}$ and write:

$\ds L = \frac p q + \sum_{k \mathop = n + 1}^\infty \frac 1 {10^{k!} }$
for some suitable $p \in \Z$.
Then:














\(\ds \size {L - \frac p q}\)

\(=\)







\(\ds \sum_{k \mathop = n + 1}^\infty \frac 1 {10^{k!} }\)




















\(\ds \)

\(\le\)







\(\ds \frac 2 {10^{\paren {n + 1}!} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {q^{n + 1} }\)




















\(\ds \)

\(<\)







\(\ds \frac 1 {q^n}\)





as $q \ge 10$ for all $n \in \N$



Thus, by definition, $L$ is a Liouville number.
Therefore, by Liouville's Theorem, $L$ is transcendental.
$\blacksquare$


Historical Note
Liouville's constant  was proved to be transcendental by Joseph Liouville in $1844$ as a demonstration that there exist real numbers which are provably transcendental.
This was the simplest of several such numbers that he constructed.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $0 \cdotp 11000 10000 00000 00000 00010 00000 00000 00000 0 \ldots$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.29$: Liouville ($\text {1809}$ – $\text {1882}$)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.18$: Algebraic and Transcendental Numbers. $e$ is Transcendental
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $0 \cdotp 11000 \, 10000 \, 00000 \, 00000 \, 00010 \, 00000 \, 00000 \, 00000 \, 0 \ldots$




