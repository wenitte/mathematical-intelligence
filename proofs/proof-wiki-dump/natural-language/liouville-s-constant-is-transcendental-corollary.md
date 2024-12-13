# 

Source: https://proofwiki.org/wiki/Liouville%27s_Constant_is_Transcendental/Corollary

Corollary to Liouville's Constant is Transcendental
All real numbers of the form:














\(\ds \sum_{n \mathop = 1}^\infty \frac {a_n} {10^{n!} }\)

\(=\)







\(\ds \frac {a_1} {10^1} + \frac {a_2} {10^2} + \frac {a_3} {10^6} + \frac {a_4} {10^{24} } + \cdots\)









where

$a_1, a_2, a_3, \ldots \in \set {1, 2, \ldots, 9}$
are transcendental.


Proof
Let $n \in \N$.
For $n = 1$, let $p = a_1$ and $q = 10$. Then:

$\ds \size {L - \dfrac p q} = \sum_{k \mathop = 2}^\infty \dfrac {a_k} {10^{k!} } < \dfrac 1 {10} = \dfrac 1 q$

For $n > 1$, let $q = 10^{n!}$ and write:

$\ds L = \frac p q + \sum_{k \mathop = n + 1}^\infty \frac {a_k} {10^{k!} }$
for some suitable $p \in \Z$.
Then:














\(\ds \size {L - \frac p q}\)

\(=\)







\(\ds \sum_{k \mathop = n + 1}^\infty \frac {a_k} {10^{k!} }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = n + 1}^\infty \frac 9 {10^{k!} }\)




















\(\ds \)

\(\le\)







\(\ds \frac {18} {10^{\paren {n + 1}!} }\)




















\(\ds \)

\(=\)







\(\ds \frac {18} {q^{n + 1} }\)




















\(\ds \)

\(<\)







\(\ds \frac 1 {q^n}\)





as $q \ge 100$ for all $n > 1$



Thus, by definition, $L$ is a Liouville number.
Therefore, by Liouville's Theorem, $L$ is transcendental.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.18$: Algebraic and Transcendental Numbers. $e$ is Transcendental




