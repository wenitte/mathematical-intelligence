# 

Source: https://proofwiki.org/wiki/Bernoulli_Process_as_Binomial_Distribution

Theorem
Let $\sequence {X_i}$ be a finite Bernoulli process of length $n$ such that each of the $X_i$ in the sequence is a Bernoulli trial with parameter $p$.

Then the number of successes in $\sequence {X_i}$ is modelled by a binomial distribution with parameters $n$ and $p$.

Hence it can be seen that:

$X \sim \Binomial 1 p$ is the same thing as $X \sim \Bernoulli p$


Proof
Consider the sample space $\Omega$ of all sequences $\sequence {X_i}$ of length $n$.
The $i$th entry of any such sequence is the result of the $i$th trial.
We have that $\Omega$ is finite.
Let us take the event space $\Sigma$ to be the power set of $\Omega$.

As the elements of $\Omega$ are independent, by definition of the Bernoulli process, we have that:

$\forall \omega \in \Omega: \map \Pr \omega = p^{\map s \omega} \paren {1 - p}^{n - \map s \omega}$
where $\map s \omega$ is the number of successes in $\omega$.

In the same way:

$\ds \forall A \in \Sigma: \map \Pr A = \sum_{\omega \mathop \in A} \map \Pr \omega$

Now, let us define the discrete random variable $Y_i$ as follows:

$\map {Y_i} \omega = \begin{cases}
1 & : \text {$\omega_i$ is a success} \\
0 & : \text {$\omega_i$ is a failure}
\end{cases}$
where $\omega_i$ is the $i$th element of $\omega$.
Thus, each $Y_i$ has image $\set {0, 1}$ and a probability mass function:

$\map \Pr {Y_i = 0} = \map \Pr {\set {\omega \in \Omega: \text {$\omega_i$ is a success} } }$

Thus we have:














\(\ds \map \Pr {Y_i = 1}\)

\(=\)







\(\ds \sum_{\omega: \text {$\omega_i$ success} } p^{\map s \omega} \paren {1 - p}^{n - \map s \omega}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^n \sum_{\substack {\omega: \text {$\omega_i$ success} \\ \map s \omega = r} } p^r \paren {1 - p}^{n - r}\)




















\(\ds \)

\(=\)







\(\ds \sum_{r \mathop = 1}^n \binom {n - 1} {r - 1} p^r \paren {1 - p}^{n - r}\)





as we already know the position of one success (namely $i$)














\(\ds \)

\(=\)







\(\ds p \sum_{r \mathop = 0}^{n - 1} \binom {n - 1} r p^r \paren {1 - p}^{\paren {n - 1} - r}\)





switching summation index














\(\ds \)

\(=\)







\(\ds p \paren {p + \paren {1 - p} }^{n - 1}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds p\)










Then:

$\map \Pr {Y_i = 0} = 1 - \map \Pr {Y_i = 1} = 1 - p$

So (by a roundabout route) we have confirmed that $Y_i$ has the Bernoulli distribution with parameter $p$.

Now, let us define the random variable:

$\ds \map {S_n} \omega = \sum_{i \mathop = 1}^n \map {Y_i} \omega$
By definition:

$\map {S_n} \omega$ is the number of successes in $\omega$
$S_n$ takes values in $\set {0, 1, 2, \ldots, n}$ (as each $Y_i$ can be $0$ or $1$).
Also, we have that:














\(\ds \map \Pr {S_n = k}\)

\(=\)







\(\ds \map \Pr {\set {\omega \in \Omega: \map s \omega = k} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\omega: \map s \omega \mathop = k} \map \Pr \omega\)




















\(\ds \)

\(=\)







\(\ds \sum_{\omega: \map s \omega \mathop = k} p^k \paren {1 - p}^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \binom n k p^k \paren {1 - p}^{n - k}\)









Hence the result.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.2$: Examples: Example $11$




