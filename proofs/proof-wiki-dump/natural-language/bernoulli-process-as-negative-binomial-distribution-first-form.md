# 

Source: https://proofwiki.org/wiki/Bernoulli_Process_as_Negative_Binomial_Distribution/First_Form

Theorem
Let $\sequence {X_i}$ be a Bernoulli process with parameter $p$.
Let $\EE$ be the experiment which consists of performing the Bernoulli trial $X_i$ until a total of $n$ failures have been encountered.
Let $X$ be the discrete random variable defining the number of successes before $n$ failures have been encountered.

Then $X$ is modeled by a negative binomial distribution of the first form.


Proof
The number of Bernoulli trials may be as few as $0$, so the image is correct:

$\Img X = \set {0, 1, 2, \ldots}$
If $X$ takes the value $x$, then there must have been $n + x$ trials altogether.
So, after $n + x - 1$ trials, there must have been $n - 1$ failures, as (from the description of the experiment) the last trial is a failure.
So the probability of the occurrence of the event $\sqbrk {X = x}$ is given by the binomial distribution, as follows:

$\map {p_X} x = \dbinom {n + x - 1} {n - 1} p^x \paren {1 - p}^n$
where $x \in \set {0, 1, 2, \ldots}$
Hence the result, by definition of first form of the negative binomial distribution.
$\blacksquare$





