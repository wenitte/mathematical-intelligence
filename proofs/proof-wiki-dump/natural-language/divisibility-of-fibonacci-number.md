# 

Source: https://proofwiki.org/wiki/Divisibility_of_Fibonacci_Number



Theorem
Let $F_k$ denote the $k$th Fibonacci number.

Then:

$\forall m, n \in \Z_{> 2} : m \divides n \iff F_m \divides F_n$
where $\divides$ denotes divisibility.


Corollary
$\forall m, n \in \Z_{> 0}: F_m \divides F_{m n}$
where $\divides$ denotes divisibility.


Proof
From the initial definition of Fibonacci numbers:

$F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3$
Let $n = k m - r$ where $0 \le r < m$
We have:

$m \divides n \iff r = 0$

The proof proceeds by induction on $k$.

For all $k \in \N_{>0}$, let $\map P k$ be the proposition:

$r = 0 \iff F_m \divides F_{k m - r}$


Basis for the Induction
$\map P 1$ is the case:

$r = 0 \iff F_m \divides F_{m - r}$
which holds because $F_{m - r} < F_m$ unless $r = 0$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k > 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$r = 0 \iff F_m \divides F_{k m - r}$

Then we need to show:

$r = 0 \iff F_m \divides F_{k m + m - r}$


Induction Step
This is our induction step:
Let $F_{k m - r} = a F_m + b$ where $0 \le b < F_m$.
We have:

$b = 0 \iff F_m \divides F_{k m - r} \iff r = 0$
by the induction hypothesis.














\(\ds F_{k m + m - r}\)

\(=\)







\(\ds F_{m - 1} F_{k m - r} + F_m F_{k m - r + 1}\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds a F_m F_{m - 1} + b F_{m - 1} + F_m F_{k m - r + 1}\)




















\(\ds \)

\(=\)







\(\ds F_m \paren {a F_{m - 1} + F_{k m - r + 1} } + b F_{m - 1}\)









We have that $F_{m - 1}$ and $F_m$ are coprime by Consecutive Fibonacci Numbers are Coprime.
Let $F_m \divides b F_{m - 1}$.
Then there exists an integer $k$ such that $k F_m \divides b F_{m - 1}$, by the definition of divisibility.
Then:

$\dfrac k b = \dfrac {F_{m - 1} } {F_m}$
We have that $F_{m - 1}$ and $F_m$ are coprime.
Thus by Coprime Numbers form Fraction in Lowest Terms:

$\dfrac {F_{m - 1} } {F_m}$ is in canonical form.
Then by Ratios of Fractions in Lowest Terms

$F_m \divides b$
Because $0 \le b < F_m$, the only case is when $b = 0$.
Therefore:

$F_m \divides b F_{m - 1} \iff b = 0$
Therefore:

$F_m \divides F_{k m + m - r} \iff F_m \divides b F_{m - 1} \iff b = 0 \iff r = 0$
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall m, n > 2 : m \divides n \iff F_m \divides F_n$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $5$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $5$




