The given proof is quite complex, but let's break it down into natural language.

Firstly, the proof examines an infinite product of sine functions. It claims that this infinite product can be equivalently represented as a formula: sin(pi*x) equals the product of pi*x and an infinite product, with the terms of the latter taking the form 1 minus x^2 over n^2, with n ranging from 1 to infinity.

Next, the right-hand side (RHS) of this equation is expanded out. Denoting this expanded form as R, it becomes the product of pi*x and a series of terms. These terms take the form of 1 minus x^2 divided by each increasing perfect square (4, 9, 16, and so on).

Following from this, R is rewritten in an alternate form (R_alt). In this alternate form, R is equal to pi*x times an infinite series, beginning with 1 and each subsequent term adding the reciprocal of the next perfect square (1/4, 1/9, 1/16, etc.) to the series. Following this, an additional term is added: pi*x^3 times another infinite series. The first term of this second series is 1/1.4, and each subsequent term adds the reciprocal of the product of the next number in the series and that number squared to the sum (1/4.9, and so on). This pattern continues indefinitely.

Subsequently, the left-hand side (LHS) - the sin(pi*x) - is expanded into a power series (L) in decreasing powers of pi*x. The first term of the series is pi*x; the subsequent terms alternate in sign and increase in power by 2, with the denominator of each term being the factorial of the term's power (3!, 5!, etc.). 

Note that factorial of a number n (denoted as n!) is the product of all positive integers less than or equal to n.

The proof then validates that the coefficients of x^3 term on both sides of the equation match (denoted as C), thereby asserting the equality is maintained. 

At the end, the proof introduces the concept of the Riemann Zeta Function at 2, denoted as ζ(2). This is shown to equal the sum of the reciprocals of all positive integers squared, which is known to equal π^2/6. This brings the proof to its conclusion. 

This proof thus elegantly uses the technique of comparing the coefficients in power series, and links product of sin functions, power series, and the value of ζ(2). It is noteworthy mainly due to the wide variety of mathematical areas it touches upon to verify its assertion.