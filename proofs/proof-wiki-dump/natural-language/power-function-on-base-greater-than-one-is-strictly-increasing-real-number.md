# 

Source: https://proofwiki.org/wiki/Power_Function_on_Base_Greater_than_One_is_Strictly_Increasing/Real_Number

Theorem
Let $a \in \R$ be a real number such that $a > 1$.
Let $f: \R \to \R$ be the real function defined as:

$\map f x = a^x$
where $a^x$ denotes $a$ to the power of $x$.

Then $f$ is strictly increasing.


Proof
Let $x, y \in \R$ be such that $x < y$.
Let $\delta = \dfrac {y - x} 2$.

From Rational Sequence Decreasing to Real Number, there is some rational sequence $\sequence {x_n}$ that decreases to $x$.
From Rational Sequence Increasing to Real Number, there is some rational sequence $\sequence {y_n}$ that increases to $y$.

From Convergent Real Sequence is Bounded:

$\exists N_1 \in \N: n \ge N_1 \implies x - \delta < x_n < x + \delta$
Since $\sequence {x_n}$ is decreasing:

$n \ge N_1 \implies x \le x_n < x + \delta$

From Convergent Real Sequence is Bounded:

$\exists N_2 \in \N : n \ge N_2 \implies y - \delta < y_n < y + \delta$
Since $\sequence {y_n}$ is increasing:

$n \ge N_2 \implies y - \delta < y_n \le y$

Let $N = \max \set {N_1, N_2}$.

Then, for $n \ge N$:














\(\ds x\)

\(\le\)







\(\ds x_n\)




















\(\ds \)

\(<\)







\(\ds x + \delta\)




















\(\ds \)

\(=\)







\(\ds y - \delta\)




















\(\ds \)

\(<\)







\(\ds y_n\)




















\(\ds \)

\(\le\)







\(\ds y\)










From Power Function on Strictly Positive Base is Continuous and Sequential Continuity is Equivalent to Continuity in the Reals:

$x_n \to x \implies a^{x_n} \to a^x$
$y_n \to y \implies a^{y_n} \to a^y$
Also, from Power Function on Base Greater than One is Strictly Increasing: Rational Number:

$\sequence {a^{x_n} }$ decreases to $a^x$
and:

$\sequence {a^{y_n} }$ increases to $a^y$.

So, for $n \ge N$:














\(\ds a^x\)

\(\le\)







\(\ds a^{x_n}\)





as $\sequence {a^{x_n} }$ decreases to $a^x$














\(\ds \)

\(<\)







\(\ds a^{y_n}\)





Power Function on Base Greater than One is Strictly Increasing: Rational Number














\(\ds \)

\(\le\)







\(\ds a^y\)





as $\sequence {a^{y_n} }$ increases to $a^y$



Hence the result.
$\blacksquare$





