# 

Source: https://proofwiki.org/wiki/Power_Function_is_Monotone/Rational_Number



Theorem
Let $a \in \R_{>0}$.
Let $f: \Q \to \R$ be the real-valued function defined as:

$\map f r = a^r$
where $a^r$ denotes $a$ to the power of $r$.

Then $f$ is monotone.
Further, $f$ is strictly monotone unless $a = 1$.


Proof
Case 1: $a > 1$
Let $a > 1$.
Then by Power Function on Base Greater than One is Strictly Increasing:

$f$ is strictly increasing.

By Strictly Increasing Mapping is Increasing:

$f$ is increasing.


Case 2 : $a = 1$
Let $a = 1$.
Then:

$\forall r \in \Q: a^r = 1$
and so $f$ is constant.
From Mapping is Constant iff Increasing and Decreasing:

$f$ is both increasing and decreasing.


Case 3: $0 < a < 1$
Let $0 < a < 1$.
Then by Power Function on Base between Zero and One is Strictly Decreasing:

$f$ is strictly decreasing.

By Strictly Decreasing Mapping is Decreasing:

$f$ is decreasing.


Conclusion
It has been shown that in all cases $f$ is either increasing or decreasing or both.
Thus by definition of monotone function, $f$ is monotone.

In either of the cases where $a \ne 1$, It has been shown that in all cases $f$ is either strictly increasing or strictly decreasing.
Thus by definition of strictly monotone function, $f$ is strictly monotone.
Hence the result.
$\blacksquare$





