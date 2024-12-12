# 

Source: https://proofwiki.org/wiki/Characteristic_of_Common_Logarithm_of_Number_Less_than_1

Theorem
Let $x \in \R_{>0}$ be a (strictly) positive real number such that $x < 1$.
The characteristic of its common logarithm $\log_{10} x$ is equal to one less than the number of zero digits to the immediate right of the decimal point of $x$.


Proof
Let $x$ be expressed in scientific notation:

$x = a \times 10^{-e}$
where:

$1 \le a < 10$
$e \in \Z_{>0}$
From Range of Common Logarithm of Number between 1 and 10:

$0 \le \log_{10} a < 1$
The characteristic of $\log_{10} x$ equals $\map {\log_{10} } {10^{-e} } = \overline e$.
Thus the characteristic of $\log_{10} x$ is equal to the exponent of $x$.

When $e = -1$, we have that:

$0 \cdotp 1 \le x < 1$
and so $x$ is in the form:

$x = 0 \cdotp rstu \cdotp$
where $rstu \ldots$ are the digits of $x$ following the decimal point such that $r > 0$.
Thus when $e = -1$ there are no zero digits to the immediate right of the decimal point of $x$
That is $e$ is one less than the number of zero digits to the immediate right of the decimal point of $x$.

By Multiplication by Power of 10 by Moving Decimal Point, multiplication by $10^{-e}$ is the same as moving the decimal point $e$ places to the right.

Hence $a \times 10^{-e}$ has $e - 1$ more digits to the left of the decimal point than $a$ does.
That is: $e - 1$.
Hence the result.
$\blacksquare$


Sources
1972: Murray R. Spiegel and R.W. Boxer: Theory and Problems of Statistics (SI ed.) ... (previous) ... (next): Chapter $1$: Logarithms




