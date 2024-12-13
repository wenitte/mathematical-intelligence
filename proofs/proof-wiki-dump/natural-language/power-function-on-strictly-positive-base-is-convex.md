# 

Source: https://proofwiki.org/wiki/Power_Function_on_Strictly_Positive_Base_is_Convex

Theorem
Let $a \in \R_{>0}$ be a strictly positive real number.
Let $f: \R \to \R$ be the real function defined as:

$\map f x = a^x$
where $a^x$ denotes $a$ to the power of $x$.

Then $f$ is convex.


Proof
Let $x, y \in \R$.

Note that, from Power of Positive Real Number is Positive: Real Number:

$\forall t \in \R: a^t > 0$.
So:














\(\ds a^{\paren {x + y} / 2}\)

\(=\)







\(\ds \sqrt {a^{x + y} }\)





Exponent Combination Laws: Power of Power: Proof 2














\(\ds \)

\(=\)







\(\ds \sqrt {a^x a^y}\)





Exponent Combination Laws: Product of Powers: Proof 2














\(\ds \)

\(\le\)







\(\ds \frac {a^x + a^y} 2\)





Cauchy's Mean Theorem



Hence $a^x$ is midpoint-convex.

Further, from Power Function on Strictly Positive Base is Continuous: Real Power, $a^x$ is continuous.

Thus, from Continuous Midpoint-Convex Function is Convex, $a^x$ is convex.
$\blacksquare$





