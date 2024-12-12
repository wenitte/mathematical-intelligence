# 

Source: https://proofwiki.org/wiki/Bounds_for_Cumulative_Distribution_Function

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be a random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $F_X$ be the cumulative distribution function.

Then:

$0 \le \map {F_X} x \le 1$ for each $x \in \R$


Proof
From the definition of the cumulative distribution function, we have: 

$\map {F_X} x = \map \Pr {X \le x}$
for each $x \in \R$.
We have: 

$\O \subseteq \set {\omega \in \Omega : \map X \omega \le x} \subseteq \Omega$
So, from Measure is Monotone, we have: 

$\map \Pr \O \le \map \Pr {X \le x} \le \map \Pr \Omega$
From the definition of a probability measure, we have: 

$\map \Pr \O = 0$
and:

$\map \Pr \Omega = 1$
so:

$0 \le \map \Pr {X \le x} \le 1$
for each $x \in \R$.
$\blacksquare$





