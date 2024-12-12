# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Theorem



Theorem
Let the probability of the occurrence of an event be $p$.
Let $n$ independent trials be made, with $k$ successes.

Then:

$\ds \lim_{n \mathop \to \infty} \frac k n = p$


Proof
Let the random variable $k$ have the binomial distribution with parameters $n$ and $p$, that is:

$k \sim \Binomial n p$
where $k$ denotes the number of successes of the $n$ independent trials of the event with probability $p$.

From Expectation of Binomial Distribution:

$\expect k = n p \leadsto \dfrac 1 n \expect k = p$
Expectation is Linear gives:

$ \expect {\dfrac k n} = p =: \mu$

Similarly, from Variance of Binomial Distribution:

$\var k = n p \paren {1 - p} \leadsto \dfrac 1 {n^2} \var k = \dfrac {p \paren {1 - p} } n$
From Variance of Linear Combination of Random Variables:

$\var {\dfrac k n} = \dfrac {p \paren {1 - p} } n =: \sigma^2$

By applying the Bienaymé-Chebyshev Inequality to $\dfrac k n$, we have for any $l > 0$:

$\map \Pr {\size {\dfrac k m - \mu} \ge l \sigma} \le \dfrac 1 {l^2}$
Now, let $\epsilon > 0$ and choose $l = \dfrac \epsilon \sigma$, to get:

$\map \Pr {\size {\dfrac k m - \mu} \ge \dfrac \epsilon \sigma \cdot \sigma} \le \dfrac {\sigma^2} {\epsilon^2}$
Simplifying and plugging in the values of $\mu$ and $\sigma^2$ defined above yields:

$\map \Pr {\size {\dfrac k n - p} \ge \epsilon} \le \dfrac {p \paren {1 - p} } {n \epsilon^2}$
Scaling both sides by $-1$ and adding $1$ to both sides yields:

$1 - \map \Pr {\size {\dfrac k n - p} \ge \epsilon} \ge 1 - \dfrac {p \paren {1 - p} } {n \epsilon^2}$
Applying Union of Event with Complement is Certainty to the left hand side:

$\map \Pr {\size {\dfrac k n - p} \le \epsilon} \ge 1 - \dfrac {p \paren {1 - p} } {n\epsilon^2}$
Taking the limit as $n$ approaches infinity on both sides, we have:

$\ds \lim_{n \mathop \to \infty} \map \Pr {\size {\frac k n - p} < \epsilon} = 1$
$\blacksquare$


Also presented as
Bernoulli's Theorem can also be presented in the form:

$\forall \epsilon \in \R_{>0}: \ds \lim_{n \mathop \to \infty} \map \Pr {\size {\frac k n - p} < \epsilon} = 1$


Also known as
Bernoulli's Theorem is also popularly known as the Law of Large Numbers.
It also needs to be noted that it is a special case of the Weak Law of Large Numbers, also known as Khinchin's Law, and so also goes under that name.


Also see
Khinchin's Law, otherwise known as the Weak Law of Large Numbers
Kolmogorov's Law, otherwise known as the Strong Law of Large Numbers


Source of Name
This entry was named for Jacob Bernoulli.


Historical Note
Bernoulli's Theorem was introduced by Jacob Bernoulli in his Ars Conjectandi of $1713$.


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 6$: The Brachistochrone. Fermat and the Bernoullis
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.20$: The Bernoulli Brothers
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Bernoulli's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Bernoulli's theorem
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Bernoulli's Theorem




