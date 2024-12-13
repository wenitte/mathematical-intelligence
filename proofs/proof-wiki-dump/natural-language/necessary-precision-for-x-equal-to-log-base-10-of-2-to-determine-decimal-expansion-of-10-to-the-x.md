# 

Source: https://proofwiki.org/wiki/Necessary_Precision_for_x_equal_to_log_base_10_of_2_to_determine_Decimal_expansion_of_10_to_the_x

Theorem
Let $b = 10$.
Let $x \approx \log_{10} 2$.
Let it be necessary to calculate the decimal expansion of $x$ to determine the first $3$ decimal places of $b^x$.

An infinite number of decimal places of $x$ would in fact be necessary.


Proof
This is a trick question:

How many decimal places of accuracy of $x$ are needed to determine the first $3$ decimal places of $b^x$?

We have that $b^x = 10^{\log_{10} 2} = 2$.

Let $x_a < x < x_b$, where $x_a$ and $x_b$ are ever closer approximations to $x$.
Then:

$x_a$ begins $1 \cdotp 999 \ldots$
$x_b$ begins $2 \cdotp 000 \ldots$
and it will not be possible to achieve the full expansion of $b^x$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms: Exercise $11$




