# 

Source: https://proofwiki.org/wiki/Lifting_The_Exponent_Lemma/Lemma

Lemma
Let $x, y \in \Z$ be distinct integers.
Let $p$ be an odd prime.
Let:

$p \divides x - y$
and:

$p \nmid x y$.

Then 

$\map {\nu_p} {x^p - y^p} = \map {\nu_p} {x - y} + 1$
where $\nu_p$ denotes $p$-adic valuation.


Proof
Let $\map {\nu_p} {x - y} = k$.
Then $x=p^k m + y$ where $p \nmid m$.
We have:














\(\ds x^p - y^p\)

\(=\)







\(\ds (p^k m + y)^p - y^p\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^p \paren {\binom p i \paren {p^k m}^{p - i} y^i} - y^p\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{p - 2} \paren {\binom p i \paren {p^k m}^{p - i} y^i} + \binom p {p - 1} \paren {p^k m} y^{p - 1}\)





picking out the last two terms from the summation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{p - 2} \paren {\binom p i \paren {p^k m}^{p - i} y^i} + p^{k + 1} m y^{p - 1}\)










Note that all terms in the above expression have a factor of $p$ to the order at least $k+1$.
So, $p^{k + 1} \mid x^p - y^p$.

Also note that all terms in the summation have a factor of $p$ to the order at least $k + 2$.
But in the term $p^{k + 1} m y^{p - 1}$, since $p \nmid m$ and $p \nmid y$, we have:

$p^{k + 2} \nmid p^{k + 1} m y^{p - 1}$
So:

$p^{k + 2} \nmid x^p - y^p$

So by definition of $p$-adic valuation:

$\map {\nu_p} {x^p - y^p} = k + 1$
$\blacksquare$


Sources
July 1904: George David Birkhoff and Harry Schultz Vandiver: On the Integral Divisors of $a^n - b^n$ (Ann. Math. Vol. 5: pp. 173 – 180)  www.jstor.org/stable/2007263: Theorem $\text{III}$.




