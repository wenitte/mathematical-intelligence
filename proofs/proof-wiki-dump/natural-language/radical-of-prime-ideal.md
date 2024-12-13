# 

Source: https://proofwiki.org/wiki/Radical_of_Prime_Ideal



Theorem
Let $R$ be a commutative ring with unity.
Let $\mathfrak p$ be a prime ideal of $R$.
Let $\map \Rad {\mathfrak p}$ be the radical of $\mathfrak p$.

Then:

$\map \Rad {\mathfrak p} = \mathfrak p$
Proof
$\supseteq$
Let $x \in \mathfrak p$.
Since $x = x^1$, by Definition 1 of Radical of Ideal of Ring:

$x \in \map \Rad {\mathfrak p}$

$\Box$

$\subseteq$
Let $x \in \map \Rad {\mathfrak p}$.
Then:

$\exists n \in \N_{>0} : x^n \in \mathfrak p$
Aiming for a contradiction, suppose $x \notin p$.
Then by Definition 3 of Prime Ideal:

$x^n \notin \mathfrak p$
which contradicts the assertion that $x^n \in \mathfrak p$.
Thus:

$x \in \mathfrak p$
$\blacksquare$





