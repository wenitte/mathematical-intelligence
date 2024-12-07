The Central Limit Theorem is a fundamental theorem in probability theory and statistics which states that the sum of a large number of independent and identically distributed (iid) variables each with mean 0 and finite non-zero variance, when standardized, will have a distribution close to the normal distribution (also known as Gaussian distribution).

This theorem is equivalent to the following detailed mathematical statement:

We begin by considering a sequence of random variables, X_1, X_2, ..., X_n where each variable is independent and identically distributed (iid) with expected value (or mean) = 0, and having a common variance = σ².

The sum of these variables, denoted by S_n, can be written as the addition of each X_i from i = 1 to n. We further define a standardization of the sum, denoted by Z_n, by dividing S_n by the product of 'σ' and the square root of 'n'.

The Central Limit Theorem asserts that, as n approaches infinity, the probability that Z_n is less than or equal to any real number 'x' approaches the cumulative distribution of the standard normal distribution (which is denoted by 'Φ(x)').

Next, the proof pivots upon the concept of the 'moment generating function' (or the expectation of the exponential of your random variable). In general, the moment generating function of a variable X (denoted by 'M(t)') can take a different shape depending on whether X is a discrete or continuous variable.

In the case of X being a discrete variable, M(t) is the sum of 'e' to the power of 't' times a given value 'x' multiplied by the probability of X equals 'x'. For X being a continuous variable, it would be the integral of the same function over all possible values of X.

A key feature of the moment generating function is its uniqueness: if two variables share the same moment generating function in a neighborhood about zero, then the two random variables must have the same distribution.

Various properties of the variable X can be extracted through derivatives of the moment generating function, such as the 'r'-th moment of X can be found as the 'r'-th derivative of M(t) evaluated at '0'.

In the proof, we first standardize our sum S_n to Z_n such that Z_n has a mean of 0 and a variance of 1.

For the moment generating function of S_n and Z_n, we can express them in terms of the moment generating function of an individual variable X_i (M(t)).

With the help of Taylor expansion –– a way to approximate functions –– M(t) can be expanded and approximated into terms related to the '0'-th, first, and second moments.

As the numbers of variables become infinitely large (n reaching infinity), the excess term (εₙ) in the expansion becomes negligible compared to t²/n. This leads to the moment generating function of Z_n trending towards 'e' to the power 't²/2', which is the moment generating function of a standard normal distribution.

Since the moment generating function uniquely determines the distribution, and the limiting moment generating function of Z_n matches the one of the standard normal distribution, we conclude that the standardized sum, Z_n, will converge in distribution to the standard normal distribution N(0,1) as n tends to infinity, bringing the proof to closure.