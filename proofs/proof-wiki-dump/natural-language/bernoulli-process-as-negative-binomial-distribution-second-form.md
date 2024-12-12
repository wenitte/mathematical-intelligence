# 

Source: https://proofwiki.org/wiki/Bernoulli_Process_as_Negative_Binomial_Distribution/Second_Form

Theorem
Let $\sequence {X_i}$ be a Bernoulli process with parameter $p$.
Let $\EE$ be the experiment which consists of performing the Bernoulli trial $X_i$ as many times as it takes to achieve a total of $n$ successes, and then stops.
Let $Y$ be the discrete random variable defining the number of trials before $n$ successes have been achieved.

Then $X$ is modeled by a negative binomial distribution of the second form.


Proof
First note that the number of Bernoulli trials has to be at least $n$, so the image is correct: $\Img X = \set {n, n + 1, n + 2, \ldots}$.
Now, note that if $X$ takes the value $x$, then in the first $x - 1$ trials there must have been $n - 1$ successes.
Hence there must have been $x - n$ failures, and so a success happens at trial number $x$.
So the probability of the occurrence of the event $\sqbrk {X = x}$ is given by the binomial distribution, as follows:

$\map {p_X} x = \dbinom {x - 1} {n - 1} \paren {1 - p}^{x - n} p^n$
where $x \in \set {k, k + 1, k + 2, \ldots}$
Hence the result, by definition of second form of the negative binomial distribution.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.2$: Examples: Example $15$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): negative binomial distribution




