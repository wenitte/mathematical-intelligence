# 

Source: https://proofwiki.org/wiki/Characteristic_of_Common_Logarithm_of_Number_Greater_than_1

Theorem
Let $x \in \R_{>1}$ be a (strictly) positive real number greater than $1$.
The characteristic of its common logarithm $\log_{10} x$ is equal to one less than the number of digits to the left of the decimal point of $x$.


Proof
Let $x$ be expressed in scientific notation:

$x = a \times 10^e$
where:

$1 \le a < 10$
$e \in \Z_{\ge 0}$
From Range of Common Logarithm of Number between 1 and 10:

$0 \le \log_{10} a < 1$
The characteristic of $\log_{10} x$ equals $\map {\log_{10} } {10^e} = e$.
Thus the characteristic of $\log_{10} x$ is equal to the exponent of $x$.
By Multiplication by Power of 10 by Moving Decimal Point, multiplication by $10^e$ is the same as moving the decimal point $e$ places to the right.
Hence $a \times 10^e$ has $e$ more digits to the left of the decimal point than $a$ does.
That is: $e + 1$.
Hence the result.
$\blacksquare$


Sources
1972: Murray R. Spiegel and R.W. Boxer: Theory and Problems of Statistics (SI ed.) ... (previous) ... (next): Chapter $1$: Logarithms




