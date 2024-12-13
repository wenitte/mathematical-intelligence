# 

Source: https://proofwiki.org/wiki/Logarithm_of_Power/Natural_Logarithm/Proof_1

Theorem
Let $x \in \R$ be a strictly positive real number.
Let $a \in \R$ be a real number such that $a > 1$.
Let $r \in \R$ be any real number.
Let $\ln x$ be the natural logarithm of $x$.

Then:

$\map \ln {x^r} = r \ln x$


Proof
Consider the function $\map f x = \map \ln {x^r} - r \ln x$.
Then from:

The definition of the natural logarithm
The Fundamental Theorem of Calculus
The Power Rule for Derivatives
The Chain Rule for Derivatives:
$\forall x > 0: \map {f'} x = \dfrac 1 {x^r} r x^{r-1} - \dfrac r x = 0$
Thus from Zero Derivative implies Constant Function, $f$ is constant:

$\forall x > 0: \map \ln {x^r} - r \ln x = c$
To determine the value of $c$, put $x = 1$.
From Logarithm of 1 is 0:

$\ln 1 = 0$
Thus:

$c = \ln 1 - r \ln 1 = 0$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 14.2 \ \text{(ii)}$
For a video presentation of the contents of this page, visit the Khan Academy.




